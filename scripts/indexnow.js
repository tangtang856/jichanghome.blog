/**
 * IndexNow 自动化提交工具 (支持 Bing / Yandex / Seznam)
 * 运行方式: npm run indexnow [url1 url2 ...] 或 node scripts/indexnow.js --all
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'jichanghome.blog';
const KEY = '8b9f71c11e3b48fbb2305a2e99d821ae';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const CACHE_FILE = path.join(__dirname, '../.indexnow-cache.json');

// 检查本地 key 文件是否存在
const keyFilePath = path.join(__dirname, `../${KEY}.txt`);
if (!fs.existsSync(keyFilePath)) {
  fs.writeFileSync(keyFilePath, KEY, 'utf8');
}

// 加载历史提交记录（防止无差别重复提交全量 URL）
function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

/**
 * 核心 HTTP 请求函数（支持重试）
 */
function sendIndexNowRequest(urlList, retryCount = 2) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'jichanghome.blog-IndexNow-Client/1.0'
      }
    };

    console.log(`[IndexNow] 正在向 api.indexnow.org 提交 ${urlList.length} 个 URL...`);

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[IndexNow] HTTP 状态码: ${res.statusCode} (${res.statusMessage})`);
        
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`[IndexNow] ✅ 提交已被 IndexNow 接收受理！`);
          console.log(`[IndexNow] ⚠️ 提示：IndexNow 接收成功代表搜索引擎已收到抓取提示，但最终收录仍取决于 Bing 算法质量评估。`);
          resolve({ status: res.statusCode, body });
        } else if (res.statusCode === 400) {
          console.error(`[IndexNow] ❌ 400 格式错误 (Invalid Format):`, body);
          reject(new Error(`400 Invalid Format: ${body}`));
        } else if (res.statusCode === 403) {
          console.error(`[IndexNow] ❌ 403 密钥无效或 Key 文件不可访问 (Key not valid)`);
          reject(new Error(`403 Key not valid`));
        } else if (res.statusCode === 422) {
          console.error(`[IndexNow] ❌ 422 URL 不属于当前 Host:`, body);
          reject(new Error(`422 Unprocessable Entity`));
        } else {
          console.warn(`[IndexNow] ⚠️ 收到未知响应 ${res.statusCode}:`, body);
          if (retryCount > 0) {
            console.log(`[IndexNow] 将在 3 秒后重试 (剩余重试次数: ${retryCount})...`);
            setTimeout(() => {
              sendIndexNowRequest(urlList, retryCount - 1).then(resolve).catch(reject);
            }, 3000);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${body}`));
          }
        }
      });
    });

    req.on('error', (err) => {
      console.error(`[IndexNow] 网络请求失败:`, err.message);
      if (retryCount > 0) {
        console.log(`[IndexNow] 正在重试 (剩余: ${retryCount})...`);
        setTimeout(() => {
          sendIndexNowRequest(urlList, retryCount - 1).then(resolve).catch(reject);
        }, 3000);
      } else {
        reject(err);
      }
    });

    req.write(postData);
    req.end();
  });
}

// 主逻辑
async function main() {
  const args = process.argv.slice(2);
  const cache = loadCache();
  const now = new Date().toISOString();

  let targetUrls = [];

  if (args.includes('--all')) {
    // 强制提交全站
    const { ALL_PAGES } = require('./build-sitemap');
    targetUrls = ALL_PAGES.map(p => p.path === '' ? `https://${HOST}/` : `https://${HOST}/${p.path}`);
    console.log(`[IndexNow] 模式: --all 强制批量提交全站 URL (共 ${targetUrls.length} 个)`);
  } else if (args.length > 0 && !args[0].startsWith('--')) {
    // 提交用户指定的 URL
    targetUrls = args.map(u => u.startsWith('http') ? u : `https://${HOST}/${u.replace(/^\//, '')}`);
    console.log(`[IndexNow] 模式: 指定 URL 提交 (${targetUrls.join(', ')})`);
  } else {
    // 智能增量提交：仅提交最近修改或尚未在缓存中成功提交的页面
    const { ALL_PAGES } = require('./build-sitemap');
    targetUrls = ALL_PAGES
      .map(p => p.path === '' ? `https://${HOST}/` : `https://${HOST}/${p.path}`)
      .filter(url => {
        // 如果从未提交过，或距离上次提交超过 7 天
        if (!cache[url]) return true;
        const lastSubmitted = new Date(cache[url]);
        const daysDiff = (Date.now() - lastSubmitted.getTime()) / (1000 * 3600 * 24);
        return daysDiff >= 7;
      });

    if (targetUrls.length === 0) {
      console.log(`[IndexNow] 所有页面均在近期成功提交过，无需重复轰炸 API。`);
      console.log(`[IndexNow] 如需强制全量提交，请执行: node scripts/indexnow.js --all`);
      return;
    }

    console.log(`[IndexNow] 模式: 智能增量提交 (发现 ${targetUrls.length} 个待推送 URL)`);
  }

  try {
    await sendIndexNowRequest(targetUrls);
    // 记录缓存
    targetUrls.forEach(url => {
      cache[url] = now;
    });
    saveCache(cache);
    console.log(`[IndexNow] 缓存记录已更新至 .indexnow-cache.json`);
  } catch (err) {
    console.error(`[IndexNow] 提交未完成:`, err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { sendIndexNowRequest };

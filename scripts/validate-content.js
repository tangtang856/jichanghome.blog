const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
let issues = [];

console.log('[validate-content] 开始验证全站内容真实性、无占位符与数据完整性...');

// 1. 递归获取所有 HTML 文件
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts' && file !== 'docs') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);

htmlFiles.forEach(file => {
  const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // 检查空白页面（小于 400 字节）
  if (Buffer.byteLength(content, 'utf8') < 400) {
    issues.push({ file: relPath, reason: '文件体积过小，可能为空白页面' });
  }

  // 检查未替换的模板占位符
  if (content.includes('{{') || content.includes('}}')) {
    issues.push({ file: relPath, reason: '检测到未替换的模板插值变量 {{...}}' });
  }

  // 检查 JS 异常残留
  if (content.includes('undefined') && !content.includes('typeof undefined')) {
    // 允许常规说明，但在正文模板渲染中排查异常
    const undefMatches = content.match(/<[^>]+>\s*undefined\s*<\/[^>]+>/g);
    if (undefMatches) {
      issues.push({ file: relPath, reason: `检测到 HTML 标签内渲染了 'undefined': ${undefMatches.join(', ')}` });
    }
  }

  if (content.includes('NaN')) {
    const nanMatches = content.match(/¥NaN|NaNGB/g);
    if (nanMatches) {
      issues.push({ file: relPath, reason: `检测到数值计算异常 'NaN': ${nanMatches.join(', ')}` });
    }
  }
});

// 2. 验证机场数据库完整性
const airportsJsonPath = path.join(ROOT_DIR, 'data/airports.json');
if (!fs.existsSync(airportsJsonPath)) {
  issues.push({ file: 'data/airports.json', reason: '数据库文件丢失' });
} else {
  const airports = JSON.parse(fs.readFileSync(airportsJsonPath, 'utf8'));
  if (!Array.isArray(airports) || airports.length === 0) {
    issues.push({ file: 'data/airports.json', reason: '机场数据库为空' });
  } else {
    airports.forEach(a => {
      if (!a.id || !a.name || !a.slug || !a.description) {
        issues.push({ file: 'data/airports.json', reason: `机场 ${a.id || '未知'} 缺少核心基础字段` });
      }
      if (!Array.isArray(a.plans) || a.plans.length === 0) {
        issues.push({ file: 'data/airports.json', reason: `机场 ${a.name} 未录入任何套餐计划` });
      } else {
        a.plans.forEach(p => {
          if (typeof p.price !== 'number' || isNaN(p.price)) {
            issues.push({ file: 'data/airports.json', reason: `机场 ${a.name} 套餐 ${p.name} 价格无效` });
          }
          if (typeof p.unitPricePerGb !== 'number' || isNaN(p.unitPricePerGb)) {
            issues.push({ file: 'data/airports.json', reason: `机场 ${a.name} 套餐 ${p.name} 单GB价格计算无效` });
          }
        });
      }
    });
  }
}

// 3. 验证 sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  issues.push({ file: 'sitemap.xml', reason: 'sitemap.xml 不存在' });
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('</urlset>')) {
    issues.push({ file: 'sitemap.xml', reason: 'sitemap.xml 格式错误' });
  }
  if (sitemapContent.includes('404.html')) {
    issues.push({ file: 'sitemap.xml', reason: 'sitemap.xml 误包含了 404 错误页面' });
  }
}

// 4. 验证 robots.txt
const robotsPath = path.join(ROOT_DIR, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  issues.push({ file: 'robots.txt', reason: 'robots.txt 不存在' });
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes('Sitemap: https://jichanghome.blog/sitemap.xml')) {
    issues.push({ file: 'robots.txt', reason: 'robots.txt 未正确声明官方 Sitemap URL' });
  }
}

if (issues.length > 0) {
  console.error(`[validate-content] ❌ 发现 ${issues.length} 个内容校验问题：`);
  issues.forEach(i => console.error(`  - [${i.file}] : ${i.reason}`));
  process.exit(1);
} else {
  console.log(`[validate-content] ✅ 全部通过！数据模型完整、无占位符残留、Sitemap 与 Robots 合规！`);
}

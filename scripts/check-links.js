const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
let totalLinksChecked = 0;
let errors = [];

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts' && file !== 'docs' && file !== 'dist') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
console.log(`[check-links] 开始扫描 ${htmlFiles.length} 个 HTML 文件的内部链接与相对路径...`);

htmlFiles.forEach(filePath => {
  const relFilePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const fileDir = path.dirname(filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // 正则提取所有 href 和 src
  const linkRegex = /(?:href|src)=["']([^"']+)["']/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const rawLink = match[1].trim();

    // 忽略外部链接、锚点、空链接、mailto/tel
    if (rawLink.startsWith('http://') || rawLink.startsWith('https://') || rawLink.startsWith('mailto:') || rawLink.startsWith('tel:') || rawLink.startsWith('#') || rawLink.startsWith('javascript:')) {
      continue;
    }

    totalLinksChecked++;

    // 1. 严格检查：严禁以 / 开头的根绝对路径
    if (rawLink.startsWith('/')) {
      errors.push({
        file: relFilePath,
        link: rawLink,
        reason: '严禁以 "/" 开头的绝对路径，必须使用标准相对路径以支持 file:// 与离线直接双击'
      });
      continue;
    }

    // 2. 检查本地相对目标文件是否存在
    const cleanLink = rawLink.split('?')[0].split('#')[0];
    if (!cleanLink) continue;

    const targetFullPath = path.resolve(fileDir, cleanLink);
    if (!fs.existsSync(targetFullPath)) {
      errors.push({
        file: relFilePath,
        link: rawLink,
        resolved: path.relative(ROOT_DIR, targetFullPath).replace(/\\/g, '/'),
        reason: '链接指向的本地目标文件不存在 (404 Dead Link)'
      });
    }
  }
});

console.log(`[check-links] 共检查 ${totalLinksChecked} 处内部跳转与资源引用`);

if (errors.length > 0) {
  console.error(`[check-links] ❌ 发现 ${errors.length} 处路径或失效链接错误：`);
  errors.forEach(e => console.error(`  - [${e.file}] -> ${e.link} : ${e.reason}`));
  process.exit(1);
} else {
  console.log(`[check-links] ✅ 全部通过！100% 相对路径且无任何死链！`);
}

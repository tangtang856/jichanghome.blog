const fs = require('fs');
const path = require('path');

console.log('[post-build] 开始处理 Astro 构建产物 (dist/)...');

const distDir = path.resolve(__dirname, '../dist');
const rootDir = path.resolve(__dirname, '..');

if (!fs.existsSync(distDir)) {
  console.error('[post-build] 错误: dist 目录不存在，请先运行 astro build');
  process.exit(1);
}

// 递归获取 dist 目录下所有 HTML 文件
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`[post-build] 正在转换 ${htmlFiles.length} 个页面的路径为 100% 相对路径...`);

htmlFiles.forEach(filePath => {
  const relPath = path.relative(distDir, filePath).replace(/\\/g, '/');
  const segments = relPath.split('/');
  const depth = segments.length - 1;
  const relPrefix = depth === 0 ? './' : '../'.repeat(depth);

  let content = fs.readFileSync(filePath, 'utf8');

  // 将 href="/" 转换为 href="${relPrefix}index.html"
  content = content.replace(/href=["']\/["']/g, `href="${relPrefix}index.html"`);

  // 将 href="/path/" 转换为相对路径 href="${relPrefix}path/index.html"
  content = content.replace(/href=["']\/([a-zA-Z0-9_\-\/]+)\/["']/g, (match, p1) => {
    return `href="${relPrefix}${p1}/index.html"`;
  });

  // 将 href="/path" (非结尾斜杠) 转换为 href="${relPrefix}path"
  content = content.replace(/href=["']\/([a-zA-Z0-9_\-\.]+)(?<!https?:\/\/[^"']*)["']/g, (match, p1) => {
    if (p1.endsWith('.html') || p1.endsWith('.xml') || p1.endsWith('.txt')) {
      return `href="${relPrefix}${p1}"`;
    }
    return `href="${relPrefix}${p1}/index.html"`;
  });

  // 将 src="/path" 转换为 src="${relPrefix}path"
  content = content.replace(/src=["']\/([a-zA-Z0-9_\-\/\.]+)["']/g, (match, p1) => {
    return `src="${relPrefix}${p1}"`;
  });

  // 修复 _astro 资源的引用
  content = content.replace(/(href|src)=["']\/_astro\/([^"']+)["']/g, (match, attr, file) => {
    return `${attr}="${relPrefix}_astro/${file}"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

// 复制 dist 内容到 root
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 清理 rootDir/_astro 避免哈希变更残留
const rootAstroDir = path.join(rootDir, '_astro');
if (fs.existsSync(rootAstroDir)) {
  fs.rmSync(rootAstroDir, { recursive: true, force: true });
}

copyRecursive(distDir, rootDir);

// 修复 sitemap.xml 样式与命名
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath) && fs.existsSync(path.join(distDir, 'sitemap-index.xml'))) {
  fs.copyFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapPath);
}

console.log('[post-build] ✅ dist 产物已同步至项目根目录，100% 相对路径转换完成！');

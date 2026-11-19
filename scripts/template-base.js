const fs = require('fs');
const path = require('path');

// 基础常量配置
const DOMAIN = 'https://jichanghome.blog';
const AIRPORTS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/airports.json'), 'utf8'));

// 辅助计算相对路径前缀
function getRelPrefix(depth) {
  if (depth === 0) return '';
  return '../'.repeat(depth);
}

// 通用页面头部构建器
function buildHead({ title, description, canonicalPath, depth = 0, schema = null }) {
  const rel = getRelPrefix(depth);
  const canonicalUrl = `${DOMAIN}/${canonicalPath}`.replace(/\/+/g, '/').replace('https:/', 'https://');
  
  const schemaScript = schema ? `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>` : '';

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / 社交分享 -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="机场之家 - 中文网络节点与梯子推荐门户">
  <meta property="og:locale" content="zh_CN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- 纯净原生样式与字体 (绝对相对路径加载，完美兼容本地 file:// 协议与线上) -->
  <link rel="stylesheet" href="${rel}css/style.css">
  ${schemaScript}
</head>
<body>
`;
}

// 通用导航栏 Header
function buildHeader(depth = 0, currentNav = '') {
  const rel = getRelPrefix(depth);
  return `  <!-- 全站通用导航栏 -->
  <header class="site-header">
    <div class="container nav-wrapper">
      <a href="${rel}index.html" class="site-logo">
        <span class="logo-badge">JH</span>
        <span>机场之家</span>
      </a>

      <!-- 桌面端菜单 -->
      <nav class="desktop-nav" aria-label="主导航">
        <a href="${rel}index.html" class="nav-link ${currentNav === 'home' ? 'active' : ''}">首页</a>
        <a href="${rel}recommend/index.html" class="nav-link ${currentNav === 'recommend' ? 'active' : ''}">机场推荐</a>
        <a href="${rel}ranking/index.html" class="nav-link ${currentNav === 'ranking' ? 'active' : ''}">节点排行</a>
        <a href="${rel}airport/index.html" class="nav-link ${currentNav === 'airport' ? 'active' : ''}">品牌评测</a>
        <a href="${rel}compare/index.html" class="nav-link ${currentNav === 'compare' ? 'active' : ''}">机场对比</a>
        <a href="${rel}guides/index.html" class="nav-link ${currentNav === 'guides' ? 'active' : ''}">使用教程</a>
        <a href="${rel}blog/index.html" class="nav-link ${currentNav === 'blog' ? 'active' : ''}">选型指南</a>
        <a href="${rel}compare/index.html" class="nav-btn-highlight">快速比价</a>
      </nav>

      <!-- 移动端汉堡按钮 -->
      <button class="menu-toggle" id="menuToggleBtn" aria-label="展开导航菜单" aria-expanded="false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- 移动端展开抽屉 -->
    <div class="mobile-nav-drawer" id="mobileDrawer">
      <nav class="mobile-nav-links" aria-label="移动端导航">
        <a href="${rel}index.html" class="mobile-nav-link">首页</a>
        <a href="${rel}recommend/index.html" class="mobile-nav-link">机场推荐专区</a>
        <a href="${rel}ranking/index.html" class="mobile-nav-link">节点综合排行</a>
        <a href="${rel}airport/index.html" class="mobile-nav-link">品牌独立评测</a>
        <a href="${rel}compare/index.html" class="mobile-nav-link">多维度对比工具</a>
        <a href="${rel}guides/index.html" class="mobile-nav-link">新手教程中心</a>
        <a href="${rel}blog/index.html" class="mobile-nav-link">精选博客文章</a>
        <a href="${rel}glossary/index.html" class="mobile-nav-link">术语与知识百科</a>
      </nav>
    </div>
  </header>
`;
}

// 通用页脚 Footer
function buildFooter(depth = 0) {
  const rel = getRelPrefix(depth);
  return `  <!-- 全站通用页脚 -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>机场之家 (jichanghome.blog)</h3>
          <p>专注于网络中继、专线网络、科学上网与海外学术/跨境网络加速的客观资讯平台。坚持独立测试、真实参数核验与拒绝虚假宣传。</p>
        </div>

        <div class="footer-col">
          <h4>推荐与排行</h4>
          <ul>
            <li><a href="${rel}recommend/budget/index.html">平价性价比机场</a></li>
            <li><a href="${rel}recommend/premium/index.html">IPLC/IEPL高端专线</a></li>
            <li><a href="${rel}recommend/ai/index.html">ChatGPT/AI专用节点</a></li>
            <li><a href="${rel}recommend/streaming/index.html">流媒体4K解锁专区</a></li>
            <li><a href="${rel}ranking/value/index.html">单位GB单价排行榜</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>教程与指南</h4>
          <ul>
            <li><a href="${rel}guides/windows/index.html">Windows客户端配置</a></li>
            <li><a href="${rel}guides/android/index.html">Android安卓手机教程</a></li>
            <li><a href="${rel}guides/ios/index.html">iOS小火箭Shadowrocket</a></li>
            <li><a href="${rel}guides/macos/index.html">macOS客户端配置</a></li>
            <li><a href="${rel}guides/troubleshooting/index.html">节点排障与连通性自检</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>透明度与规范</h4>
          <ul>
            <li><a href="${rel}editorial-policy/index.html">独立编辑政策</a></li>
            <li><a href="${rel}about/index.html">关于我们</a></li>
            <li><a href="${rel}contact/index.html">联系与反馈</a></li>
            <li><a href="${rel}disclaimer/index.html">免责声明</a></li>
            <li><a href="${rel}privacy-policy/index.html">隐私权保护政策</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 机场之家 (jichanghome.blog). 保留所有权利。内容仅供网络技术学习与跨境学术调研参考。</div>
        <div>测试数据与官方信息基于公开渠道核验，最后全站校验：2026年3月</div>
      </div>
    </div>
  </footer>

  <!-- 核心交互脚本 -->
  <script src="${rel}data/airports.js"></script>
  <script src="${rel}js/main.js"></script>
</body>
</html>
`;
}

// 辅助写入文件
function writePage(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[Generated] ${relPath}`);
}

module.exports = {
  DOMAIN,
  AIRPORTS,
  getRelPrefix,
  buildHead,
  buildHeader,
  buildFooter,
  writePage
};

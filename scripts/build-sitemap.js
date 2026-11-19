const fs = require('fs');
const path = require('path');
const { DOMAIN, writePage, AIRPORTS, buildHead, buildHeader, buildFooter } = require('./template-base');
const GUIDES = require('./data-guides');
const ALL_ARTICLES = require('./data-all-articles');

const INDEXNOW_KEY = '8b9f71c11e3b48fbb2305a2e99d821ae';

// 待收录的所有正式生产 URL 清单（排除 404 等页面）
const ALL_PAGES = [
  // 首页与主要专题
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'recommend/index.html', priority: '0.9', changefreq: 'weekly' },
  { path: 'recommend/budget/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'recommend/premium/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'recommend/beginner/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'recommend/stable/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'recommend/ai/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'recommend/streaming/index.html', priority: '0.8', changefreq: 'weekly' },

  // 排行榜
  { path: 'ranking/index.html', priority: '0.9', changefreq: 'weekly' },
  { path: 'ranking/overall/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'ranking/value/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'ranking/stable/index.html', priority: '0.8', changefreq: 'weekly' },
  { path: 'ranking/budget/index.html', priority: '0.8', changefreq: 'weekly' },

  // 对比工具
  { path: 'compare/index.html', priority: '0.9', changefreq: 'weekly' },

  // 14 家机场独立评测
  { path: 'airport/index.html', priority: '0.9', changefreq: 'weekly' },
  ...AIRPORTS.map(a => ({
    path: `airport/${a.slug}/index.html`,
    priority: '0.8',
    changefreq: 'weekly'
  })),

  // 30 篇教程中心
  { path: 'guides/index.html', priority: '0.8', changefreq: 'weekly' },
  ...GUIDES.map(g => ({
    path: `guides/${g.slug}/index.html`,
    priority: '0.8',
    changefreq: 'monthly'
  })),

  // 100 篇博客文章
  { path: 'blog/index.html', priority: '0.8', changefreq: 'weekly' },
  ...ALL_ARTICLES.map(a => ({
    path: `blog/${a.slug}/index.html`,
    priority: '0.8',
    changefreq: 'monthly'
  })),

  // 知识百科
  { path: 'glossary/index.html', priority: '0.7', changefreq: 'monthly' },
  { path: 'glossary/iplc/index.html', priority: '0.7', changefreq: 'monthly' },
  { path: 'glossary/clash/index.html', priority: '0.7', changefreq: 'monthly' },
  { path: 'glossary/sub-store/index.html', priority: '0.7', changefreq: 'monthly' },
  { path: 'glossary/tun-mode/index.html', priority: '0.7', changefreq: 'monthly' },
  { path: 'glossary/traffic-multiplier/index.html', priority: '0.7', changefreq: 'monthly' },

  // 网站地图 HTML
  { path: 'sitemap.html', priority: '0.5', changefreq: 'monthly' },

  // 信任与合规
  { path: 'about/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'contact/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'editorial-policy/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'privacy-policy/index.html', priority: '0.3', changefreq: 'yearly' },
  { path: 'disclaimer/index.html', priority: '0.3', changefreq: 'yearly' }
];

function generateSitemapAndRobots() {
  const currentDate = '2026-03-06';

  // 1. 生成带 XSLT 样式的标准 sitemap.xml
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  ALL_PAGES.forEach(page => {
    const loc = page.path === '' ? `${DOMAIN}/` : `${DOMAIN}/${page.path}`;
    sitemapXml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemapXml += `</urlset>\n`;
  writePage('sitemap.xml', sitemapXml);

  // 2. 生成人类友好型 HTML 网站地图 (sitemap.html)
  {
    const title = "网站地图 (HTML Sitemap) | 全站主要栏目与文章导航 - 机场之家";
    const description = "机场之家完整网站地图。直达首页、机场推荐专题、节点排行榜、14家品牌独立评测、30篇全平台配置教程与100篇深度科普文章。";

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": `${DOMAIN}/sitemap.html`
    };

    const html = `${buildHead({ title, description, canonicalPath: 'sitemap.html', depth: 0, schema })}
${buildHeader(0, '')}

  <div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>网站地图 (Sitemap)</span>
    </nav>

    <div class="article-header" style="margin-bottom: 2rem;">
      <h1 class="article-title">机场之家全站网站地图 (HTML Sitemap)</h1>
      <div class="article-meta-bar">
        <span>全站收录：共 ${ALL_PAGES.length} 个规范页面</span>
        <span>•</span>
        <span>包含：14 家独立评测 / 30 篇教程 / 100 篇深度长文</span>
        <span>•</span>
        <span>格式支持：HTML 网页版与 XML 爬虫版</span>
      </div>
    </div>

    <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div>
        <strong style="color: var(--text-main);">需要搜索引擎爬虫专用的标准 XML 格式？</strong>
        <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted);">适用于 Bing Webmaster Tools、Google Search Console 提交。</p>
      </div>
      <a href="sitemap.xml" target="_blank" class="btn btn-primary btn-sm">查看原始 sitemap.xml ↗</a>
    </div>

    <div style="display: flex; flex-direction: column; gap: 2.5rem;">
      <!-- 1. 核心频道与分类 -->
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          🧭 核心导航与主要专题
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem;">
          <div><a href="index.html"><strong>网站首页</strong></a> - 2026专业中文机场推荐</div>
          <div><a href="recommend/index.html"><strong>机场推荐专题</strong></a> - 6大需求精选</div>
          <div><a href="ranking/index.html"><strong>节点排行榜</strong></a> - 4大排名体系</div>
          <div><a href="airport/index.html"><strong>品牌评测库</strong></a> - 14家客观实测</div>
          <div><a href="compare/index.html"><strong>机场在线对比工具</strong></a> - 多维参数比价</div>
          <div><a href="guides/index.html"><strong>新手教程中心</strong></a> - 30篇客户端实操</div>
          <div><a href="blog/index.html"><strong>选型与技术博客</strong></a> - 100篇深度长文</div>
          <div><a href="glossary/index.html"><strong>网络术语词典</strong></a> - 核心概念百科</div>
        </div>
      </div>

      <!-- 2. 14 家机场独立评测 -->
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          🏢 14 家已录入核验品牌独立评测
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem;">
          ${AIRPORTS.map(a => `
            <div>
              <a href="airport/${a.slug}/index.html"><strong>#${a.rank} ${a.name}</strong></a>
              <span style="font-size: 0.8rem; color: var(--text-light);">（¥${a.startingPrice}/月）</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. 30 篇全平台配置教程 -->
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          📱 30 篇客户端实操与排障教程
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 0.6rem; font-size: 0.9rem;">
          ${GUIDES.map(g => `
            <div>
              <span class="pill pill-official" style="font-size: 0.7rem; padding: 0.1rem 0.35rem;">${g.category}</span>
              <a href="guides/${g.slug}/index.html" style="margin-left: 0.35rem;">${g.h1}</a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 4. 100 篇深度科普与选型文章 -->
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          📚 100 篇深度原创博客与技术长文
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 0.6rem; font-size: 0.88rem;">
          ${ALL_ARTICLES.map(a => `
            <div>
              <span class="pill pill-tested" style="font-size: 0.7rem; padding: 0.1rem 0.35rem;">${a.category}</span>
              <a href="blog/${a.slug}/index.html" style="margin-left: 0.35rem;">${a.h1}</a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 5. 信任与法律政策 -->
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <h2 style="font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          ⚖️ 信任、关于与法律政策
        </h2>
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
          <a href="about/index.html">关于我们</a>
          <a href="contact/index.html">联系与反馈</a>
          <a href="editorial-policy/index.html">独立编辑政策</a>
          <a href="privacy-policy/index.html">隐私权保护政策</a>
          <a href="disclaimer/index.html">免责声明</a>
        </div>
      </div>
    </div>
  </div>

${buildFooter(0)}
`;
    writePage('sitemap.html', html);
  }

  // 3. 生成 robots.txt
  const robotsTxt = `# robots.txt for https://jichanghome.blog
User-agent: *
Allow: /
Allow: /css/
Allow: /js/
Allow: /data/

# 排除 404 与非内容性文件
Disallow: /404.html

# Sitemap 定位
Sitemap: ${DOMAIN}/sitemap.xml
`;
  writePage('robots.txt', robotsTxt);

  // 4. 生成 IndexNow 校验文件 (Bing 快速索引协议)
  writePage(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);

  console.log(`[Generated] sitemap.xml with ${ALL_PAGES.length} canonical URLs`);
  console.log(`[Generated] sitemap.html human-readable directory`);
  console.log(`[Generated] robots.txt referencing official sitemap`);
  console.log(`[Generated] IndexNow verification key file: ${INDEXNOW_KEY}.txt`);
}

module.exports = { generateSitemapAndRobots, ALL_PAGES };

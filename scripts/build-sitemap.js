const fs = require('fs');
const path = require('path');
const { DOMAIN, writePage, AIRPORTS } = require('./template-base');
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

  // 信任与合规
  { path: 'about/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'contact/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'editorial-policy/index.html', priority: '0.5', changefreq: 'monthly' },
  { path: 'privacy-policy/index.html', priority: '0.3', changefreq: 'yearly' },
  { path: 'disclaimer/index.html', priority: '0.3', changefreq: 'yearly' }
];

function generateSitemapAndRobots() {
  const currentDate = '2026-03-06';

  // 1. 生成 sitemap.xml
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
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

  // 2. 生成 robots.txt
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

  // 3. 生成 IndexNow 校验文件 (Bing 快速索引协议)
  writePage(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);

  console.log(`[Generated] sitemap.xml with ${ALL_PAGES.length} canonical URLs`);
  console.log(`[Generated] robots.txt referencing official sitemap`);
  console.log(`[Generated] IndexNow verification key file: ${INDEXNOW_KEY}.txt`);
}

module.exports = { generateSitemapAndRobots, ALL_PAGES };

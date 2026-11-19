const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');
const ALL_ARTICLES = require('./data-all-articles');

function generateBlogPages() {
  // 1. 博客主页 blog/index.html (depth = 1)
  {
    const title = "科学上网选型指南与技术深度博客（精选100篇） | 专线原理与避坑指南 - 机场之家";
    const description = "机场之家100篇原创深度网络选型与技术科普博客矩阵。系统剖析靠谱机场挑选、IPLC/IEPL物理专线原理、VLESS/Hysteria2协议对抗、ChatGPT/Claude防封控技巧及全网节点避坑攻略。";

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/blog/index.html"
    };

    // 10 大核心专题分类
    const pillars = [
      { name: '选购避坑指南', icon: '🛒', desc: '新手选型、防跑路征兆、单GB成本计算与真实续费陷阱' },
      { name: '基础认知与概念', icon: '💡', desc: '梯子/代理/VPN区别、GFW阻断原理与自建VPS成本剖析' },
      { name: '网络线路架构', icon: '⚡', desc: 'IPLC/IEPL物理专线、BGP多线入口、CN2 GIA与晚高峰拥堵分析' },
      { name: '代理协议对比', icon: '🔒', desc: 'Shadowsocks、VLESS-Reality、Trojan、Hysteria2与TUIC协议' },
      { name: '流媒体解锁技术', icon: '🎬', desc: 'Netflix非自制剧解锁、Disney+报错排查、YouTube Premium与双ISP住宅IP' },
      { name: 'AI大模型风控防范', icon: '🤖', desc: 'OpenAI/Claude风控机制、IP欺诈度评分、WebRTC泄漏与API优化' },
      { name: '客户端与进阶工具', icon: '🛠️', desc: 'Clash Verge Rev规则编写、Mihomo内核、Sing-box与Sub-Store订阅清洗' },
      { name: '节点地区选型', icon: '🌍', desc: '香港/台湾/日本/新加坡/美国/欧洲等不同地区节点延迟与优劣横评' },
      { name: '安全与隐私防范', icon: '🛡️', desc: '节点安全性自检、HTTPS中间人防范、DoH加密解析与指纹浏览器' },
      { name: '行业生态与技术', icon: '📊', desc: 'SSPanel/V2board面板商业化演进、DDoS黑客对抗、真实带宽成本与高可用容灾' }
    ];

    const html = `${buildHead({ title, description, canonicalPath: 'blog/index.html', depth: 1, schema })}
${buildHeader(1, 'blog')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>博客与选型指南</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">网络选型与科学上网技术深度博客库（共 100 篇精选文章）</h1>
      <div class="article-meta-bar">
        <span>体系结构：10 大核心专题 Pillar 支柱</span>
        <span>•</span>
        <span>拒绝水文：底层通信原理与防风控实践</span>
        <span>•</span>
        <span>持续更新：跟踪 2026 最新网络审查演进</span>
      </div>
    </div>

    <div class="quick-answer-box" style="margin-bottom: 2.5rem;">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"/></svg>
        <span>关于本博客库的权威性与原创原则</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        本站收录的 100 篇深度长文均由资深网络工程师撰写，立足于客观中立的实机测速与真实成本测算。内容涵盖从底层 TCP/UDP 传输协议、国家防火墙（GFW）主动探测防御机制，到跨境电商团队防封养号与家庭 4K 流媒体极致解锁，旨在为中文互联网用户提供最硬核、最系统的网络选型知识库。
      </p>
    </div>

    <!-- 10 大专题 Pillar 循环展示所有 100 篇文章 -->
    ${pillars.map(pillar => {
      const pillarArticles = ALL_ARTICLES.filter(a => a.category === pillar.name);
      return `
        <div style="margin-bottom: 3.5rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem;">
            <span style="font-size: 1.8rem;">${pillar.icon}</span>
            <div>
              <h2 style="font-size: 1.4rem; font-weight: 800; margin: 0; color: var(--text-main);">${pillar.name}</h2>
              <p style="font-size: 0.85rem; color: var(--text-light); margin: 0.2rem 0 0 0;">${pillar.desc}（共 ${pillarArticles.length} 篇）</p>
            </div>
          </div>

          <div class="grid-2">
            ${pillarArticles.map(article => `
              <div class="post-card">
                <div class="post-meta">
                  <span class="pill pill-tested" style="font-size: 0.75rem;">${article.category}</span>
                  <span>•</span>
                  <span>阅读约 ${article.readTime}</span>
                  <span>•</span>
                  <span>${article.date}</span>
                </div>
                <h3 class="post-title" style="font-size: 1.15rem; margin-top: 0.5rem;">
                  <a href="${article.slug}/index.html">${article.h1}</a>
                </h3>
                <p class="post-excerpt" style="font-size: 0.88rem; line-height: 1.6;">${article.desc}</p>
                <div style="margin-top: 1rem;">
                  <a href="${article.slug}/index.html" class="btn btn-sm btn-secondary">阅读完整指南 &rarr;</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('')}

    <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2.5rem; text-align: center; margin-bottom: 3.5rem;">
      <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.75rem;">没有找到需要的具体话题？</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
        你还可以查看全平台的客户端配置图文教程，或使用横向比价工具直接对比 14 家已录入核验品牌的真实参数。
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="../guides/index.html" class="btn btn-primary">查阅 30 篇客户端实操教程</a>
        <a href="../compare/index.html" class="btn btn-secondary">进入机场横向比价工具</a>
        <a href="../ranking/index.html" class="btn btn-secondary">查看 2026 综合排行榜</a>
      </div>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('blog/index.html', html);
  }

  // 2. 100篇长篇深度文章 (depth = 2)
  ALL_ARTICLES.forEach(article => {
    const canonicalPath = `blog/${article.slug}/index.html`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.h1,
      "description": article.desc,
      "datePublished": article.date,
      "author": {
        "@type": "Organization",
        "name": "机场之家技术团队"
      },
      "publisher": {
        "@type": "Organization",
        "name": "机场之家",
        "url": "https://jichanghome.blog/"
      },
      "url": `https://jichanghome.blog/${canonicalPath}`
    };

    const html = `${buildHead({ title: article.title, description: article.desc, canonicalPath, depth: 2, schema })}
${buildHeader(2, 'blog')}

  <div class="container article-layout">
    <main class="article-content">
      <nav class="breadcrumb" aria-label="面包屑导航">
        <a href="../../index.html">首页</a>
        <span class="breadcrumb-separator">/</span>
        <a href="../index.html">博客与选型指南</a>
        <span class="breadcrumb-separator">/</span>
        <span>${article.category}</span>
      </nav>

      <h1 class="article-title">${article.h1}</h1>

      <div class="article-meta-bar">
        <span>分类：${article.category}</span>
        <span>•</span>
        <span>阅读约 ${article.readTime}</span>
        <span>•</span>
        <span>发布日期：${article.date}</span>
      </div>

      <div class="article-body">
        ${article.content}
      </div>

      <div style="margin-top: 3.5rem; padding: 2rem; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">延伸阅读与选型入口</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">结合客观测评数据与实操指南，找到最契合你使用场景的网络方案：</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="../../ranking/index.html" class="btn btn-sm btn-secondary">综合排行榜</a>
          <a href="../../compare/index.html" class="btn btn-sm btn-secondary">参数横向对比</a>
          <a href="../../guides/windows/index.html" class="btn btn-sm btn-secondary">Windows 教程</a>
          <a href="../../guides/android/index.html" class="btn btn-sm btn-secondary">Android 教程</a>
          <a href="../../guides/ios/index.html" class="btn btn-sm btn-secondary">iOS 教程</a>
          <a href="../../glossary/index.html" class="btn btn-sm btn-secondary">术语词典</a>
        </div>
      </div>
    </main>

    <aside class="article-sidebar">
      <div class="sidebar-box">
        <div class="sidebar-box-title">推荐可用优质机场</div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          文章提到的技术与协议，推荐在以下真实核验服务商中进行配置体验：
        </p>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="border-bottom: 1px dashed var(--border-color); padding-bottom: 0.6rem;">
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/breezenet/index.html">微风网络 Breezenet</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥8/月起 · 200GB · 专线主干架构</div>
            <a href="https://edp01.breezenetaff.com/#/?code=h4GlIXwC" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
          <li style="border-bottom: 1px dashed var(--border-color); padding-bottom: 0.6rem;">
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/yinxingren/index.html">隐形人</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥24/月 · 纯专线 · 适合AI外贸办公</div>
            <a href="https://varnexa.invisibleaff.com/#/?code=5BkMj6bD" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
          <li>
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/flashleap/index.html">闪跃 FlashLeap</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥24/月 · IPLC纯专线 · 电竞超低延迟</div>
            <a href="https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
        </ul>
      </div>

      <div class="sidebar-box">
        <div class="sidebar-box-title">全站核心导航</div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
          <li><a href="../../recommend/index.html">&rarr; 按需求分类推荐专题</a></li>
          <li><a href="../../ranking/overall/index.html">&rarr; 综合实力TOP排行榜</a></li>
          <li><a href="../../guides/index.html">&rarr; 全平台客户端30篇配置教程</a></li>
          <li><a href="../../compare/index.html">&rarr; 机场参数多维横向对比</a></li>
        </ul>
      </div>
    </aside>
  </div>

${buildFooter(2)}
`;

    writePage(canonicalPath, html);
  });
}

module.exports = { generateBlogPages };

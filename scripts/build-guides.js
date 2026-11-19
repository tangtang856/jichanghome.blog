const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');
const GUIDES = require('./data-guides');

function generateGuidePages() {
  // 1. 教程中心主页 guides/index.html (depth = 1)
  {
    const title = "全平台梯子客户端配置与使用教程中心（共30篇） | Windows/Mac/Android/iOS - 机场之家";
    const description = "2026最新科学上网客户端配置图文教程合辑（30篇完整实操指南）。涵盖Windows、Android、iOS、macOS、Linux与OpenWrt软路由全平台订阅导入、TUN模式与网络排障。";

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/guides/index.html"
    };

    // 按分类对 30 篇教程分组展示
    const categories = [
      { name: '桌面端教程', icon: '💻', desc: 'Windows、macOS 与 Linux 系统客户端配置' },
      { name: '移动端教程', icon: '📱', desc: 'Android 安卓与 iOS 苹果手机客户端配置' },
      { name: '服务器与软路由', icon: '🌐', desc: 'OpenWrt、Linux 与全屋无感翻墙环境搭建' },
      { name: '进阶调优与工具', icon: '⚡', desc: 'Sub-Store、TUN模式、分流规则与终端加速' },
      { name: '安全与风控', icon: '🛡️', desc: 'WebRTC泄漏、DoH加密DNS与翻墙安全审计' },
      { name: '场景与设备', icon: '🎮', desc: 'ChatGPT/Claude、流媒体检测、游戏主机与电视盒子' }
    ];

    const html = `${buildHead({ title, description, canonicalPath: 'guides/index.html', depth: 1, schema })}
${buildHeader(1, 'guides')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>新手教程中心</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">全平台客户端配置与节点订阅实操教程中心（共 30 篇）</h1>
      <div class="article-meta-bar">
        <span>更新周期：2026最新核心与内核</span>
        <span>•</span>
        <span>覆盖平台：Win / Mac / iOS / Android / Linux / 软路由</span>
        <span>•</span>
        <span>难度分级：从零基础到极客进阶</span>
      </div>
    </div>

    <div class="quick-answer-box" style="margin-bottom: 2.5rem;">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"/></svg>
        <span>新手快速配置 3 步法</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        科学上网并不复杂，任何平台均只需 3 步：<strong>1. 购买靠谱机场（如 <a href="../airport/breezenet/index.html">微风网络</a> 或 <a href="../airport/yinxingren/index.html">隐形人</a>）并复制订阅链接；2. 下载对应系统的客户端软件；3. 将订阅链接粘贴至客户端并点击“更新”，随后选择节点并开启系统代理或 TUN 模式。</strong>
      </p>
    </div>

    <!-- 30 篇教程按专题矩阵呈现 -->
    ${categories.map(cat => {
      const catGuides = GUIDES.filter(g => g.category === cat.name);
      return `
        <div style="margin-bottom: 3rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem;">
            <span style="font-size: 1.8rem;">${cat.icon}</span>
            <div>
              <h2 style="font-size: 1.4rem; font-weight: 800; margin: 0; color: var(--text-main);">${cat.name}</h2>
              <p style="font-size: 0.85rem; color: var(--text-light); margin: 0.2rem 0 0 0;">${cat.desc}</p>
            </div>
          </div>

          <div class="grid-2">
            ${catGuides.map(guide => `
              <div class="post-card">
                <div class="post-meta">
                  <span class="pill pill-official" style="font-size: 0.75rem;">${guide.category}</span>
                  <span>•</span>
                  <span>预计阅读 ${guide.readTime}</span>
                  <span>•</span>
                  <span>${guide.date}</span>
                </div>
                <h3 class="post-title" style="font-size: 1.15rem; margin-top: 0.5rem;">
                  <a href="${guide.slug}/index.html">${guide.h1}</a>
                </h3>
                <p class="post-excerpt" style="font-size: 0.88rem; line-height: 1.6;">${guide.desc}</p>
                <div style="margin-top: 1rem;">
                  <a href="${guide.slug}/index.html" class="btn btn-sm btn-primary">阅读详细图文教程 &rarr;</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('')}

    <!-- 核心排障指南入口卡片 -->
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); border: 1px solid #bae6fd; border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 3.5rem; text-align: center;">
      <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.75rem; color: #0369a1;">遇到节点连不上、延迟超时或国内网站打不开？</h3>
      <p style="color: #334155; font-size: 1rem; max-width: 750px; margin: 0 auto 1.5rem auto; line-height: 1.7;">
        不要慌张！90% 的翻墙故障均由“系统时间误差”、“端口占用”、“未更新订阅”或“误开启全局模式”导致。查阅我们的专业自检排障手册，5分钟快速恢复网络连接。
      </p>
      <a href="troubleshooting/index.html" class="btn btn-primary" style="padding: 0.75rem 2rem; font-size: 1rem;">查看《全平台排障与连通性自救手册》 &rarr;</a>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('guides/index.html', html);
  }

  // 2. 30篇图文教程单页 (depth = 2)
  GUIDES.forEach(guide => {
    const canonicalPath = `guides/${guide.slug}/index.html`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": guide.h1,
      "description": guide.desc,
      "datePublished": guide.date,
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

    const html = `${buildHead({ title: guide.title, description: guide.desc, canonicalPath, depth: 2, schema })}
${buildHeader(2, 'guides')}

  <div class="container article-layout">
    <main class="article-content">
      <nav class="breadcrumb" aria-label="面包屑导航">
        <a href="../../index.html">首页</a>
        <span class="breadcrumb-separator">/</span>
        <a href="../index.html">新手教程中心</a>
        <span class="breadcrumb-separator">/</span>
        <span>${guide.category}</span>
      </nav>

      <h1 class="article-title">${guide.h1}</h1>

      <div class="article-meta-bar">
        <span>分类：${guide.category}</span>
        <span>•</span>
        <span>实操难度：新手友好</span>
        <span>•</span>
        <span>阅读约 ${guide.readTime}</span>
        <span>•</span>
        <span>核验时间：${guide.date}</span>
      </div>

      <div class="article-body">
        ${guide.content}
      </div>

      <div style="margin-top: 3.5rem; padding: 2rem; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">相关教程推荐</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">继续探索其他系统平台的配置技巧与网络优化知识：</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="../windows/index.html" class="btn btn-sm btn-secondary">Windows 教程</a>
          <a href="../android/index.html" class="btn btn-sm btn-secondary">Android 教程</a>
          <a href="../ios/index.html" class="btn btn-sm btn-secondary">iOS 教程</a>
          <a href="../macos/index.html" class="btn btn-sm btn-secondary">macOS 教程</a>
          <a href="../troubleshooting/index.html" class="btn btn-sm btn-secondary">连不上网络排障</a>
          <a href="../tun-mode-setup/index.html" class="btn btn-sm btn-secondary">TUN模式配置</a>
        </div>
      </div>
    </main>

    <aside class="article-sidebar">
      <div class="sidebar-box">
        <div class="sidebar-box-title">推荐可用优质机场</div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          工欲善其事，必先利其器。配合靠谱稳定的节点订阅，客户端才能发挥千兆性能：
        </p>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="border-bottom: 1px dashed var(--border-color); padding-bottom: 0.6rem;">
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/breezenet/index.html">微风网络 Breezenet</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥8/月起 · 200GB大流量 · IEPL专线</div>
            <a href="https://edp01.breezenetaff.com/#/?code=h4GlIXwC" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
          <li style="border-bottom: 1px dashed var(--border-color); padding-bottom: 0.6rem;">
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/yinxingren/index.html">隐形人</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥24/月 · 纯专线架构 · 适合AI办公</div>
            <a href="https://varnexa.invisibleaff.com/#/?code=5BkMj6bD" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
          <li>
            <div style="font-weight: 700; font-size: 0.95rem;">
              <a href="../../airport/feiv/index.html">飞V</a>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light);">¥4.9/月起 · 超高性价比 · 支持按量</div>
            <a href="https://varnexa.flyvaff.com/#/?code=Ks7qO8qe" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="margin-top: 0.35rem; width: 100%; text-align: center;">直达官网 ↗</a>
          </li>
        </ul>
      </div>

      <div class="sidebar-box">
        <div class="sidebar-box-title">快速工具箱</div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
          <li><a href="../../compare/index.html">&rarr; 机场参数横向比价工具</a></li>
          <li><a href="../../ranking/index.html">&rarr; 2026年机场节点排行榜</a></li>
          <li><a href="../../blog/index.html">&rarr; 选购避坑与协议科普文章</a></li>
          <li><a href="../../glossary/index.html">&rarr; 术语词典 (IPLC/Clash等)</a></li>
        </ul>
      </div>
    </aside>
  </div>

${buildFooter(2)}
`;

    writePage(canonicalPath, html);
  });
}

module.exports = { generateGuidePages };

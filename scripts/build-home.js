const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');

function generateHomePage() {
  const title = "2026专业中文机场推荐与梯子节点导航指南 | 靠谱稳定VPN评测 - 机场之家";
  const description = "机场之家为您提供2026年最新经过测试的优质机场推荐、机场节点排行榜、性价比平价梯子推荐及VPN评测。涵盖IPLC专线、ChatGPT/Claude原生节点、4K流媒体解锁实测与Clash全平台配置教程。";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "机场之家",
    "url": "https://jichanghome.blog/",
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jichanghome.blog/compare/index.html?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const html = `${buildHead({ title, description, canonicalPath: '', depth: 0, schema })}
${buildHeader(0, 'home')}

  <!-- Section 2: Hero 主视觉区 -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>2026 全年实测 · 纯净专线与节点严选</span>
      </div>
      <h1 class="hero-title">2026年稳定优质机场推荐与网络节点选购指南</h1>
      <p class="hero-desc">
        拒绝虚假测速跑分与劣质万人骑节点。我们聚合主流 <strong>机场推荐</strong>、深度解析 <strong>机场节点</strong> 线路架构，为您在 <strong>性价比机场</strong> 与高速 <strong>梯子推荐</strong>、<strong>VPN机场</strong> 选型中提供中立、客观的数据依据与购买前避坑全攻略。
      </p>
      <div class="hero-actions">
        <a href="recommend/index.html" class="btn btn-primary">查看精选机场推荐</a>
        <a href="ranking/overall/index.html" class="btn btn-secondary">节点综合实力排行</a>
        <a href="compare/index.html" class="btn btn-secondary">多维度横向比对</a>
      </div>

      <div class="trust-badges">
        <div class="trust-badge-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span>多地真实宽带连通抽样</span>
        </div>
        <div class="trust-badge-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>拒绝虚构跑分与夸大宣传</span>
        </div>
        <div class="trust-badge-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>全内网专线与原生住宅IP追踪</span>
        </div>
        <div class="trust-badge-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>单GB流量均价透明计算</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: 快速答案 (Direct Answers) -->
  <section class="container">
    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>选购速答：新手选择 VPN 与机场节点最值得关注的 4 个核心维度</span>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-muted);">
        在选购翻墙梯子或机场服务时，千万不要只盯着“几块钱一个月几百G”的夸张标价。根据我们长期监测，劣质低价直连节点在敏感时期往往大面积掉线。请牢记以下选型原则：
      </p>
      <div class="quick-answer-grid">
        <div class="qa-card">
          <h4>1. 线路是底色</h4>
          <p>内网专线 (IPLC/IEPL) 晚高峰不经过公网 GFW，抗封锁且延迟极低；隧道中继 (BGP Transit) 性价比高；普通公网直连节点容易出现大面积断流。</p>
        </div>
        <div class="qa-card">
          <h4>2. 单价看每 GB 成本</h4>
          <p>不要只看月付价格。用“套餐月费 ÷ 实际可用流量”计算真实每 GB 成本，通常 0.08~0.20 元/GB 属于健康可维系的合理商业区间。</p>
        </div>
        <div class="qa-card">
          <h4>3. 原生 IP 决定 AI 与流媒体</h4>
          <p>ChatGPT、Claude 与 Netflix 对机房广播 IP 极严。必须拥有双 ISP 住宅落地或经过流媒体 DNS 解锁清洗的节点才能顺利访问。</p>
        </div>
        <div class="qa-card">
          <h4>4. 坚持“按月付费”与多节点备用</h4>
          <p>再老牌的机场也切忌一次性冲动年付。建议选择支持月付或购买不限时按量套餐（如魔戒）作为主力机场的容灾备用方案。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: 精选推荐 (Featured Airport Cards) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">2026精选网络机场推荐</h2>
        <p class="section-subtitle">基于真实线路追踪、节点可用率与公开套餐参数综合归纳，拒绝虚假刷单</p>
      </div>

      <div class="grid-3">
        ${AIRPORTS.slice(0, 3).map(airport => `
          <div class="airport-card">
            <div class="card-top">
              <h3 class="card-brand">${airport.name}</h3>
              <span class="score-badge">评分 ${airport.scoreOverall}</span>
            </div>
            <div class="card-tagline">${airport.tagline}</div>

            <div class="card-specs">
              <div class="spec-item">
                <span class="spec-label">线路架构</span>
                <span class="spec-val">${airport.lineType}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">设备限制</span>
                <span class="spec-val">${airport.deviceLimit}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">协议支持</span>
                <span class="spec-val">${airport.protocols.slice(0, 2).join(', ')}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">核验状态</span>
                <span class="spec-val" style="color: var(--success); font-weight: 700;">实测通过</span>
              </div>
            </div>

            <div class="card-features">
              <ul class="feature-list">
                ${airport.advantages.slice(0, 3).map(adv => `<li class="pro">${adv}</li>`).join('')}
                <li class="con">${airport.disadvantages[0]}</li>
              </ul>
            </div>

            <div class="card-pricing-bar">
              <div>
                <span class="card-price-num">¥${airport.startingPrice}</span>
                <span class="card-price-unit">${airport.currency}</span>
              </div>
              <div style="display: flex; gap: 0.4rem;">
                <a href="airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary">评测详情</a>
                <a href="compare/index.html" class="btn btn-sm btn-primary">横向对比</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="recommend/index.html" class="btn btn-secondary">浏览全部已录入品牌与专题推荐 &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Section 5: 综合排行榜 (Overall Rankings Preview) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">2026机场节点综合实力排行榜</h2>
        <p class="section-subtitle">从线路质量、节点可用率、单价透明度与售后支撑四个维度综合考量</p>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 70px; text-align: center;">排名</th>
              <th>品牌名称</th>
              <th>线路属性</th>
              <th>起步月付</th>
              <th>主流套餐与容量</th>
              <th>AI 与流媒体</th>
              <th>适合人群</th>
              <th style="text-align: center;">详情</th>
            </tr>
          </thead>
          <tbody>
            ${AIRPORTS.map((airport, idx) => `
              <tr>
                <td style="text-align: center; font-weight: 800; color: ${idx === 0 ? '#eab308' : idx === 1 ? '#94a3b8' : idx === 2 ? '#b45309' : 'var(--text-light)'};">
                  #${idx + 1}
                </td>
                <td>
                  <strong>${airport.name}</strong>
                  <div style="font-size: 0.75rem; color: var(--text-light);">${airport.tagline.slice(0, 18)}...</div>
                </td>
                <td><span class="pill pill-official">${airport.lineType.split('+')[0]}</span></td>
                <td style="color: var(--primary); font-weight: 700;">¥${airport.startingPrice}</td>
                <td>${airport.plans[0].traffic} / ¥${airport.plans[0].price}</td>
                <td>${airport.aiSupport.slice(0, 2).join(' / ')}</td>
                <td style="font-size: 0.85rem; color: var(--text-muted);">${airport.suitableFor[0]}</td>
                <td style="text-align: center;">
                  <a href="airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.55rem;">查看</a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
        <a href="ranking/overall/index.html" class="btn btn-sm btn-secondary">综合排行榜明细</a>
        <a href="ranking/value/index.html" class="btn btn-sm btn-secondary">性价比 (单GB价格) 榜</a>
        <a href="ranking/stable/index.html" class="btn btn-sm btn-secondary">晚高峰防断连专线榜</a>
        <a href="ranking/budget/index.html" class="btn btn-sm btn-secondary">学生党平价轻量榜</a>
      </div>
    </div>
  </section>

  <!-- Section 6: 按需求选择 (Category Grid) -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">按特定场景与需求精准选型</h2>
        <p class="section-subtitle">每个场景对节点的要求截然不同，选对分类省钱省心</p>
      </div>

      <div class="grid-3">
        <a href="recommend/budget/index.html" class="category-card">
          <div class="cat-icon">💰</div>
          <h3 class="cat-title">低预算平价机场</h3>
          <p class="cat-desc">月付 15 元以下，大流量高性价比。适合查资料、写论文和轻度上网用户，用最低成本解决日常刚需。</p>
        </a>

        <a href="recommend/premium/index.html" class="category-card">
          <div class="cat-icon">⚡</div>
          <h3 class="cat-title">高端 IPLC/IEPL 专线</h3>
          <p class="cat-desc">端到端不过公网防火墙，物理级零丢包与极低延迟。跨境电商团队、外贸商务与苛求稳定用户的基石。</p>
        </a>

        <a href="recommend/beginner/index.html" class="category-card">
          <div class="cat-icon">🔰</div>
          <h3 class="cat-title">新手小白入门推荐</h3>
          <p class="cat-desc">提供一键导入客户端、中文完整配套文档与即时售后。免去繁琐配置，手机电脑扫码即用。</p>
        </a>

        <a href="recommend/stable/index.html" class="category-card">
          <div class="cat-icon">🛡️</div>
          <h3 class="cat-title">高稳定性抗断连机场</h3>
          <p class="cat-desc">重点针对晚高峰（20:00~23:00）拥堵与敏感时期抗封锁设计，多入口灾备切换，保证重要时刻不失联。</p>
        </a>

        <a href="recommend/ai/index.html" class="category-card">
          <div class="cat-icon">🤖</div>
          <h3 class="cat-title">ChatGPT 与 Claude 专用</h3>
          <p class="cat-desc">严选原生住宅 IP 与纯净落地节点，彻底告别“Access Denied”、频繁人机验证与莫名封号风控困扰。</p>
        </a>

        <a href="recommend/streaming/index.html" class="category-card">
          <div class="cat-icon">🎬</div>
          <h3 class="cat-title">4K/8K 流媒体解锁</h3>
          <p class="cat-desc">全节点支持 Netflix 非自制剧、Disney+、HBO Max、YouTube 4K 秒开，享受原画画质无缓冲体验。</p>
        </a>
      </div>
    </div>
  </section>

  <!-- Section 7: 机场横向比较工具入口 -->
  <section class="section section-subtle">
    <div class="container">
      <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); border-radius: var(--radius-lg); padding: 3rem 2rem; color: #fff; text-align: center;">
        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem; color: #fff;">还在纠结选哪家？试试机场在线横向比对工具</h2>
        <p style="font-size: 1.1rem; max-width: 720px; margin: 0 auto 1.75rem; color: #dbeafe; line-height: 1.7;">
          支持自由勾选 2 到 4 家候选品牌，一键对比起步月费、流量每 GB 成本、线路架构、支持协议、设备限制、流媒体解锁及优缺点差异。
        </p>
        <a href="compare/index.html" class="btn" style="background-color: #ffffff; color: var(--primary); font-weight: 700; padding: 0.85rem 2rem;">立即启动机场比对工具 &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Section 8: 最新独立深度评测 -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">最新独立机场评测</h2>
        <p class="section-subtitle">基于真实购买与客观技术参数拆解，严格区分官方资料与实测结果</p>
      </div>

      <div class="grid-3">
        <div class="post-card">
          <div class="post-meta">
            <span>评测报告</span>
            <span>•</span>
            <span>2026-03-05</span>
          </div>
          <h3 class="post-title"><a href="airport/paopaogou/index.html">泡泡狗机场评测：全内网专线稳定性与原生IP流媒体解锁全景解析</a></h3>
          <p class="post-excerpt">主打全内网IPLC/IEPL纯专线，晚高峰无拥堵不丢包，实测ChatGPT与Claude纯净原生IP访问表现。</p>
          <a href="airport/paopaogou/index.html" style="font-weight: 600; font-size: 0.85rem;">阅读完整评测报告 &rarr;</a>
        </div>

        <div class="post-card">
          <div class="post-meta">
            <span>评测报告</span>
            <span>•</span>
            <span>2026-03-01</span>
          </div>
          <h3 class="post-title"><a href="airport/feiniao/index.html">飞鸟云机场评测：老牌BGP隧道中继与低至0.075元/GB高性价比解析</a></h3>
          <p class="post-excerpt">运营超过4年的老牌服务，大流量平价套餐搭配主流Shadowsocks与VLESS协议，适合影音娱乐。</p>
          <a href="airport/feiniao/index.html" style="font-weight: 600; font-size: 0.85rem;">阅读完整评测报告 &rarr;</a>
        </div>

        <div class="post-card">
          <div class="post-meta">
            <span>评测报告</span>
            <span>•</span>
            <span>2026-03-06</span>
          </div>
          <h3 class="post-title"><a href="airport/shandianmao/index.html">闪电猫机场评测：企业级全IEPL专线与双ISP家宽住宅IP实测</a></h3>
          <p class="post-excerpt">专为跨境外贸与AI开发打造的高端节点，双ISP原生落地防封锁，Cursor与Claude写代码利器。</p>
          <a href="airport/shandianmao/index.html" style="font-weight: 600; font-size: 0.85rem;">阅读完整评测报告 &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 9: 教程中心 (Client Setup Guides) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">全平台客户端配置与使用教程</h2>
        <p class="section-subtitle">详细图文手把手教学，助您 3 分钟完成从订阅导入到开启科学上网</p>
      </div>

      <div class="grid-4">
        <a href="guides/windows/index.html" class="post-card" style="text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">💻</div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-main);">Windows 教程</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Clash Verge Rev 与 Sing-box 客户端安装与 TUN 全局模式详解</p>
        </a>

        <a href="guides/android/index.html" class="post-card" style="text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📱</div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-main);">Android 教程</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">安卓手机 Clash Meta 与 v2rayNG 订阅链接一键导入与分流配置</p>
        </a>

        <a href="guides/ios/index.html" class="post-card" style="text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🍏</div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-main);">iOS 苹果教程</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Shadowrocket (小火箭) / Loon / Quantumult X 下载与订阅导入</p>
        </a>

        <a href="guides/macos/index.html" class="post-card" style="text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🖥️</div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-main);">macOS 苹果电脑</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Mac 电脑 Clash Verge Rev 与 Surge 代理规则配置与系统代理设置</p>
        </a>
      </div>
    </div>
  </section>

  <!-- Section 10: 知识百科 (Glossary) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">网络术语与技术百科</h2>
        <p class="section-subtitle">弄清底层原理，避免被不良商家的虚假概念营销误导</p>
      </div>

      <div class="grid-3">
        <div class="post-card">
          <h3 class="post-title"><a href="glossary/iplc/index.html">什么是 IPLC 专线？</a></h3>
          <p class="post-excerpt">国际私有租用线路（International Private Leased Circuit），点对点内网连接，不经过任何公网过滤审查，延迟极低。</p>
          <a href="glossary/iplc/index.html" style="font-size: 0.85rem; font-weight: 600;">阅读专线百科 &rarr;</a>
        </div>

        <div class="post-card">
          <h3 class="post-title"><a href="glossary/clash/index.html">什么是 Clash 订阅链接？</a></h3>
          <p class="post-excerpt">聚合众多服务器节点并自带分流规则的 YAML 配置文件，实现国内直连、国外代理、流媒体分流智能分流。</p>
          <a href="glossary/clash/index.html" style="font-size: 0.85rem; font-weight: 600;">阅读配置百科 &rarr;</a>
        </div>

        <div class="post-card">
          <h3 class="post-title"><a href="glossary/tun-mode/index.html">什么是 TUN 虚拟网卡模式？</a></h3>
          <p class="post-excerpt">在操作系统层级接管所有未设置代理环境变量的软件流量（如命令行、终端、游戏客户端及某些防代理应用）。</p>
          <a href="glossary/tun-mode/index.html" style="font-size: 0.85rem; font-weight: 600;">阅读技术百科 &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 11: 最新文章 (Selection Guides) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">最新网络选型与避坑文章</h2>
        <p class="section-subtitle">深度剖析协议发展、风控防范与国际网络路由</p>
      </div>

      <div class="grid-3">
        <div class="post-card">
          <div class="post-meta">
            <span>选购指南</span>
            <span>•</span>
            <span>2026-03</span>
          </div>
          <h3 class="post-title"><a href="blog/how-to-choose-reliable-airport/index.html">新手如何挑选靠谱VPN与节点机场：避坑与选购全指南</a></h3>
          <p class="post-excerpt">跑路机场常见征兆有哪些？为什么不建议一次性年付？如何自测节点延迟与丢包率？本文为您逐一揭晓。</p>
        </div>

        <div class="post-card">
          <div class="post-meta">
            <span>技术科普</span>
            <span>•</span>
            <span>2026-03</span>
          </div>
          <h3 class="post-title"><a href="blog/iplc-iepl-bgp-transit-differences/index.html">IPLC、IEPL、BGP与公网中继线路有什么区别？线路原理全解析</a></h3>
          <p class="post-excerpt">物理专线与隧道中继在延迟、成本、抗干扰能力上的根本差异，教你从路由追踪看懂真实线路。</p>
        </div>

        <div class="post-card">
          <div class="post-meta">
            <span>协议解析</span>
            <span>•</span>
            <span>2026-03</span>
          </div>
          <h3 class="post-title"><a href="blog/shadowsocks-vless-trojan-protocols/index.html">SS、VLESS、Trojan、Hysteria2协议深度对比：哪种更稳定快速？</a></h3>
          <p class="post-excerpt">基于TCP与UDP（QUIC）的不同代理协议对抗主动探测与QoS限制的最新实践表现全面梳理。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 12: FAQ 常见问题解答 -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">常见问题解答 (FAQ)</h2>
        <p class="section-subtitle">围绕 机场推荐、梯子节点 与 VPN 选型的核心疑问</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <h3 class="faq-q">什么是“机场”？它与传统 VPN 有什么区别？</h3>
          <div class="faq-a">
            “机场”是中文互联网对基于 Shadowsocks、VLESS、Trojan 等现代轻量级代理协议搭建的节点服务商的俗称。与传统笨重的 IPsec/OpenVPN 相比，机场节点采用专门对抗主动探测与混淆的加密协议，支持智能国内外分流（国内直连不耗流量），速度更快、对高并发视频与网页加载体验更友好。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-q">为什么经常看到有人说“不要一次性年付”？</h3>
          <div class="faq-a">
            由于网络环境与国际出口路由的不可控性，任何服务商都有可能面临机房维护、上游断网甚至经营不善跑路的风险。按月付费或轻度购买不限时按量套餐，能将财务风险控制在最低，随时根据实际使用体验决定是否续费。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-q">专线节点 (IPLC/IEPL) 为什么比普通节点贵？</h3>
          <div class="faq-a">
            IPLC（国际私有租用线路）和 IEPL 是端到端的跨国内网光纤专线，流量在过境时不通过公网防火墙，不经过国际公网拥堵路由，因而具有物理级的不卡顿、零丢包和极低延迟。其机房物理专线租金昂贵，因此每 GB 成本天然高于普通公网隧道中继。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-q">访问 ChatGPT 或 Claude 为什么频繁提示“Access Denied”？</h3>
          <div class="faq-a">
            OpenAI 与 Anthropic 对数据中心机房 IP 实施了极其严格的风控过滤。廉价机场使用的大段机房 IP 往往被标记黑名单。要顺畅使用 AI 工具，需要选择具有原生双 ISP 住宅 IP 落地或专有 AI 优化通道的节点服务。
          </div>
        </div>

        <div class="faq-item">
          <h3 class="faq-q">网站评测数据来源是否客观公正？</h3>
          <div class="faq-a">
            机场之家坚持独立客观原则。我们所有参数均标注“实测核验”或“官方公开数据”，对每家机场的优缺点均如实披露。网站不接受虚假付费刷榜，任何评测结论均基于真实网络测试日志。
          </div>
        </div>
      </div>
    </div>
  </section>

${buildFooter(0)}
`;

  writePage('index.html', html);
}

module.exports = { generateHomePage };

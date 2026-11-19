const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');

function generateRecommendPages() {
  // 1. 推荐主枢纽页 recommend/index.html (depth = 1)
  {
    const title = "2026精选网络机场推荐专区 | 场景化分类与避坑指南 - 机场之家";
    const description = "汇聚2026年经过真实连通性测试的14家精选机场节点推荐，按平价性价比、高端IPLC专线、新手入门、晚高峰稳定、ChatGPT AI与4K流媒体解锁等细分场景精准选型。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/recommend/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'recommend/index.html', depth: 1, schema })}
${buildHeader(1, 'recommend')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>机场推荐专区</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">2026精选网络机场推荐与场景化选型中心</h1>
      <div class="article-meta-bar">
        <span>更新日期：2026年3月</span>
        <span>•</span>
        <span>收录规模：14 家代表性服务商</span>
        <span>•</span>
        <span>核验状态：真实价格与优惠码核销</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <span>如何根据自身预算与用途快速定位最合适的机场？</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        不同网络用户对网络梯子的需求差异巨大：学生党重在低预算大流量，外贸与跨境办公重在晚高峰稳定与物理专线，AI开发者与自媒体重在住宅IP与流媒体解锁。请直接点击下方对应专题进入深度评测与选购方案：
      </p>
    </div>

    <!-- 6大场景专题入口 -->
    <div class="grid-3" style="margin-bottom: 3rem;">
      <a href="budget/index.html" class="category-card">
        <div class="cat-icon">💰</div>
        <h2 class="cat-title">低预算与高性价比推荐</h2>
        <p class="cat-desc">月付 4.9~8 元起或按量计费（微风网络、飞猫云、飞V、萤火虫），适合轻度查资料与学生党。</p>
      </a>

      <a href="premium/index.html" class="category-card">
        <div class="cat-icon">⚡</div>
        <h2 class="cat-title">高端 IPLC/IEPL 内网专线</h2>
        <p class="cat-desc">端到端不过公网防火墙，物理级零丢包与超低延迟（隐形人、闪跃、灵猫、无忧）。</p>
      </a>

      <a href="beginner/index.html" class="category-card">
        <div class="cat-icon">🔰</div>
        <h2 class="cat-title">新手小白入门无门槛推荐</h2>
        <p class="cat-desc">全中文客户端界面、一键扫码导入与手把手售后技术支持，3分钟完成配置。</p>
      </a>

      <a href="stable/index.html" class="category-card">
        <div class="cat-icon">🛡️</div>
        <h2 class="cat-title">高稳定性抗断连防拥堵</h2>
        <p class="cat-desc">重点针对晚高峰（20:00~23:00）拥堵与敏感时期设计，多入口高可用冗余灾备。</p>
      </a>

      <a href="ai/index.html" class="category-card">
        <div class="cat-icon">🤖</div>
        <h2 class="cat-title">ChatGPT 与 Claude 原生专用</h2>
        <p class="cat-desc">原生住宅双ISP落地节点，彻底告别“Access Denied”与风控封号隐患。</p>
      </a>

      <a href="streaming/index.html" class="category-card">
        <div class="cat-icon">🎬</div>
        <h2 class="cat-title">Netflix 与 Disney+ 4K流媒体</h2>
        <p class="cat-desc">全区非自制剧稳定解锁，千兆带宽秒开4K/8K高清原画无缓冲。</p>
      </a>
    </div>

    <!-- 核心收录机场综合列表 -->
    <div class="section-header">
      <h2 class="section-title">2026年已核验 14 家精选机场列表</h2>
      <p class="section-subtitle">所有列出的套餐价格与线路属性均经过实机抽检</p>
    </div>

    <div class="grid-2" style="margin-bottom: 3.5rem;">
      ${AIRPORTS.map(airport => `
        <div class="airport-card">
          <div class="card-top">
            <h3 class="card-brand">${airport.name}</h3>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              ${airport.coupon ? `<span style="font-size: 0.75rem; background: #fff1f2; color: #e11d48; border: 1px solid #fecdd3; padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); font-weight: 700;">券: ${airport.coupon}</span>` : ''}
              <span class="score-badge">评分 ${airport.scoreOverall}</span>
            </div>
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
              <span class="spec-label">起步价格</span>
              <span class="spec-val" style="color: var(--primary);">¥${airport.startingPrice} ${airport.currency}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">折合单GB</span>
              <span class="spec-val" style="color: var(--success); font-weight: 700;">¥${airport.plans[0].unitPricePerGb}/GB</span>
            </div>
          </div>
          <div class="card-features">
            <ul class="feature-list">
              ${airport.advantages.slice(0, 2).map(adv => `<li class="pro">${adv}</li>`).join('')}
              <li class="con">${airport.disadvantages[0]}</li>
            </ul>
          </div>
          <div class="card-pricing-bar">
            <div>
              <span class="card-price-num">¥${airport.startingPrice}</span>
              <span class="card-price-unit">${airport.currency}</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <a href="../airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary">独立评测</a>
              <a href="${airport.affUrl}" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary">直达官网 ↗</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('recommend/index.html', html);
  }

  // 2. 各细分子专题 (depth = 2)
  const subCategories = [
    {
      slug: 'budget',
      name: '低预算平价机场',
      title: '2026低预算平价机场推荐 | 学生党备用节点清单 - 机场之家',
      desc: '精选2026年低预算平价机场与高性价比梯子节点，月付4.9~8元起，适合学生党与轻度科学上网用户。',
      filterAi: (a) => a.startingPrice <= 10 || a.slug === 'feiv' || a.slug === 'breezenet' || a.slug === 'feimaoyun' || a.slug === 'firefly',
      guideText: `低预算用户选购机场切忌贪图所谓的“几元一年”超低价。超低价机场往往存在严重的超卖、虚假节点和随时跑路的巨大风险。健康、可持续经营的平价机场通常具有以下特征：
      <ul>
        <li>采用公网BGP多线中继或混合专线（如微风网络¥8/月享200GB大流量、飞猫云¥7/月）。</li>
        <li>支持月付或提供不限时长按量扣费（如飞V¥4.9起步及不限时套餐），避免长期绑架资金。</li>
        <li>节点在线率高，具备备用解析域名与TG群组运维支撑。</li>
      </ul>`
    },
    {
      slug: 'premium',
      name: '高端 IPLC/IEPL 专线机场',
      title: '2026高端IPLC/IEPL专线机场推荐 | 4K高清与商务跨境选型 - 机场之家',
      desc: '汇聚2026年采用纯内网IPLC与IEPL独立专线架构的高端机场推荐，端到端不过公网防火墙，零丢包、超低延迟，专为跨境外贸与苛求稳定用户打造。',
      filterAi: (a) => a.lineType.includes('专线') || a.slug === 'yinxingren' || a.slug === 'flashleap' || a.slug === 'lingmao' || a.slug === 'wuyou' || a.slug === 'kuajiecloud',
      guideText: `高端专线机场核心优势在于“端到端物理内网专线”。由于通信流量从入口机房到出口机房完全走内网光纤传输，物理上绕过了公网国际出口路由拥堵与防火墙审查：
      <ul>
        <li>晚高峰（20:00~23:00）几乎无丢包，延迟保持一条直线（如隐形人、闪跃FlashLeap、灵猫）。</li>
        <li>在敏感时期依然具备极高抗封锁能力，不会出现大面积全灭。</li>
        <li>通常搭配优质落地原生IP，避免被流媒体与AI模型屏蔽。</li>
      </ul>`
    },
    {
      slug: 'beginner',
      name: '新手入门易用机场',
      title: '新手小白入门机场推荐 | 一键导入与易用客户端指南 - 机场之家',
      desc: '专为新手打造的中文机场节点推荐，提供简单清晰的一键导入订阅、图文客户端配套教程与快速人工解答，告别复杂配置。',
      filterAi: (a) => a.slug === 'breezenet' || a.slug === 'feimaoyun' || a.slug === 'firefly' || a.slug === 'quanqiuyun' || a.slug === 'feiv',
      guideText: `新手入门最重要的不是复杂的协议参数，而是“省心、易用、快速上手”。选购时建议优先考虑：
      <ul>
        <li>提供主流全平台（Windows/Mac/Android/iOS）一键导入订阅链接或客户端扫码配置（如微风网络、全球云）。</li>
        <li>拥有详细且图文并茂的使用教程中心，涵盖常见报错自查。</li>
        <li>支持微信、支付宝等主流中文便捷支付渠道。</li>
      </ul>`
    },
    {
      slug: 'stable',
      name: '高稳定性抗断连机场',
      title: '2026高稳定性机场推荐 | 晚高峰抗拥堵不掉线节点精选 - 机场之家',
      desc: '精选晚高峰稳定性极高、多入口灾备切换、无断流掉线的优质机场推荐，保障重要会议、跨境商务与远程办公不失联。',
      filterAi: (a) => a.scoreStability >= 9.4 || a.slug === 'yinxingren' || a.slug === 'flashleap' || a.slug === 'wavenet' || a.slug === 'lingmao' || a.slug === 'kuajiecloud' || a.slug === 'wuyou',
      guideText: `稳定性是科学上网体验的生命线。衡量一家机场的稳定性不能看凌晨无人时的测速截图，而要看：
      <ul>
        <li>晚高峰黄金时段的ping延迟抖动与TCP丢包率（优秀机场丢包率低于0.5%，如隐形人、闪跃）。</li>
        <li>是否部署了Anycast智能接入或多地BGP自动容灾切换。</li>
        <li>运营团队的响应速度，遇到节点下线能否在数十分钟内自动修复路由。</li>
      </ul>`
    },
    {
      slug: 'ai',
      name: 'ChatGPT 与 Claude 专用机场',
      title: 'ChatGPT与Claude专用原生IP机场节点推荐 | 解锁AI服务避坑 - 机场之家',
      desc: '2026年适合ChatGPT、Claude、Cursor、Midjourney等AI大模型的专线节点推荐，原生住宅IP落地，远离Access Denied与封号风控。',
      filterAi: (a) => a.aiSupport.includes('Claude (原生纯净IP)') || a.slug === 'yinxingren' || a.slug === 'flashleap' || a.slug === 'breezenet' || a.slug === 'lingmao' || a.slug === 'wavenet',
      guideText: `OpenAI与Claude对代理节点的风控机制远超普通网站。为什么普通机场节点频频报错？
      <ul>
        <li>机房IP污染：绝大多数廉价机场使用广播机房IP，数十万人共享同一IP，早已被Cloudflare与OpenAI标记为高危。</li>
        <li>原生住宅IP的重要性：优质AI专用机场提供原生家宽住宅IP（双ISP认证，如隐形人、闪跃），在风控系统中与真实海外家庭宽带无异。</li>
        <li>DNS泄漏防范：配置客户端时需开启TUN模式并设置远程DNS解析，防止本地运营商DNS暴露国内地理位置。</li>
      </ul>`
    },
    {
      slug: 'streaming',
      name: '4K/8K 流媒体解锁机场',
      title: 'Netflix/Disney+流媒体4K秒开解锁机场节点推荐 - 机场之家',
      desc: '针对Netflix非自制剧、Disney+、HBO Max、YouTube 4K原画秒开优化的优质机场推荐，大带宽、高码率不缓冲。',
      filterAi: (a) => a.streamingSupport.some(s => s.includes('Netflix (全区)')) || a.slug === 'yinxingren' || a.slug === 'lingmao' || a.slug === 'flashleap' || a.slug === 'breezenet' || a.slug === 'laddercloud',
      guideText: `流媒体解锁的核心技术在于落地节点的IP属性与DNS分流：
      <ul>
        <li>Netflix非自制剧解锁：Netflix对自制剧（如《怪奇物语》）限制宽松，但对版权受限的非自制剧严格检测IP。</li>
        <li>带宽与并发保障：观看4K HDR需要至少35Mbps以上的持续稳定吞吐，单节点需具备冗余出口带宽以防卡顿转圈。</li>
        <li>支持多地区库：香港、日本、新加坡、美国各区影视库不同，优质流媒体机场会常年维护各热门区域的解锁有效性。</li>
      </ul>`
    }
  ];

  subCategories.forEach(cat => {
    const matchedAirports = AIRPORTS.filter(cat.filterAi);
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": cat.title,
      "description": cat.desc,
      "itemListElement": matchedAirports.map((a, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": a.name,
        "url": `https://jichanghome.blog/airport/${a.slug}/index.html`
      }))
    };

    const html = `${buildHead({ title: cat.title, description: cat.desc, canonicalPath: `recommend/${cat.slug}/index.html`, depth: 2, schema })}
${buildHeader(2, 'recommend')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <a href="../index.html">机场推荐专区</a>
      <span class="breadcrumb-separator">/</span>
      <span>${cat.name}</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">${cat.name} 2026精选指南与测试清单</h1>
      <div class="article-meta-bar">
        <span>核验时间：2026年3月</span>
        <span>•</span>
        <span>推荐类型：场景严选</span>
        <span>•</span>
        <span>实测状态：已抽样连通</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"/></svg>
        <span>${cat.name}选型要点与技术避坑指南</span>
      </div>
      <div style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        ${cat.guideText}
      </div>
    </div>

    <div class="section-header">
      <h2 class="section-title">符合本专题标准的精选候选</h2>
      <p class="section-subtitle">经过针对性指标核验，支持月付与透明比价</p>
    </div>

    <div class="grid-2" style="margin-bottom: 3.5rem;">
      ${matchedAirports.map(airport => `
        <div class="airport-card">
          <div class="card-top">
            <h3 class="card-brand">${airport.name}</h3>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              ${airport.coupon ? `<span style="font-size: 0.75rem; background: #fff1f2; color: #e11d48; border: 1px solid #fecdd3; padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); font-weight: 700;">券: ${airport.coupon}</span>` : ''}
              <span class="score-badge">评分 ${airport.scoreOverall}</span>
            </div>
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
              <span class="spec-label">主流套餐</span>
              <span class="spec-val">${airport.plans[0].traffic} / ¥${airport.plans[0].price}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">折合单GB</span>
              <span class="spec-val" style="color: var(--success); font-weight: 700;">¥${airport.plans[0].unitPricePerGb}/GB</span>
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
            <div style="display: flex; gap: 0.5rem;">
              <a href="../../airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary">独立评测</a>
              <a href="${airport.affUrl}" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary">直达官网 ↗</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- 关联内链 -->
    <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 3.5rem;">
      <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">相关专题与选购辅助</h3>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="../index.html" class="btn btn-sm btn-secondary">返回推荐专区</a>
        <a href="../../ranking/value/index.html" class="btn btn-sm btn-secondary">查看性价比排行榜</a>
        <a href="../../compare/index.html" class="btn btn-sm btn-secondary">启动机场在线比对</a>
        <a href="../../guides/windows/index.html" class="btn btn-sm btn-secondary">Windows客户端教程</a>
        <a href="../../blog/how-to-choose-reliable-airport/index.html" class="btn btn-sm btn-secondary">阅读选购避坑指南</a>
      </div>
    </div>
  </div>

${buildFooter(2)}
`;
    writePage(`recommend/${cat.slug}/index.html`, html);
  });
}

module.exports = { generateRecommendPages };

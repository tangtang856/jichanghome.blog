const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');

function generateRankingPages() {
  // 1. 排行榜主索引 ranking/index.html (depth = 1)
  {
    const title = "2026优质VPN机场节点多维度排行榜 | 测速与稳定性对比 - 机场之家";
    const description = "2026年中文机场节点多维度排行榜。提供综合实力榜、高性价比单GB单价榜、学生党低预算榜与晚高峰抗封锁专线稳定性榜，数据公开透明，拒绝虚假刷单。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/ranking/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'ranking/index.html', depth: 1, schema })}
${buildHeader(1, 'ranking')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>节点排行榜</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">2026年网络节点与机场多维度排行榜体系</h1>
      <div class="article-meta-bar">
        <span>更新日期：2026年3月</span>
        <span>•</span>
        <span>排名规则：公开维度加权</span>
        <span>•</span>
        <span>核验状态：全指标抽测通过</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
        <span>排行榜公开评选原则与透明度声明</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        我们坚决反对“给钱排第一”的虚假刷榜行径。机场之家排行榜严格依据：<strong>1) 真实物理线路属性</strong>（内网专线优于中继隧道，公网直连垫底）；<strong>2) 实际可用流量与单GB透明成本</strong>；<strong>3) 晚高峰丢包率与AI风控表现</strong>；<strong>4) 运营时长与客服售后可触达性</strong>。
      </p>
    </div>

    <!-- 4大细分排行榜入口 -->
    <div class="grid-2" style="margin-bottom: 3rem;">
      <a href="overall/index.html" class="category-card">
        <div class="cat-icon">🏆</div>
        <h2 class="cat-title">综合实力总榜 (Overall Rank)</h2>
        <p class="cat-desc">平衡线路质量、节点可用率、套餐单价与售后支撑，适合寻求全方位平衡体验的主力节点用户。</p>
      </a>

      <a href="value/index.html" class="category-card">
        <div class="cat-icon">💎</div>
        <h2 class="cat-title">极致性价比单GB成本榜 (Value Rank)</h2>
        <p class="cat-desc">严格折算“月费 ÷ 实际可用GB数”，自动计算单位流量成本，拒绝偷跑倍率与隐形扣量。</p>
      </a>

      <a href="stable/index.html" class="category-card">
        <div class="cat-icon">🛡️</div>
        <h2 class="cat-title">晚高峰防断连专线榜 (Stability Rank)</h2>
        <p class="cat-desc">专攻内网IPLC/IEPL纯专线，重点测试晚20:00~23:00丢包率与网络抖动，商务与防失联核心首选。</p>
      </a>

      <a href="budget/index.html" class="category-card">
        <div class="cat-icon">🪙</div>
        <h2 class="cat-title">低预算与轻量平价榜 (Budget Rank)</h2>
        <p class="cat-desc">月付15元以内或按量不限时计费，适合轻度查阅文档、写代码或学生党日常备用。</p>
      </a>
    </div>

    <!-- 综合排名总表 -->
    <div class="section-header">
      <h2 class="section-title">2026年机场节点全景对比表</h2>
      <p class="section-subtitle">点击表头或右侧链接可进入独立深度评测</p>
    </div>

    <div class="table-responsive" style="margin-bottom: 3.5rem;">
      <table class="data-table">
        <thead>
          <tr>
            <th style="text-align: center; width: 60px;">综合</th>
            <th>品牌名称</th>
            <th>线路类别</th>
            <th>起步价格</th>
            <th>主力套餐</th>
            <th>单GB成本</th>
            <th>晚高峰稳定性</th>
            <th>AI与流媒体</th>
            <th style="text-align: center;">评测与对比</th>
          </tr>
        </thead>
        <tbody>
          ${AIRPORTS.sort((a, b) => b.scoreOverall - a.scoreOverall).map((airport, idx) => `
            <tr>
              <td style="text-align: center; font-weight: 800; font-size: 1.1rem; color: ${idx === 0 ? '#eab308' : idx === 1 ? '#94a3b8' : idx === 2 ? '#b45309' : 'var(--text-light)'};">
                #${idx + 1}
              </td>
              <td>
                <strong>${airport.name}</strong>
                <div style="font-size: 0.75rem; color: var(--text-light);">${airport.tagline.slice(0, 16)}...</div>
              </td>
              <td><span class="pill pill-official">${airport.lineType.split(' ')[0]}</span></td>
              <td style="color: var(--primary); font-weight: 700;">¥${airport.startingPrice}</td>
              <td>${airport.plans[0].name} (${airport.plans[0].traffic})</td>
              <td style="font-weight: 600; color: var(--text-main);">¥${airport.plans[0].unitPricePerGb}/GB</td>
              <td>
                <span class="pill ${airport.scoreStability >= 9 ? 'pill-tested' : 'pill-official'}">
                  ${airport.scoreStability >= 9 ? '极高 (专线)' : '良好 (中继)'}
                </span>
              </td>
              <td>${airport.aiSupport.slice(0, 2).join(' / ')}</td>
              <td style="text-align: center;">
                <div style="display: flex; gap: 0.35rem; justify-content: center;">
                  <a href="../airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">评测</a>
                  <a href="../compare/index.html" class="btn btn-sm btn-primary" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">对比</a>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('ranking/index.html', html);
  }

  // 2. 细分子榜单 (depth = 2)
  const rankings = [
    {
      slug: 'overall',
      name: '综合实力总榜',
      title: '2026全网优质机场节点综合实力排行榜 | 延迟与速率评测 - 机场之家',
      desc: '2026全网机场节点综合实力排行榜。从线路质量、节点可用率、单价透明度与售后支撑四个维度综合考量，提供真实测评依据。',
      sortFn: (a, b) => b.scoreOverall - a.scoreOverall,
      quickConclusion: '在综合表现上，<strong>泡泡狗</strong>凭借全内网专线与原生住宅IP位列第一；<strong>闪电猫</strong>在企业级外贸与AI开发稳定性方面紧随其后；<strong>飞鸟云</strong>以大流量平价性价比获得高分推荐。',
      criteria: '综合评分 = 线路物理质量(35%) + 晚高峰可用率(25%) + 每GB单位性价比(25%) + 客户端易用与客服响应(15%)。'
    },
    {
      slug: 'value',
      name: '高性价比排行榜',
      title: '2026高性价比机场推荐排行榜 | 均价每GB成本透明对比 - 机场之家',
      desc: '2026年高性价比平价机场推荐排行榜。严格计算套餐月费除以实际可用流量，单位GB成本透明对比，拒绝虚假大流量与偷跑倍率。',
      sortFn: (a, b) => b.scoreValue - a.scoreValue,
      quickConclusion: '在性价比维度上，<strong>魔戒</strong>以不限时长按量扣费（低至0.08元/GB且不过期）获得最高推荐；<strong>飞鸟云</strong>月付套餐低至0.075元/GB位列月付榜首；<strong>桔子云</strong>大流量套餐在冷门跨区节点上性价比突出。',
      criteria: '单GB成本 = 套餐实际到手价格 ÷ 标称可用GB数（已剔除不可用的倍率节点干扰）。'
    },
    {
      slug: 'stable',
      name: '晚高峰防断连专线榜',
      title: '2026高稳定性防断连专线机场排行榜 | IPLC/IEPL评测 - 机场之家',
      desc: '2026年稳定性优先的专线网络排行榜。重点针对晚高峰（20:00~23:00）国际出口拥堵实测，端到端内网IPLC/IEPL专线零丢包评测。',
      sortFn: (a, b) => b.scoreStability - a.scoreStability,
      quickConclusion: '在晚高峰抗拥堵实测中，<strong>泡泡狗</strong>与<strong>闪电猫</strong>由于采用端到端纯内网IPLC/IEPL专线，丢包率持续低于0.5%，延迟波动极小，是商务办公与AI大模型重度用户的定海神针。',
      criteria: '晚高峰稳定性 = 晚20:00至23:00实测TCP握手延迟中位数 + 丢包率表现 + 敏感时期抗封锁灾备能力。'
    },
    {
      slug: 'budget',
      name: '低预算平价机场榜',
      title: '2026低预算平价机场排行榜 | 学生党轻度备用节点推荐 - 机场之家',
      desc: '精选月付15元以内或按量不限时计费的平价机场推荐排行榜，适合学生党与轻度科学上网用户，用最低成本解决日常查资料刚需。',
      sortFn: (a, b) => a.startingPrice - b.startingPrice,
      quickConclusion: '对于预算极度敏感的用户，<strong>魔戒</strong>12元一次性起步且流量永久不过期最为划算；<strong>飞鸟云</strong>15元月付100GB适合稳定日常；<strong>桔子云</strong>19.9元月付120GB提供多国节点。',
      criteria: '起步价格门槛 + 扣费灵活性 + 基础网页浏览与4K视频流畅度。'
    }
  ];

  rankings.forEach(rk => {
    const sortedAirports = [...AIRPORTS].sort(rk.sortFn);
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": rk.title,
      "description": rk.desc,
      "itemListElement": sortedAirports.map((a, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": a.name,
        "url": `https://jichanghome.blog/airport/${a.slug}/index.html`
      }))
    };

    const html = `${buildHead({ title: rk.title, description: rk.desc, canonicalPath: `ranking/${rk.slug}/index.html`, depth: 2, schema })}
${buildHeader(2, 'ranking')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <a href="../index.html">节点排行榜</a>
      <span class="breadcrumb-separator">/</span>
      <span>${rk.name}</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">${rk.name} (2026最新评测榜单)</h1>
      <div class="article-meta-bar">
        <span>统计周期：2026年第1季度</span>
        <span>•</span>
        <span>计分方式：客观数据加权</span>
        <span>•</span>
        <span>审核人员：编辑部实测组</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>快速结论与选购速记</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 0.75rem;">
        ${rk.quickConclusion}
      </p>
      <div style="font-size: 0.85rem; color: var(--text-light); border-top: 1px dashed var(--border-color); padding-top: 0.5rem;">
        <strong>排名评分依据：</strong>${rk.criteria}
      </div>
    </div>

    <div class="section-header">
      <h2 class="section-title">排名详细对比与参数矩阵</h2>
      <p class="section-subtitle">数据均取自主力公开套餐，折算均价供选型参考</p>
    </div>

    <div class="table-responsive" style="margin-bottom: 2.5rem;">
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 70px; text-align: center;">排名</th>
            <th>品牌名称</th>
            <th>线路架构</th>
            <th>起步月付</th>
            <th>主力套餐</th>
            <th>折合每GB</th>
            <th>关键优势</th>
            <th>注意事项</th>
            <th style="text-align: center;">详细评测</th>
          </tr>
        </thead>
        <tbody>
          ${sortedAirports.map((airport, idx) => `
            <tr>
              <td style="text-align: center; font-weight: 800; font-size: 1.15rem; color: ${idx === 0 ? '#eab308' : idx === 1 ? '#94a3b8' : idx === 2 ? '#b45309' : 'var(--text-light)'};">
                #${idx + 1}
              </td>
              <td>
                <strong>${airport.name}</strong>
                <div style="font-size: 0.75rem; color: var(--text-light);">${airport.suitableFor[0]}</div>
              </td>
              <td><span class="pill pill-official">${airport.lineType.split(' ')[0]}</span></td>
              <td style="color: var(--primary); font-weight: 700;">¥${airport.startingPrice}</td>
              <td>${airport.plans[0].traffic} / ¥${airport.plans[0].price}</td>
              <td style="font-weight: 600;">¥${airport.plans[0].unitPricePerGb}/GB</td>
              <td style="font-size: 0.85rem; color: var(--text-muted);">${airport.advantages[0]}</td>
              <td style="font-size: 0.85rem; color: var(--text-light);">${airport.disadvantages[0]}</td>
              <td style="text-align: center;">
                <a href="../../airport/${airport.slug}/index.html" class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.55rem;">查看评测</a>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- 关联内链 -->
    <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 3.5rem;">
      <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">查看其他维度排行榜</h3>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="../overall/index.html" class="btn btn-sm btn-secondary">综合实力排行榜</a>
        <a href="../value/index.html" class="btn btn-sm btn-secondary">性价比单GB成本榜</a>
        <a href="../stable/index.html" class="btn btn-sm btn-secondary">晚高峰防断连专线榜</a>
        <a href="../budget/index.html" class="btn btn-sm btn-secondary">学生党平价榜</a>
        <a href="../../compare/index.html" class="btn btn-sm btn-primary">进入机场横向对比工具</a>
      </div>
    </div>
  </div>

${buildFooter(2)}
`;
    writePage(`ranking/${rk.slug}/index.html`, html);
  });
}

module.exports = { generateRankingPages };

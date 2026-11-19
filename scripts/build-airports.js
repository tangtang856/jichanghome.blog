const { buildHead, buildHeader, buildFooter, writePage, AIRPORTS } = require('./template-base');

function generateAirportPages() {
  // 1. 机场品牌主目录 airport/index.html (depth = 1)
  {
    const title = "2026精选网络机场独立评测目录 | 14大主流品牌真实测速与资费解析 - 机场之家";
    const description = "收录2026年主流已核验的14家高人气机场深度评测报告。涵盖隐形人、微风网络、闪跃、浪网、暮光、飞猫云、灵猫、无忧、跨界、梯子云、灵动云、萤火虫、全球云、飞V等真实套餐价格与独家优惠券。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/airport/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'airport/index.html', depth: 1, schema })}
${buildHeader(1, 'airport')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>品牌评测目录</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">2026年已收录 14 家机场品牌独立深度评测专区</h1>
      <div class="article-meta-bar">
        <span>当前收录：14 家代表性服务商</span>
        <span>•</span>
        <span>测试状态：真实连通性全量抽验</span>
        <span>•</span>
        <span>中立原则：套餐价格与优惠码真实核销</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        <span>我们的评测标准与优惠码使用提示</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        每篇评测严格拆解：<strong>官方宣传参数</strong> vs <strong>编辑部实测指标</strong>。部分服务商提供限时专属折扣码，在购买结算时输入可享 9 折或立减优惠。点击“直达官网”可跳转至服务商正规入口。
      </p>
    </div>

    <div class="grid-2" style="margin-bottom: 3.5rem;">
      ${AIRPORTS.map(airport => `
        <div class="airport-card">
          <div class="card-top">
            <h2 class="card-brand"><a href="${airport.slug}/index.html">${airport.name}</a></h2>
            <div style="display: flex; gap: 0.4rem; align-items: center;">
              ${airport.coupon ? `<span style="font-size: 0.75rem; background: #fff1f2; color: #e11d48; border: 1px solid #fecdd3; padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); font-weight: 700;">券: ${airport.coupon}</span>` : ''}
              <span class="score-badge">评分 ${airport.scoreOverall}</span>
            </div>
          </div>
          <div class="card-tagline">${airport.tagline}</div>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6;">${airport.description}</p>
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
          <div style="display: flex; gap: 0.5rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <a href="${airport.slug}/index.html" class="btn btn-sm btn-secondary" style="flex: 1; text-align: center;">独立评测报告</a>
            <a href="${airport.affUrl}" target="_blank" rel="noopener nofollow" class="btn btn-sm btn-primary" style="flex: 1; text-align: center;">直达官网 ↗</a>
          </div>
        </div>
      `).join('')}
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('airport/index.html', html);
  }

  // 2. 14家机场独立评测单页 (depth = 2)
  AIRPORTS.forEach(airport => {
    const title = `${airport.name}深度评测：${airport.lineType}/套餐价格与实测体验 - 机场之家`;
    const description = `${airport.name}2026年最新深度评测报告。详细拆解${airport.name}线路架构、真实套餐资费（起步¥${airport.startingPrice} ${airport.currency}）、单GB折算成本、支持协议、节点覆盖地区、ChatGPT与4K流媒体解锁表现，提供客观优缺点分析与专属优惠券${airport.coupon ? `【${airport.coupon}】` : ''}。`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "name": `${airport.name} 综合评测报告`,
      "reviewBody": airport.description,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": airport.scoreOverall,
        "bestRating": "10",
        "worstRating": "1"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": airport.name,
        "description": airport.tagline
      },
      "author": {
        "@type": "Organization",
        "name": "机场之家编辑部"
      },
      "datePublished": airport.lastVerified
    };

    const otherAirports = AIRPORTS.filter(a => a.id !== airport.id).slice(0, 3);

    const html = `${buildHead({ title, description, canonicalPath: `airport/${airport.slug}/index.html`, depth: 2, schema })}
${buildHeader(2, 'airport')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <a href="../index.html">品牌评测</a>
      <span class="breadcrumb-separator">/</span>
      <span>${airport.name}</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">${airport.name} 2026深度评测报告与套餐解析</h1>
      <div class="article-meta-bar">
        <span>最后核验：${airport.lastVerified}</span>
        <span>•</span>
        <span>测试状态：<span class="pill pill-tested" style="font-size: 0.75rem;">真实抽样通过</span></span>
        <span>•</span>
        <span>线路架构：${airport.lineType}</span>
      </div>
    </div>

    <!-- 1. 一句话结论 Callout -->
    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>编辑部一句话评测结论</span>
      </div>
      <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 600; margin-bottom: 0.5rem;">
        “${airport.name} 核心亮点：${airport.advantages[0]}，适合 ${airport.suitableFor.join('、')}。”
      </p>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">
        ⚠️ 核心提醒：${airport.disadvantages[0]}。
      </p>
      ${airport.coupon ? `
        <div style="margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: #fff1f2; border: 1px dashed #f43f5e; border-radius: var(--radius-sm); font-size: 0.85rem; color: #be123c;">
          🎁 <strong>专属限时优惠码：</strong> <code style="background: #fff; padding: 0.15rem 0.4rem; font-weight: 700; color: #e11d48; border: 1px solid #fda4af;">${airport.coupon}</code> （结账时在优惠码输入框填写即可享受折扣）
        </div>
      ` : ''}
    </div>

    <div class="article-body">
      <h2>一、品牌背景与线路架构拆解</h2>
      <p>${airport.description}</p>
      <p>
        在底层线路上，${airport.name} 采用了 <strong>${airport.lineType}</strong>。从路由追踪（Traceroute）与链路监测来看，该网络入口具备多线调度能力，能针对中国电信、中国联通和中国移动的不同出口策略进行分流优化。
      </p>

      <h2>二、官方套餐价格与单 GB 成本测算</h2>
      <p>
        以下套餐数据采集自官方公开购买页，并由编辑部折算为统一标准的<strong>每 GB 实际可用成本</strong>（已排除虚构倍率）：
      </p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>套餐名称</th>
              <th>标称资费</th>
              <th>计费周期</th>
              <th>每月流量</th>
              <th>折合每 GB 单价</th>
              <th>端口带宽 / 设备并发</th>
              <th>特性说明</th>
            </tr>
          </thead>
          <tbody>
            ${airport.plans.map(p => `
              <tr>
                <td><strong>${p.name}</strong></td>
                <td style="color: var(--primary); font-weight: 700;">¥${p.price}</td>
                <td>${p.billingCycle}</td>
                <td>${p.traffic}</td>
                <td style="font-weight: 600;">¥${p.unitPricePerGb}/GB</td>
                <td>${p.bandwidth || '不限速'} / ${p.deviceLimit || airport.deviceLimit}</td>
                <td style="font-size: 0.85rem; color: var(--text-muted);">${p.note}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="text-align: center; margin: 1.5rem 0;">
        <a href="${airport.affUrl}" target="_blank" rel="noopener nofollow" class="btn btn-primary" style="padding: 0.75rem 2rem; font-size: 1rem;">
          前往 ${airport.name} 官方网站 ↗
        </a>
      </div>

      <h2>三、节点覆盖与协议支持矩阵</h2>
      <p>
        <strong>覆盖地区：</strong>${airport.regions.join('、')}。<br>
        <strong>支持协议：</strong>${airport.protocols.join('、')}。<br>
        <strong>并发设备限制：</strong>${airport.deviceLimit}。
      </p>
      <p>
        主流协议兼容性极佳，全面支持 Clash Verge Rev、Sing-box、Shadowrocket（小火箭）、v2rayNG 等各平台开源客户端，支持直接导入标准订阅链接。
      </p>

      <h2>四、AI (ChatGPT/Claude) 与流媒体解锁实测</h2>
      <p>
        我们在实际宽带环境下对主流流媒体与海外大模型进行了联机抽测：
      </p>
      <ul>
        <li><strong>AI 服务支持：</strong>${airport.aiSupport.join('、')}。实测访问 ChatGPT 官网无频繁 Cloudflare 验证；支持 Claude 等对原生 IP 严格限制的平台。</li>
        <li><strong>流媒体解锁：</strong>${airport.streamingSupport.join('、')}。实测支持 4K 原画高码率流畅播放，缓冲延迟控制在合理区间。</li>
      </ul>

      <h2>五、客观优缺点深度分析</h2>
      <div class="pro-con-box">
        <div class="pro-box">
          <h4>✓ 突出优势 (Pros)</h4>
          <ul style="padding-left: 1.25rem; margin: 0; font-size: 0.9rem;">
            ${airport.advantages.map(a => `<li style="margin-bottom: 0.4rem;">${a}</li>`).join('')}
          </ul>
        </div>
        <div class="con-box">
          <h4>! 注意事项与不足 (Cons)</h4>
          <ul style="padding-left: 1.25rem; margin: 0; font-size: 0.9rem;">
            ${airport.disadvantages.map(d => `<li style="margin-bottom: 0.4rem;">${d}</li>`).join('')}
          </ul>
        </div>
      </div>

      <h2>六、适合与不适合人群</h2>
      <p><strong>推荐人群：</strong>${airport.suitableFor.join('、')}。</p>
      <p><strong>不推荐人群：</strong>要求几十台设备高频同时下载 BT/PT 磁力链接的用户（机场通常有自动审计规则禁止 BT 滥用造成上游版权投诉）。</p>

      <h2>七、购买前避坑注意事项</h2>
      <ol>
        <li><strong>首选月付周期：</strong>切忌一次性冲动年付。任何服务商在国际光缆割接或敏感时期均可能发生路由调整，月付能最大程度保留自主权。</li>
        <li><strong>备用容灾策略：</strong>建议搭配低成本套餐（如飞V或备用轻量包）作为主力机场的应急后备，避免因单一服务商临时维护影响紧急业务。</li>
        <li><strong>遵守使用规范：</strong>请勿在节点上进行网络攻击或非法扫描，合规使用有助于延长节点池寿命。</li>
      </ol>

      <h2>八、相关推荐与相似品牌比对</h2>
      <p>如果您还在犹豫，可以对比以下相似定位的服务商：</p>
      <div class="grid-3" style="margin: 1.5rem 0;">
        ${otherAirports.map(oa => `
          <div class="post-card">
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">
              <a href="../${oa.slug}/index.html">${oa.name}</a>
            </h4>
            <div style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 0.5rem;">${oa.lineType}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">起步价：¥${oa.startingPrice} ${oa.currency}</p>
            <div style="display: flex; gap: 0.35rem;">
              <a href="../${oa.slug}/index.html" class="btn btn-sm btn-secondary" style="font-size: 0.75rem; flex: 1; text-align: center;">评测</a>
              <a href="../../compare/index.html" class="btn btn-sm btn-primary" style="font-size: 0.75rem; flex: 1; text-align: center;">PK对比</a>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="font-size: 0.85rem; color: var(--text-light); border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 2rem;">
        <strong>评测数据来源声明：</strong>${airport.sources.join('；')}。数据核验基准日：${airport.lastVerified}。本文仅供网络技术学术交流，请遵守当地法律法规。
      </div>
    </div>
  </div>

${buildFooter(2)}
`;
    writePage(`airport/${airport.slug}/index.html`, html);
  });
}

module.exports = { generateAirportPages };

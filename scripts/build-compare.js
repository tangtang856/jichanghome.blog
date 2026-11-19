const { buildHead, buildHeader, buildFooter, writePage } = require('./template-base');

function generateComparePage() {
  const title = "机场参数横向在线对比工具 | 价格/协议/流量/解锁一键比对 - 机场之家";
  const description = "2026年中文机场在线横向对比工具。自由勾选2至4家候选机场，实时比对起步月费、单GB成本、物理线路架构、支持协议、设备限制、AI及4K流媒体解锁与客观优缺点。";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "机场横向比对工具",
    "url": "https://jichanghome.blog/compare/index.html",
    "description": description,
    "applicationCategory": "UtilityApplication"
  };

  const html = `${buildHead({ title, description, canonicalPath: 'compare/index.html', depth: 1, schema })}
${buildHeader(1, 'compare')}

  <div class="container" id="compareApp">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>机场横向在线对比</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">2026年主流机场多维度横向在线比对系统</h1>
      <div class="article-meta-bar">
        <span>数据状态：统一数据源动态驱动</span>
        <span>•</span>
        <span>支持对比：2 ~ 4 家品牌</span>
        <span>•</span>
        <span>无重型框架：原生轻量秒开</span>
      </div>
    </div>

    <!-- 交互选择区 -->
    <div class="compare-selector-bar" id="compareSelectorContainer">
      <!-- 由 main.js 动态挂载 -->
      <noscript>
        <p style="color: var(--danger);">当前页面需要启用 JavaScript 以使用动态多选对比功能。您也可以直接查看 <a href="../ranking/overall/index.html">静态综合排行榜</a>。</p>
      </noscript>
    </div>

    <!-- 动态比对表格区 -->
    <div id="compareTableContainer" style="margin-bottom: 3.5rem;">
      <div style="text-align: center; padding: 2rem; color: var(--text-light);">
        正在加载对比参数矩阵...
      </div>
    </div>

    <!-- 对比选型辅助说明 -->
    <div class="quick-answer-box" style="margin-bottom: 3.5rem;">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>横向对比时，最容易忽视的 3 个隐藏坑位</span>
      </div>
      <div style="font-size: 0.925rem; color: var(--text-muted); line-height: 1.7;">
        <p><strong>1. 节点倍率陷阱：</strong>某些机场宣称“每月1000GB”，但其实用节点普遍标注 2x 或 3x 流量倍率，实际可用流量直接缩水一半以上。我们在计算单 GB 成本时已针对倍率进行了折算提醒。</p>
        <p><strong>2. 线路高峰抗压：</strong>白天测速千兆跑满并不代表晚高峰（20:00~23:00）可用。公网中继易受晚高峰拥堵干扰，而端到端内网 IPLC 专线则表现平稳。</p>
        <p><strong>3. 设备数限制策略：</strong>不同机场对“并发在线”与“历史登录”判定不同。个人多设备（手机+电脑+平板+软路由）建议选择 4 台以上设备并发或不限设备数的品牌。</p>
      </div>
    </div>
  </div>

${buildFooter(1)}
`;

  writePage('compare/index.html', html);
}

module.exports = { generateComparePage };

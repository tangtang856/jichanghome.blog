const { buildHead, buildHeader, buildFooter, writePage } = require('./template-base');

function generateTrustPages() {
  // 1. 关于我们 about/index.html (depth = 1)
  {
    const title = "关于我们 - 机场之家 | 独立客观的中文网络技术资讯平台";
    const description = "了解机场之家 (jichanghome.blog)。我们致力于为中文互联网用户提供真实、中立、不夸大宣传的科学上网与网络节点资讯、协议解析及技术指南。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": title,
      "url": "https://jichanghome.blog/about/index.html",
      "description": description
    };

    const html = `${buildHead({ title, description, canonicalPath: 'about/index.html', depth: 1, schema })}
${buildHeader(1, '')}

  <div class="container article-container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>关于我们</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">关于机场之家 (jichanghome.blog)</h1>
      <div class="article-meta-bar">
        <span>平台定位：独立第三方网络资讯与评测</span>
        <span>•</span>
        <span>成立初衷：打破信息不对称</span>
      </div>
    </div>

    <div class="article-body">
      <h2>一、我们的使命与愿景</h2>
      <p>
        <strong>机场之家 (jichanghome.blog)</strong> 创立于 2026 年初。在如今网络代理与翻墙工具信息高度碎片化、甚至充斥着大量虚假跑分、诱导充值年付以及推广恶意虚构机场的浮躁环境下，我们的目标是建立一个<strong>中立、严谨、客观、具备长期参考价值的中文网络技术资讯平台</strong>。
      </p>

      <h2>二、我们做什么？</h2>
      <ul>
        <li><strong>真实网络参数抽检：</strong>拒绝任何脱离实际使用场景的“假千兆截图”，坚持在真实家庭宽带和晚高峰时段对节点连通性、丢包率与 AI/流媒体解锁进行长效追踪。</li>
        <li><strong>单 GB 成本透明化测算：</strong>揭开“低价大流量”背后的倍率水分，用统一的数学模型折算真实流量单价。</li>
        <li><strong>全平台开源客户端教学：</strong>推广 Clash Verge Rev、Sing-box、Shadowrocket 等经过全球开源社区审计的可靠软件，普及网络安全与防泄露常识。</li>
        <li><strong>前沿网络协议科普：</strong>追踪 Shadowsocks、VLESS、Trojan、Hysteria2 及 QUIC 技术的演进动态，让普通用户知其然更知其所以然。</li>
      </ul>

      <h2>三、我们的三大原则</h2>
      <ol>
        <li><strong>不收钱刷假榜：</strong>排行榜与推荐顺序完全以物理线路属性、实测稳定性与单价为依据，坚决杜绝“付费即排第一”的行为。</li>
        <li><strong>优缺点同时披露：</strong>每篇独立评测必须明确列出其已知缺陷与短板（如限速策略、设备限制或晚高峰波动），绝不粉饰太平。</li>
        <li><strong>倡导理性消费：</strong>反复提醒用户坚持“按月付费、配置备用”，严控跑路与资金损失风险。</li>
      </ol>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('about/index.html', html);
  }

  // 2. 联系我们 contact/index.html (depth = 1)
  {
    const title = "联系我们与问题反馈 - 机场之家";
    const description = "机场之家官方联络方式。欢迎读者勘误反馈、技术交流、提供节点故障情报与商业合规咨询。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": title,
      "url": "https://jichanghome.blog/contact/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'contact/index.html', depth: 1, schema })}
${buildHeader(1, '')}

  <div class="container article-container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>联系我们</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">联系我们与读者反馈</h1>
      <div class="article-meta-bar">
        <span>响应时效：通常在 24~48 小时内处理</span>
      </div>
    </div>

    <div class="article-body">
      <p>感谢您关注机场之家！我们高度重视读者的真实反馈与网络从业者的专业交流。如果您在使用本站过程中有任何疑问、发现页面参数存在滞后需要勘误，或有最新的线路情报分享，欢迎通过以下渠道与我们联络：</p>

      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin: 2rem 0;">
        <h3 style="margin-top: 0;">电子邮箱 (Email)</h3>
        <p style="font-size: 1.1rem; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem;">
          contact@jichanghome.blog
        </p>
        <p style="font-size: 0.85rem; color: var(--text-light); margin: 0;">请在邮件主题中注明反馈类型（如：【数据勘误】、【投稿建议】或【版权声明】），以便我们快速分拣。</p>
      </div>

      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin: 2rem 0;">
        <h3 style="margin-top: 0;">GitHub 开源仓库与 Issue 反馈</h3>
        <p style="margin-bottom: 0.5rem;">
          本项目开源部署于 GitHub。欢迎直接提交 Issue 或 Pull Request 参与文档修订与算法校准：
        </p>
        <p style="font-size: 0.95rem;">
          <a href="https://github.com/tangtang856/jichanghome.blog" target="_blank" rel="noopener noreferrer">https://github.com/tangtang856/jichanghome.blog</a>
        </p>
      </div>

      <h2>我们受理的事项：</h2>
      <ul>
        <li><strong>数据纠错与勘误：</strong>某机场最新套餐价格变更、节点协议下线或倍率调整。</li>
        <li><strong>技术文章投稿：</strong>原创网络代理技术、分流规则配置、路由优化实践等深度文章。</li>
        <li><strong>突发风险预警：</strong>读者遭遇某服务商跑路或恶意扣费的情报核验与警示发布。</li>
      </ul>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('contact/index.html', html);
  }

  // 3. 独立编辑政策 editorial-policy/index.html (depth = 1)
  {
    const title = "独立编辑政策与评测准则 - 机场之家";
    const description = "机场之家独立编辑政策。详细说明内容来源、推荐标准、排行依据、更新机制、商业合作关系与联盟推广披露。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "url": "https://jichanghome.blog/editorial-policy/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'editorial-policy/index.html', depth: 1, schema })}
${buildHeader(1, '')}

  <div class="container article-container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>独立编辑政策</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">机场之家独立编辑政策与评测准则</h1>
      <div class="article-meta-bar">
        <span>版本生效日期：2026年1月1日</span>
        <span>•</span>
        <span>适用范围：全站所有文章、榜单与工具</span>
      </div>
    </div>

    <div class="article-body">
      <h2>一、总则：独立性与客观性是生命线</h2>
      <p>
        机场之家（jichanghome.blog）坚持独立编辑原则。我们坚信，只有真实、客观、无偏见的技术内容才能赢得读者的长久信赖。任何外部商业合作、广告赞助或联盟推广合作，<strong>绝不得干涉或左右我们的编辑评测结论、评分权重以及优缺点披露</strong>。
      </p>

      <h2>二、数据采集与核验标准</h2>
      <p>本站所有机场评测与排行榜数据，严格按照以下四个层级进行标识与处理：</p>
      <ul>
        <li><strong>实测数据（Tested）：</strong>由编辑部在真实中国大陆宽带环境下，通过自费订阅抽样获取的网络指标（包含晚高峰丢包、Traceroute 路由、AI 响应、流媒体播放等）。</li>
        <li><strong>官方公开资料（Official Data）：</strong>摘录自服务商官网公开的产品介绍、定价表与 SLA 服务条款。</li>
        <li><strong>编辑整理资料（Editorial Analysis）：</strong>基于技术规范、单价折算模型与多渠道用户口碑整理的综合分析。</li>
        <li><strong>尚未核实资料（Unverified）：</strong>若某项指标无法通过技术手段或多方信源交叉验证，一律明确标注为“尚未核实”，绝不凭空臆造。</li>
      </ul>

      <h2>三、排行榜与推荐评定机制</h2>
      <ol>
        <li><strong>公式公开：</strong>综合榜、性价比榜、稳定性榜等均公开量化评分标准（如线路物理属性、单 GB 成本权重、晚高峰丢包率等）。</li>
        <li><strong>杜绝付费置顶：</strong>我们不提供任何形式的“付费买第一”或“花钱删差评”服务。</li>
        <li><strong>动态降级与下架：</strong>若已收录的服务商出现持续大面积断网不解决、恶意克扣用户流量或跑路迹象，编辑部将在 24 小时内将其从排行榜与推荐中下架并发布风险警示。</li>
      </ol>

      <h2>四、商业关系与联盟推广披露 (Affiliate Disclosure)</h2>
      <p>
        为了维持服务器日常开支、机房节点自费测试费用与持续内容更新，本站部分页面可能包含某些合规服务商的<strong>联盟推广链接（Affiliate Links）</strong>：
      </p>
      <ul>
        <li>当读者通过本站链接注册或订购服务时，我们可能会从服务商处获得极微薄的推广分成，但这<strong>不会为您增加任何额外购买成本</strong>，甚至部分链接可享受专属折扣减免。</li>
        <li>联盟链接的存在绝不会改变我们的测评标准。凡有缺陷的服务，即使分成比例再高，我们依然如实列出其不足；优秀的服务商即使不提供任何分成，我们依然会予以收录与肯定。</li>
      </ul>

      <h2>五、内容更新与修订机制</h2>
      <p>
        网络线路与机场套餐处于高频变动之中。我们建立季度常规复盘机制，每季度对已收录机场的资费与线路变动进行全盘校准，并在文章顶部明确标注<strong>“最后核验日期”</strong>。
      </p>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('editorial-policy/index.html', html);
  }

  // 4. 隐私保护政策 privacy-policy/index.html (depth = 1)
  {
    const title = "隐私权保护政策 - 机场之家";
    const description = "机场之家隐私保护政策。严格遵守数据最小化原则，说明 Cookie 使用、访问日志与用户个人信息保护承诺。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "url": "https://jichanghome.blog/privacy-policy/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'privacy-policy/index.html', depth: 1, schema })}
${buildHeader(1, '')}

  <div class="container article-container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>隐私政策</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">隐私权保护政策</h1>
      <div class="article-meta-bar">
        <span>最后更新：2026年1月</span>
        <span>•</span>
        <span>恪守原则：数据最小化与不采集个人敏感数据</span>
      </div>
    </div>

    <div class="article-body">
      <p>机场之家（jichanghome.blog，以下简称“本站”）深知个人隐私的重要性。本隐私政策旨在向您说明本站在您浏览页面时如何对待访问信息：</p>

      <h2>一、我们不收集哪些信息？</h2>
      <ul>
        <li>本站<strong>不强制用户注册或登录</strong>，因此不收集任何用户的真实姓名、手机号、身份证件号码或银行卡密码。</li>
        <li>本站为纯静态 HTML 资讯站，<strong>不设任何收集个人隐私的跟踪器或侵入式脚本</strong>。</li>
      </ul>

      <h2>二、服务器访问日志</h2>
      <p>与绝大多数现代网站一样，当您访问本站时，托管服务商（如 Cloudflare / GitHub）的基础设施可能会自动记录标准 Web 访问日志（包含匿名化的 IP 地址、浏览器类型、请求的 URL、访问时间戳等）。此类日志仅用于防御恶意 DDOS 攻击、排查网络连接故障及统计基础页面浏览量，绝不与任何个人身份进行关联匹配。</p>

      <h2>三、Cookie 的使用</h2>
      <p>本站自身不设置任何追踪用户个人身份的持久性 Cookie。某些第三方托管节点（如 Cloudflare 安全防护模块）可能会放置必要的安全识别 Cookie，以区分正常访客与恶意自动化爬虫机器人。</p>

      <h2>四、外部链接免责</h2>
      <p>本站包含前往第三方网站（包括机场官方网站、GitHub 开源仓库等）的超链接。当您点击跳转到外部第三方网站时，请注意第三方网站拥有其独立的隐私权政策，本站对第三方的行为与数据处理不承担任何法律责任。</p>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('privacy-policy/index.html', html);
  }

  // 5. 免责声明 disclaimer/index.html (depth = 1)
  {
    const title = "免责声明与服务使用警示 - 机场之家";
    const description = "机场之家免责声明。明确技术资讯属性、合规使用提示与风险自担声明。";
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "url": "https://jichanghome.blog/disclaimer/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'disclaimer/index.html', depth: 1, schema })}
${buildHeader(1, '')}

  <div class="container article-container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>免责声明</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">免责声明与合规使用提示</h1>
      <div class="article-meta-bar">
        <span>法律适用：中华人民共和国法律与相关国际准则</span>
      </div>
    </div>

    <div class="article-body">
      <h2>一、学术研究与技术资讯定位</h2>
      <p>
        机场之家（jichanghome.blog）发布的所有内容（包括但不限于网络线路评测、代理协议解析、开源客户端教程及知识百科）<strong>仅供计算机网络技术研究、跨境外贸电子商务、学术文献检索与科技资讯交流之用途</strong>。
      </p>

      <h2>二、用户合规自律义务</h2>
      <p>
        请所有访问本站的读者严格遵守中华人民共和国各项法律法规及您所在地区的互联网管理条例。<strong>严禁利用本站提及的任何网络工具从事危害国家安全、侵犯他人合法权益、散布违法不良信息、金融洗钱、网络诈骗或网络攻击等违法犯罪活动。</strong>如用户擅自利用相关工具从事违法违规行为，其法律责任由使用者个人完全自行承担，本站概不承担任何连带责任。
      </p>

      <h2>三、服务不可抗力与第三方风险</h2>
      <p>
        国际互联网络受海底光缆状态、跨国机房运维、政策监管及上游供应商变动等不可控因素影响极其显著。本站所展示的套餐价格、节点延迟及评测结论均基于测试当时的抽样数据，<strong>不构成任何形式的商业收益保证或 100% 连通性承诺</strong>。读者因第三方服务商经营调整、机房故障或资金损失所产生的一切风险，须由读者自行甄别与承担。
      </p>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('disclaimer/index.html', html);
  }

  // 6. 404 页面 404.html (depth = 0)
  {
    const title = "404 页面未找到 - 机场之家";
    const description = "抱歉，您访问的页面不存在或已被移除。您可以返回机场之家首页浏览最新机场推荐与教程。";

    const html = `${buildHead({ title, description, canonicalPath: '404.html', depth: 0 })}
${buildHeader(0, '')}

  <div class="container" style="text-align: center; padding: 5rem 1rem;">
    <div style="font-size: 5rem; font-weight: 900; color: var(--primary); line-height: 1; margin-bottom: 1rem;">404</div>
    <h1 style="font-size: 1.85rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-main);">抱歉，您访问的页面未找到</h1>
    <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 2rem;">
      该页面可能已被移动、更名，或您输入的链接有误。请使用下方按钮返回网站核心专区：
    </p>

    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="index.html" class="btn btn-primary">返回网站首页</a>
      <a href="recommend/index.html" class="btn btn-secondary">浏览精选机场推荐</a>
      <a href="ranking/overall/index.html" class="btn btn-secondary">查看综合排行榜</a>
      <a href="compare/index.html" class="btn btn-secondary">横向比对工具</a>
    </div>
  </div>

${buildFooter(0)}
`;
    writePage('404.html', html);
  }
}

module.exports = { generateTrustPages };

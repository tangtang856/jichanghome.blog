const { buildHead, buildHeader, buildFooter, writePage } = require('./template-base');

function generateGlossaryPages() {
  // 1. 知识百科主页 glossary/index.html (depth = 1)
  {
    const title = "科学上网网络术语与技术百科全书 | 名词通俗解释 - 机场之家";
    const description = "机场之家网络术语百科全书。通俗解析科学上网与机场代理中的核心技术名词：IPLC专线、Clash订阅、Sub-Store转换、TUN虚拟网卡模式、节点倍率与审计规则等。";

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/glossary/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'glossary/index.html', depth: 1, schema })}
${buildHeader(1, 'glossary')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>术语与技术百科</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">网络代理与科学上网技术术语百科</h1>
      <div class="article-meta-bar">
        <span>定位：通俗客观的底层名词词典</span>
        <span>•</span>
        <span>阅读门槛：零基础友好</span>
        <span>•</span>
        <span>条目数量：持续扩充中</span>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom: 3.5rem;">
      <div class="post-card">
        <h2 class="post-title"><a href="iplc/index.html">什么是 IPLC 专线？</a></h2>
        <p class="post-excerpt">国际私有租用线路（International Private Leased Circuit）工作原理、为什么不过墙、延迟优势与适用场景通俗解释。</p>
        <a href="iplc/index.html" class="btn btn-sm btn-secondary">阅读词条 &rarr;</a>
      </div>

      <div class="post-card">
        <h2 class="post-title"><a href="clash/index.html">什么是 Clash 订阅链接与分流规则？</a></h2>
        <p class="post-excerpt">全面科普 YAML 配置文件结构、分流策略组（Rule Provider）、内核机制与为什么国内网站直连国外走代理。</p>
        <a href="clash/index.html" class="btn btn-sm btn-secondary">阅读词条 &rarr;</a>
      </div>

      <div class="post-card">
        <h2 class="post-title"><a href="sub-store/index.html">什么是 Sub-Store 高级订阅管理与转换工具？</a></h2>
        <p class="post-excerpt">多机场订阅聚合神器。如何自动过滤无用节点、重命名规范节点名称、剔除高倍率节点与实现多机场合一。</p>
        <a href="sub-store/index.html" class="btn btn-sm btn-secondary">阅读词条 &rarr;</a>
      </div>

      <div class="post-card">
        <h2 class="post-title"><a href="tun-mode/index.html">什么是 TUN 虚拟网卡模式？</a></h2>
        <p class="post-excerpt">对比系统代理与虚拟网卡网桥的区别，解析如何无死角接管 Windows 命令行终端、游戏与防代理应用的所有网络请求。</p>
        <a href="tun-mode/index.html" class="btn btn-sm btn-secondary">阅读词条 &rarr;</a>
      </div>

      <div class="post-card" style="grid-column: span 2;">
        <h2 class="post-title"><a href="traffic-multiplier/index.html">什么是机场节点流量倍率与审计规则？</a></h2>
        <p class="post-excerpt">为什么下 1GB 视频实际扣费 3GB？揭秘 0.1x~5x 节点倍率背后的带宽成本差异与机场自动审计规则避坑要点。</p>
        <a href="traffic-multiplier/index.html" class="btn btn-sm btn-secondary">阅读词条 &rarr;</a>
      </div>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('glossary/index.html', html);
  }

  // 2. 5大百科单页 (depth = 2)
  const terms = [
    {
      slug: 'iplc',
      title: '什么是IPLC专线？国际私有租用线路工作原理与优缺点 - 机场之家百科',
      desc: '通俗解释什么是IPLC专线。国际私有租用线路架构、物理不经过公网GFW的原理、低延迟与抗封锁表现全景解析。',
      h1: '什么是IPLC专线？国际专用传输线路详解',
      content: `
      <h2>一、IPLC 的标准定义</h2>
      <p><strong>IPLC</strong> 是英文 <em>International Private Leased Circuit</em> 的缩写，直译为<strong>“国际私有租用线路”</strong>。在传统电信行业中，它是跨国大型跨国金融机构、跨国企业或跨国机构向中国电信、中国联通、PCCW 等主流电信运营商租用的<strong>点对点封闭式内网光纤链路</strong>。</p>

      <h2>二、IPLC 的工作原理：为什么天生“不过墙”？</h2>
      <p>普通公网直连翻墙的流量，必须经过中国公网国际出口路由器和 GFW 防火墙审查；而 IPLC 是两点之间物理隔离的专用通道：</p>
      <ul>
        <li><strong>封闭式传输：</strong>你的数据从国内专线入口机房（如深圳机房）进入后，直接通过电信运营商已经铺设好的海底光缆或跨境陆缆，以二层或三层内网协议打通至海外机房（如香港机房）。</li>
        <li><strong>不经过公网防火墙：</strong>由于通信链路完全在运营商内网闭环中运行，根本不经过公网出境出口，因此物理上不存在被 GFW 检测或拦截的可能。</li>
        <li><strong>延迟恒定稳定：</strong>深港 IPLC 专线两端机房的物理传输延迟通常只有 3~5 毫秒，且不会受到晚高峰数以亿计网民抢占公网带宽导致的拥堵影响。</li>
      </ul>

      <h2>三、IPLC 专线的优缺点对比</h2>
      <p><strong>核心优点：</strong>极致稳定、延迟极低、晚高峰零丢包、在敏感时期具备最强的抗断连能力。</p>
      <p><strong>主要缺点：</strong>价格昂贵。物理专线的带宽租金是按每兆（Mbps）每月数百乃至上千元向电信运营商按月支付的，因此纯正的 IPLC 专线机场（如 <a href="../../airport/yinxingren/index.html">隐形人</a> 与 <a href="../../airport/flashleap/index.html">闪跃</a>）单价普遍高于普通中继机场。</p>
      `
    },
    {
      slug: 'clash',
      title: '什么是Clash订阅链接？配置规则、分流策略与内核科普 - 机场之家百科',
      desc: '什么是Clash订阅链接？深入科普Clash配置文件结构、Mihomo内核、Rule规则分流机制与智能分流原理。',
      h1: '什么是Clash订阅链接与分流规则？',
      content: `
      <h2>一、什么是 Clash？</h2>
      <p><strong>Clash</strong> 是一款基于 Go 语言开发的跨平台开源代理核心客户端。它以灵活强大的<strong>规则分流（Rule-based Routing）</strong>著称，一改传统代理软件要么全部走代理、要么全部不走代理的僵硬体验。</p>

      <h2>二、什么是订阅链接？</h2>
      <p>订阅链接本质上是一个远程网络 URL 地址。当你在客户端（如 Clash Verge Rev、Clash Meta for Android）中导入该链接时，客户端会通过 HTTPS 请求向机场服务器拉取一段格式化的 <strong>YAML 配置文件</strong>。配置文件内包含：</p>
      <ol>
        <li><strong>服务器节点列表：</strong>包括每个节点的 IP/域名、端口、加密算法、密码或 UUID 密钥。</li>
        <li><strong>策略组（Proxy Groups）：</strong>如“节点选择”、“自动选择（自动测速选取延迟最低）”、“流媒体分流”等。</li>
        <li><strong>分流规则集（Rules）：</strong>成千上万条域名与 IP 匹配规则。</li>
      </ol>

      <h2>三、智能分流的核心机制：为什么访问百度不耗费流量？</h2>
      <p>当你的浏览器发起一个网页请求时，Clash 内核会自上而下匹配规则集：</p>
      <ul>
        <li>如果访问 <code>baidu.com</code>、<code>taobao.com</code> 或中国大陆 IP 段，命中 <code>GEOIP,CN,DIRECT</code> 规则，流量直接通过本地宽带直连访问，<strong>完全不消耗机场套餐流量</strong>。</li>
        <li>如果访问 <code>google.com</code> 或 <code>youtube.com</code>，命中 <code>MATCH,PROXY</code> 规则，流量自动封装加密并送往你选择的海外高速节点。</li>
      </ul>
      `
    },
    {
      slug: 'sub-store',
      title: '什么是Sub-Store？高级订阅管理与节点转换工具科普 - 机场之家百科',
      desc: '什么是Sub-Store？详细介绍Sub-Store多机场订阅聚合转换管理工具的功能、节点重命名、去广告与去除高倍率节点的实战技巧。',
      h1: '什么是Sub-Store高级订阅管理与转换工具？',
      content: `
      <h2>一、什么是 Sub-Store？</h2>
      <p><strong>Sub-Store</strong> 是目前科学上网圈公认功能最强大的开源<strong>高级订阅管理与节点过滤清洗工具</strong>。它支持运行在 Node.js、Docker、Loon、Surge、Shadowrocket 等环境中，被资深玩家誉为“机场订阅调度总指挥”。</p>

      <h2>二、Sub-Store 解决的核心痛点</h2>
      <ol>
        <li><strong>多机场合一聚合：</strong>如果你同时购买了专线机场和备用按量机场，Sub-Store 可以将两家甚至多家机场的订阅合并为一个统一的终极订阅，告别在客户端频繁切换配置文件的繁琐。</li>
        <li><strong>自动剔除高倍率与故障节点：</strong>通过内置的正则表达式和脚本过滤器，可以一键自动屏蔽所有标注 <code>3x</code>、<code>5x</code> 的吸血节点，或过滤掉延迟过高的冷门地区。</li>
        <li><strong>统一节点命名规范：</strong>不同机场的节点名称各不相同（如有的叫“🇭🇰 香港 01”，有的叫“HK_BGP_01”）。Sub-Store 可以批量重命名为整齐划一的命名格式，大幅提升强迫症用户的舒适度。</li>
      </ol>
      `
    },
    {
      slug: 'tun-mode',
      title: '什么是TUN虚拟网卡模式？系统全局网络接管技术详解 - 机场之家百科',
      desc: '什么是TUN模式？通俗对比系统代理与虚拟网卡TUN模式的技术区别，解决终端命令行、Git与防代理软件不走代理的终极方案。',
      h1: '什么是TUN虚拟网卡模式？',
      content: `
      <h2>一、系统代理 (System Proxy) 的局限性</h2>
      <p>常规情况下，我们开启客户端时启用的是“系统代理（System Proxy）”。系统代理只是在操作系统中注册了一个本地 HTTP/SOCKS5 端口（如 <code>127.0.0.1:7890</code>）。</p>
      <p><strong>致命缺陷：</strong>只有<strong>主动读取系统代理设置的软件</strong>（如 Chrome 浏览器、Edge 浏览器）才会把流量交给代理客户端；而 Windows 命令行 CMD、PowerShell、Git Bash、各类游戏客户端以及防代理应用会直接绕过系统代理，导致命令行 <code>git clone</code> 频繁超时或报错。</p>

      <h2>二、TUN 模式的工作原理</h2>
      <p><strong>TUN</strong> 是操作系统内核层级提供的一种<strong>虚拟点对点网络设备（Virtual Network Interface）</strong>。开启 TUN 模式后：</p>
      <ul>
        <li>客户端会在你的电脑或手机系统中虚拟出一张<strong>“虚拟网卡（Wintun / utun）”</strong>。</li>
        <li>客户端将该虚拟网卡设置为全系统的默认网关路由。</li>
        <li>从这一刻起，<strong>本机任何软件发出的所有三层（IP层）数据包</strong>，无论是 TCP、UDP 还是 ICMP（Ping），都会被无条件截获并送入代理核心进行规则分流，真正实现全系统 100% 流量无缝接管。</li>
      </ul>
      `
    },
    {
      slug: 'traffic-multiplier',
      title: '什么是机场节点流量倍率与审计规则？算费避坑必看 - 机场之家百科',
      desc: '深入科普机场节点流量倍率与审计规则。什么是0.1倍率节点？什么是3倍率节点？为什么机场严禁BT下载与网络攻击？',
      h1: '什么是机场节点流量倍率与审计规则？',
      content: `
      <h2>一、什么是节点流量倍率？</h2>
      <p>在机场节点列表中，你经常会看到节点名称后面标注着 <code>0.2x</code>、<code>1.0x</code>、<code>1.5x</code>、<code>3.0x</code> 等标记，这就是<strong>节点流量倍率</strong>。它是机场根据不同服务器节点的物理带宽采购成本制定的计费系数。</p>
      <p><strong>计费计算公式：</strong></p>
      <pre><code>实际扣除流量 = 你的真实网络消耗流量 × 该节点倍率</code></pre>
      <ul>
        <li><strong>1.0x 节点（标准倍率）：</strong>你消耗了 1GB 流量，套餐扣除 1GB 额度。</li>
        <li><strong>0.2x ~ 0.5x 节点（低倍率福利节点）：</strong>你消耗了 1GB 流量，实际仅扣除 0.2GB ~ 0.5GB，非常适合挂机下载超大文件或看长视频。</li>
        <li><strong>2.0x ~ 3.0x 节点（高倍率专线节点）：</strong>通常是昂贵的高峰 IPLC 内网专线或优质原生住宅 IP，消耗 1GB 会扣除 2~3GB 套餐流量。</li>
      </ul>

      <h2>二、什么是机场审计规则（Audit Rules）？</h2>
      <p>为了保障服务器长期健康运行并遵守法律法规，几乎所有正规机场都在网关节点中部署了<strong>自动化审计过滤规则</strong>。常见的审计拦截行为包括：</p>
      <ol>
        <li><strong>严禁 BT/PT 磁力下载：</strong>使用 BitTorrent、qBittorrent 等工具下载具有海外版权争议的影视资源，会导致机房服务器频繁收到 DMCA 版权侵权投诉信，机房会被上游强制封机罚款。</li>
        <li><strong>严禁网络扫描与渗透测试：</strong>禁止使用节点对外网主机进行端口暴力扫描、DDOS 攻击或撞库发包。</li>
        <li><strong>屏蔽金融欺诈与恶意反动站点：</strong>拦截恶意钓鱼诈骗网站与敏感非法通信。</li>
      </ol>
      `
    }
  ];

  terms.forEach(t => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": t.h1,
      "description": t.desc,
      "url": `https://jichanghome.blog/glossary/${t.slug}/index.html`,
      "author": {
        "@type": "Organization",
        "name": "机场之家百科编撰组"
      },
      "datePublished": "2026-03-01",
      "dateModified": "2026-03-06"
    };

    const html = `${buildHead({ title: t.title, description: t.desc, canonicalPath: `glossary/${t.slug}/index.html`, depth: 2, schema })}
${buildHeader(2, 'glossary')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <a href="../index.html">术语与技术百科</a>
      <span class="breadcrumb-separator">/</span>
      <span>${t.h1}</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">${t.h1}</h1>
      <div class="article-meta-bar">
        <span>词条分类：网络技术名词</span>
        <span>•</span>
        <span>核验状态：技术组审核通过</span>
        <span>•</span>
        <span>更新日期：2026年3月</span>
      </div>
    </div>

    <div class="article-body">
      ${t.content}

      <!-- 推荐关联内链 -->
      <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">探索更多技术百科与指南</h3>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="../index.html" class="btn btn-sm btn-secondary">浏览全部百科词条</a>
          <a href="../../guides/windows/index.html" class="btn btn-sm btn-secondary">Windows客户端实操</a>
          <a href="../../blog/iplc-iepl-bgp-transit-differences/index.html" class="btn btn-sm btn-secondary">专线与中继深度对比</a>
          <a href="../../recommend/index.html" class="btn btn-sm btn-primary">查看精选机场推荐</a>
        </div>
      </div>
    </div>
  </div>

${buildFooter(2)}
`;
    writePage(`glossary/${t.slug}/index.html`, html);
  });
}

module.exports = { generateGlossaryPages };

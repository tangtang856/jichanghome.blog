export interface GlossaryItem {
  slug: string;
  term: string;
  title: string;
  desc: string;
  content: string;
}

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    slug: 'iplc',
    term: 'IPLC 专线 (International Private Leased Circuit)',
    title: '什么是IPLC专线？为什么翻墙用IPLC不会被封锁 - 机场之家',
    desc: '深入解析IPLC国际私有租用线路的技术原理。为什么物理内网专线不经过GFW公网审查，能在敏感时期保障零丢包与超低网络延迟。',
    content: `<p>IPLC（International Private Leased Circuit，国际私有租用线路）是电信运营商直接在不同国家或地区机房之间拉设的端到端点对点物理专用通信链路。</p>
    <h3>一、为什么 IPLC 不会被 GFW 封锁？</h3>
    <p>传统的翻墙节点使用公网 VPS，数据必须经过中国国际出口的骨干网网关，所有的 TCP/UDP 数据包都会受到 GFW（防火长城）的深度包检测（DPI）。而 IPLC 属于电信运营级别的合规跨境专线，数据在国内入口机房进入后，直接通过物理光纤在内网传输至境外对端机房，中途完全不经过公网国际网关审查，因此不存在被 GFW 识别或阻断的可能。</p>
    <h3>二、晚高峰稳定性的终极解决方案</h3>
    <p>公网国际出口在晚上8点到11点常面临恶性拥堵与 QoS 限速，而 IPLC 享有固定的物理带宽配额，晚高峰时段延迟与丢包率几乎与白天无异，是极客与跨境办公人士的首选。</p>`
  },
  {
    slug: 'clash',
    term: 'Clash / Mihomo 内核',
    title: '什么是Clash与Mihomo内核？主流规则分流平台全解析 - 机场之家',
    desc: '解析现代科学上网核心客户端Clash与其核心演进分支Mihomo（Meta内核）的工作原理、分流规则编写与TUN虚拟网卡接管技术。',
    content: `<p>Clash 是一款基于 Go 语言开发的跨平台规则分流代理内核。在原原版内核停更后，开源社区在 Mihomo（又称 Clash.Meta）分支上实现了巨大的技术跨越。</p>
    <h3>一、分流规则（Rule-based Routing）的核心价值</h3>
    <p>传统的 VPN 往往是全局代理，不仅导致访问国内微信、百度变慢，还会极速消耗翻墙套餐流量。Clash 能够根据域名（DOMAIN-SUFFIX）、IP 段（IP-CIDR）与地理数据库（GEOIP），智能识别流量目的地：国内直连，海外代理，流媒体特定走原生节点，兼顾极速与省流量。</p>`
  },
  {
    slug: 'sub-store',
    term: 'Sub-Store 订阅管理工具',
    title: '什么是Sub-Store？高级节点订阅过滤、测速与重命名工具 - 机场之家',
    desc: '介绍进阶翻墙用户必备的Sub-Store订阅管理工具。如何聚合多个机场节点、自动健康检测、重命名及按规则生成自定义订阅。',
    content: `<p>Sub-Store 是一款高级的订阅管理与转换工具，专为管理多个机场订阅的高级玩家设计。</p>
    <h3>核心功能与优势</h3>
    <p>1. <strong>多订阅聚合：</strong>可以将多家机场的订阅合并为一个统一链接；<br>
    2. <strong>正则重命名：</strong>通过正则表达式统一美化节点名称，去掉多余广告文字；<br>
    3. <strong>节点清洗与过滤：</strong>自动剔除已离线节点与不喜欢的地区；<br>
    4. <strong>跨客户端转换：</strong>输出兼容 Loon、Surge、Clash 及 Sing-box 的标准格式。</p>`
  },
  {
    slug: 'tun-mode',
    term: 'TUN 虚拟网卡模式',
    title: '什么是TUN模式？全局接管命令行与外服游戏流量技术解析 - 机场之家',
    desc: '深度解析操作系统层面的TUN虚拟网卡模式与传统系统代理（System Proxy）的区别，如何让不支持代理的软件实现无感科学上网。',
    content: `<p>TUN 模式（TUN Virtual Network Interface）是在操作系统网络层创建的一个虚拟点对点网络设备。</p>
    <h3>与传统系统代理的区别</h3>
    <p>传统的系统代理只对支持 HTTP/SOCKS 协议的软件（如浏览器、部分下载工具）生效，很多命令行工具（Git、CMD、PowerShell）以及外服客户端游戏默认完全忽略系统代理设置。开启 TUN 模式后，操作系统会将所有网卡的数据包强制重定向至 TUN 虚拟设备，实现全系统 100% 流量无死角接管。</p>`
  },
  {
    slug: 'traffic-multiplier',
    term: '节点倍率 (Traffic Multiplier)',
    title: '什么是节点倍率？揭开机场套餐虚高流量与扣费套路 - 机场之家',
    desc: '详解机场节点列表中标称的0.1x、1.0x、3.0x倍率含义。如何避免被高倍率节点偷跑流量，计算真实的每GB使用成本。',
    content: `<p>节点倍率是机场服务商为了调节不同线路运营成本而采用的流量计费系数。</p>
    <h3>倍率如何计算？</h3>
    <p>如果一个节点标称 <strong>2.0x 倍率</strong>，意味着你在该节点实际消耗了 1GB 数据，机场用户后台会从你的月度配额中扣除 <strong>2GB</strong>。同理，0.5x 倍率意味着消耗 1GB 仅扣除 500MB。<br>
    在选购套餐时，切莫只看标称的“每月1000GB”，如果所有好用的专线节点都是3x或5x倍率，实际可用流量会大打折扣！</p>`
  }
];

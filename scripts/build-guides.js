const { buildHead, buildHeader, buildFooter, writePage } = require('./template-base');

function generateGuidePages() {
  // 1. 教程中心主页 guides/index.html (depth = 1)
  {
    const title = "全平台梯子客户端配置与使用教程中心 | Windows/Mac/Android/iOS - 机场之家";
    const description = "2026最新科学上网客户端配置图文教程合辑。涵盖Windows系统Clash Verge Rev、Android安卓Clash Meta/v2rayNG、iOS苹果小火箭Shadowrocket及macOS全平台订阅导入与排障指南。";

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": "https://jichanghome.blog/guides/index.html"
    };

    const html = `${buildHead({ title, description, canonicalPath: 'guides/index.html', depth: 1, schema })}
${buildHeader(1, 'guides')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <span>新手教程中心</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">全平台客户端配置与节点订阅使用教程中心</h1>
      <div class="article-meta-bar">
        <span>更新周期：2026最新内核</span>
        <span>•</span>
        <span>支持系统：Windows / Android / iOS / macOS</span>
        <span>•</span>
        <span>实操难度：新手友好</span>
      </div>
    </div>

    <div class="quick-answer-box">
      <div class="quick-answer-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"/></svg>
        <span>新手快速入门 3 步法</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        配置科学上网并不复杂，任何平台均只需 3 步：<strong>1. 购买机场并复制订阅链接；2. 下载对应系统的客户端软件；3. 将订阅链接粘贴至客户端并点击“更新”，随后选择节点并开启系统代理或 TUN 模式。</strong>
      </p>
    </div>

    <!-- 平台教程卡片 -->
    <div class="grid-2" style="margin-bottom: 3.5rem;">
      <div class="post-card">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">💻</div>
        <h2 class="post-title"><a href="windows/index.html">Windows 系统配置教程</a></h2>
        <p class="post-excerpt">主流推荐 Clash Verge Rev 与 Sing-box 客户端。详细讲解订阅导入、Rule 规则分流、TUN 虚拟网卡模式开启及常见端口占用冲突排查。</p>
        <a href="windows/index.html" class="btn btn-sm btn-primary">查看 Windows 教程 &rarr;</a>
      </div>

      <div class="post-card">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📱</div>
        <h2 class="post-title"><a href="android/index.html">Android 安卓手机教程</a></h2>
        <p class="post-excerpt">主流推荐 Clash Meta for Android (CMFA) 与 v2rayNG。图文详解免 Root 订阅导入、电池优化白名单设置及防止后台杀进程技巧。</p>
        <a href="android/index.html" class="btn btn-sm btn-primary">查看 Android 教程 &rarr;</a>
      </div>

      <div class="post-card">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🍏</div>
        <h2 class="post-title"><a href="ios/index.html">iOS 苹果设备教程</a></h2>
        <p class="post-excerpt">主流推荐 Shadowrocket (小火箭)、Loon 与 Quantumult X。讲解美区 Apple ID 获取、小火箭扫码一键订阅导入与按需求分流配置。</p>
        <a href="ios/index.html" class="btn btn-sm btn-primary">查看 iOS 教程 &rarr;</a>
      </div>

      <div class="post-card">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🖥️</div>
        <h2 class="post-title"><a href="macos/index.html">macOS 苹果电脑教程</a></h2>
        <p class="post-excerpt">主流推荐 Clash Verge Rev Mac 版与 Surge。深度解析 Apple Silicon (M1/M2/M3/M4) 原生架构兼容、系统代理授权与终端代理设置。</p>
        <a href="macos/index.html" class="btn btn-sm btn-primary">查看 macOS 教程 &rarr;</a>
      </div>
    </div>

    <!-- 核心排障指南 -->
    <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 3.5rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.75rem;">遇到节点超时连不上？</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">
        客户端已开启却提示“无法访问此网站”、国内网站能打开但 Google/YouTube 打不开、时间不同步导致握手失败？查阅我们的自检流程。
      </p>
      <a href="troubleshooting/index.html" class="btn btn-secondary">阅读《节点排障与连通性自检指南》 &rarr;</a>
    </div>
  </div>

${buildFooter(1)}
`;
    writePage('guides/index.html', html);
  }

  // 2. 5大图文教程单页 (depth = 2)
  const guideList = [
    {
      slug: 'windows',
      title: 'Windows系统配置Clash Verge Rev/Sing-box完整图文教程 - 机场之家',
      desc: '2026最新Windows电脑端Clash Verge Rev客户端下载、订阅导入、分流规则设置与TUN全局模式配置图文教学，新手快速上手。',
      h1: 'Windows系统配置Clash Verge Rev节点完整教程',
      content: `
      <h2>一、为什么优先推荐 Clash Verge Rev？</h2>
      <p>自原版 Clash for Windows (CFW) 停止维护后，<strong>Clash Verge Rev</strong> 凭借基于 Tauri 框架开发的现代化轻量界面、原生集成 Mihomo (Clash.Meta) 开源核心以及对 Windows 10/11 的极佳兼容性，已成为目前 Windows 平台体验最优秀的客户端首选。</p>

      <h2>二、准备工作</h2>
      <ul>
        <li>一台运行 Windows 10 或 Windows 11 的电脑。</li>
        <li>有效可用的机场订阅链接（如 <a href="../../airport/breezenet/index.html">微风网络</a> 或 <a href="../../airport/yinxingren/index.html">隐形人</a> 提供的 Clash 格式订阅）。</li>
        <li>从官方 GitHub Releases 或机场后台下载最新版 <code>Clash.Verge_x64-setup.exe</code> 安装包。</li>
      </ul>

      <h2>三、详细配置实操步骤</h2>
      <h3>第 1 步：安装客户端</h3>
      <p>双击安装程序，按提示点击“下一步”完成安装。初次运行时，Windows Defender 若弹出网络防火墙提示，请勾选“专用网络”和“公用网络”并点击“允许访问”。</p>

      <h3>第 2 步：导入订阅链接</h3>
      <ol>
        <li>打开 Clash Verge Rev，在左侧导航栏点击 <strong>订阅 (Profiles)</strong>。</li>
        <li>在顶部输入框中粘贴您的机场订阅链接（URL），右侧名称可自定义填写（如“我的主力机场”）。</li>
        <li>点击 <strong>导入 (Import)</strong> 按钮。客户端会自动拉取远程配置，成功后列表中会显示节点数量与更新时间。</li>
        <li>右键刚导入的配置卡片，选择 <strong>使用 (Use)</strong>，卡片边框变蓝即表示激活。</li>
      </ol>

      <h3>第 3 步：选择节点与开启系统代理</h3>
      <ol>
        <li>点击左侧导航栏的 <strong>代理 (Proxy)</strong>，将代理模式切换为 <strong>规则 (Rule)</strong>（推荐，国内直连国外代理）。</li>
        <li>展开 <strong>节点选择 (Proxy)</strong> 组，点击延迟测速按钮（闪电图标），选择一个绿色延迟较低的节点（如香港、日本或新加坡）。</li>
        <li>点击左侧导航栏的 <strong>设置 (Settings)</strong>，打开 <strong>系统代理 (System Proxy)</strong> 开关。</li>
        <li>此时打开浏览器访问 google.com 即可验证是否成功翻墙。</li>
      </ol>

      <h2>四、高阶玩法：开启 TUN 模式接管全系统流量</h2>
      <p>部分应用程序（如 Windows 终端 CMD/PowerShell、Git 命令行或部分游戏客户端）不会主动读取系统代理。此时开启 <strong>TUN 模式</strong> 可以创建虚拟网卡接管系统所有流量：</p>
      <ul>
        <li>在设置中找到 <strong>TUN 模式 (Tun Mode)</strong> 并点击开启。</li>
        <li>首次开启时系统会请求管理员权限安装虚拟网卡驱动（Wintun），点击“是”即可。</li>
      </ul>

      <h2>五、常见问题排查</h2>
      <p><strong>Q：开启系统代理后国内网站打不开？</strong><br>
      A：检查代理模式是否误选为“全局 (Global)”，请切换回“规则 (Rule)”模式。</p>
      <p><strong>Q：提示 7890 端口被占用？</strong><br>
      A：在设置中将“混合端口 (Mixed Port)”修改为其他未被占用的端口号（如 7895），然后重启软件。</p>
      `
    },
    {
      slug: 'android',
      title: 'Android安卓手机Clash Meta/v2rayNG快速上手与订阅教程 - 机场之家',
      desc: '2026安卓手机科学上网客户端配置图文教程。推荐Clash Meta for Android与v2rayNG，免Root一键订阅导入与省电防杀后台设置。',
      h1: 'Android安卓手机客户端节点订阅配置教程',
      content: `
      <h2>一、安卓端主流客户端选型</h2>
      <p>目前安卓平台最稳定易用的两款开源工具为：</p>
      <ul>
        <li><strong>Clash Meta for Android (CMFA)：</strong>基于 Mihomo 核心开发，支持规则分流、节点测速与优雅的卡片UI，推荐主力使用。</li>
        <li><strong>v2rayNG：</strong>轻量纯粹，支持 Vmess、VLESS、Trojan 等协议，适合老旧配置手机或备用。</li>
      </ul>

      <h2>二、CMFA 详细配置四步曲</h2>
      <h3>第 1 步：安装客户端 APK</h3>
      <p>从官方开源仓库下载 <code>.apk</code> 文件，在手机中点击安装。安装时允许“安装未知来源应用”权限。</p>

      <h3>第 2 步：配置订阅配置</h3>
      <ol>
        <li>打开客户端，点击主界面中间的 <strong>配置 (Profiles)</strong>。</li>
        <li>点击右上角 <strong>+ (添加)</strong> 按钮，选择 <strong>URL (从 URL 导入)</strong>。</li>
        <li>名称填写机场名称，URL 处粘贴机场后台复制的 Clash 订阅链接，自动更新建议设置为 1440 分钟（24小时）。</li>
        <li>点击右上角保存图标，软件将下载节点列表。下载完成后点击该配置进行选中。</li>
      </ol>

      <h3>第 3 步：启动 VPN 连接</h3>
      <ol>
        <li>返回软件首页，点击顶部正中间灰色卡片 <strong>点此启动 (Stopped)</strong>。</li>
        <li>系统会弹出“网络连接请求 / 设置 VPN 连接”，点击 <strong>确定 / 允许</strong>。</li>
        <li>卡片变为绿色并显示“运行中 (Running)”，即代表 VPN 隧道建立成功。</li>
      </ol>

      <h3>第 4 步：关键避坑：设置后台电池优化白名单</h3>
      <p>国内定制安卓系统（如小米 HyperOS、华为鸿蒙、OPPO ColorOS、vivo OriginOS）后台保活机制极其激进。若不设置白名单，锁屏几分钟后客户端就会被系统杀后台导致断网：</p>
      <ul>
        <li>长按软件图标 &rarr; 点击“应用信息” &rarr; 找到“省电策略 / 电池优化” &rarr; 设置为 <strong>无限制 / 不优化</strong>。</li>
        <li>在手机多任务后台界面中，下拉客户端卡片并点击 <strong>上锁图标</strong>，防止被一键清理。</li>
      </ul>
      `
    },
    {
      slug: 'ios',
      title: 'iOS苹果手机Shadowrocket小火箭下载与节点配置教程 - 机场之家',
      desc: '2026苹果iPhone/iPad小火箭Shadowrocket下载、美区Apple ID获取、节点订阅导入与自动化分流完整指南。',
      h1: 'iOS苹果设备Shadowrocket小火箭节点订阅配置指南',
      content: `
      <h2>一、iOS 平台特点与客户端推荐</h2>
      <p>受限于 App Store 政策，中国大陆区 Apple ID 无法下载任何代理类应用。因此，使用 iPhone/iPad 科学上网的前提是准备一个<strong>海外区（如美区、日区、港区）Apple ID</strong>。</p>
      <p>iOS 最主流首选客户端：<strong>Shadowrocket（俗称“小火箭”）</strong>，售价 2.99 美元，性价比极高，协议支持完备且占用内存极低。</p>

      <h2>二、如何获取 Shadowrocket</h2>
      <ol>
        <li>在手机浏览器中注册或在正规合规渠道获取一个非国区 Apple ID。</li>
        <li>打开 App Store，退出当前国区账号，登录海外账号（提示升级双重认证可选择稍后设置）。</li>
        <li>在 App Store 搜索 <code>Shadowrocket</code>（注意认准开发者为 <strong>Shadow Launch Technology Limited</strong>，小心山寨仿冒软件）。</li>
        <li>购买并完成下载安装。</li>
      </ol>

      <h2>三、小火箭导入订阅图文步骤</h2>
      <h3>第 1 步：一键导入或扫码</h3>
      <p>登录您的机场后台（如 <a href="../../airport/yinxingren/index.html">隐形人</a> 或 <a href="../../airport/breezenet/index.html">微风网络</a>）：</p>
      <ul>
        <li><strong>方法 A（一键导入）：</strong>在 Safari 中打开机场后台，点击“导入到 Shadowrocket”，系统会自动唤醒小火箭并完成解析。</li>
        <li><strong>方法 B（扫码添加）：</strong>在电脑打开机场节点二维码，打开小火箭点击左上角 <strong>扫描图标</strong> 扫码添加。</li>
        <li><strong>方法 C（手动添加）：</strong>点击小火箭右上角 <strong>+</strong> 号，类型选择 <strong>Subscribe</strong>，URL 粘贴订阅地址，点击右上角保存。</li>
      </ul>

      <h3>第 2 步：开启连接与信任证书</h3>
      <ol>
        <li>点击顶部 <strong>未连接</strong> 右侧开关。</li>
        <li>首次开启时系统会弹出提示：“Shadowrocket 想要添加 VPN 配置”，点击 <strong>允许</strong>，并验证 Face ID / Touch ID 或锁屏密码。</li>
        <li>顶部状态栏出现 <strong>VPN</strong> 图标，即代表配置成功。</li>
      </ol>

      <h2>四、路由全局路由分流设置</h2>
      <p>在小火箭主界面中间找到 <strong>全局路由 (Global Routing)</strong>：</p>
      <ul>
        <li><strong>配置 (Config)：</strong>推荐模式。自动按规则分流，国内直连不耗流量，国外走代理。</li>
        <li><strong>代理 (Proxy)：</strong>所有流量强行走代理。</li>
        <li><strong>直连 (Direct)：</strong>所有流量不走代理。</li>
      </ul>
      `
    },
    {
      slug: 'macos',
      title: 'macOS苹果电脑Clash Verge Rev安装与订阅配置教程 - 机场之家',
      desc: '2026 Mac电脑科学上网教程。支持M1/M2/M3/M4芯片与Intel芯片，Clash Verge Rev安装、系统代理与增强TUN模式配置。',
      h1: 'macOS苹果电脑节点客户端配置与TUN模式指南',
      content: `
      <h2>一、macOS 客户端版本选择</h2>
      <p>目前在 macOS 上体验最丝滑的客户端依然是 <strong>Clash Verge Rev (Mac版)</strong>。它基于 Rust/Tauri 构建，内存占用比以往基于 Electron 的旧版客户端大幅降低，且原生支持 Apple Silicon (M1/M2/M3/M4) 架构芯片。</p>

      <h2>二、下载与安装说明</h2>
      <ol>
        <li>根据您的 Mac 处理器芯片选择对应的安装包：
          <ul>
            <li><strong>Apple Silicon (M系列芯片)：</strong>下载 <code>Clash.Verge_aarch64.dmg</code>。</li>
            <li><strong>Intel 处理器芯片：</strong>下载 <code>Clash.Verge_x64.dmg</code>。</li>
          </ul>
        </li>
        <li>双击打开 DMG 文件，将 Clash Verge 图标拖入 <strong>Applications (应用程序)</strong> 文件夹。</li>
      </ol>

      <h3>解决“已损坏，无法打开”安全拦截</h3>
      <p>如果由于 macOS Gatekeeper 安全机制提示“无法打开，因为无法验证开发者”，请打开 Mac 的 <strong>系统设置 &rarr; 隐私与安全性</strong>，在底部找到被拦截的 Clash Verge，点击 <strong>仍要打开</strong> 即可。</p>

      <h2>三、导入订阅与开启代理</h2>
      <ol>
        <li>打开应用，进入 <strong>订阅 (Profiles)</strong> 页面。</li>
        <li>在顶部输入框粘贴机场订阅链接，点击 <strong>导入 (Import)</strong>。</li>
        <li>右键导入成功的配置，点击 <strong>使用 (Use)</strong>。</li>
        <li>进入 <strong>代理 (Proxy)</strong> 页面，选择喜欢的节点（如香港或日本）。</li>
        <li>进入 <strong>设置 (Settings)</strong> 页面，勾选 <strong>系统代理 (System Proxy)</strong>。</li>
      </ol>

      <h2>四、开启 TUN 虚拟网卡模式（终端加速利器）</h2>
      <p>经常使用终端写代码、执行 <code>git clone</code> 或 <code>brew install</code> 的开发者，强烈建议开启 TUN 模式：</p>
      <ul>
        <li>在设置中开启 <strong>TUN 模式</strong>。</li>
        <li>系统会弹出管理员密码授权窗口，输入开机密码以允许创建虚拟网络接口。</li>
        <li>开启后，终端命令无需额外设置 <code>export http_proxy</code> 环境变量，即可实现自动走高速代理。</li>
      </ul>
      `
    },
    {
      slug: 'troubleshooting',
      title: '节点连接超时与DNS泄露排查指南 | 常见报错一网打尽 - 机场之家',
      desc: '科学上网常见故障排查手册。针对节点超时连不上、能上Google但上不了ChatGPT、国内网站打不开等高频痛点提供一站式解决清单。',
      h1: '机场节点连接超时、无法联网与报错排查实战指南',
      content: `
      <h2>一、高频故障 1：开启代理后所有网页都打不开（连接超时）</h2>
      <p><strong>排查与解决方法：</strong></p>
      <ol>
        <li><strong>检查本地系统时间（最常见原因！）：</strong>TLS/VLESS 加密协议要求本地系统时间与服务端时间误差必须小于 90 秒。如果电脑或手机时间偏离，握手会直接失败。请进入系统设置开启“自动同步网络时间”。</li>
        <li><strong>测试节点延迟连通性：</strong>在客户端代理列表中点击“闪电图标”测速。如果所有节点延迟均显示 <code>Timeout</code> 或 <code>-1</code>，说明订阅链接已过期，或机场正在进行机房紧急维护。</li>
        <li><strong>关闭多重代理冲突：</strong>检查是否同时开启了其他 VPN 软件（如校园网客户端、公司内网安全软件或杀毒软件网络监控）。</li>
      </ol>

      <h2>二、高频故障 2：能打开 Google/YouTube，但打开国内网站极慢或打不开</h2>
      <p><strong>排查与解决方法：</strong></p>
      <ul>
        <li><strong>检查代理模式：</strong>误将模式切换为了 <strong>全局 (Global)</strong>，导致访问百度、知乎、微信所有国内流量全绕道海外节点。请将代理模式改回 <strong>规则 (Rule)</strong>。</li>
        <li><strong>DNS 解析污染：</strong>在设置中确保 DNS 分流开启，国内域名走系统本地运营商 DNS 解析，国外域名走加密 DoH/DoT 解析。</li>
      </ul>

      <h2>三、高频故障 3：能正常上网，但 ChatGPT 提示“Access Denied / 1020 报错”</h2>
      <p><strong>排查与解决方法：</strong></p>
      <ul>
        <li><strong>节点 IP 被风控：</strong>当前节点属于机房被污染 IP，被 Cloudflare 识别为人机攻击。请切换至带有原生住宅 IP 标记的节点（如 <a href="../../airport/yinxingren/index.html">隐形人</a> 或 <a href="../../airport/flashleap/index.html">闪跃</a> 的专用 AI 节点）。</li>
        <li><strong>浏览器缓存污染：</strong>按 <code>Ctrl + Shift + Delete</code> 清理浏览器 Cookies，或者开启 Chrome 无痕隐身窗口重新登录。</li>
        <li><strong>WebRTC 泄露真实真实 IP：</strong>在浏览器中安装防 WebRTC 泄露插件，或在 Clash 中开启 TUN 模式接管 UDP 数据包。</li>
      </ul>

      <h2>四、终极救急应急建议</h2>
      <p>当主力机场发生全网不可抗力割接时，请随时准备一个 <strong>备用应急方案</strong>（例如不限时按量计费的 <a href="../../airport/feiv/index.html">飞V</a>）。有备用在手，遇事不慌。</p>
      `
    }
  ];

  guideList.forEach(g => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": g.h1,
      "description": g.desc,
      "url": `https://jichanghome.blog/guides/${g.slug}/index.html`,
      "author": {
        "@type": "Organization",
        "name": "机场之家技术组"
      },
      "datePublished": "2026-03-01",
      "dateModified": "2026-03-06"
    };

    const html = `${buildHead({ title: g.title, description: g.desc, canonicalPath: `guides/${g.slug}/index.html`, depth: 2, schema })}
${buildHeader(2, 'guides')}

  <div class="container">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <a href="../../index.html">首页</a>
      <span class="breadcrumb-separator">/</span>
      <a href="../index.html">新手教程中心</a>
      <span class="breadcrumb-separator">/</span>
      <span>${g.slug} 教程</span>
    </nav>

    <div class="article-header">
      <h1 class="article-title">${g.h1}</h1>
      <div class="article-meta-bar">
        <span>更新日期：2026年3月</span>
        <span>•</span>
        <span>阅读时长：约 6 分钟</span>
        <span>•</span>
        <span>实操难度：入门简易</span>
      </div>
    </div>

    <div class="article-body">
      ${g.content}

      <!-- 关联推荐 -->
      <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-top: 2.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">配套阅读与相关资源</h3>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="../../recommend/beginner/index.html" class="btn btn-sm btn-secondary">新手推荐机场清单</a>
          <a href="../../compare/index.html" class="btn btn-sm btn-secondary">横向比对合适套餐</a>
          <a href="../troubleshooting/index.html" class="btn btn-sm btn-secondary">连通性故障自检</a>
          <a href="../../glossary/clash/index.html" class="btn btn-sm btn-secondary">什么是Clash订阅？</a>
        </div>
      </div>
    </div>
  </div>

${buildFooter(2)}
`;
    writePage(`guides/${g.slug}/index.html`, html);
  });
}

module.exports = { generateGuidePages };

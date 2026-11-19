// 30篇完整客户端配置与排障实操教程数据库
// 机场之家 (jichanghome.blog)

const GUIDES = [
  // 1. Windows
  {
    slug: 'windows',
    title: 'Windows系统配置Clash Verge Rev节点完整教程 - 机场之家',
    desc: '2026最新Windows电脑端Clash Verge Rev客户端下载、订阅导入、分流规则设置与TUN全局模式配置图文教学，新手快速上手。',
    h1: 'Windows系统配置Clash Verge Rev节点完整教程',
    category: '桌面端教程',
    readTime: '6分钟',
    date: '2026-03-02',
    content: `
      <h2>一、为什么优先推荐 Clash Verge Rev？</h2>
      <p>自原版 Clash for Windows (CFW) 停止维护后，<strong>Clash Verge Rev</strong> 凭借基于 Tauri 框架开发的现代化轻量界面、原生集成 Mihomo (Clash.Meta) 开源核心以及对 Windows 10/11 的极佳兼容性，已成为目前 Windows 平台体验最优秀的客户端首选。</p>

      <h2>二、准备工作</h2>
      <ul>
        <li>一台运行 Windows 10 或 Windows 11 的电脑（64位或 ARM64 架构）。</li>
        <li>有效可用的机场订阅链接（如 <a href="../../airport/breezenet/index.html">微风网络</a> 或 <a href="../../airport/yinxingren/index.html">隐形人</a> 提供的 Clash 格式订阅）。</li>
        <li>从官方 GitHub Releases 或机场后台下载最新版 <code>Clash.Verge_x64-setup.exe</code> 安装包。</li>
      </ul>

      <h2>三、详细配置实操步骤</h2>
      <h3>第 1 步：安装客户端</h3>
      <p>双击安装程序，按提示点击“下一步”完成安装。初次运行时，Windows Defender 若弹出网络防火墙提示，请勾选“专用网络”和“公用网络”并点击“允许访问”。</p>

      <h3>第 2 步：导入订阅链接</h3>
      <ol>
        <li>打开 Clash Verge Rev，在左侧导航栏点击 <strong>订阅 (Profiles)</strong>。</li>
        <li>在顶部输入框中粘贴您的机场订阅链接（URL），右侧名称可自定义填写（如“我的主力专线”）。</li>
        <li>点击 <strong>导入 (Import)</strong> 按钮。客户端会自动拉取远程配置，成功后列表中会显示节点数量与更新时间。</li>
        <li>右键刚导入的配置卡片，选择 <strong>使用 (Use)</strong>，卡片边框变蓝即表示激活。</li>
      </ol>

      <h3>第 3 步：选择节点与开启系统代理</h3>
      <ol>
        <li>点击左侧导航栏的 <strong>代理 (Proxy)</strong>，将代理模式切换为 <strong>规则 (Rule)</strong>（推荐，国内直连国外代理）。</li>
        <li>展开 <strong>节点选择 (Proxy)</strong> 组，点击延迟测速按钮（闪电图标），选择一个绿色延迟较低的节点（如香港、日本或新加坡）。</li>
        <li>点击左侧导航栏的 <strong>设置 (Settings)</strong>，打开 <strong>系统代理 (System Proxy)</strong> 开关。</li>
        <li>此时打开浏览器访问 google.com 即可验证是否成功连接。</li>
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

  // 2. Android
  {
    slug: 'android',
    title: 'Android安卓手机Clash Meta/v2rayNG快速上手与订阅教程 - 机场之家',
    desc: '2026安卓手机科学上网客户端配置图文教程。推荐Clash Meta for Android与v2rayNG，免Root一键订阅导入与省电防杀后台设置。',
    h1: 'Android安卓手机客户端节点订阅配置教程',
    category: '移动端教程',
    readTime: '5分钟',
    date: '2026-03-02',
    content: `
      <h2>一、安卓端主流客户端选型</h2>
      <p>目前安卓平台最稳定易用的两款开源工具为：</p>
      <ul>
        <li><strong>Clash Meta for Android (CMFA)：</strong>基于 Mihomo 核心开发，支持规则分流、节点测速与优雅的卡片UI，推荐主力使用。</li>
        <li><strong>v2rayNG：</strong>轻量纯粹，支持 Vmess、VLESS、Trojan 等协议，适合老旧配置手机或备用。</li>
      </ul>

      <h2>二、CMFA 详细配置四步曲</h2>
      <h3>第 1 步：安装客户端 APK</h3>
      <p>从官方 GitHub 或机场后台下载 <code>cmfa-universal-release.apk</code> 安装包。安装时如遇系统提示“未知来源应用”，点击“允许本次安装”即可。</p>

      <h3>第 2 步：添加配置并导入订阅</h3>
      <ol>
        <li>启动应用，点击主界面的 <strong>配置 (Profiles)</strong>。</li>
        <li>点击右上角加号 <strong>+</strong>，选择 <strong>URL (从 URL 导入)</strong>。</li>
        <li>名称随意填写（如“自用中继”），在 URL 输入框粘贴购买的机场订阅链接（如 <a href="../../airport/feimaoyun/index.html">飞猫云</a> 或 <a href="../../airport/flashleap/index.html">闪跃</a>）。</li>
        <li>右上角点击“保存”图标，客户端将自动下载节点配置。</li>
      </ol>

      <h3>第 3 步：启动代理服务</h3>
      <ol>
        <li>返回主界面，点击灰色的 <strong>已停止</strong> 按钮。</li>
        <li>系统会弹出“网络连接请求”授权对话框，点击 <strong>确定</strong> 允许建立本地 VPN 连接。</li>
        <li>进入 <strong>代理 (Proxy)</strong> 页面，选择喜欢的国家与节点，点击测试延迟。</li>
      </ol>

      <h2>三、安卓系统关键防杀后台设置</h2>
      <p>国内定制安卓系统（MIUI/HyperOS、OriginOS、ColorOS、EMUI）默认会对后台进程进行激进清理。为了防止刷网页或息屏时频繁断流，请务必进行以下设置：</p>
      <ul>
        <li><strong>锁定多任务卡片：</strong>在多任务后台界面长按应用卡片，点击锁头图标进行锁定。</li>
        <li><strong>关闭省电策略：</strong>长按桌面图标 &rarr; 应用信息 &rarr; 省电策略 &rarr; 更改为 <strong>无限制</strong>。</li>
        <li><strong>开启自启动权限：</strong>在应用权限管理中勾选 <strong>允许后台自启动</strong>。</li>
      </ul>
    `
  },

  // 3. iOS
  {
    slug: 'ios',
    title: 'iOS苹果手机Shadowrocket(小火箭)配置图文教程 - 机场之家',
    desc: '2026最新苹果iPhone/iPad小火箭Shadowrocket安装、美区Apple ID获取、一键导入订阅与按需求分流图文教学。',
    h1: 'iOS苹果手机Shadowrocket(小火箭)配置图文教程',
    category: '移动端教程',
    readTime: '6分钟',
    date: '2026-03-02',
    content: `
      <h2>一、iOS 客户端选型与准备</h2>
      <p>iOS 系统首选 <strong>Shadowrocket (俗称小火箭)</strong>，售价仅 $2.99，性能强大、支持全协议且界面极易上手。除此之外，进阶用户也可选择 Loon、Quantumult X 或 Stash。</p>

      <h2>二、如何下载 Shadowrocket？</h2>
      <p>由于政策原因，国内大陆 App Store 无法搜索到小火箭。你需要：</p>
      <ol>
        <li>注册或获取一个<strong>海外（美区或港区）Apple ID</strong>。</li>
        <li>在 App Store 右上角点击头像退出国区账号，登录海外 Apple ID。</li>
        <li>搜索 <code>Shadowrocket</code>，认准开发者为 <em>Shadow Launch Technology Limited</em> 的正版软件（白色小火箭图案，黄色背景）。</li>
        <li>通过海外礼品卡（Gift Card）充值或绑定海外信用卡完成购买并下载。</li>
      </ol>

      <h2>三、订阅导入实操</h2>
      <h3>方法 A：一键导入（最简单）</h3>
      <p>登录你的机场后台（如 <a href="../../airport/muguang/index.html">暮光网络</a> 或 <a href="../../airport/wuyou/index.html">无忧</a>），在“快速导入”区域点击 <strong>一键导入 Shadowrocket</strong>。系统会自动唤醒小火箭并完成节点同步。</p>

      <h3>方法 B：手动复制导入</h3>
      <ol>
        <li>在机场后台复制订阅链接。</li>
        <li>打开 Shadowrocket，软件通常会自动识别剪贴板内容并弹窗询问“是否添加订阅”，点击确认即可。</li>
        <li>若未弹窗，点击右上角加号 <strong>+</strong>，类型选择 <strong>Subscribe</strong>，在 URL 一栏粘贴链接，备注填写机场名，点击右上角保存。</li>
      </ol>

      <h2>四、启动与分流模式选择</h2>
      <ol>
        <li>全局路由建议保持默认的 <strong>配置 (Config)</strong> 模式（相当于安卓的规则分流，国内走直连，国外走代理）。</li>
        <li>在节点列表中点击测试连通性，选中目标节点。</li>
        <li>打开顶部总开关，初次使用时系统会提示“Shadowrocket 想添加 VPN 配置”，点击 <strong>允许</strong> 并输入锁屏密码即可。</li>
      </ol>
    `
  },

  // 4. macOS
  {
    slug: 'macos',
    title: 'macOS苹果电脑配置Clash Verge Rev与系统代理教程 - 机场之家',
    desc: '2026最新Mac电脑科学上网教程。支持M1/M2/M3/M4芯片与Intel平台，详解订阅导入、增强模式与终端命令行代理。',
    h1: 'macOS苹果电脑配置Clash Verge Rev图文教程',
    category: '桌面端教程',
    readTime: '5分钟',
    date: '2026-03-02',
    content: `
      <h2>一、Mac 端为什么选择 Clash Verge Rev？</h2>
      <p>Clash Verge Rev 针对 macOS 进行了专门的现代化 UI 适配，并且原生支持 Apple Silicon (M1/M2/M3/M4) 系列芯片与 Intel 架构。安装简单、内存占用低，完美适配 macOS Sonoma 与 Sequoia 最新系统。</p>

      <h2>二、下载与安装步骤</h2>
      <ol>
        <li>访问 GitHub Releases 页面，根据你的 Mac 芯片类型下载对应安装包：
          <ul>
            <li><strong>Apple Silicon (M系列芯片)：</strong>下载 <code>Clash.Verge_aarch64.dmg</code></li>
            <li><strong>Intel 处理器芯片：</strong>下载 <code>Clash.Verge_x64.dmg</code></li>
          </ul>
        </li>
        <li>打开 DMG 镜像，将 <code>Clash Verge</code> 图标拖拽入 <strong>Applications (应用程序)</strong> 文件夹。</li>
        <li>如果首次打开提示“无法打开，因为无法验证开发者”，请进入系统 <strong>设置 &rarr; 隐私与安全性</strong>，在下方找到拦截提示并点击 <strong>仍要打开</strong>。</li>
      </ol>

      <h2>三、配置订阅与启动代理</h2>
      <ol>
        <li>在左侧菜单点击 <strong>订阅 (Profiles)</strong>，粘贴你的机场订阅链接（如 <a href="../../airport/lingmao/index.html">灵猫</a> 或 <a href="../../airport/kuajiecloud/index.html">跨界</a>）并导入。</li>
        <li>在 <strong>代理 (Proxy)</strong> 页面切换为 <strong>规则 (Rule)</strong> 模式，并选择延迟较低的低抖动节点。</li>
        <li>在 <strong>设置 (Settings)</strong> 页面开启 <strong>系统代理 (System Proxy)</strong> 开关。</li>
      </ol>

      <h2>四、程序员必学：macOS 终端（Terminal）代理配置</h2>
      <p>Mac 终端默认不走系统代理。如果你需要通过 <code>curl</code>、<code>git clone</code> 或 <code>brew</code> 加速拉取海外代码，可在 <code>~/.zshrc</code> 中加入以下别名：</p>
      <pre><code># 开启终端代理 (假设本地端口为 7890)
alias setproxy="export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; export all_proxy=socks5://127.0.0.1:7890"
# 关闭终端代理
alias unsetproxy="unset http_proxy; unset https_proxy; unset all_proxy"</code></pre>
      <p>执行 <code>source ~/.zshrc</code> 生效后，输入 <code>setproxy</code> 即可瞬间让终端享受高速网络。</p>
    `
  },

  // 5. Troubleshooting
  {
    slug: 'troubleshooting',
    title: '节点连不上？网页打不开？全平台科学上网排障与自检指南 - 机场之家',
    desc: '系统代理已开却提示无法访问此网站？国内网站打不开？系统时间误差导致TLS握手失败？全平台翻墙常见故障速查自救手册。',
    h1: '节点连不上？网页打不开？全平台科学上网排障与自检指南',
    category: '排障与进阶',
    readTime: '8分钟',
    date: '2026-03-02',
    content: `
      <h2>一、故障快速排查五步法</h2>
      <div class="quick-answer-box">
        <p>遇到网络异常时，请按顺序依次自检：<strong>1. 检查电脑/手机系统时间是否精准到秒；2. 检查套餐是否流量用尽或到期；3. 更新订阅确保获取最新节点；4. 切换节点排除单点维护；5. 检查端口是否被占用或代理模式误选为全局。</strong></p>
      </div>

      <h2>二、四大高频故障深度解析与解决方案</h2>
      <h3>故障 1：节点测速全部超时（Timeout）或显示 -1ms</h3>
      <ul>
        <li><strong>原因 A：系统时间不同步。</strong> VLESS、VMess 和 Trojan 协议对系统时间极其严格，如果本地时间与网络授时误差超过 90 秒，TLS 加密握手会被服务端判定为重放攻击而主动拒绝。
          <br><strong>解决：</strong>进入 Windows“时间和语言”或手机设置，关闭自动同步再重新打开，强制立即同步网络时间。</li>
        <li><strong>原因 B：机场订阅链接节点已更新。</strong> 服务商可能刚刚割接了入口 IP。
          <br><strong>解决：</strong>在订阅列表中右键点击“更新”，重新拉取最新节点列表。</li>
      </ul>

      <h3>故障 2：能连上 Google，但国内网站（如百度、淘宝）打不开或变极慢</h3>
      <ul>
        <li><strong>原因：</strong>代理模式被错误设置为 <strong>全局 (Global)</strong> 模式，导致所有国内流量都先绕道海外节点再折返回国。
          <br><strong>解决：</strong>将代理模式切换为 <strong>规则 (Rule)</strong> 或 <strong>绕过大陆地址 (Bypass Mainland China)</strong>。</li>
      </ul>

      <h3>故障 3：关闭代理软件后电脑彻底断网，网页全报 DNS 错误</h3>
      <ul>
        <li><strong>原因：</strong>软件在非正常退出（如意外崩溃或直接关机）时，未及时清理 Windows 系统代理注册表设置，导致系统仍向已被关闭的本地端口转发流量。
          <br><strong>解决：</strong>进入 Windows <strong>设置 &rarr; 网络和 Internet &rarr; 代理</strong>，手动关闭“使用代理服务器”选项；或者重新打开 Clash 软件并正常退出。</li>
      </ul>

      <h3>故障 4：ChatGPT 或 Claude 提示“Access Denied”或“Blocked”</h3>
      <ul>
        <li><strong>原因：</strong>所选节点的落地 IP 被 OpenAI/Anthropic 列入风控黑名单（机房滥用度过高）。
          <br><strong>解决：</strong>切换到具有<strong>原生住宅 IP</strong>的节点，或使用 <a href="../../airport/yinxingren/index.html">隐形人</a> 或 <a href="../../airport/laddercloud/index.html">梯子云</a> 提供的 AI 专用解锁线路。</li>
      </ul>
    `
  },

  // 6. Windows Sing-box
  {
    slug: 'windows-sing-box',
    title: 'Windows平台Sing-box图形客户端安装与订阅配置全指南 - 机场之家',
    desc: '2026最新Windows系统Sing-box图形化客户端使用教学。零基础快速上手下一代通用代理核心，支持Hysteria2、VLESS与轻量化规则分流。',
    h1: 'Windows系统Sing-box图形化客户端完整配置教程',
    category: '桌面端教程',
    readTime: '6分钟',
    date: '2026-03-04',
    content: `
      <h2>一、什么是 Sing-box？为什么它是下一代代理核心？</h2>
      <p><strong>Sing-box</strong> 是由 SagerNet 团队开发的新一代通用代理平台。它使用纯 Go 语言编写，具备极度轻量、资源消耗极低、对新型协议（如 Hysteria 2、TUIC、VLESS-Reality）支持极度迅速等优点。相比传统核心，Sing-box 的内存占用降低了 50% 以上。</p>

      <h2>二、下载与图形界面选择</h2>
      <p>目前 Windows 平台主流推荐使用带有图形界面的 <strong>sing-box-windows</strong> 或第三方集成的客户端（如 GUI.for.SingBox）。</p>
      <ol>
        <li>访问官方 GitHub Releases 页面下载 Windows 64位安装包。</li>
        <li>解压后运行主程序，授予本地网络权限。</li>
      </ol>

      <h2>三、导入机场订阅</h2>
      <ol>
        <li>从你的机场用户后台（如 <a href="../../airport/breezenet/index.html">微风网络</a> 或 <a href="../../airport/flashleap/index.html">闪跃</a>）复制 Sing-box 专属订阅链接或 Clash 订阅。</li>
        <li>在客户端界面点击 <strong>Profiles (配置)</strong> &rarr; <strong>Add (添加)</strong>，选择 Remote (远程链接)。</li>
        <li>粘贴订阅地址并点击 Fetch/Update，客户端将自动下载 JSON 格式的节点配置。</li>
      </ol>

      <h2>四、开启 TUN 虚拟网卡模式</h2>
      <p>Sing-box 原生对 TUN 模式支持极佳，无需复杂的第三方驱动配置。在仪表盘勾选 <strong>Enable TUN Mode</strong>，并点击 <strong>Start</strong> 即可接管全系统网络流量。</p>
    `
  },

  // 7. Windows v2rayN
  {
    slug: 'windows-v2rayn',
    title: 'Windows系统v2rayN客户端从零上手与Xray内核进阶配置 - 机场之家',
    desc: 'v2rayN最新版客户端图文配置指南。详解Xray内核集成、vmess/vless/trojan节点手动添加与多订阅批量更新技巧。',
    h1: 'Windows系统v2rayN客户端从零上手与内核进阶配置',
    category: '桌面端教程',
    readTime: '7分钟',
    date: '2026-03-04',
    content: `
      <h2>一、经典长青工具：v2rayN 的优势</h2>
      <p><strong>v2rayN</strong> 是 Windows 平台上历史最悠久、更新最勤奋的经典开源客户端之一。它的最大特色是透明度高、支持无缝集成 Xray、Sing-box 等多种底层核心，适合喜欢手动调试节点与深度自定义路由的高阶玩家。</p>

      <h2>二、安装与依赖准备</h2>
      <ul>
        <li>下载 <code>v2rayN-with-dependencies.zip</code>（已集成 .NET 桌面运行时和全套 Xray 核心）。</li>
        <li>解压至非系统盘目录（如 <code>D:\\Tools\\v2rayN</code>），右键 <code>v2rayN.exe</code> 选择“以管理员身份运行”。</li>
      </ul>

      <h2>三、添加订阅与更新节点</h2>
      <ol>
        <li>在顶部菜单栏点击 <strong>订阅分组 &rarr; 订阅分组设置</strong>。</li>
        <li>点击 <strong>添加</strong>，备注填写机场名称，在“可选地址(url)”中粘贴订阅链接。</li>
        <li>确认保存后，点击 <strong>订阅分组 &rarr; 更新全部订阅(不通过代理)</strong>，节点列表瞬间加载完成。</li>
      </ol>

      <h2>四、路由模式与启动系统代理</h2>
      <p>在底部任务栏状态栏中：</p>
      <ul>
        <li><strong>路由：</strong>选择 <strong>绕过大陆 (Bypass mainland)</strong>。</li>
        <li><strong>核心：</strong>推荐切换为 <strong>Xray</strong> 或 <strong>sing-box</strong>。</li>
        <li><strong>系统代理：</strong>右键托盘图标，勾选 <strong>自动配置系统代理</strong>（图标由蓝变红即表示生效）。</li>
      </ul>
    `
  },

  // 8. Android v2rayNG
  {
    slug: 'android-v2rayng',
    title: 'Android手机v2rayNG客户端节点导入与分流模式设置教程 - 机场之家',
    desc: '轻量极速的安卓科学上网工具v2rayNG图文教程。支持扫码导入节点、多订阅管理、分应用代理与省电模式配置。',
    h1: 'Android手机v2rayNG客户端节点导入与分流教程',
    category: '移动端教程',
    readTime: '5分钟',
    date: '2026-03-04',
    content: `
      <h2>一、为什么很多用户偏爱 v2rayNG？</h2>
      <p>与 Clash 庞大的规则系统相比，<strong>v2rayNG</strong> 更加纯粹、轻便，占用运行内存极小（通常仅 30MB 左右），在千元低配机或老旧安卓设备上运行极其流畅。</p>

      <h2>二、快速导入订阅</h2>
      <ol>
        <li>打开 v2rayNG，点击左上角侧边栏菜单（三条横杠），进入 <strong>订阅分组设置</strong>。</li>
        <li>点击右上角 <strong>+</strong> 号添加分组，输入备注，并在“可选地址”填入机场订阅 URL（如 <a href="../../airport/feiv/index.html">飞V</a>）。</li>
        <li>返回主页面，点击右上角三点菜单，选择 <strong>更新订阅</strong>。</li>
      </ol>

      <h2>三、分流设置与分应用代理</h2>
      <p>为了让微信、淘宝等国内应用直接走手机原本网络，点击左侧菜单 &rarr; <strong>设置</strong>：</p>
      <ul>
        <li><strong>预定义规则：</strong>选择 <strong>绕过局域网及大陆地址</strong>。</li>
        <li><strong>分应用代理：</strong>勾选此项后，可以自由选择只有 Chrome、Telegram、YouTube 走代理，其余应用彻底直连，既省流量又省电。</li>
      </ul>
    `
  },

  // 9. Android Sing-box
  {
    slug: 'android-sing-box',
    title: 'Android手机Sing-box客户端使用教程与TUN模式开启 - 机场之家',
    desc: '安卓平台Sing-box官方图形客户端图文教学。原生支持Hysteria2协议，轻量流畅，低功耗长续航。',
    h1: 'Android手机Sing-box客户端从零入门教程',
    category: '移动端教程',
    readTime: '5分钟',
    date: '2026-03-04',
    content: `
      <h2>一、Sing-box for Android 核心亮点</h2>
      <p>Sing-box 安卓官方应用采用现代 Material You 设计语言，界面极其清新，并且完全采用 Go + Kotlin 原生开发，对手机电池功耗控制极佳，息屏待机掉电微乎其微。</p>

      <h2>二、安装与配置导入</h2>
      <ol>
        <li>从 Google Play 商店或 GitHub 下载 <code>sing-box-*-android.apk</code>。</li>
        <li>打开应用进入 <strong>Profiles</strong> 标签页，点击 <strong>New Profile</strong>。</li>
        <li>Type 选择 <code>Remote</code>，输入机场提供的专属订阅地址，点击右上角勾选保存。</li>
        <li>在主界面选择刚添加的配置，点击圆形的 <strong>Enabled (启用)</strong> 按钮即可连通。</li>
      </ol>
    `
  },

  // 10. iOS Loon
  {
    slug: 'ios-loon',
    title: 'iOS平台Loon客户端配置、插件体系与规则集使用指南 - 机场之家',
    desc: '颜值与性能兼备的iOS网络工具Loon教程。手把手教你订阅导入、节点筛选、免证书插件安装与流媒体分流策略。',
    h1: 'iOS平台Loon客户端配置与插件体系深度指南',
    category: '移动端教程',
    readTime: '6分钟',
    date: '2026-03-04',
    content: `
      <h2>一、为什么进阶 iOS 用户偏爱 Loon？</h2>
      <p><strong>Loon</strong> 凭借现代精致的 UI 设计、极其友好的可视化节点分组配置以及强大的“一键插件 (Plugin)”生态，被誉为 iOS 平台上兼具颜值与硬核实力的网络调试神器。</p>

      <h2>二、导入订阅</h2>
      <ol>
        <li>在 App Store（美区/港区）下载 Loon。</li>
        <li>进入底部 <strong>配置 (Configuration)</strong> 选项卡，点击 <strong>节点 (Nodes) &rarr; 订阅 (Subscriptions)</strong>。</li>
        <li>点击右上角加号，粘贴你的机场订阅 URL，Loon 会自动拉取所有节点与策略组。</li>
      </ol>

      <h2>三、一键插件生态</h2>
      <p>Loon 支持直接通过链接安装插件，无需手动写脚本即可实现：流媒体非自制剧解锁判定、YouTube 广告去重以及 BoxJS 数据同步。</p>
    `
  },

  // 11. iOS Quantumult X
  {
    slug: 'ios-quantumult-x',
    title: 'iOS平台Quantumult X (圈X)策略组与高级分流规则配置教程 - 机场之家',
    desc: '2026硬核玩家必备：圈X策略组嵌套、分流引用、MITM证书生成与JavaScript脚本自动化运行全攻略。',
    h1: 'iOS平台Quantumult X (圈X)高级分流配置全攻略',
    category: '移动端教程',
    readTime: '8分钟',
    date: '2026-03-04',
    content: `
      <h2>一、Quantumult X (圈X) 的王者地位</h2>
      <p><strong>Quantumult X</strong> 是 iOS 平台性能最极致的网络调试利器之一。其底层网络引擎经过高度汇编优化，即使在千兆网络下高速下载也能保持极低发热与极低内存占用。</p>

      <h2>二、订阅导入与资源解析器</h2>
      <ol>
        <li>点击右下角“风车”图标进入设置界面。</li>
        <li>在 <strong>节点 (Server)</strong> 区域点击 <strong>引用 (Resource)</strong>。</li>
        <li>点击右上角添加，粘贴机场订阅，打开 <strong>更新 (Update)</strong> 开关。</li>
        <li>如果你的机场提供的是普通非圈X格式链接，请勾选“资源解析器 (Resource Parser)”进行自动转换。</li>
      </ol>

      <h2>三、MITM 证书配置（用于解密 HTTPS 流量）</h2>
      <p>若需使用广告拦截与网页脚本，需在设置中开启 MITM，生成证书并存入系统，在 iOS <strong>设置 &rarr; 通用 &rarr; 关于本机 &rarr; 证书信任设置</strong> 中打开完全信任。</p>
    `
  },

  // 12. iOS Stash
  {
    slug: 'ios-stash',
    title: 'iOS平台Stash (Clash for iOS)安装、订阅托管与分流体验指南 - 机场之家',
    desc: 'Stash图文使用教程。在苹果iPhone与iPad上完整体验Clash内核规则系统，兼容Clash Premium与Meta分流配置。',
    h1: 'iOS平台Stash客户端快速上手与配置指南',
    category: '移动端教程',
    readTime: '6分钟',
    date: '2026-03-04',
    content: `
      <h2>一、什么是 Stash？</h2>
      <p><strong>Stash</strong> 被广大玩家亲切地称为“iOS 上的官方 Clash”。它完整还原了 Clash 的规则体系、分流逻辑与配置文件格式，如果你在电脑上习惯了 Clash，使用 Stash 将零学习成本。</p>

      <h2>二、配置订阅</h2>
      <ol>
        <li>从海外 App Store 获取并安装 Stash。</li>
        <li>点击主界面顶部的配置文件区域，点击右上角加号 <strong>+</strong>。</li>
        <li>选择 <strong>从 URL 下载</strong>，粘贴你的机场 Clash 订阅链接（如 <a href="../../airport/yinxingren/index.html">隐形人</a> 或 <a href="../../airport/wavenet/index.html">浪网</a>）。</li>
        <li>下载成功后勾选该配置，返回首页点击右上角连接开关即可。</li>
      </ol>
    `
  },

  // 13. macOS Surge
  {
    slug: 'macos-surge',
    title: 'macOS系统Surge 5网关模式与高级分流策略配置指南 - 机场之家',
    desc: 'Mac顶级网络工具Surge 5深度指南。手把手教你配置增强模式（Enhanced Mode）、本地网关与全屋设备局域网代理接管。',
    h1: 'macOS系统Surge 5网关与高级分流实战指南',
    category: '桌面端教程',
    readTime: '8分钟',
    date: '2026-03-04',
    content: `
      <h2>一、Surge 5 为什么被称为 Mac 网络工具天花板？</h2>
      <p><strong>Surge</strong> 以无与伦比的稳定性、极度专业的网络分析仪表盘和深厚的技术底蕴著称。其增强模式采用原生网络扩展内核，几乎零丢包处理所有 TCP/UDP 流量。</p>

      <h2>二、增强模式 (Enhanced Mode) 与网关搭建</h2>
      <p>开启增强模式后，Surge 能无缝接管虚拟机、Docker 容器以及终端中所有的网络通信。更进一步，开启 <strong>Gateway (网关模式)</strong> 后，只需将家中电视盒子或手机的网关和 DNS 指向这台 Mac 的局域网 IP，全屋设备即可无需安装客户端享受无感分流加速。</p>
    `
  },

  // 14. macOS Sing-box
  {
    slug: 'macos-sing-box',
    title: 'macOS系统Sing-box客户端配置与TUN虚拟网卡模式实操 - 机场之家',
    desc: '轻盈无感的Mac端Sing-box安装指南。纯原生编译，极低发热与内存占用，针对M系列芯片深度优化。',
    h1: 'macOS系统Sing-box客户端安装与TUN模式实操',
    category: '桌面端教程',
    readTime: '5分钟',
    date: '2026-03-04',
    content: `
      <h2>一、Mac 原生架构优势</h2>
      <p>Sing-box Mac 客户端采用 Apple 官方最新的 Network Extension 框架，完全不依赖传统的系统代理黑盒修改，所有网络包均在二层虚拟网卡高效处理，系统续航显著提升。</p>

      <h2>二、快速配置步骤</h2>
      <ol>
        <li>下载 <code>sing-box-darwin-arm64.dmg</code> 并安装。</li>
        <li>在配置页面添加远程订阅链接。</li>
        <li>授予系统网络扩展与 VPN 配置权限，点击 Connect 即可享受极速网络。</li>
      </ol>
    `
  },

  // 15. Linux Clash
  {
    slug: 'linux-clash',
    title: 'Linux服务器与Ubuntu桌面Clash/Mihomo后台服务运行与开机自启 - 机场之家',
    desc: 'Linux系统科学上网全指南。详解Mihomo(Clash Meta)内核Systemd服务配置、命令行节点切换与全系统环境变量设置。',
    h1: 'Linux系统Clash/Mihomo后台服务运行与自启教程',
    category: '服务器与软路由',
    readTime: '7分钟',
    date: '2026-03-05',
    content: `
      <h2>一、Linux 环境翻墙痛点</h2>
      <p>在 Ubuntu、Debian 或 CentOS 服务器上进行 <code>git pull</code>、Docker 镜像拉取或 pip 安装时，经常遭遇海外源超时连接失败。本文教你如何在 Linux 无头服务器上以后台守护进程方式运行 Clash。</p>

      <h2>二、部署实战流程</h2>
      <h3>1. 下载核心二进制文件</h3>
      <pre><code>wget https://github.com/MetaCubeX/mihomo/releases/download/v1.18.0/mihomo-linux-amd64-v1.18.0.gz
gzip -d mihomo-linux-amd64-v1.18.0.gz
sudo mv mihomo-linux-amd64-v1.18.0 /usr/local/bin/mihomo
sudo chmod +x /usr/local/bin/mihomo</code></pre>

      <h3>2. 下载订阅配置并创建目录</h3>
      <pre><code>sudo mkdir -p /etc/mihomo
sudo curl -o /etc/mihomo/config.yaml "YOUR_SUBSCRIPTION_URL"</code></pre>

      <h3>3. 配置 Systemd 开机自启</h3>
      <p>创建 <code>/etc/systemd/system/mihomo.service</code> 文件并启动服务：</p>
      <pre><code>sudo systemctl daemon-reload
sudo systemctl enable --now mihomo</code></pre>
    `
  },

  // 16. OpenWrt 软路由
  {
    slug: 'router-openwrt',
    title: 'OpenWrt软路由Passwall与OpenClash全屋科学上网无感翻墙教程 - 机场之家',
    desc: '打造全屋无感翻墙环境。详解OpenWrt软路由固件选择、OpenClash内核升级、Passwall分流策略与家用设备免客户端配置。',
    h1: 'OpenWrt软路由Passwall与OpenClash全屋配置教程',
    category: '服务器与软路由',
    readTime: '9分钟',
    date: '2026-03-05',
    content: `
      <h2>一、为什么家庭需要软路由全屋翻墙？</h2>
      <p>家庭中往往有任天堂 Switch、索尼 PS5、Apple TV、智能音箱等无法自由安装代理软件的硬件设备。通过在软路由上部署科学上网插件，全家所有设备连接 WiFi 即可自动科学上网，完全摆脱手机和电脑反复开软件的繁琐。</p>

      <h2>二、两大核心插件对比与选择</h2>
      <ul>
        <li><strong>OpenClash：</strong>功能极度全面，完整继承 Clash 配置文件与规则分流，适合配置较高（J4125、N100、RK3568等）的软路由。</li>
        <li><strong>Passwall 2：</strong>轻量、稳定、内存占用极低，支持节点负载均衡与多节点分流，在低配置路由器（如斐讯N1、红米AX6000）上表现出众。</li>
      </ul>

      <h2>三、OpenClash 配置避坑要点</h2>
      <ol>
        <li><strong>DNS 防污染设置：</strong>必须关闭软路由系统自带的重定向冲突，勾选“本地 DNS 劫持”为 Dnsmasq 转发。</li>
        <li><strong>内核版本同步：</strong>定期进入插件设置，一键更新 Mihomo 内核至最新开发版以支持新协议。</li>
      </ol>
    `
  },

  // 17. Sub-Store
  {
    slug: 'sub-store-guide',
    title: 'Sub-Store高级订阅管理：节点过滤、测速、去重与重命名全流程 - 机场之家',
    desc: '科学上网订阅管理神器Sub-Store教程。手把手教你多机场聚合、正则节点过滤、自动重命名与格式一键互转。',
    h1: 'Sub-Store高级订阅管理：节点清洗与重命名实操',
    category: '进阶调优与工具',
    readTime: '7分钟',
    date: '2026-03-05',
    content: `
      <h2>一、什么是 Sub-Store？</h2>
      <p>当你拥有 2~3 个机场时，节点列表往往杂乱无章：有的带广告前缀，有的倍率异常，还有大量重复节点。<strong>Sub-Store</strong> 是一款专为解决订阅混乱而生的现代化管理工具，支持 Docker 网页端部署或在小火箭、圈X中本地运行。</p>

      <h2>二、核心三大功能实战</h2>
      <h3>1. 正则批量过滤</h3>
      <p>通过编写简易正则表达式，一键剔除包含“官网”、“测速”、“过期”等无用广告节点。</p>
      <h3>2. 统一重命名规则</h3>
      <p>将不同机场五花八门的命名风格（如“🇭🇰 香港 01 [1.0x]”与“HK-VIP-01”）统一规整为你喜欢的标准化格式（如“香港 01 | 专线”）。</p>
      <h3>3. 多机场合流去重</h3>
      <p>将主力机场（如 <a href="../../airport/breezenet/index.html">微风网络</a>）与备用机场（如 <a href="../../airport/feiv/index.html">飞V</a>）合并为单一智能订阅链接，客户端只需订阅这一个链接即可享有多线路自动备份。</p>
    `
  },

  // 18. TUN 模式
  {
    slug: 'tun-mode-setup',
    title: '什么是TUN虚拟网卡模式？全平台接管游戏与命令行流量配置指南 - 机场之家',
    desc: '彻底解决终端命令行、Steam游戏、UWP应用不走代理的终极方案。全平台客户端TUN Mode开启与虚拟网卡冲突解决手册。',
    h1: '全平台客户端开启TUN虚拟网卡模式完整指南',
    category: '进阶调优与工具',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、为什么普通的“系统代理”不够用？</h2>
      <p>普通的系统代理（System Proxy）本质上只是向操作系统注册了一个 HTTP/SOCKS5 代理端口。像浏览器等常规软件会主动读取这个端口，但很多底层程序：如 Windows 命令提示符 CMD、PowerShell、Git、外服联机游戏以及部分嵌入式开发工具，会直接绕过系统代理向网卡直发 UDP 数据包，导致代理完全失效。</p>

      <h2>二、TUN 模式的底层运作机制</h2>
      <p><strong>TUN (Network TUNnel)</strong> 是操作系统层面的虚拟网络设备。开启后，代理客户端会在系统中虚拟出一张网卡（如 Wintun 驱动），并将操作系统的默认路由网关直接指向该虚拟网卡。所有出站数据包在进入真实物理网卡前都会被强行接管，实现 100% 全流量透明代理。</p>

      <h2>三、主流客户端开启指引</h2>
      <ul>
        <li><strong>Clash Verge Rev：</strong>进入“设置” &rarr; 打开“TUN 模式”，并确保“Service Mode (服务模式)”已安装激活。</li>
        <li><strong>v2rayN：</strong>底部勾选“开启 TUN 模式”。</li>
        <li><strong>Sing-box：</strong>配置中开启 <code>inbounds: [ { "type": "tun" } ]</code>。</li>
      </ul>
    `
  },

  // 19. Terminal Proxy
  {
    slug: 'terminal-proxy',
    title: '程序员必备：CMD、PowerShell、Git与Linux终端代理加速设置教程 - 机场之家',
    desc: 'GitHub克隆慢？npm/pip安装超时？Windows与Mac终端一键开启HTTP/SOCKS5代理配置全景代码指南。',
    h1: '程序员必备：终端命令行全套代理加速设置教程',
    category: '进阶调优与工具',
    readTime: '5分钟',
    date: '2026-03-05',
    content: `
      <h2>一、Windows PowerShell 临时代理配置</h2>
      <p>在当前终端窗口中执行以下命令（假设本地代理端口为 7890）：</p>
      <pre><code>$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"
# 测试是否生效
curl.exe -I https://www.google.com</code></pre>

      <h2>二、Git 命令行单独加速配置</h2>
      <p>为了让 <code>git clone</code> 享受千兆专线速度，可专门为 GitHub 域名指定本地代理：</p>
      <pre><code># 仅针对 github.com 走本地代理
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

# 若需取消配置执行：
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy</code></pre>
    `
  },

  // 20. WebRTC 防泄漏
  {
    slug: 'webrtc-leak-prevention',
    title: '浏览器WebRTC真实IP泄漏检测与防范配置图文教程 - 机场之家',
    desc: '翻墙后真实IP依然被网站识别？手把手教你检测WebRTC STUN打洞泄漏，并在Chrome/Edge/Firefox中彻底阻断真实IP暴露。',
    h1: '浏览器WebRTC真实IP泄漏检测与防范指南',
    category: '安全与风控',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、什么是 WebRTC IP 泄漏？</h2>
      <p>WebRTC 是一项现代浏览器实时音视频通信技术。为了建立点对点 P2P 连接，浏览器会利用 STUN/TURN 服务器探测设备的本地内网 IP 与运营商公网真实 IP。即使你开启了全局代理，许多网页依然能通过简单的 JavaScript 调用窃取你的中国公网真实 IP！这在访问 ChatGPT 或跨境电商平台时极易触发封号。</p>

      <h2>二、自检工具</h2>
      <p>访问 <code>browserleaks.com/webrtc</code> 或 <code>ipleak.net</code>，查看“WebRTC Leak Test”一栏。如果列表中出现了你真实的本地宽带 IP，说明泄漏存在！</p>

      <h2>三、Chrome / Edge 彻底禁用方法</h2>
      <p>在应用商店安装官方推荐的防泄漏扩展插件：<strong>WebRTC Control</strong> 或 <strong>WebRTC Protect</strong>，安装后将模式切换为“Disable WebRTC”，页面自检即可恢复安全。</p>
    `
  },

  // 21. DNS Leak DoH
  {
    slug: 'dns-leak-doh',
    title: 'DNS泄漏与防污染指南：在客户端开启DoH/DoT安全解析 - 机场之家',
    desc: '揭秘DNS污染与解析泄漏的危害。教你使用Cloudflare 1.1.1.1与Google 8.8.8.8加密DNS保护浏览隐私。',
    h1: 'DNS泄漏与防污染指南：DoH/DoT安全解析实战',
    category: '安全与风控',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、DNS 泄漏会带来什么风险？</h2>
      <p>当你访问一个海外网站时，如果你的域名查询请求依然直接发往本地电信或联通的未加密 DNS 服务器（53端口明文），本地运营商就能完整记录下你访问过的每一个域名清单，不仅导致隐私荡然无存，还极易遭受 DNS 投毒与网址重定向。</p>

      <h2>二、开启 DoH (DNS over HTTPS) 实战</h2>
      <p>在 Clash Verge Rev 或 Sing-box 客户端中，找到 DNS 配置模块，将默认 Nameserver 修改为安全加密的 DoH 上游：</p>
      <pre><code>dns:
  enable: true
  nameserver:
    - https://1.1.1.1/dns-query
    - https://8.8.8.8/dns-query
  fallback:
    - https://dns.google/dns-query</code></pre>
    `
  },

  // 22. ChatGPT IP Check
  {
    slug: 'chatgpt-ip-check',
    title: 'ChatGPT与Claude防封节点检测与IP纯净度评分实测方法 - 机场之家',
    desc: '如何挑选不被封号的AI专用节点？手把手教你查询Scamalytics欺诈评分、双ISP属性检测与节点IP纯净度验证。',
    h1: 'ChatGPT与Claude防封节点检测与IP纯净度测试',
    category: '场景与设备',
    readTime: '7分钟',
    date: '2026-03-05',
    content: `
      <h2>一、AI 平台风控的底层逻辑</h2>
      <p>OpenAI 与 Anthropic (Claude) 采用顶级第三方风控数据库（如 Cloudflare Turnstile、IPQualityScore、Scamalytics）。当一个节点的 IP 满足以下特征时，账号极易被封：</p>
      <ul>
        <li>机房类型属于普通 Hosting（数据中心 VPS）而非 Residential（住宅宽带）。</li>
        <li>Fraud Score（欺诈评分）高于 25 分。</li>
        <li>同 IP 下短时间内有数百个账号频繁轮换登录。</li>
      </ul>

      <h2>二、三步检测你的节点 IP 纯净度</h2>
      <ol>
        <li><strong>查询欺诈分：</strong>连接节点后访问 <code>scamalytics.com</code>，输入当前 IP 查看 Fraud Score。绿色的 0~10 分为最佳（如 <a href="../../airport/yinxingren/index.html">隐形人</a> 的纯专线节点）。</li>
        <li><strong>查询 ISP 属性：</strong>访问 <code>ipinfo.io</code>，查看 <code>type</code> 字段是否为 <code>isp</code>。</li>
      </ol>
    `
  },

  // 23. Stream Unlock Test
  {
    slug: 'stream-unlock-test',
    title: '流媒体解锁检测脚本运行与Netflix/Disney+非自制剧排查教程 - 机场之家',
    desc: '怎样判断节点能否看奈飞全片库？教你在Linux终端与一键脚本中排查Netflix/Disney+非自制剧与原生IP属性。',
    h1: '流媒体解锁检测实战：排查Netflix非自制剧限制',
    category: '场景与设备',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、自制剧 vs 非自制剧的核心区别</h2>
      <p>Netflix 对自家出资拍摄的“自制剧（Netflix Originals，如《怪奇物语》）”几乎不做 IP 地理限制；但对购买了第三方版权的“非自制剧（如《绝命毒师》）”则有极度严格的原生广播 IP 校验。如果你的节点只能看自制剧，说明该节点并未真正解锁当地完整片库！</p>

      <h2>二、常用一键检测脚本</h2>
      <p>如果你使用 VPS 或软路由，可在终端运行经典开源测试脚本：</p>
      <pre><code>bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/master/check.sh)</code></pre>
      <p>脚本将直观反馈：Netflix、Disney+、YouTube Premium、TikTok 各区域的真实解锁状态。</p>
    `
  },

  // 24. PS5 Switch Proxy
  {
    slug: 'ps5-switch-proxy',
    title: 'PS5/Switch/Xbox主机游戏加速：电脑局域网共享与路由器代理分流 - 机场之家',
    desc: '主机联机NAT类型变Strict？下载更新慢如蜗牛？详解PS5、Switch与Xbox通过电脑局域网代理加速联机图文指南。',
    h1: 'PS5与Switch主机通过局域网代理联机加速教程',
    category: '场景与设备',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、实现原理：开启客户端“允许来自局域网连接”</h2>
      <p>无需购买昂贵的联机加速盒子，只需让你的 PC 电脑与游戏主机处于同一个家庭路由器 WiFi 下即可实现代理共享。</p>

      <h2>二、操作步骤</h2>
      <ol>
        <li>在电脑端 Clash Verge Rev 设置中，打开 <strong>允许来自局域网的连接 (Allow LAN)</strong>。</li>
        <li>按 <code>Win + R</code> 输入 <code>cmd</code>，执行 <code>ipconfig</code>，记下电脑的本地内网 IPv4 地址（如 <code>192.168.1.100</code>）。</li>
        <li>打开 PS5 或 Nintendo Switch，进入 <strong>网络设置 &rarr; 自定义连接</strong>。</li>
        <li>IP 地址与网关保持自动，在 <strong>Proxy 代理服务器</strong> 选项中选择“使用”。</li>
        <li>地址输入电脑的 IP <code>192.168.1.100</code>，端口输入 <code>7890</code>，保存并测试连接即可！</li>
      </ol>
    `
  },

  // 25. Apple TV Proxy
  {
    slug: 'apple-tv-proxy',
    title: 'Apple TV电视盒子科学上网与海外流媒体4K HDR播放配置 - 机场之家',
    desc: '在客厅大屏享受奈飞与YouTube 4K原画。详解Apple TV原生tvOS版Shadowrocket、Surge安装与软路由分流方案。',
    h1: 'Apple TV电视盒子科学上网与4K流媒体配置教程',
    category: '场景与设备',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、Apple TV tvOS 17 原生 VPN 特性</h2>
      <p>自苹果发布 tvOS 17 系统后，Apple TV 正式支持了系统级第三方 VPN 框架！<strong>Shadowrocket</strong>、<strong>Surge</strong>、<strong>Loon</strong> 均已推出了 tvOS 原生独立应用，告别了过去必须依赖旁路由的局限。</p>

      <h2>二、直接在 Apple TV 上安装小火箭</h2>
      <ol>
        <li>在 Apple TV 上登录已购买 Shadowrocket 的美区 Apple ID。</li>
        <li>打开 App Store 搜索并下载 Shadowrocket。</li>
        <li>使用手机端 Shadowrocket 扫描 Apple TV 屏幕上的配对二维码，一键将手机中的机场订阅与节点秒级同步至电视端！</li>
        <li>点击连接，即可在客厅大屏无阻畅享 YouTube 4K 60帧与 Netflix 杜比视界。</li>
      </ol>
    `
  },

  // 26. Telegram MTProto
  {
    slug: 'telegram-mtproto',
    title: 'Telegram内置MTProto代理设置与一键连接提速防封攻略 - 机场之家',
    desc: '电报直连转圈圈？图文详解Telegram内置MTProto与SOCKS5代理配置，无需系统级全局翻墙即可秒发收消息。',
    h1: 'Telegram内置MTProto与SOCKS5代理提速设置教程',
    category: '场景与设备',
    readTime: '5分钟',
    date: '2026-03-05',
    content: `
      <h2>一、Telegram 专用内置代理的妙处</h2>
      <p>很多用户希望电脑或手机在不开启全局代理的情况下，依然能够单独接收 Telegram 的即时消息。Telegram 客户端内置了极为强悍的 MTProto 与 SOCKS5 代理协议栈，能实现应用级独立代理加速。</p>

      <h2>二、配置本地 SOCKS5 直连</h2>
      <ol>
        <li>在电脑或手机上启动你的客户端（如 Clash）。</li>
        <li>打开 Telegram，进入 <strong>Settings (设置) &rarr; Data and Storage (数据与存储) &rarr; Proxy Settings (代理设置)</strong>。</li>
        <li>点击 <strong>Add Proxy (添加代理)</strong>，选择 <strong>SOCKS5</strong>。</li>
        <li>Server 填写 <code>127.0.0.1</code>，Port 填写本地代理端口（如 <code>7890</code>），确认保存。</li>
        <li>开启“Use Proxy”开关，右侧显示绿色延迟并打勾即表示配置成功！</li>
      </ol>
    `
  },

  // 27. Rules Customization
  {
    slug: 'rules-customization',
    title: '科学上网分流规则编写实战：自定义域名与GEOIP黑白名单配置 - 机场之家',
    desc: '掌握Clash与Sing-box分流精髓。教你编写DOMAIN-SUFFIX、IP-CIDR与GEOIP规则，精确控制每一个网站直连或走指定节点。',
    h1: '科学上网分流规则编写实战：精准控制流量走向',
    category: '进阶调优与工具',
    readTime: '7分钟',
    date: '2026-03-05',
    content: `
      <h2>一、分流规则四大核心类型</h2>
      <ul>
        <li><code>DOMAIN-SUFFIX,google.com,Proxy</code>：匹配以 google.com 结尾的所有域名走代理策略组。</li>
        <li><code>DOMAIN-KEYWORD,openai,AI-Group</code>：域名中只要包含 openai 关键词即分配至专属 AI 节点。</li>
        <li><code>GEOIP,CN,DIRECT</code>：识别为中国大陆 IP 归属地的直接走本地直连，不耗费机场流量。</li>
        <li><code>MATCH,Final-Group</code>：匹配最后兜底未命中规则的所有请求。</li>
      </ul>

      <h2>二、实战：为学术或特定办公平台添加直连白名单</h2>
      <p>如果你访问高校内网或特定政企平台时被误代理拦截，只需在规则最顶部插入：</p>
      <pre><code>rules:
  - DOMAIN-SUFFIX,edu.cn,DIRECT
  - DOMAIN-SUFFIX,gov.cn,DIRECT</code></pre>
    `
  },

  // 28. Speed Test Guide
  {
    slug: 'speed-test-guide',
    title: '如何科学测速？正确使用Speedtest与节点真实带宽压测方法 - 机场之家',
    desc: '为什么测速图几百兆日常看视频却卡顿？揭秘单线程与多线程测速真相，教你使用YouTube统计信息与iperf3测出真实品质。',
    h1: '如何科学测速？揭开单线程与多线程测速真相',
    category: '进阶调优与工具',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、警惕“测速图骗局”</h2>
      <p>网络上很多机场测速频道贴出的“千兆全绿跑满”截图，大部分是采用<strong>多线程并发压测</strong>跑出的瞬时峰值。在实际日常使用中，4K 视频加载、网页渲染和外服游戏主要考验的是<strong>单线程持续吞吐能力与丢包抖动</strong>！</p>

      <h2>二、最科学的日常测速三大标准</h2>
      <ol>
        <li><strong>YouTube 4K Stats for nerds（详细统计信息）：</strong>右键开启，观察 Connection Speed 是否稳定在 50,000 Kbps 以上且 Buffer Health 持续健康。</li>
        <li><strong>Fast.com 单线程测速：</strong>点击“显示更多信息”，勾选只测试单线程，如能稳定达到 30Mbps 以上，日常使用便极度丝滑。</li>
      </ol>
    `
  },

  // 29. Node Conversion
  {
    slug: 'node-conversion',
    title: '订阅链接转换教程：Base64/Clash/Singbox多格式在线与本地互转 - 机场之家',
    desc: '手把手教你将V2ray/SS普通节点转换为Clash与Sing-box格式配置。揭秘第三方转换后端隐私陷阱与本地离线转换方案。',
    h1: '订阅链接转换教程：多客户端格式无缝互转指南',
    category: '进阶调优与工具',
    readTime: '6分钟',
    date: '2026-03-05',
    content: `
      <h2>一、为什么需要订阅转换？</h2>
      <p>部分老旧机场或自建 VPS 仅提供由 <code>vmess://</code>、<code>vless://</code> 或 <code>ss://</code> 构成的 Base64 文本列表，而 Clash 和 Sing-box 需要结构化的 YAML 或 JSON 配置文件，必须借助转换工具进行格式重构。</p>

      <h2>二、保护隐私：坚决不要使用不明公共转换网站</h2>
      <p>将订阅链接粘贴进未知来源的第三方在线转换网站，等同于将你的订阅密钥拱手相送！不良站长可以轻松盗用你的节点流量甚至注入中间人恶意规则。推荐使用开源本地部署的 Subconverter 或客户端自带的转换解析器。</p>
    `
  },

  // 30. Security Audit Guide
  {
    slug: 'security-audit-guide',
    title: '翻墙安全审计：检测你的代理是否安全与个人隐私泄漏排查 - 机场之家',
    desc: '节点运营商能看到我的密码吗？手把手教你自检MITM中间人攻击、SSL证书篡改、公网IP伪装与安全防护全流程。',
    h1: '翻墙安全审计：排查个人网络隐私与中间人劫持',
    category: '安全与风控',
    readTime: '7分钟',
    date: '2026-03-05',
    content: `
      <h2>一、翻墙时你的数据处于什么加密层级？</h2>
      <p>只要目标网站使用 HTTPS（浏览器地址栏带有安全锁标记），你的网络传输数据在离开浏览器时就已被 TLS 1.3 强加密。<strong>机场节点服务器只能看到你连接的目标 IP 与域名，绝不可能看到你的明文账号密码、聊天内容或银行卡信息！</strong></p>

      <h2>二、安全自检三道防线</h2>
      <ol>
        <li><strong>严禁随意信任未知根证书：</strong>除非是你自己配置的广告过滤工具，否则绝不要在手机或电脑系统中安装任何第三方要求安装的 <code>.crt</code> 根证书！</li>
        <li><strong>启用双重认证 (2FA)：</strong>为 Google、GitHub、Telegram 等核心海外账户绑定 TOTP 动态验证码（如 Google Authenticator），即使密码泄漏也能确保账号安全无虞。</li>
      </ol>
    `
  }
];

export default GUIDES;
export { GUIDES };

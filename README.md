# 机场之家 (jichanghome.blog)

> 2026专业中文机场推荐与梯子节点导航门户 · Bing SEO 专业建站系统

---

## 🌟 项目简介

**机场之家 (jichanghome.blog)** 是一个专为中文用户打造的、以 Bing 自然搜索流量为核心的高性能网络技术资讯门户。

本项目严格执行“**纯 HTML + 原生 CSS**”秒开级架构，零引入任何重型外部框架或膨胀的 JS 运行时。所有页面跳转、样式表和脚本均使用**标准相对路径**（如 `css/style.css`、`../css/style.css`、`../../css/style.css`），严禁使用以 `/` 开头的绝对路径。这确保了网站既能通过 HTTP/HTTPS 线上高速托管，也能直接在本地通过文件系统双击（`file://` 协议）离线无障碍浏览。

---

## 🚀 核心架构与功能模块

1. **首页高权重 SEO 落地页：** 严格按照 13 个标准模块布局（Header、Hero、快速答案、精选卡片、综合排行榜、场景专题、横向比对工具、最新深度评测、全平台教程中心、技术百科、选型指南、FAQ、Footer）。
2. **场景化推荐系统 (`/recommend/`)：** 低预算平价、高端 IPLC/IEPL 专线、新手小白入门、高稳定性抗断连、ChatGPT/Claude 原生专用、Netflix/Disney+ 4K流媒体解锁 6 大细分专题。
3. **多维度排行榜体系 (`/ranking/`)：** 综合实力总榜、极致性价比单GB成本榜、晚高峰防断连专线榜、低预算平价榜。
4. **统一机场数据库源 (`data/airports.json` / `data/airports.js`)：** 单一真实数据源驱动推荐卡片、评测单页与排行榜，彻底杜绝数据割裂与重复维护。
5. **动态横向对比工具 (`/compare/`)：** 原生 Vanilla JS 实现 2~4 家机场多参数自由勾选比对，支持在 `file://` 协议下无 CORS 阻碍流畅运行。
6. **全平台图文教程中心 (`/guides/`)：** Windows (Clash Verge Rev)、Android (Clash Meta)、iOS (Shadowrocket)、macOS 完整配置教学与连通性故障排查实操。
7. **长篇深度技术博客 (`/blog/`)：** 5 篇原创深度技术长文（选购避坑指南、IPLC/IEPL物理线路原理、代理协议横向对比、流媒体解锁机制、AI大模型风控防范）。
8. **名词技术百科全书 (`/glossary/`)：** IPLC 专线、Clash 规则、Sub-Store 订阅转换、TUN 虚拟网卡模式、节点倍率与审计规则等名词通俗科普。
9. **Bing SEO 全套技术方案：**
   - 独立 Title 与 Meta Description，0 模板重复
   - 正确规范的 Canonical 标签 (`https://jichanghome.blog/...`)
   - `robots.txt` 规范指引
   - 包含 43 个正式有效页面的 `sitemap.xml`
   - JSON-LD 结构化数据（WebSite, Review, ItemList, Article, TechArticle）
   - IndexNow 实时推送模块与 API Key 验证文件
10. **全套自动化审计与验收工具：** 涵盖死链检查、内容占位符校验与 SEO 深度审计脚本。

---

## 🛠️ 本地运行与维护命令

本站使用 Node.js 执行自动化构建与审计：

```bash
# 执行全站静态生成（耗时仅需数十毫秒）
node scripts/build-all.js

# 执行全站验证与 SEO 审计
npm run build
# 或者
npm test

# 检查全站内部链接与相对路径完整性（确保 0 死链、100% 相对路径）
npm run check-links

# 检查页面内容、数据模型与去除占位符
npm run validate

# 执行 Bing Technical SEO 规范审计并生成 docs/final-audit.md 报告
npm run audit

# 执行 IndexNow 搜索引擎推送
npm run indexnow
```

---

## 📂 目录架构一览

```text
jichanghome.blog/
├── index.html                           # 首页 (核心落地页，13个标准化内容分区)
├── 404.html                             # 404 错误页
├── sitemap.xml                          # 官方 XML 站点地图
├── robots.txt                           # 搜索引擎爬取协议
├── 8b9f71c11e3b48fbb2305a2e99d821ae.txt # IndexNow 密钥验证文件
├── css/
│   └── style.css                        # 纯原生现代响应式样式表
├── js/
│   └── main.js                          # 极简 Vanilla JS (汉堡菜单、动态比对工具)
├── data/
│   ├── airports.json                    # 机场结构化数据库 (Single Source of Truth)
│   └── airports.js                      # 供前端静态直接载入的机场数据对象
├── recommend/                           # 场景推荐专题
│   ├── index.html
│   ├── budget/index.html
│   ├── premium/index.html
│   ├── beginner/index.html
│   ├── stable/index.html
│   ├── ai/index.html
│   └── streaming/index.html
├── ranking/                             # 节点排行榜
│   ├── index.html
│   ├── overall/index.html
│   ├── value/index.html
│   ├── stable/index.html
│   └── budget/index.html
├── airport/                             # 品牌独立评测
│   ├── index.html
│   ├── feiniao/index.html
│   ├── paopaogou/index.html
│   ├── juziyun/index.html
│   ├── mojie/index.html
│   └── shandianmao/index.html
├── compare/                             # 机场在线横向对比工具
│   └── index.html
├── guides/                              # 客户端教程中心
│   ├── index.html
│   ├── windows/index.html
│   ├── android/index.html
│   ├── ios/index.html
│   ├── macos/index.html
│   └── troubleshooting/index.html
├── blog/                                # 选型深度科普长文
│   ├── index.html
│   ├── how-to-choose-reliable-airport/index.html
│   ├── iplc-iepl-bgp-transit-differences/index.html
│   ├── shadowsocks-vless-trojan-protocols/index.html
│   ├── streaming-unlock-netflix-disney-guide/index.html
│   └── chatgpt-claude-ai-node-requirements/index.html
├── glossary/                            # 名词百科
│   ├── index.html
│   ├── iplc/index.html
│   ├── clash/index.html
│   ├── sub-store/index.html
│   ├── tun-mode/index.html
│   └── traffic-multiplier/index.html
├── about/index.html                     # 关于我们
├── contact/index.html                   # 联系我们
├── editorial-policy/index.html          # 独立编辑政策
├── privacy-policy/index.html            # 隐私政策
├── disclaimer/index.html                # 免责声明
├── docs/                                # 规范文档与审计报告
│   ├── keyword-map.csv                  # 关键词落地页对应图谱
│   ├── bing-webmaster-guide.md          # Bing 站长工具操作指南
│   ├── deployment-cloudflare.md         # Cloudflare Pages 部署说明
│   └── final-audit.md                   # 自动化验收 PASS 总报告
└── scripts/                             # 极速构建与自动化 QA 脚本
    ├── build-all.js
    ├── check-links.js
    ├── validate-content.js
    ├── audit-seo.js
    └── indexnow.js
```

---

## 📄 授权与免责

本项目所有内容仅供计算机网络技术研究、跨境电子商务与学术研究交流参考。请遵守当地法律法规，合规使用网络。

# Cloudflare Pages 部署与上线完整指引
**官方域名：** `jichanghome.blog`  
**GitHub 仓库：** `https://github.com/tangtang856/jichanghome.blog`

---

## 一、方案优势

本站采用纯原生 HTML5 + 现代化原生 CSS 架构，不含任何重型框架运行时代码：
1. **秒开级全球加载速度：** 静态文件直接由 Cloudflare 全球 300+ 数据中心边缘节点缓存，TTFB 控制在 30ms 级别，Lighthouse Performance 轻松达标 100/100。
2. **纯静态零运维：** 零服务器运维成本，抗百万级并发冲击与高频防封堵。
3. **极速构建：** 构建耗时仅需数十毫秒。

---

## 二、Cloudflare Pages 绑定与自动部署

### 步骤 1：创建 Cloudflare Pages 项目
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 在左侧导航栏点击 **Workers & Pages** &rarr; **Overview**。
3. 点击 **Create application** &rarr; 选择 **Pages** 标签页 &rarr; 点击 **Connect to Git**。
4. 授权 GitHub 并选择仓库：`tangtang856/jichanghome.blog`。

### 步骤 2：构建设置 (Build Configuration)
在配置页面中填写：
- **Project name (项目名称)：** `jichanghome-blog`（或自定义）
- **Production branch (生产分支)：** `main`
- **Framework preset (框架预设)：** `None`
- **Build command (构建命令)：**
  ```bash
  npm run build
  ```
  *(构建命令会执行全站自动化内容校验、相对路径死链检测与 Bing SEO 审计)*
- **Build output directory (输出目录)：**
  留空 或 输入 `.` (即仓库根目录，所有编译好的静态 HTML、CSS、JS、xml 均位于根目录)
- **Environment variables (环境变量)：** 无需额外变量

### 步骤 3：点击 Deploy
点击 **Save and Deploy**，Cloudflare 将在 15~30 秒内完成全量构建与全球边缘节点发布。

---

## 三、绑定自定义域名 jichanghome.blog

1. 部署完成后，在项目页面顶部点击 **Custom domains (自定义域)** 标签页。
2. 点击 **Set up a custom domain (设置自定义域)**。
3. 输入您的域名：`jichanghome.blog`。
4. 点击 **Continue**：
   - **如果域名 DNS 已由 Cloudflare 托管：** Cloudflare 会自动配置对应的 CNAME 解析，点击确认即可秒级生效。
   - **如果域名在外部注册商（如 Namecheap / GoDaddy / 腾讯云等）：** 按照屏幕提示，在注册商的 DNS 管理后台添加一条指向 `[your-project].pages.dev` 的 CNAME 记录。
5. （可选）建议一并绑定 `www.jichanghome.blog`，并设置重定向规则统一跳转至主域名 `jichanghome.blog`。

---

## 四、安全与 HTTPS 证书配置

1. 在 Cloudflare 控制台中进入 **SSL/TLS** 设置：
   - 加密模式建议选择 **Full (Strict)**。
2. 进入 **Edge Certificates (边缘证书)**：
   - 开启 **Always Use HTTPS (始终使用 HTTPS)**。
   - 开启 **Automatic HTTPS Rewrites (自动 HTTPS 重写)**。
   - TLS 最低版本设置为 **TLS 1.2**。

---

## 五、后续日常内容维护流程

由于本站建立了统一数据模型：
1. **更新机场价格或新增品牌：**
   修改 `data/airports.json` 中的数据，执行 `node scripts/build-all.js`，全站所有推荐卡片、排行榜与评测页面即自动批量更新。
2. **发布新文章或新教程：**
   在 `scripts/build-blog.js` 或 `scripts/build-guides.js` 中新增条目，执行 `node scripts/build-all.js`。
3. **提交代码到 GitHub：**
   ```bash
   git add .
   git commit -m "更新机场数据与最新评测"
   git push origin main
   ```
   Cloudflare Pages 会自动监听 GitHub 推送，触发自动化构建、审计并在 30 秒内平滑上线。

# Bing Webmaster Tools 完整操作指南
**项目域名：** `https://jichanghome.blog`  
**核心目标：** 最大化 Bing 搜索引擎对本站页面的抓取效能与收录质量。

---

## 一、添加网站并完成所有权验证

1. 访问 [Bing Webmaster Tools 官网](https://www.bing.com/webmasters) 并使用 Microsoft 账号登录。
2. 点击左上角 **添加网站 (Add a site)**：
   - **方式 A（推荐，最快捷）：** 如果您已有 Google Search Console，可直接选择 **从 GSC 导入 (Import from Google Search Console)**，一键同步已验证的域名与 Sitemap。
   - **方式 B（手动添加）：** 输入 `https://jichanghome.blog`。
3. 手动验证所有权方式：
   - **DNS CNAME / TXT 记录验证（推荐）：** 在域名 DNS 解析服务商（如 Cloudflare / 腾讯云 / 阿里云）添加 Bing 提供的 CNAME 别名或 TXT 记录。
   - **HTML Meta 标签验证：** Bing 会提供一段 `<meta name="msvalidate.01" content="..." />`。您可以将该标签加入到 `index.html` 的 `<head>` 中。

---

## 二、提交 Sitemap 站点地图

1. 在 Bing Webmaster Tools 左侧菜单点击 **站点地图 (Sitemaps)**。
2. 点击右上角 **提交站点地图 (Submit sitemap)**。
3. 输入官方 Sitemap 完整 URL：
   ```text
   https://jichanghome.blog/sitemap.xml
   ```
4. 点击 **提交 (Submit)**。
5. 提交后状态通常在数分钟内显示为 `Processing (处理中)`，随后变为 `Success (成功)`，并显示已发现的 43 个正式网页 URL。

---

## 三、IndexNow 实时抓取配置与验证

本站已完整集成 IndexNow 协议：
- **验证 Key 文件地址：** `https://jichanghome.blog/8b9f71c11e3b48fbb2305a2e99d821ae.txt`
- **文件内容：** `8b9f71c11e3b48fbb2305a2e99d821ae`

### 如何在本地推送新内容到 Bing：
在项目根目录下运行：
```bash
# 智能增量推送（自动推送新页面或距离上次推送超过7天的页面）
npm run indexnow

# 强制全量提交全站 43 个页面
node scripts/indexnow.js --all

# 指定单个或多个更新的页面单独提交
node scripts/indexnow.js airport/paopaogou/index.html blog/how-to-choose-reliable-airport/index.html
```

> **重要提示：**
> - HTTP 200 或 202 响应表示 IndexNow 成功受理，Bing 爬虫会在数分钟到数小时内优先发起抓取。
> - 提交成功并不等同于 Bing 立即索引展示，Bing 会评估页面质量与搜索意图匹配度。

---

## 四、使用 URL 检查工具 (URL Inspection)

在 Bing Webmaster Tools 顶部搜索框或左侧 **URL 检查 (URL Inspection)** 输入任意核心页面（如 `https://jichanghome.blog/`）：
1. 点击 **检查 (Inspect)**。
2. 查看当前索引状态、最后爬取日期、抓取错误与发现的结构化数据（Schema）。
3. 如果页面刚刚更新，可点击 **请求索引 (Request indexing)** 促使 Bing 加速重新抓取。

---

## 五、搜索表现监控 (Search Performance)

每周定期查看 **搜索表现 (Search Performance)** 报表：
- **核心关注指标：**
  - 展示次数 (Impressions)
  - 点击量 (Clicks)
  - 平均点击率 (Average CTR)
  - 平均排名 (Average Position)
- **关键词跟踪：**
  - 重点监控 `机场推荐`、`机场节点`、`性价比机场`、`梯子推荐`、`vpn` 等主攻关键词在 Bing 的排名升降趋势。
  - 根据展现高但点击率低的关键词，微调对应落地页的 Title 与 Description。

---

## 六、常见抓取问题排查 (Crawl Issues)

1. **4xx / 5xx 错误：** 本站已通过自动化 `scripts/check-links.js` 验证，全站 0 死链。若 Bing 报 404，检查是否提交了已删除的旧路径。
2. **规范标记不匹配 (Canonical Mismatch)：** 本站全站页面的 Canonical 标签均严格与正式生产 URL 保持一致。
3. **已排除或未索引：** 若部分深层页面未被收录，请在首页或核心专题中增加指向该页面的内部链接权重。

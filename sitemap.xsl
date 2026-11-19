<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title>XML 网站地图 (Sitemap) - 机场之家</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "Helvetica Neue", Arial, sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 2.5rem 1rem;
            line-height: 1.5;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
          }
          .header-box {
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
          }
          h1 {
            color: #0f172a;
            font-size: 1.85rem;
            font-weight: 800;
            margin: 0 0 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
          }
          .badge {
            background: #2563eb;
            color: #ffffff;
            font-size: 0.85rem;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-weight: 700;
          }
          p.desc {
            color: #64748b;
            font-size: 0.95rem;
            line-height: 1.7;
            margin: 0 0 1.5rem 0;
          }
          .actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .btn {
            display: inline-block;
            background: #2563eb;
            color: #ffffff;
            text-decoration: none;
            padding: 0.6rem 1.25rem;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            transition: background 0.2s;
          }
          .btn:hover {
            background: #1d4ed8;
          }
          .btn-secondary {
            background: #f1f5f9;
            color: #334155;
            border: 1px solid #cbd5e1;
          }
          .btn-secondary:hover {
            background: #e2e8f0;
          }
          .table-wrapper {
            overflow-x: auto;
            margin-top: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.875rem;
            text-align: left;
          }
          th {
            background-color: #f8fafc;
            color: #475569;
            padding: 0.85rem 1rem;
            font-weight: 700;
            border-bottom: 2px solid #e2e8f0;
            white-space: nowrap;
          }
          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          td a {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
            font-weight: 500;
          }
          td a:hover {
            text-decoration: underline;
          }
          .priority-high {
            background: #dcfce7;
            color: #15803d;
            padding: 0.15rem 0.45rem;
            border-radius: 4px;
            font-weight: 700;
          }
          .priority-med {
            background: #e0f2fe;
            color: #0369a1;
            padding: 0.15rem 0.45rem;
            border-radius: 4px;
            font-weight: 600;
          }
          .priority-low {
            background: #f1f5f9;
            color: #64748b;
            padding: 0.15rem 0.45rem;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header-box">
            <h1>
              <span>XML 网站地图 (Sitemap)</span>
              <span class="badge">共 <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> 个 URL</span>
            </h1>
            <p class="desc">
              这是由 <strong>机场之家 (jichanghome.blog)</strong> 自动生成的 Bing / Google 标准 XML 网站地图。<br/>
              搜索引擎抓取本文件的原始 XML 结构以建立索引；人类访客可通过本样式表直观查看全站已发布的页面清单、最后更新时间与抓取权重。
            </p>
            <div class="actions">
              <a href="index.html" class="btn btn-secondary">&larr; 返回网站首页</a>
              <a href="sitemap.html" class="btn">查看人类友好型 HTML 网站地图 &rarr;</a>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px; text-align: center;">#</th>
                  <th>网页链接 (URL)</th>
                  <th style="width: 120px;">最后修改</th>
                  <th style="width: 100px;">更新频率</th>
                  <th style="width: 80px; text-align: center;">优先级</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td style="text-align: center; color: #94a3b8;"><xsl:value-of select="position()"/></td>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td style="text-align: center;">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.8">
                          <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority &gt;= 0.5">
                          <span class="priority-med"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

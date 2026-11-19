const fs = require('fs');
const path = require('path');
const { AIRPORTS } = require('./template-base');
const GUIDES = require('./data-guides');
const ALL_ARTICLES = require('./data-all-articles');

const csvPath = path.join(__dirname, '../docs/keyword-map.csv');
let csvContent = `Keyword,Intent,Target URL,Page Type,Priority,Title,H1
机场推荐,商业调研/购买,https://jichanghome.blog/,Homepage,P0,2026专业中文机场推荐与梯子节点导航指南 | 靠谱稳定VPN评测 - 机场之家,2026年稳定优质机场推荐与网络节点选购指南
梯子推荐,商业调研/购买,https://jichanghome.blog/,Homepage,P0,2026专业中文机场推荐与梯子节点导航指南 | 靠谱稳定VPN评测 - 机场之家,2026年稳定优质机场推荐与网络节点选购指南
vpn推荐,商业调研/购买,https://jichanghome.blog/,Homepage,P0,2026专业中文机场推荐与梯子节点导航指南 | 靠谱稳定VPN评测 - 机场之家,2026年稳定优质机场推荐与网络节点选购指南
vpn机场,商业调研/选型,https://jichanghome.blog/,Homepage,P0,2026专业中文机场推荐与梯子节点导航指南 | 靠谱稳定VPN评测 - 机场之家,2026年稳定优质机场推荐与网络节点选购指南
vpn节点,信息查询/选型,https://jichanghome.blog/ranking/index.html,Pillar,P1,2026优质VPN机场节点多维度排行榜 | 测速与稳定性对比 - 机场之家,2026年优质网络节点与机场多维度综合排行榜
机场节点,信息查询/选型,https://jichanghome.blog/ranking/overall/index.html,Cluster,P1,2026全网优质机场节点综合实力排行榜 | 延迟与速率评测 - 机场之家,2026年全网机场节点综合实力排行榜
性价比机场,商业调研/比价,https://jichanghome.blog/ranking/value/index.html,Cluster,P0,2026高性价比机场推荐排行榜 | 均价每GB成本透明对比 - 机场之家,2026年高性价比平价机场推荐排行榜
vpn,基础定义/行业概述,https://jichanghome.blog/blog/how-to-choose-reliable-airport/index.html,Article,P1,新手如何挑选靠谱VPN与节点机场：避坑与选购全指南 - 机场之家,新手如何挑选靠谱VPN与节点机场：避坑与选购全指南
低预算平价机场,比价/购买,https://jichanghome.blog/recommend/budget/index.html,Cluster,P1,2026低预算平价机场推荐 | 学生党备用节点清单 - 机场之家,2026年低预算与轻量平价机场推荐
高端专线机场,高阶调研/稳定购买,https://jichanghome.blog/recommend/premium/index.html,Cluster,P1,2026高端IPLC/IEPL专线机场推荐 | 4K高清与商务跨境选型 - 机场之家,2026年高端IPLC/IEPL内网专线机场推荐
新手入门机场,新手教学/快速入门,https://jichanghome.blog/recommend/beginner/index.html,Cluster,P1,新手小白入门机场推荐 | 一键导入与易用客户端指南 - 机场之家,新手小白入门网络节点与机场推荐
高稳定性机场,稳定性优先/防断联,https://jichanghome.blog/recommend/stable/index.html,Cluster,P1,2026高稳定性机场推荐 | 晚高峰抗拥堵不掉线节点精选 - 机场之家,2026年高稳定性防断连机场节点推荐
AI与ChatGPT机场节点,特定用途/防封锁,https://jichanghome.blog/recommend/ai/index.html,Cluster,P1,ChatGPT与Claude专用原生IP机场节点推荐 | 解锁AI服务避坑 - 机场之家,2026年AI大模型与ChatGPT专用节点选购指南
流媒体解锁机场,流媒体观看/4K需求,https://jichanghome.blog/recommend/streaming/index.html,Cluster,P1,Netflix/Disney+流媒体4K秒开解锁机场节点推荐 - 机场之家,2026年流媒体4K解锁专用机场推荐
机场横向对比工具,工具型/多选一决策,https://jichanghome.blog/compare/index.html,Tool,P0,机场参数横向在线对比工具 | 价格/协议/流量/解锁一键比对 - 机场之家,2026年主流机场多维度横向在线对比工具
`;

// 加入 14 家品牌评测
AIRPORTS.forEach(a => {
  const title = `${a.name}如何？2026${a.name}套餐价格、流量配额、节点线路与真实测速全评测 - 机场之家`;
  const h1 = `${a.name}如何？2026深度评测：套餐价格、节点线路与真实测速全解析`;
  csvContent += `"${a.name}如何",商业调研/品牌测评,https://jichanghome.blog/airport/${a.slug}/index.html,Review,P0,"${title}","${h1}"\n`;
});

// 加入 30 篇教程
GUIDES.forEach(g => {
  csvContent += `"${g.h1}",教程型/实操,https://jichanghome.blog/guides/${g.slug}/index.html,Guide,P1,"${g.title}","${g.h1}"\n`;
});

// 加入 100 篇文章
ALL_ARTICLES.forEach(a => {
  csvContent += `"${a.h1}",深度分析/选型,https://jichanghome.blog/blog/${a.slug}/index.html,Article,P1,"${a.title}","${a.h1}"\n`;
});

fs.writeFileSync(csvPath, csvContent, 'utf8');
console.log(`[Exported] docs/keyword-map.csv with all reviews, guides & articles.`);

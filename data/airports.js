// 统一机场数据源 - 供纯静态前端与对比工具无缝加载（支持 file:// 协议与 HTTPS）
window.AIRPORTS_DATA = [
  {
    "id": "feiniao",
    "name": "飞鸟云",
    "slug": "feiniao",
    "tagline": "高性价比老牌隧道中继与专线混合网络",
    "description": "运营超过4年的隧道中继与专线混合网络，主打大流量与平价性价比，全节点支持流媒体与常规AI工具，适合日常影音与学习上网。",
    "startingPrice": 15.0,
    "currency": "CNY/月",
    "plans": [
      {
        "name": "基础版",
        "price": 15.0,
        "billingCycle": "月付",
        "traffic": "100GB",
        "trafficGb": 100,
        "unitPricePerGb": 0.15,
        "note": "BGP隧道中继，限速300Mbps"
      },
      {
        "name": "进阶版",
        "price": 28.0,
        "billingCycle": "月付",
        "traffic": "300GB",
        "trafficGb": 300,
        "unitPricePerGb": 0.093,
        "note": "含部分专线节点，高峰抗封锁更强"
      },
      {
        "name": "旗舰版",
        "price": 45.0,
        "billingCycle": "月付",
        "traffic": "600GB",
        "trafficGb": 600,
        "unitPricePerGb": 0.075,
        "note": "高优先级专线节点，支持5台设备"
      }
    ],
    "protocols": ["Shadowsocks", "VLESS", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "韩国", "英国", "德国"],
    "deviceLimit": "5台同时在线",
    "lineType": "BGP隧道中继 + 部分专线",
    "aiSupport": ["ChatGPT", "Claude", "Gemini", "Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube Premium", "TikTok", "Hulu"],
    "advantages": [
      "价格亲民门槛低，低至15元/月起步",
      "流量单价极优，折算低至0.075元/GB",
      "节点覆盖主流常用地区，倍率规则透明公开",
      "主流全平台订阅一键导入，新手上手简便"
    ],
    "disadvantages": [
      "晚高峰个别普通中继节点偶有延迟波动",
      "无极低延迟竞技游戏专用游戏加速线路"
    ],
    "suitableFor": ["学生与预算有限用户", "日常追剧与4K视频重度用户", "需要多台设备共享的家庭用户"],
    "sources": ["官方公开套餐说明", "2026年首季用户群实测反馈", "编辑抽样连通性核验"],
    "lastVerified": "2026-03-01",
    "testStatus": "tested",
    "scoreOverall": 9.1,
    "scoreValue": 9.6,
    "scoreStability": 8.8,
    "scoreSpeed": 9.0
  },
  {
    "id": "paopaogou",
    "name": "泡泡狗",
    "slug": "paopaogou",
    "tagline": "全内网IPLC/IEPL纯专线高端网络，流媒体原生解锁",
    "description": "主打全内网IPLC/IEPL纯专线接入的高端机场，晚高峰稳定性极高，拥有原生住宅IP落地与全流媒体深度解锁，跨境商务与AI开发利器。",
    "startingPrice": 38.0,
    "currency": "CNY/月",
    "plans": [
      {
        "name": "标准专线月付",
        "price": 38.0,
        "billingCycle": "月付",
        "traffic": "150GB",
        "trafficGb": 150,
        "unitPricePerGb": 0.253,
        "note": "全内网专线，延迟超低，无公网干扰"
      },
      {
        "name": "尊享专线月付",
        "price": 68.0,
        "billingCycle": "月付",
        "traffic": "350GB",
        "trafficGb": 350,
        "unitPricePerGb": 0.194,
        "note": "原生IP解锁，支持高并发商务使用"
      },
      {
        "name": "年付豪华专线",
        "price": 360.0,
        "billingCycle": "年付(月均30)",
        "traffic": "200GB/月",
        "trafficGb": 200,
        "unitPricePerGb": 0.15,
        "note": "赠送额外备用应急节点与独立客服"
      }
    ],
    "protocols": ["Shadowsocks", "Trojan", "Hysteria2"],
    "regions": ["香港", "台湾", "日本", "新加坡", "美国", "英国", "澳大利亚"],
    "deviceLimit": "3台同时在线（可付费增配）",
    "lineType": "纯内网IPLC/IEPL企业级专线",
    "aiSupport": ["ChatGPT", "Claude (原生纯净IP)", "Gemini", "Perplexity"],
    "streamingSupport": ["Netflix (全区)", "Disney+", "HBO Max", "AbemaTV", "BBC iPlayer"],
    "advantages": [
      "纯内网专线不经过公网GFW，敏感时期抗封锁表现优异",
      "落地IP纯净度高，几乎不触发Claude/OpenAI封号与人机验证",
      "晚高峰无丢包，8K视频秒开，ping延迟波动小于5ms",
      "支持现代Hysteria2协议与主流Shadowsocks"
    ],
    "disadvantages": [
      "单价相对较高，对超低预算用户有一定门槛",
      "默认设备数限制为3台，多设备需额外升级"
    ],
    "suitableFor": ["外贸与跨境商务办公人员", "AI大模型深度使用者与开发者", "对晚高峰卡顿零容忍的重度追求者"],
    "sources": ["官方公开产品页", "网络技术论坛2026年度测评报告", "编辑部实际线路追踪测试"],
    "lastVerified": "2026-03-05",
    "testStatus": "tested",
    "scoreOverall": 9.5,
    "scoreValue": 8.7,
    "scoreStability": 9.8,
    "scoreSpeed": 9.7
  },
  {
    "id": "juziyun",
    "name": "桔子云",
    "slug": "juziyun",
    "tagline": "老牌海量节点覆盖，大流量平价套餐与多国跨区首选",
    "description": "行业老牌中继与专线融合机场，以套餐选择丰富、多节点备份、海量冷门国家覆盖著称，兼顾大流量与入门成本，适合海淘比价与日常浏览。",
    "startingPrice": 19.9,
    "currency": "CNY/月",
    "plans": [
      {
        "name": "入门轻量",
        "price": 19.9,
        "billingCycle": "月付",
        "traffic": "120GB",
        "trafficGb": 120,
        "unitPricePerGb": 0.166,
        "note": "公网隧道中继，限速200Mbps"
      },
      {
        "name": "热销大流量",
        "price": 39.9,
        "billingCycle": "月付",
        "traffic": "300GB",
        "trafficGb": 300,
        "unitPricePerGb": 0.133,
        "note": "含混合专线，抗封锁更强，不限速"
      },
      {
        "name": "企业商务版",
        "price": 89.0,
        "billingCycle": "月付",
        "traffic": "800GB",
        "trafficGb": 800,
        "unitPricePerGb": 0.111,
        "note": "不限制设备数，VIP客服通道"
      }
    ],
    "protocols": ["Shadowsocks", "VLESS", "Vmess"],
    "regions": ["香港", "日本", "新加坡", "美国", "英国", "加拿大", "阿根廷", "土耳其", "印度", "法国"],
    "deviceLimit": "4台同时在线",
    "lineType": "BGP多线中继 + 专线负载均衡",
    "aiSupport": ["ChatGPT", "Gemini", "Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube Premium", "Spotify跨区"],
    "advantages": [
      "节点地区极其丰富，含土耳其/阿根廷等低价区节点",
      "运营时间长达5年，积累有成熟的备用容灾解析体系",
      "支付方式便捷，支持支付宝/微信/USDT",
      "大流量套餐单位性价比出色"
    ],
    "disadvantages": [
      "冷门国家节点为DNS解锁或公网直连，延迟偏高",
      "控制面板界面相对传统，新人需按教程手动导入"
    ],
    "suitableFor": ["需要经常在Steam/Spotify跨区比价的用户", "日常轻办公与资讯浏览", "老牌稳定服务偏好者"],
    "sources": ["桔子云官方文档与套餐说明", "公网BGP路由追踪数据", "用户社区评测整理"],
    "lastVerified": "2026-02-28",
    "testStatus": "tested",
    "scoreOverall": 8.9,
    "scoreValue": 9.2,
    "scoreStability": 8.7,
    "scoreSpeed": 8.8
  },
  {
    "id": "mojie",
    "name": "魔戒",
    "slug": "mojie",
    "tagline": "不限时长按量计费，永久有效防失联备用神器",
    "description": "主打“不限时长、按量计费”的特殊机制机场，流量不过期，用完即止，极其适合作为主力专线的应急备用兜底或轻度出差使用者。",
    "startingPrice": 12.0,
    "currency": "CNY/一次性",
    "plans": [
      {
        "name": "微量体验包",
        "price": 12.0,
        "billingCycle": "不限时按量",
        "traffic": "100GB",
        "trafficGb": 100,
        "unitPricePerGb": 0.12,
        "note": "流量永久不过期，用完即止"
      },
      {
        "name": "实用备用包",
        "price": 29.9,
        "billingCycle": "不限时按量",
        "traffic": "320GB",
        "trafficGb": 320,
        "unitPricePerGb": 0.093,
        "note": "永久不过期，全节点开放"
      },
      {
        "name": "大流量畅享包",
        "price": 88.0,
        "billingCycle": "不限时按量",
        "traffic": "1100GB",
        "trafficGb": 1100,
        "unitPricePerGb": 0.08,
        "note": "单价极低，不限有效时间"
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "台湾", "日本", "新加坡", "美国"],
    "deviceLimit": "无严格限制（合理使用）",
    "lineType": "公网隧道中继按量集群",
    "aiSupport": ["ChatGPT (标准网页版)", "Gemini"],
    "streamingSupport": ["YouTube Premium", "Netflix (部分支持)"],
    "advantages": [
      "无月费月租压力，流量永久不过期，防失联极佳",
      "单价极具吸引力，百G仅需十余元，无浪费风险",
      "几乎无设备连接数硬性限制，随充随用",
      "极其适合作为手机或第二设备的永久备用兜底"
    ],
    "disadvantages": [
      "不设客服工单加急响应，技术支持较为自助",
      "晚高峰速率有一定限速策略以防滥用",
      "非自制剧流媒体解锁不如全专线机场稳定"
    ],
    "suitableFor": ["出差轻度使用者，每月流量消耗不足10G的用户", "需要多条备用节点防止主力机场炸线的用户", "路由器或备用手机偶尔拉取代码使用"],
    "sources": ["魔戒公开官网规则", "用户群使用协议", "编辑实测按量扣费与不过期验证"],
    "lastVerified": "2026-03-02",
    "testStatus": "tested",
    "scoreOverall": 8.7,
    "scoreValue": 9.7,
    "scoreStability": 8.2,
    "scoreSpeed": 8.1
  },
  {
    "id": "shandianmao",
    "name": "闪电猫",
    "slug": "shandianmao",
    "tagline": "企业级全IEPL内网高速专线，双ISP原生住宅IP",
    "description": "采用全IEPL内网高速专线架构的专业级机场，专注跨境外贸、跨境电商独立站运营、远程办公以及企业级网络加速，支持原生双ISP落地。",
    "startingPrice": 35.0,
    "currency": "CNY/月",
    "plans": [
      {
        "name": "个人轻量专线",
        "price": 35.0,
        "billingCycle": "月付",
        "traffic": "160GB",
        "trafficGb": 160,
        "unitPricePerGb": 0.218,
        "note": "IEPL专线接入，峰值500Mbps"
      },
      {
        "name": "尊享极速专线",
        "price": 65.0,
        "billingCycle": "月付",
        "traffic": "380GB",
        "trafficGb": 380,
        "unitPricePerGb": 0.171,
        "note": "原生双ISP住宅IP落地，千兆端口"
      },
      {
        "name": "团队商用专线",
        "price": 158.0,
        "billingCycle": "月付",
        "traffic": "1000GB",
        "trafficGb": 1000,
        "unitPricePerGb": 0.158,
        "note": "专属SLA保障，多开不拥堵"
      }
    ],
    "protocols": ["Shadowsocks", "Trojan", "Anycast Hysteria2"],
    "regions": ["香港", "日本", "台湾", "新加坡", "美国", "英国", "德国"],
    "deviceLimit": "3台（个人）/ 10台（商用）",
    "lineType": "全IEPL内网专线 + 独立双ISP家宽落地",
    "aiSupport": ["ChatGPT", "Claude", "Cursor", "Midjourney", "Sora"],
    "streamingSupport": ["Netflix", "Disney+", "Apple TV+", "Amazon Prime Video"],
    "advantages": [
      "端到端IEPL内网传输，物理抖动低至极低水平",
      "提供原生双ISP家宽住宅IP，跨境电商账号运营不被封",
      "全天候Telegram专属人工运维支撑",
      "对Cursor与Claude等海外开发工具网络优化极佳"
    ],
    "disadvantages": [
      "最低门槛35元起，无极低廉套餐",
      "严禁BT/PT磁力下载（有自动化安全审计规则）"
    ],
    "suitableFor": ["外贸与跨境电商从业者（Amazon/TikTok/Shopify）", "AI工具重度写代码与生图开发者", "追求极致低延迟与无卡顿的专业用户"],
    "sources": ["官方商用SLA说明", "编辑实际跨境延迟与Traceroute测试", "公开社区评价"],
    "lastVerified": "2026-03-06",
    "testStatus": "tested",
    "scoreOverall": 9.4,
    "scoreValue": 8.6,
    "scoreStability": 9.7,
    "scoreSpeed": 9.6
  }
];

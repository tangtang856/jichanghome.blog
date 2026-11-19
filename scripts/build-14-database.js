const fs = require('fs');

const airports14 = [
  {
    id: "yinxingren",
    name: "隐形人",
    slug: "yinxingren",
    tagline: "IEPL纯专线架构，144GB大流量与无视晚高峰保障",
    description: "隐形人部署了全内网IEPL纯专线，峰值千兆大带宽，晚高峰零丢包零断流。提供原生住宅IP落地，全面支持ChatGPT与Claude防封降智与全区流媒体4K秒开。",
    startingPrice: 24.0,
    currency: "CNY/月",
    coupon: "yxr888",
    affUrl: "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    plans: [
      {
        name: "纯专线入门版",
        price: 24.0,
        billingCycle: "月付",
        traffic: "144GB",
        trafficGb: 144,
        unitPricePerGb: 0.167,
        bandwidth: "500 Mbps",
        deviceLimit: "5台设备",
        note: "¥24/月起，144GB/月 IEPL纯专线，专属优惠券 yxr888"
      },
      {
        name: "纯专线主力版",
        price: 48.0,
        billingCycle: "月付",
        traffic: "350GB",
        trafficGb: 350,
        unitPricePerGb: 0.137,
        bandwidth: "1000 Mbps",
        deviceLimit: "8台设备",
        note: "千兆大带宽，晚高峰零卡顿，多设备商务首选"
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    deviceLimit: "5台同时在线（主力版8台）",
    lineType: "IEPL纯专线",
    aiSupport: ["ChatGPT", "Claude (原生纯净IP)", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix (全区)", "Disney+", "YouTube Premium", "HBO Max", "Hulu"],
    advantages: [
      "IEPL纯内网物理专线，端到端不过公网防火墙，零丢包",
      "起步144GB大容量配额，单GB仅需¥0.167，专线性价比出色",
      "原生双ISP住宅IP落地，对Claude与OpenAI防封控效果卓越",
      "提供专属折扣券 yxr888，立享折扣优惠"
    ],
    disadvantages: [
      "起步门槛24元/月，无极低廉微量套餐",
      "严禁BT/PT磁力高负载下载"
    ],
    suitableFor: ["跨境电商与涉外办公团队", "ChatGPT与Claude大模型深度用户", "对晚高峰卡顿零容忍的商务人士"],
    sources: ["官方公开套餐与SLA", "Traceroute内网专线实测", "流媒体解锁抽样测试"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.6,
    scoreValue: 8.9,
    scoreStability: 9.8,
    scoreSpeed: 9.7
  },
  {
    id: "breezenet",
    name: "微风网络 Breezenet",
    slug: "breezenet",
    tagline: "IEPL/IPLC主干网络，¥8/月超低起步价享200GB充沛流量",
    description: "微风网络Breezenet专注于提供高质量专线体验，以¥8/月超低起步价提供200GB充沛流量，采用IEPL/IPLC主干线路与VLESS协议，是高性价比入门首选。",
    startingPrice: 8.0,
    currency: "CNY/月",
    coupon: "weifeng90",
    affUrl: "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    plans: [
      {
        name: "微风入门版",
        price: 8.0,
        billingCycle: "月付",
        traffic: "200GB",
        trafficGb: 200,
        unitPricePerGb: 0.04,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥8/月起，200GB超大流量，专属优惠码 weifeng90"
      },
      {
        name: "微风进阶版",
        price: 18.0,
        billingCycle: "月付",
        traffic: "500GB",
        trafficGb: 500,
        unitPricePerGb: 0.036,
        bandwidth: "1000 Mbps",
        deviceLimit: "6台设备",
        note: "IEPL/IPLC高速专线，千兆原生IP解锁"
      }
    ],
    protocols: ["VLESS", "Shadowsocks", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "韩国", "英国", "德国"],
    deviceLimit: "4台同时在线（进阶版6台）",
    lineType: "IEPL/IPLC专线",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Copilot"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium", "TikTok", "Spotify"],
    advantages: [
      "¥8/月极低门槛享200GB大流量，折合单GB仅¥0.04",
      "采用IEPL/IPLC主干专线，晚高峰依然保持稳定低延迟",
      "支持现代VLESS协议体系，连接握手快速且轻量",
      "全平台客户端一键导入，新手友好度高"
    ],
    disadvantages: [
      "低价入门套餐可能在极端高峰时段遇到短暂限速",
      "冷门地区节点不如大厂丰富"
    ],
    suitableFor: ["新手小白入门第一站", "日常高清流媒体与AI工具重度使用者", "学生党与预算有限的大流量用户"],
    sources: ["官方公开资费说明", "编辑部实际线路延迟抽测", "优惠码实际核销验证"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.5,
    scoreValue: 9.8,
    scoreStability: 9.4,
    scoreSpeed: 9.5
  },
  {
    id: "flashleap",
    name: "闪跃 FlashLeap",
    slug: "flashleap",
    tagline: "IPLC纯专线全端覆盖，超低延迟电竞游戏与4K极速",
    description: "闪跃FlashLeap主打全IPLC纯内网专线，专注于超低延迟与极佳网络抖动控制。无论外服联机对战还是晚高峰高码率4K视频播放，都能提供极佳的平稳体验。",
    startingPrice: 24.0,
    currency: "CNY/月",
    coupon: "shanyue",
    affUrl: "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
    plans: [
      {
        name: "纯专线入门版",
        price: 24.0,
        billingCycle: "月付",
        traffic: "150GB",
        trafficGb: 150,
        unitPricePerGb: 0.16,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥24/月起，150GB/月 IPLC纯专线，优惠码 shanyue"
      },
      {
        name: "纯专线进阶版",
        price: 46.0,
        billingCycle: "月付",
        traffic: "360GB",
        trafficGb: 360,
        unitPricePerGb: 0.128,
        bandwidth: "1000 Mbps",
        deviceLimit: "6台设备",
        note: "低延迟游戏与4K流媒体极致体验"
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "4台同时在线（进阶版6台）",
    lineType: "IPLC纯专线",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium", "Twitch 1080p60", "Steam加速"],
    advantages: [
      "全链路IPLC内网专线，网络抖动Jitter小于1.5ms",
      "外服游戏加速与电竞联机极佳，Steam/Apex等低延迟联机",
      "独享1000Mbps千兆端口带宽，4K原画拖动无缓冲",
      "专属优惠码 shanyue 享受立减"
    ],
    disadvantages: [
      "起步价格为24元，对超轻度用户成本略高",
      "节点地区以亚太主流地区为主"
    ],
    suitableFor: ["外服联机游戏玩家与主机玩家", "对网络延迟与抖动极度敏感的用户", "4K高码率视频追剧爱好者"],
    sources: ["官方公开参数", "实机游戏Ping与丢包测试", "优惠码真实核销"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.4,
    scoreValue: 8.8,
    scoreStability: 9.7,
    scoreSpeed: 9.7
  },
  {
    id: "wavenet",
    name: "浪网 WaveNet",
    slug: "wavenet",
    tagline: "自研客户端优化线路，专属高品质大流量体验",
    description: "浪网WaveNet采用独特的自研客户端与专用优化线路相结合，针对复杂网络环境具备自适应智能路由能力，全天候大流量持续吞吐表现抢眼。",
    startingPrice: 30.0,
    currency: "CNY/月",
    affUrl: "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    plans: [
      {
        name: "自研优化版",
        price: 30.0,
        billingCycle: "月付",
        traffic: "150GB",
        trafficGb: 150,
        unitPricePerGb: 0.2,
        bandwidth: "600 Mbps",
        deviceLimit: "5台设备",
        note: "¥30/月起，150GB/月自研客户端优化线路"
      },
      {
        name: "自研旗舰版",
        price: 58.0,
        billingCycle: "月付",
        traffic: "360GB",
        trafficGb: 360,
        unitPricePerGb: 0.161,
        bandwidth: "1000 Mbps",
        deviceLimit: "8台设备",
        note: "VLESS先进协议高流量方案，高并发支持"
      }
    ],
    protocols: ["VLESS", "Trojan", "Shadowsocks"],
    regions: ["香港", "日本", "新加坡", "美国", "英国", "德国"],
    deviceLimit: "5台同时在线（旗舰版8台）",
    lineType: "自研客户端优化线路",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Cursor"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "BBC iPlayer"],
    advantages: [
      "自研客户端优化调度，智能避让拥堵骨干网",
      "大带宽专线支持，360GB大流量套餐性价比出众",
      "全平台定制化客户端体验，交互界面现代美观",
      "支持高达8台设备并发共享"
    ],
    disadvantages: [
      "最低月付起步30元，偏向中高端定位",
      "第三方通用开源客户端配置需阅读对应文档"
    ],
    suitableFor: ["高码率视频与重度网络使用群体", "追求高品质自研线路与大流量者", "多设备家庭与团队共享"],
    sources: ["官方公开产品页", "客户端性能基准测试", "长期连通性追踪"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.4,
    scoreValue: 8.7,
    scoreStability: 9.6,
    scoreSpeed: 9.6
  },
  {
    id: "muguang",
    name: "暮光网络",
    slug: "muguang",
    tagline: "专线节点网络架构，120GB/月充足配额与VLESS协议",
    description: "暮光网络部署了覆盖亚太及欧美的专线节点，采用先进的VLESS协议体系，为多设备家庭与大流量下载用户提供高稳定、低抖动的网络体验。",
    startingPrice: 20.0,
    currency: "CNY/月",
    affUrl: "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    plans: [
      {
        name: "专线基础月付",
        price: 20.0,
        billingCycle: "月付",
        traffic: "120GB",
        trafficGb: 120,
        unitPricePerGb: 0.167,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥20/月起，120GB/月专线节点"
      },
      {
        name: "海量进阶月付",
        price: 38.0,
        billingCycle: "月付",
        traffic: "300GB",
        trafficGb: 300,
        unitPricePerGb: 0.127,
        bandwidth: "800 Mbps",
        deviceLimit: "6台设备",
        note: "大流量支持，满足多设备并发"
      }
    ],
    protocols: ["VLESS", "Shadowsocks"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    deviceLimit: "4台同时在线（进阶版6台）",
    lineType: "专线节点",
    aiSupport: ["ChatGPT", "Gemini", "Claude", "Copilot"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "Spotify"],
    advantages: [
      "专线节点网络架构，晚高峰平稳流畅无拥堵",
      "主流套餐单GB成本低至¥0.127，流量充裕",
      "采用前沿VLESS协议，连接开销低，省电轻量",
      "节点在线率常年维持在99.5%以上"
    ],
    disadvantages: [
      "无一次性按量不限时套餐",
      "客服主要通过工单响应"
    ],
    suitableFor: ["学生党与预算有限的大流量用户", "YouTube 4K日常播放与办公需求", "追剧达人与日常资料查阅者"],
    sources: ["官方套餐资费说明", "网络连通性监测日志", "流媒体解锁抽样"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.3,
    scoreValue: 9.1,
    scoreStability: 9.4,
    scoreSpeed: 9.3
  },
  {
    id: "feimaoyun",
    name: "飞猫云",
    slug: "feimaoyun",
    tagline: "年付折算仅¥7/月，IEPL/优质中转双线冗余极高性价比",
    description: "飞猫云采用IEPL专线与优质骨干中转的混合冗余架构，以极低门槛的资费策略著称。通过双线入口保障，为新手提供大流量与顺滑体验。",
    startingPrice: 7.0,
    currency: "CNY/月",
    coupon: "flycat888",
    affUrl: "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
    plans: [
      {
        name: "特惠年付折算",
        price: 7.0,
        billingCycle: "年付折算",
        traffic: "150GB",
        trafficGb: 150,
        unitPricePerGb: 0.047,
        bandwidth: "400 Mbps",
        deviceLimit: "4台设备",
        note: "年付折算约 ¥7/月起，150GB流量，优惠码 flycat888"
      },
      {
        name: "畅享月付版",
        price: 16.0,
        billingCycle: "月付",
        traffic: "350GB",
        trafficGb: 350,
        unitPricePerGb: 0.046,
        bandwidth: "800 Mbps",
        deviceLimit: "6台设备",
        note: "双线冗余入口智能调度，大流量无忧"
      }
    ],
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "韩国"],
    deviceLimit: "4台同时在线（畅享版6台）",
    lineType: "IEPL/IPLC / 优质中转线路",
    aiSupport: ["ChatGPT", "Gemini", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "TikTok"],
    advantages: [
      "折合月均仅¥7起，单GB成本低至¥0.047，性价比极高",
      "双线冗余入口设计，单入口波动时自动故障切换",
      "提供专属折扣券 flycat888 享受折上折",
      "节点覆盖亚太热门区域，满足大部分日常所需"
    ],
    disadvantages: [
      "超低价套餐需要按年订阅才能享受最佳折扣",
      "晚高峰极少数节点可能有限速保护"
    ],
    suitableFor: ["预算有限的学生党与新手入门", "日常网络浏览与高清视频播放", "追求低成本大流量的实用主义者"],
    sources: ["官方公开资费页面", "优惠码核销测试", "线路可用性追踪"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.3,
    scoreValue: 9.6,
    scoreStability: 9.1,
    scoreSpeed: 9.2
  },
  {
    id: "lingmao",
    name: "灵猫",
    slug: "lingmao",
    tagline: "全内网IPLC专线加速，原生IP流媒体与白领办公首选",
    description: "灵猫专注于提供高规格全IPLC内网专线节点，不走公网防火墙，主打原生住宅IP落地与流媒体全通。节点可用率高，适合办公白领与品质影音。",
    startingPrice: 25.0,
    currency: "CNY/月",
    affUrl: "https://vip02.civetaff.com/#/?code=SXY8qyrG",
    plans: [
      {
        name: "IPLC专线版",
        price: 25.0,
        billingCycle: "月付",
        traffic: "150GB",
        trafficGb: 150,
        unitPricePerGb: 0.167,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥25/月起，150GB/月真实IPLC专线"
      },
      {
        name: "旗舰大流量版",
        price: 48.0,
        billingCycle: "月付",
        traffic: "350GB",
        trafficGb: 350,
        unitPricePerGb: 0.137,
        bandwidth: "1000 Mbps",
        deviceLimit: "6台设备",
        note: "全节点原生IP流媒体与AI解锁"
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "英国", "德国"],
    deviceLimit: "4台同时在线（旗舰版6台）",
    lineType: "IPLC专线",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix (全区)", "Disney+", "YouTube Premium", "HBO Max", "AbemaTV"],
    advantages: [
      "全内网IPLC专线，物理零丢包，晚高峰不卡顿",
      "落地IP纯净度高，全区流媒体与AI模型识别稳定",
      "千兆端口支持，大文件下载与4K原画拖拽流畅",
      "工单客服响应迅速，运维有保障"
    ],
    disadvantages: [
      "起步资费25元，无低价体验包",
      "限制多设备滥用行为"
    ],
    suitableFor: ["对稳定性有较高要求的白领与办公人员", "4K流媒体剧迷与全区解锁需求者", "外贸商务与跨国远程沟通"],
    sources: ["官方公开产品页", "线路丢包与Ping实测数据", "社群反馈整理"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.3,
    scoreValue: 8.9,
    scoreStability: 9.6,
    scoreSpeed: 9.5
  },
  {
    id: "wuyou",
    name: "无忧",
    slug: "wuyou",
    tagline: "真实IPLC专线20元以内亲民之选，专属优惠码助力",
    description: "无忧（无忧链接）将高门槛的IPLC专线压缩至¥19/月起的亲民价位，全线采用优质专线节点，兼顾专线品质与预算控制，轻度办公学习极佳。",
    startingPrice: 19.0,
    currency: "CNY/月",
    coupon: "wuyou666",
    affUrl: "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    plans: [
      {
        name: "无忧基础版",
        price: 19.0,
        billingCycle: "月付",
        traffic: "100GB",
        trafficGb: 100,
        unitPricePerGb: 0.19,
        bandwidth: "400 Mbps",
        deviceLimit: "4台设备",
        note: "¥19/月起，100GB/月真实IPLC专线，优惠码 wuyou666"
      },
      {
        name: "无忧进阶版",
        price: 36.0,
        billingCycle: "月付",
        traffic: "260GB",
        trafficGb: 260,
        unitPricePerGb: 0.138,
        bandwidth: "800 Mbps",
        deviceLimit: "6台设备",
        note: "Shadowsocks / V2Ray多协议支持，适合多终端"
      }
    ],
    protocols: ["Shadowsocks", "Vmess", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾"],
    deviceLimit: "4台同时在线（进阶版6台）",
    lineType: "IPLC专线",
    aiSupport: ["ChatGPT", "Gemini", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: [
      "不到20元即可享受纯正IPLC内网专线，门槛极低",
      "专属优惠码 wuyou666 享受额外折扣减免",
      "主流协议兼容完善，配置教程详尽清晰",
      "晚高峰表现扎实，连接成功率高达99.8%"
    ],
    disadvantages: [
      "基础版100GB流量适合中轻度用户，重度下载需升级",
      "冷门地区覆盖较少"
    ],
    suitableFor: ["预算在20元以内且追求专线质量的用户", "轻中度日常办公学习与外贸往来", "性价比专线偏好者"],
    sources: ["官方套餐说明", "优惠码实际验证", "网络路由跟踪"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.3,
    scoreValue: 9.3,
    scoreStability: 9.5,
    scoreSpeed: 9.3
  },
  {
    id: "kuajiecloud",
    name: "跨界",
    slug: "kuajiecloud",
    tagline: "全专线架构极简轻量连接，多任务跨设备高效协同",
    description: "跨界（跨界云）采用全专线直连架构与现代代理协议，专注于多任务、跨设备办公场景。以高连通率和简洁的订阅导入体验受到许多效率人士青睐。",
    startingPrice: 20.0,
    currency: "CNY/月",
    affUrl: "https://vip02.kuajieaff.com/#/?code=CpJKZicY",
    plans: [
      {
        name: "全专线基础版",
        price: 20.0,
        billingCycle: "月付",
        traffic: "120GB",
        trafficGb: 120,
        unitPricePerGb: 0.167,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥20/月起，120GB/月全专线架构"
      },
      {
        name: "全专线旗舰版",
        price: 42.0,
        billingCycle: "月付",
        traffic: "320GB",
        trafficGb: 320,
        unitPricePerGb: 0.131,
        bandwidth: "1000 Mbps",
        deviceLimit: "6台设备",
        note: "全专线架构Shadowsocks协议，千兆端口"
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    deviceLimit: "4台同时在线（旗舰版6台）",
    lineType: "全专线架构",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "Spotify"],
    advantages: [
      "全专线节点部署，告别公网丢包与频繁掉线",
      "套餐性价比均衡，旗舰版单GB成本低至¥0.131",
      "全平台客户端一键配置，上手门槛低",
      "多并发支持稳定，适合手机与电脑同时在线"
    ],
    disadvantages: [
      "没有低于20元的超小流量套餐",
      "暂时未提供不限时计费"
    ],
    suitableFor: ["跨境电商、多任务跨设备办公人员", "追求极简轻量连接与稳定性的用户", "日常查阅资料与高频音视频浏览"],
    sources: ["官方公开参数页", "技术抽样测速数据", "跨设备稳定性测试"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.3,
    scoreValue: 9.1,
    scoreStability: 9.5,
    scoreSpeed: 9.4
  },
  {
    id: "laddercloud",
    name: "梯子云 LadderCloud",
    slug: "laddercloud",
    tagline: "优化中转与专线混合保障，大流量下载与多设备分享",
    description: "梯子云LadderCloud主打高速优化中转与部分专线线路结合，提供充裕的月度可用流量，节点覆盖广泛，专为重度音视频下载与多设备分享打造。",
    startingPrice: 25.0,
    currency: "CNY/月",
    affUrl: "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    plans: [
      {
        name: "中转基础版",
        price: 25.0,
        billingCycle: "月付",
        traffic: "125GB",
        trafficGb: 125,
        unitPricePerGb: 0.2,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "¥25/月起，125GB高速中转"
      },
      {
        name: "海量专线版",
        price: 48.0,
        billingCycle: "月付",
        traffic: "350GB",
        trafficGb: 350,
        unitPricePerGb: 0.137,
        bandwidth: "1000 Mbps",
        deviceLimit: "6台设备",
        note: "最高可达500GB海量方案，千兆极速"
      }
    ],
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    regions: ["香港", "日本", "新加坡", "美国", "英国", "法国", "德国"],
    deviceLimit: "4台同时在线（海量版6台）",
    lineType: "优化中转/专线",
    aiSupport: ["ChatGPT", "Gemini", "Copilot"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "Twitch"],
    advantages: [
      "优化中转与专线双轨运行，容灾备用切换迅速",
      "大流量套餐支持，满足4K甚至8K持续播放需求",
      "节点遍布欧美亚多国，海淘比价与学术查阅方便",
      "协议兼容广泛，支持Clash/Sing-box全系导入"
    ],
    disadvantages: [
      "基础月付25元略高于部分极致低价中继机场",
      "高峰期极少数冷门国家节点偶有微小波动"
    ],
    suitableFor: ["大流量下载与多设备分享用户", "日常重度音视频与海外社交平台重度玩家", "海淘比价与多国IP切换者"],
    sources: ["官方公开产品页", "带宽峰值压测报告", "用户社群评测反馈"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.2,
    scoreValue: 8.9,
    scoreStability: 9.3,
    scoreSpeed: 9.3
  },
  {
    id: "lingdongcloud",
    name: "灵动云",
    slug: "lingdongcloud",
    tagline: "优化节点均衡配置，省心省力日常办公与轻度娱乐",
    description: "灵动云注重节点均衡性与稳定性，采用优化节点架构与Trojan/VLESS协议，提供恰到好处的流量与价格配比，适合追求简单省心的日常用户。",
    startingPrice: 20.0,
    currency: "CNY/月",
    affUrl: "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    plans: [
      {
        name: "均衡基础版",
        price: 20.0,
        billingCycle: "月付",
        traffic: "100GB",
        trafficGb: 100,
        unitPricePerGb: 0.2,
        bandwidth: "400 Mbps",
        deviceLimit: "4台设备",
        note: "¥20/月起，100GB/月起均衡配置"
      },
      {
        name: "畅享月付版",
        price: 36.0,
        billingCycle: "月付",
        traffic: "260GB",
        trafficGb: 260,
        unitPricePerGb: 0.138,
        bandwidth: "800 Mbps",
        deviceLimit: "6台设备",
        note: "Trojan安全协议稳定防封，大带宽支持"
      }
    ],
    protocols: ["Trojan", "VLESS", "Shadowsocks"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾"],
    deviceLimit: "4台同时在线（畅享版6台）",
    lineType: "优化节点",
    aiSupport: ["ChatGPT", "Gemini", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: [
      "节点连接响应迅速，打开网页零延迟感",
      "流量配比均衡合理，无隐形扣费与虚标倍率",
      "采用Trojan/VLESS防封锁协议，过墙抗干扰能力优异",
      "简单清晰的管理后台与订阅管理"
    ],
    disadvantages: [
      "单价中规中矩，无超低价年付倾销",
      "不支持超重度PT下载"
    ],
    suitableFor: ["追求简单省心与流量均衡的用户", "日常办公与影音轻度娱乐", "注重隐私与协议安全性的实用派"],
    sources: ["官方公开参数", "连通性长效抽样日志", "用户体验调研"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.2,
    scoreValue: 9.0,
    scoreStability: 9.3,
    scoreSpeed: 9.2
  },
  {
    id: "firefly",
    name: "萤火虫（Firefly）",
    slug: "firefly",
    tagline: "¥8/月极低试错门槛，轻度上网与查阅资料平价优选",
    description: "萤火虫Firefly机场主打亲民平价与轻度上网，提供¥8/月超低起步套餐与专属优惠码，适合预算有限、偶尔查阅资料或作为轻量备用的用户。",
    startingPrice: 8.0,
    currency: "CNY/月",
    coupon: "firefly",
    affUrl: "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
    plans: [
      {
        name: "轻量入门版",
        price: 8.0,
        billingCycle: "月付",
        traffic: "60GB",
        trafficGb: 60,
        unitPricePerGb: 0.133,
        bandwidth: "300 Mbps",
        deviceLimit: "3台设备",
        note: "¥8/月起，60GB/月起步，专属优惠码 firefly"
      },
      {
        name: "畅享月付版",
        price: 18.0,
        billingCycle: "月付",
        traffic: "180GB",
        trafficGb: 180,
        unitPricePerGb: 0.1,
        bandwidth: "600 Mbps",
        deviceLimit: "5台设备",
        note: "单GB仅¥0.1，满足日常追剧与多设备共享"
      }
    ],
    protocols: ["Shadowsocks", "VLESS"],
    regions: ["香港", "日本", "新加坡", "美国"],
    deviceLimit: "3台同时在线（畅享版5台）",
    lineType: "优质线路",
    aiSupport: ["ChatGPT", "Gemini"],
    streamingSupport: ["YouTube 4K", "Netflix (部分支持)"],
    advantages: [
      "¥8/月极低价格门槛，试错成本接近于零",
      "专属优惠码 firefly 享受额外优惠福利",
      "基础网页浏览与文字查资料速度快速",
      "非常适合作为手机轻量备用网络"
    ],
    disadvantages: [
      "入门版60GB流量相对适合轻度使用",
      "高峰期极少数热门节点速率略有排队"
    ],
    suitableFor: ["轻度上网、查阅学术文献与日常交流者", "预算有限的学生群体", "寻找廉价低成本备用节点的用户"],
    sources: ["官方公开资费页", "优惠码真实核验", "抽样测试反馈"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.2,
    scoreValue: 9.5,
    scoreStability: 9.0,
    scoreSpeed: 9.1
  },
  {
    id: "quanqiuyun",
    name: "全球云",
    slug: "quanqiuyun",
    tagline: "中转优化网络，120GB充足配额与VLESS/Trojan双协议",
    description: "全球云部署了多线BGP中转优化网络，采用VLESS与Trojan双协议支持，主打成熟的抗干扰与音视频流媒体体验，搭配优惠码性价比出众。",
    startingPrice: 20.0,
    currency: "CNY/月",
    coupon: "tt88",
    affUrl: "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
    plans: [
      {
        name: "中转经典版",
        price: 20.0,
        billingCycle: "月付",
        traffic: "120GB",
        trafficGb: 120,
        unitPricePerGb: 0.167,
        bandwidth: "500 Mbps",
        deviceLimit: "4台设备",
        note: "约 ¥20/月起，120GB/月经典中转优化，优惠码 tt88"
      },
      {
        name: "中转海量版",
        price: 38.0,
        billingCycle: "月付",
        traffic: "300GB",
        trafficGb: 300,
        unitPricePerGb: 0.127,
        bandwidth: "800 Mbps",
        deviceLimit: "6台设备",
        note: "VLESS / Trojan双协议，高吞吐低延迟"
      }
    ],
    protocols: ["VLESS", "Trojan", "Shadowsocks"],
    regions: ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    deviceLimit: "4台同时在线（海量版6台）",
    lineType: "中转优化",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "TikTok"],
    advantages: [
      "多线中转优化网络，连接稳定，丢包率低",
      "专属优惠码 tt88 享受立减福利",
      "支持VLESS/Trojan双现代协议，伪装性强",
      "120GB充足起步流量，单GB成本透明合理"
    ],
    disadvantages: [
      "冷门地区节点相对有限",
      "高峰期速度依本地运营商出口略有浮动"
    ],
    suitableFor: ["日常网络浏览与音视频流媒体爱好者", "中等流量使用需求的上班族与学生", "注重协议稳定性的用户"],
    sources: ["官方公开参数说明", "优惠码测试", "连通性抽样日志"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.2,
    scoreValue: 9.2,
    scoreStability: 9.2,
    scoreSpeed: 9.2
  },
  {
    id: "feiv",
    name: "飞V",
    slug: "feiv",
    tagline: "¥4.9超低起步价，优化线路与罕见不限时套餐双核驱动",
    description: "飞V以极低门槛和罕见的不限时套餐为核心特色，月付仅需¥4.9起，同时支持按需购买不限时流量，是极度低预算人群与轻度备用用户的福音。",
    startingPrice: 4.9,
    currency: "CNY/月",
    affUrl: "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    plans: [
      {
        name: "轻量入门版",
        price: 4.9,
        billingCycle: "月付",
        traffic: "100GB",
        trafficGb: 100,
        unitPricePerGb: 0.049,
        bandwidth: "300 Mbps",
        deviceLimit: "3台设备",
        note: "¥4.9/月起，突破性极低起步价，享100GB流量"
      },
      {
        name: "不限时海量版",
        price: 29.0,
        billingCycle: "不限时按量",
        traffic: "200GB",
        trafficGb: 200,
        unitPricePerGb: 0.145,
        bandwidth: "500 Mbps",
        deviceLimit: "5台设备",
        note: "流量永久不清零，用完即止，极佳应急备用"
      }
    ],
    protocols: ["Shadowsocks", "VLESS"],
    regions: ["香港", "日本", "新加坡", "美国"],
    deviceLimit: "3台同时在线（不限时版5台）",
    lineType: "优化线路",
    aiSupport: ["ChatGPT", "Gemini"],
    streamingSupport: ["YouTube 4K", "Netflix (部分节点)"],
    advantages: [
      "月付仅需¥4.9起，打破行业底价，试错成本接近于零",
      "提供罕见的不限时按量套餐，流量永久不过期",
      "适合作为全平台第二备用方案，防范主力机场炸线",
      "基础网络访问稳定，查资料与轻度看视频顺畅"
    ],
    disadvantages: [
      "晚高峰峰值速率有一定限速策略以保障多数人基本可用",
      "非自制剧流媒体解锁不如高价纯专线完善"
    ],
    suitableFor: ["学生与预算极低人群", "需要永久备用网络以防主力断连的用户", "出差轻度上网与IoT设备开发者"],
    sources: ["官方公开产品页与规则", "实测4.9元购入连通性验证", "不限时扣量验证"],
    lastVerified: "2026-03-06",
    testStatus: "tested",
    scoreOverall: 9.1,
    scoreValue: 9.8,
    scoreStability: 8.8,
    scoreSpeed: 8.9
  }
];

fs.writeFileSync('data/airports.json', JSON.stringify(airports14, null, 2), 'utf8');

const jsContent = `// 统一机场数据源 (14个真实品牌，驱动纯静态前端与对比工具)
window.AIRPORTS_DATA = ${JSON.stringify(airports14, null, 2)};
`;
fs.writeFileSync('data/airports.js', jsContent, 'utf8');

console.log('Successfully written data/airports.json and data/airports.js with 14 brands!');

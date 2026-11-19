const fs = require('fs');

const BRANDS = [
  {
    name: '微风网络 Breezenet',
    shortName: '微风网络',
    slug: 'breezenet',
    affUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC'
  },
  {
    name: '暮光网络',
    shortName: '暮光网络',
    slug: 'muguang',
    affUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT'
  },
  {
    name: '飞猫云',
    shortName: '飞猫云',
    slug: 'feimaoyun',
    affUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx'
  },
  {
    name: '无忧',
    shortName: '无忧',
    slug: 'wuyou',
    affUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J'
  },
  {
    name: '灵猫',
    shortName: '灵猫',
    slug: 'lingmao',
    affUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG'
  },
  {
    name: '闪跃 FlashLeap',
    shortName: '闪跃',
    slug: 'flashleap',
    affUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3'
  },
  {
    name: '萤火虫（Firefly）',
    shortName: '萤火虫',
    slug: 'firefly',
    affUrl: 'https://vip02.fireflyaff.com/#/?code=uTKLkAyC'
  },
  {
    name: '跨界',
    shortName: '跨界',
    slug: 'kuajiecloud',
    affUrl: 'https://vip02.kuajieaff.com/#/?code=CpJKZicY'
  },
  {
    name: '隐形人',
    shortName: '隐形人',
    slug: 'yinxingren',
    affUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD'
  },
  {
    name: '飞V',
    shortName: '飞V',
    slug: 'feiv',
    affUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe'
  },
  {
    name: '梯子云 LadderCloud',
    shortName: '梯子云',
    slug: 'laddercloud',
    affUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq'
  },
  {
    name: '浪网 WaveNet',
    shortName: '浪网',
    slug: 'wavenet',
    affUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy'
  },
  {
    name: '灵动云',
    shortName: '灵动云',
    slug: 'lingdongcloud',
    affUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr'
  },
  {
    name: '全球云',
    shortName: '全球云',
    slug: 'quanqiuyun',
    affUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0'
  }
];

async function scrapeBrand(brand) {
  const url = `https://jiediantuijian.shop/airport/${brand.slug}/`;
  console.log(`Fetching ${brand.name} from ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: ${res.status}`);
      return null;
    }
    const html = await res.text();
    return { brand, html };
  } catch (e) {
    console.error(`Error fetching ${brand.name}:`, e.message);
    return null;
  }
}

async function run() {
  const results = [];
  for (const b of BRANDS) {
    const data = await scrapeBrand(b);
    if (data) results.push(data);
    await new Promise(r => setTimeout(r, 200)); // friendly delay
  }

  fs.writeFileSync('temp_all_14.json', JSON.stringify(results.map(r => ({
    brand: r.brand,
    htmlLength: r.html.length,
    html: r.html
  })), null, 2), 'utf8');

  console.log(`Successfully scraped ${results.length} brand pages.`);
}

run();

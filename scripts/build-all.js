const { generateHomePage } = require('./build-home');
const { generateRecommendPages } = require('./build-recommend');
const { generateRankingPages } = require('./build-ranking');
const { generateAirportPages } = require('./build-airports');
const { generateComparePage } = require('./build-compare');
const { generateGuidePages } = require('./build-guides');
const { generateBlogPages } = require('./build-blog');
const { generateGlossaryPages } = require('./build-glossary');
const { generateTrustPages } = require('./build-trust-pages');
const { generateSitemapAndRobots } = require('./build-sitemap');

console.log('=== 开始构建机场之家 (jichanghome.blog) 纯静态整站 ===');
const startTime = Date.now();

generateHomePage();
generateRecommendPages();
generateRankingPages();
generateAirportPages();
generateComparePage();
generateGuidePages();
generateBlogPages();
generateGlossaryPages();
generateTrustPages();
generateSitemapAndRobots();

const elapsed = Date.now() - startTime;
console.log(`=== 整站构建完成！耗时: ${elapsed}ms ===`);

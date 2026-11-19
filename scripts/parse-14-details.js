const fs = require('fs');

const data = JSON.parse(fs.readFileSync('temp_all_14.json', 'utf8'));

data.forEach((item, idx) => {
  const { brand, html } = item;
  console.log(`\n========================================`);
  console.log(`${idx + 1}. ${brand.name} [slug: ${brand.slug}]`);
  console.log(`Aff URL: ${brand.affUrl}`);

  // 1. Meta Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    console.log(`Description: ${descMatch[1]}`);
  }

  // 2. Line Type
  const lineMatch = html.match(/class=["'][^"']*bg-brand-50[^"']*["']>([^<]+)<\/span>/i) ||
                    html.match(/class=["'][^"']*bg-purple-50[^"']*["']>([^<]+)<\/span>/i) ||
                    html.match(/线路架构[：:\s]*([^\n<]+)/i);
  if (lineMatch) {
    console.log(`Line Type: ${lineMatch[1].trim()}`);
  }

  // 3. Coupon
  const couponMatch = html.match(/data-copy-coupon=["']([^"']+)["']/i) ||
                      html.match(/优惠码[：:\s]*([a-zA-Z0-9_-]+)/i);
  if (couponMatch) {
    console.log(`Coupon: ${couponMatch[1]}`);
  }

  // 4. Plans Table
  const tableMatches = html.match(/<table[\s\S]*?<\/table>/g) || [];
  tableMatches.forEach((tableHtml, tIdx) => {
    if (tableHtml.includes('套餐名称') || tableHtml.includes('月付') || tableHtml.includes('套餐价格')) {
      console.log(`--- Plan Table ${tIdx} ---`);
      // extract rows
      const rows = tableHtml.match(/<tr[\s\S]*?<\/tr>/g) || [];
      rows.forEach((r, rIdx) => {
        const cells = (r.match(/<t[dh][\s\S]*?<\/t[dh]>/g) || []).map(c => c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
        if (cells.length > 0) {
          console.log(`  Row ${rIdx}: ${cells.join(' | ')}`);
        }
      });
    }
  });

  // 5. Advantages / Highlights
  const advMatches = html.match(/<div class="flex items-start gap-1.5 text-xs text-slate-700">[\s\S]*?<span>([^<]+)<\/span>/g) || [];
  if (advMatches.length > 0) {
    console.log(`Advantages:`);
    advMatches.forEach(m => {
      const text = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().replace(/^✓\s*/, '');
      console.log(`  - ${text}`);
    });
  }
});

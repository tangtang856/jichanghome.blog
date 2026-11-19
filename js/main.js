/**
 * 机场之家 (jichanghome.blog) - 核心交互脚本
 * 原生极简 Vanilla JS | 支持本地 file:// 协议与线上环境
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. 移动端菜单折叠与展开
  const menuBtn = document.getElementById('menuToggleBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', function () {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('open');
    });

    // 点击外部区域自动关闭
    document.addEventListener('click', function (e) {
      if (!menuBtn.contains(e.target) && !mobileDrawer.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. 机场横向对比工具交互逻辑 (仅在 compare 页面激活)
  const compareApp = document.getElementById('compareApp');
  if (compareApp && window.AIRPORTS_DATA) {
    initCompareTool(window.AIRPORTS_DATA);
  }
});

/**
 * 比较工具核心实现
 */
function initCompareTool(airports) {
  // 默认选中前两家机场
  let selectedIds = ['feiniao', 'paopaogou'];

  // 检查 URL 参数是否有指定机场对比
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const airportParam = urlParams.get('airports');
    if (airportParam) {
      const ids = airportParam.split(',').filter(id => airports.some(a => a.id === id));
      if (ids.length >= 2) {
        selectedIds = ids.slice(0, 4);
      }
    }
  } catch (e) {
    // 忽略 file:// 或无参数场景
  }

  const selectorContainer = document.getElementById('compareSelectorContainer');
  const tableContainer = document.getElementById('compareTableContainer');

  function renderSelectors() {
    if (!selectorContainer) return;

    let html = `
      <div style="margin-bottom: 0.75rem; font-weight: 600; color: var(--text-main);">
        请选择需要横向对比的机场（已选 ${selectedIds.length}/4 家）：
      </div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
    `;

    airports.forEach(airport => {
      const isSelected = selectedIds.includes(airport.id);
      html += `
        <button type="button" 
          class="btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}" 
          data-airport-id="${airport.id}"
          style="border-radius: var(--radius-full);"
          onclick="toggleAirportSelection('${airport.id}')"
        >
          ${isSelected ? '✓ ' : '+ '}${airport.name}
        </button>
      `;
    });

    html += `
      </div>
      <div style="margin-top: 0.85rem; font-size: 0.85rem; color: var(--text-light);">
        提示：点击上方按钮增减对比项。建议选择 2 至 4 家进行纵深对比。
      </div>
    `;

    selectorContainer.innerHTML = html;
  }

  function renderTable() {
    if (!tableContainer) return;

    if (selectedIds.length === 0) {
      tableContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; background: #fff; border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">当前尚未选择任何对比机场</p>
          <button class="btn btn-primary" onclick="resetCompareDefault()">恢复推荐对比组合</button>
        </div>
      `;
      return;
    }

    const currentAirports = selectedIds.map(id => airports.find(a => a.id === id)).filter(Boolean);

    // 确定相对路径深度 (如果在 compare/ 则去 airport/[slug]/index.html 是 ../airport/[slug]/index.html)
    const isRoot = window.location.pathname.endsWith('index.html') && !window.location.pathname.includes('/compare/');
    const airportPathPrefix = isRoot ? 'airport/' : '../airport/';

    let tableHtml = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="min-width: 140px; background-color: #f1f5f9;">对比维度</th>
              ${currentAirports.map(a => `
                <th style="min-width: 220px; text-align: center;">
                  <div style="font-size: 1.15rem; font-weight: 800; color: var(--text-main);">${a.name}</div>
                  <div style="font-size: 0.8rem; font-weight: normal; color: var(--text-light); margin-top: 0.2rem;">${a.lineType}</div>
                  <div style="margin-top: 0.5rem;">
                    <a href="${airportPathPrefix}${a.slug}/index.html" class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">查看独立评测</a>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>起步价格</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; color: var(--primary); font-weight: 800; font-size: 1.1rem;">
                  ¥${a.startingPrice} <span style="font-size: 0.75rem; font-weight: normal; color: var(--text-light);">${a.currency}</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>主流套餐单价</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">
                  ${a.plans.map(p => `<div>${p.name}: <strong>¥${p.price}</strong> (${p.traffic})</div>`).join('')}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>线路架构</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">${a.lineType}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>支持协议</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">${a.protocols.join(', ')}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>设备并发限制</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">${a.deviceLimit}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>节点覆盖地区</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">${a.regions.slice(0, 5).join(' / ')}${a.regions.length > 5 ? ' 等' : ''}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>AI (ChatGPT/Claude)</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">
                  <span class="pill pill-tested" style="font-size: 0.75rem;">${a.aiSupport.slice(0, 2).join(' + ')}</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>流媒体解锁</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">${a.streamingSupport.slice(0, 3).join(', ')}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>核心优势</strong></td>
              ${currentAirports.map(a => `
                <td style="font-size: 0.85rem; vertical-align: top;">
                  <ul style="padding-left: 1.1rem; margin: 0; color: var(--text-muted);">
                    ${a.advantages.slice(0, 3).map(adv => `<li style="margin-bottom: 0.25rem;">${adv}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>注意事项与不足</strong></td>
              ${currentAirports.map(a => `
                <td style="font-size: 0.85rem; vertical-align: top;">
                  <ul style="padding-left: 1.1rem; margin: 0; color: var(--text-light);">
                    ${a.disadvantages.map(dis => `<li style="margin-bottom: 0.25rem;">${dis}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>适合人群</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center; font-size: 0.85rem;">
                  ${a.suitableFor.join('、')}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>测试状态</strong></td>
              ${currentAirports.map(a => `
                <td style="text-align: center;">
                  <span class="pill ${a.testStatus === 'tested' ? 'pill-tested' : 'pill-official'}">
                    ${a.testStatus === 'tested' ? '实测抽验通过' : '官方核验'}
                  </span>
                  <div style="font-size: 0.7rem; color: var(--text-light); margin-top: 0.2rem;">${a.lastVerified}</div>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    tableContainer.innerHTML = tableHtml;
  }

  // 挂载全局方法
  window.toggleAirportSelection = function (id) {
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 1) {
        alert('请至少保留一家机场进行查看');
        return;
      }
      selectedIds = selectedIds.filter(item => item !== id);
    } else {
      if (selectedIds.length >= 4) {
        alert('横向对比最多同时选择 4 家机场，请先取消某一项');
        return;
      }
      selectedIds.push(id);
    }
    renderSelectors();
    renderTable();
  };

  window.resetCompareDefault = function () {
    selectedIds = ['feiniao', 'paopaogou'];
    renderSelectors();
    renderTable();
  };

  // 初次渲染
  renderSelectors();
  renderTable();
}

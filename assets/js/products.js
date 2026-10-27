(function () {
  const products = [
    // Page 1: Self-priming (2 products)
    ['R050SE ULTRON', 'regenerative', 1, 'top', '0.5 HP', '25 × 25 mm', 'AL body, CI body', '28 m'],
    ['R050SE', 'regenerative', 1, 'bottom', '0.5 HP', '25 × 25 mm', 'AL body, CI body', '30 m'],

    // Page 2: Self-priming (2 products)
    ['RODMS2', 'regenerative', 2, 'top', '0.5 HP', '25 × 25 mm', 'CI body', '24 m'],
    ['R050C', 'regenerative', 2, 'bottom', '0.5 HP', '25 × 25 mm', 'CI body', '34 m'],

    // Page 3: Pressure systems (2 products)
    ['Single Shower Booster', 'booster', 3, 'top', '0.5 HP', '25 × 25 mm', 'AL body', '28 m / 2.5 bar'],
    ['Pressure Booster Pump', 'booster', 3, 'bottom', '0.8–2.0 HP', '25 × 25 mm', 'AL body', '30–60 m'],

    // Page 4: Self-priming (2 products)
    ['R100C', 'regenerative', 4, 'top', '1.0 HP', '25 × 25 mm', 'CI body', '36 m'],
    ['R100SU ULTRON', 'regenerative', 4, 'bottom', '1.0 HP', '25 × 25 mm', 'AL body, CI body', '40 m'],

    // Page 5: Self-priming (2 products)
    ['S100SE SMART-100', 'regenerative', 5, 'top', '1.0 HP', '25 × 25 mm', 'AL body, CI body', '42 m'],
    ['R100S', 'regenerative', 5, 'bottom', '1.0 HP', '25 × 25 mm', 'AL body', '45 m'],

    // Page 6: Centrifugal monoblock (2 products)
    ['S0525H', 'monoblock', 6, 'top', '0.5 HP', '25 × 25 mm', 'CI body', '22 m'],
    ['S0525LS', 'monoblock', 6, 'bottom', '0.5 HP', '25 × 25 mm', 'CI body, AL body', '18 m'],

    // Page 7: Centrifugal monoblock (2 products)
    ['S0550', 'monoblock', 7, 'top', '0.5 HP', '50 × 50 mm', 'CI body', '10 m'],
    ['S0540', 'monoblock', 7, 'bottom', '0.5 HP', '40 × 40 mm', 'CI body', '12 m'],

    // Page 8: Centrifugal monoblock (2 products)
    ['S0740', 'monoblock', 8, 'top', '0.75 HP', '40 × 40 mm', 'CI body', '18 m'],
    ['S1032', 'monoblock', 8, 'bottom', '1.0 HP', '32 × 25 mm', 'CI body', '27 m'],

    // Page 9: Centrifugal monoblock (2 products)
    ['S2080', 'monoblock', 9, 'top', '1.0–2.0 HP', '80 × 80 mm', 'CI body', '10 m'],
    ['S1080', 'monoblock', 9, 'bottom', '1.0 HP', '80 × 80 mm', 'CI body', '10 m'],

    // Page 10: Centrifugal monoblock (2 products)
    ['S1550 / S1565', 'monoblock', 10, 'top', '1.5 HP (1Ph/2Ph)', '50 × 50 / 65 × 50 mm', 'CI body', '18 m'],
    ['S3065', 'monoblock', 10, 'bottom', '3.0 HP (3-Phase)', '65 × 50 mm', 'CI body', '25 m'],

    // Page 11: Jet and shallow-well (2 products)
    ['S0532J', 'jet', 11, 'top', '0.5 HP', '32 × 25 × 25 mm', 'AL body', '18 m suction / 20 m delivery'],
    ['S1032J', 'jet', 11, 'bottom', '1.0 HP', '32 × 25 × 25 mm', 'AL body', '30 m suction / 25 m delivery'],

    // Page 12: Jet and shallow-well (2 products)
    ['S1532J', 'jet', 12, 'top', '1.5 HP', '32 × 25 × 25 mm', 'AL body', '50 m suction / 25 m delivery'],
    ['S10322J Two Stage', 'jet', 12, 'bottom', '1.0 HP', '32 × 25 × 25 mm', 'AL body', '42 m suction / 25 m delivery'],

    // Page 13: Jet and shallow-well (2 products)
    ['S15322J Two Stage', 'jet', 13, 'top', '1.5 HP', '32 × 25 × 25 mm', 'AL body', '60 m suction / 25 m delivery'],
    ['R05MSJ / R10MSJ Shallow Well', 'jet', 13, 'bottom', '0.5–1.0 HP', '25 × 25 mm', 'AL body', '36–40 m'],

    // Page 14: Openwell (2 products)
    ['SENA-100', 'openwell', 14, 'top', '1.0 HP', '32 × 25 mm', 'SS body', '25 m'],
    ['S1025E', 'openwell', 14, 'bottom', '1.0 HP', '32 × 25 mm', 'SS body, SS impeller', '27 m'],

    // Page 15: Openwell (2 products)
    ['S1025E Green', 'openwell', 15, 'top', '1.0 HP', '32 × 25 mm', 'SS body', '27 m'],
    ['SENA-125', 'openwell', 15, 'bottom', '1.0 HP', '25 × 25 mm', 'SS body, SS impeller', '32 m'],

    // Page 16: Openwell (2 products)
    ['S1532 / S0125V / S1525V', 'openwell', 16, 'top', '1.5 HP', '32 × 25 / 40 × 40 mm', 'SS body', '30–40 m'],
    ['S3050', 'openwell', 16, 'bottom', '3.0 HP', '65 × 50 mm', 'SS body, CI impeller', '25 m'],

    // Page 17: Borewell and vertical submersible (2 products)
    ['4" Borewell Submersible Series', 'borewell-sub', 17, 'top', '1.0–2.0 HP', '25 / 32 / 40 mm', 'SS body', '80–650 m'],
    ['3" Borewell Submersible V3 Series', 'borewell-sub', 17, 'bottom', '0.5–1.5 HP', '25 mm', 'SS body', '28–55 m'],

    // Page 18: Compressors (2 products)
    ['Mono Compressor 1.0 HP', 'compressor', 18, 'top', '1.0 HP', '15 × 25 mm', 'CI body', '75 m'],
    ['Mono Compressor 1.5 HP', 'compressor', 18, 'bottom', '1.5 HP', '15 × 25 mm', 'CI body', '105 m'],

    // Page 19: Compressors and motors (2 products)
    ['Belt Compressor', 'compressor', 19, 'top', '1.5–2.0 HP', '15 × 25 mm', 'Heavy-duty assembly', '165–200 m'],
    ['Bare Motor', 'compressor', 19, 'bottom', '1.0–2.0 HP', '—', 'CI body', 'Motor unit'],

    // Page 20: Controls (1 product)
    ['Digital Control Panel', 'accessories', 20, 'top', 'Contact type', 'Pump control', 'Auto cut-off / dry-run protection', 'Application matched'],

    // Sewage range (1 product)
    ['Submersible Sewage Pump (SV Series)', 'sewage', 'sewage', 'center', '0.5–2.0 HP (0.37–1.5 kW)', '32 / 50 mm outlet', 'CI pump body, SS304 motor', '4–16 m']
  ];

  const categoryNames = {
    regenerative: 'Self-Priming', booster: 'Pressure System', monoblock: 'Centrifugal Monoblock',
    jet: 'Jet / Deepwell', openwell: 'Openwell Submersible', 'borewell-sub': 'Borewell Submersible',
    compressor: 'Compressor / Motor', sewage: 'Submersible Sewage', accessories: 'Motor Control'
  };

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(function (p, index) {
    const [name, cat, page, position, rating, pipe, construction, head] = p;
    const image = page === 'sewage'
      ? 'assets/images/products/card-sewage-center.png'
      : `assets/images/products/card-${page}-${position}.png`;
    const specs = cat === 'sewage'
      ? [['Power', rating], ['Outlet', pipe], ['Construction', construction], ['Head range', head], ['Speed', '2900 rpm'], ['Protection', 'IP68'], ['Insulation', 'Class F'], ['Duty', 'S1 duty']]
      : [['Power rating', rating], ['Pipe size', pipe], ['Construction', construction], ['Head / range', head], ['Phase', 'Application dependent'], ['Use', categoryNames[cat]]];
    const rows = specs.map(s => `<tr><th>${s[0]}</th><td>${s[1]}</td></tr>`).join('');
    return `<article class="product-card product-model-card" data-cat="${cat}">
      <div class="product-shot">
        <img src="${image}" alt="${name} ${categoryNames[cat]}" loading="lazy" width="1024" height="682" />
      </div>
      <div class="product-model-content">
        <h2 class="product-name">${name}</h2>
        <div class="product-specs" id="spec-${index}">
          <div class="spec-table-wrap"><table><tbody>${rows}</tbody></table></div>
          <a class="product-enquire" href="dealer.html?product=${encodeURIComponent(name)}">Enquire</a>
        </div>
      </div>
    </article>`;
  }).join('');

  const count = document.createElement('p');
  count.className = 'catalog-result-count';
  grid.parentNode.insertBefore(count, grid);

  function updateCount(cat) {
    const visible = products.filter(p => p[1] === cat).length;
    count.textContent = `${visible} individual ${categoryNames[cat]} models`;
  }
  const initial = new URLSearchParams(location.search).get('filter') || 'regenerative';
  updateCount(initial);
  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => updateCount(btn.dataset.filter)));
})();

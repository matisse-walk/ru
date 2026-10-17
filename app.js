/* Matisse's Montparnasse v2: map + station sheets + camera over the strip. Vanilla JS, no build. */
(function () {
  'use strict';
  const W = window.WALK;
  const $ = (id) => document.getElementById(id);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STICKER_KEY = 'mm.stickers.ru';

  /* ---------- storage (per phone, best effort) ---------- */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STICKER_KEY) || '[]'); } catch (e) { return []; } },
    add(id) { try { const s = store.get(); if (!s.includes(id)) { s.push(id); localStorage.setItem(STICKER_KEY, JSON.stringify(s)); return true; } } catch (e) {} return false; }
  };

  /* ---------- album ---------- */
  const mainStations = W.stations.filter(s => s.n >= 1 && s.n <= 5);
  function renderAlbum(popId) {
    const got = store.get(); const el = $('album'); el.innerHTML = '';
    mainStations.forEach(s => {
      const d = document.createElement('div');
      d.className = 'slot' + (got.includes(s.id) ? ' got' : '') + (popId === s.id ? ' pop' : '');
      d.title = s.title;
      if (got.includes(s.id)) d.innerHTML = `<svg><use href="#st-${s.sticker}"/></svg>`;
      el.appendChild(d);
    });
    document.querySelectorAll('.sticker').forEach(b => b.classList.toggle('got', got.includes(b.dataset.id)));
  }

  /* ---------- toast ---------- */
  let toastT;
  function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2600); }

  /* ---------- map ---------- */
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/positron',
    center: [2.3265, 48.8415], zoom: 14.6, minZoom: 12, maxZoom: 18.5,
    attributionControl: { compact: true }
  });
  window.__map = map;
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
  const geo = new maplibregl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true, showUserHeading: true });
  map.addControl(geo, 'bottom-right');

  function recolour() {
    const style = map.getStyle(); if (!style) return;
    style.layers.forEach(l => {
      const id = l.id;
      try {
        if (id === 'background') map.setPaintProperty(id, 'background-color', '#FAF6EE');
        else if (id === 'park' || id === 'landcover_wood') { map.setPaintProperty(id, 'fill-color', '#2E7D4F'); map.setPaintProperty(id, 'fill-opacity', 0.75); }
        else if (id === 'landuse_residential') map.setPaintProperty(id, 'fill-color', '#F4EEDF');
        else if (id === 'water') map.setPaintProperty(id, 'fill-color', '#1F3A93');
        else if (id === 'waterway') map.setPaintProperty(id, 'line-color', '#1F3A93');
        else if (id === 'building') { map.setPaintProperty(id, 'fill-color', '#EADFC6'); map.setPaintProperty(id, 'fill-opacity', 0.6); if (l.paint && 'fill-outline-color' in l.paint) map.setPaintProperty(id, 'fill-outline-color', '#D9CEB2'); }
        else if (l.type === 'line' && /highway_(major|motorway)_(inner|bridge_inner)/.test(id)) { map.setPaintProperty(id, 'line-color', '#141414'); map.setPaintProperty(id, 'line-opacity', 1); }
        else if (l.type === 'line' && /highway_(major|motorway)_casing/.test(id)) { map.setPaintProperty(id, 'line-color', '#141414'); }
        else if (l.type === 'line' && /highway_(major|motorway)_subtle/.test(id)) { map.setPaintProperty(id, 'line-color', '#141414'); map.setPaintProperty(id, 'line-opacity', 0.9); }
        else if (l.type === 'line' && /highway_minor|highway_path|road_pier/.test(id)) { map.setPaintProperty(id, 'line-color', '#141414'); map.setPaintProperty(id, 'line-opacity', 0.28); }
        else if (l.type === 'line' && /railway/.test(id)) { map.setPaintProperty(id, 'line-color', '#141414'); map.setPaintProperty(id, 'line-opacity', 0.12); }
        else if (l.type === 'line' && /tunnel|aeroway/.test(id)) { map.setPaintProperty(id, 'line-opacity', 0.15); }
        else if (l.type === 'symbol') { map.setPaintProperty(id, 'text-color', '#141414'); map.setPaintProperty(id, 'text-halo-color', '#FAF6EE'); map.setPaintProperty(id, 'text-halo-width', 1.6); if (/shield/.test(id)) map.setLayoutProperty(id, 'visibility', 'none'); }
        else if (l.type === 'fill') { map.setPaintProperty(id, 'fill-color', '#F4EEDF'); }
      } catch (e) { /* a layer without that property: ignore */ }
    });
  }

  let longShown = true;
  function addRoutes() {
    map.addSource('route-short', { type: 'geojson', data: 'map/route-short.geojson' });
    map.addSource('route-long', { type: 'geojson', data: 'map/route-long.geojson' });
    map.addLayer({ id: 'route-long-halo', type: 'line', source: 'route-long', layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'visible' }, paint: { 'line-color': '#FAF6EE', 'line-width': 11, 'line-opacity': 0.9 } });
    map.addLayer({ id: 'route-long-line', type: 'line', source: 'route-long', layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'visible' }, paint: { 'line-color': '#1F3A93', 'line-width': 6, 'line-opacity': 0.95, 'line-dasharray': [0.1, 1.7] } });
    map.addLayer({ id: 'route-short-halo', type: 'line', source: 'route-short', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#FAF6EE', 'line-width': 11, 'line-opacity': 0.9 } });
    map.addLayer({ id: 'route-short-line', type: 'line', source: 'route-short', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#E63312', 'line-width': 6 } });
  }
  function toggleLong() {
    longShown = !longShown;
    ['route-long-line', 'route-long-halo'].forEach(id => map.setLayoutProperty(id, 'visibility', longShown ? 'visible' : 'none'));
    toast(longShown ? 'Длинная прогулка: 4,4 км, через Стайнов' : 'Короткая прогулка: 3,3 км');
  }

  /* stickers sit on the ribbon: each station is snapped to the nearest point of the route line
     (the address is a doorway or an alley; the route runs down the middle of the street) */
  function nearestOnLine(pt, coords) {
    const kx = Math.cos(pt[1] * Math.PI / 180); let best = pt, bd = Infinity;
    for (let i = 0; i < coords.length - 1; i++) {
      const a = coords[i], b = coords[i + 1];
      const ax = (a[0] - pt[0]) * kx, ay = a[1] - pt[1], bx = (b[0] - pt[0]) * kx, by = b[1] - pt[1];
      const dx = bx - ax, dy = by - ay, len2 = dx * dx + dy * dy;
      let t = len2 ? -(ax * dx + ay * dy) / len2 : 0; t = Math.max(0, Math.min(1, t));
      const px = ax + t * dx, py = ay + t * dy, d = px * px + py * py;
      if (d < bd) { bd = d; best = [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]; }
    }
    return { point: best, metres: Math.sqrt(bd) * 111320 };
  }

  const markers = {};
  async function addStickers() {
    let lines = [];
    try {
      const [s, l] = await Promise.all([fetch('map/route-short.geojson').then(r => r.json()), fetch('map/route-long.geojson').then(r => r.json())]);
      lines = [s.features[0].geometry.coordinates, l.features[0].geometry.coordinates];
    } catch (e) { /* no snapping without the lines */ }
    W.stations.forEach((s, i) => {
      let at = s.coord;
      if (lines.length) {
        const a = nearestOnLine(s.coord, lines[0]), b = nearestOnLine(s.coord, lines[1]);
        const reach = s.bonus ? 160 : 80;
        const pick = a.metres <= reach ? a : (b.metres <= reach ? b : null);
        if (pick) at = pick.point;
      }
      s.mapCoord = at;
      const b = document.createElement('button');
      b.className = 'sticker' + (s.bonus ? ' bonus' : ''); b.dataset.id = s.id; b.dataset.idx = i;
      b.setAttribute('aria-label', `Остановка ${s.n}: ${s.title}`);
      b.innerHTML = `<span class="ico"><svg><use href="#st-${s.sticker}"/></svg><span class="n">${s.n === 0 ? 'H' : s.n}</span></span>`;
      b.addEventListener('click', (e) => { e.stopPropagation(); openStation(i); });
      markers[s.id] = new maplibregl.Marker({ element: b, anchor: 'center' }).setLngLat(at).addTo(map);
      b.setAttribute('aria-label', `Остановка ${s.n}: ${s.title}`);
    });
    renderAlbum();
  }

  /* cafés: cup markers with a card */
  let openPopup = null;
  function addPois() {
    (W.pois || []).forEach(c => {
      const el = document.createElement('button');
      el.className = 'poi' + (c.kind === 'place' ? ' place' : ''); el.setAttribute('aria-label', c.name);
      el.innerHTML = `<span class="ico"><svg><use href="#st-${c.kind === 'place' ? 'star' : 'cup'}"/></svg></span>`;
      const html = `<div class="poicard"><h3>${c.name}</h3><p class="sub">${c.sub}</p>${c.img ? `<img src="${c.img}" alt="${c.name}" loading="lazy"><p class="cr">${c.credit}</p>` : ''}<p>${c.text}</p></div>`;
      const popup = new maplibregl.Popup({ offset: 18, maxWidth: 'min(320px, 86vw)', closeButton: true });
      popup.setHTML(html);
      new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(c.coord).addTo(map);
      el.setAttribute('aria-label', c.name); el.dataset.id = c.id;
      // MapLibre toggles popups from the map's own click, which our stopPropagation would swallow: toggle by hand
      el.addEventListener('click', (e) => { e.stopPropagation(); if (openPopup && openPopup !== popup) openPopup.remove(); if (popup.isOpen()) { popup.remove(); openPopup = null; } else { popup.setLngLat(c.coord).addTo(map); openPopup = popup; } });
    });
  }

  map.on('load', () => { recolour(); addRoutes(); addStickers(); addPois(); });

  /* nearest station to the user */
  function dist(a, b) { const R = 6371000, toR = Math.PI / 180; const dLat = (b[1] - a[1]) * toR, dLon = (b[0] - a[0]) * toR; const x = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * toR) * Math.cos(b[1] * toR) * Math.sin(dLon / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); }
  geo.on('geolocate', (e) => {
    const here = [e.coords.longitude, e.coords.latitude];
    let best = null, bd = Infinity;
    W.stations.forEach(s => { const d = dist(here, s.coord); if (d < bd) { bd = d; best = s; } });
    document.querySelectorAll('.sticker').forEach(b => b.classList.toggle('near', best && b.dataset.id === best.id && bd < 400));
    if (best && bd < 400) toast(`${Math.round(bd)} м до места «${best.title}»`);
  });
  geo.on('error', () => toast('Не получилось найти тебя: нажми на наклейку'));
  geo.on('trackuserlocationstart', () => toast('Карта следит за тобой'));

  /* ---------- station sheet ---------- */
  let cur = -1, panel = 0, flipped = false;
  const audio = $('audio');
  const sheet = $('sheet'), card = $('card');

  function frames(s) { return s.frames || W.defaultFrames; }

  function placeCamera() {
    const s = W.stations[cur]; if (!s) return;
    const img = $('camImg'), cam = $('cam');
    const nw = img.naturalWidth || 1696, nh = img.naturalHeight || 2528;
    const cw = cam.clientWidth, ch = cam.clientHeight;
    const f = frames(s)[panel];
    // scale so the frame fills the camera box, keeping the whole frame visible
    const scale = Math.min(cw / (f.w * nw), ch / (f.h * nh));
    const fw = f.w * nw * scale, fh = f.h * nh * scale;
    const ox = (cw - fw) / 2 - f.x * nw * scale, oy = (ch - fh) / 2 - f.y * nh * scale;
    img.style.width = nw + 'px'; img.style.height = nh + 'px';
    img.style.transform = `translate(${ox}px, ${oy}px) scale(${scale})`;
    $('caption').textContent = s.captions[panel];
    $('count').textContent = `${panel + 1} / ${s.captions.length}`;
    if (panel === s.captions.length - 1 && s.n >= 1 && s.n <= 5) collect(s);
    if (s.finale && panel === 2 && !reduced) flySwallow();
  }
  function goPanel(k) {
    const s = W.stations[cur]; if (!s) return;
    panel = Math.max(0, Math.min(s.captions.length - 1, k));
    if (flipped) setFlip(false);
    placeCamera();
  }

  function collect(s) {
    if (store.add(s.id)) { renderAlbum(s.id); toast(`Наклейка собрана: ${s.title}`); const got = store.get().filter(id => mainStations.some(m => m.id === id)).length; if (got === 5) setTimeout(() => toast('Все пять! Викторина за ужином открыта'), 2800); }
  }

  let flown = false;
  function flySwallow() { if (flown) return; flown = true; const f = $('flyer'); f.hidden = false; f.classList.add('fly'); setTimeout(() => { f.classList.remove('fly'); f.hidden = true; }, 3000); }

  function setFlip(on) {
    flipped = on; $('flip').classList.toggle('flipped', on); $('lookBtn').setAttribute('aria-pressed', String(on));
    if (on) { const s = W.stations[cur]; $('thenImg').src = s.then.src; $('thenImg').alt = s.then.credit; $('thenCredit').textContent = s.then.credit;
      const now = s.now; $('nowWrap').hidden = !now; $('slider').hidden = !now; if (now) { $('nowImg').src = now.src; $('slider').value = 50; $('nowWrap').style.width = '50%'; }
      $('more').innerHTML = (s.more || []).map(m => `<figure><img src="${m.src}" alt="${m.credit}" loading="lazy"><figcaption>${m.credit}</figcaption></figure>`).join(''); }
  }
  $('slider').addEventListener('input', (e) => { $('nowWrap').style.width = e.target.value + '%'; });

  function fmt(t) { t = Math.floor(t || 0); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
  audio.addEventListener('timeupdate', () => { $('pTime').textContent = fmt(audio.currentTime) + (audio.duration ? ' / ' + fmt(audio.duration) : ''); });
  audio.addEventListener('play', () => { $('playBtn').textContent = '❚❚'; $('playBtn').setAttribute('aria-label', 'Пауза'); });
  audio.addEventListener('pause', () => { $('playBtn').textContent = '▶'; $('playBtn').setAttribute('aria-label', 'Играть'); });
  audio.addEventListener('error', () => { $('pLabel').textContent = 'Рассказ пока недоступен'; });
  $('playBtn').addEventListener('click', () => { if (audio.paused) audio.play().catch(() => toast('Нажми ещё раз на «играть»')); else audio.pause(); });
  $('skipBtn').addEventListener('click', () => { audio.currentTime = Math.min((audio.duration || 0), audio.currentTime + 15); });

  function openStation(i, turn) {
    const s = W.stations[i]; if (!s) return;
    const wasOpen = sheet.classList.contains('open');
    cur = i; panel = 0; flipped = false; flown = false;
    document.documentElement.style.setProperty('--accent', s.accent);
    document.documentElement.style.setProperty('--accent-ink', s.accentInk);
    $('sNum').textContent = s.n === 0 ? '' : s.n;
    $('sTitle').textContent = s.title;
    $('sMeta').textContent = [s.time, s.place, s.leg].filter(Boolean).join(' · ');
    $('sStand').textContent = s.stand || ''; $('sStand').hidden = !s.stand;
    $('sStory').textContent = s.story; $('sFact').textContent = s.fact;
    $('sQ').textContent = 'Викторина · ' + s.quiz.q; $('sA').textContent = s.quiz.a; $('sQ').parentElement.open = false;
    $('pLabel').textContent = 'Слушай · ' + s.audioLabel; $('pTime').textContent = '0:00';
    audio.pause(); audio.src = s.audio; audio.load();
    $('flip').classList.remove('flipped'); $('lookBtn').setAttribute('aria-pressed', 'false');
    $('prevS').disabled = i === 0; $('nextS').disabled = i === W.stations.length - 1;
    const img = $('camImg'); img.style.transition = 'none';
    img.onload = () => { placeCamera(); requestAnimationFrame(() => { img.style.transition = ''; }); };
    img.src = s.panels; if (img.complete && img.naturalWidth) img.onload();
    if (wasOpen && turn && !reduced) { card.classList.remove('turn'); void card.offsetWidth; card.classList.add('turn'); }
    sheet.classList.add('open'); sheet.setAttribute('aria-hidden', 'false'); card.scrollTop = 0;
    map.flyTo({ center: s.coord, zoom: Math.max(map.getZoom(), 15.5), offset: [0, -120], duration: reduced ? 0 : 900 });
    history.replaceState(null, '', '#' + (s.n === 0 ? 'intro' : s.bonus ? s.id : 'stop-' + s.n));
    hideCover();
  }
  function closeStation() { sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); audio.pause(); history.replaceState(null, '', location.pathname); }
  function hideCover() { $('cover').classList.add('hide'); setTimeout(() => { $('cover').hidden = true; }, 500); }

  /* controls */
  $('prevP').addEventListener('click', () => goPanel(panel - 1));
  $('nextP').addEventListener('click', () => goPanel(panel + 1));
  $('cam').addEventListener('click', () => goPanel(panel + 1));
  $('lookBtn').addEventListener('click', () => setFlip(!flipped));
  $('backBtn').addEventListener('click', () => setFlip(false));
  $('prevS').addEventListener('click', () => openStation(cur - 1, true));
  $('nextS').addEventListener('click', () => openStation(cur + 1, true));
  $('closeBtn').addEventListener('click', closeStation);
  $('startBtn').addEventListener('click', () => { hideCover(); setTimeout(() => { try { geo.trigger(); } catch (e) {} }, 600); });
  document.querySelectorAll('[data-open]').forEach(a => a.addEventListener('click', (e) => { e.preventDefault(); $('menu').hidden = true; openStation(+a.dataset.open); }));
  $('brand').addEventListener('click', (e) => { e.preventDefault(); closeStation(); map.flyTo({ center: [2.3265, 48.8415], zoom: 14.6 }); });
  $('menuBtn').addEventListener('click', () => { const m = $('menu'); m.hidden = !m.hidden; $('menuBtn').setAttribute('aria-expanded', String(!m.hidden)); });
  $('locateLink').addEventListener('click', (e) => { e.preventDefault(); $('menu').hidden = true; geo.trigger(); });
  $('allParis').addEventListener('click', (e) => { e.preventDefault(); $('menu').hidden = true; closeStation();
    const b = new maplibregl.LngLatBounds(); (W.pois || []).forEach(c => b.extend(c.coord)); W.stations.forEach(s => b.extend(s.coord));
    map.fitBounds(b, { padding: { top: 40, bottom: 40, left: 30, right: 30 }, duration: reduced ? 0 : 1200 });
    toast('Звёзды — места Матисса, чашки — кафе. Нажми на любое.'); });
  document.addEventListener('keydown', (e) => { if (!sheet.classList.contains('open')) return; if (e.key === 'ArrowRight') goPanel(panel + 1); if (e.key === 'ArrowLeft') goPanel(panel - 1); if (e.key === 'Escape') closeStation(); });
  window.addEventListener('resize', () => { if (cur >= 0) placeCamera(); });

  /* swipes: left/right on the camera, down on the grip */
  let sx = 0, sy = 0;
  $('cam').addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $('cam').addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) goPanel(panel + (dx < 0 ? 1 : -1)); }, { passive: true });
  $('grip').addEventListener('touchstart', (e) => { sy = e.touches[0].clientY; }, { passive: true });
  $('grip').addEventListener('touchend', (e) => { if (e.changedTouches[0].clientY - sy > 50) closeStation(); }, { passive: true });

  /* deep links */
  function openHash() { const h = location.hash.replace('#', ''); if (!h) return; let i = -1; if (h === 'intro') i = 0; else if (h.startsWith('stop-')) i = W.stations.findIndex(s => s.n === +h.slice(5)); else i = W.stations.findIndex(s => s.id === h); if (i >= 0) openStation(i); }
  if (location.hash) openHash();

  /* offline cache for the walk itself */
  if ('serviceWorker' in navigator && location.protocol === 'https:') { navigator.serviceWorker.register('sw.js').catch(() => {}); }
})();

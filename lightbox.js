/* Tap any picture to see it full screen; pinch to zoom; tap or Escape to close. Shared by the app and the reading pages. */
(function () {
  'use strict';
  const box = document.createElement('div'); box.className = 'lightbox'; box.hidden = true;
  box.innerHTML = '<img alt=""><p class="lb-credit"></p><button class="lb-close" aria-label="Close">×</button>';
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(box));
  const img = box.querySelector('img'), cap = box.querySelector('.lb-credit');
  function open(src, credit, alt) { img.src = src; img.alt = alt || ''; cap.textContent = credit || ''; box.hidden = false; document.documentElement.classList.add('lb-open'); }
  function close() { box.hidden = true; img.src = ''; document.documentElement.classList.remove('lb-open'); }
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (box.contains(t)) { if (t !== img) close(); return; }
    if (!(t instanceof HTMLImageElement)) return;
    if (t.closest('.sticker, .poi, .album, .cutout, .qr, .maplibregl-ctrl')) return;
    if (t.classList.contains('cam-skip')) return;
    const fig = t.closest('figure'); const credit = fig ? (fig.querySelector('figcaption, .credit, .cr') || {}).textContent : (t.parentElement && t.parentElement.querySelector('.credit, .cr') || {}).textContent;
    e.preventDefault(); e.stopPropagation(); open(t.currentSrc || t.src, credit, t.alt);
  }, true);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) close(); });
})();

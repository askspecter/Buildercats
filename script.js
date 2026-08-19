// Copy contract address
(function () {
  const btn = document.getElementById('copyBtn');
  const ca = document.getElementById('ca');
  if (!btn || !ca) return;
  btn.addEventListener('click', async () => {
    const text = ca.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const r = document.createRange();
      r.selectNode(ca);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      try { document.execCommand('copy'); } catch (_) {}
      sel.removeAllRanges();
    }
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('ok');
    setTimeout(() => { btn.textContent = old; btn.classList.remove('ok'); }, 1600);
  });
})();

// Reveal on scroll
(function () {
  const els = document.querySelectorAll('.stat, .tok-card, .step, figure, .section-head');
  if (!('IntersectionObserver' in window)) return;
  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'none';
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
})();

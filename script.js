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

// Theme toggle (light / dark) with persistence
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const frame = document.getElementById('dexFrame');
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light' : 'Switch to dark');
    }
    if (frame && frame.src.indexOf('dexscreener') !== -1 && frame.src.indexOf('theme=' + theme) === -1) {
      frame.src = frame.src.replace(/theme=(dark|light)/, 'theme=' + theme);
    }
  }
  let current = root.getAttribute('data-theme') || 'dark';
  apply(current);
  if (btn) btn.addEventListener('click', () => {
    current = current === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('bc-theme', current); } catch (e) {}
    apply(current);
  });
})();

// Nav shadow + scroll progress bar
(function () {
  const nav = document.querySelector('.nav');
  const bar = document.getElementById('scrollProgress');
  let ticking = false;
  function update() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 8);
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();

// Reveal on scroll (staggered within each group)
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.stat, .tok-card, .step, figure, .section-head, .chart-frame');
  if (reduce || !('IntersectionObserver' in window)) return;
  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1)';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
      const i = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
    });
  }, { threshold: 0.14 });
  els.forEach((el) => io.observe(el));
})();

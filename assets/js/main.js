(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  let current = null;

  if (!btn) return;

  btn.addEventListener('click', function () {
    if (current === null) {
      current = 'light';
    } else if (current === 'light') {
      current = 'dark';
    } else {
      current = null;
    }

    if (current) {
      root.setAttribute('data-theme', current);
    } else {
      root.removeAttribute('data-theme');
    }
  });
})();

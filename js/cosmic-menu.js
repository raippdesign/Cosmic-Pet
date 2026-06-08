(function () {
  var btn = document.getElementById('cosmic-menu-btn');
  var nav = document.getElementById('cosmic-nav-menu');
  var overlay = document.getElementById('cosmic-menu-overlay');

  if (!btn || !nav || !overlay) return;

  var open = false;

  function setOpen(state) {
    open = state;
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
    overlay.classList.toggle('is-visible', open);
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function () {
    setOpen(!open);
  });

  overlay.addEventListener('click', function () {
    if (open) setOpen(false);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && open) setOpen(false);
  });
})();

/* Freedom House — site behavior (no dependencies). */
(function () {
  'use strict';
  var root = document.documentElement;
  var NAVY = 'rgb(45, 55, 144)', WHITE = 'rgb(255, 255, 255)';

  /* ---------- Header: shrink on scroll ---------- */
  function onScroll() { root.classList.toggle('fh-scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Header: mobile menu ---------- */
  var burger = document.querySelector('.fh-burger');
  var panel = document.getElementById('fh-panel');
  function setMenu(open) {
    if (!burger || !panel) return;
    panel.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
  }
  if (burger) burger.addEventListener('click', function () { setMenu(panel.hidden); });
  if (panel) panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Gift amount pickers (homepage + Donate page) ---------- */
  document.querySelectorAll('[data-picker]').forEach(function (box) {
    var buttons = box.querySelectorAll('[data-amount]');
    var amountEl = box.querySelector('[data-bind="amount"]');
    var impactEl = box.querySelector('[data-bind="impact"]');
    var giveEl = box.querySelector('[data-bind="give"]');
    var impacts = {};
    try { impacts = JSON.parse(box.getAttribute('data-impacts') || '{}'); } catch (err) { impacts = {}; }
    var fallback = box.getAttribute('data-impact-fallback') || '';
    function pick(btn) {
      buttons.forEach(function (b) {
        var on = b === btn;
        b.style.background = on ? NAVY : WHITE;
        b.style.color = on ? WHITE : NAVY;
        b.setAttribute('aria-pressed', String(on));
      });
      var label = btn.getAttribute('data-amount');
      if (amountEl) amountEl.textContent = label;
      if (impactEl) impactEl.textContent = impacts[label] || fallback;
      if (giveEl) giveEl.textContent = 'Give ' + label + ' on Givebutter';
    }
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.style.background === NAVY || b.style.backgroundColor === NAVY));
      b.addEventListener('click', function () { pick(b); });
    });
  });

  /* ---------- Giving FAQ accordion (one open at a time) ---------- */
  var faqs = Array.prototype.slice.call(document.querySelectorAll('[data-faq]'));
  function setFaq(btn, open) {
    var item = btn.parentElement;
    item.querySelector('[data-faq-panel]').style.display = open ? 'block' : 'none';
    item.querySelector('[data-faq-sign]').textContent = open ? '−' : '+';
    btn.setAttribute('aria-expanded', String(open));
  }
  faqs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      faqs.forEach(function (b) { setFaq(b, false); });
      setFaq(btn, open);
    });
  });

  /* ---------- Newsletter signups ----------
     TODO: connect to the client's email list provider (Mailchimp, Givebutter, etc.).
     Until then the form only confirms in the browser. */
  document.querySelectorAll('form[data-signup]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = "Thank you, you're on the list";
    });
  });

  /* ---------- Contact form validation ----------
     TODO: connect to a form handler (Formspree, Netlify Forms, etc.). */
  var contact = document.querySelector('form[data-contact]');
  if (contact) {
    var rules = [
      ['ct-name', function (v) { return v.trim() ? '' : 'Please enter your name.'; }],
      ['ct-email', function (v) { return /^\S+@\S+\.\S+$/.test(v) ? '' : 'Please enter a valid email address.'; }],
      ['ct-msg', function (v) { return v.trim() ? '' : 'Please enter a message.'; }]
    ];
    var heading = contact.querySelector('h2');
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      rules.forEach(function (r) {
        var field = document.getElementById(r[0]);
        var msg = r[1](field.value);
        var errId = r[0] + '-err';
        var err = document.getElementById(errId);
        if (msg) {
          if (!err) {
            err = document.createElement('p');
            err.id = errId; err.className = 'fh-err'; err.setAttribute('role', 'alert');
            field.insertAdjacentElement('afterend', err);
          }
          err.textContent = msg;
          field.setAttribute('aria-invalid', 'true');
          field.setAttribute('aria-describedby', errId);
          field.classList.add('fh-invalid');
          if (!firstBad) firstBad = field;
        } else {
          if (err) err.remove();
          field.removeAttribute('aria-invalid');
          field.removeAttribute('aria-describedby');
          field.classList.remove('fh-invalid');
        }
      });
      var ok = contact.querySelector('.fh-ok');
      if (firstBad) { if (ok) ok.remove(); firstBad.focus(); return; }
      if (!ok) {
        ok = document.createElement('p');
        ok.className = 'fh-ok'; ok.setAttribute('role', 'status');
        ok.textContent = 'Thank you. Your message is on its way.';
        heading.insertAdjacentElement('afterend', ok);
      }
    });
    contact.addEventListener('input', function () {
      var ok = contact.querySelector('.fh-ok');
      if (ok) ok.remove();
    });
  }

  /* ---------- About page: Past / Present / Future navigator ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-tab]'));
  if (tabs.length) {
    var ids = tabs.map(function (t) { return t.getAttribute('data-tab'); });
    function paint() {
      var line = (window.innerWidth >= 1024 ? 68 : 72) + 110;
      var cur = ids[0];
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      });
      if (window.scrollY < 300) cur = ids[0];
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === cur;
        t.style.background = on ? NAVY : WHITE;
        t.style.color = on ? WHITE : NAVY;
        t.style.borderBottomColor = on ? '#D8C3A0' : 'transparent';
        var spans = t.querySelectorAll('span');
        if (spans[0]) spans[0].style.color = on ? '#D8C3A0' : '#2D3790';
        if (spans[2]) spans[2].style.color = on ? WHITE : NAVY;
        if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
      });
    }
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
    paint();
  }
})();

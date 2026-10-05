/* ------------------------------------------------------------------ */
/*  Animations — Nova Agency                                           */
/*  Kinetic typography (split-text), reveal on scroll, parallax,      */
/*  cursor follower, theme toggle.                                    */
/*  Respecte prefers-reduced-motion.                                  */
/* ------------------------------------------------------------------ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================================================================
     SPLIT TEXT — scinde le texte en mots puis lettres, anime au scroll
     ================================================================ */
  function splitText() {
    document.querySelectorAll('.split-text').forEach(function (el) {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = 'true';

      var text = el.textContent;
      var words = text.split(' ');
      var html = words.map(function (word, wi) {
        var chars = word.split('');
        if (chars.length === 1 && !/[A-Z]/.test(chars[0])) {
          // Ponctuation / caractères spéciaux : non scindés
          return '<span class="split-text-word" data-index="' + wi + '">' + word + '</span>';
        }
        return '<span class="split-text-word" data-index="' + wi + '">' +
          chars.map(function (ch, ci) {
            return '<span class="split-text-letter" data-index="' + (wi + '.' + ci) + '">' + ch + '</span>';
          }).join('') + '</span>';
      }).join('&#8203;'); // zero-width space pour garder les sauts
      el.innerHTML = html;
    });
  }

  /* ================================================================
     REVEAL ON SCROLL — Intersection Observer pour .reveal-in
     ================================================================ */
  function revealOnScroll() {
    if (!('IntersectionObserver' in window)) return;

    var elements = document.querySelectorAll('.reveal-in');
    if (reduceMotion) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ================================================================
     PARALLAX — mouvement vertical basé sur le scroll
     ================================================================ */
  function initParallax() {
    if (reduceMotion) return;

    var elements = document.querySelectorAll('[data-parallax]');
    if (elements.length === 0) return;

    var frame = null;
    function tick() {
      var y = window.scrollY;
      elements.forEach(function (el) {
        var factor = parseFloat(el.dataset.parallax) || 0.2;
        el.style.transform = 'translateY(' + (y * factor) + 'px)';
      });
      frame = requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('scroll', function () {
      if (!frame) frame = requestAnimationFrame(tick);
    }, { passive: true });
  }

  /* ================================================================
     CURSOR FOLLOWER — cercle or qui suit la souris (optionnel)
     ================================================================ */
  function initCursorFollower() {
    if (reduceMotion) return;
    if (!document.querySelector('.cursor-follower')) return;

    var follower = document.querySelector('.cursor-follower');
    var pointer = { x: 0, y: 0 };
    var followerPos = { x: 0, y: 0 };
    var visible = false;
    var frame = null;

    function move() {
      var dx = pointer.x - followerPos.x;
      var dy = pointer.y - followerPos.y;
      followerPos.x += dx * 0.15;
      followerPos.y += dy * 0.15;
      follower.style.left = followerPos.x + 'px';
      follower.style.top = followerPos.y + 'px';
      frame = requestAnimationFrame(move);
    }

    function tick() {
      if (!visible) return;
      move();
    }

    document.addEventListener('mousemove', function (e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (!visible) {
        visible = true;
        follower.classList.add('is-visible');
        if (!frame) frame = requestAnimationFrame(tick);
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      visible = false;
      follower.classList.remove('is-visible');
    });

    // Gérer les éléments interactifs : cercle plus grand + lueur
    var hoverables = document.querySelectorAll('a, button, .service-card, .portfolio-card, .home-work__card, [tabindex="0"]');
    hoverables.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        follower.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', function () {
        follower.classList.remove('is-hover');
      });
    });
  }

  /* ================================================================
     THEME TOGGLE — bascule dark / light mode
     ================================================================ */
  function initThemeToggle() {
    var html = document.documentElement;
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    var storageKey = 'nova-theme';
    var systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    function applyTheme(theme) {
      if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.setAttribute('title', 'Passer en mode clair');
      } else if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.setAttribute('title', 'Passer en mode sombre');
      }
      localStorage.setItem(storageKey, theme);
      window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: theme } }));
    }

    function getInitialTheme() {
      var stored = localStorage.getItem(storageKey);
      if (stored === 'dark' || stored === 'light') return stored;
      return systemPrefersLight ? 'light' : 'dark';
    }

    var initial = getInitialTheme();
    applyTheme(initial);

    toggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme') || (systemPrefersLight ? 'light' : 'dark');
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });

    // Écouter les changements du système si pas de mode forcé
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!html.getAttribute('data-theme')) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  /* ================================================================
     INITIALISATION
     ================================================================ */
  function init() {
    splitText();
    revealOnScroll();
    initParallax();
    initCursorFollower();
    initThemeToggle();

    // Ré-split après chargement du header/footer injectés (includes.js)
    document.addEventListener('includes-loaded', function () {
      // Aucune action supplémentaire requise pour l'instant
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

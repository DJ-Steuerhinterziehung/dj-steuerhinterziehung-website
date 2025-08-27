/*
 * Kleine JavaScript‑Helferlein für die DJ‑Steuerhinterziehung‑Seite.
 * Aktuell werden nur einfache Funktionen bereitgestellt, etwa das Hervorheben
 * des aktuellen Menüeintrags beim Scrollen. Zusätzliche Effekte können
 * hier bei Bedarf ergänzt werden.
 */

(function () {
  'use strict';

  // Scroll‑Spy: Navigation hervorheben, wenn der Benutzer scrollt
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav ul li a');

  function activateLink() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  }

  activateLink();
  window.addEventListener('scroll', activateLink);
})();
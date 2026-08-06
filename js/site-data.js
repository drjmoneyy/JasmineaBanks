/* ==========================================================================
   Shared rendering helpers for the JSON-driven sections (Publications,
   Talks/Workshops/Service). Same visual language as the rest of the site
   (see css/style.css); only adds the word-reveal title animation, the
   staggered fade-up on entry rows, and the filter-pill show/hide logic.
   ========================================================================== */
(function (window) {
  'use strict';

  // Set el's text as a sequence of <span class="word"> elements with a
  // staggered animation-delay, so the title reveals word by word.
  function renderWordReveal(el, text, baseDelay) {
    el.dataset.text = text;
    var html = '';
    var delay = typeof baseDelay === 'number' ? baseDelay : 0.1;
    var tokens = String(text).split(/(\s+)/);
    tokens.forEach(function (tk) {
      if (/^\s+$/.test(tk)) { html += tk; return; }
      html += '<span class="word" style="animation-delay: ' + delay.toFixed(2) + 's">' + tk + '</span>';
      delay += 0.07;
    });
    el.innerHTML = html;
    el.setAttribute('aria-label', text);
  }

  // Wire up a row of filter pill buttons to show/hide sections by
  // data-category. Expects each pill to carry data-filter, and each
  // section to carry data-category. A pill with data-filter="all"
  // clears the filter.
  function initFilters(pillsSelector, sectionSelector) {
    var pills = Array.prototype.slice.call(document.querySelectorAll(pillsSelector));
    var sections = Array.prototype.slice.call(document.querySelectorAll(sectionSelector));
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('is-active'); });
        pill.classList.add('is-active');
        var filter = pill.dataset.filter;
        sections.forEach(function (sec) {
          sec.hidden = !(filter === 'all' || sec.dataset.category === filter);
        });
      });
    });
  }

  window.SiteData = { renderWordReveal: renderWordReveal, initFilters: initFilters };
})(window);

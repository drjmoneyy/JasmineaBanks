/* ==========================================================================
   Publications page — parses the embedded JSON data block and renders the
   entries using the site's existing minimalist mono components (.entry,
   .stack, .tag-list), with a word-reveal title, staggered fade-up entry
   rows, and clickable filter pills.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('publications-root');
  if (!root) return;

  var data = {};
  try {
    data = JSON.parse(document.getElementById('publications-data').textContent);
  } catch (e) {
    console.error('Publications data could not be parsed.', e);
    return;
  }

  // Header
  document.getElementById('p-eyebrow').textContent = data.header.eyebrow;
  SiteData.renderWordReveal(document.getElementById('p-title'), data.header.title, 0.15);

  // Totals
  var totalEntries = data.sections.reduce(function (n, s) { return n + s.entries.length; }, 0);
  document.getElementById('p-totals').innerHTML =
    '<strong>' + totalEntries + '</strong>entries &middot; ' + data.sections.length + ' categories';

  // Filter pills
  var filtersEl = document.getElementById('p-filters');
  var filtersHtml = '<li><button type="button" class="filter-pill is-active" data-filter="all">All</button></li>';
  data.sections.forEach(function (s) {
    filtersHtml += '<li><button type="button" class="filter-pill" data-filter="' + s.category + '">' +
      s.filterLabel + '</button></li>';
  });
  filtersEl.innerHTML = filtersHtml;

  // Sections
  var sectionsEl = document.getElementById('p-sections');
  var html = '';
  var entryDelay = 0.5;

  data.sections.forEach(function (s) {
    var entriesHtml = '';
    s.entries.forEach(function (e) {
      var titleHtml = e.link
        ? '<a href="' + e.link + '" target="_blank" rel="noopener noreferrer">' + e.title + '</a>'
        : e.title;
      var venueLine = e.venue ? (e.authors ? e.authors + ' &middot; ' + e.venue : e.venue) : e.authors;
      var tagLabel = e.link ? 'Open Access' : (e.status || 'On Request');

      entriesHtml +=
        '<div class="entry entry--dated fade-up" style="animation-delay: ' + entryDelay.toFixed(2) + 's">' +
          '<p class="entry__date">' + e.date + '</p>' +
          '<div>' +
            '<p class="entry__title">' + titleHtml + '</p>' +
            (venueLine ? '<p>' + venueLine + '</p>' : '') +
          '</div>' +
          '<span class="entry__tag">' + tagLabel + '</span>' +
        '</div>';
      entryDelay += 0.04;
    });
    entryDelay += 0.06;

    var countLabel = s.entries.length === 1 ? '' : ' &middot; ' + s.entries.length + ' entries';
    html +=
      '<section class="pub-section" data-category="' + s.category + '">' +
        '<h2 id="' + s.category + '">' + s.title + '</h2>' +
        '<p class="entry__meta">' + s.meta + countLabel + '</p>' +
        '<div class="stack">' + entriesHtml + '</div>' +
      '</section>';
  });
  sectionsEl.innerHTML = html;

  // Footer notice
  var noticeEl = document.getElementById('p-notice');
  noticeEl.innerHTML = '<strong>On links</strong>' + data.foot.text;

  SiteData.initFilters('#p-filters .filter-pill', '#p-sections .pub-section');
})();

/* ==========================================================================
   Talks, Workshops & Service page — parses the embedded JSON data block
   and renders sections/entries using the site's existing minimalist mono
   components (.entry, .stack), with a word-reveal title and staggered
   fade-up entry rows.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('talks-root');
  if (!root) return;

  var data = {};
  try {
    data = JSON.parse(document.getElementById('talks-data').textContent);
  } catch (e) {
    console.error('Talks data could not be parsed.', e);
    return;
  }

  // Header
  document.getElementById('t-eyebrow').textContent = data.header.eyebrow;
  SiteData.renderWordReveal(document.getElementById('t-title'), data.header.title, 0.15);

  // Totals
  var totalEntries = data.sections.reduce(function (n, s) { return n + s.entries.length; }, 0);
  document.getElementById('t-totals').innerHTML =
    '<strong>' + totalEntries + '</strong>entries &middot; ' + data.sections.length + ' areas';

  // Sections
  var sectionsEl = document.getElementById('t-sections');
  var html = '';
  var entryDelay = 0.5;

  data.sections.forEach(function (s) {
    var entriesHtml = '';
    s.entries.forEach(function (e) {
      var dateCls = e.ongoing ? 'entry__date entry__date--ongoing' : 'entry__date';
      var tagHtml = e.tag ? '<span class="entry__tag">' + e.tag + '</span>' : '<span></span>';
      var venueHtml = e.venue ? '<p>' + e.venue + '</p>' : '';

      entriesHtml +=
        '<div class="entry entry--dated fade-up" style="animation-delay: ' + entryDelay.toFixed(2) + 's">' +
          '<p class="' + dateCls + '">' + e.date + '</p>' +
          '<div>' +
            '<p class="entry__title">' + e.title + '</p>' +
            venueHtml +
          '</div>' +
          tagHtml +
        '</div>';
      entryDelay += 0.04;
    });
    entryDelay += 0.06;

    html +=
      '<section class="pub-section">' +
        '<h2>' + s.title + '</h2>' +
        '<p class="entry__meta">' + s.meta + ' &middot; ' + s.entries.length + ' entries</p>' +
        '<div class="stack">' + entriesHtml + '</div>' +
      '</section>';
  });
  sectionsEl.innerHTML = html;

  // Footer notice
  var noticeEl = document.getElementById('t-notice');
  noticeEl.textContent = data.foot.text;
})();

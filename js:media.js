/* ==========================================================================
   Media Appearances page — parses the embedded JSON data block and renders
   sections/entries using the site's existing minimalist mono components
   (.entry, .stack), with a word-reveal title and staggered fade-up entry
   rows.

   Every entry uses the same three-column row (date / text / tag), whether
   or not it has a source image, so entries with and without a confirmed
   photo look like the same kind of thing. When an entry has a `link`, the
   whole row is one clickable element (not separate links on the image and
   the title), and an optional confirmed source photo plus its credit
   caption sit in the same column as the role tag, stacked above it.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('media-root');
  if (!root) return;

  var data = {};
  try {
    data = JSON.parse(document.getElementById('media-data').textContent);
  } catch (e) {
    console.error('Media data could not be parsed.', e);
    return;
  }

  // Header
  document.getElementById('m-eyebrow').textContent = data.header.eyebrow;
  SiteData.renderWordReveal(document.getElementById('m-title'), data.header.title, 0.15);

  // Sections
  var sectionsEl = document.getElementById('m-sections');
  var html = '';
  var entryDelay = 0.5;

  data.sections.forEach(function (s) {
    var entriesHtml = '';
    s.entries.forEach(function (e) {
      var venueHtml = e.venue ? '<p>' + e.venue + '</p>' : '';

      var thirdColHtml = '';
      if (e.image) {
        var creditHtml = e.imageCredit ? '<figcaption>' + e.imageCredit + '</figcaption>' : '';
        thirdColHtml +=
          '<span class="entry-media-slot">' +
            '<img class="media-thumb" src="' + e.image + '" alt="' + (e.imageAlt || '') + '" loading="lazy">' +
            creditHtml +
            (e.tag ? '<span class="entry__tag">' + e.tag + '</span>' : '') +
          '</span>';
      } else {
        thirdColHtml = e.tag ? '<span class="entry__tag">' + e.tag + '</span>' : '<span></span>';
      }

      var rowTag = e.link ? 'a' : 'div';
      var rowAttrs = e.link ? ' href="' + e.link + '" target="_blank" rel="noopener noreferrer"' : '';

      entriesHtml +=
        '<' + rowTag + ' class="entry entry--dated fade-up" style="animation-delay: ' + entryDelay.toFixed(2) + 's"' + rowAttrs + '>' +
          '<p class="entry__date">' + e.date + '</p>' +
          '<div>' +
            '<p class="entry__title">' + e.title + '</p>' +
            venueHtml +
          '</div>' +
          thirdColHtml +
        '</' + rowTag + '>';
      entryDelay += 0.04;
    });
    entryDelay += 0.06;

    var countLabel = s.entries.length === 1 ? '' : ' &middot; ' + s.entries.length + ' entries';
    html +=
      '<section class="pub-section">' +
        '<h2>' + s.title + '</h2>' +
        '<p class="entry__meta">' + s.meta + countLabel + '</p>' +
        '<div class="stack">' + entriesHtml + '</div>' +
      '</section>';
  });
  sectionsEl.innerHTML = html;

  // Footer notice
  var noticeEl = document.getElementById('m-notice');
  noticeEl.textContent = data.foot.text;
})();

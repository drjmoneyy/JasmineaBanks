# Jasmine Banks — Personal Academic Website

A minimalist, monospace personal website for Jasmine Banks, a 6th-year
Ph.D. Candidate in Psychology and Digital Studies at the University of
Michigan, built to replace the previous Wix site at jasbanks.com. Jasmine
is on the job market as of August 2026.

Every page on the site, including Publications and the new Talks,
Workshops & Service page, uses the same single visual system: JetBrains
Mono, a restrained off-white/black palette with one muted accent color,
and the same header, footer, and entry components (`css/style.css`).
Publications and Talks, Workshops & Service also render their entries from
an embedded JSON data block, so an entry can be added or edited by changing
the JSON, not the HTML markup, while a word-by-word title reveal and a
staggered fade-up on each entry row run on top of the same components used
everywhere else on the site.

## Goals

- Present a clear, factual account of Jasmine Banks's research standpoint,
  education, and academic record.
- Fix the structural problems found on the live Wix site: unfinished
  sections, a duplicate "Publications" navigation link, and pages that
  returned 404 errors.
- Use clear, declarative academic writing. No em-dashes, no colons used as
  stylistic punctuation, no vague or filler language, no invented content.
- One clean, minimalist, monospace visual style (JetBrains Mono) across
  every page, with a restrained black/off-white palette and a single muted
  accent color, so Publications and Talks, Workshops & Service look like
  the rest of the site rather than a separate design system.

## Currently completed features

- **Home (`index.html`)** — a job-market status banner, headshot, name,
  role, a research statement describing Jasmine as a multidisciplinary
  researcher studying the world-building practices of humans and
  technology, a "Research Interests" tag list, and a row of social and
  professional profile icons (ORCID, Instagram, YouTube, Bluesky,
  LinkedIn).
- **Research (`research.html`)** — the same multidisciplinary research
  statement, dissertation description, and advisors.
- **Publications (`publications.html`)** — full list of 20 entries as
  provided, organized into Journal Articles (9), Book Chapters and
  Encyclopedia Entries (4), Public Scholarship (1), Manuscripts Under
  Review (5), and Manuscript in Preparation (1), each with full author
  list, venue, and year. Entries with a public DOI or publisher link are
  tagged "Open Access" and link out directly; all other entries are tagged
  "Available on Request" or their submission status. The title reveals
  word by word on load, filter pills show or hide sections by category,
  and entry rows fade up with a small staggered delay, using the site's
  existing `.entry`, `.stack`, and `.tag-list` components. All content is
  stored as JSON inside the page (`#publications-data`) and rendered by
  `js/publications.js`.
- **Talks, Workshops & Service (`talks.html`)** — new page, in the same
  visual system as Publications, with three sections: Invited Talks (12
  entries), Workshops & Facilitation (3 entries, with a filled "ongoing"
  date badge for current commitments), and Service & Affiliations (5
  entries). Each entry shows a date, title, venue, and a role tag (for
  example "Panel," "Lead," "Reviewer"). The January 2024 University of
  Washington entry is now filled in with its confirmed title, abstract
  topic, and host ("If You Know, You Know": Researching the
  Characteristics of Black Digital Culture, an iSchool Special Research
  Presentation co-hosted with the Simpson Center for the Humanities), and
  includes a thumbnail of the original event listing, a photo credit
  caption, and a link to the listing, using the site's shared
  sourced-entry layout (see Media Appearances below): the whole entry row
  is a single clickable link, and the thumbnail plus its caption sit in
  the same tag column used by every other entry, so entries with and
  without a photo share one row shape. Content is stored as JSON inside
  the page (`#talks-data`) and rendered by `js/talks.js`.
- **CV (`cv.html`)** — a job-market status banner, Education (Ph.D.,
  M.S., B.A. with dates and institutions, dissertation title, advisors),
  Research Interests, a Publications summary linking to the full
  Publications page, a Talks, Workshops & Service summary linking to the
  new page, and a download link to the original CV file. Awards and
  Grants are intentionally omitted per instruction. Teaching Experience is
  marked "in progress" rather than filled with guessed content.
- **Media Appearances (`media.html`)** — new page gathering podcasts, video
  features, press coverage, and applied research collaborations. Organized
  into three JSON-driven sections, most recent first: Podcasts (1 entry),
  Video Features (1 entry), and Press & Media Coverage (4 entries: the
  University of Arizona Graduate Center interview, The Michigan Daily's
  reporting on the dating-app study by Sophie Cloutier, EURweb's reporting
  on the same study by Ny MaGee, and the University of Michigan LSA
  feature on the BIIT Lab's collaboration with Feeld), each with a date,
  title, venue or publication name, and a role tag (for example "Podcast,"
  "Interview Feature," "Research Coverage," "Lab Feature"). All five press
  and video entries now link directly to their confirmed source, and each
  entry's whole row (date, title, venue, and tag/image column) is a single
  clickable link rather than only the title text, so clicking anywhere on
  the row opens the source. Only the two entries with a confirmed source
  photo (Arizona and Michigan Daily) show a thumbnail
  (`images/media-arizona-instagram.jpg`,
  `images/media-michigandaily-illustration.jpg`) with its photo credit
  caption (for example "Illustration: Haylee Bohm/The Michigan Daily"),
  stacked directly above the role tag in the same column every entry uses
  for its tag; entries without a confirmed photo simply show the tag alone
  in that column, so every row keeps the same shape whether or not it has
  an image. No placeholder image is used for entries without a confirmed
  source photo. This shared row pattern lives in `.entry--dated` /
  `.entry-media-slot` in `css/style.css` and collapses to a single column
  on narrow screens. A fourth section,
  Applied Research & Industry Collaboration, is plain static HTML, kept
  short in the same one-title/two-sentence voice as every other entry on
  the site rather than reproducing the full LSA article: "Reflections,
  with Feeld" states that Jasmine Banks contributed research to
  Reflections, a self-reflection feature built into the dating app Feeld,
  and that the collaboration informed Feeld's research report, *State of
  Reflections Vol. 1*, with links out to Feeld's Reflections page, Feeld's
  press release, and the full LSA feature for anyone who wants the
  complete account of the project (who else was involved, the timeline,
  and the design process). This section leads with Feeld's own cover
  image for the Reflections tool
  (`images/media-feeld-reflections-cover.jpg`), shown as a wide, clickable
  image beside the short writeup using a dedicated `.entry--collab` layout
  that also collapses to a single column on narrow screens. Content for
  the three JSON sections is stored inside
  the page (`#media-data`) and rendered by `js/media.js`, matching the
  pattern used by Publications and Talks,
  Workshops & Service.
- **Speaking & Media Opportunities (`speaking.html`)** — new page stating
  availability for public speaking, guest lectures, and media appearances,
  a list of ten speaking topics (Psychology of Online Behaviors, Online
  Racism, Research Methods and Ethics, Black Digital Culture, Racism,
  Sexism, and Bias in Online Dating, Historical Context in Black Digital
  Experiences, Intersectionality and Online Identity, Digital Strategies
  for Inclusion, Community-Based Research, and Social Media Presence as
  an Academic), a short statement on collaboration, and contact buttons
  linking to the Contact page and to direct email. Built with the site's
  existing `.entry` and `.stack` components, in plain static HTML (no
  JSON data block, since this content does not need frequent editing).
- **Contact (`contact.html`)** — contact form (first name, last name,
  email, message) with client-side validation and status messaging. It
  submits to Formspree (a free static-site form service) rather than this
  platform's Table API, so it will keep working after the site moves to
  GitHub Pages, Cloudflare Pages, or any other static host. See
  `DEPLOY.md` for the one-time setup step required (adding your real
  Formspree form ID).
- Consistent header/nav/footer across all eight pages, semantic HTML
  (`header`, `nav`, `main`, `footer`, `section`, `article`), skip-to-content
  link, and a single duplicate-free navigation menu that now includes
  Talks & Service, Media, and Speaking.
- A row of social and professional profile icons (Font Awesome, via CDN)
  in the site footer on every page, and in the Home page hero: ORCID,
  Instagram, YouTube, Bluesky, and LinkedIn, each linking out to the
  provided profile URL in a new tab.
- Original headshot image reused (`images/jasmine-banks-headshot.jpg`).
- Full original CV file preserved and linked for download
  (`files/Jasmine-Banks-CV.docx`).

## Site map

| Page | Path |
|---|---|
| Home | `/index.html` |
| Research | `/research.html` |
| Publications | `/publications.html` |
| Talks, Workshops & Service | `/talks.html` |
| Media Appearances | `/media.html` |
| Speaking & Media Opportunities | `/speaking.html` |
| CV | `/cv.html` |
| Contact | `/contact.html` |

No page takes URL parameters. All content on Publications, Talks,
Workshops & Service, and Media Appearances is generated client-side from a
JSON block embedded in each page, not from query strings. Speaking & Media
Opportunities is plain static HTML with no query-string or JSON
dependency.

## Data model

This site does not depend on the platform's Table API for data storage.
The contact form submits directly to Formspree
(https://formspree.io), a third-party free static-site form backend, via
a standard HTML form POST handled in `js/contact.js`. No database table
is required on the hosting side. See `DEPLOY.md` for setup.

The `contact_messages` table schema defined earlier in this project is no
longer used by the live form and can be ignored or removed once the site
is fully moved off this platform.

Publications, Talks, Workshops & Service, and Media Appearances do not use
the Table API either. Each page embeds its full content as a JSON object
inside a `<script type="application/json">` block:

- `publications.html` → `#publications-data`, read by
  `js/publications.js`. Each section has a `category`, `filterLabel`,
  `title`, `meta`, and an `entries` array; each entry has `date`, `title`,
  `authors`, `venue`, and either a `link` (renders as "Open Access") or a
  `status` string (renders as a tag, e.g. "Available on Request").
- `talks.html` → `#talks-data`, read by `js/talks.js`, and `media.html` →
  `#media-data`, read by `js/media.js`, share one entry pattern. Each
  section has a `title`, `meta`, and an `entries` array; each entry has
  `date`, `title`, `venue`, an optional `tag`, an optional `link` to a
  source (an event listing, article, podcast, or video), and optional
  `image`/`imageAlt`/`imageCredit` fields for a confirmed source photo.
  Every entry renders in the same three-column row regardless of whether
  it has an image: when `link` is present, the whole row is a single `<a>`
  element rather than only the title being a link; when `image` is also
  present, the thumbnail and its credit caption sit stacked above the role
  tag in that same third column (`.entry-media-slot` in `css/style.css`);
  when there is no image, that column holds only the tag. `talks.html`
  additionally supports an `ongoing` boolean on an entry, which switches
  the date to the filled "ongoing" badge style. The Applied Research &
  Industry
  Collaboration section on this page is plain static HTML, not JSON,
  since it is a single, stable entry rather than a growing list.

Each section's entry count line is generated from the length of its
`entries` array, not typed in by hand. When a section has exactly one
entry, the count is left off the line entirely, since "1 entries" is not
correct English. When a section has zero or more than one entry, the
count reads correctly (for example "4 entries"). This logic lives in
`js/publications.js`, `js/talks.js`, and `js/media.js` and needs no
attention when entries are added or removed. It updates itself.

### How to update the site's entry lists

To add, edit, or remove an entry on Publications, Talks, Workshops &
Service, or Media Appearances, open the page's HTML file and find the
`<script type="application/json" id="...">` block near the top of the
body. Do not edit the rendered page content below it. That content is
generated from this JSON block by the matching JavaScript file every time
the page loads.

1. Open `publications.html`, `talks.html`, or `media.html`.
2. Find the JSON block (`#publications-data`, `#talks-data`, or
   `#media-data`).
3. Find the `section` whose `entries` array should change.
4. To add an entry, copy an existing entry object inside that array,
   paste it as a new item, and replace its field values with the new,
   confirmed facts. Keep a comma between each entry object.
5. To edit an entry, change the field values directly (`date`, `title`,
   `venue`, `tag`, `link`, `image`, `imageAlt`, `imageCredit`, `authors`,
   or `status`, depending on the page).
6. To remove an entry, delete its entire object from the array, including
   its surrounding curly braces, and remove the comma that separated it
   from the next entry.
7. Save the file. No other file needs to change. The section's entry
   count updates on its own, and the correct singular or plural wording
   is applied automatically.

Only use facts that have been confirmed by a source (a pasted article, a
screenshot, or a link that has been verified to load the claimed content).
Do not add a `link`, `image`, or any other field with invented or
unconfirmed information.

## Not yet implemented

The following content could not be written because the underlying facts
have not yet been provided in full, and no placeholder or invented content
was used in their place, consistent with the request for clear, factual
writing:

- **Teaching Experience** section on the CV page.
- A Google Scholar or university faculty directory link — neither was
  provided. ORCID, Instagram, YouTube, Bluesky, and LinkedIn are now
  linked site-wide.
- **Book features.** None have been confirmed yet. If Jasmine has been
  featured in a book, send the book title, author or editor, publisher,
  year, and the nature of the feature, and a Books section will be added
  to the Media Appearances page.

Awards and Grants were intentionally left off the site at the site owner's
request and are not treated as missing content.

Note on the LinkedIn link: the URL provided
(`https://il.linkedin.com/company/wix-com?trk=public_jobs_topcard_logo`)
points to a Wix company page on LinkedIn, not a personal LinkedIn profile
for Jasmine Banks. It has been linked exactly as provided. If a personal
LinkedIn profile URL exists, send it and the link will be corrected.

## Recommended next steps

1. Provide the remaining CV content as pasted text or a `.txt` upload
   (Teaching Experience). This will replace the "in progress" notice on
   `cv.html`.
2. Confirm the LinkedIn URL (see note above under "Not yet implemented")
   and provide a Google Scholar or university directory link if one
   should be added.
3. To go live at jasbanks.com on free hosting outside this platform, see
   `DEPLOY.md` for an overview of options and `GITHUB-PAGES-SETUP.md` for
   a full, detailed, step-by-step walkthrough of the GitHub Pages path
   specifically, including exact DNS records and account setup.

## Design notes

- Font: JetBrains Mono, loaded via Google Fonts, with system monospace
  fallbacks, used on every page including Publications and Talks,
  Workshops & Service.
- Palette: off-white background (`#f7f5f0`), near-black text (`#141414`),
  muted olive accent (`#4b4630` / `#2f2c1e`) used only for links, buttons,
  active nav state, and the date column on the animated pages.
- No decorative imagery beyond the headshot; headshot is desaturated to
  grayscale to keep the page visually restrained.
- Layout is left-aligned and single-column, not centered, to keep long
  academic text easy to scan.
- Social and professional icons use Font Awesome Free 6.7.2, loaded via
  jsDelivr CDN, styled to match the muted color palette (`--color-muted`,
  darkening to `--color-accent-strong` on hover/focus).
- Animation, defined once in `css/style.css` and reused by
  `js/site-data.js`: the page title reveals word by word on load
  (`wordUp`, translateY 100% to 0) using `cubic-bezier(0.16, 1, 0.3, 1)`
  easing, and each entry row fades up (`fadeUp`) with a small staggered
  delay as a section renders. This keeps Publications and Talks,
  Workshops & Service visually identical to the rest of the site while
  still feeling dynamic.

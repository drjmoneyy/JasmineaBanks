# Jasmine Banks — Personal Academic Website

A minimalist, monospace personal website for Jasmine Banks, Ph.D. Candidate
in Psychology at the University of Michigan, built to replace the previous
Wix site at jasbanks.com.

## Goals

- Present a clear, factual account of Jasmine Banks's research standpoint,
  education, and academic record.
- Fix the structural problems found on the live Wix site: unfinished
  sections, a duplicate "Publications" navigation link, and pages that
  returned 404 errors.
- Use clear, declarative academic writing. No em-dashes, no colons used as
  stylistic punctuation, no vague or filler language, no invented content.
- A clean, minimalist, monospace visual style (JetBrains Mono) with a
  restrained black/off-white palette and a single muted accent color.

## Currently completed features

- **Home (`index.html`)** — headshot, name, role, a one-paragraph research
  statement, a "Standpoint" section naming the phenomenological approach and
  the dissertation title/advisors, and a "Research Interests" tag list.
- **Research (`research.html`)** — full dissertation description, the five
  research interest areas each with a real explanatory sentence, and a
  "Method" section describing the mixed-methods, phenomenological approach.
- **Publications (`publications.html`)** — full list of 20 entries as
  provided, organized into Journal Articles (9), Book Chapters and
  Encyclopedia Entries (4), Public Scholarship (1), Manuscripts Under
  Review (5), and Manuscript in Preparation (1), each with full author
  list, venue, and year. Five entries marked "View paper" link directly
  to the published version via DOI or publisher site; entries marked
  "Available on request" have no known public link.
- **CV (`cv.html`)** — Education (Ph.D., M.S., B.A. with dates and
  institutions, dissertation title, advisors), Research Interests, a
  Publications summary linking to the full Publications page, a full list
  of 11 Invited Talks (2021–2025) and 1 Presentation as Moderator/
  Organizer, and a download link to the original CV file. Awards and
  Grants are intentionally omitted per instruction. Teaching Experience
  and Service are marked "in progress" rather than filled with guessed
  content.
- **Contact (`contact.html`)** — contact form (first name, last name,
  email, message) with client-side validation and status messaging. As of
  this update, it submits to Formspree (a free static-site form service)
  rather than this platform's Table API, so it will keep working after
  the site moves to GitHub Pages, Cloudflare Pages, or any other static
  host. See `DEPLOY.md` for the one-time setup step required (adding your
  real Formspree form ID).
- Consistent header/nav/footer across all pages, semantic HTML
  (`header`, `nav`, `main`, `footer`, `section`, `article`), skip-to-content
  link, and a single duplicate-free navigation menu.
- Original headshot image reused (`images/jasmine-banks-headshot.jpg`).
- Full original CV file preserved and linked for download
  (`files/Jasmine-Banks-CV.docx`).

## Site map

| Page | Path |
|---|---|
| Home | `/index.html` |
| Research | `/research.html` |
| Publications | `/publications.html` |
| CV | `/cv.html` |
| Contact | `/contact.html` |

## Data model

This site no longer depends on the platform's Table API for data storage.
The contact form submits directly to Formspree
(https://formspree.io), a third-party free static-site form backend, via
a standard HTML form POST handled in `js/contact.js`. No database table
is required on the hosting side. See `DEPLOY.md` for setup.

The `contact_messages` table schema defined earlier in this project is no
longer used by the live form and can be ignored or removed once the site
is fully moved off this platform.

## Not yet implemented

The following content could not be written because the underlying facts
have not yet been provided in full, and no placeholder or invented content
was used in their place, consistent with the request for clear, factual
writing:

- **Teaching Experience** and **Service** sections.
- Any social/professional links (Google Scholar, ORCID, university faculty
  page) — none were provided.

Awards and Grants were intentionally left off the site at the site owner's
request and are not treated as missing content.

## Recommended next steps

1. Provide the remaining CV content as pasted text or a `.txt` upload
   (Teaching Experience, Service). This will replace the "in progress"
   notice on `cv.html`.
2. Confirm whether any professional profile links (Google Scholar, ORCID,
   university directory page) should be added to the Home and CV pages.
3. When ready to go live at jasbanks.com, use the **Publish tab** to deploy
   this site, then update the domain's DNS/hosting settings to point to the
   published site (this is a step you complete outside this tool, likely by
   removing or replacing the current Wix connection for the domain).

## Design notes

- Font: JetBrains Mono, loaded via Google Fonts, with system monospace
  fallbacks.
- Palette: off-white background (`#f7f5f0`), near-black text (`#141414`),
  muted olive accent (`#4b4630` / `#2f2c1e`) used only for links, buttons,
  and active nav state.
- No decorative imagery beyond the headshot; headshot is desaturated to
  grayscale to keep the page visually restrained.
- Layout is left-aligned and single-column, not centered, to keep long
  academic text easy to scan.

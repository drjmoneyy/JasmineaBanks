# Moving This Site to Free Git-Based Hosting

This site is plain HTML, CSS, and JavaScript. It has no dependency on this
platform and can be hosted anywhere for free. Below are exact steps for
the two most reliable free options: GitHub Pages and Cloudflare Pages.
Either is a permanent, free home for jasbanks.com.

## Before you start: connect the contact form

The contact form (`contact.html` / `js/contact.js`) has already been
rewritten to work on any static host, using a free service called
Formspree, instead of this platform's database.

1. Go to https://formspree.io and create a free account.
2. Create a new form. Formspree will give you an endpoint URL that looks
   like `https://formspree.io/f/abcdwxyz`.
3. Open `contact.html` and find this line:
   `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>`
4. Replace `YOUR_FORM_ID` with your real Formspree form ID.
5. Submit the form once yourself after it is live. Formspree sends a
   one-time confirmation email; click the link in that email or future
   submissions will not reach your inbox.
6. Formspree's free tier allows 50 submissions per month, which is enough
   for a personal academic contact form. If you outgrow it, Formspree has
   paid tiers, or the form can be pointed to a different free provider
   later without changing anything else on the site.

## Option A: GitHub Pages (recommended if you already use git)

1. Create a free GitHub account at https://github.com if you do not have
   one.
2. Create a new repository, for example named `jasbanks-site`.
3. Upload every file from this project into that repository. You can do
   this by downloading the files from here and dragging them into
   GitHub's web upload interface, or by using git directly if you are
   comfortable with the command line.
4. In the repository, go to Settings > Pages.
5. Under "Build and deployment," set the source to "Deploy from a
   branch," choose the `main` branch and the root folder, then save.
6. GitHub will give you a live URL like
   `https://yourusername.github.io/jasbanks-site/`. Confirm the site
   works there first.
7. To use jasbanks.com instead of that GitHub URL, go to Settings > Pages
   > Custom domain, and enter `jasbanks.com`. GitHub will show you the
   exact DNS records to add.
8. Go to wherever jasbanks.com's DNS is managed (this is wherever the
   domain was registered, or wherever Wix currently points its DNS) and
   add the DNS records GitHub gave you. This usually means adding a few
   `A` records pointing to GitHub's IP addresses, plus a `CNAME` record
   for the `www` subdomain if you want `www.jasbanks.com` to work too.
9. DNS changes can take anywhere from a few minutes to 48 hours to take
   effect everywhere.

## Option B: Cloudflare Pages (recommended if you want speed and simplicity)

1. Create a free Cloudflare account at https://dash.cloudflare.com.
2. In the dashboard, go to Workers & Pages > Create > Pages.
3. Choose "Upload assets" if you do not want to use GitHub, or "Connect
   to Git" if you created a GitHub repository as in Option A and want
   automatic redeploys whenever you change a file.
4. Upload all the files from this project (or connect the repository).
5. Cloudflare will give you a live URL like
   `https://jasbanks-site.pages.dev`. Confirm the site works there first.
6. Go to your Pages project > Custom domains > Set up a custom domain,
   and enter `jasbanks.com`.
7. If jasbanks.com's domain is not already using Cloudflare for DNS,
   Cloudflare will walk you through changing your domain's nameservers to
   Cloudflare's. This is the standard way Cloudflare Pages connects a
   custom domain, and it also gives you free DNS management going
   forward.

## After the domain is moved

Once jasbanks.com resolves to your new host and the site is confirmed
working there, go back into your Wix account and cancel or downgrade the
Wix plan tied to this site, so you are not paying for hosting you no
longer use. Wix and your new host are entirely separate services; nothing
here automatically cancels Wix for you.

## What stays exactly the same either way

- All five pages (`index.html`, `research.html`, `publications.html`,
  `cv.html`, `contact.html`).
- The CSS (`css/style.css`) and the headshot image
  (`images/jasmine-banks-headshot.jpg`).
- The downloadable CV file (`files/Jasmine-Banks-CV.docx`).
- The visual design: JetBrains Mono, minimalist layout, muted palette.

No design or content changes are required to move hosts. Only the
contact form's backend (now Formspree) and the DNS pointing to the new
host need to be set up.

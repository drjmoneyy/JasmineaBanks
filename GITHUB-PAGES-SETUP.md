# GitHub Pages Setup Guide, Step by Step

This guide walks through moving jasbanks.com from this platform to
GitHub Pages, a free static site host operated by GitHub. No coding
experience is required. Every step is done through GitHub's website in
a normal browser.

Total time: roughly 30 to 45 minutes of active work, plus up to 48 hours
of waiting for DNS to fully update worldwide (usually much faster, often
under an hour).

---

## Part 1: Create a GitHub account

1. Go to https://github.com in your browser.
2. Click "Sign up" in the top right corner.
3. Enter an email address, create a password, and choose a username.
   Your username will appear in URLs, so something professional is worth
   using, for example a variation of your name.
4. Verify your email address using the confirmation email GitHub sends.
5. GitHub will ask you to choose a plan. Choose the **Free** plan. Free
   is fully sufficient for this site; you will never need to pay GitHub
   anything for what you are doing here.

---

## Part 2: Create a repository

A "repository" is simply a project folder that lives on GitHub.

1. Once logged in, click the **+** icon in the top right corner of any
   GitHub page, then choose **New repository**.
2. Under "Repository name," enter a name. A clear choice is
   `jasbanks-site` or simply `jasbanks.github.io` if your GitHub username
   is `jasbanks` (naming it `yourusername.github.io` exactly gives you a
   slightly simpler setup later, but it is not required, and the custom
   domain works either way).
3. Leave it set to **Public**. Public repositories are free and are
   required for free GitHub Pages hosting. Being public means anyone can
   see your website's source files, which is normal and expected for a
   published website, since the files are just the same HTML anyone's
   browser already downloads to view your site.
4. Do **not** check "Add a README file." Leave the repository empty for
   now.
5. Click **Create repository**.

You now have an empty project on GitHub, and GitHub will show you a page
with setup instructions. You can ignore those instructions and follow the
steps below instead, which do not require using the command line.

---

## Part 3: Upload your website files

1. On your new repository's page, click **uploading an existing file**
   (this link appears on the empty repository's main page), or click
   **Add file > Upload files** from the button near the top right.
2. You need to upload every file and folder from this project. The full
   list is:
   - `index.html`
   - `research.html`
   - `publications.html`
   - `cv.html`
   - `contact.html`
   - `README.md`
   - `DEPLOY.md`
   - the entire `css` folder (contains `style.css`)
   - the entire `js` folder (contains `contact.js`)
   - the entire `images` folder (contains the headshot photo)
   - the entire `files` folder (contains the downloadable CV)
3. First, download all of these files from this project to your own
   computer, keeping the same folder structure (`css/style.css`,
   `js/contact.js`, `images/jasmine-banks-headshot.jpg`,
   `files/Jasmine-Banks-CV.docx`, and the five `.html` files at the top
   level).
4. On the GitHub upload page, drag the entire folder (or all the files
   and subfolders at once) into the browser window where it says "Drag
   files here to add them to your repository." GitHub supports dragging
   whole folders, which will preserve the `css/`, `js/`, `images/`, and
   `files/` subfolder structure automatically.
5. Scroll down, and where it says "Commit changes," leave the default
   message or write something like "Add website files," then click
   **Commit changes** (the green button).
6. Wait for the upload to finish. When it is done, you should see all
   your files and folders listed on the repository's main page, matching
   the structure above.

**Important:** the folder structure must be preserved exactly. The site
will break if, for example, `style.css` ends up at the top level instead
of inside a `css` folder, because `index.html` and the other pages refer
to it as `css/style.css`.

---

## Part 4: Turn on GitHub Pages

1. On your repository's page, click the **Settings** tab (near the top,
   usually the rightmost tab, with a small gear icon).
2. In the left sidebar, scroll down and click **Pages**.
3. Under "Build and deployment," find the **Source** dropdown and choose
   **Deploy from a branch**.
4. Below that, under "Branch," choose **main** (this is usually the only
   option and is likely already selected), and leave the folder set to
   **/ (root)**.
5. Click **Save**.
6. GitHub will take a minute or two to publish the site. Refresh the
   Settings > Pages screen after a minute, and you should see a message
   near the top like "Your site is live at
   `https://yourusername.github.io/jasbanks-site/`."
7. Click that link and confirm the site loads correctly: check the
   homepage, click through to Research, Publications, CV, and Contact,
   and confirm the headshot image and CV download both work.

If something looks broken (for example, no styling at all, meaning the
page shows plain unstyled text), the most common cause is the `css`
folder not being in the right place. Go back to Part 3 and confirm the
folder structure in your repository matches exactly.

---

## Part 5: Connect jasbanks.com as your custom domain

Once the GitHub Pages URL works correctly, you can point your real domain
at it.

1. Still on the Settings > Pages screen, find the **Custom domain** field
   under "Custom domain."
2. Type `jasbanks.com` into that field and click **Save**.
3. GitHub will show a message saying the domain is not verified yet, and
   it will tell you the exact DNS records you need to add. GitHub uses
   specific IP addresses for this. As of this writing, GitHub Pages'
   published IP addresses are:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   GitHub's own Settings > Pages screen will always show you the current,
   correct values to use, so treat the list above as a reference and
   double check against what GitHub shows you at the time you do this.
4. You also have the option to make `www.jasbanks.com` work by adding a
   CNAME record, described below.

### Where to add these DNS records

DNS records are managed wherever jasbanks.com is currently pointed, not
inside GitHub. This is very likely either:
- The account where you originally registered the domain name, or
- Your Wix account, if Wix is also acting as your domain's DNS manager.

To check which one controls your domain's DNS, look at your domain
registration confirmation email, or log into Wix and go to your domain
settings; Wix will tell you whether it is managing DNS for jasbanks.com
or whether that happens through a separate registrar like GoDaddy,
Namecheap, or Google Domains.

Once you know where DNS is managed, go there and add the following
records. The exact screen layout differs slightly between providers, but
every DNS provider uses these same standard record types.

**For the root domain (jasbanks.com):**
Add four **A records**, all pointing the same host (`@`, or leave the
host field blank, meaning "the domain itself") to each of these four
addresses, one record per address:
```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

**For www.jasbanks.com (optional but recommended):**
Add one **CNAME record**:
```
Type: CNAME    Host: www    Value: yourusername.github.io
```
Replace `yourusername` with your actual GitHub username.

5. Save the DNS changes at your registrar or Wix.
6. Go back to GitHub's Settings > Pages screen and wait. GitHub will
   automatically detect the DNS change, usually within a few minutes to
   a few hours, and will show a green checkmark once jasbanks.com is
   verified.
7. Once verified, check the box for **Enforce HTTPS** on the same
   Settings > Pages screen. This makes sure visitors always see the
   secure padlock icon in their browser. This checkbox may be greyed out
   for a short time immediately after verification while GitHub issues a
   security certificate; check back within a few hours if so.

---

## Part 6: Confirm everything works

1. Visit `https://jasbanks.com` directly in your browser (not the GitHub
   URL) and confirm the site loads with the padlock icon showing HTTPS
   is active.
2. Click through every page: Home, Research, Publications, CV, Contact.
3. Test the contact form once yourself. Before this will work, you must
   have already completed the Formspree setup described in `DEPLOY.md`
   and this project's earlier instructions (creating a free Formspree
   account, replacing `YOUR_FORM_ID` in `contact.html` with your real
   form ID, and confirming Formspree's one-time verification email).
4. Confirm the CV download link works and the headshot image loads.

---

## Part 7: After the domain is confirmed working

1. Log into your Wix account.
2. Go to your Wix site's domain settings and disconnect jasbanks.com from
   the Wix site, since the domain is now pointed elsewhere.
3. Cancel or downgrade any Wix hosting plan tied specifically to that
   site, so you stop paying for hosting you are no longer using. Keep in
   mind this is separate from domain registration; if Wix is also your
   domain registrar, you do not need to cancel the domain registration
   itself, only the website hosting plan.

---

## If something goes wrong

- **The GitHub Pages URL shows a 404 error.** Wait a few more minutes;
  the first publish after enabling Pages can take up to ten minutes.
  If it persists, confirm `index.html` is at the very top level of the
  repository, not inside a subfolder.
- **The site loads but has no styling.** The `css` folder likely was not
  uploaded correctly, or ended up in the wrong place. Check the
  repository's file list against the structure in Part 3.
- **jasbanks.com never verifies on GitHub's Settings > Pages screen.**
  DNS changes can take up to 48 hours in rare cases, though it is usually
  much faster. Double check the exact IP addresses you entered match
  what GitHub currently shows on that screen, since GitHub occasionally
  updates these addresses.
- **The contact form does not send anything.** Confirm you replaced
  `YOUR_FORM_ID` in `contact.html` with your real Formspree form ID, and
  that you clicked the confirmation link in the email Formspree sent
  after your first test submission.

# jamiecarlson.fyi

Personal portfolio and résumé site for Jamie Carlson. Static — no build step, no
dependencies to install. Netlify serves the repo root exactly as it is.

---

## Editing the site

**`config.js` is the only file you normally need to touch.** It holds your links,
portrait, company logos, and the image carousel for every project. Change it, save,
reload. The instructions are in comments at the top of the file.

- **Swap an image:** overwrite the file in `images/` — no code change at all.
- **Reorder a carousel:** move the line in `config.js`.
- **Remove an image:** delete the line.

`index.html` holds the actual copy (headlines, job history, project write-ups).
`support.js` is the generated Claude Design runtime — don't edit it by hand.

---

## Deploying to Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/JFCG4mer/portfolio_resume.git
git push -u origin main
```

### 2. Connect Netlify

In Netlify: **Add new site → Import an existing project → GitHub →
`JFCG4mer/portfolio_resume`**.

Netlify reads `netlify.toml`, so the build settings fill themselves in:

| Setting | Value |
| --- | --- |
| Build command | *(empty)* |
| Publish directory | `.` |
| Branch | `main` |

Deploy. Every push to `main` redeploys automatically.

### 3. Point jamiecarlson.fyi at it

In **Site configuration → Domain management → Add a custom domain**, enter
`jamiecarlson.fyi`. Netlify will tell you which records to create at your registrar:

- **Apex** (`jamiecarlson.fyi`) → an `A` record to Netlify's load balancer,
  **or** switch the domain's nameservers to Netlify DNS (simpler, and it handles
  the apex properly).
- **`www`** → a `CNAME` to your `<site-name>.netlify.app` address.

`netlify.toml` already 301-redirects `www` → the bare apex, so the apex is canonical.

DNS takes anywhere from a few minutes to a few hours. Once it resolves, Netlify
provisions a Let's Encrypt certificate on its own — confirm **HTTPS → Force HTTPS**
is on afterward.

---

## The résumé

`/resume` is a friendly URL that currently forwards to the Google Drive copy.

To serve the PDF from your own domain instead, drop it in `resume/` and make the two
edits described in `resume/README.md`. Hosting it yourself means the link never breaks
if Drive permissions change, and it stops recruiters from hitting a Google sign-in wall.

---

## One thing to know about SEO

`support.js` renders the page in the browser using React loaded from a CDN. That works
fine for visitors, but the raw HTML a crawler receives is essentially empty — all your
job history and project copy is assembled by JavaScript after load.

Google generally executes JavaScript and will index it, though less reliably than
server-rendered HTML. Most other crawlers and link-preview bots do not. That's why the
title, description, and social-share tags live in the real `<head>` in `index.html`
rather than in the `<helmet>` block — those are the parts that need to work without JS,
so LinkedIn and iMessage previews render correctly.

If organic search ever matters more than it does today, the fix is to pre-render the
page to static HTML. Not worth doing now.

---

## Files

```
index.html        the page — all copy lives here
config.js         links, images, logos  ← edit this one
support.js        generated Design runtime — do not edit
404.html          branded not-found page
netlify.toml      redirects, headers, caching
favicon.svg       JC monogram
sitemap.xml       update lastmod when you make real changes
robots.txt
images/           portrait, logos, project screenshots
resume/           drop the PDF here
```

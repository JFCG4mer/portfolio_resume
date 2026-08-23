Drop your résumé PDF in this folder, named:

    Jamie-Carlson-Resume.pdf

Then make two edits so the site serves it from your own domain instead of Google Drive:

1. `config.js` — set `links.resume` to `'/resume/Jamie-Carlson-Resume.pdf'`
2. `netlify.toml` — in the `/resume` redirect, set
   `to = "/resume/Jamie-Carlson-Resume.pdf"` and `status = 200`

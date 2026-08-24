/**
 * Content loader.
 *
 * All site content now lives in content/site.json, which is what the CMS at
 * /admin reads and writes. This file just fetches it and hands it to the page.
 *
 * You can still edit content/site.json by hand — it is plain JSON. Just note
 * that JSON is stricter than JavaScript: double quotes only, and no trailing
 * comma after the last item in a list or object.
 */
(function () {
  var REVEAL_TIMEOUT = 2500;
  var root = document.documentElement;
  var revealed = false;

  // Hide until content lands so the page doesn't flash an empty layout.
  root.style.visibility = 'hidden';

  function reveal() {
    if (revealed) return;
    revealed = true;
    root.style.visibility = '';
  }

  // Safety net: if anything goes wrong, show the page regardless.
  setTimeout(reveal, REVEAL_TIMEOUT);

  window.SITE_CONFIG_READY = fetch('content/site.json', { cache: 'no-cache' })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      window.SITE_CONFIG = data;
      // Rebuild the legacy media map so older code paths keep working.
      window.SITE_CONFIG.media = (data.projects || []).reduce(function (acc, p) {
        acc[p.key] = p.media || [];
        return acc;
      }, {});
      setTimeout(reveal, 60);
      return data;
    })
    .catch(function (err) {
      console.error('Could not load content/site.json —', err.message);
      window.SITE_CONFIG = window.SITE_CONFIG || {};
      reveal();
      return window.SITE_CONFIG;
    });
})();

/**
 * Site configuration — edit this file, reload the page. No other code changes needed.
 *
 * MEDIA (carousels)
 *   Put your files anywhere in the repo (an `images/` folder is the obvious home) and list the
 *   paths here, in the order you want them shown. Paths are relative to this file.
 *   Supported: .jpg .jpeg .png .gif .webp .avif  and video .webm .mp4
 *   To replace an image, overwrite the file in your repo — no change here.
 *   To reorder, move the line. To remove, delete the line.
 *   A project with no entries shows a note instead of a carousel.
 *
 * LOGOS
 *   Path to each company logo. Leave "" to fall back to the colored monogram chip.
 *
 * Project keys: fox, gc, lego, legosw, espntc, espnstreak, trav, esi, sona
 */
window.SITE_CONFIG = {
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Résumé', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ],

  links: {
    resume: 'https://drive.google.com/file/d/1u9_no07YNnlS9O1cdkO1dfUU6ZrArpSP/view',
    portfolioPdf: 'https://docs.google.com/presentation/d/1uvMGs3uRrxjWqZL_B7b4cvCB9djvstx91inFUwFNdYI/edit',
    linkedin: 'https://www.linkedin.com/in/jamie-carlson-b480341/',
    email: ''
  },

  labels: {
    resume: 'Download résumé (PDF)',
    portfolioPdf: 'View product portfolio',
    linkedin: 'Connect on LinkedIn'
  },

  portrait: 'images/jamie-carlson.png',

  media: {
    fox: [
      'images/fox/FOX_SPT_1280px.jpg',
      'images/fox/FOX_SPT_S6_1280px.jpg'
    ],
    gc: [
      'images/gc/GC_1280px.jpg'
    ],
    lego: [
      'images/lego/LEGO_1_1280px.jpg',
      'images/lego/LEGO_2_1280px.jpg',
      'images/lego/LEGO_10_1280px.jpg',
      'images/lego/LEGO_11_LEGO_9_1280px.jpg',
      'images/lego/LEGO_11B_1280px.jpg',
      'images/lego/LEGO_12_1280px.jpg'
    ],
    legosw: [
      'images/legosw/LEGO_3_1280px.jpg',
      'images/legosw/LEGO_4_1280px.jpg',
      'images/legosw/LEGO_5_1280px.jpg',
      'images/legosw/LEGO_6_1280px.jpg',
      'images/legosw/LEGO_7_1280px.jpg',
      'images/legosw/LEGO_8_1280px.jpg',
      'images/legosw/LEGO_13_1280px.jpg'
    ],
    espntc: [
      'images/espntc/ESPN_1_1280px.webp',
      'images/espntc/ESPN_2_1280px.webp',
      'images/espntc/ESPN_3_1280px.webp'
    ],
    espnstreak: [
      'images/espnstreak/ESPN_4_1280px.webp',
      'images/espnstreak/ESPN_5_1280px.webp',
      'images/espnstreak/ESPN_6_1280px.webp',
      'images/espnstreak/ESPN_7_1280px.webp'
    ],
    trav: [
      'images/trav/TRV_1_1280px.jpg',
      'images/trav/TRV_2_1280px.jpg'
    ],
    esi: [
      'images/esi/EXP_1280px.jpg'
    ],
    sona: [
      'images/sona/SCS_1_1280px.webp',
      'images/sona/SCS_2_1280px.webp',
      'images/sona/SCS_3_1280px.webp'
    ]
  },

  logos: {
    fox: 'images/logos/fox.webp',
    gc: 'images/logos/gc.webp',
    esi: 'images/logos/esi.webp',
    trav: 'images/logos/trav.webp',
    lego: 'images/logos/lego.webp',
    espn: 'images/logos/espn.webp',
    sona: 'images/logos/sona.webp',
    vtech: 'images/logos/vtech.webp'
  },

  projectLinks: {
    // fox: [
    //   { label: 'foxsports.com', href: 'https://www.foxsports.com' }
    // ]
  }
};

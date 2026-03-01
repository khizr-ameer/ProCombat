/* ============================================================
   PROCOMBAT — Navigation Data
   Edit menu structure here — no touching HTML or components
   ============================================================ */

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
    children: []
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About Us',              href: '/pages/about.html' },
      { label: 'The ProCombat Difference', href: '/pages/proCombat-difference.html' }
    ]
  },
  {
    label: 'Products',
    href: '#',
    megaMenu: true,
    columns: [
      {
        heading: 'BJJ',
        href: '/pages/products.html?cat=bjj',
        items: [
          { label: 'BJJ Kimonos',        href: '/pages/products.html?cat=bjj-kimonos' },
          { label: 'BJJ Belts',          href: '/pages/products.html?cat=bjj-belts' },
          { label: 'BJJ Protective Gear',href: '/pages/products.html?cat=bjj-protective' },
          { label: 'BJJ Gi Bags',        href: '/pages/products.html?cat=bjj-bags' }
        ]
      },
      {
        heading: 'MMA',
        href: '/pages/products.html?cat=mma',
        items: [
          { label: 'Rashguard',             href: '/pages/products.html?cat=rashguard' },
          { label: 'Grappling Spats',       href: '/pages/products.html?cat=grappling-spats' },
          { label: 'Vale Tudo Shorts',      href: '/pages/products.html?cat=vale-tudo' },
          { label: 'Fight Shorts',          href: '/pages/products.html?cat=fight-shorts' },
          { label: 'MMA Gloves',            href: '/pages/products.html?cat=mma-gloves' },
          { label: 'Wrestling Singlet',     href: '/pages/products.html?cat=wrestling-singlet' }
        ]
      },
      {
        heading: 'Athleisure',
        href: '/pages/products.html?cat=athleisure',
        items: [
          { label: 'Duffle Bags',       href: '/pages/products.html?cat=duffle-bags' },
          { label: 'Athleisure Pants',  href: '/pages/products.html?cat=athleisure-pants' },
          { label: 'T-Shirts',          href: '/pages/products.html?cat=tshirts' },
          { label: 'Hoodies',           href: '/pages/products.html?cat=hoodies' },
          { label: 'Gym & Fitness',     href: '/pages/products.html?cat=gym-fitness' },
          { label: 'Leisure Apparels',  href: '/pages/products.html?cat=leisure' }
        ]
      },
      {
        heading: 'Boxing Gear',
        href: '/pages/products.html?cat=boxing',
        items: [
          { label: 'Boxing Gloves',     href: '/pages/products.html?cat=boxing-gloves' },
          { label: 'Boxing Equipment',  href: '/pages/products.html?cat=boxing-equipment' },
          { label: 'Boxing Robes',      href: '/pages/products.html?cat=boxing-robes' },
          { label: 'Tank Top & Shorts', href: '/pages/products.html?cat=boxing-apparel' },
          { label: 'Focus Pads',        href: '/pages/products.html?cat=focus-pads' },
          { label: 'Head Gear',         href: '/pages/products.html?cat=head-gear' },
          { label: 'Muay Thai',         href: '/pages/products.html?cat=muay-thai' },
          { label: 'Punching Bags',     href: '/pages/products.html?cat=punching-bags' }
        ]
      },
      {
        heading: 'Martial Arts',
        href: '/pages/products.html?cat=martial-arts',
        items: [
          { label: 'Judo',              href: '/pages/products.html?cat=judo' },
          { label: 'Karate',            href: '/pages/products.html?cat=karate' },
          { label: 'Ninja Equipment',   href: '/pages/products.html?cat=ninja' },
          { label: 'Sambo',             href: '/pages/products.html?cat=sambo' },
          { label: 'Taekwondo',         href: '/pages/products.html?cat=taekwondo' },
          { label: 'Kung Fu / Hapkido', href: '/pages/products.html?cat=kung-fu' },
          { label: 'Training Tracksuit',href: '/pages/products.html?cat=tracksuit' }
        ]
      }
    ]
  },
  {
    label: 'Departments',
    href: '#',
    children: [
      { label: 'Printing',    href: '/pages/printing.html' },
      { label: 'Embroidery',  href: '/pages/embroidery.html' }
    ]
  },
  {
    label: 'Product Info',
    href: '#',
    children: [
      { label: 'Fabrics',    href: '/pages/fabrics.html' },
      { label: 'Templates',  href: '/pages/templates.html' }
    ]
  },
  {
    label: 'Contact',
    href: '/pages/contact.html',
    children: []
  }
];

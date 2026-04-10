/* ============================================================
   PROCOMBAT — Navigation Data
   Edit menu structure here — no touching HTML or components

   FIXED: All slugs now match categories.js exactly
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
      { label: 'About Us',                 href: '/pages/about.html' },
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
          { label: 'BJJ Kimonos',         href: '/pages/products.html?cat=bjj-kimonos' },
          { label: 'BJJ Belts',           href: '/pages/products.html?cat=bjj-belts' },
          { label: 'BJJ Protective Gear', href: '/pages/products.html?cat=bjj-protective' },
          { label: 'BJJ Gi Bags',         href: '/pages/products.html?cat=bjj-bags' }
        ]
      },
      {
        heading: 'MMA',
        href: '/pages/products.html?cat=mma',
        items: [
          { label: 'Rashguard',                  href: '/pages/products.html?cat=rashguard' },
          { label: 'Grappling Spats & Trousers', href: '/pages/products.html?cat=grappling-spats' },
          { label: 'Vale Tudo Shorts',           href: '/pages/products.html?cat=vale-tudo' },
          { label: 'Fight Shorts',               href: '/pages/products.html?cat=fight-shorts' },
          { label: 'MMA Gloves',                 href: '/pages/products.html?cat=mma-gloves' },
          { label: 'Wrestling Singlet',          href: '/pages/products.html?cat=wrestling-singlet' }
        ]
      },
      {
        heading: 'Athleisure',
        href: '/pages/products.html?cat=athleisure',
        items: [
          { label: 'Duffle Bag',                       href: '/pages/products.html?cat=duffle-bag' },
          { label: 'Athleisure Pant',                  href: '/pages/products.html?cat=athleisure-pant' },
          { label: 'T-Shirts',                         href: '/pages/products.html?cat=t-shirts' },
          { label: 'Hoodies',                          href: '/pages/products.html?cat=hoodies' },
          { label: 'Gym & Fitness',                    href: '/pages/products.html?cat=gym-fitness' },
          { label: 'Hip Hop Street Basketball Short',  href: '/pages/products.html?cat=hiphop-shorts' },
          { label: 'Leisure Apparels',                 href: '/pages/products.html?cat=leisure-apparels' }
        ]
      },
      {
        heading: 'Boxing Gear',
        href: '/pages/products.html?cat=boxing',
        items: [
          { label: 'Boxing Gloves',           href: '/pages/products.html?cat=boxing-gloves' },
          { label: 'Boxing Gear',             href: '/pages/products.html?cat=boxing-gear-items' },
          { label: 'Boxing Robe',             href: '/pages/products.html?cat=boxing-robe' },
          { label: 'Boxing Tank Top & Short', href: '/pages/products.html?cat=boxing-tank' },
          { label: 'Focus Pads',              href: '/pages/products.html?cat=focus-pads' },
          { label: 'Head Gear',               href: '/pages/products.html?cat=head-gear' },
          { label: 'Muay Thai',               href: '/pages/products.html?cat=muay-thai' },
          { label: 'Punching & Striking Bag', href: '/pages/products.html?cat=punching-bag' }
        ]
      },
      {
        heading: 'Martial Arts',
        href: '/pages/products.html?cat=martial-arts',
        items: [
          { label: 'Judo',                        href: '/pages/products.html?cat=judo' },
          { label: 'Karate Equipments',           href: '/pages/products.html?cat=karate' },
          { label: 'Ninja Equipments',            href: '/pages/products.html?cat=ninja' },
          { label: 'Sambo',                       href: '/pages/products.html?cat=sambo' },
          { label: 'Taekwondo',                   href: '/pages/products.html?cat=taekwondo' },
          { label: 'Tai Chi / Kung Fu / Hapkido', href: '/pages/products.html?cat=tai-chi' },
          { label: 'Training / Tracksuit',        href: '/pages/products.html?cat=tracksuit' }
        ]
      }
    ]
  },
  {
    label: 'Departments',
    href: '#',
    children: [
      { label: 'Printing',   href: '/pages/printing.html' },
      { label: 'Embroidery', href: '/pages/embroidery.html' }
    ]
  },
  {
    label: 'Product Info',
    href: '#',
    children: [
      { label: 'Fabrics',   href: '/pages/fabrics.html' },
      { label: 'Templates', href: '/pages/templates.html' }
    ]
  },
  {
    label: 'Contact',
    href: '/pages/contact.html',
    children: []
  }
];
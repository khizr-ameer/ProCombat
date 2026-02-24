/* ============================================================
   PROCOMBAT — Categories & Subcategories
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   HOW TO UPDATE:
   ━━━━━━━━━━━━━━
   ✅ Add a new MAIN category:
      Copy one of the objects below and add it to CATEGORIES.
      Give it a unique `id`, `label`, and `slug`.

   ✅ Add a SUBCATEGORY:
      Find the category, then add to its `subcategories` array:
      { id: 'your-id', label: 'Display Name', slug: 'url-slug', href: '/pages/products.html?cat=url-slug' }

   ✅ Remove a category or subcategory:
      Delete the object from the array.

   ✅ Rename: Change only the `label` field.
      Do NOT change `slug` — used in URLs and product data.

   ⚠️  After renaming a slug, update `category` in products.js too.
   ============================================================ */

export const CATEGORIES = [
  {
    id: 'bjj',
    label: 'BJJ',
    slug: 'bjj',
    href: '/pages/products.html?cat=bjj',
    bannerImage: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/cat1.jpg',
    description: 'Premium Brazilian Jiu-Jitsu gear crafted for champions.',
    subcategories: [
      { id: 'bjj-kimonos',    label: 'BJJ Kimonos',        slug: 'bjj-kimonos',    href: '/pages/products.html?cat=bjj-kimonos' },
      { id: 'bjj-belts',      label: 'BJJ Belts',          slug: 'bjj-belts',      href: '/pages/products.html?cat=bjj-belts' },
      { id: 'bjj-protective', label: 'BJJ Protective Gear',slug: 'bjj-protective', href: '/pages/products.html?cat=bjj-protective' },
      { id: 'bjj-bags',       label: 'BJJ Gi Bags',        slug: 'bjj-bags',       href: '/pages/products.html?cat=bjj-bags' },
    ]
  },
  {
    id: 'mma',
    label: 'MMA',
    slug: 'mma',
    href: '/pages/products.html?cat=mma',
    bannerImage: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/cat1.jpg',
    description: 'Mixed Martial Arts apparel and gear built for the cage.',
    subcategories: [
      { id: 'rashguard',         label: 'Rashguard',                  slug: 'rashguard',         href: '/pages/products.html?cat=rashguard' },
      { id: 'grappling-spats',   label: 'Grappling Spats & Trousers', slug: 'grappling-spats',   href: '/pages/products.html?cat=grappling-spats' },
      { id: 'vale-tudo',         label: 'Vale Tudo Shorts',           slug: 'vale-tudo',         href: '/pages/products.html?cat=vale-tudo' },
      { id: 'fight-shorts',      label: 'Fight Shorts',               slug: 'fight-shorts',      href: '/pages/products.html?cat=fight-shorts' },
      { id: 'mma-gloves',        label: 'MMA Gloves',                 slug: 'mma-gloves',        href: '/pages/products.html?cat=mma-gloves' },
      { id: 'wrestling-singlet', label: 'Wrestling Singlet',          slug: 'wrestling-singlet', href: '/pages/products.html?cat=wrestling-singlet' },
    ]
  },
  {
    id: 'boxing',
    label: 'Boxing Gear',
    slug: 'boxing',
    href: '/pages/products.html?cat=boxing',
    bannerImage: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/cat1.jpg',
    description: 'Professional boxing equipment crafted for performance.',
    subcategories: [
      { id: 'boxing-gloves',     label: 'Boxing Gloves',           slug: 'boxing-gloves',     href: '/pages/products.html?cat=boxing-gloves' },
      { id: 'boxing-gear-items', label: 'Boxing Gear',             slug: 'boxing-gear-items', href: '/pages/products.html?cat=boxing-gear-items' },
      { id: 'boxing-robe',       label: 'Boxing Robe',             slug: 'boxing-robe',       href: '/pages/products.html?cat=boxing-robe' },
      { id: 'boxing-tank',       label: 'Boxing Tank Top & Short', slug: 'boxing-tank',       href: '/pages/products.html?cat=boxing-tank' },
      { id: 'focus-pads',        label: 'Focus Pads',              slug: 'focus-pads',        href: '/pages/products.html?cat=focus-pads' },
      { id: 'head-gear',         label: 'Head Gear',               slug: 'head-gear',         href: '/pages/products.html?cat=head-gear' },
      { id: 'muay-thai',         label: 'Muay Thai',               slug: 'muay-thai',         href: '/pages/products.html?cat=muay-thai' },
      { id: 'punching-bag',      label: 'Punching & Striking Bag', slug: 'punching-bag',      href: '/pages/products.html?cat=punching-bag' },
    ]
  },
  {
    id: 'athleisure',
    label: 'Athleisure Wear',
    slug: 'athleisure',
    href: '/pages/products.html?cat=athleisure',
    bannerImage: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/cat1.jpg',
    description: 'Style meets performance for training and everyday life.',
    subcategories: [
      { id: 'duffle-bag',       label: 'Duffle Bag',                      slug: 'duffle-bag',       href: '/pages/products.html?cat=duffle-bag' },
      { id: 'athleisure-pant',  label: 'Athleisure Pant',                 slug: 'athleisure-pant',  href: '/pages/products.html?cat=athleisure-pant' },
      { id: 't-shirts',         label: 'T-Shirts',                        slug: 't-shirts',         href: '/pages/products.html?cat=t-shirts' },
      { id: 'hoodies',          label: 'Hoodies',                         slug: 'hoodies',          href: '/pages/products.html?cat=hoodies' },
      { id: 'gym-fitness',      label: 'Gym & Fitness',                   slug: 'gym-fitness',      href: '/pages/products.html?cat=gym-fitness' },
      { id: 'hiphop-shorts',    label: 'Hip Hop Street Basketball Short', slug: 'hiphop-shorts',    href: '/pages/products.html?cat=hiphop-shorts' },
      { id: 'leisure-apparels', label: 'Leisure Apparels',                slug: 'leisure-apparels', href: '/pages/products.html?cat=leisure-apparels' },
    ]
  },
  {
    id: 'martial-arts',
    label: 'All Martial Arts',
    slug: 'martial-arts',
    href: '/pages/products.html?cat=martial-arts',
    bannerImage: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/cat1.jpg',
    description: 'Complete range for every martial art discipline.',
    subcategories: [
      { id: 'judo',      label: 'Judo',                       slug: 'judo',      href: '/pages/products.html?cat=judo' },
      { id: 'karate',    label: 'Karate Equipments',          slug: 'karate',    href: '/pages/products.html?cat=karate' },
      { id: 'ninja',     label: 'Ninja Equipments',           slug: 'ninja',     href: '/pages/products.html?cat=ninja' },
      { id: 'sambo',     label: 'Sambo',                      slug: 'sambo',     href: '/pages/products.html?cat=sambo' },
      { id: 'taekwondo', label: 'Taekwondo',                  slug: 'taekwondo', href: '/pages/products.html?cat=taekwondo' },
      { id: 'tai-chi',   label: 'Tai Chi / Kung Fu / Hapkido',slug: 'tai-chi',   href: '/pages/products.html?cat=tai-chi' },
      { id: 'tracksuit', label: 'Training / Tracksuit',       slug: 'tracksuit', href: '/pages/products.html?cat=tracksuit' },
    ]
  },
];

/** Find a category or subcategory by slug */
export function findBySlug(slug) {
  for (const cat of CATEGORIES) {
    if (cat.slug === slug) return { ...cat, isParent: true };
    for (const sub of cat.subcategories) {
      if (sub.slug === slug) return { ...sub, parent: cat, isParent: false };
    }
  }
  return null;
}

/** Get parent category for a subcategory slug */
export function getParent(slug) {
  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      if (sub.slug === slug) return cat;
    }
  }
  return null;
}

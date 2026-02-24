/* ============================================================
   PROCOMBAT — Products Data
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   HOW TO UPDATE PRODUCTS:
   ━━━━━━━━━━━━━━━━━━━━━━━
   ✅ Add a new product:
      Copy any product object and add it to the ALL_PRODUCTS array.
      Give it a unique numeric `id`.

   ✅ Change a product image:
      Find the product by its `id`, then change the `image` URL.
      For multiple images (detail page), update the `images` array.
      Put your own image paths like: '/assets/images/my-product.jpg'

   ✅ Move a product to a different category:
      Change the `category` value to match a slug from categories.js.
      E.g. change 'bjj-kimonos' to 'bjj-belts'.

   ✅ Remove a product:
      Delete the object from ALL_PRODUCTS.

   ✅ Add to homepage Featured section:
      Set `featured: true` on the product.

   CATEGORY SLUGS — must match exactly what's in categories.js:
   bjj-kimonos | bjj-belts | bjj-protective | bjj-bags
   rashguard | grappling-spats | vale-tudo | fight-shorts | mma-gloves | wrestling-singlet
   boxing-gloves | boxing-gear-items | boxing-robe | boxing-tank | focus-pads | head-gear | muay-thai | punching-bag
   duffle-bag | athleisure-pant | t-shirts | hoodies | gym-fitness | hiphop-shorts | leisure-apparels
   judo | karate | ninja | sambo | taekwondo | tai-chi | tracksuit
   ============================================================ */

export const ALL_PRODUCTS = [

  /* ── BJJ KIMONOS ─────────────────────────────────────── */
  {
    id: 1,
    name: 'White Brazilian Jiu Jitsu Gi',
    category: 'bjj-kimonos',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-1-scaled-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-1-scaled-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_7214-copy-scaled-1-800x1203.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_7217-copy-scaled-1-800x1203.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_7284-copy-scaled-1-800x532.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_7285-copy-scaled-1-800x682.jpg',
    ],
    description: 'Professional-grade white Brazilian Jiu Jitsu Gi crafted from premium pearl weave cotton. Designed for competition and daily training, featuring reinforced stitching at all stress points and a comfortable preshrunk fabric.',
    specs: [
      { label: 'Material', value: 'Pearl Weave Cotton' },
      { label: 'Weight', value: '450 GSM' },
      { label: 'Sizes', value: 'A0 – A5, M0 – M4' },
      { label: 'Colors', value: 'White, Blue, Black' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 2,
    name: 'White Jiu Jitsu Gi',
    category: 'bjj-kimonos',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-2-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-2-scaled-1-500x500.jpg',
    ],
    description: 'Classic white Jiu Jitsu Gi featuring a lightweight single weave construction. Ideal for hot weather training. Reinforced collar and lapel for grip resistance.',
    specs: [
      { label: 'Material', value: 'Single Weave Cotton' },
      { label: 'Weight', value: '350 GSM' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 3,
    name: 'Black Brazilian Jiu Jitsu Gi',
    category: 'bjj-kimonos',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-scaled-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-scaled-3-500x500.jpg',
    ],
    description: 'Sleek black Brazilian Jiu Jitsu Gi with a gold weave construction offering durability and a premium look. Perfect for advanced practitioners.',
    specs: [
      { label: 'Material', value: 'Gold Weave Cotton' },
      { label: 'Weight', value: '500 GSM' },
      { label: 'Sizes', value: 'A0 – A5, M0 – M4' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 4,
    name: 'Black Jiu Jitsu Gi',
    category: 'bjj-kimonos',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-scaled-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-scaled-3-500x500.jpg',
    ],
    description: 'Competition-ready black Jiu Jitsu Gi with IBJJF compliant design. Double weave reinforcement for maximum durability.',
    specs: [
      { label: 'Material', value: 'Double Weave Cotton' },
      { label: 'Weight', value: '600 GSM' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 5,
    name: 'Brazilian Jiu Jitsu Pro — 17670',
    category: 'bjj-kimonos',
    badge: null,
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-scaled-1-500x500.jpg',
    ],
    description: 'Custom pro series BJJ Gi with embroidery-ready panels. Suitable for team orders with logo customization.',
    specs: [
      { label: 'Material', value: 'Pearl Weave' },
      { label: 'Sizes', value: 'A0 – A5, M0 – M4' },
      { label: 'Customization', value: 'Full embroidery & print' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 6,
    name: 'Brazilian Jiu Jitsu Pro — 17671',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/13-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/13-scaled-1-500x500.jpg',
    ],
    description: 'Mid-weight competition Gi with slim-fit cut for faster movement on the mat.',
    specs: [
      { label: 'Material', value: 'Pearl Weave' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 7,
    name: 'Brazilian Jiu Jitsu Pro — 17672',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-1-scaled-1-500x500.jpg',
    ],
    description: 'Lightweight training Gi designed for daily mat sessions. Quick-dry fabric with moisture-wicking lining.',
    specs: [
      { label: 'Material', value: 'Ripstop Cotton' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 8,
    name: 'Brazilian Jiu Jitsu Pro — 17673',
    category: 'bjj-kimonos',
    badge: null,
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-scaled-1-500x500.jpg',
    ],
    description: 'Ultra-lightweight BJJ Gi for hot weather. Honeycomb weave provides breathability without sacrificing strength.',
    specs: [
      { label: 'Material', value: 'Honeycomb Weave' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 9,
    name: 'Brazilian Jiu Jitsu Pro — 17674',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-scaled-1-500x500.jpg',
    ],
    description: 'Team edition BJJ Gi available in multiple colors. Perfect for academies and clubs.',
    specs: [
      { label: 'Material', value: 'Pearl Weave' },
      { label: 'Colors', value: 'White, Blue, Black, Gray' },
      { label: 'MOQ', value: '20 pieces per color' },
      { label: 'Lead Time', value: '4–5 weeks' },
    ],
  },
  {
    id: 10,
    name: 'Brazilian Jiu Jitsu Pro — 17675',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/21-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/21-scaled-1-500x500.jpg',
    ],
    description: 'Ladies fit BJJ Gi with tapered cut and shorter hem. Available in women-specific sizing.',
    specs: [
      { label: 'Material', value: 'Pearl Weave' },
      { label: 'Sizes', value: 'F1 – F5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 11,
    name: 'Brazilian Jiu Jitsu Pro — 17676',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/25-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/25-scaled-1-500x500.jpg',
    ],
    description: 'Heritage series Gi inspired by traditional designs. Full custom embroidery available.',
    specs: [
      { label: 'Material', value: 'Double Weave' },
      { label: 'Sizes', value: 'A0 – A5' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '4 weeks' },
    ],
  },
  {
    id: 12,
    name: 'Brazilian Jiu Jitsu Pro — 17677',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/29-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/29-scaled-1-500x500.jpg',
    ],
    description: 'Competition grade Gi meeting all IBJJF and NAGA requirements. Available in white, blue and black.',
    specs: [
      { label: 'Material', value: 'Pearl Weave' },
      { label: 'Certification', value: 'IBJJF Compliant' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  /* ── KIDS GI ─────────────────────────────────────────── */
  {
    id: 13,
    name: 'Baby Gi & Toddler Gi — Kids BJJ Uniform',
    category: 'bjj-kimonos',
    badge: 'Kids',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-500x500.jpg',
    ],
    description: 'Specially designed BJJ Gi for babies and toddlers. Ultra-soft cotton blend with no rough edges. Safe for young practitioners just starting their BJJ journey.',
    specs: [
      { label: 'Material', value: 'Soft Cotton Blend' },
      { label: 'Sizes', value: 'M00 – M2 (Ages 2–8)' },
      { label: 'Colors', value: 'White, Blue' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  /* ── FIGHT SHORTS ────────────────────────────────────── */
  {
    id: 14,
    name: 'MMA Fight Shorts — Pro Series',
    category: 'fight-shorts',
    badge: null,
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-500x500.jpg',
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Shark-skin grip panels on inner thighs for grappling.',
    specs: [
      { label: 'Material', value: 'Polyester / Elastane blend' },
      { label: 'Sizes', value: 'S – 3XL' },
      { label: 'Colors', value: 'Full custom printing' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' },
    ],
  },

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HELPER FUNCTIONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** Get products for a specific category slug */
export function getByCategory(slug) {
  return ALL_PRODUCTS.filter(p => p.category === slug);
}

/** Get products for a parent category (includes all subcategories) */
export function getByParentCategory(parentSlug, CATEGORIES) {
  const cat = CATEGORIES.find(c => c.slug === parentSlug);
  if (!cat) return [];
  const slugs = [cat.slug, ...cat.subcategories.map(s => s.slug)];
  return ALL_PRODUCTS.filter(p => slugs.includes(p.category));
}

/** Get featured products for homepage carousel */
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => p.featured);

/** Get a single product by ID */
export function getById(id) {
  return ALL_PRODUCTS.find(p => p.id === Number(id)) || null;
}

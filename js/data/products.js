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
    featured: true,
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
  // {
  //   id: 13,
  //   name: 'Baby Gi & Toddler Gi — Kids BJJ Uniform',
  //   category: 'bjj-kimonos',
  //   badge: 'Kids',
  //   featured: true,
  //   image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-500x500.jpg',
  //   images: [
  //     'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-500x500.jpg',
  //   ],
  //   description: 'Specially designed BJJ Gi for babies and toddlers. Ultra-soft cotton blend with no rough edges. Safe for young practitioners just starting their BJJ journey.',
  //   specs: [
  //     { label: 'Material', value: 'Soft Cotton Blend' },
  //     { label: 'Sizes', value: 'M00 – M2 (Ages 2–8)' },
  //     { label: 'Colors', value: 'White, Blue' },
  //     { label: 'MOQ', value: '10 pieces' },
  //     { label: 'Lead Time', value: '3–4 weeks' },
  //   ],
  // },

  // /* ── FIGHT SHORTS ────────────────────────────────────── */
  // {
  //   id: 14,
  //   name: 'MMA Fight Shorts — Pro Series',
  //   category: 'fight-shorts',
  //   badge: null,
  //   featured: true,
  //   image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-500x500.jpg',
  //   images: [
  //     'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-500x500.jpg',
  //   ],
  //   description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Shark-skin grip panels on inner thighs for grappling.',
  //   specs: [
  //     { label: 'Material', value: 'Polyester / Elastane blend' },
  //     { label: 'Sizes', value: 'S – 3XL' },
  //     { label: 'Colors', value: 'Full custom printing' },
  //     { label: 'MOQ', value: '10 pieces' },
  //     { label: 'Lead Time', value: '2–3 weeks' },
  //   ],
  // },

  /* ── BJJ KIMONOS continued (IDs 13–24) ── */
  /* FIXED: images arrays now contain only 800x800 versions — no full-size duplicates */

  {
    id: 13,
    name: 'Brazilian Jiu Jitsu Pro-17678',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/33-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/33-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/34-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/35-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/36-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0038-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0037-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 14,
    name: 'Brazilian Jiu Jitsu Pro-17679',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/37-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/37-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/38-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/40-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/39-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0037-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0038-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'Black, Blue, White' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 15,
    name: 'Brazilian Jiu Jitsu Pro-17680',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-a-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/jiu-jitsu-Black-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-kids-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-Pink-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Jiu-Jitsu-Gi-Pink-b-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'Grey, White, Pink, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 16,
    name: 'Brazilian Jiu Jitsu Pro-17681',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/41-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/41-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/42-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/43-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/44-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0037-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0038-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 17,
    name: 'Brazilian Jiu Jitsu Pro-17682',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/45-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/45-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/46-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/47-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/48-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0037-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0038-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 18,
    name: 'Brazilian Jiu Jitsu Pro-17683',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/49-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/49-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/50-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/51-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/52-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0040-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0041-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 19,
    name: 'Brazilian Jiu Jitsu Pro-17684',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/53-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/53-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/50-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/51-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/52-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0040-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0041-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 20,
    name: 'Brazilian Jiu Jitsu Pro-17685',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/57-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/57-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/50-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/51-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/52-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0040-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0041-copy-scaled-1-800x800.jpg',
    ],
    description: 'Professional BJJ Gi crafted from premium pearl weave cotton. Reinforced stitching at all stress points with a comfortable preshrunk fit. Available in custom colors with full embroidery.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 21,
    name: 'Brazilian Jiu Jitsu Pro-17686',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/61-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/61-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/62-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/63-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/64-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0033-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0032-copy-scaled-1-800x800.jpg',
    ],
    description: 'Competition-ready BJJ Gi meeting all IBJJF requirements. Double weave reinforcement ensures maximum durability through intense training sessions.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 22,
    name: 'Brazilian Jiu Jitsu Pro-17687',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/65-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/65-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/62-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/63-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/64-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0033-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0032-copy-scaled-1-800x800.jpg',
    ],
    description: 'Competition-ready BJJ Gi meeting all IBJJF requirements. Double weave reinforcement ensures maximum durability through intense training sessions.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 23,
    name: 'Brazilian Jiu Jitsu Pro-17688',
    category: 'bjj-kimonos',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/69-1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/69-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/62-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/63-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/64-1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0033-copy-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_0032-copy-scaled-1-800x800.jpg',
    ],
    description: 'Competition-ready BJJ Gi meeting all IBJJF requirements. Double weave reinforcement ensures maximum durability through intense training sessions.',
    specs: [
      { label: 'Material',  value: 'Pearl Weave Cotton' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'A0 – A5, M0 – M4' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },

  {
    id: 24,
    name: 'Baby Gi & Toddler Gi / Baby Kimonos / Baby BJJ Uniforms-17577',
    category: 'bjj-kimonos',
    badge: 'Kids',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81RcSIdynNL._AC_UY1000_-800x760.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/71X6xkWFKL._AC_UX569_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81EDmIjDKhL._AC_UX569_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81-IpgCxF8L._AC_UX569_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81Rnd3unLiL._AC_SX569._SX._UX._SY._UY_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/817nMWHzDCL._AC_UX569_.jpg',
    ],
    description: 'Specially designed BJJ Gi for young practitioners. Ultra-soft cotton blend with no rough edges, safe and comfortable for children starting their BJJ journey.',
    specs: [
      { label: 'Material',  value: 'Soft Cotton Blend' },
      { label: 'Weight',    value: '450 GSM' },
      { label: 'Sizes',     value: 'M00 – M2 (Ages 2–8)' },
      { label: 'Colors',    value: 'White, Blue, Black' },
      { label: 'MOQ',       value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' },
    ],
  },
  {
    id: 25,
    name: 'Brazilian Jiu Jitsu Baby gi and  Toddler gi / Baby Kimonos / Baby BJJ uniforms-17670',
    category: 'bjj-kimonos',
    badge: 'Kids',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/611gGMCMqeS._AC_SL1500_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/611gGMCMqeS._AC_SL1500_-800x626.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/611gGMCMqeS._AC_SL1500_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/71A6Vc6LDxL._AC_SX569._SX._UX._SY._UY_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/71BpKwd8flL._AC_SX569._SX._UX._SY._UY_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/71-UGwTBp-L._AC_UX569_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/813eLj5b2MS._AC_SX569._SX._UX._SY._UY_.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/71GSUhkGpyS._AC_SX569._SX._UX._SY._UY_.jpg'
    ],
    description: 'Specially designed BJJ Gi for young practitioners. Ultra-soft cotton blend with no rough edges, safe and comfortable for children starting their BJJ journey.',
    specs: [
      { label: 'Material', value: 'Soft Cotton Blend' },
      { label: 'Weight', value: '450 GSM' },
      { label: 'Sizes', value: 'M00 – M2 (Ages 2–8)' },
      { label: 'Colors', value: 'White, Blue, Black' },
      { label: 'MOQ', value: '10 pieces' },
      { label: 'Lead Time', value: '3–4 weeks' }
    ],
  },

    {
    id: 26,
    name: 'Brazilian Jiu Jitsu Pro-17560',
    category: 'bjj-belts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17560-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17560-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17560-2-800x800.jpg'
    ],
    description: 'Durable BJJ belt crafted from heavy cotton twill. Bar-tack stitched ends for long-lasting wear. Available in all IBJJF approved colors.',
    specs: [
      { label: 'Material', value: 'Heavy Cotton Twill' },
      { label: 'Width', value: '4 cm' },
      { label: 'Colors', value: 'Grey/White, Yellow, Orange, Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 27,
    name: 'Brazilian Jiu Jitsu Pro-17561',
    category: 'bjj-belts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-scaled-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-scaled-1-800x800.jpg'
    ],
    description: 'Durable BJJ belt crafted from heavy cotton twill. Bar-tack stitched ends for long-lasting wear. Available in all IBJJF approved colors.',
    specs: [
      { label: 'Material', value: 'Heavy Cotton Twill' },
      { label: 'Width', value: '4 cm' },
      { label: 'Colors', value: 'White, Blue, Purple, Brown, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 28,
    name: 'Karate Belts Pro-17624',
    category: 'bjj-belts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Belts-Pro-17624-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Belts-Pro-17624-800x800.jpg'
    ],
    description: 'Durable BJJ belt crafted from heavy cotton twill. Bar-tack stitched ends for long-lasting wear. Available in all IBJJF approved colors.',
    specs: [
      { label: 'Material', value: 'Heavy Cotton Twill' },
      { label: 'Width', value: '4 cm' },
      { label: 'Colors', value: 'Yellow/White, Green/Yellow, Red/Blue, Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

    {
    id: 29,
    name: 'Elbow Pad-159723',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/13-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/13-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/11-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/12-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/14-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/15-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/16-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-800x800.jpg'
    ],
    description: 'One Piece Sport Elbow Brace Compression Elastic Support Sleeve Fitness Protection Elbow Pad',
    specs: [
      { label: 'Material', value: 'Neoprene / Nylon Blend' },
      { label: 'Width', value: 'N/A (Adjustable Straps)' },
      { label: 'Colors', value: 'Blue, Black, Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 30,
    name: 'Groin Guard-159720',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Groin-Guard-4-800x800.jpg'
    ],
    description: 'High grade Taekwondo Groin Guard Protector Men Women Children Crotch Protector Kiching Boxing Karate High Quality support',
    specs: [
      { label: 'Material', value: 'Synthetic Leather / Plastic Insert' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Black, White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 31,
    name: 'Groin Guard-159721',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/18-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/18-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/19-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/20-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/21-800x800.jpg'
    ],
    description: 'High grade White Taekwondo Groin Guard Protector Men Women Children Crotch Protector Kiching Boxing Karate High Quality support',
    specs: [
      { label: 'Material', value: 'Synthetic Leather / Plastic Insert' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Black, White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 32,
    name: 'Groin Guard-159722',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-5-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/7-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-5-800x800.jpg'
    ],
    description: 'High grade Red Taekwondo Groin Guard Protector Men Women Children Crotch Protector Kiching Boxing Karate High Quality support',
    specs: [
      { label: 'Material', value: 'Polyester Mesh / Elastic' },
      { label: 'Width', value: '8 cm (Waistband)' },
      { label: 'Colors', value: 'Red, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 33,
    name: 'Instep Shin Guard-159724',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Cotton-Instep-Shin-Guard-Karate-Sanda-Taekwondo-Muay-Thai-Boxing-Leggings-Ankle-Support-Protection-Foot-Brace-Equipment-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Cotton-Instep-Shin-Guard-Karate-Sanda-Taekwondo-Muay-Thai-Boxing-Leggings-Ankle-Support-Protection-Foot-Brace-Equipment-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/shinguard-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/shinguard-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/shinguard-800x800.jpg'
    ],
    description: 'Cotton Instep Shin Guard Karate-Sanda-Taekwondo-Muay Thai-Boxing Leggings Ankle Support Protection Foot Brace Equipment',
    specs: [
      { label: 'Material', value: 'Elasticized Cotton / EVA Padding' },
      { label: 'Width', value: 'Full Coverage' },
      { label: 'Colors', value: 'Black, White, Red, Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 34,
    name: 'Instep Shin Guard-159726',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-1-800x800.jpg'
    ],
    description: 'Cotton Instep Shin Guard Karate-Sanda-Taekwondo-Muay Thai-Boxing Leggings Ankle Support Protection Foot Brace Equipment',
    specs: [
      { label: 'Material', value: 'Elasticized Cotton / EVA Padding' },
      { label: 'Width', value: 'Full Coverage' },
      { label: 'Colors', value: 'Black, White, Red, Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 35,
    name: 'Thai Ankle Support-159725',
    category: 'bjj-protective',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Boxing-Muay-Thai-Ankle-Support-Brace-Protector-Sports-Fitness-Foot-Socks-Guards-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Boxing-Muay-Thai-Ankle-Support-Brace-Protector-Sports-Fitness-Foot-Socks-Guards-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-6-800x800.jpg'
    ],
    description: 'MMA Boxing Muay Thai Ankle Support Brace Protector Sports Fitness Foot Socks Guards',
    specs: [
      { label: 'Material', value: 'Knitted Elastic Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red, Blue, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 36,
    name: 'Bjj Traning Bag-17562',
    category: 'bjj-bags',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Bjj-Traning-Bag-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Bjj-Traning-Bag-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Bjj-Traning-Bag-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density 600D Polyester' },
      { label: 'Width', value: '22.5 cm (Depth: 14 cm, Height: 50 cm)' },
      { label: 'Colors', value: 'Charcoal Grey, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 37,
    name: 'Brazilian Jiu Jitsu Pro-17561',
    category: 'bjj-bags',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Brazilian-Jiu-Jitsu-Pro-17561-4-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Durable Canvas / Polyester' },
      { label: 'Width', value: '30 cm' },
      { label: 'Colors', value: 'Red, Blue, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 38,
    name: 'Fight Gear Bjj Traning Bag-17563',
    category: 'bjj-bags',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-4-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/7-1-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Water-Resistant Ripstop Nylon' },
      { label: 'Width', value: '60 cm' },
      { label: 'Colors', value: 'Teal/Grey, Black/Grey, Blue/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 39,
    name: 'Fight Gear Bjj Traning Bag-17564',
    category: 'bjj-bags',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Water-Resistant Ripstop Nylon' },
      { label: 'Width', value: '60 cm' },
      { label: 'Colors', value: 'Teal/Grey, Black/Grey, Blue/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 40,
    name: 'JIU JITSU Backpacks-17565',
    category: 'bjj-bags',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-3-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Weather-Resistant Polymer' },
      { label: 'Width', value: '32 cm' },
      { label: 'Colors', value: 'Matte Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 41,
    name: 'MMA Lifestyle Jacket-18125',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/mens-champion-black-maryland-terrapins-packable-jacket_pi3087000_altimages_ff_3087371alt1_full-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/mens-champion-black-maryland-terrapins-packable-jacket_pi3087000_altimages_ff_3087371alt1_full-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/26632-SPIRIT_ORANGE-l-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/55882-DEFAULT-l-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/mens-champion-navy-illinois-fighting-illini-packable-jacket_pi3087000_altimages_ff_3087364alt1_full-800x800.jpg'
    ],
    description: 'Stay protected in style with our Lifestyle x Champion packable jacket. Made from wind and rain-resistant polyester, it features a hood, kangaroo pocket, and a hidden pouch to pack it easily. Lightweight, adjustable, and perfect for on-the-go wear.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 42,
    name: 'Rashguard-10201 Half Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-3-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-3-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Thermo-Long-Johns-Mens-Winter-Warm-Compression-Quick-Dry-Pants-Clothing-For-Men-Pouch-Leggings-Bodysuit-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-3-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-800x800.jpg'
    ],
    description: 'Thermo Half Sleeve Mens Winter Warm Compression Quick Dry Pants Clothing For Men Pouch Leggings Bodysuit',
    specs: [
      { label: 'Material', value: 'Polyester / Spandex Blend' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Black/Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 43,
    name: 'Rashguard-10202 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Sports-Apparel-Skin-Tights-Compression-Base-Under-Layer-Shirts-Pants-SET-front-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Sports-Apparel-Skin-Tights-Compression-Base-Under-Layer-Shirts-Pants-SET-front-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-297505a2284e-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-4-1-800x800.jpg'
    ],
    description: 'Sports Apparel Skin Tights Long Sleeve Compression Base Under Layer Shirt Pant',
    specs: [
      { label: 'Material', value: 'Premium Performance Lycra' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 44,
    name: 'Rashguard-10203 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Compression-Set-Running-Tights-Workout-Fitness-Training-Tracksuit-Long-Sleeve-Shirts-Sport-Suit-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Compression-Set-Running-Tights-Workout-Fitness-Training-Tracksuit-Long-Sleeve-Shirts-Sport-Suit-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-0893e467b846-800x800.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 45,
    name: 'Rashguard-10204 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/shirt-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/shirt-800x800.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 46,
    name: 'Rashguard-10205 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Compression-Set-Running-Tights-Workout-Fitness-Training-Tracksuit-Long-Sleeve-Shirts-Sport-Suit-b.jpg0_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Compression-Set-Running-Tights-Workout-Fitness-Training-Tracksuit-Long-Sleeve-Shirts-Sport-Suit-b.jpg0_-500x500.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 47,
    name: 'Rashguard-10206 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1mA_jtuGSBuNjSspbq6AiipXaQc-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1mA_jtuGSBuNjSspbq6AiipXaQc-500x500.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 48,
    name: 'Rashguard-10207 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/sublimation-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/sublimation-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/sublimation-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/sublimation-3-800x800.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 49,
    name: 'Rashguard-10208 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-shirt-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-shirt-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-pent-800x800.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Various (Custom Sublimated Graphics)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 50,
    name: 'Rashguard-10209 Long Sleeve',
    category: 'rashguard',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-shirt-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-shirt-500x500.jpg'
    ],
    description: 'Sublimation Compression Set Running Tights Workout Fitness Training Tracksuit Long Sleeve Shirt Sport Suit',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Performance Fabric' },
      { label: 'Width', value: 'Compression Fit' },
      { label: 'Colors', value: 'Black/Pink, Grey Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },  
    {
    id: 51,
    name: 'Camo Compression Pant-10307',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Camo-Compression-Pants-Men-Joggers-Run-Jogging-Leggings-Fitness-Tights-Gym-Bodybuilding-Male-Bottom-MMA-Trousers-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Camo-Compression-Pants-Men-Joggers-Run-Jogging-Leggings-Fitness-Tights-Gym-Bodybuilding-Male-Bottom-MMA-Trousers-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-5-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-2-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-2-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-3-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/10-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/11-1-1-800x800.jpg'
    ],
    description: 'Camo Compression Pants Men Joggers Run Jogging Leggings Fitness Tights Gym Bodybuilding Male Bottom MMA Trousers',
    specs: [
      { label: 'Material', value: 'Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'White/Grey Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 52,
    name: 'Compression Cropped Pant-10306',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/24-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/24-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/23-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mens-Sports-34-Cropped-Pants-Gym-Running-Leggings-Male-Joggings-Elastic-Compressions-Sweatpant-Basketball-Training-pant-800x800.jpg'
    ],
    description: 'Men\'s Sports 34 Cropped Pants Gym Running Leggings Male Joggings Elastic Compressions Sweatpant Basketball Training pant',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 53,
    name: 'Compression Pant-10301',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-4d44ebf0ac01-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-4d44ebf0ac01-800x800.jpg'
    ],
    description: 'Fight Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Lycra Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Red Graphic' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 54,
    name: 'Compression Pant-10302',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-2-500x500.jpg'
    ],
    description: 'Fight Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'Technical Polyester Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Grey/Yellow' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 55,
    name: 'Compression Pant-10303',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-1-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/7-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-800x800.jpg'
    ],
    description: 'Fight Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Spandex' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Red Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 56,
    name: 'Compression Pant-10304',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/9-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/15-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/10-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/16-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/21-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/20-1-800x800.jpg'
    ],
    description: 'Fight Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'Reinforced Performance Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red/Grey/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 57,
    name: 'Compression Pant-10305',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/12-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/12-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/14-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/13-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/11-1-800x800.jpg'
    ],
    description: 'Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Green/White/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 58,
    name: 'MMA Lifestyle Jacket-18125',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/mens-champion-black-maryland-terrapins-packable-jacket_pi3087000_altimages_ff_3087371alt1_full-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/mens-champion-black-maryland-terrapins-packable-jacket_pi3087000_altimages_ff_3087371alt1_full-500x500.jpg'
    ],
    description: 'Stay protected in style with our Lifestyle x Champion packable jacket. Made from wind and rain-resistant polyester, it features a hood, kangaroo pocket, and a hidden pouch to pack it easily. Lightweight, adjustable, and perfect for on-the-go wear.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 59,
    name: 'Sky Lighting Compression Pant-10308',
    category: 'grappling-spats',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-1-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-1-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/7-1-1-800x800.jpg'
    ],
    description: 'Fight Compression Pants Jiu Jitsu BJJ Spats Leggings Fighting Martial Arts Muay Thai Leggings For Men Tight Long Pants Custom',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Blue/White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

    {
    id: 60,
    name: 'Vale Tudo Short-20310',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Untitled-2-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Untitled-2-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/back-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/back-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Untitled-2-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Spandex / Polyester Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red/White, orange/white' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 61,
    name: 'Vale Tudo Short-20311',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-15.18.36-1-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-15.18.36-1-800x800.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Breathable Mesh Outer / Lycra Liner' },
      { label: 'Width', value: 'Standard Fit with Compression Underlay' },
      { label: 'Colors', value: 'Grey Camo / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 62,
    name: 'Vale Tudo Short-20312',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-16.22.14-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-16.22.14-500x500.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Heather Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 63,
    name: 'Vale Tudo Short-20313',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-13.53.39-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-13.53.39-500x500.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Green Woodland Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 64,
    name: 'Vale Tudo Short-20314',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-14.06.56-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-11-03-14.06.56-500x500.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Lightweight Performance Microfiber' },
      { label: 'Width', value: 'Relaxed Athletic Fit' },
      { label: 'Colors', value: 'Black/Charcoal Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 65,
    name: 'Vale Tudo Short-20315',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-3-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 66,
    name: 'Vale Tudo Short-20316',
    category: 'vale-tudo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-1-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-1-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Knitted Elastic Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black/Neon Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 67,
    name: 'MMA Fight Short-100231',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-31-13.27.04-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-31-13.27.04-800x715.png',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-31-13.27.04.png',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-31-13.27.23-800x580.png',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-31-13.27.23.png'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Premium Ultra-Durable Polyester' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 68,
    name: 'MMA Fight Short-100232',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-8-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-8-1-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Lightweight Ripstop Fabric' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Charcoal Grey / White Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 69,
    name: 'MMA Fight Short-100233',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/10-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/10-3-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Sublimated Microfiber' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Black/Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 70,
    name: 'MMA Fight Short-100234',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-7-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-7-1-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Shadow Camo (White/Black/Grey)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 71,
    name: 'MMA Fight Short-100235',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-2-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Performance Tech Fabric' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'White/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 72,
    name: 'MMA Fight Short-100236',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/17-2-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Polyester' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Black/Green/Yellow/Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 73,
    name: 'MMA Fight Short-100237',
    category: 'fight-shorts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-8-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-8-500x500.jpg'
    ],
    description: 'Professional MMA fight shorts with 4-way stretch fabric and Velcro + drawstring closure. Designed for unrestricted movement during striking and grappling.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Sublimated Fabric' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Black/Blue/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 73,
    name: 'MMA Fight Glove Pro-17638',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17638.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17638.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz / 6 oz' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 74,
    name: 'MMA Fight Glove Pro-17639',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17639.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17639.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Synthetic Leather / Mesh' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'Black/Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 75,
    name: 'MMA Fight Glove Pro-17640',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17640-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17640.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17640-1.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Grade Microfiber Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'White/Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 76,
    name: 'MMA Fight Glove Pro-17641',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'Black/Red, Pink/white' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 77,
    name: 'MMA Fight Glove Pro-17642',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17642-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17642-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz / 6 oz' },
      { label: 'Colors', value: 'Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 78,
    name: 'MMA Fight Glove Pro-17643',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17643-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17643-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Matte Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'Black/Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 79,
    name: 'MMA Fight Glove Pro-17644',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17644-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17644-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17644-1-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'White/Silver, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 80,
    name: 'MMA Fight Glove Pro-17645',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17645-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/MMA-Fight-Glove-Pro-17645-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Durability Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 81,
    name: 'MMA Fight Glove Pro-17646',
    category: 'mma-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-white-half-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-white-half-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: 'Standard 4 oz' },
      { label: 'Colors', value: 'Solid White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 82,
    name: 'Wrestling Singlet Sublimation for man-137520',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/b6d04c19e56046fca8b781fda67f54ea-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-14-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-12-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-13-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-9-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Polyester / Spandex' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Sublimated Fire Graphic, Black, Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 83,
    name: 'Wrestling Singlet-137521',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-16-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-16-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Matte Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 84,
    name: 'Wrestling Singlet-137522',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/front-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/front-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Lightweight Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 85,
    name: 'Wrestling Singlet-137523',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Red-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Red-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Nylon / Spandex' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red/Black/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 86,
    name: 'Wrestling Singlet-137524',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Blue-Flame-front-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Blue-Flame-front-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Sublimated Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Blue/White/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 87,
    name: 'Wrestling Singlet-137525',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/red-front-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/red-front-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Red-back-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red/White Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 88,
    name: 'Wrestling Singlet-137526',
    category: 'wrestling-singlet',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-Front-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-Front-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-back-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-1-1-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Spandex' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Royal Blue/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 89,
    name: 'Boxing Gloves Pro-17599',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17599-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17599-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: 'Standard 10 oz / 12 oz / 14 oz' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 90,
    name: 'Boxing Gloves Pro-17600',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17600-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17600-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Reinforced Microfiber Leather' },
      { label: 'Width', value: 'Standard 12 oz / 14 oz' },
      { label: 'Colors', value: 'Black/Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 91,
    name: 'Boxing Gloves Pro-17601',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17601-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Gloves-Pro-17601-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Metallic Synthetic Leather' },
      { label: 'Width', value: 'Standard 10 oz / 12 oz / 16 oz' },
      { label: 'Colors', value: 'Metallic Red/Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 92,
    name: 'Boxing Gloves Pro-17602',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-glove-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-glove-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Synthetic Leather' },
      { label: 'Width', value: 'Standard 10 oz / 12 oz' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 93,
    name: 'Boxing Gloves Pro-17603',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-boxing-glove-2-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/black-boxing-glove-2-1-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Breathable Synthetic Leather' },
      { label: 'Width', value: 'Standard 12 oz' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 94,
    name: 'Boxing Gloves Pro-17604',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-white-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-white-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: 'Standard 10 oz / 12 oz / 14 oz' },
      { label: 'Colors', value: 'Solid White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 95,
    name: 'Boxing Gloves Pro-17605',
    category: 'boxing-gloves',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/boxing-500x500.jpg'
    ],
    description: 'Professional boxing gloves with multi-layer foam padding for optimal impact protection. Triple-stitched seams and a secure wrist wrap system for safe, powerful training.',
    specs: [
      { label: 'Material', value: 'Reinforced Performance Leather' },
      { label: 'Width', value: 'Standard 12 oz / 14 oz' },
      { label: 'Colors', value: 'Solid White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 96,
    name: 'Hand Wraps-17566',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Cotton / Elastic Blend' },
      { label: 'Width', value: '5 cm (Length: 4.5m)' },
      { label: 'Colors', value: 'Pink Camo, Jungle Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 97,
    name: 'Hand Wraps-17567',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-2-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Semi-Elastic Performance Fabric' },
      { label: 'Width', value: '5 cm' },
      { label: 'Colors', value: 'Neon Green, Pink, Orange, Black/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 98,
    name: 'Hand Wraps-17568',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-4-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-4-2-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Cotton Blend' },
      { label: 'Width', value: '5 cm' },
      { label: 'Colors', value: 'Red, Green, Yellow Distressed' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 99,
    name: 'Hand Wraps-17572',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-5-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-5-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Premium Elasticated Cotton' },
      { label: 'Width', value: '5 cm' },
      { label: 'Colors', value: 'Urban Camo, Blue Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 100,
    name: 'Hand Wraps-17573',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-6-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hand-Wraps-6-1-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'High-Density Food Grade EVA' },
      { label: 'Colors', value: 'Black/Grey, White/Red, Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 101,
    name: 'Mouth Guard-17571',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/mouth-Guard-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/mouth-Guard-3-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather / Multi-Layer Foam' },
      { label: 'Width', value: '20 cm (Length: 40 cm)' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 102,
    name: 'MUAY THAI PAD-17577',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/dp_5_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/dp_5_-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Reinforced Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 103,
    name: 'MUAY THAI PAD-17578',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-2-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Synthetic Leather' },
      { label: 'Width', value: '35 cm (Length: 55 cm)' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 104,
    name: 'MUAY THAI PAD-17579',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/s-l400.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/s-l400.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Metallic Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Metallic Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 105,
    name: 'MUAY THAI PAD-17580',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-1-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-1-2-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Metallic Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Metallic Blue/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 106,
    name: 'MUAY THAI PAD-17581',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/dsc_6035-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/dsc_6035-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Metallic Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Metallic Blue/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 107,
    name: 'Shin Instep Black-17575',
    category: 'boxing-gear-items',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/FIVING-Youth-Adult-Muay-Thai-Kick-Boxing-MMA-Grappling-Instep-Shin-Guard-Pads-Karate-Foot-Shank.jpg_Q90.jpg_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/FIVING-Youth-Adult-Muay-Thai-Kick-Boxing-MMA-Grappling-Instep-Shin-Guard-Pads-Karate-Foot-Shank.jpg_Q90.jpg_-500x500.jpg'
    ],
    description: 'Professional boxing equipment crafted for performance and durability. Built to withstand high-intensity training sessions while protecting the athlete.',
    specs: [
      { label: 'Material', value: 'Metallic Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Metallic Grey/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 108,
    name: 'Boxing Robe Pro-17578',
    category: 'boxing-robe',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17578-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17578.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17578-1.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Polyester Satin' },
      { label: 'Width', value: 'Standard Full-Length Fit' },
      { label: 'Colors', value: 'Black/Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 109,
    name: 'Boxing Robe Pro-17579',
    category: 'boxing-robe',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17579-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17579.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17579-1.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Satin' },
      { label: 'Width', value: 'Standard Full-Length Fit' },
      { label: 'Colors', value: 'Red/White/Blue (Stars & Stripes)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 110,
    name: 'Boxing Robe Pro-17580',
    category: 'boxing-robe',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17580-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17580.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17580-1.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17580-2.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Boxing-Robe-Pro-17580-3.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Technical Satin Blend' },
      { label: 'Width', value: 'Standard Full-Length Fit' },
      { label: 'Colors', value: 'Royal Blue/White, Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 111,
    name: 'BOXING SHORTS',
    category: 'boxing-tank',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/short-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/short-scaled-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Grade Polyester Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Red, Royal Blue, Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 112,
    name: 'REVERSIBLE BOXING SINGLET',
    category: 'boxing-tank',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/tank-top-copy-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/tank-top-copy-scaled-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Breathable Polyester Mesh' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Reversible Red/Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 113,
    name: 'REVERSIBLE BOXING SINGLET WITH PANNEL',
    category: 'boxing-tank',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/BS-6A-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BS-6A-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Interlock Polyester' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Blue/White, Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 114,
    name: 'Focus Pad Pro-17581',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17581-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17581-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather / Shock-Absorbing Foam' },
      { label: 'Width', value: '19 cm (Height: 24 cm)' },
      { label: 'Colors', value: 'Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 115,
    name: 'Focus Pad Pro-17582',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17582-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17582-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Microfiber Leather' },
      { label: 'Width', value: '18 cm' },
      { label: 'Colors', value: 'Neon Yellow/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 116,
    name: 'Focus Pad Pro-17583',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17583-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17583-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Synthetic Leather' },
      { label: 'Width', value: '20 cm' },
      { label: 'Colors', value: 'Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 117,
    name: 'Focus Pad Pro-17584',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17584-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17584-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Sublimated Synthetic Leather' },
      { label: 'Width', value: '17 cm' },
      { label: 'Colors', value: 'Safety Orange/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 118,
    name: 'Focus Pad Pro-17612',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17612-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17612-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Synthetic Leather' },
      { label: 'Width', value: '35 cm (Diameter)' },
      { label: 'Colors', value: 'Solid Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 119,
    name: 'Focus Pad Pro-17613',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17613-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17613-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Synthetic Leather' },
      { label: 'Width', value: '19 cm' },
      { label: 'Colors', value: 'Black/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 120,
    name: 'Focus Pad Pro-17614',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17614.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17614.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: '18 cm' },
      { label: 'Colors', value: 'Pro Red/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 121,
    name: 'Focus Pad Pro-17615',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17615-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17615-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Reinforced Leather' },
      { label: 'Width', value: '40 cm (Diameter)' },
      { label: 'Colors', value: 'Grey/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 122,
    name: 'Focus Pad Pro-17616',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17616.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17616.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Reinforced Leather' },
      { label: 'Width', value: '40 cm (Diameter)' },
      { label: 'Colors', value: 'Red/White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 123,
    name: 'Focus Pad Pro-17617',
    category: 'focus-pads',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17617-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Focus-Pad-Pro-17617-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Reinforced Leather' },
      { label: 'Width', value: '40 cm (Diameter)' },
      { label: 'Colors', value: 'Black/Red/White/Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 124,
    name: 'Head Gear Pro-17585',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17585-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17585-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather / EVA Foam' },
      { label: 'Width', value: 'Adjustable Secure-Fit' },
      { label: 'Colors', value: 'Solid Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 125,
    name: 'Head Gear Pro-17586',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17586.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17586.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Microfiber Leather' },
      { label: 'Width', value: 'Full Coverage' },
      { label: 'Colors', value: 'Black/Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 126,
    name: 'Head Gear Pro-17587',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17587.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17587.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Ballistic Polymer / Synthetic Leather' },
      { label: 'Width', value: 'Full Coverage' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 127,
    name: 'Head Gear Pro-17588',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17588.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-Pro-17588.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Synthetic Leather' },
      { label: 'Width', value: 'Adjustable Secure-Fit' },
      { label: 'Colors', value: 'Neon Green/Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 128,
    name: 'Head Gear-17589',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Head-Gear-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Matte Synthetic Leather' },
      { label: 'Width', value: 'Full Coverage' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 129,
    name: 'Head Gear-17590',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/BJJ-HeadGear-Black-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BJJ-HeadGear-Black-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Neoprene / Reinforced Plastic' },
      { label: 'Width', value: 'Low Profile' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 130,
    name: 'Head Gear-17591',
    category: 'head-gear',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Red-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Red-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Breathable Mesh / Compression Fabric' },
      { label: 'Width', value: 'Low Profile' },
      { label: 'Colors', value: 'Solid Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 131,
    name: 'Muay Thai Shorts Pro-17605',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17605-500x428.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17605-500x428.png'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Premium Heavyweight Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Royal Blue / Silver' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 132,
    name: 'Muay Thai Shorts Pro-17606',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17606-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17606-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'High-Grade Polyester Satin' },
      { label: 'Width', value: '8 cm (Waistband)' },
      { label: 'Colors', value: 'Sky Blue / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 133,
    name: 'Muay Thai Shorts Pro-17607',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17607-500x428.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17607-500x428.png'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Red / Gold / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 134,
    name: 'Muay Thai Shorts Pro-17608',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17608-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17608-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Soft-Finish Heavy Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Black / Gold Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 135,
    name: 'Muay Thai Shorts Pro-17609',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17609-500x432.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17609-500x432.png'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Technical Performance Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Red / White / Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 136,
    name: 'Muay Thai Shorts Pro-17610',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17610-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17610-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Reinforced Microfiber Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Black / Gold / Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 137,
    name: 'Muay Thai Shorts Pro-17611',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17611-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thai-Shorts-Pro-17611-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Premium Heavyweight Satin' },
      { label: 'Width', value: '10 cm (Waistband)' },
      { label: 'Colors', value: 'Indigo Blue / Gold' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 138,
    name: 'Muay Thei Foot Target Pro-17603',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thei-Foot-Target-Pro-17603-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thei-Foot-Target-Pro-17603-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Synthetic Leather / Multi-Layer Foam' },
      { label: 'Width', value: '20 cm (Length: 40 cm)' },
      { label: 'Colors', value: 'Red / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 139,
    name: 'Muay Thei Foot Target Pro-17604',
    category: 'muay-thai',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thei-Foot-Target-Pro-17604-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Muay-Thei-Foot-Target-Pro-17604-500x500.jpg'
    ],
    description: 'Traditional Muay Thai equipment crafted for authentic training. Designed to withstand the demands of striking, clinch work, and pad sessions.',
    specs: [
      { label: 'Material', value: 'Premium Synthetic Leather' },
      { label: 'Width', value: '18 cm' },
      { label: 'Colors', value: 'Red / Black / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 140,
    name: 'Punching Bag Pro-17597',
    category: 'punching-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Punching-Bag-Pro-17597-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Punching-Bag-Pro-17597.png',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Punching-Bag-Pro-17597-1.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.High-capacity heavy bag featuring distinct horizontal strike zones for targeted combination training. Built with reinforced hanging straps and a durable outer shell to withstand high-velocity punches, kicks, and knee strikes.',
    specs: [
      { label: 'Material', value: 'Reinforced Synthetic Leather / Canvas Hybrid' },
      { label: 'Width', value: '35 cm (Height: 120 cm / 150 cm)' },
      { label: 'Colors', value: 'Red/Black, Olive/Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 141,
    name: 'Punching Bag Pro-17598',
    category: 'punching-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Punching-Bag-Pro-17598-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Punching-Bag-Pro-17598-500x500.jpg'
    ],
    description: 'Professional-grade cylindrical heavy bags engineered for power development and endurance. Features a smooth, high-tension surface and heavy-duty chain mounts to provide vital stability and consistent feedback during heavy rolling or striking sessions.',
    specs: [
      { label: 'Material', value: 'Industrial-Grade PVC / Synthetic Leather' },
      { label: 'Width', value: '35 cm (Height: 150 cm / 180 cm)' },
      { label: 'Colors', value: 'Black, Blue, Red, Yellow' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 142,
    name: 'Back Bag Pro-17536',
    category: 'duffle-bag',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Bag-Pro-17536-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Bag-Pro-17536-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Bag-Pro-17536-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Bag-Pro-17536-2-800x800.jpg'
    ],
    description: 'High-performance compression leggings featuring a modern carbon-fiber textured sublimated print. Designed with a wide comfort waistband and reinforced stitching to provide vital support and stability to muscle groups during training.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 143,
    name: 'Back Bags Pro-17543',
    category: 'duffle-bag',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/bag-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/bag-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-1b45141fccae-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-5a11a1f5a9b4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-8f0876673406-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/H94cb5fc4dc9a483487c3a72511cec8f3E-800x800.jpg'
    ],
    description: 'Minimalist all-black compression tights engineered for high-intensity grappling and gym work. Features moisture-wicking technology and a second-skin feel that allows for natural movement while protecting against mat burn.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Blue, Red, White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 144,
    name: 'Back Pack convartable-17547',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-12-12.11.59-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Screenshot-2022-10-12-12.11.59-500x500.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Charcoal / Black / Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 145,
    name: 'Back Pack Pro-17529',
    category: 'duffle-bag',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Pack-Pro-17529-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Pack-Pro-17529.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Pack-Pro-17529-1.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Back-Pack-Pro-17529-2.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Red Gradient, White / Red Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 146,
    name: 'Bag Pack Pro-17537',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Bag-Pack-Pro-17537-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Bag-Pack-Pro-17537-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Pink / Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 147,
    name: 'Duffle Bag Pro-17533',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/bag-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/bag-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Red Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 148,
    name: 'Duffle Bag Pro-17534',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Duffle-Bag-Pro-17534-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Duffle-Bag-Pro-17534-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Silver / Yellow Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 149,
    name: 'Duffle Bag Pro-17544',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-13-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-13-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 150,
    name: 'Duffle Bag-17548',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-2-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-2-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 151,
    name: 'Mixed Martial Bag Pro-17530',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Bag-Pro-17530-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Bag-Pro-17530-500x500.jpg'
    ],
    description: '',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Navy Blue / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 152,
    name: 'Sublimation Gear Bag-17545',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-5-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-5-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'White / Sky Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 153,
    name: 'Sublimation Gear Bag-17546',
    category: 'duffle-bag',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-11-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-11-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Grey/ Red Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 154,
    name: 'Athleisure-18122',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Athleisure-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Athleisure-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-8-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-8-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-4-800x800.jpg'
    ],
    description: 'High-performance compression leggings featuring a modern carbon-fiber textured sublimated print. Designed with a wide comfort waistband and reinforced stitching to provide vital support and stability to muscle groups during training.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 155,
    name: 'Athleisure-18123',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/yellow-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/yellow-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/100-polyester-Athleisure-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-9-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-9-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-4-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-5-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-7-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-8-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Polyester Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Yellow / Black, Red, Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 156,
    name: 'Running Short-18124',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Charcoal / Black / Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 157,
    name: 'Running Short-18125',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Red Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 158,
    name: 'Running Short-18126',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Running-Short-3-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Silver / Yellow Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 159,
    name: 'Trouser Pant Pro-18120',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-4-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent-4-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Graphic' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 160,
    name: 'Trouser Pant Pro-18121',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/pent1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'White / Grey Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 161,
    name: 'Women Hoodie-18123',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/jacket-hoodies-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/jacket-hoodies-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 162,
    name: 'Women Hoodie-18124',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/jacket-hoodies-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/jacket-hoodies-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 163,
    name: 'Women Hoodie-18127',
    category: 'athleisure-pant',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/front-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/front-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Navy Blue / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 164,
    name: 'Tshirt Black Version 2024',
    category: 't-shirts',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4004-copy-scaled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4004-copy-scaled-1-800x829.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4004-copy-scaled-1.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4002-copy-scaled-1-800x835.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4002-copy-scaled-1.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4005-copy-scaled-1-800x894.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/DSC_4005-copy-scaled-1.jpg'
    ],
    description: 'High-performance compression leggings featuring a modern carbon-fiber textured sublimated print. Designed with a wide comfort waistband and reinforced stitching to provide vital support and stability to muscle groups during training.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 165,
    name: 'Army Mens T Shirt-17655',
    category: 't-shirts',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/202945-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/202945-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/202950-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/202946-800x800.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 166,
    name: 'Mens T Shirt-17653',
    category: 't-shirts',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/3de454d1b5117872dafe90a4d16eff08-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3de454d1b5117872dafe90a4d16eff08-800x778.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3de454d1b5117872dafe90a4d16eff08.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6358d4c5bd77144e979582eab417e32207-hanes-white-tagless.rsquare.w600.webp',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Wholesale-100-Cotton-Blank-Digital-Printing-Boy-prime-S-Plus-Size-T-Shirt-Custom-T-Shirt-Plain-Men-prime-S-T-Shirts-Cotton.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/plain-t-shirt-500x500-1.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Multi' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 167,
    name: 'Mens T Shirt-17654',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/202944-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/202944-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Olive Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 168,
    name: 'Mens T Shirt-17656',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/ccbc79e3b1725183797359e4554d916a-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ccbc79e3b1725183797359e4554d916a-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 169,
    name: 'Mens T Shirt-17657',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/85194ed27245c9d427717a0fc6cbfe2f-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/85194ed27245c9d427717a0fc6cbfe2f-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Pink' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 170,
    name: 'Polo Pro-17651',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hfb6be3648abd4b55b5c7b5fbd8fb7033J-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hfb6be3648abd4b55b5c7b5fbd8fb7033J-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Purple/ Grey Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 171,
    name: 'Polo Shirt Pro-17652',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 172,
    name: 'Polo Shirts Pro-17648',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-2ff88b2fc5cf-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-2ff88b2fc5cf-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 173,
    name: 'Polo Shirts Pro-17649',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1fBBtOXXXXXX4XVXXq6xXFXXXp-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1fBBtOXXXXXX4XVXXq6xXFXXXp-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Orange / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 174,
    name: 'T.Shirt Pro-17650',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-3bb61dab9eb8-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-3bb61dab9eb8-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Pink / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 175,
    name: 'Women T Shirt-17658',
    category: 't-shirts',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/13462axl-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/13462axl-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 176,
    name: 'Blood Hoof Art Hoodie Pro-17628',
    category: 'hoodies',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Blood-Hoof-Art-Hoodie-Pro-17628-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Blood-Hoof-Art-Hoodie-Pro-17628-500x500.jpg'
    ],
    description: 'High-performance compression leggings featuring a modern carbon-fiber textured sublimated print. Designed with a wide comfort waistband and reinforced stitching to provide vital support and stability to muscle groups during training.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 177,
    name: 'Digital Printing Hoodies Pro-17634',
    category: 'hoodies',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17634-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17634-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Multi' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 178,
    name: 'Digital Printing Hoodies Pro-17635',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17635-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17635-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 179,
    name: 'Digital Printing Hoodies Pro-17636',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17636-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17636-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Silver / Yellow Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 180,
    name: 'Digital Printing Hoodies Pro-17637',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17637-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Hoodies-Pro-17637-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Four-Way Stretch Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Charcoal / Black / Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 181,
    name: 'Digital Printing Pro-17629',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Pro-17629-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Digital-Printing-Pro-17629-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Red Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 182,
    name: 'Holly Wood Hoodie Pro-17630',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Holly-Wood-Hoodie-Pro-17630-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Holly-Wood-Hoodie-Pro-17630-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Silver / Yellow Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 183,
    name: 'Hoodie and Trouser Pro-17626',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17626-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17626-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Sublimated Polyester' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'White / Grey Camo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 184,
    name: 'Hoodie Pro-17627',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-Pro-17627-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-Pro-17627-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Red Graphic' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 185,
    name: 'Printed Hoodie Pro-17634',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodi-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodi-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Yellow / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 186,
    name: 'Printing Hoodie Pro-17631',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Printing-Hoodie-Pro-17631-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Printing-Hoodie-Pro-17631-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 187,
    name: 'Printing Hoodie Pro-17632',
    category: 'hoodies',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Printing-Hoodie-Pro-17632-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Printing-Hoodie-Pro-17632-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Durable Ripstop Nylon' },
      { label: 'Width', value: 'Standard Athletic Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

    {
    id: 188,
    name: 'Gym Gloves Pro-18123',
    category: 'gym-fitness',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/half-glove-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/half-glove-2-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 189,
    name: 'Gym Gloves Pro-18124',
    category: 'gym-fitness',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/gym-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/gym-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Technical Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Solid Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 190,
    name: 'Gym Short Men Pro-17547',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Gym-Short-Men-Pro-17547-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Gym-Short-Men-Pro-17547-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Premium Polyester / Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey / White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 191,
    name: 'Gym Wear Female Pro-17540',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Gym-Wear-Female-Pro-17540-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Gym-Wear-Female-Pro-17540-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Reinforced Compression Knit' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Pink/ Grey Gradient' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 192,
    name: 'Gym Wear Pro-17538',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Untitled-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Untitled-1-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Density Sublimated Lycra' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Silver' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 193,
    name: 'Handwraps Pro-17544',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17544-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17544-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Multi' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 194,
    name: 'Handwraps Pro-17545',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17545-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17545-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 195,
    name: 'Handwraps Pro-17546',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17546-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Handwraps-Pro-17546-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Multi' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 196,
    name: 'Pants Leggings Female Pro-17539',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Pants-Leggings-Female-Pro-17539-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Pants-Leggings-Female-Pro-17539-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 197,
    name: 'Supplex Pro-17542',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Supplex-Pro-17542-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Supplex-Pro-17542-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'High-Elasticity Performance Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Grey Panels' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 198,
    name: 'WOMEN LEGGING-17543',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/WOMEN-LEGGING-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/WOMEN-LEGGING-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Light Purple / White Lightning' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 199,
    name: 'WOMEN LEGGING-17544',
    category: 'gym-fitness',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Legging-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Legging-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Performance Compression Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 200,
    name: 'BasketBall Short Pro-17548',
    category: 'hiphop-shorts',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-1.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-87cf21ac2500.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-2.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-3.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-4.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-5.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/BasketBall-Short-Pro-17548-6.jpg'
    ],
    description: 'Anatomically shaped compression sleeves providing vital support and stability to the ankle joint. Open-heel design allows for natural grip on the mat during training.',
    specs: [
      { label: 'Material', value: 'Knitted Elastic Fabric' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Yellow, Red, Black, Grey, Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

    {
    id: 201,
    name: 'Dipped Foam Pro-17559',
    category: 'leisure-apparels',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Dipped-Foam-Pro-17559-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Dipped-Foam-Pro-17559-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Dipped-Foam-Pro-17559-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Dipped-Foam-Pro-17559-2-800x800.jpg'
    ],
    description: 'High density protective sparring foot guards featuring an open-toe and open-heel design for natural mat grip. Secured with durable criss-cross elastic straps for vital instep and ankle stability during martial arts training.',
    specs: [
      { label: 'Material', value: 'Dipped Foam / Elastic Blend' },
      { label: 'Width', value: 'Adjustable Fit' },
      { label: 'Colors', value: 'Blue / Black, Red / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 202,
    name: 'Swimming Trunks Pro-17558',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Swimming-Trunks-Pro-17558.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Swimming-Trunks-Pro-17558.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Spandex / Nylon Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Light Blue Graphic' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 203,
    name: 'Vale Tudo Short Pro-17553',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17553-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17553-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Neon Green' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 204,
    name: 'Vale Tudo Short Pro-17554',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17554-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17554-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / Orange Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 205,
    name: 'Vale Tudo Short Pro-17555',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17555-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17555-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Black / White Pattern' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 206,
    name: 'Vale Tudo Short Pro-17556',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17556-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17556-500x500.jpg'
    ],
    description: 'A versatile collection of performance compression shorts featuring a variety of solid colors and contrast-stitched panel designs. Crafted from stretch fabric with prominent branded waistbands for everyday athletic wear and recovery.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Assorted (Blue, Grey, Black / Multi-Color Accents)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 207,
    name: 'Vale Tudo Short Pro-17557',
    category: 'leisure-apparels',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17557-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Vale-Tudo-Short-Pro-17557-500x500.jpg'
    ],
    description: 'Vibrant athletic compression shorts featuring a subtle, dark geometric micro-pattern throughout. Constructed with flatlock seams and a wide elastic waistband to ensure maximum mobility and reliable muscle support on the mat or in the gym.',
    specs: [
      { label: 'Material', value: 'Moisture-Wicking Spandex Blend' },
      { label: 'Width', value: 'Snug Fit' },
      { label: 'Colors', value: 'Red / Dark Grey Pattern' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

    {
    id: 208,
    name: 'Heavy Weight Judo Uniform-174235',
    category: 'judo',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Judo-white-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Judo-white-800x800.jpg'
    ],
    description: 'Traditional white martial arts uniform set consisting of a durable wrap-style jacket, pants with reinforced knees, and a standard white belt. Designed with heavy-duty stitching at stress points like the lapel to withstand grappling and striking training.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 209,
    name: 'Heavy Weight Judo Uniform-174236',
    category: 'judo',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/9002000-Judoanzug-to-start-blau-001-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/9002000-Judoanzug-to-start-blau-001-500x500.jpg'
    ],
    description: 'Classic blue martial arts gi set including a heavy-duty jacket, matching pants, and a white beginner\'s belt. Features reinforced knees and heavy lapel stitching to provide maximum durability and comfort during intense sparring and mat work.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 210,
    name: 'Heavy Weight Judo Uniform-174237',
    category: 'judo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/UTB8jvSvIiDEXKJk43Oqq6Az3XXaK-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/UTB8jvSvIiDEXKJk43Oqq6Az3XXaK-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Red / Black Belt' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 211,
    name: 'Heavy Weight Judo Uniform-174239',
    category: 'judo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/fs-10307_pimg3-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/fs-10307_pimg3-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 212,
    name: 'Light Weight Judo Uniform-174240',
    category: 'judo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Light-Weight-Judo-Uniform-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Light-Weight-Judo-Uniform-500x500.jpg'
    ],
    description: 'Premium white martial arts uniform set featuring a neatly folded jacket and pants. Includes discreet black patch areas for brand customization and is tailored with reinforced lapels for longevity and reliable grip during training.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Label Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 213,
    name: 'Super Light Weight Judo Uniform-174241',
    category: 'judo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Super-Light-Weight-Judo-Uniform.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Super-Light-Weight-Judo-Uniform.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Label Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 214,
    name: 'Adult Karate Trouser-17628',
    category: 'karate',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Adult-Classic-Satin-Full-Contact-Trousers-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Adult-Classic-Satin-Full-Contact-Trousers-500x500.jpg'
    ],
    description: 'Lightweight black martial arts training pants featuring dual red side stripes and a wide, gathered elastic waistband. Designed with a relaxed fit to allow for unrestricted movement and high kicks during kickboxing or traditional martial arts training.',
    specs: [
      { label: 'Material', value: 'Satin / Polyester Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'Black / Red Stripes' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 215,
    name: 'Chest Protector Guard-17626',
    category: 'karate',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/WTF-TaeKwonDo-Solid-Reversible-Chest-Protector-Guard-Adult-kids-Body-Vest-Protective-guard-Back-Protector-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/WTF-TaeKwonDo-Solid-Reversible-Chest-Protector-Guard-Adult-kids-Body-Vest-Protective-guard-Back-Protector-500x500.jpg'
    ],
    description: 'Reversible martial arts chest protector designed to absorb impacts during heavy sparring. Features a durable blue front (reversible to red) with reinforced stitching and adjustable back ties to ensure a secure, custom fit over the torso.',
    specs: [
      { label: 'Material', value: 'PU Leather / High-Density Foam' },
      { label: 'Width', value: 'Adjustable Fit' },
      { label: 'Colors', value: 'Blue / Red (Reversible)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 216,
    name: 'Karate Equipments Bag Pro-17623',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Equipments-Bag-Pro-17623-500x467.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Equipments-Bag-Pro-17623-500x467.jpg'
    ],
    description: 'Spacious black sports duffel bag specifically designed for martial arts gear, featuring bold "KARATE" typography and classic white diagonal stripes. Includes a breathable mesh side panel, an adjustable shoulder strap, and an ID window for convenience.',
    specs: [
      { label: 'Material', value: 'Heavy-Duty Nylon / Canvas' },
      { label: 'Width', value: 'Standard Duffel Size' },
      { label: 'Colors', value: 'Black / White Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 217,
    name: 'Karate Glove Pro-17618',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Glove-Pro-17618-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Glove-Pro-17618-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'PU Leather / Impact Foam' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Blue / Black and Red Logo' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 218,
    name: 'Karate Protective Gear Pro-17619',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17619-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17619-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'PU Leather / Impact Foam' },
      { label: 'Width', value: 'Adjustable Fit' },
      { label: 'Colors', value: 'Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 219,
    name: 'Karate Protective Gear Pro-17621',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17621-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17621-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'PU Leather / Impact Foam' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 220,
    name: 'Karate Protective Gear Pro-17622',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17622-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17622-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'PU Leather / Elastic Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Light Blue' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 221,
    name: 'Karate Uniform-17629',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-suit-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-suit-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 222,
    name: 'Karate Uniform-17630',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/KU-10-00-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/KU-10-00-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 223,
    name: 'Karate Uniform-17631',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-suit-blue-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-suit-blue-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Blue / White Belt' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 224,
    name: 'Karate Uniform-17632',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Suit-Black-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Suit-Black-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black/ White Belt' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 225,
    name: 'Karate Uniform-17633',
    category: 'karate',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/81X5ut5i2iL._AC_SL1500_-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/81X5ut5i2iL._AC_SL1500_-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White/ White Belt' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 226,
    name: 'Ninja Mask-103543',
    category: 'ninja',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/c4d2ae47-910c-42b2-8e4a-207a0c43a050_1.5d4b1178d9cdb73e859ed50432095ff7-500x500.jpeg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/c4d2ae47-910c-42b2-8e4a-207a0c43a050_1.5d4b1178d9cdb73e859ed50432095ff7-500x500.jpeg'
    ],
    description: 'Form-fitting black balaclava head mask featuring a wide, single-eye opening. Designed to provide full face and neck coverage while ensuring breathability and comfortable concealment during tactical training or martial arts.',
    specs: [
      { label: 'Material', value: 'Breathable Cotton / Spandex Blend' },
      { label: 'Width', value: 'Stretch Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 227,
    name: 'Ninja uniform-103541',
    category: 'ninja',
    badge: 'New',
    featured: true,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/suit-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/suit-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/1-12-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-13-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/3-9-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-10-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/5-6-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/6-2-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/7-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8-3-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Ninja-800x800.jpg'
    ],
    description: 'Traditional full-body black ninja uniform (shinobi shozoku) displaying both front and back views. This comprehensive martial arts set includes a hooded wrap jacket, face mask, arm gauntlets, a wide sash belt, and matching pants with traditional calf ties.',
    specs: [
      { label: 'Material', value: 'Durable Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 228,
    name: 'Ninja uniform-103542',
    category: 'ninja',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/572ef6a36f430b5f555b345da5c3a3f1-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/572ef6a36f430b5f555b345da5c3a3f1-1-500x500.jpg'
    ],
    description: 'Complete black ninja martial arts suit (shinobi shozoku) shown from both front and back angles. The authentic full-coverage uniform features a wrap-style top, trousers with integrated leg wraps, hand/arm covers, a face-concealing mask, and a secure waist belt.',
    specs: [
      { label: 'Material', value: 'Durable Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 229,
    name: 'Russian Sambo Jacket Pro-17646',
    category: 'sambo',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Russian-Sambo-Jacket-Pro-17646-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Russian-Sambo-Jacket-Pro-17646.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Russian-Sambo-Jacket-Pro-17646-1.jpg'
    ],
    description: 'Heavy-duty blue martial arts gi jacket featuring a thick, reinforced lapel and a textured weave fabric designed to withstand rigorous grappling. Includes a matching blue belt and woven brand patches on the lower lapel and hem, making it ideal for judo or jiu-jitsu training and competition.',
    specs: [
      { label: 'Material', value: 'Heavyweight Cotton Weave' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Blue, Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 230,
    name: '8oz 100% Cotton Taekwondo Uniform-2075204',
    category: 'taekwondo',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/8oz-100-Cotton-Taekwondo-Uniform-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/8oz-100-Cotton-Taekwondo-Uniform-500x500.jpg'
    ],
    description: 'Traditional white martial arts uniform featuring a V-neck jacket and drawstring pants, accented with striking black trim along the lapels, cuffs, and hems. Designed for disciplines like Taekwondo, offering comfort and unrestricted freedom of movement.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Trim' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 231,
    name: 'Karate Protective Gear Pro-17620',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17620-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Karate-Protective-Gear-Pro-17620-500x500.jpg'
    ],
    description: 'Reversible martial arts chest protector designed to absorb heavy impacts during sparring. Features a durable blue front and red back, complete with adjustable shoulder straps and back ties for a secure and comfortable fit over the torso.',
    specs: [
      { label: 'Material', value: 'PU Leather / High-Density Foam' },
      { label: 'Width', value: 'Adjustable Fit' },
      { label: 'Colors', value: 'Blue / Red (Reversible)' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 232,
    name: 'Kickboxing Paddle-17624',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Taekwondo-Kick-Target-Strike-Punching-Pads-Karate-Kickboxing-Paddle-MMA-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Taekwondo-Kick-Target-Strike-Punching-Pads-Karate-Kickboxing-Paddle-MMA-500x500.jpg'
    ],
    description: 'Dual-sided red martial arts kicking targets designed to enhance striking accuracy and speed. Features durable construction with an elastic wrist strap for a secure grip during intense taekwondo or kickboxing training sessions.',
    specs: [
      { label: 'Material', value: 'PU Leather / EVA Foam' },
      { label: 'Width', value: 'Standard Size' },
      { label: 'Colors', value: 'Red / White Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 233,
    name: 'Kickboxing Paddle-17625',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/blue-1-500x500.jpg'
    ],
    description: 'Single-sided blue martial arts kicking paddle designed to improve kicking precision and timing. Constructed with a textured surface and an integrated black wrist strap to prevent drops during high-impact striking drills.',
    specs: [
      { label: 'Material', value: 'PU Leather / EVA Foam' },
      { label: 'Width', value: 'Standard Size' },
      { label: 'Colors', value: 'Blue / Black Strap' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 234,
    name: 'Taekwondo Children Uniform-2075202',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Teakwendo-uniform-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Teakwendo-uniform-500x500.jpg'
    ],
    description: 'Classic white Taekwondo uniform (dobok) featuring a distinctive red and black V-neck collar. This complete set includes a comfortable pull-over top, matching elastic-waist pants, and a standard white beginner\'s belt for training and grading.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Red and Black Collar' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 235,
    name: 'Taekwondo foot protector-2075206',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB13p2UOVXXXXcCXXXXq6xXFXXXg-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB13p2UOVXXXXcCXXXXq6xXFXXXg-500x500.jpg'
    ],
    description: 'Ergonomic white martial arts sparring gloves featuring segmented knuckle padding for optimal impact absorption. Designed with a flexible fit and secure wrist closures to ensure maximum hand mobility and protection during training.',
    specs: [
      { label: 'Material', value: 'PU Leather / Impact Foam' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 236,
    name: 'Taekwondo Kids Helmet-17623',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-896077e498d7-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/ezgif-1-896077e498d7-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Dipped Foam' },
      { label: 'Width', value: 'Adjustable Fit' },
      { label: 'Colors', value: 'Red' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 237,
    name: 'TaeKWONDO protective gloves-2075205',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Taekwondo-Equipment-WTF-Approve-Palm-Protector-Guard-Gear-Karate-Boxing-Judo-Martial-Arts-Hand-Ankle-Gloves-Protector-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Taekwondo-Equipment-WTF-Approve-Palm-Protector-Guard-Gear-Karate-Boxing-Judo-Martial-Arts-Hand-Ankle-Gloves-Protector-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'PU Leather / Breathable Mesh' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 238,
    name: 'Taekwondo Uniform-2075201',
    category: 'taekwondo',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-5-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/2-5-1-500x500.jpg'
    ],
    description: 'Premium white Taekwondo uniform featuring a traditional black V-neck collar and a subtle ribbed fabric texture for enhanced durability. Comes complete with a wrap-around black belt, tailored for advanced practitioners and instructors.',
    specs: [
      { label: 'Material', value: 'Ribbed Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Collar' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 239,
    name: 'Taekwondo Uniform-2075203',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1qGG0PVXXXXatXpXXq6xXFXXXu-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/HTB1qGG0PVXXXXatXpXXq6xXFXXXu-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 240,
    name: 'Taekwondo WHITE UNIFORM',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/37-scaled-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/37-scaled-2-500x500.jpg'
    ],
    description: 'Premium white Taekwondo uniform featuring a traditional black V-neck collar and a subtle ribbed fabric texture for enhanced durability. Comes complete with a wrap-around black belt, tailored for advanced practitioners and instructors.',
    specs: [
      { label: 'Material', value: 'Ribbed Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 241,
    name: 'Taekwondo WHITE/BLACK UNIFORM',
    category: 'taekwondo',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/40-scaled-2-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/40-scaled-2-500x500.jpg'
    ],
    description: 'Premium white Taekwondo uniform featuring a traditional black V-neck collar and a subtle ribbed fabric texture for enhanced durability. Comes complete with a wrap-around black belt, tailored for advanced practitioners and instructors.',
    specs: [
      { label: 'Material', value: 'Ribbed Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 242,
    name: 'HAPKIDO Black Red Uniform-207539',
    category: 'tai-chi',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/46589be5-bf9f-4e46-9db2-4e2bf6bb709a.4897e6e19f2798464389533349aa2008-500x500.jpeg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Black-option-800x800.jpg'
    ],
    description: 'Distinctive black martial arts uniform set featuring a dynamic red diamond-stitched pattern across the jacket. Includes a wrap-style top and matching elastic-waist pants, designed for demonstrations or specific martial arts disciplines.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black / Red Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 243,
    name: 'HAPKIDO Black Uniform-207538',
    category: 'tai-chi',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hapkido-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hapkido-500x500.jpg'
    ],
    description: 'Striking black martial arts uniform displayed from both front and back angles, featuring a bold white diamond-stitched lattice pattern. Complete with a standard white belt and matching black trousers for a standout look in demonstrations.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black / White Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 244,
    name: 'HAPKIDO BLUE Uniform-207540',
    category: 'tai-chi',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-550x550w-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/4-550x550w-500x500.jpg'
    ],
    description: 'Eye-catching blue martial arts uniform set comprising a wrap-around jacket with a white diamond-stitched pattern and matching solid blue pants. Designed with traditional tie closures to ensure a secure fit during rigorous movements.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Blue / White Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 245,
    name: 'HAPKIDO White Uniform-207537',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/white-1-500x500.jpg'
    ],
    description: 'Unique white martial arts uniform set highlighted by a black diamond-stitched pattern and bold black trim along the lapels, cuffs, hem, and pant legs. Tailored for comfort and visual impact during forms and demonstrations.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'White / Black Trim and Stitching' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 246,
    name: 'Kung Fu Cotton Sashes-207533',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Cotton-Sashes.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Cotton-Sashes.jpg'
    ],
    description: 'A diverse collection of martial arts sashes constructed from a smooth, lustrous fabric. Available in a wide spectrum of traditional ranking colors, ideal for kung fu, wushu, or demonstration uniforms.',
    specs: [
      { label: 'Material', value: 'Satin / Polyester Blend' },
      { label: 'Width', value: 'Standard Sash Width' },
      { label: 'Colors', value: 'Assorted Colors' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 247,
    name: 'Kung Fu Pants (Elastic Waist)-207529',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Pants-Elastic-Waist-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Pants-Elastic-Waist-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 248,
    name: 'Kung Fu Shoes-207535',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Shoes-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Shoes-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Canvas / Rubber Sole' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black / Orange Sole' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 249,
    name: 'Kung Fu Silk Sashes-207534',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Silk-Sashes-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Kung-Fu-Silk-Sashes-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Satin / Polyester Blend' },
      { label: 'Width', value: 'Standard Sash Width' },
      { label: 'Colors', value: 'Assorted Colors' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 250,
    name: 'Tai chi Kung Fu Nunchaku-207536',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/equimpent-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/equimpent-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Hardwood / Stainless Steel Chain' },
      { label: 'Width', value: 'Standard Size' },
      { label: 'Colors', value: 'Natural Wood / Chrome Metal' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 251,
    name: 'Tai-Chi- Uniform-207523',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/tai-chi-uniform-1-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/tai-chi-uniform-1-500x500.jpg'
    ],
    description: 'Elegant light beige traditional Chinese martial arts uniform designed for Tai Chi or Kung Fu. Features a relaxed, flowing fit, traditional Mandarin collar, and classic frog button (knot) closures to allow for completely unrestricted, fluid movement.',
    specs: [
      { label: 'Material', value: 'Cotton / Linen Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'Light Beige' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 252,
    name: 'Tai-Chi-Black Uniform-207525',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/tai-chi-uniform-viscosecotton-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/tai-chi-uniform-viscosecotton-500x500.jpg'
    ],
    description: 'Elegant light beige traditional Chinese martial arts uniform designed for Tai Chi or Kung Fu. Features a relaxed, flowing fit, traditional Mandarin collar, and classic frog button (knot) closures to allow for completely unrestricted, fluid movement.',
    specs: [
      { label: 'Material', value: 'Cotton / Linen Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 253,
    name: 'Tai-Chi-Silk Uniform-207528',
    category: 'tai-chi',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/silk-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/silk-500x500.jpg'
    ],
    description: 'Elegant light beige traditional Chinese martial arts uniform designed for Tai Chi or Kung Fu. Features a relaxed, flowing fit, traditional Mandarin collar, and classic frog button (knot) closures to allow for completely unrestricted, fluid movement.',
    specs: [
      { label: 'Material', value: 'Cotton / Linen Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'Light Beige' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },
    {
    id: 253,
    name: 'Hoodie and Trouser Pro-17625',
    category: 'tracksuit',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17625-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17625-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17625-1-800x800.jpg',
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Hoodie-and-Trouser-Pro-17625-2-800x800.jpg'
    ],
    description: 'Casual athletic tracksuit set featuring a black pullover hoodie and matching sweatpants, both highlighted by a distinctive gold basketball player silhouette graphic. Designed with a comfortable kangaroo pocket and adjustable drawstrings for everyday active or leisure wear.',
    specs: [
      { label: 'Material', value: 'Cotton / Fleece Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black / Gold Graphic, Pink, Grey' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 254,
    name: 'Mixed Martial Arts Pro-17520',
    category: 'tracksuit',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17520-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17520-500x500.png'
    ],
    description: 'Statement streetwear tracksuit set comprising a navy hoodie and matching joggers, featuring a bold cartoon portrait graphic and contrasting white color-block panels on the limbs. Finished with custom printed drawstrings and side-stripe text detailing for a unique, urban aesthetic.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Navy Blue / White Panels and Multi-Color Graphic' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 255,
    name: 'Mixed Martial Arts Pro-17521',
    category: 'tracksuit',
    badge: 'New',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17521-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17521-500x500.png'
    ],
    description: 'Sleek black zip-up tracksuit set designed with a high stand collar and matching active pants. Elevated by intricate gold ornate tribal-style graphics on the upper sleeves, offering a refined, athletic look.',
    specs: [
      { label: 'Material', value: 'Polyester / Spandex Blend' },
      { label: 'Width', value: 'Athletic Fit' },
      { label: 'Colors', value: 'Black / Gold Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 256,
    name: 'Mixed Martial Arts Pro-17522',
    category: 'tracksuit',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17522-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17522-500x500.png'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Polyester / Cotton Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Black / Grey Block' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 257,
    name: 'Mixed Martial Arts Pro-17523',
    category: 'tracksuit',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17523-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17523-500x500.jpg'
    ],
    description: 'Professional combat sports equipment crafted for performance and durability. Designed for training and competition use with customization available for teams and academies.',
    specs: [
      { label: 'Material', value: 'Polyester / Fleece Blend' },
      { label: 'Width', value: 'Standard Fit' },
      { label: 'Colors', value: 'Red / Black' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 258,
    name: 'Mixed Martial Arts Pro-17526',
    category: 'tracksuit',
    badge: null,
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17526-456x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17526-456x500.jpg'
    ],
    description: 'Classic athletic zip-up tracksuit featuring a sleek black jacket and matching pants, accented with vibrant orange triple-stripe detailing down the sleeves and legs. Constructed with a stand collar and horizontal chest piping for a retro-inspired sporty aesthetic.',
    specs: [
      { label: 'Material', value: 'Polyester Track Fabric' },
      { label: 'Width', value: 'Athletic Fit' },
      { label: 'Colors', value: 'Black / Orange Stripes' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 259,
    name: 'Mixed Martial Arts Pro-17527',
    category: 'tracksuit',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17527-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17527-500x500.jpg'
    ],
    description: 'High-performance black zip-up tracksuit set featuring a hooded jacket and matching joggers, highlighted by sleek, reflective chevron and linear accents. Finished with bold typographic branding on the lower sleeve and pant leg for a modern, active look.',
    specs: [
      { label: 'Material', value: 'Polyester / Spandex Blend' },
      { label: 'Width', value: 'Athletic Fit' },
      { label: 'Colors', value: 'Black / Reflective Grey Accents' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 260,
    name: 'Mixed Martial Arts Pro-17528',
    category: 'tracksuit',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17528-500x500.jpg',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17528-500x500.jpg'
    ],
    description: 'Crisp white casual tracksuit set consisting of a comfortable pullover hoodie and matching sweatpants with a kangaroo pocket. Accented with a bold black racing stripe down the sleeves and legs, complemented by striped ribbed cuffs and black drawstrings.',
    specs: [
      { label: 'Material', value: 'Cotton / Polyester Blend' },
      { label: 'Width', value: 'Relaxed Fit' },
      { label: 'Colors', value: 'White / Black Stripes' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
    ],
  },

  {
    id: 261,
    name: 'Mixed Martial Arts Pro-17541',
    category: 'tracksuit',
    badge: 'Custom',
    featured: false,
    image: 'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17541-500x500.png',
    images: [
      'https://www.prosafetywear.com/wp-content/uploads/2024/12/Mixed-Martial-Arts-Pro-17541-500x500.png'
    ],
    description: 'Premium white full-zip tracksuit featuring a high stand collar jacket and tapered pants, distinguished by striking multi-colored taping down the lateral sides. Finished with a small, circular emblem on the chest for a classic, club-ready athletic style.',
    specs: [
      { label: 'Material', value: 'Polyester Track Fabric' },
      { label: 'Width', value: 'Athletic Fit' },
      { label: 'Colors', value: 'White / Red and Blue Striped Tape' },
      { label: 'MOQ', value: '20 pieces' },
      { label: 'Lead Time', value: '2–3 weeks' }
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

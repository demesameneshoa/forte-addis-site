export const CONTACT = {
  address: ['Alexander Pushkin St., around Sar Bet', 'Stairs Building, 2nd Floor', 'Addis Ababa, Ethiopia'],
  phone: '+251-911-123456',
  email: 'info@forteaddis.com',
  web: 'www.forteaddis.com',
};

export const IMG = {
  cover: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=2000&q=80',
  food: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80',
  quarry: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80',
  crane: 'https://loremflickr.com/1600/1000/construction,crane,site?lock=11',
  kitchen: 'https://loremflickr.com/1200/1400/kitchen,chef,restaurant?lock=21',
  meat: 'https://loremflickr.com/1600/1100/butcher,meat?lock=7',
  produce: 'https://loremflickr.com/1400/1000/vegetables,market,produce?lock=13',
  cold: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&q=80',
  cement: 'https://loremflickr.com/1600/1100/cement,construction,steel?lock=17',
  granite: 'https://loremflickr.com/1600/1100/granite,marble,stone?lock=4',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  textile: 'https://loremflickr.com/1400/1600/uniform,workwear,textile?lock=23',
  event: 'https://loremflickr.com/1400/1600/banner,event,stage?lock=29',
  interior: 'https://loremflickr.com/1600/1100/hotel,lobby,interior?lock=31',
  farm: 'https://loremflickr.com/1600/1100/farm,field,agriculture?lock=37',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
  team: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
  farmer: 'https://loremflickr.com/1600/1100/farmer,harvest,field?lock=41',
  city: 'https://loremflickr.com/1800/1100/city,skyline,architecture?lock=43',
  truck: 'https://loremflickr.com/1600/1000/truck,logistics,delivery?lock=47',
  warehouse: 'https://loremflickr.com/1600/1000/warehouse,storage,pallets?lock=53',
  poultry: 'https://loremflickr.com/1600/1000/poultry,farm,chicken?lock=59',
  meeting: 'https://loremflickr.com/1600/1000/business,meeting,office?lock=61',
};

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/value-chain', label: 'Value Chain' },
  { href: '/clients', label: 'Clients' },
  { href: '/team', label: 'Team' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/careers', label: 'Careers' },
];

export type Offering = { title: string; text: string; items: string[] };
export type Highlight = { title: string; text: string };
export type Service = {
  slug: string;
  num: string;
  title: string;
  tag: string;
  short: string;
  lead: string;
  body: string[];
  image: string;
  image2: string;
  offerings: Offering[];
  highlights: Highlight[];
  served: string[];
};

export const services: Service[] = [
  {
    slug: 'food-items-supply',
    num: '01',
    title: 'Food Items Supply',
    tag: 'The Primary Wing',
    short: 'Dry goods, fresh and frozen produce, and portioned meat — delivered at institutional scale against a single standard.',
    lead: 'Food is where FORTE’s discipline is most visible. A kitchen serving five thousand meals should receive the same consistency as one serving fifty.',
    body: [
      'FORTE became a food supplier by necessity and stayed by conviction. When a national mega project outgrew its local caterers, we organized producers, passed facility audits and delivered at a scale the market had assumed required imports. That experience is now our core business.',
      'Today we supply fresh, frozen, dried and processed food to mega projects, embassies, international hotels, high-end restaurants and multinational canteens — with ready-cut, portioned and ready-to-cook options that reduce waste, improve hygiene and simplify kitchen operations.',
    ],
    image: IMG.meat,
    image2: IMG.produce,
    offerings: [
      { title: 'Dry Food Items', text: 'Staples supplied in reliable volume, with consistent grading across every delivery.', items: ['Pasta and macaroni', 'Grains and pulses', 'Flour and cereals', 'Spices and seasonings'] },
      { title: 'Fruits & Vegetables', text: 'Fresh, frozen and processed produce, prepared to the client’s kitchen specification.', items: ['Fresh seasonal produce', 'Peeled, cut and portioned lines', 'Frozen vegetables', 'Juice-grade fruit for producers'] },
      { title: 'Meat Products', text: 'Protein handled correctly from slaughter to delivery — the basis of our cold-chain discipline.', items: ['Beef and lamb', 'Chicken', 'Fish', 'Portioned, chilled or frozen cuts'] },
      { title: 'Ready-to-Cook & Processed', text: 'Prepared items that shorten prep time and reduce kitchen waste for high-volume operations.', items: ['Marinated and pre-cut items', 'Portion-controlled packs', 'Custom specifications on request', 'Consistent pack sizing'] },
    ],
    highlights: [
      { title: 'Frozen is the New Fresh', text: 'Proper slaughtering, blood drainage, portioning, chilling and controlled freezing deliver higher hygiene, longer shelf life and consistent cooking quality.' },
      { title: 'One accountable vendor', text: 'A single-vendor, end-to-end model replaces fragmented sourcing — fewer invoices, fewer handovers, one point of accountability.' },
      { title: 'Audited supplier network', text: 'Producers are vetted, trained and held to Food and Drug Authority green certification requirements.' },
      { title: 'Flexible payment', text: 'Credit-based payment structures designed around how institutional clients actually operate.' },
    ],
    served: ['Mega projects', 'International caterers', 'Embassies', 'International hotels', 'High-end restaurants', 'Multinational canteens', 'Juice producers'],
  },
  {
    slug: 'cold-room-provision',
    num: '02',
    title: 'Cold Room Provision & Installation',
    tag: 'Cold Chain',
    short: 'Cold room installation, storage leasing and cold-chain logistics — protecting quality from source to service.',
    lead: 'Product integrity is decided long before delivery. Cold storage is where it is kept — or lost.',
    body: [
      'Our cold room capability grew out of our own food operation: to guarantee frozen and chilled quality, we had to control temperature at every link. We now extend that capability to clients who need storage on site or capacity on demand.',
      'FORTE installs cold rooms for projects, hotels and processors, leases and manages cold storage, and provides cold-chain logistics so that temperature-sensitive goods arrive exactly as they left.',
    ],
    image: IMG.cold,
    image2: IMG.warehouse,
    offerings: [
      { title: 'Cold Room Installation', text: 'Turnkey cold rooms sized to the client’s throughput, from site assessment to commissioning.', items: ['Site assessment and sizing', 'Chiller and freezer rooms', 'Remote-site installations', 'Commissioning and handover'] },
      { title: 'Storage Leasing', text: 'Cold storage capacity for clients who need space without the capital outlay.', items: ['Chilled and frozen capacity', 'Short and long-term terms', 'Managed inventory', 'Scalable allocation'] },
      { title: 'Cold-Chain Logistics', text: 'Temperature-held transport that keeps the chain unbroken between storage and kitchen.', items: ['Refrigerated delivery', 'Scheduled replenishment', 'Remote project routes', 'Handling to SHEQ standard'] },
    ],
    highlights: [
      { title: 'Built from practice', text: 'Designed by the same team that runs FORTE’s own frozen supply — not specified from a catalogue.' },
      { title: 'Remote-ready', text: 'Experience installing and servicing storage at mega-project sites far from city infrastructure.' },
      { title: 'Integrated with supply', text: 'Combine storage with food supply for a single, accountable cold chain.' },
    ],
    served: ['Mega projects', 'Hotels', 'Catering companies', 'Food processors', 'Commercial facilities'],
  },
  {
    slug: 'construction-materials',
    num: '03',
    title: 'Construction Materials & Equipment',
    tag: 'Where We Began',
    short: 'Cement, steel, pipes, tools and machinery — supplied, sold or rented to projects working against the clock.',
    lead: 'Construction supply is the line FORTE began with — and where we first learned that reliability is the product.',
    body: [
      'Before food, FORTE supplied construction raw materials and equipment to large projects. That work built our supplier relationships, our logistics discipline and our credibility with the most demanding clients in the country.',
      'We continue to supply core materials and to provide tools and heavy machinery for sale or rental, coordinating delivery to remote sites and scaling with each phase of a project.',
    ],
    image: IMG.cement,
    image2: IMG.crane,
    offerings: [
      { title: 'Raw Materials', text: 'Core building inputs supplied in project-scale volume.', items: ['Cement', 'Reinforcement steel', 'PVC pipes and fittings', 'HDPE and LDPE'] },
      { title: 'Tools & Machinery', text: 'Equipment available for outright purchase or flexible rental.', items: ['Construction tools', 'Heavy machinery rental', 'Equipment sales', 'Phase-based scheduling'] },
    ],
    highlights: [
      { title: 'Mega-project proven', text: 'Supplied materials and equipment to one of Ethiopia’s largest national projects.' },
      { title: 'Rent or buy', text: 'Equipment terms structured around project phases rather than fixed catalogues.' },
    ],
    served: ['Mega projects', 'Contractors', 'Government projects', 'Commercial developers'],
  },
  {
    slug: 'mining-operations',
    num: '04',
    title: 'Mining Operations',
    tag: 'Through Rock Age',
    short: 'Granite and marble quarrying through Rock Age Trading Industries, with processing capacity under development.',
    lead: 'FORTE’s operational discipline was formed in the quarry — through Rock Age Trading Industries.',
    body: [
      'Rock Age Trading Industries, FORTE’s parent enterprise, operates granite and marble quarries and holds a strong footprint in construction raw materials and vehicle-related imports.',
      'Rock Age is developing a granite processing plant representing an ETB 300 million investment, with coal and limestone production planned as future lines.',
    ],
    image: IMG.granite,
    image2: IMG.quarry,
    offerings: [
      { title: 'Granite & Marble Quarrying', text: 'Natural stone extracted from Rock Age quarry operations.', items: ['Babile pink granite', 'Babile black granite', 'Marble'] },
      { title: 'Processing & Future Lines', text: 'Investment in value-adding processing and diversified extraction.', items: ['Granite processing plant (ETB 300M)', 'Future coal production', 'Future limestone production'] },
    ],
    highlights: [
      { title: 'Foundation of discipline', text: 'Quarry operations shaped FORTE’s supplier management and large-project exposure.' },
      { title: 'Adding value locally', text: 'Processing in-country rather than exporting raw stone.' },
    ],
    served: ['Construction projects', 'Finishing contractors', 'Developers'],
  },
  {
    slug: 'furniture-office-supplies',
    num: '05',
    title: 'Furniture & Office Supplies',
    tag: 'New Line',
    short: 'Office, institutional and camp furniture sourced from vetted manufacturers, including custom fabrication.',
    lead: 'From head offices to remote camps, we furnish the places people work and live.',
    body: [
      'Clients who trusted FORTE with food and materials asked us to apply the same discipline to furnishing. We source directly from vetted manufacturers to deliver consistent quality, competitive pricing and reliable delivery at volume.',
      'Our range covers corporate offices, institutions and remote project camps, with custom fabrication when standard pieces don’t fit the brief.',
    ],
    image: IMG.office,
    image2: IMG.meeting,
    offerings: [
      { title: 'Office Furniture', text: 'Complete workplace fit-out for corporate and institutional clients.', items: ['Desks and workstations', 'Ergonomic seating', 'Filing and storage', 'Meeting and reception'] },
      { title: 'Camp Furniture', text: 'Durable furnishing for remote accommodation and workforce camps.', items: ['Dormitory beds', 'Lockers', 'Dining furniture', 'Lounge furniture'] },
      { title: 'Custom Fabrication', text: 'Pieces built to client specification when the catalogue doesn’t fit.', items: ['Bespoke dimensions', 'Branded finishes', 'Volume production'] },
    ],
    highlights: [
      { title: 'Direct from manufacturers', text: 'Fewer intermediaries means better pricing and clearer quality control.' },
      { title: 'Volume reliability', text: 'Large, time-sensitive orders delivered to schedule — including to remote sites.' },
    ],
    served: ['Corporate offices', 'Institutions', 'Project camps', 'Government', 'NGOs'],
  },
  {
    slug: 'garment-textile',
    num: '06',
    title: 'Garment & Textile Products',
    tag: 'New Line',
    short: 'Workwear, uniforms, PPE clothing and camp textiles from a supplier network vetted for quality and ethical sourcing.',
    lead: 'A large workforce needs to be clothed, equipped and housed — to standard and on time.',
    body: [
      'FORTE’s garment and textile line serves camps, government programmes and non-governmental organizations with a supplier network vetted for quality, ethical sourcing and the capacity to meet large, time-sensitive orders.',
      'We handle bulk procurement end to end, so programme managers deal with one accountable partner instead of many suppliers.',
    ],
    image: IMG.textile,
    image2: IMG.warehouse,
    offerings: [
      { title: 'Workwear & PPE', text: 'Clothing for workforces in demanding environments.', items: ['Uniforms', 'Coveralls', 'PPE clothing'] },
      { title: 'Camp Textiles', text: 'Everything needed to equip remote accommodation.', items: ['Bedding and linens', 'Blankets', 'Tent fabrics'] },
      { title: 'Bulk Procurement', text: 'Programme-scale sourcing for public and humanitarian clients.', items: ['Government programmes', 'NGO programmes', 'Scheduled call-offs'] },
    ],
    highlights: [
      { title: 'Ethically sourced', text: 'Suppliers vetted for working standards as well as product quality.' },
      { title: 'Time-sensitive capacity', text: 'Built for large orders with fixed deadlines.' },
    ],
    served: ['Project camps', 'Government', 'NGOs', 'Industrial employers'],
  },
  {
    slug: 'advertising-events',
    num: '07',
    title: 'Advertising, Promotion & Event Materials',
    tag: 'New Line',
    short: 'Branded items, signage, print and event materials — one accountable partner for operational and marketing needs.',
    lead: 'The same discipline we apply to supply chains, applied to how our clients appear in public.',
    body: [
      'FORTE extends its procurement discipline to brand-facing materials, positioning itself as a one-stop resource partner for both operational and marketing needs.',
      'From corporate giveaways to complete event staging, we coordinate production and delivery so campaigns and events land on time and on brand.',
    ],
    image: IMG.event,
    image2: IMG.city,
    offerings: [
      { title: 'Branded Items', text: 'Merchandise and apparel carrying the client’s identity.', items: ['Corporate giveaways', 'Branded apparel', 'Print collateral'] },
      { title: 'Event Materials', text: 'Physical infrastructure for launches, conferences and activations.', items: ['Banners and backdrops', 'Tents', 'Staging accessories'] },
      { title: 'Advertising Materials', text: 'Indoor and outdoor materials produced per campaign.', items: ['Signage', 'Outdoor advertising', 'Indoor displays'] },
    ],
    highlights: [
      { title: 'One partner', text: 'Marketing materials procured alongside operational supply, under one relationship.' },
      { title: 'Deadline-driven', text: 'Event work runs on fixed dates; our logistics are built for it.' },
    ],
    served: ['Corporate offices', 'Event organizers', 'Embassies', 'NGOs'],
  },
  {
    slug: 'finishing-interior-design',
    num: '08',
    title: 'Finishing Works & Interior Design',
    tag: 'New Line',
    short: 'Interior finishing and design contracting for hotels, malls, convention centers and commercial facilities.',
    lead: 'We extend our relationships into the spaces our clients operate within.',
    body: [
      'FORTE’s finishing and interior contracting serves hospitality and commercial clients who need spaces delivered to an international standard.',
      'We take projects from space planning and design consultancy through to finishing execution, coordinating materials — including natural stone from our own lineage — under one contract.',
    ],
    image: IMG.interior,
    image2: IMG.office,
    offerings: [
      { title: 'Finishing Works', text: 'Interior execution to specification and schedule.', items: ['Flooring', 'Ceilings', 'Partitioning', 'Painting and fixtures'] },
      { title: 'Design & Planning', text: 'Consultancy that turns a brief into a buildable plan.', items: ['Space planning', 'Design consultancy', 'Material selection'] },
      { title: 'End-to-End Delivery', text: 'One contract from concept to handover.', items: ['Design through finishing', 'Materials coordination', 'Handover'] },
    ],
    highlights: [
      { title: 'Hospitality focus', text: 'Built around the standards of hotels, malls and convention centers.' },
      { title: 'Materials advantage', text: 'Direct access to granite and marble through Rock Age.' },
    ],
    served: ['Hotels', 'Malls', 'Convention centers', 'Commercial facilities'],
  },
];

export const team = [
  { name: 'Fikadu', initials: 'F', role: 'Chief Executive Officer' },
  { name: 'Zelalem Habtamu', initials: 'ZH', role: 'Head of Operations' },
  { name: 'Muluken Asrat', initials: 'MA', role: 'Finance Manager' },
  { name: 'Abel Aklilu', initials: 'AA', role: 'Logistics & Supply Chain Manager' },
  { name: 'Eden Tamiru', initials: 'ET', role: 'Business Development & Customer Service' },
  { name: 'Kidist Abera', initials: 'KA', role: 'Sales & Marketing Supervisor' },
  { name: 'Rediet Meka', initials: 'RM', role: 'Accountant' },
  { name: 'Abigiya Tsegaye', initials: 'AT', role: 'Office Administration & Reception' },
];

export const functions = [
  'Human Resources & Administration',
  'Finance Management',
  'Operations Management',
  'Logistics & Supply Chain',
  'Business Development & Customer Service',
  'Sales & Marketing',
  'Quality Assurance',
];

export const values = [
  { title: 'Reliability', text: 'We deliver what we promise, consistently.' },
  { title: 'Quality Excellence', text: 'Standards are upheld at every stage.' },
  { title: 'Integrity', text: 'Transparency in sourcing, pricing and partnerships.' },
  { title: 'Customer-Centricity', text: 'Tailored solutions, not generic supply.' },
  { title: 'Collaboration', text: 'Strong partnerships across the value chain.' },
  { title: 'Sustainability', text: 'Responsible growth for people and the planet.' },
];

export const timeline = [
  { year: '2018', title: 'The Beginning', text: 'Rock Age foundations in mining, construction raw materials and vehicle-related imports.' },
  { year: '2024', title: 'The Pivot', text: 'Food items supply becomes the primary wing, delivered at mega-project scale.' },
  { year: '2026', title: 'The Expansion', text: 'Owned farms, poultry units, processing facilities and cold rooms brought to scale.' },
  { year: '2027+', title: 'Beyond Local Reach', text: 'Entry into export markets, and a national reference standard for organized supply.' },
];

export const chain = [
  { title: 'Farms', text: 'Long-term partnerships with local producers, and investment in FORTE’s own farms and poultry units to secure supply continuity at source.', image: IMG.farm },
  { title: 'Processing', text: 'Hygienic slaughtering, blood drainage, cutting and portioning to client specification, followed by controlled chilling and freezing.', image: IMG.meat },
  { title: 'Cold Chain', text: 'Owned and managed cold rooms preserve product integrity, with temperature-held transport bridging storage and site.', image: IMG.cold },
  { title: 'Delivery', text: 'Scheduled, tailored fulfilment to each client’s operation — from city restaurants to remote mega-project camps.', image: IMG.truck },
];

export const qa = [
  { title: 'Quarterly health inspections', text: 'Every member of processing personnel is medically inspected each quarter.' },
  { title: 'Daily SHEQ practice', text: 'Safety, health, environment and quality procedures are practised every working day, not audited once a year.' },
  { title: 'FDA green certification', text: 'Suppliers must comply with Food and Drug Authority green certification requirements.' },
  { title: 'Supplier development', text: 'Continuous training raises the standard of the producers we depend on.' },
];

export const clientSegments = [
  { title: 'Mega Projects', text: 'Workforces in the thousands, often in remote regions, needing uninterrupted supply.' },
  { title: 'Embassies & Diplomatic Missions', text: 'Exacting standards and discretion for diplomatic households and events.' },
  { title: 'Multinational Canteens', text: 'Daily high-volume feeding with consistent menus and hygiene.' },
  { title: 'Catering Companies', text: 'International caterers who need a reliable local sourcing partner.' },
  { title: 'High-End Restaurants', text: 'Premium cuts and produce delivered to specification.' },
  { title: 'Juice & Beverage Producers', text: 'Consistent fruit supply at production volumes.' },
  { title: 'Government & NGO Programmes', text: 'Bulk procurement for public and humanitarian initiatives.' },
  { title: 'Hotels, Malls & Convention Centers', text: 'Hospitality supply, furnishing and interior finishing.' },
  { title: 'Commercial Facilities', text: 'Operational supply and fit-out for commercial spaces.' },
  { title: 'Corporate Offices & Event Organizers', text: 'Furniture, branded materials and event infrastructure.' },
];

export const whyStay = ['Reliability', 'Consistent quality', 'Volume capacity', 'Credit-based payment flexibility', 'Single-source convenience'];

export const painPoints = [
  { pain: 'Inconsistent quality and standards', answer: 'Audited suppliers, daily SHEQ practice and a single specification across every delivery.' },
  { pain: 'Fragmented sourcing across many vendors', answer: 'One accountable vendor, end to end — from farm to kitchen.' },
  { pain: 'Inflexible payment structures', answer: 'Credit-based payment terms designed for institutional operations.' },
  { pain: 'Inability to meet large or specialized volumes', answer: 'Proven delivery to a workforce of more than 5,000 at a national mega project.' },
  { pain: 'No ready-to-cook, portioned or processed options', answer: 'Ready-cut, portioned, frozen and processed lines that reduce waste and prep time.' },
];

export const impact = [
  { title: 'Employment', text: 'Labour-intensive farms and processing units established specifically to create youth employment.', image: IMG.farmer },
  { title: 'School Feeding', text: 'Partnerships with the Addis Ababa City Administration supporting school feeding programmes.', image: IMG.food },
  { title: 'Import Substitution', text: 'Proving that local producers can meet international standards reduces import dependency and foreign currency outflow.', image: IMG.produce },
  { title: 'Local Producers', text: 'Structured, predictable sourcing gives farmers and producers the confidence to invest and grow.', image: IMG.farm },
];

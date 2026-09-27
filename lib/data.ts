export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  idealFor: string[];
  startingPrice?: string;
  image: string;
  badge?: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "commercial";
}

export const BUSINESS_INFO = {
  name: "Sydney Pressure Washing Service",
  legalName: "Sydney Pressure Washing Service Pty Ltd",
  phone: "0413 708 416",
  phoneRaw: "0413708416",
  phoneInternational: "+61413708416",
  email: "info@sydneypressure.com.au",
  address: "103A Birriga Road, Bellevue Hill NSW 2023",
  operatingHours: "Monday – Sunday: 7:00 AM – 9:00 PM",
  serviceAreas: [
    "Sydney City & CBD",
    "Eastern Suburbs",
    "Inner West",
    "Lower North Shore",
  ],
  serviceSuburbs: [
    "Bellevue Hill",
    "Bondi & Bondi Junction",
    "Double Bay",
    "Rose Bay",
    "Vaucluse",
    "Coogee & Clovelly",
    "Randwick & Kensington",
    "Paddington & Woollahra",
    "Balmain & Rozelle",
    "Leichhardt & Annandale",
    "Newtown & Erskineville",
    "Glebe & Camperdown",
    "Marrickville & Dulwich Hill",
    "Mosman & Neutral Bay",
    "North Sydney & Kirribilli",
    "Cremorne & Crows Nest",
  ],
  whatsappUrl: "https://wa.me/61413708416?text=Hi%20Sydney%20Pressure%20Washing%20Service,%20I'd%20like%20to%20request%20a%20free%20quote.",
  phoneUrl: "tel:0413708416",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-pressure-cleaning",
    slug: "residential-pressure-cleaning",
    title: "Residential Pressure Cleaning",
    shortDescription:
      "High-pressure restoration for driveways, brick pavers, sandstone walls, and outdoor living areas across Sydney.",
    fullDescription:
      "Transform your home exterior with professional high-pressure surface cleaning. We remove years of embedded dirt, black mold, slippery moss, motor oil, and atmospheric grime to restore original color and texture safely.",
    features: [
      "Industrial rotary surface cleaners for streak-free results",
      "Driveways, paths, pool surrounds, and entertaining patios",
      "Safe pressure regulation matched to each surface substrate",
      "Biodegradable pre-treatments for deep organic stain removal",
    ],
    idealFor: [
      "Driveways & Carports",
      "Patios & Timber Decks",
      "Pool Surrounds & Coping",
      "Exterior Brick & Sandstone",
    ],
    startingPrice: "From $250",
    image: "/images/hero.jpg",
    badge: "Most Popular",
  },
  {
    id: "soft-washing",
    slug: "soft-washing",
    title: "House Exterior Soft Washing",
    shortDescription:
      "Gentle low-pressure cleaning utilizing biodegradable solutions that eradicate algae, lichen, and mildew without damaging paint.",
    fullDescription:
      "Soft washing uses high-volume, low-pressure water coupled with specialized biodegradable cleaning agents to safely sanitize delicate surfaces such as rendered walls, painted timber weatherboards, eaves, gutters, and colorbond roofs without high-pressure surface erosion.",
    features: [
      "Low pressure system prevents surface water intrusion & paint gouging",
      "Biodegradable sanitizing treatments kill mold spores at the root",
      "Keeps exterior surfaces clean up to 4x longer than water blasting alone",
      "Safe for architectural renders, cladding, glass, and surrounding gardens",
    ],
    idealFor: [
      "Rendered Exterior Walls",
      "Weatherboard & Cladding",
      "Eaves, Gutters & Fascias",
      "Delicate Heritage Facades",
    ],
    startingPrice: "From $450",
    image: "/images/softwash.jpg",
    badge: "Eco-Conscious",
  },
  {
    id: "strata-cleaning",
    slug: "strata-cleaning",
    title: "Strata Soft & Pressure Cleaning",
    shortDescription:
      "Comprehensive washing for body corporate complexes, apartment stairwells, underground carparks, and common corridors.",
    fullDescription:
      "Sydney strata managers trust our team for compliant, fully insured pressure and soft washing. We eliminate slip hazards from public thoroughfares, sanitize garbage bin rooms, and restore common recreational grounds with minimal disruption to residents.",
    features: [
      "$20M public liability coverage and full WHS compliance documentation",
      "Underground carparks, oil stain treatment & line-marked bays",
      "Bin bay sanitization and deodorization using bio-friendly detergents",
      "Scheduled ongoing strata maintenance contracts available",
    ],
    idealFor: [
      "Common Walkways & Entrances",
      "Underground & Visitor Car Parks",
      "Strata Pool Areas & Courtyards",
      "Bin Storage Rooms & Docks",
    ],
    startingPrice: "Custom Quote",
    image: "/images/strata.jpg",
    badge: "Strata Compliant",
  },
  {
    id: "commercial-pressure-cleaning",
    slug: "commercial-pressure-cleaning",
    title: "Commercial Pressure Cleaning",
    shortDescription:
      "Heavy-duty cleaning for industrial warehouses, loading docks, retail frontages, petrol stations, and sports grounds.",
    fullDescription:
      "Our commercial division operates high-output hot and cold pressure units engineered to eliminate stubborn industrial grease, tyre marks, fuel spills, and heavy foot-traffic build-up on commercial hard surfaces.",
    features: [
      "Flexible after-hours and weekend scheduling to avoid business downtime",
      "WHS/OH&S certified operators with comprehensive insurance",
      "Hot water cleaning units for oil, petroleum, and cooking grease",
      "Compliant wastewater management and eco-conscious disposal",
    ],
    idealFor: [
      "Warehouses & Loading Docks",
      "Petrol Stations & Forecourts",
      "Commercial Retail Plazas",
      "Hard Surface Sports Venues",
    ],
    startingPrice: "Custom Quote",
    image: "/images/commercial.jpg",
    badge: "Fully Insured",
  },
  {
    id: "driveway-cleaning",
    slug: "driveway-cleaning",
    title: "Driveway Cleaning & Sealing",
    shortDescription:
      "Deep rotary cleaning followed by premium clear or tinted protective sealers to prevent weed growth and oil absorption.",
    fullDescription:
      "Your driveway represents the curb appeal forefront of your property. We strip accumulated grease, tyre rubber, and lichen, followed by penetrative or topical concrete sealers that repel moisture, UV degradation, and future staining.",
    features: [
      "Heavy-duty flat-surface rotary cleaning with uniform sweep patterns",
      "Deep chemical extraction of stubborn vehicle motor oil and fluids",
      "High-grade slip-resistant penetrating or wet-look sealing options",
      "Dramatically extends the life of concrete, stencil, and pavers",
    ],
    idealFor: [
      "Exposed Aggregate Concrete",
      "Stamped & Stenciled Driveways",
      "Interlocking Pavers",
      "Plain Grey & Coloured Concrete",
    ],
    startingPrice: "From $250",
    image: "/images/driveway-sealed.jpg",
    badge: "High Value",
  },
  {
    id: "pre-paint-soft-washing",
    slug: "pre-paint-soft-washing",
    title: "Pre-Paint Soft Washing",
    shortDescription:
      "Thorough surface decontamination to ensure flawless paint adhesion and prevent premature paint peeling.",
    fullDescription:
      "Painters throughout Sydney recommend our pre-paint soft wash service. We strip away loose chalking paint, dust, air-pollution film, and hidden mildew colonies, leaving a pristine substrate for primers and coats to bond permanently.",
    features: [
      "Strips surface oxidation and chalking residue without gouging timber",
      "Neutralizes active mold and mildew spores before paint application",
      "Dramatically extends paint lifespan and prevents bubbling/peeling",
      "Trusted by Sydney painters, builders, and decorators",
    ],
    idealFor: [
      "Exterior Repainting Preparation",
      "Weatherboard Cottages",
      "Timber Fascias & Eaves",
      "Rendered Residential Facades",
    ],
    startingPrice: "From $450",
    image: "/images/softwash.jpg",
  },
  {
    id: "sandstone-brick-cleaning",
    slug: "sandstone-brick-cleaning",
    title: "Sandstone & Brick Cleaning",
    shortDescription:
      "Heritage-safe low to medium pressure washing designed to bring natural Sydney golden sandstone back to life.",
    fullDescription:
      "Sydney sandstone is naturally porous and prone to deep black fungal staining. We employ custom-calibrated pressure nozzles and gentle biodegradable treatments that coax out natural warm golden hues without eroding stone mortar joints.",
    features: [
      "Preserves historic mortar, soft bricks, and delicate stone face",
      "Eradicates deep black mold, green moss, and moisture staining",
      "No harsh hydrochloric acids that yellow or degrade sandstone",
      "Perfect for heritage retaining walls, garden steps, and boundary fences",
    ],
    idealFor: [
      "Sydney Heritage Sandstone",
      "Retaining Walls & Steps",
      "Face Brick & Common Brick",
      "Stone Boundary Walls",
    ],
    startingPrice: "From $300",
    image: "/images/sandstone.jpg",
  },
  {
    id: "pool-area-cleaning",
    slug: "pool-area-cleaning",
    title: "Pool Area Cleaning",
    shortDescription:
      "Slip-resistant sanitization for pool surrounds, coping stones, travertine, and glass balustrades.",
    fullDescription:
      "Pool coping and paved surrounds frequently harbor slippery algae that create serious fall risks for families. We wash and sanitize pool aprons, directing runoff away from pool water while keeping surfaces crisp, clean, and safe.",
    features: [
      "Eliminates slippery biofilm and green algae around pool edges",
      "Controlled runoff techniques prevent dirty water entering pool systems",
      "Restores natural travertine, bluestone, granite, and sandstone",
      "Spotless wash for glass safety fences and stainless fixtures",
    ],
    idealFor: [
      "Travertine & Bluestone Coping",
      "Timber Pool Decks",
      "Glass Pool Fencing Surrounds",
      "Outdoor Shower & BBQ Aprons",
    ],
    startingPrice: "From $300",
    image: "/images/pool.jpg",
  },
  {
    id: "deck-patio-cleaning",
    slug: "deck-patio-cleaning",
    title: "Deck & Patio Cleaning",
    shortDescription:
      "Revitalize hardwood decking, tiled patios, and outdoor pergolas for pristine outdoor Sydney entertaining.",
    fullDescription:
      "Restore grey, weathered hardwood decking (Merbau, Spotted Gum, Blackbutt) and paved patios to their radiant original character. We strip silvered wood fibers, food stains, and dirt ready for natural oils or sealers.",
    features: [
      "Timber-friendly pressure settings that won't splinter hardwood grains",
      "Eliminates BBQ grease, wine spills, and atmospheric fallout",
      "Prepares wood surfaces perfectly for staining, oiling, or varnish",
      "Safe around outdoor furniture, planters, and ornamental gardens",
    ],
    idealFor: [
      "Hardwood & Composite Decks",
      "Covered Entertaining Verandahs",
      "Outdoor Alfresco Tiled Patios",
      "Timber Pergolas & Screening",
    ],
    startingPrice: "From $300",
    image: "/images/sandstone.jpg",
  },
  {
    id: "graffiti-removal",
    slug: "graffiti-removal",
    title: "Graffiti Removal",
    shortDescription:
      "Fast, gentle removal of aerosol spray paint, marker ink, and tags from porous masonry, metal, and painted surfaces.",
    fullDescription:
      "Vandalism requires immediate remediation. We deploy specialized eco-friendly solvent emulsions and temperature-controlled pressure washing to dissolve spray paint and lift pigments without shadowing or damaging underlying brickwork.",
    features: [
      "Rapid response service for commercial and residential properties",
      "Non-destructive chemical lifting agents that eliminate ghosting",
      "Safe for heritage sandstone, face brick, painted metal, and concrete",
      "Optional sacrificial anti-graffiti protective coatings",
    ],
    idealFor: [
      "Commercial Building Facades",
      "Boundary Walls & Fences",
      "Roller Doors & Shopfronts",
      "Strata Common Perimeter Walls",
    ],
    startingPrice: "Custom Quote",
    image: "/images/commercial.jpg",
  },
  {
    id: "sidewalk-walkway-cleaning",
    slug: "sidewalk-walkway-cleaning",
    title: "Sidewalk & Walkway Cleaning",
    shortDescription:
      "Safety-first washing for pedestrian paths, residential walkways, council-aligned crossovers, and entry stairs.",
    fullDescription:
      "Eliminate liability hazards caused by damp, algae-coated footpaths and sidewalks. Our high-pressure surface washers strip away chewing gum, leaf tannin stains, and moss to leave public and private pathways clean and slip-free.",
    features: [
      "Rapid coverage for long pathways and pedestrian ramps",
      "Effective removal of sticky chewing gum, tree sap, and mud",
      "Enhances pedestrian safety and minimizes slip-and-fall claims",
      "Uniform, streak-free rotary surface technology",
    ],
    idealFor: [
      "Residential Front Entrances",
      "Garden Stepping Paths",
      "Commercial Footpaths",
      "Community Public Accessways",
    ],
    startingPrice: "From $250",
    image: "/images/before-after.jpg",
  },
  {
    id: "backyard-outdoor-clean",
    slug: "backyard-outdoor-clean",
    title: "Full Backyard Deep Clean",
    shortDescription:
      "All-in-one exterior revitalisation package covering paved terraces, retaining walls, paths, and outdoor fixtures.",
    fullDescription:
      "Get your outdoor living spaces ready for summer entertaining. Our comprehensive backyard clean tackles all exterior hard surfaces in a single, cost-effective appointment.",
    features: [
      "Comprehensive package covering patio, walls, paths, and garden edges",
      "Bio-friendly detergents safe for lawns, family pets, and koi ponds",
      "Dramatic visual transformation in just a few hours",
      "Cost-saving bundle compared to ordering individual surface cleanings",
    ],
    idealFor: [
      "Family Entertaining Spaces",
      "Pre-Sale Property Presentation",
      "End of Lease Restorations",
      "Seasonal Spring Cleaning",
    ],
    startingPrice: "From $300",
    image: "/images/pool.jpg",
    badge: "Package Deal",
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "single-car-driveway",
    title: "Single Car Driveway Clean",
    price: "$250",
    unit: "starting price (approx. 30 sqm)",
    description:
      "Ideal for standard suburban residential driveways requiring deep grime and surface stain removal.",
    features: [
      "Up to 30 sqm concrete or paved area",
      "High-pressure rotary surface cleaning",
      "Degreaser treatment for light oil spots",
      "Organic stain & algae elimination",
      "Rinse and clean surrounding gutters",
      "Insured & guaranteed workmanship",
    ],
    popular: false,
    tag: "Essential",
  },
  {
    id: "backyard-clean",
    title: "Backyard Clean Package",
    price: "$300",
    unit: "starting price",
    description:
      "Complete transformation for backyard entertaining areas, paved terraces, and garden paths.",
    features: [
      "Outdoor patio or paved terrace area",
      "Connecting garden walkways & steps",
      "Algae & slippery mildew removal",
      "Safe for family pets & delicate garden plants",
      "High-pressure or soft wash as appropriate",
      "Immediate slip hazard remediation",
    ],
    popular: true,
    tag: "Most Popular",
  },
  {
    id: "pre-painting-softwash",
    title: "External Pre-Painting Softwash",
    price: "$450",
    unit: "starting price",
    description:
      "Professional chemical soft wash for exterior house walls, eaves, and gutters to prepare surfaces for painting.",
    features: [
      "Low-pressure chemical soft washing",
      "Eradicates mold, mildew, and airborne grime",
      "Safe for painted timber, render, and cladding",
      "Strips oxidation and chalking residue",
      "Essential for optimal primer & paint adhesion",
      "Protects exterior surfaces from gouging",
    ],
    popular: false,
    tag: "Trade Recommended",
  },
  {
    id: "clean-and-seal-driveway",
    title: "Clean & Seal Driveway",
    price: "$500",
    unit: "starting price",
    description:
      "Deep pressure rotary wash followed by commercial-grade protective sealer to lock in appearance and repel future stains.",
    features: [
      "Deep rotary pressure wash & degrease",
      "Complete surface dry and dust extraction",
      "Application of commercial protective sealer",
      "Repels motor oil, fluid leaks & weed regrowth",
      "Options for natural penetrating or wet-look finish",
      "Dramatically increases driveway lifespan",
    ],
    popular: false,
    tag: "Complete Protection",
  },
];

export const TRUST_BADGES = [
  {
    title: "Fully Insured",
    description: "Full public liability insurance coverage for residential, strata, and commercial jobs.",
    icon: "ShieldCheck",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Biodegradable, pet- and garden-safe cleaning detergents used wherever appropriate.",
    icon: "Leaf",
  },
  {
    title: "Professional Equipment",
    description: "Commercial-grade rotary surface cleaners and variable-pressure soft washing rigs.",
    icon: "Wrench",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We are firmly committed to delivering high quality results that exceed expectations.",
    icon: "CheckCircle",
  },
  {
    title: "Sydney Local Service",
    description: "Fast, reliable local team servicing Eastern Suburbs, Inner West, City & North Shore.",
    icon: "MapPin",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marcus V.",
    suburb: "Bellevue Hill",
    service: "Driveway Clean & Sandstone Restoration",
    rating: 5,
    date: "Verified Customer",
    quote:
      "Sydney Pressure Washing Service brought our old sandstone courtyard and front driveway back to life. The difference is night and day. Punctual, very respectful of our garden, and extremely fair pricing.",
  },
  {
    id: "2",
    name: "Sarah L.",
    suburb: "Paddington",
    service: "Pre-Paint Exterior Softwash",
    rating: 5,
    date: "Verified Customer",
    quote:
      "Our painter specifically asked us to get a professional soft wash before starting. The team took extra care around our heritage timber weatherboards and windows. Immaculate result and ready for paint!",
  },
  {
    id: "3",
    name: "David K.",
    suburb: "Balmain",
    service: "Backyard Entertaining & Deck Clean",
    rating: 5,
    date: "Verified Customer",
    quote:
      "Had several years of stubborn black mold on our pool pavers and timber deck. The bio-friendly cleaner made them look newly laid without any harsh bleach chemical smell. Will definitely book again.",
  },
  {
    id: "4",
    name: "Elena R.",
    suburb: "Mosman",
    service: "Strata Complex Walkways & Carpark",
    rating: 5,
    date: "Verified Strata Committee",
    quote:
      "As a strata committee member, safety and compliance are paramount. They provided all insurance and WHS paperwork immediately, arrived on time, and removed terrible oil spots from the underground garage.",
  },
  {
    id: "5",
    name: "James T.",
    suburb: "Double Bay",
    service: "Clean & Seal Driveway",
    rating: 5,
    date: "Verified Customer",
    quote:
      "Opted for the Clean and Seal driveway package. The exposed aggregate looks rich and protected, and rainwater now beads right off. Prompt communication and clear upfront pricing with no surprises.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing utilizes high-velocity water force to dislodge tough surface dirt, moss, and oil from durable surfaces like concrete driveways and stone pavers. Soft washing uses gentle low pressure combined with specialized biodegradable sanitizing solutions to break down mold, algae, and atmospheric grime at the cellular level—making it ideal for house siding, render, roofs, eaves, and delicate heritage brick.",
    category: "general",
  },
  {
    question: "Which surfaces can be pressure washed safely?",
    answer:
      "Durable substrates such as plain concrete, exposed aggregate, interlocking brick pavers, sandstone paving, outdoor tiles, asphalt, and commercial loading docks are ideal for pressure washing. We always inspect the substrate first to calibrate pressure levels and avoid surface damage.",
    category: "services",
  },
  {
    question: "Is soft washing safe for houses, paint, and surrounding plants?",
    answer:
      "Yes, absolutely. Our soft washing methodology was created specifically to safeguard delicate exterior paints, architectural renders, weatherboards, and window seals. We thoroughly pre-wet surrounding garden beds and only deploy biodegradable, environmentally considerate detergents that will not harm pets or plants.",
    category: "services",
  },
  {
    question: "Do you clean strata complexes and commercial facilities?",
    answer:
      "Yes. We specialize in strata common property maintenance (common corridors, carparks, bin bays, pool surrounds) and commercial pressure cleaning (warehouses, petrol stations, loading bays, sports grounds). We provide full insurance certificates of currency ($20M) and WHS documentation.",
    category: "commercial",
  },
  {
    question: "How much does pressure washing cost?",
    answer:
      "Our transparent starting rates begin at $250 for a single car driveway (approx 30 sqm), $300 for backyard entertaining areas, $450 for external pre-painting soft washing, and $500 for driveway clean and seal. Exact quotes depend on surface area, condition, surface type, and accessibility.",
    category: "pricing",
  },
  {
    question: "Do you provide free, no-obligation quotes?",
    answer:
      "Yes! We provide fast, free, no-obligation quotes. You can submit your details online through our quote form, message us directly via WhatsApp, or call us on 0413 708 416.",
    category: "pricing",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "We provide prompt service across Sydney City & CBD, Eastern Suburbs (Bellevue Hill, Bondi, Double Bay, Rose Bay, Vaucluse, Coogee, Paddington), the Inner West (Balmain, Leichhardt, Newtown, Glebe), and the Lower North Shore (Mosman, Neutral Bay, North Sydney).",
    category: "general",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes. Sydney Pressure Washing Service is fully insured with comprehensive public liability insurance, ensuring complete peace of mind for residential homeowners, commercial property owners, and strata schemes.",
    category: "general",
  },
];

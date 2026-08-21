export const initialProperties = [
  {
    _id: "prop-101",
    name: "Skyline Heights Luxury Apartment",
    type: "Apartment",
    price: 8500000, // ₹85 Lakhs
    city: "Hyderabad",
    location: "Gachibowli",
    address: "Financial District Main Rd, Nanakramguda, Gachibowli, Hyderabad, Telangana 500032",
    bedrooms: 3,
    bathrooms: 3,
    area: 1950,
    description: "Experience ultra-modern high-rise living with scenic panoramic views of Hyderabad's IT corridor. Features imported Italian marble flooring, central air conditioning, designer modular kitchen, and smart home automation.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Swimming Pool", "Gymnasium", "24/7 Security", "Clubhouse", "Power Backup", "Covered Parking", "EV Charging Point"],
    featured: true,
    createdAt: new Date("2026-02-10T10:00:00Z")
  },
  {
    _id: "prop-102",
    name: "Emerald Palms Independent Villa",
    type: "Villa",
    price: 24000000, // ₹2.4 Crore
    city: "Bangalore",
    location: "Indiranagar",
    address: "12th Main Road, 100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038",
    bedrooms: 4,
    bathrooms: 4,
    area: 3600,
    description: "Architectural masterpiece villa tucked in Bangalore's greenest prime neighborhood. Features a private plunge pool, private manicured garden terrace, spacious double-height living room, and servant quarters.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Pool", "Landscaped Garden", "Solar Panels", "Home Theater", "CCTV Surveillance", "Barbeque Area"],
    featured: true,
    createdAt: new Date("2026-02-12T14:30:00Z")
  },
  {
    _id: "prop-103",
    name: "Urban Nest Compact Studio",
    type: "Apartment",
    price: 4200000, // ₹42 Lakhs
    city: "Pune",
    location: "Hinjewadi",
    address: "Phase 1 IT Park Rd, Hinjewadi, Pune, Maharashtra 411057",
    bedrooms: 1,
    bathrooms: 1,
    area: 620,
    description: "Smart compact 1 BHK apartment designed for IT professionals. Fully furnished with modular fittings, high-speed fiber internet ready, and 5 minutes walk from major tech parks.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["High-speed Wi-Fi", "Co-working Lounge", "Fitness Corner", "Laundry Service", "Biometric Access"],
    featured: false,
    createdAt: new Date("2026-01-20T08:15:00Z")
  },
  {
    _id: "prop-104",
    name: "Seaside Crest Luxury Residency",
    type: "Apartment",
    price: 38000000, // ₹3.8 Crore
    city: "Mumbai",
    location: "Bandra West",
    address: "Carter Road Promenade, Bandra West, Mumbai, Maharashtra 400050",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    description: "Opulent sea-facing apartment offering uninterrupted views of the Arabian Sea. High floor unit with expansive wrap-around balcony, private elevator access, and concierge services.",
    images: [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Sea View", "Infinity Pool", "Private Elevator", "Valet Parking", "Spa & Sauna", "24/7 Security"],
    featured: true,
    createdAt: new Date("2026-02-15T11:45:00Z")
  },
  {
    _id: "prop-105",
    name: "Royal Heritage Villa",
    type: "Villa",
    price: 17500000, // ₹1.75 Crore
    city: "Hyderabad",
    location: "Jubilee Hills",
    address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    description: "Palatial 4 BHK luxury villa with classical architecture, private courtyards, teakwood interiors, grand marble staircase, and expansive rooftop entertaining space.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Garden", "Servant Quarters", "Jacuzzi", "Double Height Ceiling", "3 Covered Car Parks"],
    featured: true,
    createdAt: new Date("2026-02-01T09:00:00Z")
  },
  {
    _id: "prop-106",
    name: "TechHub Prime Commercial Tower",
    type: "Commercial",
    price: 52000000, // ₹5.2 Crore
    city: "Bangalore",
    location: "Whitefield",
    address: "ITPL Main Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066",
    bedrooms: 0,
    bathrooms: 6,
    area: 5500,
    description: "Grade-A office space in a premier tech park building. Fully air-conditioned, equipped with 100% DG power backup, high-speed passenger elevators, and dedicated basement parking.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Central AC", "Conference Rooms", "Cafeteria", "High-speed Elevators", "24/7 Security", "Fire Safety Systems"],
    featured: false,
    createdAt: new Date("2026-01-28T16:00:00Z")
  },
  {
    _id: "prop-107",
    name: "Greenwood Independent House",
    type: "Independent House",
    price: 9500000, // ₹95 Lakhs
    city: "Chennai",
    location: "Adyar",
    address: "Gandhi Nagar 3rd Main Rd, Adyar, Chennai, Tamil Nadu 600020",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    description: "Charming independent multi-story home with private terrace, ground floor garden, modern kitchen, and spacious ventilated bedrooms in peaceful residential Adyar neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Terrace", "Borewell & Metro Water", "Car Parking", "Garden", "Vastu Compliant"],
    featured: false,
    createdAt: new Date("2026-02-05T13:20:00Z")
  },
  {
    _id: "prop-108",
    name: "CyberCity Executive 2BHK Suite",
    type: "Apartment",
    price: 6800000, // ₹68 Lakhs
    city: "Hyderabad",
    location: "HITEC City",
    address: "Mindspace Road, HITEC City, Hyderabad, Telangana 500081",
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    description: "Premium 2 BHK apartment inside a gated community with resort-style amenities. Perfect location right opposite Mindspace IT Park with high rental yield potential.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Clubhouse", "Badminton Court", "Children's Play Area", "Power Backup", "Supermarket Onsite"],
    featured: false,
    createdAt: new Date("2026-02-14T15:00:00Z")
  },
  {
    _id: "prop-109",
    name: "Capital Plaza Commercial Retail",
    type: "Commercial",
    price: 18500000, // ₹1.85 Crore
    city: "Delhi",
    location: "Connaught Place",
    address: "Block E, Inner Circle, Connaught Place, New Delhi, Delhi 110001",
    bedrooms: 0,
    bathrooms: 2,
    area: 1800,
    description: "Prime street-facing commercial showroom space with heavy footfall in Delhi's premier business hub Connaught Place. High ceiling, prominent branding glass facade.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Prime Glass Facade", "100% Power Backup", "High Footfall Zone", "CCTV & Security", "Ample Visitor Parking"],
    featured: true,
    createdAt: new Date("2026-02-08T10:30:00Z")
  },
  {
    _id: "prop-110",
    name: "Koregaon Park Serene Residency",
    type: "Apartment",
    price: 11500000, // ₹1.15 Crore
    city: "Pune",
    location: "Koregaon Park",
    address: "Lane 7, North Main Road, Koregaon Park, Pune, Maharashtra 411001",
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    description: "Tranquil 3 BHK luxury apartment enveloped by lush greenery. Features wooden flooring in master bedroom, modern kitchen appliances, and large open balcony.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Swimming Pool", "Gym", "Landscaped Garden", "Organic Waste Converter", "Tennis Court"],
    featured: false,
    createdAt: new Date("2026-01-30T17:10:00Z")
  },
  {
    _id: "prop-111",
    name: "Banjara Crest Duplex Penthouse",
    type: "Apartment",
    price: 32000000, // ₹3.2 Crore
    city: "Hyderabad",
    location: "Banjara Hills",
    address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    description: "Ultra-exclusive 4 BHK duplex penthouse boasting private terrace garden with Jacuzzi, double-height floor-to-ceiling glass windows, and private elevator landing.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Jacuzzi", "Terrace Garden", "Smart Automation", "3 Parking Bays", "Sky Lounge"],
    featured: true,
    createdAt: new Date("2026-02-18T09:40:00Z")
  },
  {
    _id: "prop-112",
    name: "Koramangala Garden House",
    type: "Independent House",
    price: 16500000, // ₹1.65 Crore
    city: "Bangalore",
    location: "Koramangala",
    address: "4th Block, 80 Feet Road, Koramangala, Bengaluru, Karnataka 560034",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    description: "Classic standalone 3 BHK home featuring private courtyard garden, solar water heater system, high ceilings, and stone masonry architecture in bustling Koramangala.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Backyard", "Solar Water Heating", "Rainwater Harvesting", "Covered Garage"],
    featured: false,
    createdAt: new Date("2026-02-04T12:00:00Z")
  },
  {
    _id: "prop-113",
    name: "ECR Beachside Sanctuary Villa",
    type: "Villa",
    price: 28500000, // ₹2.85 Crore
    city: "Chennai",
    location: "East Coast Road",
    address: "ECR Highway, Neelankarai, Chennai, Tamil Nadu 600115",
    bedrooms: 4,
    bathrooms: 5,
    area: 4100,
    description: "Stunning beachside luxury villa just 200 meters from the coast. Features private infinity pool, lush tropical lawn, open terrace lounge, and modern Italian kitchen.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Infinity Pool", "Beach Access", "Lush Lawn", "Barbeque Pavilion", "Security Guard Room"],
    featured: true,
    createdAt: new Date("2026-02-16T18:25:00Z")
  },
  {
    _id: "prop-114",
    name: "Vasant Vihar Elite Estate",
    type: "Villa",
    price: 65000000, // ₹6.5 Crore
    city: "Delhi",
    location: "Vasant Vihar",
    address: "Paschimi Marg, Vasant Vihar, New Delhi, Delhi 110057",
    bedrooms: 5,
    bathrooms: 6,
    area: 5800,
    description: "Prestigious diplomatic enclave villa with 5 king-sized suite bedrooms, private elevator, basement home theater room, manicured lawn, and servant quarters.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Elevator", "Home Theater", "Servant Quarters", "Multi-car Parking", "Full Security Perimeter"],
    featured: true,
    createdAt: new Date("2026-02-02T11:00:00Z")
  },
  {
    _id: "prop-115",
    name: "Powai Lake View Sky Residence",
    type: "Apartment",
    price: 21500000, // ₹2.15 Crore
    city: "Mumbai",
    location: "Powai",
    address: "Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    bedrooms: 3,
    bathrooms: 3,
    area: 1680,
    description: "High-floor 3 BHK home overlooking tranquil Powai Lake and green hills. European neoclassical architecture, club access, indoor squash court, and swimming pool.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Lake View", "Clubhouse", "Squash Court", "Swimming Pool", "24/7 Security"],
    featured: false,
    createdAt: new Date("2026-02-11T14:15:00Z")
  },
  {
    _id: "prop-116",
    name: "Affordable Cozy 2BHK Flat",
    type: "Apartment",
    price: 4800000, // ₹48 Lakhs
    city: "Hyderabad",
    location: "Kukatpally",
    address: "KPHB Colony Phase 3, Kukatpally, Hyderabad, Telangana 500072",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    description: "Budget-friendly 2 BHK apartment close to metro station, shopping malls, and schools. Well-lit naturally with balcony and elevator access.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Elevator", "Car Parking", "Metro Proximity", "Power Backup"],
    featured: false,
    createdAt: new Date("2026-01-15T09:30:00Z")
  }
];

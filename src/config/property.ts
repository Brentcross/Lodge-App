/**
 * Single source of truth for everything about the property.
 * Edit this file to change names, descriptions, amenities, photos and pricing
 * without touching page code.
 */

export type Photo = {
  /** Path under /public, e.g. "/images/gallery/front-exterior.jpg" */
  src: string;
  alt: string;
  /** Section on The Home page (photos are grouped in the order categories first appear). */
  category: string;
  /** Also show on the Weddings & Events page. */
  event?: boolean;
  caption?: string;
};

export const property = {
  // TODO: pick a real name for the property.
  name: "The Blackfoot Lodge",
  tagline: "A log lodge on private grounds in Blackfoot, Idaho, built for family gatherings, getaways and weddings.",
  city: "Blackfoot",
  state: "Idaho",

  /**
   * The exact street address is intentionally NOT stored in this public repo.
   * Share it with guests once a booking is confirmed.
   */

  /** Reservation requests from the website are emailed here. */
  contactEmail: "hello@example.com", // TODO: set the real address
  contactPhone: "", // TODO (optional)

  // TODO: fill in real numbers.
  stats: {
    bedrooms: 7, // 1 main floor (primary), 3 upstairs, 3 lower level
    bathrooms: 4.5, // primary bath, 2 upstairs en-suite, 1.5 lower level. TODO: confirm main-floor half bath
    sleeps: 0,
    eventCapacity: 0,
  },

  // Drafted from the photos. Please review and correct.
  description: [
    "A custom log home with a soaring great room, a two-story stone fireplace and walls of windows looking out over the grounds.",
    "Seven bedrooms are spread over three floors. The main floor has the great room, the kitchen and the primary suite. Upstairs are three bedrooms, two with their own full bathrooms, and a smaller living room. The lower level has three more bedrooms, a full kitchen, a second great room, a home theater and a game room.",
    "Outside you'll find a deck with outdoor seating and a grill, a water-lily pond and stream, gardens and a large open lawn.",
  ],

  highlights: [
    { title: "Room for everyone", body: "Seven bedrooms and two great rooms give big groups space to gather, and space to get away." },
    { title: "Theater & game room", body: "Tiered theater recliners with a concession stand, plus pool and shuffleboard." },
    { title: "Weddings & events", body: "Open lawn, a pond, gardens and a deck make a natural setting for ceremonies and receptions." },
  ],

  amenities: [
    "Chef's kitchen",
    "Second kitchen (lower level)",
    "Stone fireplace",
    "Home theater",
    "Pool table & shuffleboard",
    "Upstairs living room",
    "Second great room (lower level)",
    "Deck with outdoor seating",
    "Gas grill",
    "Pond & water feature",
    "Large lawn",
    "Washer & dryer",
    "Wi-Fi",
    "Free parking",
  ],

  rooms: [
    { name: "Main floor", body: "The great room with two-story log walls and a floor-to-ceiling stone fireplace, a long dining table, the chef's kitchen with a stone island, and the primary suite with a four-poster bed and stone walk-in shower." },
    { name: "Upstairs", body: "Three bedrooms, two with their own full bathrooms, plus a smaller living room with sectional seating and a TV." },
    { name: "Lower level", body: "Three bedrooms, 1.5 shared bathrooms, a full second kitchen, a second great room, a home theater with a concession stand, and a game room with pool and shuffleboard." },
    { name: "Outdoors", body: "Deck, patio, water-lily pond and stream, gardens and a large lawn bordered by trees." },
  ],

  events: {
    intro:
      "The lodge has hosted weddings and receptions. The open lawn, pond and gardens make a beautiful ceremony setting, the great room and deck work for receptions, and the wedding party can stay the night.",
    offerings: [
      "Lawn ceremony space",
      "Reception in the great room or on the deck",
      "Getting-ready rooms",
      "Overnight stay for the wedding party",
    ],
  },

  /**
   * Indicative pricing shown on the site. Not charged yet. Payments come later.
   */
  pricing: {
    nightlyFrom: 0, // TODO
    minimumNights: 2,
    eventInquiryOnly: true,
  },

  /**
   * Photos. Drop image files into /public/images/gallery and list them here.
   * Until real photos are added, the site shows styled placeholders.
   * Only use photos you own or have permission to use.
   */
  photos: [
    { src: "/images/gallery/exterior-front.jpg", category: "Exterior", alt: "Front of the lodge with covered porch", event: true },
    { src: "/images/gallery/great-room-fireplace.jpg", category: "Great Room", alt: "Great room with two-story stone fireplace", event: true },
    { src: "/images/gallery/kitchen-island.jpg", category: "Kitchen", alt: "Kitchen with stone island and bar seating" },
    { src: "/images/gallery/primary-bedroom.jpg", category: "Bedrooms & Baths", alt: "Main-floor primary suite with four-poster bed" },
    { src: "/images/gallery/pond.jpg", category: "Outdoors", alt: "Water-lily pond with stepping stones", event: true },
    { src: "/images/gallery/lawn.jpg", category: "Outdoors", alt: "Large open lawn bordered by trees", event: true },
    { src: "/images/gallery/exterior-flowers.jpg", category: "Exterior", alt: "Front of the lodge with flower beds" },
    { src: "/images/gallery/exterior-side.jpg", category: "Exterior", alt: "Side view of the lodge" },
    { src: "/images/gallery/aerial.jpg", category: "Exterior", alt: "Aerial view of the property" },
    { src: "/images/gallery/great-room.jpg", category: "Great Room", alt: "Great room with log walls, dining and seating", event: true },
    { src: "/images/gallery/great-room-overhead.jpg", category: "Great Room", alt: "Great room seen from the loft" },
    { src: "/images/gallery/great-room-seating.jpg", category: "Great Room", alt: "Leather seating in the great room" },
    { src: "/images/gallery/dining.jpg", category: "Great Room", alt: "Long dining table beneath the loft", event: true },
    { src: "/images/gallery/great-room-loft.jpg", category: "Great Room", alt: "Great room and loft balcony" },
    { src: "/images/gallery/staircase.jpg", category: "Great Room", alt: "Open log staircase to the loft" },
    { src: "/images/gallery/entry.jpg", category: "Great Room", alt: "Front entry with double doors" },
    { src: "/images/gallery/kitchen.jpg", category: "Kitchen", alt: "Kitchen with granite counters" },
    { src: "/images/gallery/kitchen-2.jpg", category: "Kitchen", alt: "Kitchen island and stainless appliances" },
    { src: "/images/gallery/laundry.jpg", category: "Kitchen", alt: "Laundry room" },
    { src: "/images/gallery/primary-bedroom-2.jpg", category: "Bedrooms & Baths", alt: "Primary bedroom" },
    { src: "/images/gallery/primary-bath.jpg", category: "Bedrooms & Baths", alt: "Primary suite bathroom" },
    { src: "/images/gallery/primary-shower.jpg", category: "Bedrooms & Baths", alt: "Primary suite stone walk-in shower" },
    { src: "/images/gallery/bedroom-log-bed.jpg", category: "Bedrooms & Baths", alt: "Bedroom with log bed" },
    { src: "/images/gallery/bedroom-patio.jpg", category: "Bedrooms & Baths", alt: "Bedroom with patio door" },
    { src: "/images/gallery/bedroom-four-poster.jpg", category: "Bedrooms & Baths", alt: "Bedroom with four-poster bed" },
    { src: "/images/gallery/powder-room.jpg", category: "Bedrooms & Baths", alt: "Bathroom with copper vessel sink" },
    { src: "/images/gallery/bath-double-vanity.jpg", category: "Bedrooms & Baths", alt: "Bathroom with double vanity" },
    { src: "/images/gallery/loft.jpg", category: "Upstairs Living Room", alt: "Upstairs living room with sectional" },
    { src: "/images/gallery/loft-tv.jpg", category: "Upstairs Living Room", alt: "Upstairs living room with TV" },
    { src: "/images/gallery/theater.jpg", category: "Theater & Game Room", alt: "Home theater with tiered recliners" },
    { src: "/images/gallery/theater-2.jpg", category: "Theater & Game Room", alt: "Theater seating and screen" },
    { src: "/images/gallery/concessions.jpg", category: "Theater & Game Room", alt: "Theater concession stand" },
    { src: "/images/gallery/pool-table.jpg", category: "Theater & Game Room", alt: "Game room with pool table" },
    { src: "/images/gallery/game-room.jpg", category: "Theater & Game Room", alt: "Game room with shuffleboard" },
    { src: "/images/gallery/second-kitchen.jpg", category: "Theater & Game Room", alt: "Lower-level full kitchen" },
    { src: "/images/gallery/second-kitchen-dining.jpg", category: "Theater & Game Room", alt: "Lower-level kitchen and dining" },
    { src: "/images/gallery/deck.jpg", category: "Outdoors", alt: "Deck with outdoor seating and grill", event: true },
    { src: "/images/gallery/water-feature.jpg", category: "Outdoors", alt: "Stream and rock water feature", event: true },
    { src: "/images/gallery/patio.jpg", category: "Outdoors", alt: "Patio beside the rock garden" },
    { src: "/images/gallery/garden.jpg", category: "Outdoors", alt: "Garden with sculpture" },
    { src: "/images/gallery/garden-beds.jpg", category: "Outdoors", alt: "Raised garden beds" },
  ] as Photo[],
};

export type Property = typeof property;

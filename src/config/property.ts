/**
 * Single source of truth for everything about the property.
 * Edit this file to change names, descriptions, amenities, photos and pricing
 * without touching page code.
 */

export type Photo = {
  /** Path under /public, e.g. "/images/gallery/front-exterior.jpg" */
  src: string;
  alt: string;
  caption?: string;
};

export const property = {
  // TODO: pick a real name for the property.
  name: "The Blackfoot Lodge",
  tagline: "A spacious family home for gatherings, getaways and weddings.",
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
    bedrooms: 0,
    bathrooms: 0,
    sleeps: 0,
    eventCapacity: 0,
  },

  description: [
    "Placeholder description. Tell guests what makes the house special: its size, the setting, the views, and what it feels like to stay here.",
    "A second paragraph can cover the layout: the main gathering spaces, the kitchen, the bedrooms, and the outdoor areas.",
  ],

  highlights: [
    { title: "Room for everyone", body: "Placeholder: large common areas and many bedrooms for families and groups." },
    { title: "Weddings & events", body: "Placeholder: the home and grounds have hosted weddings and receptions." },
    { title: "Southeast Idaho", body: "Placeholder: close to Blackfoot, Idaho Falls and Pocatello." },
  ],

  amenities: [
    "Full kitchen",
    "Wi-Fi",
    "Free parking",
    "Washer & dryer",
    "Outdoor space",
    "Event-ready grounds",
  ],

  rooms: [
    { name: "Living areas", body: "Placeholder: describe the main living and gathering rooms." },
    { name: "Kitchen & dining", body: "Placeholder: describe the kitchen and dining capacity." },
    { name: "Bedrooms", body: "Placeholder: list bedrooms and bed types." },
    { name: "Outdoors", body: "Placeholder: yard, patio, and space for ceremonies or receptions." },
  ],

  events: {
    intro:
      "Placeholder: the home has hosted weddings and receptions. Describe the ceremony and reception spaces, capacity, and what's included.",
    offerings: [
      "Ceremony space",
      "Reception space",
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
  photos: [] as Photo[],
};

export type Property = typeof property;

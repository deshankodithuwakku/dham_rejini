import { assetUrl } from "../lib/assetUrl.js";
export const restaurantData = {
  restaurantName: "KOCHCHI RESTAURANT",
  tagline: "Bold Ceylon Spices • Contemporary Gastronomy • Warm Hospitality",
  heroImage: assetUrl("assets/images/restaurant-hero.jpg"),
  leadText: "A culinary destination celebrating Sri Lankan spices and contemporary hospitality, associated with Supun Wijesinghe's ventures.",
  about: {
    heading: "The Kochchi Experience",
    textPlaceholder: "Kochchi Restaurant brings the iconic vibrant heat and delicate aromatic herbs of Ceylon into a refined, contemporary dining space. Crafted for intimate dinners, family feasts, and travelers seeking memorable culinary craft.",
    verifiedNotice: "[Add verified restaurant story, concept details, and chef profile here]"
  },
  menuHighlights: [
    {
      id: "m1",
      name: "Kochchi Spiced Crab Feast",
      category: "Signature Flavors",
      description: "Fresh coastal crab slow-braised with freshly crushed fiery green kochchi chillies, aromatic curry leaves, and coconut milk reduction.",
      pricePlaceholder: "[Menu Price Upon Request]",
      tag: "Chef's Signature",
      image: assetUrl("assets/images/restaurant-food.jpg")
    },
    {
      id: "m2",
      name: "Ceylon Claypot Delicacies",
      category: "Authentic Traditions",
      description: "Slow-simmered regional heirloom curries infused with roasted island spices, served with steaming fragrant country rice.",
      pricePlaceholder: "[Menu Price Upon Request]",
      tag: "Authentic",
      image: assetUrl("assets/images/restaurant-food.jpg")
    },
    {
      id: "m3",
      name: "Chargrilled Ocean Harvest",
      category: "Seafood & Grill",
      description: "Market-fresh catch of the day marinated in garlic, fresh lime, and bird's eye chilli glaze, flame-grilled over open wood embers.",
      pricePlaceholder: "[Menu Price Upon Request]",
      tag: "From the Grill",
      image: assetUrl("assets/images/restaurant-food.jpg")
    },
    {
      id: "m4",
      name: "Artisan Island Refreshers",
      category: "Botanical Beverages",
      description: "Handcrafted blends of king coconut water, wild passionfruit, crushed mint, and sweet ginger nectar.",
      pricePlaceholder: "[Menu Price Upon Request]",
      tag: "Handcrafted",
      image: assetUrl("assets/images/restaurant-hero.jpg")
    }
  ],
  gallery: [
    {
      id: "rg1",
      title: "Atmospheric Dining Room",
      category: "INTERIOR",
      image: assetUrl("assets/images/restaurant-hero.jpg"),
      caption: "Warm ambient lighting, woven textures, and botanical greenery."
    },
    {
      id: "rg2",
      title: "Kochchi Artisan Plating",
      category: "FOOD",
      image: assetUrl("assets/images/restaurant-food.jpg"),
      caption: "Culinary craft celebrating island ingredients with bold flair."
    },
    {
      id: "rg3",
      title: "Evening Ambience",
      category: "DINING EXPERIENCE",
      image: assetUrl("assets/images/restaurant-hero.jpg"),
      caption: "An intimate and welcoming table setting for gatherings."
    },
    {
      id: "rg4",
      title: "Chef's Showcase",
      category: "FOOD",
      image: assetUrl("assets/images/restaurant-food.jpg"),
      caption: "Vibrant culinary heritage prepared with uncompromising freshness."
    }
  ],
  contact: {
    phone: "+94 70 779 9999",
    whatsapp: "94707799999",
    whatsappUrl: "https://wa.me/94707799999?text=Hello%20Kochchi%20Restaurant%2C%20I%20would%20like%20to%20inquire%20about%20table%20reservations.",
    addressPlaceholder: "Restaurant Location: [Verified address to be added by owner]",
    hoursPlaceholder: "Opening Hours: [To be confirmed by owner - Lunch & Dinner service]",
    socials: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "WhatsApp", url: "https://wa.me/94707799999" }
    ]
  }
};

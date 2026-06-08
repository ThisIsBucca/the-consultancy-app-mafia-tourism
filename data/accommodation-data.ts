export interface Accommodation {
  id: string
  name: string
  location: string
  type: "budget" | "mid-range" | "luxury" | "camping"
  price: string
  description: string
  tags: string[]
  image: string
  whatsapp: string
}

export const accommodations: Accommodation[] = [
  {
    id: "afro-beach-bungalows",
    name: "Afro Beach Bungalows",
    location: "Kilindoni",
    type: "budget",
    price: "$",
    description:
      "Simple yet charming beachfront bungalows with direct access to powdery white sands. Perfect for backpackers and solo travelers looking for an authentic island stay without breaking the bank.",
    tags: ["Beachfront access", "Basic amenities", "Authentic vibe"],
    image: "https://www.mafiaislandecotourism.com/images/afro-beach-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Afro%20Beach%20Bungalows.",
  },
  {
    id: "juani-beach-bungalows",
    name: "Juani Beach Bungalows",
    location: "Juani Island",
    type: "budget",
    price: "$",
    description:
      "Laid-back bungalows set on the pristine shores of Juani Island. A peaceful retreat for nature lovers seeking solitude and untouched beaches.",
    tags: ["Secluded beach", "Nature escape", "Snorkeling nearby"],
    image: "https://www.mafiaislandecotourism.com/images/juani-bungalow-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Juani%20Beach%20Bungalows.",
  },
  {
    id: "maweni-bungalows",
    name: "Maweni Bungalows",
    location: "Kilindoni",
    type: "budget",
    price: "$",
    description:
      "Cozy budget-friendly bungalows nestled along the coast. Enjoy stunning sunsets and a relaxed atmosphere just steps from the ocean.",
    tags: ["Sunset views", "Ocean steps away", "Affordable rates"],
    image: "https://www.mafiaislandecotourism.com/images/maweni-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Maweni%20Bungalows.",
  },
  {
    id: "maisarah-beach-lodge",
    name: "Maisarah Beach Lodge",
    location: "Kilindoni",
    type: "mid-range",
    price: "$$",
    description:
      "A comfortable beachfront lodge offering well-appointed rooms and warm hospitality. Ideal for couples and families who want a relaxing mid-range escape.",
    tags: ["Beachfront dining", "Spacious rooms", "Family friendly"],
    image: "https://www.mafiaislandecotourism.com/images/maisalah22.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Maisarah%20Beach%20Lodge.",
  },
  {
    id: "butiama-bustani",
    name: "Butiama Bustani",
    location: "Kilindoni",
    type: "mid-range",
    price: "$$",
    description:
      "A boutique garden lodge blending Swahili charm with modern comfort. Set amid lush tropical gardens with easy access to the marine park.",
    tags: ["Garden setting", "Swahili architecture", "Marine park access"],
    image: "https://www.mafiaislandecotourism.com/images/butiama-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Butiama%20Bustani.",
  },
  {
    id: "mafia-dream-lodge",
    name: "Mafia Dream Lodge",
    location: "Kilindoni",
    type: "mid-range",
    price: "$$",
    description:
      "Stylish beachside lodge with a relaxed atmosphere and personalized service. A favorite among travelers seeking value and comfort in paradise.",
    tags: ["Beachside location", "Personalized service", "Great value"],
    image: "https://www.mafiaislandecotourism.com/images/mafia-dream-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Mafia%20Dream%20Lodge.",
  },
  {
    id: "kivulini-lodge",
    name: "Kivulini Lodge",
    location: "Utende",
    type: "mid-range",
    price: "$$",
    description:
      "A hidden gem tucked away along the coast, offering peaceful surroundings and genuine island hospitality. Perfect for unwinding after a day of adventure.",
    tags: ["Quiet & peaceful", "Coastal views", "Island hospitality"],
    image: "https://www.mafiaislandecotourism.com/images/kivulini-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Kivulini%20Lodge.",
  },
  {
    id: "kileleni-lodge",
    name: "Kileleni Lodge",
    location: "Kilindoni",
    type: "mid-range",
    price: "$$",
    description:
      "Hilltop lodge offering breathtaking panoramic views of the ocean and surrounding islands. A serene retreat with a touch of adventure.",
    tags: ["Panoramic views", "Hilltop location", "Sunset decks"],
    image: "https://www.mafiaislandecotourism.com/images/kileleni-lodge-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Kileleni%20Lodge.",
  },
  {
    id: "basecamp-mafia-lodge",
    name: "Basecamp Mafia Lodge",
    location: "Utende",
    type: "luxury",
    price: "$$$",
    description:
      "An upscale eco-lodge set on a private beach, combining contemporary design with sustainable practices. Experience premium comfort surrounded by pristine nature.",
    tags: ["Private beach", "Eco-luxury", "Premium dining"],
    image: "https://www.mafiaislandecotourism.com/images/basecamp-2.png",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Basecamp%20Mafia%20Lodge.",
  },
  {
    id: "polepole-lodge",
    name: "Polepole Lodge",
    location: "Utende",
    type: "luxury",
    price: "$$$",
    description:
      "An exclusive beachfront boutique lodge meaning 'slowly slowly' in Swahili. Every detail is crafted for relaxation, from the open-air restaurant to the ocean-view villas.",
    tags: ["Boutique luxury", "Ocean-view villas", "Gourmet cuisine"],
    image: "https://www.mafiaislandecotourism.com/images/polepole-3.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Polepole%20Lodge.",
  },
  {
    id: "kinasi-lodge",
    name: "Kinasi Lodge",
    location: "Utende",
    type: "luxury",
    price: "$$$",
    description:
      "Mafia Island's premier luxury lodge set on a hillside overlooking Chole Bay. World-class service, elegant suites, and exceptional dive experiences await.",
    tags: ["Premier luxury", "Chole Bay views", "World-class diving"],
    image: "https://www.mafiaislandecotourism.com/images/kinasi-1.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Kinasi%20Lodge.",
  },
  {
    id: "chole-mjini-tree-house",
    name: "Chole Mjini Tree House Lodge",
    location: "Chole Island",
    type: "luxury",
    price: "$$$",
    description:
      "An extraordinary treehouse lodge on Chole Island, built among ancient baobab and tamarind trees. A truly unique eco-luxury experience unlike anywhere else.",
    tags: ["Treehouse stays", "Unique experience", "Eco-luxury"],
    image: "https://www.mafiaislandecotourism.com/images/chole-mjini-2.jpg",
    whatsapp:
      "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Chole%20Mjini%20Tree%20House%20Lodge.",
  },
  {
    id: "butiama-beach-lodge",
    name: "Butiama Beach Lodge",
    location: "Kilindoni",
    type: "luxury",
    price: "$$$",
    description:
      "A refined beachfront lodge offering elegant Swahili-inspired architecture, exceptional service, and direct beach access. The epitome of island luxury.",
    tags: ["Swahili elegance", "Direct beach access", "Exceptional service"],
    image: "https://www.mafiaislandecotourism.com/images/butiama-3.jpg",
    whatsapp: "https://wa.me/255719997781?text=Hi!%20I'm%20interested%20in%20booking%20Butiama%20Beach%20Lodge.",
  },
]

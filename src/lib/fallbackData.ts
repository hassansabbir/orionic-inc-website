import { FAQ, Review, AboutUs } from "@/types";

export const FALLBACK_REVIEWS: Review[] = [
  {
    _id: "1",
    name: "Alexander Thompson",
    designation: "CEO, TechVanguard",
    review: "Orienco has completely transformed how we handle our corporate event rentals. Their attention to detail and premium selection of luxury vehicles is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=250&auto=format&fit=crop",
    rating: 5,
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    name: "Sarah Jenkins",
    designation: "Event Planner, Elite Occasions",
    review: "As an event planner, I need partners I can trust. Orienco's rapid delivery and top-tier event rentals make my job so much easier. Highly recommended for any high-end event.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=250&auto=format&fit=crop",
    rating: 5,
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    name: "Michael Chen",
    designation: "Director, Global Logistics",
    review: "The luxury car rental service from Orienco is exceptional. From the booking process to the vehicle quality, everything was seamless. They truly understand what premium service means.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=250&auto=format&fit=crop",
    rating: 5,
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const FALLBACK_FAQS: FAQ[] = [
  {
    _id: "1",
    question: "What services does Orienco Inc Group provide?",
    answer: "Orienco Inc Group provides a wide range of premium services including luxury car rentals, event equipment rentals, rapid delivery solutions, and tour & travel planning. We aim to be your one-stop platform for all lifestyle and business rental needs.",
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    question: "How can I book a luxury vehicle?",
    answer: "You can book a luxury vehicle directly through our platform by navigating to the Luxury Car Rental section. Choose your desired vehicle, select your dates, and follow the simple checkout process.",
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    question: "Do you offer services for corporate events?",
    answer: "Yes, we specialize in corporate event solutions. From high-end audio-visual equipment to luxury transportation for executives, we provide comprehensive packages tailored to your corporate needs.",
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const FALLBACK_ABOUT_US: AboutUs[] = [
  {
    _id: "1",
    title: "Our Mission",
    bodyText: "To simplify premium lifestyle solutions by providing a single, trusted platform for all luxury rental and service needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Our Vision",
    bodyText: "To become the global leader in integrated premium rentals, known for reliability, quality, and exceptional customer experiences.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    platform: "parent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

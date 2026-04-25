"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

// Import images
import client1 from "@/assets/clients/client1.png";
import client2 from "@/assets/clients/client2.png";
import client3 from "@/assets/clients/client3.png";
import client4 from "@/assets/clients/client4.png";
import client5 from "@/assets/clients/client5.png";
import cardBgLines from "@/assets/solutions/cardBgLines.png";

const clients = [
  {
    id: 1,
    name: "Amy John",
    designation: "CEO of Mtn",
    review: "Orienco Inc Group delivered a seamless and well-organized experience from start to finish. Their service quality, attention to detail, and reliability made our event completely stress-free.",
    image: client1,
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Marketing Director at TechFlow",
    review: "The level of professionalism and care shown by the Orienco team is unmatched. They handled everything with grace and precision, allowing us to focus entirely on our guests.",
    image: client2,
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    designation: "Founder of Jenkins Events",
    review: "I've worked with many vendors, but Orienco stands out for their innovative solutions and commitment to excellence. They truly understand what it means to create a premium experience.",
    image: client3,
  },
  {
    id: 4,
    name: "David Smith",
    designation: "COO of Global Logistics",
    review: "Reliability is key in our business, and Orienco has proven time and again that they can deliver on their promises. Their transport and logistics services are world-class.",
    image: client4,
  },
  {
    id: 5,
    name: "Lisa Wong",
    designation: "HR Manager at Creative Hub",
    review: "Our team building retreat was a massive success thanks to Orienco. Every detail was perfect, from the luxury car rentals to the event management. Highly recommended!",
    image: client5,
  },
];

const ClientExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Restart autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <Section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <Typography variant="h2" className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              What Our Clients <br /> <span className="italic font-bold">Experience with Orienco.</span>
            </Typography>
            {/* Decorative Wavy Lines */}
            <div className="absolute -left-48 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
              <Image src={cardBgLines} alt="" width={150} height={30} className="object-contain" style={{ width: "auto", height: "auto" }} />
            </div>
            <div className="absolute -right-48 top-1/2 -translate-y-1/2 opacity-10 rotate-180 hidden xl:block">
              <Image src={cardBgLines} alt="" width={150} height={30} className="object-contain" style={{ width: "auto", height: "auto" }} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Featured Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={clients[activeIndex].image}
                    alt={clients[activeIndex].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Content and Nav */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Avatar Navigation */}
            <div className="flex flex-wrap gap-4 items-center">
              {clients.map((client, index) => (
                <button
                  key={client.id}
                  onClick={() => handleAvatarClick(index)}
                  className={cn(
                    "relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 transform",
                    activeIndex === index 
                      ? "ring-2 ring-primary ring-offset-4 scale-110 shadow-lg" 
                      : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                  )}
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                    “{clients[activeIndex].review}”
                  </Typography>
                  
                  <div>
                    <Typography variant="h4" className="text-xl font-bold">
                      {clients[activeIndex].name}
                    </Typography>
                    <Typography className="text-muted-foreground uppercase tracking-wider text-sm font-semibold">
                      {clients[activeIndex].designation}
                    </Typography>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ClientExperience;

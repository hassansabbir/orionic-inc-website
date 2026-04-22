"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

// Assets
import bmw from "@/assets/brands/bmw.png";
import ferrari from "@/assets/brands/ferrari.png";
import porsche from "@/assets/brands/porsche.png";
import toyota from "@/assets/brands/toyota.png";
import mercedes from "@/assets/brands/mercedes.png";
import audi from "@/assets/brands/audi.png";
import tesla from "@/assets/brands/tesla.png";
import lambo from "@/assets/brands/lambo.png";

const brands = [
  { name: "BMW", logo: bmw },
  { name: "Ferrari", logo: ferrari },
  { name: "Porsche", logo: porsche },
  { name: "Toyota", logo: toyota },
  { name: "Mercedes", logo: mercedes },
  { name: "Audi", logo: audi },
  { name: "Tesla", logo: tesla },
  { name: "Lamborghini", logo: lambo },
];

const BrandsMarquee = () => {
  // Duplicate the list for infinite scroll effect
  const marqueeBrands = [...brands, ...brands, ...brands]; // Triple for better continuity on wide screens

  return (
    <Section
      container={false}
      className="py-10 bg-white overflow-hidden border-y border-gray-100 px-0"
    >
      <div className="relative flex overflow-hidden">
        {/* Left Blur/Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-96 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

        {/* Right Blur/Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-96 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

        <motion.div
          animate={{
            x: ["0%", "-33.33%"], // Adjust for tripled list
          }}
          transition={{
            duration: 30, // Slower for premium feel
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
        >
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[180px] h-20 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className="max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default BrandsMarquee;

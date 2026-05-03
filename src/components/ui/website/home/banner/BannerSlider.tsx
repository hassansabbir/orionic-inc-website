"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import slider1 from "@/assets/banner/slider1.png";
import slider2 from "@/assets/banner/slider2.png";
import slider3 from "@/assets/banner/slider3.png";
import slider4 from "@/assets/banner/slider4.png";
import slider5 from "@/assets/banner/slider5.jpg";
import slider6 from "@/assets/banner/slider6.jpg";

const images = [slider1, slider2, slider3, slider4, slider5, slider6];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto aspect-3/4 md:aspect-video min-h-[550px] md:min-h-[800px] rounded-[32px] overflow-hidden shadow-2xl mb-12 border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Orienco Experience ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability if added later, and general depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative h-2 flex items-center justify-center transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  : "bg-white/40 w-1.5 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Glassmorphism Badge */}
      <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full">
        <span className="text-white text-xs font-medium tracking-wider uppercase">
          Premium Experience
        </span>
      </div>
    </div>
  );
};

export default BannerSlider;

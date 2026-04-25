"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";

// Assets
import raw1image1 from "@/assets/creations/raw1image1.jpg";
import raw1image2 from "@/assets/creations/raw1image2.jpg";
import raw1image3 from "@/assets/creations/raw1image3.jpg";
import raw2image1 from "@/assets/creations/raw2image1.jpg";
import raw2image2 from "@/assets/creations/raw2image2.jpg";

const ShowcaseOurCreations = () => {
  return (
    <Section className="py-24 bg-white overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16 relative">
        {/* Header with decorative lines */}
        <div className="flex items-center justify-center w-full gap-4 md:gap-12 mb-6 px-4">
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-gray-200" />
            <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white shadow-sm flex-shrink-0" />
            <div className="w-12 h-[1px] bg-gray-200 flex-shrink-0" />
          </div>

          <Typography
            variant="h2"
            className="text-4xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight whitespace-nowrap"
          >
            Showcasing Our Creations
          </Typography>

          <div className="flex-1 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gray-200 flex-shrink-0" />
            <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white shadow-sm flex-shrink-0" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gray-100 to-gray-200" />
          </div>
        </div>

        <Typography
          variant="p"
          className="max-w-3xl text-gray-400 text-lg md:text-xl leading-relaxed font-light italic"
        >
          Explore a visual journey of our completed projects, featuring elegant event setups, 
          premium car rentals, and thoughtfully executed experiences designed to impress.
        </Typography>
      </div>

      <div className="flex flex-col gap-6 max-w-7xl mx-auto px-4">
        {/* Row 1: 3 images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] border border-gray-100 cursor-pointer group"
          >
            <Image 
              src={raw1image1} 
              alt="Creation 1" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-in-out"
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] border border-gray-100 cursor-pointer group"
          >
            <Image 
              src={raw1image2} 
              alt="Creation 2" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-in-out"
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] border border-gray-100 cursor-pointer group"
          >
            <Image 
              src={raw1image3} 
              alt="Creation 3" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-in-out"
            />
          </motion.div>
        </div>

        {/* Row 2: 2 images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] border border-gray-100 cursor-pointer group"
          >
            <Image 
              src={raw2image1} 
              alt="Creation 4" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-in-out"
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] border border-gray-100 cursor-pointer group"
          >
            <Image 
              src={raw2image2} 
              alt="Creation 5" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ShowcaseOurCreations;

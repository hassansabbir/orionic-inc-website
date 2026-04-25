"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import { MousePointer2 } from "lucide-react";

// Assets
import firstImageMobile from "@/assets/solutions/firstImageLeftSideMobileHand.png";
import firstImageRight from "@/assets/solutions/firstImageRightSideImage.png";
import secondImageCircle from "@/assets/solutions/secondImageRoundCircle.png";
import thirdImageContent from "@/assets/solutions/thirdImageContent.png";
import fourthImageBottle from "@/assets/solutions/4thImageBottle.png";
import cardBgLines from "@/assets/solutions/cardBgLines.png";

const OurSolutions = () => {
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
            Our Solutions
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
          A range of carefully structured services designed to meet diverse
          needs, ensuring flexibility, consistency, and a seamless experience
          across every touchpoint.
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Row 1, Card 1: Quick and Seamless Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative group bg-[#FBFBFB] rounded-[32px] border-6 border-gray-100 overflow-hidden min-h-[400px]"
        >
          {/* Background Lines */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={cardBgLines}
              alt="background lines"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 h-full w-full flex flex-row items-end">
            {/* Left: Hand holding mobile - Positioned at the bottom */}
            <div className="w-[55%] relative h-[90%] flex items-end">
              <div className="relative w-full h-full -mb-2">
                <Image
                  src={firstImageMobile}
                  alt="Quick Delivery Mobile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right: UI Content and Text - Stacked vertically */}
            <div className="w-[45%] h-full flex flex-col justify-center pr-8 md:pr-12 pt-12 pb-12">
              {/* Floating UI elements */}
              <div className="relative w-full h-[220px] mb-2">
                <Image
                  src={firstImageRight}
                  alt="Delivery UI"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>

              {/* Text content under the UI */}
              <div className="mt-auto">
                <Typography
                  variant="h5"
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight w-full"
                >
                  Quick and Seamless Delivery
                </Typography>
                <Typography
                  variant="p"
                  className="text-gray-400 text-sm leading-relaxed max-w-xs w-full"
                >
                  Timely delivery you can depend on, without delays. Handled
                  with accuracy, care, and attention to detail.
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 1, Card 2: Luxury Car Rental */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 relative group bg-[#FBFBFB] rounded-[32px] border-6 border-gray-100 overflow-hidden min-h-[400px] flex flex-col"
        >
          <div className="relative z-10 flex-1 flex items-center justify-center pt-4">
            <div className="relative w-full aspect-square max-w-[400px]">
              <Image
                src={secondImageCircle}
                alt="Luxury Car Rental"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain relative z-10"
              />
              {/* Bottom White Gradient overlay - Covers half way */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#FBFBFB] via-[#FBFBFB]/80 to-transparent z-20" />
            </div>
          </div>

          {/* Text positioned higher up to overlap the gradient/circle */}
          <div className="relative z-30 px-8 md:px-10 pb-12 -mt-16">
            <Typography
              variant="h4"
              className="text-2xl font-bold text-gray-900 mb-2"
            >
              Luxury Car Rental
            </Typography>
            <Typography variant="p" className="text-gray-400 text-sm max-w-sm">
              High-end vehicles for weddings, VIP travel, and special occasions.
              (Sedans, SUVs, luxury cars)
            </Typography>
          </div>
        </motion.div>

        {/* Row 2, Card 1: Orienco Tour & Travel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative group bg-[#FBFBFB] rounded-[32px] border-6 border-gray-100 overflow-hidden min-h-[400px] flex flex-col"
        >
          <div className="relative z-10 flex-1 flex items-center justify-center pt-8">
            <div className="relative w-full h-[280px] md:h-[320px]">
              <Image
                src={thirdImageContent}
                alt="Orienco Tour & Travel"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain relative z-10"
              />
            </div>
          </div>

          <div className="relative z-10 px-8 md:px-10 pb-10">
            <Typography
              variant="h4"
              className="text-2xl font-bold text-gray-900 mb-2"
            >
              Orienco Tour & Travel
            </Typography>
            <Typography variant="p" className="text-gray-400 text-sm">
              Unforgettable journeys crafted with expertise. Discover exotic
              destinations and create lasting memories.
            </Typography>
          </div>
        </motion.div>

        {/* Row 2, Card 2: GMC Water Bottle Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-7 relative group bg-[#FBFBFB] rounded-[32px] border-6 border-gray-100 overflow-hidden min-h-[400px] flex flex-row items-center"
        >
          {/* Background Lines */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={cardBgLines}
              alt="background lines"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* Left: Bottle Image */}
          <div className="relative z-10 w-1/2 h-full flex items-center justify-center pl-8 md:pl-12">
            <div className="relative w-full h-[350px] md:h-[400px]">
              <Image
                src={fourthImageBottle}
                alt="GMC Water Bottle"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Content and Button */}
          <div className="relative z-10 w-1/2 h-full flex flex-col justify-between py-12 pr-8 md:pr-12">
            <div>
              <Typography
                variant="h4"
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                GMC Water Bottle Company
              </Typography>
              <Typography
                variant="p"
                className="text-gray-400 text-sm max-w-xs"
              >
                Quench your thirst with ease. Discover and reserve your AquaPure
                bottle today!
              </Typography>
            </div>

            <div className="flex justify-end pr-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-xl shadow-2xl overflow-hidden"
              >
                <span className="font-bold tracking-wider text-lg">ORDER</span>
                <MousePointer2 className="w-5 h-5 text-white/80" />

                {/* Subtle highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default OurSolutions;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

// Assets
import parentLogo from "@/assets/bannerCompanyTree/parentCompany.png";
import gmcLogo from "@/assets/bannerCompanyTree/gmcLogistic.png";
import luxuryCarLogo from "@/assets/bannerCompanyTree/luxuryCarRental.png";
import rapidDeliveryLogo from "@/assets/bannerCompanyTree/rapidDelivery.png";
import tourTravelLogo from "@/assets/bannerCompanyTree/tourAndTravel.png";

const companies = [
  {
    id: "gmc",
    title: "GMC Logistics",
    description:
      "We provide safe, clean drinking water for your everyday needs.",
    logo: gmcLogo,
    side: "left",
    position: "top",
    // Start at center-left, move left, curve up, end at card
    path: "M 530 185 L 480 185 C 380 185, 380 85, 340 85 L 310 85",
    dots: [
      { x: 530, y: 185 },
      { x: 310, y: 85 },
    ],
  },
  {
    id: "luxury",
    title: "Orienco Luxury Car Rental",
    description:
      "Driven by elegance, comfort, and performance for every journey.",
    logo: luxuryCarLogo,
    side: "left",
    position: "bottom",
    // Start at center-left, move left, curve down, end at card
    path: "M 530 215 L 480 215 C 380 215, 380 315, 340 315 L 310 315",
    dots: [
      { x: 530, y: 215 },
      { x: 310, y: 315 },
    ],
  },
  {
    id: "rapid",
    title: "Orienco Rapid Delivery",
    description:
      "We provide tailored rental solutions designed to bring your vision to life.",
    logo: rapidDeliveryLogo,
    side: "right",
    position: "top",
    // Start at center-right, move right, curve up, end at card
    path: "M 670 185 L 720 185 C 820 185, 820 85, 860 85 L 890 85",
    dots: [
      { x: 670, y: 185 },
      { x: 890, y: 85 },
    ],
  },
  {
    id: "tour",
    title: "Orienco Tour & Travel",
    description: "Book your next adventure with us!",
    logo: tourTravelLogo,
    side: "right",
    position: "bottom",
    // Start at center-right, move right, curve down, end at card
    path: "M 670 215 L 720 215 C 820 215, 820 315, 860 315 L 890 315",
    dots: [
      { x: 670, y: 215 },
      { x: 890, y: 315 },
    ],
  },
];

const CompanyCard = ({ company, onHoverStart, onHoverEnd }: any) => {
  return (
    <motion.div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative flex items-center gap-4 p-5 rounded-[24px] bg-white transition-all duration-300",
        "shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 border-gray-200",
        "hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]",
        "max-w-[300px] w-full z-10",
      )}
    >
      <div className="flex-1 min-w-0">
        <Typography
          variant="h4"
          className="text-base font-bold mb-1 text-gray-900 leading-tight"
        >
          {company.title}
        </Typography>
        <Typography
          variant="p"
          className="text-[11px] text-gray-400 leading-relaxed line-clamp-2"
        >
          {company.description}
        </Typography>
      </div>
      <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-[0_14px_15px_rgba(0,0,0,0.04)] flex items-center justify-center border-2 border-gray-100 group-hover:scale-105 transition-transform">
        <Image
          src={company.logo}
          alt={company.title}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

const CompanyTree = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-4 px-4 select-none">
      <div className="relative min-h-[400px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
        {/* Left Side Companies */}
        <div className="flex flex-col gap-36 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:justify-center lg:py-4 z-10">
          {companies
            ?.filter((c) => c.side === "left")
            .map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onHoverStart={() => setHoveredId(company.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
        </div>

        {/* Center: Mother Company */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[32px] border-2 border-gray-200 shadow-[0_15px_50px_rgba(0,0,0,0.08)] flex items-center justify-center p-1 "
          >
            <Image
              src={parentLogo}
              alt="Orienco Parent"
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side Companies */}
        <div className="flex flex-col gap-36 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:justify-center lg:py-4 z-10">
          {companies
            ?.filter((c) => c.side === "right")
            .map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onHoverStart={() => setHoveredId(company.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
        </div>

        {/* SVG Connector Layer - Moved after cards to ensure visibility on top if needed */}
        <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block overflow-visible">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="ray-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#888" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              <filter
                id="blur-ray"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="1.5" result="blur" />
              </filter>
            </defs>

            {companies?.map((company) => (
              <React.Fragment key={`path-${company.id}`}>
                {/* Static Black Path */}
                <path
                  d={company.path}
                  stroke="#000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="opacity-40"
                />

                {/* Animated Ray */}
                <motion.path
                  d={company.path}
                  stroke="url(#ray-grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.1, pathOffset: 0 }}
                  animate={{ pathOffset: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: company.side === "left" ? 0 : 2,
                  }}
                  className="opacity-80"
                  style={{ filter: "url(#blur-ray)" }}
                />

                {/* Connection Dots - Ensuring they are on top */}
                {company.dots.map((dot, idx) => (
                  <circle
                    key={`${company.id}-dot-${idx}`}
                    cx={dot.x}
                    cy={dot.y}
                    r="3.5"
                    fill="#000"
                    className="opacity-100"
                  />
                ))}
              </React.Fragment>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CompanyTree;

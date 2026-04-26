"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { aboutBrands } from "@/constants/aboutBrands";

const AboutBrands = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col gap-32 md:gap-56">
          {aboutBrands.map((brand, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={brand.id} className="space-y-12 md:space-y-16">
                {/* Brand Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-[#111827] rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center shadow-xl">
                    <brand.icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={1.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.7rem] md:text-[0.85rem] font-bold tracking-[0.25em] text-[#9CA3AF] uppercase mb-1">
                      BRAND {brand.id}
                    </span>
                    <h3 className="text-2xl md:text-[3.5rem] font-bold leading-tight tracking-tight text-[#111827]">
                      {brand.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Content Row */}
                <div className={cn(
                  "flex flex-col gap-10 md:gap-24 items-start",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Image Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 w-full"
                  >
                    <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-700 hover:shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
                      <Image
                        src={brand.image}
                        alt={brand.title}
                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* Description Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="flex-1"
                  >
                    <p className="text-[#6B7280] leading-[1.7] text-lg md:text-[1.25rem] font-medium pt-4">
                      {brand.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutBrands;

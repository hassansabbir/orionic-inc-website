"use client";

import Section from "@/components/ui/Section";
import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <Section
      container={false}
      className="min-h-screen flex flex-col justify-between bg-[#F9F9F9] overflow-hidden relative py-0"
    >
      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F5]/30 to-[#F0F0F0]/50 pointer-events-none" />

      <Container className="relative z-10 pt-[15vh] flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full lg:w-[65%] xl:w-[60%]"
        >
          <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-[1.6] text-[#1A1A1A] tracking-tight antialiased">
            Orienco Inc Group is a modern service group built to simplify how
            people access premium rentals and lifestyle solutions. From event
            essentials to luxury vehicles, we bring together curated services
            under one{" "}
            <span className="text-[#C5C5C5]">
              trusted platform focused on quality, reliability, and seamless
              experiences.
            </span>
          </p>
        </motion.div>
      </Container>

      {/* Massive Background Text - Branding Watermark */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center select-none pointer-events-none"
        >
          <h2 className="text-[13vw] font-bold text-gray-400 whitespace-nowrap leading-none tracking-tighter blur-[1px] md:blur-[2px]">
            Orienco Inc Group
          </h2>
        </motion.div>
      </div>
    </Section>
  );
};

export default HomeAbout;

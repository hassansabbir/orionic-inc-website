"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-40 md:pb-32 bg-white">
      {/* Subtle Background Fade */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[#F9FAFB] to-white -z-10" />
      
      <Container>
        {/* Section 1: Hero Banner */}
        <div className="flex flex-col items-center text-center mb-32 md:mb-48">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] mb-8"
          >
            About Orienco Inc. Group
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-[1.35rem] text-[#4B5563] max-w-[52rem] leading-[1.6] font-medium"
          >
            We&apos;re not just a company. We&apos;re an ecosystem of interconnected services designed 
            to make modern life simpler, more elegant, and infinitely more convenient.
          </motion.p>
        </div>

        {/* Section 2: Foundation */}
        <div className="flex flex-col items-center text-center max-w-[62rem] mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[0.8rem] md:text-[0.9rem] font-bold tracking-[0.25em] text-[#9CA3AF] uppercase mb-6"
          >
            OUR FOUNDATION
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[2.2rem] md:text-[4rem] font-bold italic tracking-tight text-[#111827] mb-12 md:mb-16"
          >
            Built on a Vision
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-[1.65rem] leading-[1.5] text-[#374151]">
              <span className="font-bold text-[#111827]">Oriyanko Inc. Group</span> is a modern service group built to simplify how people 
              access <span className="font-bold text-[#111827]">premium rentals and lifestyle solutions</span>. 
              From event essentials to luxury vehicles, we bring together 
              <span className="text-[#9CA3AF] font-medium"> curated services under one trusted platform </span>
              focused on quality, reliability, and seamless experiences. We believe the best service is 
              the one you don&apos;t have to think about
            </p>
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-[1.65rem] font-semibold text-[#111827]"
            >
              — it just works.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBanner;

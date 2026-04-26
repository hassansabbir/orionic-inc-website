"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Container from "@/components/ui/Container";

const principles = [
  {
    title: "Our Mission",
    description:
      "To create an integrated ecosystem where every brand delivers exceptional value, making premium services accessible and stress-free for individuals and businesses.",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted multi-brand platform, recognized globally for innovation, quality, and customer-first experiences across all touchpoints and services.",
  },
  {
    title: "Our Values",
    description:
      "Excellence, transparency, and innovation guide everything we do. We believe in building lasting relationships through trust, reliability, and unwavering commitment.",
  },
];

const DrivesUs = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[0.8rem] md:text-[0.9rem] font-bold tracking-[0.25em] text-[#9CA3AF] uppercase mb-6 block"
          >
            OUR PRINCIPLES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] md:text-[4rem] font-bold italic tracking-tight text-[#111827]"
          >
            What Drives Us Forward
          </motion.h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {principles?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-start text-left transition-shadow duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="w-16 h-16 bg-[#111827] rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                {item.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-lg font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DrivesUs;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  {
    number: 4,
    suffix: "",
    label: "Service Brands",
    description: "Unified solutions for every need",
  },
  {
    number: 50,
    suffix: "K+",
    label: "Happy Customers",
    description: "Trusted by individuals and businesses",
  },
  {
    number: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Reliability you can count on",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    description: "We're here whenever you need us",
  },
];

const StatItem = ({ item, index }: { item: typeof stats[0]; index: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, item.number, {
        duration: 2,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, item.number, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-[3.5rem] md:text-[5rem] font-bold text-white mb-2 leading-none tracking-tight">
        {count}
        {item.suffix}
      </div>
      <div className="text-lg md:text-xl font-bold text-white mb-3">
        {item.label}
      </div>
      <div className="text-[0.9rem] md:text-base text-[#9CA3AF] font-medium max-w-[200px]">
        {item.description}
      </div>
    </motion.div>
  );
};

const ImpactThatSpeaks = () => {
  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden">
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
            BY THE NUMBERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] md:text-[4rem] font-bold italic tracking-tight text-white"
          >
            Impact That Speaks
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((item, index) => (
            <StatItem key={index} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImpactThatSpeaks;

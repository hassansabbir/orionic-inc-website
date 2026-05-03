"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import CompanyTree from "./CompanyTree";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <Section className="relative pt-20 md:pt-32 pb-8 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-10"
        >
          <Typography
            variant="h1"
            className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] md:leading-[1.15]"
          >
            Orienco One Platform For <br className="hidden md:block" />
            Event Rentals, Luxury Cars, And More.
          </Typography>
        </motion.div>
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Orienco Is Built To Simplify How People Plan, Celebrate, And Travel.
            From Elegant Event Rentals To Luxury Vehicles And Essential
            Services, We Bring Everything Together In One Trusted Platform
            Designed For Smooth, Stress-Free Experiences.
          </p>
        </motion.div>

        {/* Image slider */}
        <BannerSlider />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          <Button
            size="lg"
            className="rounded-2xl bg-black hover:bg-black/90 text-white px-10 py-7 text-lg group shadow-xl shadow-black/10 transition-all hover:scale-105"
          >
            Learn More
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </motion.div>
        {/* Integrated Company Tree */}
        <CompanyTree />
      </div>

      {/* Very subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl aspect-video bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5 blur-[120px] -z-10 pointer-events-none" />
    </Section>
  );
};

export default Banner;

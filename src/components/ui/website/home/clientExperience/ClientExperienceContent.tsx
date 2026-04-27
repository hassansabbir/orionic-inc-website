"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { Review } from "@/types";
import cardBgLines from "@/assets/solutions/cardBgLines.png";

interface ClientExperienceContentProps {
  reviews: Review[];
}

const ClientExperienceContent = ({ reviews }: ClientExperienceContentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !reviews.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Restart autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (!reviews.length) return null;

  const activeReview = reviews[activeIndex];

  // Helper to get image URL
  const getImageUrl = (path: string) => {
    if (!path) return "/fallback-avatar.png";
    if (path.startsWith("http")) return path;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ? 
      new URL(process.env.NEXT_PUBLIC_API_URL).origin : 
      "http://10.10.7.94:5004";
    return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-20 relative">
        <div className="inline-block relative">
          <Typography variant="h2" className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            What Our Clients <br /> <span className="italic font-bold">Experience with Orienco.</span>
          </Typography>
          {/* Decorative Wavy Lines */}
          <div className="absolute -left-48 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
            <Image src={cardBgLines} alt="" width={150} height={30} className="object-contain" style={{ width: "auto", height: "auto" }} />
          </div>
          <div className="absolute -right-48 top-1/2 -translate-y-1/2 opacity-10 rotate-180 hidden xl:block">
            <Image src={cardBgLines} alt="" width={150} height={30} className="object-contain" style={{ width: "auto", height: "auto" }} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side: Featured Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 bg-slate-100 dark:bg-slate-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={getImageUrl(activeReview.image)}
                  alt={activeReview.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  unoptimized // Use this if the external images are not configured in next.config.ts
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Content and Nav */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Avatar Navigation */}
          <div className="flex flex-wrap gap-4 items-center">
            {reviews.map((review, index) => (
              <button
                key={review._id}
                onClick={() => handleAvatarClick(index)}
                className={cn(
                  "relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 transform bg-slate-100 dark:bg-slate-800",
                  activeIndex === index 
                    ? "ring-2 ring-primary ring-offset-4 scale-110 shadow-lg" 
                    : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                )}
              >
                <Image
                  src={getImageUrl(review.image)}
                  alt={review.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <Typography className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  “{activeReview.review}”
                </Typography>
                
                <div>
                  <Typography variant="h4" className="text-xl font-bold">
                    {activeReview.name}
                  </Typography>
                  <Typography className="text-muted-foreground uppercase tracking-wider text-sm font-semibold">
                    {activeReview.designation}
                  </Typography>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientExperienceContent;

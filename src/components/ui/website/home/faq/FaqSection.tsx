"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

const faqData = [
  {
    question: "What services does Orienco Inc Group offer?",
    answer: "Orienco Inc Group offers a wide range of services including premium car rentals, event management, tour & travel packages, and seamless delivery solutions. We cater to both individual and corporate clients with a focus on luxury and efficiency."
  },
  {
    question: "How can I book a service?",
    answer: "You can reach out to us directly through our website or submit a request for a customized quote based on your specific needs. Our team will review your requirements carefully and guide you through every step of the process, ensuring a smooth, transparent, and hassle-free experience from initial inquiry to final execution."
  },
  {
    question: "Do you provide delivery and setup for event rentals?",
    answer: "Yes, we provide full delivery and setup services for all our event rentals. Our professional team handles everything from transportation to on-site assembly, ensuring your event is perfectly prepared."
  },
  {
    question: "Can I rent luxury cars for weddings and events?",
    answer: "Absolutely! We specialize in high-end vehicle rentals for special occasions, including weddings, VIP transport, and corporate events. Our fleet includes a variety of sedans, SUVs, and luxury cars."
  },
  {
    question: "Do you offer customized event packages?",
    answer: "Yes, we pride ourselves on offering bespoke event packages tailored to your specific vision and budget. Our event planners work closely with you to curate every detail."
  }
];

const FaqItem = ({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex items-start gap-6 p-6 md:p-8 text-left rounded-[24px] border border-gray-100 transition-all duration-300 ${
          isOpen ? "bg-white shadow-sm" : "bg-[#FBFBFB]"
        }`}
      >
        <div className="mt-1 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-gray-900" />
          ) : (
            <Plus className="w-6 h-6 text-gray-900" />
          )}
        </div>
        <div className="flex-1">
          <Typography
            variant="h5"
            className="text-lg md:text-xl font-medium text-gray-900 leading-tight"
          >
            {item.question}
          </Typography>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Typography
                  variant="p"
                  className="text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl"
                >
                  {item.answer}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default as in the image

  return (
    <Section className="py-24 bg-white overflow-hidden">
      <Container>
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
              Frequently Asked Questions
            </Typography>

            <div className="flex-1 flex items-center gap-3">
              <div className="w-12 h-[1px] bg-gray-200 flex-shrink-0" />
              <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white shadow-sm flex-shrink-0" />
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gray-100 to-gray-200" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FaqSection;

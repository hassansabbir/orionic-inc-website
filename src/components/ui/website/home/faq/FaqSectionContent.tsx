"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { FAQ } from "@/types";

interface FaqSectionContentProps {
  faqs: FAQ[];
}

const FaqItem = ({ item, isOpen, onClick }: { item: FAQ, isOpen: boolean, onClick: () => void }) => {
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

const FaqSectionContent = ({ faqs }: FaqSectionContentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  if (!faqs.length) return null;

  return (
    <div className="max-w-6xl mx-auto">
      {faqs.map((item, index) => (
        <FaqItem
          key={item._id}
          item={item}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FaqSectionContent;

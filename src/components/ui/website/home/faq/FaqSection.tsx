import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import { SSRFetch } from "@/components/common/SSRFetch";
import FaqSectionContent from "./FaqSectionContent";
import { ApiResponse, FAQ } from "@/types";

import { FALLBACK_FAQS } from "@/lib/fallbackData";

import EmptyState from "@/components/common/EmptyState";

const FaqSection = () => {
  return (
    <Section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-center w-full gap-4 md:gap-12 mb-6 px-4">
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-100 to-gray-200" />
              <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white shadow-sm shrink-0" />
              <div className="w-12 h-px bg-gray-200 shrink-0" />
            </div>

            <Typography
              variant="h2"
              className="text-4xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight whitespace-nowrap"
            >
              Frequently Asked Questions
            </Typography>

            <div className="flex-1 flex items-center gap-3">
              <div className="w-12 h-px bg-gray-200 shrink-0" />
              <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white shadow-sm shrink-0" />
              <div className="flex-1 h-px bg-linear-to-l from-transparent via-gray-100 to-gray-200" />
            </div>
          </div>
        </div>

        <SSRFetch<ApiResponse<FAQ[]>>
          endpoint="/faq?platform=parent"
          errorFallback={() => <FaqSectionContent faqs={FALLBACK_FAQS} />}
        >
          {(response) =>
            response.data && response.data.length > 0 ? (
              <FaqSectionContent faqs={response.data} />
            ) : (
              <EmptyState
                message="No FAQs found"
                description="Our team is currently working on compiling the most common questions for this platform."
              />
            )
          }
        </SSRFetch>
      </Container>
    </Section>
  );
};

export default FaqSection;

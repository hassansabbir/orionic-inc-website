import Section from "@/components/ui/Section";
import { SSRFetch } from "@/components/common/SSRFetch";
import ClientExperienceContent from "./ClientExperienceContent";
import { ApiResponse, Review } from "@/types";

import { FALLBACK_REVIEWS } from "@/lib/fallbackData";

import EmptyState from "@/components/common/EmptyState";

const ClientExperience = () => {
  return (
    <Section className="py-20 overflow-hidden bg-background">
      <SSRFetch<ApiResponse<Review[]>>
        endpoint="/review?platform=parent"
        errorFallback={() => <ClientExperienceContent reviews={FALLBACK_REVIEWS} />}
      >
        {(response) => 
          response.data && response.data.length > 0 ? (
            <ClientExperienceContent reviews={response.data} />
          ) : (
            <EmptyState 
              message="No reviews found" 
              description="We haven't received any client reviews for the parent platform yet." 
            />
          )
        }
      </SSRFetch>
    </Section>
  );
};

export default ClientExperience;

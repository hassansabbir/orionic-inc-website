import Section from "@/components/ui/Section";
import { SSRFetch } from "@/components/common/SSRFetch";
import ClientExperienceContent from "./ClientExperienceContent";
import { ApiResponse, Review } from "@/types";

const ClientExperience = () => {
  return (
    <Section className="py-20 overflow-hidden bg-background">
      <SSRFetch<ApiResponse<Review[]>> endpoint="/review?platform=parent">
        {(response) => (
          <ClientExperienceContent reviews={response.data} />
        )}
      </SSRFetch>
    </Section>
  );
};

export default ClientExperience;

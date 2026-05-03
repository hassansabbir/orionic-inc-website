import React from "react";
import Container from "@/components/ui/Container";
import { SSRFetch } from "@/components/common/SSRFetch";
import AboutBrandsContent from "./AboutBrandsContent";
import { ApiResponse, AboutUs } from "@/types";

import { FALLBACK_ABOUT_US } from "@/lib/fallbackData";

import EmptyState from "@/components/common/EmptyState";

const AboutBrands = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <Container>
        <SSRFetch<ApiResponse<AboutUs[]>>
          endpoint="/about-us?platform=parent"
          errorFallback={() => <AboutBrandsContent aboutItems={FALLBACK_ABOUT_US} />}
        >
          {(response) => 
            response.data && response.data.length > 0 ? (
              <AboutBrandsContent aboutItems={response.data} />
            ) : (
              <EmptyState 
                message="No information found" 
                description="We haven't added specific brand information for the parent company yet." 
              />
            )
          }
        </SSRFetch>
      </Container>
    </section>
  );
};

export default AboutBrands;

import React from "react";
import Container from "@/components/ui/Container";
import { SSRFetch } from "@/components/common/SSRFetch";
import AboutBrandsContent from "./AboutBrandsContent";
import { ApiResponse, AboutUs } from "@/types";

const AboutBrands = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <Container>
        <SSRFetch<ApiResponse<AboutUs[]>> endpoint="/about-us?platform=parent">
          {(response) => (
            <AboutBrandsContent aboutItems={response.data} />
          )}
        </SSRFetch>
      </Container>
    </section>
  );
};

export default AboutBrands;

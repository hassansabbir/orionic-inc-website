import AboutPage from "@/components/ui/website/about/AboutPage";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description: "Learn about Orienco Inc.'s legacy of automotive excellence, premium logistics, and our commitment to luxury service.",
});

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;

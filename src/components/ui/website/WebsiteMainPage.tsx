import Banner from "./home/banner/Banner";
import BrandsMarquee from "./home/brands/BrandsMarquee";
import ClientExperience from "./home/clientExperience/ClientExperience";
import CTASection from "./home/ctaSection/CTASection";
import FaqSection from "./home/faq/FaqSection";
import HomeAbout from "./home/homeAbout/HomeAbout";
import ShowcaseOurCreations from "./home/showcase/ShowcaseOurCreations";
import OurSolutions from "./home/solutions/OurSolutions";

const WebsiteMainPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <BrandsMarquee />
      <HomeAbout />
      <OurSolutions />
      <ShowcaseOurCreations />
      <ClientExperience />
      <FaqSection />
      <CTASection />
    </div>
  );
};

export default WebsiteMainPage;

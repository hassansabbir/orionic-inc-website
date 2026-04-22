import Banner from "./home/banner/Banner";
import BrandsMarquee from "./home/brands/BrandsMarquee";
import CTASection from "./home/ctaSection/CTASection";
import HomeAbout from "./home/homeAbout/HomeAbout";

const WebsiteMainPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <BrandsMarquee />
      <HomeAbout />
      <CTASection />
    </div>
  );
};

export default WebsiteMainPage;

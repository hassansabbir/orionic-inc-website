import CTASection from "../home/ctaSection/CTASection";
import AboutBanner from "./AboutBanner";
import AboutBrands from "./AboutBrands";
import DrivesUs from "./DrivesUs";
import ImpactThatSpeaks from "./ImpactThatSpeaks";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <DrivesUs />
      <ImpactThatSpeaks />
      <AboutBrands />
      <CTASection />
    </div>
  );
};

export default AboutPage;

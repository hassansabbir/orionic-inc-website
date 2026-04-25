import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ctaBg from "@/assets/cta/ctabackground.png";

const CTASection = () => {
  return (
    <Section container={false} className="relative min-h-[600px] flex items-center overflow-hidden py-0 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaBg}
          alt="CTA Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <Container className="relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-medium italic text-white tracking-tight leading-tight">
              Ready to Book Your <br /> Experience?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Get in touch with us to explore tailored event and rental solutions
              designed around your unique needs, ensuring a seamless and
              well-executed experience from start to finish.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button className="group relative flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-white/95 to-white/75 hover:from-white hover:to-white text-black font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] hover:-translate-y-1">
              <span className="text-lg">Call Us</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;

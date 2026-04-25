"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import footerBg from "@/assets/footer-gridlayer-with-bottom-branding-text.png";

const SocialIcon = ({
  path,
  ...props
}: { path: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d={path} />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SocialIcon
    path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    {...props}
  />
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SocialIcon
    path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
    {...props}
  />
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 overflow-hidden">
      {/* Background Layer (Grid and Branding Text) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={footerBg}
          alt="Footer Background"
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-50"
          priority
        />
      </div>

      <Container className="relative z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Home */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium tracking-tight">Home</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/category"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  href="/all-cars"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Business Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium tracking-tight">
              Business Hours
            </h3>
            <p className="text-gray-400">We are open 24/7</p>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium tracking-tight">Contact Info</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 font-medium">+1 (555) 234-6789</li>
              <li>
                <Link
                  href="mailto:info@12345aa.com"
                  className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600"
                >
                  info@12345aa.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials and Additional Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: FacebookIcon, href: "#" },
                  { Icon: TwitterIcon, href: "#" },
                  { Icon: InstagramIcon, href: "#" },
                  { Icon: LinkedinIcon, href: "#" },
                ].map(({ Icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  HEADQUARTERS
                </h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  123 Innovation St
                  <br />
                  Tech District
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  INQUIRIES
                </h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  <Link
                    href="mailto:hello@orienco.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@orienco.com
                  </Link>
                  <br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Spacing for the background branding text */}
      <div className="h-[15vh] md:h-[20vh]" />
    </footer>
  );
};

export default Footer;

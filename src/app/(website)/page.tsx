import WebsiteMainPage from "@/components/ui/website/WebsiteMainPage";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Luxury Services & Worldwide Logistics",
  description: "Orienco Inc. provides premium luxury services including exotic car rentals, high-end event management, luxury apartment rentals, and worldwide rapid logistics.",
});

export default function Home() {
  return (
    <div>
      <WebsiteMainPage />
    </div>
  );
}

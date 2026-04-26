import ContactUs from "@/components/ui/website/contact/ContactUs";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with Orienco Inc. for luxury car rentals, logistics inquiries, and premium concierge services.",
});

const page = () => {
  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default page;

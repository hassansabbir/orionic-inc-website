"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Container from "@/components/ui/Container";
import api from "@/lib/api";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

// Form Schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Custom Social Icons
const Facebook = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Instagram = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Linkedin = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Youtube = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await api.post("/contact", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        message: `${data.subject}\n\n${data.message}`,
        platform: "parent",
      });

      setSubmitStatus("success");
      reset();
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container className="max-w-[1200px]">
        {/* Top Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] md:text-[4rem] font-bold tracking-tight text-[#111827] mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Let&apos;s connect. Whether it&apos;s a question or a service
            request, we&apos;re ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="space-y-4 mb-10">
              <span className="text-[0.75rem] font-bold tracking-[0.05em] text-[#9CA3AF] uppercase block">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.2] tracking-tight text-[#111827] max-w-[400px]">
                Join Us in Creating Something Great
              </h2>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First Name *"
                    className={`w-full px-6 py-4 rounded-2xl bg-[#F9FAFB] border ${errors.firstName ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all font-medium`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last Name *"
                    className={`w-full px-6 py-4 rounded-2xl bg-[#F9FAFB] border ${errors.lastName ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all font-medium`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className={`w-full px-6 py-4 rounded-2xl bg-[#F9FAFB] border ${errors.email ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all font-medium`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number *"
                    className={`w-full px-6 py-4 rounded-2xl bg-[#F9FAFB] border ${errors.phone ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all font-medium`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Subject *"
                  className={`w-full px-6 py-4 rounded-2xl bg-[#F9FAFB] border ${errors.subject ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all font-medium`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <textarea
                  {...register("message")}
                  placeholder="Message *"
                  rows={5}
                  className={`w-full px-6 py-5 rounded-2xl bg-[#F9FAFB] border ${errors.message ? "border-red-500" : "border-[#F3F4F6]"} text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#111827]/5 transition-all resize-none font-medium`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full md:w-auto px-9 py-4 bg-[#111827] disabled:bg-[#374151] text-white font-bold rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all text-[0.95rem] flex items-center justify-center gap-2 min-w-[180px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {/* Feedback Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-3 text-green-700"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="font-medium text-sm">
                      Your message has been sent successfully!
                    </p>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-700"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="font-medium text-sm">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-black rounded-[2rem] p-10 md:p-14 flex flex-col justify-between overflow-hidden lg:min-h-[650px] w-full"
          >
            {/* Background Decorative Pattern */}
            <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] pointer-events-none select-none">
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-1/4 translate-y-1/4 scale-150 blur-3xl opacity-40" />
              <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-full scale-125 translate-x-1/4 translate-y-1/4" />
              <div className="absolute inset-0 border-[1.5px] border-white/5 rounded-full scale-150 translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Address
                </h3>
                <p className="text-[#9CA3AF] text-[1rem] leading-relaxed font-medium">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Contact
                </h3>
                <div className="space-y-2 font-medium">
                  <p className="text-[#9CA3AF] text-[1rem]">
                    Phone: +012-345-789
                  </p>
                  <p className="text-[#9CA3AF] text-[1rem]">
                    Email: example@gmail.com
                  </p>
                  <p className="text-[#9CA3AF] text-[1rem]">
                    Website: www.example.com
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Open Time
                </h3>
                <p className="text-[#9CA3AF] text-[1rem] leading-relaxed font-medium">
                  Monday - Friday : 10:00 - 20:00
                </p>
              </div>
            </div>

            <div className="space-y-8 relative z-10 pt-12">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Stay Connected
              </h3>
              <div className="flex flex-wrap gap-4">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-lg group"
                    >
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;

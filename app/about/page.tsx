import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "About Us | Dentaire",
  description: "Learn more about our dental clinic, our mission, and our team of specialists.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        {/* Breadcrumb Header matching Contact page */}
        <section className="bg-[#F4F7F9] pt-44 pb-24 px-4 relative overflow-hidden">
          {/* Sparkle decoration */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-brand/20 animate-pulse">
            <svg width="40" height="40" viewBox="0 0 28 28" fill="currentColor">
              <path d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0B1B3D] mb-4 tracking-tight">
              About <span className="text-brand">Our Clinic</span>
            </h1>
            <nav className="flex justify-center items-center gap-2 text-[15px] font-medium">
              <Link href="/" className="text-gray-400 hover:text-brand transition-colors">Home</Link>
              <span className="text-brand/40">/</span>
              <span className="text-[#0B1B3D]">About Us</span>
            </nav>
          </div>

          {/* Right side accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-12 bg-brand/5 rounded-l-full blur-sm" />
        </section>
        <AboutDoctor />
        <Team />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappContact />
      <ScrollToTop />
    </div>
  );
}

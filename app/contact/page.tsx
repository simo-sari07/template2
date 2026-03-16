import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Contact Us | Dentaire",
  description: "Get in touch with us for a professional dental consultation. We're here to answer your questions and book your next appointment.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        {/* Banner Section */}
        <section className="bg-[#1B4332] pt-40 pb-20 px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              We're here to help you achieve the perfect smile. Contact our friendly team today to schedule your consultation or ask any questions.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsappContact />
      <ScrollToTop />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Services | Dentaire",
  description: "Comprehensive dental care including teeth whitening, implants, orthodontics, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        {/* Banner Section */}
        <section className="bg-[#1B4332] pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Dental Services</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We offer a wide range of professional dental treatments to keep your smile healthy and beautiful.
            </p>
          </div>
        </section>
        <Services />
        <FAQ />
      </main>
      <Footer />
      <WhatsappContact />
      <ScrollToTop />
    </div>
  );
}

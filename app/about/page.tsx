import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "About Us | Dentaire",
  description: "Learn more about our dental clinic, our mission, and our team of specialists.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        {/* Banner Section */}
        <section className="bg-[#1B4332] pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Our Clinic</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Dedicated to providing the highest quality dental care in a comfortable and friendly environment.
            </p>
          </div>
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

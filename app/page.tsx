
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappContact from "@/components/WhatsappContact";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Jean Dupont",
    image: "https://images.unsplash.com/photo-1612349317150-e410f624c427",
    "@id": "https://example.com",
    url: "https://example.com",
    telephone: "+33123456789",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Rue de la Paix",
      addressLocality: "Paris",
      postalCode: "75002",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <>
      <Script
        id="schema-physician"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow relative">
          <Navbar />
          <Hero />
          <Services />
          <AboutDoctor />
          <Team />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsappContact />
        <ScrollToTop />
      </div>
    </>
  );
}

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";
import ProcessSteps from "@/components/ProcessSteps";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Jean Dupont",
    "image": "https://images.unsplash.com/photo-1612349317150-e410f624c427",
    "@id": "https://example.com",
    "url": "https://example.com",
    "telephone": "+33123456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue de la Paix",
      "addressLocality": "Paris",
      "postalCode": "75002",
      "addressCountry": "FR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "12:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <Script
        id="schema-physician"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <TrustBar />
          <Services />
          <AboutDoctor />
          <ProcessSteps />
          <Team />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B4332] text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link href="#" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 p-1">
                <Image
                  src="/images/logo.webp"
                  alt="Logo du cabinet"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Dr. Dupont
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm text-sm">
              Cabinet médical à Paris prônant une médecine humaine, chaleureuse et à l'écoute de chaque patient.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-white/50"
                  aria-label="Social Link"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold font-heading text-lg mb-6">Liens Rapides</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: "Accueil", href: "#" },
                { name: "Services", href: "#services" },
                { name: "Cabinet", href: "#about" },
                { name: "Parcours", href: "#process" },
                { name: "Équipe", href: "#team" },
                { name: "Avis", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold font-heading text-lg mb-6">Informations utiles</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-white/50">Adresse</span>
                <span>15 Rue de la Paix, 75002 Paris</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white/50">Téléphone</span>
                <Link href="tel:+33123456789" className="hover:text-accent transition-colors">
                  01 23 45 67 89
                </Link>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white/50">Urgences médicales</span>
                <span className="text-accent font-medium">Composez le 15</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} Dr. Dupont Médical. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

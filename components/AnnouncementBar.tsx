import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white py-2 px-4 text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2">
        <span>Nouveau : Consultations disponibles le samedi</span>
        <Link href="#contact" className="text-accent hover:text-white transition-colors inline-flex items-center gap-1 group">
          Prendre RDV
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

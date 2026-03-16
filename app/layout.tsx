import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Dupont — Médecin Généraliste | Paris",
  description:
    "Prenez rendez-vous avec le Dr. Dupont, médecin généraliste à Paris. Des soins chaleureux et humains pour toute la famille. Consultations sur rendez-vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${nunito.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

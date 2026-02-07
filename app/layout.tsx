import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinique Dentaire des Laurentides | Soins dentaires à Blainville",
  description: "Votre clinique dentaire de confiance dans les Laurentides. Soins généraux, esthétiques et d'urgence. Prenez rendez-vous dès aujourd'hui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

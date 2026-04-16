import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import MobileTabBar from "@/components/layout/MobileTabBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Klinik Subha - Your Trusted Family Clinic in Beaufort & Membakut, Sabah",
    template: "%s | Klinik Subha",
  },
  description:
    "Klinik Subha offers affordable, compassionate primary healthcare in Beaufort and Membakut, Sabah. Open daily 8AM–9PM including public holidays. Walk-ins welcome.",
  keywords: [
    "klinik beaufort",
    "klinik membakut",
    "klinik sabah",
    "doctor beaufort sabah",
    "family clinic beaufort",
    "health screening beaufort",
    "vaccination beaufort",
    "klinik subha",
    "klinik berhampiran saya",
  ],
  openGraph: {
    title: "Klinik Subha - Your Trusted Family Clinic in Beaufort & Membakut, Sabah",
    description:
      "Affordable, compassionate primary healthcare in Beaufort and Membakut, Sabah. Open daily 8AM–9PM including public holidays. Walk-ins welcome.",
    type: "website",
    locale: "en_MY",
    siteName: "Klinik Subha",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Subha - Beaufort & Membakut, Sabah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Subha - Your Trusted Family Clinic in Beaufort & Membakut, Sabah",
    description:
      "Affordable, compassionate primary healthcare in Beaufort and Membakut, Sabah. Open daily 8AM–9PM.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://www.kliniksubha.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <MobileTabBar />
      </body>
    </html>
  );
}

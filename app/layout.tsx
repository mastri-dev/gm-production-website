import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileCTA from "@/components/ui/MobileCTA";

export const metadata = {
  title: "GM Production | Chiavi Auto Milano - Emergenza e Codifica",
  description:
    "Duplicazione chiavi auto, codifica chip, sblocco veicoli e assistenza immediata a Milano e provincia. Servizio rapido 24/7.",
  keywords: [
    "chiavi auto Milano",
    "duplicazione chiavi auto",
    "codifica chiavi",
    "sblocco auto Milano",
    "telecomandi auto"
  ],
  openGraph: {
    title: "GM Production - Chiavi Auto Milano",
    description: "Servizio rapido di chiavi auto e emergenze a Milano.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-black overflow-x-hidden">
        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GM Production",
              image: "/luxury-car.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Milano",
                addressCountry: "IT"
              },
              url: "https://gmproduction.it",
              telephone: "+39 022402155",
              priceRange: "€€"
            })
          }}
        />

        <Navbar />
        <main className="pt-20 min-h-screen bg-white">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}
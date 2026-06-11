import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileCTA from "@/components/ui/MobileCTA";

export const metadata = {
  title: "Duplicazione Chiavi Auto Milano | GM Production",
  description: "Duplicazione chiavi auto, codifica telecomandi, recupero chiavi smarrite e assistenza rapida a Milano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0F1115] text-white scroll-smooth overflow-x-hidden">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}
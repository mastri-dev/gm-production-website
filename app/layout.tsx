import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileCTA from "@/components/ui/MobileCTA";

export const metadata = {
  title: "GM Production - Chiavi Auto Milano",
  description: "Duplicazione e programmazione chiavi auto a Milano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
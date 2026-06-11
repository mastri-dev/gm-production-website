export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden flex z-50">

      <a
        href="tel:022402155"
        className="flex-1 bg-[#0066FF] text-white py-4 text-center font-medium"
      >
        Chiama
      </a>

      <a
        href="https://wa.me/39022402155?text=Ho%20bisogno%20di%20una%20chiave%20auto"
        className="flex-1 bg-green-500 text-white py-4 text-center font-medium"
      >
        WhatsApp
      </a>

    </div>
  );
}
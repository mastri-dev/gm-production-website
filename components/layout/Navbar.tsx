export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F1115]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="font-bold text-lg">
          GM <span className="text-[#0066FF]">Production</span>
        </div>

        <a
          href="https://wa.me/39022402155"
          className="bg-[#0066FF] px-4 py-2 rounded-lg text-sm"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}
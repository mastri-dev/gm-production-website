import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#0F1115] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 via-black to-green-500/10" />
        <div className="absolute w-[600px] h-[600px] bg-[#0066FF]/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full bottom-[-200px] right-[-200px]" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
              GM Production • Milano
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Chiavi auto perse o bloccate?
              <span className="text-[#0066FF] block mt-2">
                Intervento immediato a Milano
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Duplicazione e codifica chiavi auto con intervento rapido anche in emergenza.
              Siamo operativi su Milano e provincia.
            </p>

            <div className="mt-8 flex gap-4 flex-col md:flex-row">
              <a href="tel:022402155" className="bg-[#0066FF] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                Chiama ora
              </a>

              <a href="https://wa.me/39022402155?text=Ciao%20GM%20Production,%20ho%20bisogno%20di%20una%20chiave%20auto" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl hover:border-white/30 transition">
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ⚡ Interventi rapidi • 🔐 Tutti i marchi auto • 📍 Milano
            </p>
          </div>

          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/car-service.jpg"
              alt="GM Production servizio chiavi auto"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* EMERGENCY */}
      <section className="py-16 px-6 text-center bg-red-500/10 border-y border-red-500/20">
        <h2 className="text-3xl font-bold text-red-400">
          Hai perso tutte le chiavi dell’auto?
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Interveniamo rapidamente anche senza chiave originale. Servizio emergenza attivo su Milano e provincia.
        </p>

        <a
          href="tel:022402155"
          className="inline-block mt-6 bg-red-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Chiama subito emergenza
        </a>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Servizi professionali
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Duplicazione Chiavi Auto",
            "Programmazione Chip Transponder",
            "Sblocco Auto Senza Chiave",
            "Riparazione Telecomandi"
          ].map((s) => (
            <div key={s} className="bg-[#171A21] p-6 rounded-xl border border-white/10 hover:border-[#0066FF]/40 hover:scale-105 transition cursor-pointer">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[
          { t: "Intervento Rapido", d: "Arriviamo in pochi minuti a Milano." },
          { t: "Tutti i Marchi", d: "BMW, Audi, Mercedes, Fiat e altri." },
          { t: "Tecnologia Avanzata", d: "Strumenti professionali di codifica." }
        ].map((x) => (
          <div key={x.t} className="bg-[#171A21] p-6 rounded-xl border border-white/10">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="text-gray-400 mt-2">{x.d}</p>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <section className="py-10 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/luxury-car.jpg" width={140} height={100} alt="car" className="rounded-xl" />
          <Image src="/car-service.jpg" width={140} height={100} alt="service" className="rounded-xl" />
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Recensioni clienti Google</h2>

        <div className="text-yellow-400 text-xl font-semibold">★★★★★ 4.8 su Google</div>
        <p className="text-gray-500 mt-2">Recensioni reali in arrivo da Google Places API</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            "Servizio velocissimo e super professionale",
            "Risolto problema chiavi in meno di 1 ora",
            "Disponibili anche in emergenza, consigliato"
          ].map((r,i)=> (
            <div key={i} className="bg-[#171A21] p-6 rounded-xl text-gray-300 border border-white/10">
              ★★★★★ {r}
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Dove Siamo</h2>

        <iframe
          className="w-full h-[450px] rounded-2xl border border-white/10 shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.04911284682163!2d9.241712394708333!3d45.52936745015816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c77d5cd69e7f%3A0x415b888c8475432a!2sG.M.%20PRODUCTION%20Srl%20-%20Duplicazione%20Chiavi%20Auto%20-%20Codifiche%20-%20Telecomandi!5e0!3m2!1sit!2sit!4v1781191442797!5m2!1sit!2sit"
          loading="lazy"
        />
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Hai bisogno di una chiave auto?</h2>

        <div className="mt-6 flex justify-center gap-4 flex-col md:flex-row">
          <a href="tel:022402155" className="bg-[#0066FF] px-8 py-4 rounded-xl">Chiama ora</a>
          <a href="https://wa.me/39022402155" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl">WhatsApp</a>
        </div>
      </section>

    </main>
  );
}

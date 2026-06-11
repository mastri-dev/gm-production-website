import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        {/* background car */}
        <div className="absolute inset-0">
          <Image
            src="/luxury-car.jpg"
            alt="GM Production Car"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <p className="text-sm tracking-[0.35em] text-gray-500 uppercase italic font-light">
              GM Production • Milano
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-tight">
              Chiavi auto perse o bloccate
              <span className="block mt-3">Intervento immediato a Milano</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Duplicazione e codifica chiavi auto con intervento rapido anche in emergenza su Milano e provincia.
            </p>

            <div className="mt-8 flex gap-4 flex-col md:flex-row">
              <a href="tel:022402155" className="bg-black text-white px-8 py-4 rounded-full">
                Chiama ora
              </a>
              <a href="https://wa.me/39022402155" className="border border-black px-8 py-4 rounded-full">
                WhatsApp
              </a>
            </div>
          </div>

          {/* CAR IMAGE */}
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/luxury-car.jpg"
              alt="Auto"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Servizi</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Duplicazione chiavi auto",
            "Programmazione chip",
            "Sblocco veicoli",
            "Riparazione telecomandi"
          ].map((s) => (
            <div key={s} className="border rounded-xl p-6 hover:shadow-md transition">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* KEYS MARQUEE LOOP */}
      <section className="py-10 overflow-hidden bg-gray-50">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { t: "Rapidità", d: "Interventi veloci su Milano." },
          { t: "Tutti i marchi", d: "Auto europee e asiatiche." },
          { t: "Tecnologia", d: "Strumenti di codifica avanzati." }
        ].map((x) => (
          <div key={x.t} className="border rounded-xl p-6">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="text-gray-600 mt-2">{x.d}</p>
          </div>
        ))}
      </section>

      {/* REVIEWS REDESIGN */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Recensioni clienti</h2>
        <p className="text-gray-500">★★★★★ 4.8 su Google</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { r: "Servizio rapidissimo e professionale", n: "Marco" },
            { r: "Problema risolto in meno di un’ora", n: "Luca" },
            { r: "Assistenza impeccabile anche in emergenza", n: "Giulia" }
          ].map((x, i) => (
            <div key={i} className="border rounded-xl p-6 text-left hover:shadow-md transition">
              <p className="text-gray-700">“{x.r}”</p>
              <p className="text-sm text-gray-400 mt-4">— {x.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Contatti</h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-700">

          <div className="space-y-3">
            <p><strong>Telefono:</strong> 022402155</p>
            <p><strong>WhatsApp:</strong> +39 022402155</p>
            <p><strong>Email:</strong> info@gmproduction.it</p>
          </div>

          <div className="space-y-3">
            <p><strong>Indirizzo:</strong> GM Production Srl</p>
            <p><strong>Città:</strong> Milano</p>
            <p><strong>Provincia:</strong> MI</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Hai bisogno di una chiave auto?</h2>
        <div className="mt-6 flex justify-center gap-4 flex-col md:flex-row">
          <a href="tel:022402155" className="bg-black text-white px-8 py-4 rounded-full">Chiama ora</a>
          <a href="https://wa.me/39022402155" className="border border-black px-8 py-4 rounded-full">WhatsApp</a>
        </div>
      </section>

    </main>
  );
}

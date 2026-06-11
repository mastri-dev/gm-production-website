import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        {/* background car image */}
        <div className="absolute inset-0">
          <Image
            src="/luxury-car.jpg"
            alt="car"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              GM Production • Milano
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-tight">
              Chiavi auto perse o bloccate
              <span className="block mt-3">
                Intervento immediato a Milano
              </span>
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

          {/* ORBIT KEYS */}
          <div className="relative flex items-center justify-center">

            <div className="relative w-[320px] h-[320px] animate-spin-slow">

              <div className="absolute inset-0 rounded-full border border-gray-300" />

              {/* key orbit items */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Image src="/car-key.jpg" width={80} height={60} alt="key" className="rounded-lg" />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Image src="/car-key.jpg" width={80} height={60} alt="key" className="rounded-lg" />
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <Image src="/car-key.jpg" width={80} height={60} alt="key" className="rounded-lg" />
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Image src="/car-key.jpg" width={80} height={60} alt="key" className="rounded-lg" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EMERGENCY */}
      <section className="py-16 px-6 text-center bg-gray-50 border-y">
        <h2 className="text-3xl font-semibold">Emergenza chiavi auto</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Interveniamo rapidamente anche senza chiave originale su Milano e provincia.
        </p>
        <a
          href="tel:022402155"
          className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-full"
        >
          Chiama subito
        </a>
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
            <div key={s} className="border rounded-xl p-6">
              {s}
            </div>
          ))}
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

      {/* GALLERY */}
      <section className="py-10 overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap">
          <Image src="/car-key.jpg" width={140} height={100} alt="key" className="rounded-xl" />
          <Image src="/luxury-car.jpg" width={140} height={100} alt="car" className="rounded-xl" />
          <Image src="/car-service.jpg" width={140} height={100} alt="service" className="rounded-xl" />
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Recensioni</h2>
        <p className="text-gray-600">★★★★★ 4.8 su Google</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            "Servizio veloce e professionale",
            "Problema risolto in meno di un’ora",
            "Ottima assistenza anche in emergenza"
          ].map((r,i)=> (
            <div key={i} className="border rounded-xl p-6">
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Dove siamo</h2>
        <iframe
          className="w-full h-[450px] rounded-2xl border"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.04911284682163!2d9.241712394708333!3d45.52936745015816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c77d5cd69e7f%3A0x415b888c8475432a!2sG.M.%20PRODUCTION%20Srl%20-%20Duplicazione%20Chiavi%20Auto%20-%20Codifiche%20-%20Telecomandi!5e0!3m2!1sit!2sit!4v1781191442797!5m2!1sit!2sit"
          loading="lazy"
        />
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
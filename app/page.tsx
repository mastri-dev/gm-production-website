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
              <span className="text-[#0066FF]"> Le rifacciamo subito.</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Servizio rapido di duplicazione e programmazione chiavi auto a Milano e provincia.
              Interventi anche in emergenza.
            </p>

            <div className="mt-8 flex gap-4 flex-col md:flex-row">

              <a
                href="tel:022402155"
                className="bg-[#0066FF] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Chiama ora
              </a>

              <a
                href="https://wa.me/39022402155?text=Ciao%20GM%20Production,%20ho%20bisogno%20di%20una%20chiave%20auto"
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl hover:border-white/30 transition"
              >
                WhatsApp
              </a>

            </div>

            <p className="mt-6 text-sm text-gray-500">
              ⚡ Interventi rapidi • 🔐 Tutti i marchi auto • 📍 Milano
            </p>
          </div>

          <img
            src="https://www.chiaviautomilano.it/images/banner_home_3_h05363qv.png"
            className="rounded-2xl shadow-2xl border border-white/10"
          />

        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">

  <h2 className="text-3xl font-bold text-center mb-10">
    Interventi & Lavorazioni
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <img src="https://www.chiaviautomilano.it/images/chiave_home_01.png" />
    <img src="https://www.chiaviautomilano.it/images/chiave_home_02.png" />
    <img src="https://www.chiaviautomilano.it/images/chiavi_auto_mano.png" />

  </div>

</section>

      {/* TRUST */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

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

          <img src="/car-key.jpg" className="h-28 rounded-xl" />
          <img src="/luxury-car.jpg" className="h-28 rounded-xl" />
          <img src="/car-service.jpg" className="h-28 rounded-xl" />
          <img src="/car-key.jpg" className="h-28 rounded-xl" />

        </div>
      </section>

      {/* SERVICES */}
      <section id="servizi" className="py-20 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          I Nostri Servizi
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Duplicazione Chiavi",
            "Chiavi Smarrite",
            "Codifica Auto",
            "Telecomandi"
          ].map((s) => (
            <div key={s} className="bg-[#171A21] p-6 rounded-xl hover:bg-[#1C2029] transition border border-white/10">
              {s}
            </div>
          ))}

        </div>
      </section>

      <section id="recensioni" className="py-20 max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-6">
          Recensioni Clienti
        </h2>
        
      {/* GOOGLE RATING */}
      <div className="text-yellow-400 text-xl font-semibold">
        ★★★★★ 4.8 su Google
      </div>
      
      <p className="text-gray-500 mt-2">
        Basato su recensioni reali clienti GM Production
      </p>

  {/* REVIEWS */}
  <div className="grid md:grid-cols-3 gap-6 mt-10">

    {[
      "Servizio velocissimo e super professionale",
      "Risolto problema chiavi in meno di 1 ora",
      "Disponibili anche in emergenza, consigliato"
    ].map((r, i) => (
      <div key={i} className="bg-[#171A21] p-6 rounded-xl text-gray-300 border border-white/10">
        <p className="text-yellow-400 mb-2">★★★★★</p>
        {r}
      </div>
    ))}

  </div>

</section>

      {/* MAP */}
      <section id="mappa" className="py-20 px-6 max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Dove Siamo
          </h2>
        
        <iframe
        className="w-full h-[450px] rounded-2xl border border-white/10 shadow-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.04911284682163!2d9.241712394708333!3d45.52936745015816!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c77d5cd69e7f%3A0x415b888c8475432a!2sG.M.%20PRODUCTION%20Srl%20-%20Duplicazione%20Chiavi%20Auto%20-%20Codifiche%20-%20Telecomandi!5e0!3m2!1sit!2sit!4v1781191442797!5m2!1sit!2sit"
        loading="lazy"
        />

</section>

      {/* CTA FINAL */}
      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold">
          Hai bisogno di una chiave auto?
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-col md:flex-row">

          <a href="tel:022402155" className="bg-[#0066FF] px-8 py-4 rounded-xl">
            Chiama ora
          </a>

          <a
            href="https://wa.me/39022402155?text=Ho%20bisogno%20di%20una%20chiave%20auto"
            className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl"
          >
            WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}
export default function ProductsPage() {
  const products = [
    {
      title: "Chiave Auto Codificata",
      desc: "Duplicazione e programmazione chip per la maggior parte dei veicoli.",
    },
    {
      title: "Telecomandi Auto",
      desc: "Riparazione e sostituzione telecomandi con sincronizzazione immediata.",
    },
    {
      title: "Sblocco Veicoli",
      desc: "Intervento rapido in caso di chiavi smarrite o bloccate in auto.",
    },
    {
      title: "Ricodifica Centraline",
      desc: "Servizi avanzati per sistemi immobilizer e centraline moderne.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Prodotti & Servizi
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Soluzioni professionali per chiavi auto, telecomandi e sistemi di sicurezza.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((p) => (
            <div
              key={p.title}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="mt-4 text-gray-600">{p.desc}</p>
              <a
                href="https://wa.me/39022402155"
                className="inline-block mt-6 text-sm underline"
              >
                Richiedi info
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
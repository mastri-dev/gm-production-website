"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => setReviews([]));
  }, []);

  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/luxury-car.jpg"
            alt="GM Production Milano"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.35em] text-gray-500 uppercase">
              GM Production • Milano
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-tight">
              Chiavi auto, codifica e sblocco
              <span className="block mt-3">Intervento immediato a Milano</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Servizio rapido di duplicazione chiavi auto, telecomandi e assistenza emergenze 24/7.
            </p>

            <div className="mt-8 flex gap-4 flex-col md:flex-row">
              <a href="tel:022402155" className="bg-black text-white px-8 py-4 rounded-full">
                Chiama ora
              </a>
              <a href="https://wa.me/39022402155" className="border border-black px-8 py-4 rounded-full">
                WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div>⚡ Rapido</div>
              <div>🔑 Tutti i modelli</div>
              <div>📍 Milano</div>
            </div>
          </div>

          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/luxury-car.jpg"
              alt="Auto service"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Servizi</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
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

      {/* TRUST STRIP */}
      <section className="py-10 bg-gray-50 text-center text-sm text-gray-600">
        Interventi rapidi su Milano e provincia • Disponibile 24/7 • Tecnici specializzati
      </section>

      {/* REVIEWS (STABLE NO LIBS) */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Recensioni clienti</h2>
        <p className="text-center text-gray-500 mt-2">Recensioni reali da Google</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {reviews.slice(0, 6).map((r, i) => (
            <div key={i} className="border rounded-xl p-6">
              <div className="flex items-center gap-3">
                {r.profile_photo_url && (
                  <Image
                    src={r.profile_photo_url}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div className="font-semibold">{r.author_name}</div>
              </div>

              <div className="text-yellow-500 mt-2">
                {"⭐".repeat(r.rating || 0)}
              </div>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black text-white">
        <h2 className="text-3xl font-semibold">Serve aiuto immediato?</h2>
        <p className="mt-3 text-gray-300">Chiavi auto, sblocco e emergenze a Milano</p>

        <div className="mt-8 flex justify-center gap-4 flex-col md:flex-row">
          <a href="tel:022402155" className="bg-white text-black px-8 py-4 rounded-full">
            Chiama ora
          </a>
          <a href="https://wa.me/39022402155" className="border border-white px-8 py-4 rounded-full">
            WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
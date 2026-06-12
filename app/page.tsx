'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => setReviews(Array.isArray(d) ? d : []))
      .catch(() => setReviews([]));
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry(2, 1, 4);
    const material = new THREE.MeshStandardMaterial({ color: 0xc9a84c });
    const car = new THREE.Mesh(geometry, material);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    scene.add(car);
    camera.position.z = 6;

    const animate = () => {
      requestAnimationFrame(animate);
      car.rotation.y += 0.003;
      renderer.render(scene, camera);
    };

    animate();

    gsap.to(car.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative">
        <canvas ref={canvasRef} className="absolute inset-0" />

        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-[#c9a84c]">GM Production</h1>
          <p className="mt-4 text-gray-300">Chiavi auto e moto a Milano</p>
        </div>
      </section>

      {/* STORY */}
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-xl text-center opacity-0" id="story">
          <h2 className="text-4xl mb-4">Hai perso le chiavi?</h2>
          <p className="text-gray-400">
            Duplicazione, codifica e sblocco veicoli con intervento immediato a Milano.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="min-h-screen py-20 px-6">
        <h2 className="text-center text-3xl mb-10">Recensioni Google</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.slice(0, 6).map((r, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl">
              <div className="flex items-center gap-3">
                {r.profile_photo_url && (
                  <Image src={r.profile_photo_url} alt="user" width={40} height={40} className="rounded-full" />
                )}
                <div className="font-semibold">{r.author_name}</div>
              </div>
              <div className="text-yellow-400 mt-2">
                {'⭐'.repeat(r.rating || 0)}
              </div>
              <p className="text-gray-300 mt-2 text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl">Serve aiuto immediato?</h2>
        <p className="text-gray-400 mt-4">Milano e provincia, attivo 24/7</p>

        <div className="mt-6 flex gap-4">
          <a className="bg-white text-black px-6 py-3 rounded-full" href="tel:022402155">Chiama</a>
          <a className="border border-white px-6 py-3 rounded-full" href="https://wa.me/39022402155">WhatsApp</a>
        </div>
      </section>

    </main>
  );
}

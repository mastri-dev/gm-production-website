"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Prodotti" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/video", label: "Video" },
    { href: "/contact", label: "Contatti" }
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="font-semibold">GM Production</div>

        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:opacity-70">
              {l.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col p-4 gap-3 border-t bg-white">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
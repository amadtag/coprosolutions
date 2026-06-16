"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_1mimw3j",
        "template_s24a987",
        form.current,
        "ZHwB2YyGJMNzEnWDq"
      )
      .then(() => {
        alert("Message envoyé !");
        form.current?.reset();
      })
      .catch(() => {
        alert("Erreur lors de l'envoi");
      });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">
            <span className="text-blue-700">COPRO</span>
            <span className="text-green-600">SOLUTIONS</span>
          </h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-slate-50 to-white">
        <h2 className="text-5xl font-bold mb-6">
          Entretien de copropriétés & bureaux
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Nettoyage professionnel • Île-de-France • Devis gratuit rapide
        </p>

        {/* CTA APPEL DIRECT */}
        <a
          href="tel:+33658876579"
          className="bg-black text-white px-6 py-3 rounded-xl font-bold mr-3"
        >
          📞 Appeler maintenant
        </a>

        <a
          href="#contact"
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
        >
          Demander un devis
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">
          Nos services
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Entretien copropriété",
            "Entretien bureaux",
            "Sortie des poubelles",
            "Remplacement gardien",
            "Travaux exceptionnels",
            "Shampoing moquette",
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-bold text-blue-700">{s}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-950 text-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">
            Contactez-nous
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white text-black p-6 rounded-2xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom"
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full border p-3 rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded font-bold"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* FIXED BUTTONS (APPEL + WHATSAPP) */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

        {/* APPEL */}
        <a
          href="tel:+33658876579"
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg font-bold text-center"
        >
          📞 Appeler
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/33658876579"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-bold text-center"
        >
          WhatsApp
        </a>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 CoproSolutions — Tous droits réservés
      </footer>
    </div>
  );
}
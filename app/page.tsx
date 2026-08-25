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
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#zones" className="hover:text-blue-700">
              Zones
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
  className="text-center py-24 px-6 text-white relative overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.72)), url('/images/immeuble-paris.jpg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Entretien de copropriétés et bureaux en Île-de-France
  </h2>

  <p className="max-w-3xl mx-auto text-white text-lg mb-8">
    CoproSolutions accompagne les syndics, conseils syndicaux et
    gestionnaires immobiliers pour l'entretien et le nettoyage des
    copropriétés, le remplacement de gardiens et l'entretien des
    immeubles de bureaux à Paris et en Île-de-France.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-3">
    ...
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Nos services pour copropriétés et immeubles
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Des prestations adaptées aux besoins des copropriétés, syndics,
          conseils syndicaux et gestionnaires immobiliers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="/entretien-copropriété-idf"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Entretien de copropriété
            </h3>
            <p className="text-gray-600">
              Nettoyage et entretien des parties communes, halls, escaliers,
              circulations et espaces communs.
            </p>
          </a>

          <a
            href="/entretien-bureau-immeuble"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Entretien de bureaux
            </h3>
            <p className="text-gray-600">
              Nettoyage et entretien régulier des immeubles et espaces de
              bureaux professionnels.
            </p>
          </a>

          <a
            href="/remplacement-gardien"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Remplacement de gardien
            </h3>
            <p className="text-gray-600">
              Solution de remplacement temporaire ou de plus longue durée
              pour assurer la continuité du service dans votre immeuble.
            </p>
          </a>

          <a
            href="/sortie-et-rentrée-poubelle"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Sortie et rentrée des poubelles
            </h3>
            <p className="text-gray-600">
              Gestion régulière de la sortie et de la rentrée des conteneurs
              de copropriété.
            </p>
          </a>

          <a
            href="/travaux-exceptionnels"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Travaux exceptionnels
            </h3>
            <p className="text-gray-600">
              Nettoyage ponctuel, entretien spécifique et interventions
              exceptionnelles dans les immeubles.
            </p>
          </a>

          <a
            href="/nettoyage-copropriete-paris"
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-700 text-lg mb-2">
              Nettoyage de copropriété à Paris
            </h3>
            <p className="text-gray-600">
              Prestations de nettoyage et d'entretien pour les copropriétés
              parisiennes.
            </p>
          </a>

        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-4">
            Nos zones d'intervention
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            CoproSolutions intervient à Paris et dans plusieurs départements
            d'Île-de-France pour l'entretien des copropriétés et des immeubles.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-center">

            <a
              href="/zones/paris-75"
              className="bg-white p-5 rounded-xl border hover:shadow-md"
            >
              <strong>Paris (75)</strong>
            </a>

            <a
              href="/zones/hauts-de-seine"
              className="bg-white p-5 rounded-xl border hover:shadow-md"
            >
              <strong>Hauts-de-Seine (92)</strong>
            </a>

            <a
              href="/zones/yvelines"
              className="bg-white p-5 rounded-xl border hover:shadow-md"
            >
              <strong>Yvelines (78)</strong>
            </a>

            <a
              href="/zones/val-de-marne"
              className="bg-white p-5 rounded-xl border hover:shadow-md"
            >
              <strong>Val-de-Marne (94)</strong>
            </a>

          </div>

          <div className="text-center mt-8">
            <a
              href="/zones"
              className="text-blue-700 font-semibold hover:underline"
            >
              Voir toutes nos zones d'intervention →
            </a>
          </div>

        </div>
      </section>

      {/* POUR QUI */}
      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Une solution pour les syndics et copropriétés
        </h2>

        <div className="text-gray-600 leading-8 space-y-4">

          <p>
            CoproSolutions accompagne les syndics de copropriété, conseils
            syndicaux et gestionnaires immobiliers dans la gestion quotidienne
            de l'entretien des immeubles.
          </p>

          <p>
            Notre objectif est de proposer une organisation fiable et
            professionnelle pour maintenir les parties communes propres,
            entretenues et accueillantes pour les résidents.
          </p>

          <p>
            Nous pouvons également intervenir lorsqu'un gardien est absent ou
            lorsqu'une copropriété recherche une solution de remplacement afin
            d'assurer la continuité du service.
          </p>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-950 text-white py-20">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Demandez votre devis
          </h2>

          <p className="text-center text-blue-100 mb-10">
            Décrivez-nous votre besoin et nous vous recontacterons rapidement.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white text-black p-6 rounded-2xl space-y-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Nom / Société"
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
              placeholder="Décrivez votre besoin : copropriété, nombre de lots, fréquence d'entretien, remplacement de gardien..."
              rows={6}
              className="w-full border p-3 rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700"
            >
              Envoyer ma demande
            </button>

          </form>

          <div className="text-center mt-8">
            <p className="mb-2">
              Vous préférez nous appeler ?
            </p>

            <a
              href="tel:+33658876579"
              className="font-bold text-lg hover:underline"
            >
              📞 06 58 87 65 79
            </a>
          </div>

        </div>
      </section>

      {/* FIXED BUTTONS */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

        <a
          href="tel:+33658876579"
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg font-bold text-center"
        >
          📞 Appeler
        </a>

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
      <footer className="text-center py-8 text-sm text-gray-500">

        <p>
          © 2026 CoproSolutions — Tous droits réservés
        </p>

        <p className="mt-2">
          Entretien de copropriétés • Nettoyage d'immeubles • Remplacement de
          gardiens • Île-de-France
        </p>

      </footer>

    </div>
  );
}
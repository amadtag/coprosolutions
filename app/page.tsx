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
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="relative overflow-hidden px-6 py-24 text-white md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.70), rgba(15,23,42,0.82)), url('/images/immeuble-paris.jpg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Décor cartoon */}
        <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-green-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-2xl">🏢</span>
            <span className="text-sm font-bold uppercase tracking-widest text-green-300">
              COPROSOLUTIONS
            </span>
            <span className="text-2xl">✨</span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight drop-shadow-lg md:text-6xl">
            Entretien de copropriétés et remplacement de gardiens en
            <span className="block text-green-300">
              Île-de-France
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour l'entretien et le nettoyage des
            copropriétés, le remplacement de gardiens et l'entretien des
            immeubles de bureaux à Paris et en Île-de-France.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+33658876579"
              className="group rounded-2xl bg-black px-7 py-4 font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-900"
            >
              <span className="mr-2 inline-block transition group-hover:rotate-12">
                📞
              </span>
              Appeler maintenant
            </a>

            <a
              href="#contact"
              className="rounded-2xl bg-green-500 px-7 py-4 font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-green-600"
            >
              💬 Demander un devis gratuit
            </a>

          </div>

          {/* Petits éléments de réassurance */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              ✓ Intervention professionnelle
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              ✓ Solutions adaptées
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              ✓ Paris & Île-de-France
            </span>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute -bottom-1 left-0 right-0 h-12 rounded-t-[50%] bg-slate-50" />
      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      >

        <div className="mb-12 text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            🧹 NOS SOLUTIONS
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Nos services pour copropriétés et immeubles
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Des prestations adaptées aux besoins des copropriétés, syndics,
            conseils syndicaux et gestionnaires immobiliers.
          </p>

        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {/* Carte 1 */}
          <a
            href="/entretien-copropriété-idf"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl transition group-hover:rotate-6">
              🧹
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Entretien de copropriété
            </h3>

            <p className="leading-7 text-gray-600">
              Nettoyage et entretien des parties communes, halls, escaliers,
              circulations et espaces communs.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>


          {/* Carte 2 */}
          <a
            href="/entretien-bureau-immeuble"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-4xl transition group-hover:rotate-6">
              🏢
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Entretien de bureaux
            </h3>

            <p className="leading-7 text-gray-600">
              Nettoyage et entretien régulier des immeubles et espaces de
              bureaux professionnels.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>


          {/* Carte 3 */}
          <a
            href="/remplacement-gardien"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl transition group-hover:rotate-6">
              👷
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Remplacement de gardien
            </h3>

            <p className="leading-7 text-gray-600">
              Solution de remplacement temporaire ou de plus longue durée
              pour assurer la continuité du service dans votre immeuble.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>


          {/* Carte 4 */}
          <a
            href="/sortie-et-rentrée-poubelle"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-4xl transition group-hover:rotate-6">
              🗑️
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Sortie et rentrée des poubelles
            </h3>

            <p className="leading-7 text-gray-600">
              Gestion régulière de la sortie et de la rentrée des conteneurs
              de copropriété.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>


          {/* Carte 5 */}
          <a
            href="/travaux-exceptionnels"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-4xl transition group-hover:rotate-6">
              🛠️
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Travaux exceptionnels
            </h3>

            <p className="leading-7 text-gray-600">
              Nettoyage ponctuel, entretien spécifique et interventions
              exceptionnelles dans les immeubles.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>


          {/* Carte 6 */}
          <a
            href="/nettoyage-copropriete-paris"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-4xl transition group-hover:rotate-6">
              🏙️
            </div>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Nettoyage de copropriété à Paris
            </h3>

            <p className="leading-7 text-gray-600">
              Prestations de nettoyage et d'entretien pour les copropriétés
              parisiennes.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>
          </a>

        </div>
      </section>


      {/* =========================
          BANDEAU CTA
      ========================= */}
      <section className="px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl bg-blue-700 px-7 py-8 text-white shadow-xl md:flex-row md:px-10">

          <div className="flex items-center gap-4">
            <div className="text-5xl">💪</div>

            <div>
              <h2 className="text-xl font-black">
                Un besoin pour votre copropriété ?
              </h2>

              <p className="mt-1 text-blue-100">
                Parlons de votre immeuble et de vos besoins.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-2xl bg-white px-6 py-3 font-black text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Demander un devis →
          </a>

        </div>
      </section>


      {/* =========================
          ZONES
      ========================= */}
      <section
        id="zones"
        className="relative overflow-hidden bg-slate-100 px-6 py-20 md:py-24"
      >

        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              📍 ÎLE-DE-FRANCE
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Nos zones d'intervention
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              CoproSolutions intervient à Paris et dans plusieurs départements
              d'Île-de-France pour l'entretien des copropriétés et des immeubles.
            </p>

          </div>


          <div className="grid gap-5 text-center md:grid-cols-2 lg:grid-cols-4">

            <a
              href="/zones/paris-75"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 text-4xl">🗼</div>

              <strong className="text-lg">
                Paris (75)
              </strong>

              <div className="mt-2 text-sm font-semibold text-blue-600 group-hover:underline">
                Voir la zone →
              </div>
            </a>


            <a
              href="/zones/hauts-de-seine"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 text-4xl">🏙️</div>

              <strong className="text-lg">
                Hauts-de-Seine (92)
              </strong>

              <div className="mt-2 text-sm font-semibold text-blue-600 group-hover:underline">
                Voir la zone →
              </div>
            </a>


            <a
              href="/zones/yvelines"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 text-4xl">🌳</div>

              <strong className="text-lg">
                Yvelines (78)
              </strong>

              <div className="mt-2 text-sm font-semibold text-blue-600 group-hover:underline">
                Voir la zone →
              </div>
            </a>


            <a
              href="/zones/val-de-marne"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 text-4xl">🏘️</div>

              <strong className="text-lg">
                Val-de-Marne (94)
              </strong>

              <div className="mt-2 text-sm font-semibold text-blue-600 group-hover:underline">
                Voir la zone →
              </div>
            </a>

          </div>


          <div className="mt-10 text-center">

            <a
              href="/zones"
              className="inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
            >
              Voir toutes nos zones d'intervention →
            </a>

          </div>

        </div>
      </section>


      {/* =========================
          POUR QUI
      ========================= */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">

        <div className="mb-10 text-center">

          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
            🤝 NOTRE ACCOMPAGNEMENT
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Une solution pour les syndics et copropriétés
          </h2>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-blue-50 p-7">
            <div className="mb-4 text-4xl">👔</div>

            <h3 className="mb-3 text-xl font-black">
              Pour les syndics
            </h3>

            <p className="leading-7 text-gray-600">
              CoproSolutions accompagne les syndics de copropriété dans la
              gestion quotidienne de l'entretien des immeubles.
            </p>
          </div>


          <div className="rounded-3xl bg-green-50 p-7">
            <div className="mb-4 text-4xl">🏠</div>

            <h3 className="mb-3 text-xl font-black">
              Pour les copropriétés
            </h3>

            <p className="leading-7 text-gray-600">
              Notre objectif est de proposer une organisation fiable et
              professionnelle pour maintenir les parties communes propres,
              entretenues et accueillantes.
            </p>
          </div>


          <div className="rounded-3xl bg-orange-50 p-7">
            <div className="mb-4 text-4xl">👷</div>

            <h3 className="mb-3 text-xl font-black">
              En cas d'absence
            </h3>

            <p className="leading-7 text-gray-600">
              Nous pouvons intervenir lorsqu'un gardien est absent afin
              d'assurer la continuité du service dans votre immeuble.
            </p>
          </div>

        </div>


        <div className="mt-8 space-y-4 text-center leading-8 text-gray-600">

          <p>
            CoproSolutions accompagne les conseils syndicaux et gestionnaires
            immobiliers dans la gestion quotidienne de l'entretien des
            immeubles.
          </p>

          <p>
            Nous pouvons également intervenir lorsqu'un gardien est absent ou
            lorsqu'une copropriété recherche une solution de remplacement afin
            d'assurer la continuité du service.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:py-24"
      >

        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-10 text-center">

            <div className="mb-4 text-5xl">
              📩
            </div>

            <h2 className="text-3xl font-black md:text-4xl">
              Demandez votre devis
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-100">
              Décrivez-nous votre besoin et nous vous recontacterons
              rapidement.
            </p>

          </div>


          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 rounded-3xl bg-white p-7 text-black shadow-2xl md:p-9"
          >

            <div>

              <label
                htmlFor="name"
                className="mb-2 block font-bold text-slate-700"
              >
                Nom / Société
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Votre nom ou société"
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

            </div>


            <div>

              <label
                htmlFor="email"
                className="mb-2 block font-bold text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="votre@email.fr"
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

            </div>


            <div>

              <label
                htmlFor="message"
                className="mb-2 block font-bold text-slate-700"
              >
                Votre besoin
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre besoin : copropriété, nombre de lots, fréquence d'entretien, remplacement de gardien..."
                rows={6}
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

            </div>


            <button
              type="submit"
              className="w-full rounded-2xl bg-green-500 py-4 font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-600"
            >
              🚀 Envoyer ma demande
            </button>

          </form>


          {/* Contact direct */}

          <div className="mt-10 text-center">

            <p className="mb-3 text-blue-100">
              Vous préférez nous appeler ?
            </p>

            <a
              href="tel:+33658876579"
              className="inline-block text-2xl font-black transition hover:text-green-300"
            >
              📞 06 58 87 65 79
            </a>

            <p className="mt-4">

              <a
                href="mailto:coprosolutions@coprosolutions.net"
                className="text-blue-200 transition hover:text-white hover:underline"
              >
                coprosolutions@coprosolutions.net
              </a>

            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BOUTONS FIXES
      ========================= */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

        <a
          href="tel:+33658876579"
          aria-label="Appeler CoproSolutions"
          className="group flex items-center gap-2 rounded-full bg-black px-5 py-3 font-black text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-slate-900"
        >
          <span className="text-xl transition group-hover:rotate-12">
            📞
          </span>

          <span className="hidden sm:inline">
            Appeler
          </span>
        </a>


        <a
          href="https://wa.me/33658876579"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter CoproSolutions sur WhatsApp"
          className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-black text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-green-600"
        >
          <span className="text-xl">
            💬
          </span>

          <span>
            WhatsApp
          </span>
        </a>

      </div>

    </main>
  );
}
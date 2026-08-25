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
      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 py-24 text-center text-white md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.72)), url('/images/immeuble-paris.jpg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-300">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Entretien de copropriétés et remplacement de gardiens en
            Île-de-France
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white md:text-xl">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour l'entretien et le nettoyage des
            copropriétés, le remplacement de gardiens et l'entretien des
            immeubles de bureaux à Paris et en Île-de-France.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white transition hover:bg-slate-900"
            >
              📞 Appeler maintenant
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">
          Nos services pour copropriétés et immeubles
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
          Des prestations adaptées aux besoins des copropriétés, syndics,
          conseils syndicaux et gestionnaires immobiliers.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/entretien-copropriété-idf"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
              Entretien de copropriété
            </h3>
            <p className="text-gray-600">
              Nettoyage et entretien des parties communes, halls, escaliers,
              circulations et espaces communs.
            </p>
          </a>

          <a
            href="/entretien-bureau-immeuble"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
              Entretien de bureaux
            </h3>
            <p className="text-gray-600">
              Nettoyage et entretien régulier des immeubles et espaces de
              bureaux professionnels.
            </p>
          </a>

          <a
            href="/remplacement-gardien"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
              Remplacement de gardien
            </h3>
            <p className="text-gray-600">
              Solution de remplacement temporaire ou de plus longue durée
              pour assurer la continuité du service dans votre immeuble.
            </p>
          </a>

          <a
            href="/sortie-et-rentrée-poubelle"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
              Sortie et rentrée des poubelles
            </h3>
            <p className="text-gray-600">
              Gestion régulière de la sortie et de la rentrée des conteneurs
              de copropriété.
            </p>
          </a>

          <a
            href="/travaux-exceptionnels"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
              Travaux exceptionnels
            </h3>
            <p className="text-gray-600">
              Nettoyage ponctuel, entretien spécifique et interventions
              exceptionnelles dans les immeubles.
            </p>
          </a>

          <a
            href="/nettoyage-copropriete-paris"
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-blue-700">
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
      <section
        id="zones"
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos zones d'intervention
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
            CoproSolutions intervient à Paris et dans plusieurs départements
            d'Île-de-France pour l'entretien des copropriétés et des immeubles.
          </p>

          <div className="grid gap-4 text-center md:grid-cols-4">
            <a
              href="/zones/paris-75"
              className="rounded-xl border bg-white p-5 transition hover:shadow-md"
            >
              <strong>Paris (75)</strong>
            </a>

            <a
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white p-5 transition hover:shadow-md"
            >
              <strong>Hauts-de-Seine (92)</strong>
            </a>

            <a
              href="/zones/yvelines"
              className="rounded-xl border bg-white p-5 transition hover:shadow-md"
            >
              <strong>Yvelines (78)</strong>
            </a>

            <a
              href="/zones/val-de-marne"
              className="rounded-xl border bg-white p-5 transition hover:shadow-md"
            >
              <strong>Val-de-Marne (94)</strong>
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/zones"
              className="font-semibold text-blue-700 hover:underline"
            >
              Voir toutes nos zones d'intervention →
            </a>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Une solution pour les syndics et copropriétés
        </h2>

        <div className="space-y-4 leading-8 text-gray-600">
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
      <section
        id="contact"
        className="bg-blue-950 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Demandez votre devis
          </h2>

          <p className="mb-10 text-center text-blue-100">
            Décrivez-nous votre besoin et nous vous recontacterons rapidement.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 rounded-2xl bg-white p-6 text-black"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom / Société"
              className="w-full rounded border p-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded border p-3"
              required
            />

            <textarea
              name="message"
              placeholder="Décrivez votre besoin : copropriété, nombre de lots, fréquence d'entretien, remplacement de gardien..."
              rows={6}
              className="w-full rounded border p-3"
              required
            />

            <button
              type="submit"
              className="w-full rounded bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Envoyer ma demande
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="mb-2">
              Vous préférez nous appeler ?
            </p>

            <a
              href="tel:+33658876579"
              className="text-lg font-bold hover:underline"
            >
              📞 06 58 87 65 79
            </a>

            <p className="mt-3">
              <a
                href="mailto:coprosolutions@coprosolutions.net"
                className="text-blue-100 hover:underline"
              >
                coprosolutions@coprosolutions.net
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* BOUTONS FIXES */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+33658876579"
          className="rounded-full bg-black px-5 py-3 text-center font-bold text-white shadow-lg"
        >
          📞 Appeler
        </a>

        <a
          href="https://wa.me/33658876579"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-5 py-3 text-center font-bold text-white shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
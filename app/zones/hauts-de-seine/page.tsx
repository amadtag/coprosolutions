import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété dans les Hauts-de-Seine (92) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés dans les Hauts-de-Seine (92) : parties communes, halls, escaliers, parkings, poubelles et immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine",
  },
};

const cities = [
  {
    name: "Boulogne-Billancourt",
    href: "/zones/boulogne-billancourt",
    description:
      "Entretien et nettoyage de copropriétés, immeubles et parties communes à Boulogne-Billancourt.",
  },
  {
    name: "Issy-les-Moulineaux",
    href: "/zones/hauts-de-seine/issy-les-moulineaux",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés et immeubles à Issy-les-Moulineaux.",
  },
  {
    name: "Levallois-Perret",
    href: "/zones/hauts-de-seine/levallois-perret",
    description:
      "Nettoyage et entretien des copropriétés, résidences et immeubles à Levallois-Perret.",
  },
  {
    name: "Nanterre",
    href: "/zones/hauts-de-seine/nanterre",
    description:
      "Solutions d'entretien et de nettoyage pour les copropriétés et immeubles à Nanterre.",
  },
  {
    name: "Neuilly-sur-Seine",
    href: "/zones/hauts-de-seine/neuilly-sur-seine",
    description:
      "Entretien des copropriétés, résidences et immeubles à Neuilly-sur-Seine.",
  },
  {
    name: "Antony",
    href: "/zones/hauts-de-seine/antony",
    description:
      "Entretien et nettoyage de copropriétés, halls et parties communes à Antony.",
  },
  {
    name: "Bagneux",
    href: "/zones/hauts-de-seine/bagneux",
    description:
      "Prestations de nettoyage et d'entretien pour les copropriétés et immeubles à Bagneux.",
  },
  {
    name: "Châtenay-Malabry",
    href: "/zones/hauts-de-seine/chatenay-malabry",
    description:
      "Entretien des parties communes et nettoyage de copropriétés à Châtenay-Malabry.",
  },
  {
    name: "Châtillon",
    href: "/zones/hauts-de-seine/chatillon",
    description:
      "Solutions d'entretien et de nettoyage pour les copropriétés à Châtillon.",
  },
  {
    name: "Clamart",
    href: "/zones/hauts-de-seine/clamart",
    description:
      "Nettoyage et entretien des copropriétés, résidences et immeubles à Clamart.",
  },
  {
    name: "Fontenay-aux-Roses",
    href: "/zones/hauts-de-seine/fontenay-aux-roses",
    description:
      "Entretien des copropriétés et nettoyage des parties communes à Fontenay-aux-Roses.",
  },
  {
    name: "Le Plessis-Robinson",
    href: "/zones/hauts-de-seine/le-plessis-robinson",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés au Plessis-Robinson.",
  },
  {
    name: "Malakoff",
    href: "/zones/hauts-de-seine/malakoff",
    description:
      "Nettoyage et entretien des copropriétés, immeubles et parties communes à Malakoff.",
  },
  {
    name: "Meudon",
    href: "/zones/hauts-de-seine/meudon",
    description:
      "Entretien des copropriétés, résidences et parties communes à Meudon.",
  },
  {
    name: "Sèvres",
    href: "/zones/hauts-de-seine/sevres",
    description:
      "Nettoyage et entretien des copropriétés et immeubles à Sèvres.",
  },
  {
    name: "Vaucresson",
    href: "/zones/hauts-de-seine/vaucresson",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés à Vaucresson.",
  },
];

export default function HautsDeSeinePage() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · HAUTS-DE-SEINE 92
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage de copropriété dans les Hauts-de-Seine (92)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour le nettoyage et l'entretien des
            copropriétés dans les Hauts-de-Seine (92). Nous intervenons pour
            l'entretien des parties communes, halls, escaliers, parkings,
            locaux poubelles et autres espaces de l'immeuble.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis
            </a>

            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 06 58 87 65 79
            </a>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Entreprise de nettoyage de copropriété dans le 92
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">

          <p>
            CoproSolutions intervient dans les Hauts-de-Seine pour le
            nettoyage et l'entretien des copropriétés, résidences et
            immeubles. Les prestations sont organisées selon la configuration
            du bâtiment, sa fréquentation et les besoins définis avec le
            syndic ou le gestionnaire immobilier.
          </p>

          <p>
            Le nettoyage des parties communes peut comprendre les halls
            d'entrée, escaliers, paliers, couloirs, ascenseurs, sols, locaux
            communs et autres espaces utilisés quotidiennement par les
            résidents et visiteurs.
          </p>

          <p>
            Les interventions peuvent être régulières, plusieurs fois par
            semaine, hebdomadaires ou ponctuelles. L'organisation est adaptée
            à la taille de la copropriété, au nombre de halls, aux surfaces à
            entretenir et aux contraintes du site.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services de nettoyage de copropriété dans le 92
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des prestations adaptées aux copropriétés, résidences,
            immeubles et bâtiments professionnels des Hauts-de-Seine.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parties communes
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des halls, escaliers, paliers, couloirs,
                ascenseurs, sols et autres espaces communs de la copropriété.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien des immeubles
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien courant des espaces communs et des zones fréquentées
                par les résidents, visiteurs et intervenants.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Organisation de la sortie et de la rentrée des conteneurs
                selon le calendrier de collecte de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parkings
              </h3>

              <p className="leading-7 text-gray-600">
                Interventions régulières ou ponctuelles dans les parkings,
                rampes, accès et autres espaces communs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des locaux professionnels
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des bureaux, locaux professionnels et immeubles
                administratifs selon les besoins du site.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardiens
              </h3>

              <p className="leading-7 text-gray-600">
                Solutions de remplacement en cas de congés, d'absence
                temporaire ou de besoin prolongé.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* PRESTATIONS COMPLEMENTAIRES */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Prestations complémentaires pour les copropriétés
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          En complément du nettoyage courant des parties communes,
          CoproSolutions peut étudier différentes interventions ponctuelles
          selon les besoins de l'immeuble.
        </p>

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage des vitres
            </h3>

            <p className="leading-7 text-gray-600">
              Interventions ponctuelles pour les vitrages accessibles des
              parties communes.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Shampoing des moquettes
            </h3>

            <p className="leading-7 text-gray-600">
              Nettoyage approfondi des moquettes et revêtements textiles des
              halls et circulations.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage après travaux
            </h3>

            <p className="leading-7 text-gray-600">
              Remise en état et nettoyage des espaces après des travaux ou
              une intervention technique.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Prestations exceptionnelles
            </h3>

            <p className="leading-7 text-gray-600">
              Interventions ponctuelles étudiées selon la nature du besoin
              et les caractéristiques du site.
            </p>
          </div>

        </div>

        <div className="mt-8">
          <a
            href="/travaux-exceptionnels"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir nos travaux et prestations exceptionnels →
          </a>
        </div>

      </section>

      {/* VILLES */}
      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-4 text-center text-3xl font-bold">
            Villes d'intervention dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            CoproSolutions intervient dans plusieurs communes des
            Hauts-de-Seine pour le nettoyage et l'entretien des copropriétés.
            Retrouvez ci-dessous nos pages locales.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {cities.map((city) => (
              <a
                key={city.href}
                href={city.href}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <h3 className="mb-3 text-xl font-bold text-blue-700">
                  Nettoyage de copropriété à {city.name}
                </h3>

                <p className="leading-7 text-gray-600">
                  {city.description}
                </p>

                <span className="mt-5 inline-block font-semibold text-blue-700">
                  Voir la page {city.name} →
                </span>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Une organisation adaptée à chaque copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">

          <p>
            Une petite copropriété n'a pas les mêmes besoins qu'un ensemble
            immobilier composé de plusieurs halls, étages et espaces communs.
          </p>

          <p>
            CoproSolutions adapte l'organisation du nettoyage aux
            caractéristiques du site, à sa fréquentation et à la fréquence
            d'intervention souhaitée.
          </p>

          <p>
            La prestation peut être organisée selon un entretien régulier,
            plusieurs passages par semaine ou des interventions ponctuelles
            lorsque la copropriété rencontre un besoin spécifique.
          </p>

        </div>
      </section>

      {/* SYNDICS */}
      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <h2 className="mb-6 text-3xl font-bold">
            Nettoyage de copropriété pour les syndics et gestionnaires
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">

            <p>
              CoproSolutions accompagne les syndics, conseils syndicaux et
              gestionnaires immobiliers dans leurs besoins de nettoyage et
              d'entretien des immeubles dans les Hauts-de-Seine.
            </p>

            <p>
              Les besoins sont étudiés en fonction de la configuration de
              l'immeuble, des prestations souhaitées, de la fréquence
              d'intervention et des contraintes d'organisation du site.
            </p>

            <p>
              L'objectif est de mettre en place un process adapté à chaque
              copropriété afin de faciliter l'organisation et le suivi des
              prestations.
            </p>

          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-8 text-3xl font-bold">
          Nos autres services
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <a
            href="/entretien-copropriété-idf"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Entretien de copropriété en Île-de-France →
          </a>

          <a
            href="/entretien-bureau-immeuble"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Nettoyage de bureaux et immeubles professionnels →
          </a>

          <a
            href="/remplacement-gardien"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Remplacement de gardien →
          </a>

          <a
            href="/sortie-et-rentrée-poubelle"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Sortie et rentrée des poubelles →
          </a>

          <a
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Travaux exceptionnels →
          </a>

          <a
            href="/services"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Voir tous nos services →
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un nettoyage de copropriété dans le 92 ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, son nombre de
            halls, sa taille, les prestations recherchées et la fréquence
            souhaitée. Nous pourrons étudier votre besoin et proposer une
            organisation adaptée.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit
            </a>

            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 06 58 87 65 79
            </a>

          </div>

          <p className="mt-6">
            <a
              href="mailto:coprosolutions@coprosolutions.net"
              className="text-blue-100 hover:underline"
            >
              coprosolutions@coprosolutions.net
            </a>
          </p>

        </div>
      </section>

    </main>
  );
}
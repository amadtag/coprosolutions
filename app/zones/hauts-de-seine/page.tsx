import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Entretien et nettoyage de copropriété dans les Hauts-de-Seine (92) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés dans les Hauts-de-Seine : halls, escaliers, parties communes, poubelles, parkings, bureaux et remplacement de gardiens.",
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
            Entretien et nettoyage de copropriété dans les Hauts-de-Seine (92)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux,
            gestionnaires immobiliers et professionnels pour l'entretien,
            le nettoyage et les services aux immeubles dans les
            Hauts-de-Seine.
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
          Une solution d'entretien pour les copropriétés du 92
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Les Hauts-de-Seine regroupent de nombreuses copropriétés,
            résidences, immeubles professionnels et bâtiments administratifs.
            Leur entretien nécessite une organisation adaptée à la taille des
            bâtiments, à leur fréquentation et aux contraintes propres à
            chaque site.
          </p>

          <p>
            CoproSolutions intervient auprès des syndics, gestionnaires
            immobiliers et conseils syndicaux pour organiser des prestations
            de nettoyage et d'entretien des parties communes dans les
            Hauts-de-Seine.
          </p>

          <p>
            Les interventions peuvent être régulières ou ponctuelles et être
            adaptées au nombre de halls, aux étages, aux surfaces, aux
            équipements et au niveau de service souhaité.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une offre adaptée aux besoins des copropriétés, résidences,
            bureaux et immeubles professionnels.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de copropriété
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des halls, escaliers, paliers, circulations,
                ascenseurs et autres espaces communs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des immeubles
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien courant des espaces communs et des zones fréquentées
                par les résidents et visiteurs.
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
                rampes et accès communs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de bureaux
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
          Des prestations complémentaires pour votre immeuble
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          En complément de l'entretien courant, nous pouvons étudier
          différentes prestations ponctuelles.
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
              Remise en état et nettoyage des espaces après des travaux ou une
              intervention technique.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Prestations exceptionnelles
            </h3>

            <p className="leading-7 text-gray-600">
              Interventions ponctuelles étudiées selon la nature du besoin et
              les caractéristiques du site.
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
            Nos villes d'intervention dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            CoproSolutions intervient dans plusieurs communes des
            Hauts-de-Seine. Retrouvez ci-dessous nos pages locales consacrées
            à chaque ville.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <a
                key={city.href}
                href={city.href}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-blue-700">
                  Entretien de copropriété à {city.name}
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
            Une copropriété de petite taille n'a pas les mêmes besoins qu'un
            ensemble immobilier composé de plusieurs halls ou de nombreux
            espaces communs.
          </p>

          <p>
            CoproSolutions adapte l'organisation des prestations aux
            caractéristiques du site, à sa fréquentation et à la fréquence
            d'intervention souhaitée.
          </p>

          <p>
            L'objectif est de proposer une organisation claire et cohérente
            avec les besoins du syndic ou du gestionnaire immobilier.
          </p>
        </div>
      </section>

      {/* SYNDICS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une solution pour les syndics et gestionnaires immobiliers
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              CoproSolutions accompagne les professionnels de l'immobilier
              dans leurs besoins d'entretien, de nettoyage et de continuité de
              service.
            </p>

            <p>
              Les besoins sont étudiés en fonction de la configuration de
              l'immeuble, des prestations souhaitées et des contraintes
              d'organisation du site.
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
            Entretien de bureaux et immeubles administratifs →
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
            Besoin d'un entretien dans les Hauts-de-Seine ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, son nombre de
            halls, sa taille, les prestations recherchées et la fréquence
            souhaitée. Nous pourrons étudier votre besoin.
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

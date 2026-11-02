import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Entreprise de nettoyage de copropriété dans le 92 | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés dans les Hauts-de-Seine (92) : halls, escaliers, parkings, poubelles et parties communes. Devis gratuit sous 24 h.",
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
            copropriétés dans les Hauts-de-Seine. Nous intervenons pour
            l'entretien des halls, escaliers, paliers, ascenseurs, parkings,
            locaux poubelles et autres parties communes des immeubles.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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

          <p className="mt-5 text-sm text-slate-300">
            Étude de votre besoin et devis gratuit sous 24 h.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entreprise de nettoyage de copropriété dans le 92
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions propose des prestations de nettoyage et d'entretien
            de copropriétés dans les Hauts-de-Seine (92). Nous accompagnons les
            syndics de copropriété, les gestionnaires immobiliers et les
            conseils syndicaux dans l'organisation de l'entretien des
            immeubles et des résidences.
          </p>

          <p>
            Le nettoyage des parties communes concerne notamment les halls
            d'entrée, escaliers, paliers, couloirs, ascenseurs, sols, locaux
            poubelles et espaces de circulation. Chaque prestation est étudiée
            en fonction de la configuration de l'immeuble et des besoins de la
            copropriété.
          </p>

          <p>
            Selon les caractéristiques du bâtiment, l'entretien peut être
            organisé plusieurs fois par semaine, une fois par semaine ou de
            manière ponctuelle. La fréquence et le contenu des interventions
            sont définis en fonction des surfaces, du nombre de bâtiments et
            des contraintes du site.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services de nettoyage et d'entretien dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des solutions d'entretien adaptées aux copropriétés, résidences,
            immeubles et bâtiments professionnels du département 92.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parties communes
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des halls d'entrée, escaliers, paliers, couloirs,
                ascenseurs, sols et espaces de circulation des résidents.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien régulier des immeubles
              </h3>
              <p className="leading-7 text-gray-600">
                Organisation de prestations d'entretien courant selon la
                fréquence souhaitée : passages hebdomadaires ou plusieurs fois
                par semaine.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>
              <p className="leading-7 text-gray-600">
                Sortie et rentrée des conteneurs en fonction des jours de
                collecte et des consignes propres à chaque résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parkings
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des parkings, rampes d'accès, circulations et autres
                espaces communs, dans le cadre d'interventions régulières ou
                ponctuelles.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage de bureaux et locaux professionnels
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien des bureaux, locaux professionnels et immeubles
                administratifs selon les besoins et les caractéristiques des
                locaux.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardiens
              </h3>
              <p className="leading-7 text-gray-600">
                Solutions de remplacement de gardiens et concierges en cas de
                congés, d'absence temporaire ou de besoin prolongé.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTRATS D'ENTRETIEN */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Contrat d'entretien de copropriété dans les Hauts-de-Seine
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Pour les copropriétés qui souhaitent organiser durablement le
            nettoyage de leur immeuble, CoproSolutions étudie les besoins
            d'entretien régulier et les prestations à prévoir au cours de
            l'année.
          </p>

          <p>
            L'organisation peut notamment comprendre le nettoyage des parties
            communes, l'entretien des halls et escaliers, la gestion des
            poubelles ainsi que des interventions complémentaires dans les
            parkings et les espaces communs.
          </p>

          <p>
            La fréquence des passages, les tâches à effectuer et les modalités
            d'intervention sont étudiées avec le syndic ou le gestionnaire afin
            de définir une prestation adaptée à chaque immeuble.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
          >
            Étudier un contrat d'entretien
          </a>
        </div>
      </section>

      {/* PRESTATIONS COMPLEMENTAIRES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Prestations complémentaires pour les copropriétés
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            En complément du nettoyage courant des parties communes,
            CoproSolutions peut étudier différentes interventions ponctuelles
            selon les besoins de l'immeuble.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-3 text-xl font-bold">Nettoyage des vitres</h3>
              <p className="leading-7 text-gray-600">
                Interventions ponctuelles pour les vitrages accessibles des
                parties communes.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-3 text-xl font-bold">
                Shampoing des moquettes
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage approfondi des moquettes et revêtements textiles des
                halls et circulations.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-3 text-xl font-bold">
                Nettoyage après travaux
              </h3>
              <p className="leading-7 text-gray-600">
                Remise en état et nettoyage des espaces après des travaux ou
                une intervention technique.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-3 text-xl font-bold">
                Entretien des espaces extérieurs
              </h3>
              <p className="leading-7 text-gray-600">
                Étude des besoins ponctuels concernant les accès, espaces
                extérieurs et surfaces communes de la résidence.
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
        </div>
      </section>

      {/* VILLES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Villes d'intervention dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            CoproSolutions intervient dans plusieurs communes des
            Hauts-de-Seine pour le nettoyage et l'entretien des copropriétés,
            résidences et immeubles professionnels. Retrouvez nos pages locales
            pour découvrir nos prestations par ville.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <a
                key={city.href}
                href={city.href}
                className="rounded-2xl bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une organisation adaptée à chaque copropriété
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Une petite copropriété n'a pas les mêmes besoins qu'un ensemble
              immobilier composé de plusieurs bâtiments, halls, étages et
              espaces communs. C'est pourquoi l'organisation de l'entretien
              doit tenir compte des caractéristiques propres à chaque site.
            </p>

            <p>
              Avant de définir une prestation, plusieurs éléments peuvent être
              étudiés : le nombre de halls, les surfaces à nettoyer, la
              fréquentation de l'immeuble, les accès, les locaux poubelles et
              les horaires d'intervention souhaités.
            </p>

            <p>
              CoproSolutions étudie ces éléments avec le syndic ou le
              gestionnaire immobilier afin de proposer un process adapté aux
              besoins de la copropriété.
            </p>
          </div>
        </div>
      </section>

      {/* SYNDICS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une solution pour les syndics et gestionnaires immobiliers du 92
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers dans leurs besoins de nettoyage et
            d'entretien des immeubles dans les Hauts-de-Seine.
          </p>

          <p>
            Vous recherchez une entreprise pour assurer l'entretien régulier
            d'une résidence, organiser la sortie des poubelles ou prévoir une
            intervention ponctuelle ? Nous étudions les caractéristiques de
            votre immeuble et les prestations souhaitées.
          </p>

          <p>
            Notre objectif est de faciliter l'organisation des interventions
            et de définir un cadre de prestation adapté aux attentes du
            gestionnaire et de la copropriété.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes sur le nettoyage de copropriété dans le 92
          </h2>

          <div className="space-y-6">
            <article>
              <h3 className="mb-2 text-xl font-bold">
                Dans quelles villes des Hauts-de-Seine intervenez-vous ?
              </h3>
              <p className="leading-7 text-gray-600">
                CoproSolutions intervient dans plusieurs communes du
                département, notamment Boulogne-Billancourt, Issy-les-Moulineaux,
                Nanterre, Antony, Levallois-Perret, Neuilly-sur-Seine et les
                autres villes présentées sur cette page.
              </p>
            </article>

            <article>
              <h3 className="mb-2 text-xl font-bold">
                Quelles parties d'un immeuble peuvent être nettoyées ?
              </h3>
              <p className="leading-7 text-gray-600">
                Les prestations peuvent concerner les halls, escaliers,
                paliers, couloirs, ascenseurs, sols, locaux poubelles, parkings
                et autres espaces communs, selon les besoins de la copropriété.
              </p>
            </article>

            <article>
              <h3 className="mb-2 text-xl font-bold">
                Proposez-vous un entretien régulier des copropriétés ?
              </h3>
              <p className="leading-7 text-gray-600">
                Oui. Les besoins peuvent être étudiés pour organiser des
                passages réguliers, plusieurs fois par semaine ou selon une
                fréquence définie avec le syndic ou le gestionnaire.
              </p>
            </article>

            <article>
              <h3 className="mb-2 text-xl font-bold">
                Peut-on demander une intervention ponctuelle ?
              </h3>
              <p className="leading-7 text-gray-600">
                Oui. Des interventions ponctuelles peuvent être étudiées pour
                le nettoyage des parkings, des vitres accessibles, des
                moquettes ou la remise en état après travaux.
              </p>
            </article>

            <article>
              <h3 className="mb-2 text-xl font-bold">
                Comment demander un devis pour une copropriété dans le 92 ?
              </h3>
              <p className="leading-7 text-gray-600">
                Vous pouvez nous transmettre la ville, le nombre de bâtiments,
                les surfaces concernées, les prestations souhaitées et la
                fréquence envisagée depuis notre page contact. Le devis est
                gratuit et votre demande est étudiée sous 24 h.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Nos autres services</h2>

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

      {/* CTA FINAL */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'une entreprise de nettoyage de copropriété dans le 92 ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Vous êtes syndic, gestionnaire immobilier ou membre d'un conseil
            syndical ? Présentez-nous votre immeuble, sa localisation, les
            prestations recherchées et la fréquence souhaitée. CoproSolutions
            étudiera votre demande afin de définir une organisation adaptée.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit sous 24 h
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
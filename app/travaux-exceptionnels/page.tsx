import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Travaux exceptionnels en copropriété et prestations ponctuelles | CoproSolutions",
  description:
    "CoproSolutions réalise des prestations ponctuelles en copropriété : nettoyage de parkings, shampoing de moquettes, nettoyage après travaux, entretien extérieur, peinture et petites interventions à Paris et en Île-de-France.",
  alternates: {
    canonical: "/travaux-exceptionnels",
  },
};

export default function TravauxExceptionnels() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Travaux exceptionnels et prestations ponctuelles en copropriété
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Des interventions complémentaires pour répondre aux besoins
            ponctuels des copropriétés, immeubles et résidences à Paris et en
            Île-de-France.
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
          Des interventions complémentaires à l'entretien courant
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'entretien quotidien d'une copropriété ne suffit pas toujours à
            répondre à certains besoins ponctuels. Un parking peut nécessiter
            un nettoyage approfondi, une moquette peut avoir besoin d'un
            shampoing ou des parties communes peuvent nécessiter une remise en
            état après des travaux.
          </p>

          <p>
            CoproSolutions propose des prestations exceptionnelles et
            ponctuelles pouvant être organisées en complément de l'entretien
            régulier de votre immeuble.
          </p>

          <p>
            Chaque intervention est étudiée selon les caractéristiques du site,
            la nature du besoin et les contraintes de la copropriété.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations exceptionnelles
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des interventions ponctuelles pour compléter l'entretien habituel
            de vos immeubles.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Shampoing et nettoyage des moquettes
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage approfondi des moquettes et revêtements textiles
                présents dans les halls, circulations ou espaces communs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage de parkings
              </h3>

              <p className="leading-7 text-gray-600">
                Interventions ponctuelles pour nettoyer les parkings, accès,
                rampes et zones de circulation des résidences.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage après travaux
              </h3>

              <p className="leading-7 text-gray-600">
                Remise en état et nettoyage des espaces concernés après une
                intervention technique, des travaux ou un chantier.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien extérieur ponctuel
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien simple des abords de la résidence et interventions
                ponctuelles sur les espaces extérieurs selon les besoins.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Peinture et remise en état
              </h3>

              <p className="leading-7 text-gray-600">
                Petites opérations de peinture et de remise en état sur
                certaines surfaces ou espaces communs, selon les
                caractéristiques du chantier.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Petites interventions d'entretien
              </h3>

              <p className="leading-7 text-gray-600">
                Certaines petites interventions d'entretien peuvent être
                étudiées en complément des prestations régulières.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EXEMPLES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Quand prévoir une prestation exceptionnelle ?
        </h2>

        <div className="space-y-4 text-lg leading-8 text-gray-600">
          <p>
            Ces interventions peuvent être programmées avant ou après une
            période particulière, à la suite de travaux, lorsqu'une remise en
            état est nécessaire ou lorsque le syndic souhaite compléter
            l'entretien courant.
          </p>

          <p>
            Elles peuvent également être organisées pour traiter une zone
            précise de l'immeuble sans modifier l'organisation habituelle du
            nettoyage.
          </p>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une intervention adaptée à votre immeuble
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Identification du besoin
              </h3>

              <p className="leading-7 text-gray-600">
                Nous étudions la nature de l'intervention et les
                caractéristiques du site afin de comprendre précisément le
                besoin.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Organisation de l'intervention
              </h3>

              <p className="leading-7 text-gray-600">
                La prestation est planifiée selon les contraintes de la
                copropriété et les conditions nécessaires à sa réalisation.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Suivi du besoin
              </h3>

              <p className="leading-7 text-gray-600">
                Les modalités sont définies avec le syndic ou le gestionnaire
                afin de conserver une organisation claire.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Pour quels immeubles ?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Copropriétés résidentielles
            </h3>

            <p className="leading-7 text-gray-600">
              Les prestations peuvent être réalisées dans les résidences et
              immeubles d'habitation selon les besoins identifiés par le syndic.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Immeubles professionnels
            </h3>

            <p className="leading-7 text-gray-600">
              Certaines interventions ponctuelles peuvent également être
              étudiées pour les bureaux et immeubles administratifs.
            </p>
          </article>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Nos autres services
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/services"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Voir tous nos services →
            </a>

            <a
              href="/entretien-copropriété-idf"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Entretien de copropriété en Île-de-France →
            </a>

            <a
              href="/nettoyage-copropriete-paris"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Nettoyage de copropriétés à Paris →
            </a>

            <a
              href="/entretien-bureau-immeuble"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Entretien de bureaux et immeubles administratifs →
            </a>

            <a
              href="/remplacement-gardien"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Remplacement de gardien →
            </a>

            <a
              href="/sortie-et-rentrée-poubelle"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Sortie et rentrée des poubelles →
            </a>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Travaux exceptionnels en Île-de-France
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          CoproSolutions intervient principalement à Paris et en
          Île-de-France, notamment dans les Hauts-de-Seine, les Yvelines et le
          Val-de-Marne.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/zones/paris-75"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Paris
          </a>

          <a
            href="/zones/hauts-de-seine"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Hauts-de-Seine
          </a>

          <a
            href="/zones/yvelines"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Yvelines
          </a>

          <a
            href="/zones/val-de-marne"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Val-de-Marne
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'une prestation ponctuelle ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Décrivez-nous votre besoin, la nature de l'intervention et les
            caractéristiques de votre immeuble. Nous pourrons étudier votre
            demande et vous proposer une solution adaptée.
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
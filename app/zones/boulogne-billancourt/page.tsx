import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Boulogne-Billancourt (92) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Boulogne-Billancourt : halls, escaliers, parties communes, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/boulogne-billancourt",
  },
};

export default function BoulogneBillancourtPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · BOULOGNE-BILLANCOURT 92100
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage et entretien de copropriété à Boulogne-Billancourt
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour l'entretien, le nettoyage des
            parties communes et les services aux immeubles à
            Boulogne-Billancourt.
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

      {/* INTRODUCTION LOCALE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien de copropriété à Boulogne-Billancourt
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Boulogne-Billancourt compte de nombreuses copropriétés, résidences
            et immeubles nécessitant un entretien régulier des parties
            communes. CoproSolutions accompagne les professionnels de
            l'immobilier et les copropriétés dans l'organisation de ces
            prestations.
          </p>

          <p>
            Nous pouvons intervenir pour le nettoyage des halls, escaliers,
            paliers, ascenseurs, locaux poubelles, circulations et autres
            espaces communs de votre résidence.
          </p>

          <p>
            Les prestations sont adaptées à la configuration de chaque
            immeuble, à sa fréquentation, au nombre de halls et à la fréquence
            d'entretien souhaitée.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations à Boulogne-Billancourt
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une organisation adaptée aux besoins des copropriétés,
            résidences et immeubles professionnels.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des halls
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien des entrées, sols, portes, surfaces accessibles et
                espaces d'accueil des résidents.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers et paliers
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des escaliers, paliers et circulations communes
                selon la fréquence définie pour la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Ascenseurs
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien courant des cabines et des espaces accessibles autour
                des ascenseurs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Locaux poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage et entretien des locaux réservés aux conteneurs et
                des espaces associés.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Parkings et accès
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage ponctuel ou régulier des parkings, rampes et accès
                communs selon les besoins du site.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des vitres
              </h3>

              <p className="leading-7 text-gray-600">
                Des interventions ponctuelles peuvent être organisées pour
                l'entretien des vitrages accessibles.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUBELLES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Sortie et rentrée des poubelles à Boulogne-Billancourt
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          La gestion des conteneurs peut être intégrée à l'organisation
          d'entretien de la copropriété. CoproSolutions peut assurer la sortie
          et la rentrée des poubelles selon les jours de collecte et les
          consignes définies pour votre résidence.
        </p>

        <a
          href="/sortie-et-rentrée-poubelle"
          className="font-semibold text-blue-700 hover:underline"
        >
          Découvrir notre service de sortie et rentrée des poubelles →
        </a>
      </section>

      {/* REMPLACEMENT GARDIEN */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Remplacement de gardien à Boulogne-Billancourt
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            En cas de congés, d'absence temporaire ou de besoin de continuité
            du service, CoproSolutions peut étudier une solution de
            remplacement pour votre copropriété.
          </p>

          <a
            href="/remplacement-gardien"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir le service de remplacement de gardien →
          </a>
        </div>
      </section>

      {/* BUREAUX */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien de bureaux et immeubles professionnels
          à Boulogne-Billancourt
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          CoproSolutions propose également des prestations d'entretien pour
          les bureaux, locaux professionnels et immeubles administratifs à
          Boulogne-Billancourt. Les interventions peuvent être régulières ou
          ponctuelles selon la configuration et l'utilisation des locaux.
        </p>

        <a
          href="/entretien-bureau-immeuble"
          className="font-semibold text-blue-700 hover:underline"
        >
          Découvrir l'entretien de bureaux et immeubles administratifs →
        </a>
      </section>

      {/* ORGANISATION */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une organisation adaptée à chaque copropriété
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Petites copropriétés
              </h3>

              <p className="leading-7 text-gray-600">
                Des prestations proportionnées au nombre de lots, aux surfaces
                et aux besoins réels de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Copropriétés intermédiaires
              </h3>

              <p className="leading-7 text-gray-600">
                Une organisation régulière tenant compte du nombre de halls,
                des étages et de la fréquentation des parties communes.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Grandes résidences
              </h3>

              <p className="leading-7 text-gray-600">
                Une organisation pouvant être adaptée aux surfaces, aux accès
                et aux différentes zones de l'immeuble.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUR LES SYNDICS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une solution pour les syndics et gestionnaires immobiliers
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers qui souhaitent mettre en place ou
            compléter une organisation d'entretien à Boulogne-Billancourt.
          </p>

          <p>
            Les modalités d'intervention sont étudiées selon les
            caractéristiques de l'immeuble et les prestations recherchées.
          </p>

          <p>
            L'objectif est de proposer une organisation claire et adaptée au
            fonctionnement de chaque résidence.
          </p>
        </div>
      </section>

      {/* SECTEURS PROCHES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Secteurs proches de Boulogne-Billancourt
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            CoproSolutions intervient également dans plusieurs secteurs
            proches de Boulogne-Billancourt.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Hauts-de-Seine
            </a>

            <a
              href="/zones/hauts-de-seine/issy-les-moulineaux"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Issy-les-Moulineaux
            </a>

            <a
              href="/zones/paris-15"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Paris 15e
            </a>

            <a
              href="/zones/paris-75"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Paris
            </a>
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Les autres services de CoproSolutions
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
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Travaux et prestations exceptionnels →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un entretien de copropriété à Boulogne-Billancourt ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, le nombre de
            lots, le nombre de halls, la fréquence souhaitée et les prestations
            recherchées. Nous pourrons étudier votre besoin.
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
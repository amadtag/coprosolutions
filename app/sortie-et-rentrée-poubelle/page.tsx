import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sortie et rentrée des poubelles en copropriété | CoproSolutions",
  description:
    "CoproSolutions assure la sortie et la rentrée des poubelles des copropriétés et immeubles à Paris et en Île-de-France, selon les jours et horaires de collecte.",
  alternates: {
    canonical: "/sortie-et-rentrée-poubelle",
  },
};

export default function SortieRentreePoubelle() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Sortie et rentrée des poubelles en copropriété
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Une prestation dédiée à la sortie et à la rentrée des conteneurs
            des copropriétés et immeubles à Paris et en Île-de-France.
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
          Une gestion organisée des conteneurs de votre immeuble
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            La sortie et la rentrée des poubelles font partie des tâches
            récurrentes à organiser dans une copropriété. Lorsque personne
            n'est disponible sur place, cette organisation peut devenir une
            contrainte pour le syndic ou les résidents.
          </p>

          <p>
            CoproSolutions propose une prestation permettant d'assurer la
            sortie des conteneurs avant la collecte puis leur rentrée après le
            passage du service de collecte, selon les jours et horaires
            prévus.
          </p>

          <p>
            Le service peut être intégré à l'entretien régulier de la
            copropriété ou être étudié comme une prestation distincte selon
            les besoins de la résidence.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations de gestion des poubelles
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une organisation adaptée aux jours de collecte et au
            fonctionnement de votre copropriété.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie des conteneurs
              </h3>

              <p className="leading-7 text-gray-600">
                Les conteneurs sont sortis avant la collecte selon le calendrier
                et les consignes définis pour la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Rentrée après collecte
              </h3>

              <p className="leading-7 text-gray-600">
                Après le passage de la collecte, les conteneurs peuvent être
                rentrés et repositionnés dans l'espace prévu à cet effet.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Organisation selon le calendrier
              </h3>

              <p className="leading-7 text-gray-600">
                Les interventions sont organisées en fonction des jours de
                collecte et des informations communiquées pour l'immeuble.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Adaptation au site
              </h3>

              <p className="leading-7 text-gray-600">
                L'organisation peut tenir compte du nombre de conteneurs, de
                leur emplacement et de la configuration des accès.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Intégration à l'entretien
              </h3>

              <p className="leading-7 text-gray-600">
                La gestion des poubelles peut être proposée en complément d'un
                contrat d'entretien des parties communes.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Besoin ponctuel
              </h3>

              <p className="leading-7 text-gray-600">
                Une demande ponctuelle peut également être étudiée lorsqu'un
                besoin particulier se présente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Pourquoi externaliser la sortie et la rentrée des poubelles ?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Faciliter l'organisation du syndic
            </h3>

            <p className="leading-7 text-gray-600">
              La gestion des conteneurs peut être confiée à un intervenant
              afin de simplifier l'organisation quotidienne de la résidence.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Assurer une présence régulière
            </h3>

            <p className="leading-7 text-gray-600">
              Le service permet de prévoir une intervention en fonction du
              calendrier de collecte de la copropriété.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Limiter les contraintes pour les résidents
            </h3>

            <p className="leading-7 text-gray-600">
              Les résidents et membres du conseil syndical n'ont pas à
              organiser eux-mêmes la sortie et la rentrée des conteneurs.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Une prestation complémentaire
            </h3>

            <p className="leading-7 text-gray-600">
              La gestion des poubelles peut être intégrée à une prestation plus
              large d'entretien et de nettoyage de la copropriété.
            </p>
          </article>
        </div>
      </section>

      {/* COPROPRIETES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Pour quels immeubles ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Cette prestation peut être étudiée pour différents types de
            résidences et configurations d'immeubles.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5 font-medium">
              Copropriétés résidentielles
            </div>

            <div className="rounded-xl border bg-white p-5 font-medium">
              Immeubles avec local poubelles
            </div>

            <div className="rounded-xl border bg-white p-5 font-medium">
              Résidences sans gardien disponible
            </div>

            <div className="rounded-xl border bg-white p-5 font-medium">
              Immeubles avec plusieurs types de conteneurs
            </div>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une organisation définie avec le syndic
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Pour organiser correctement la prestation, nous prenons en compte
            notamment les jours de collecte, l'emplacement des conteneurs,
            l'accès au local poubelles et les particularités de la résidence.
          </p>

          <p>
            Les modalités d'intervention sont définies en fonction des
            informations communiquées par le syndic ou le gestionnaire.
          </p>

          <p>
            Lorsque la sortie et la rentrée des poubelles font partie d'un
            contrat d'entretien plus large, l'organisation peut être intégrée
            au planning général de la copropriété.
          </p>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Nos autres services pour les copropriétés
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
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
              href="/remplacement-gardien"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Remplacement de gardien →
            </a>

            <a
              href="/travaux-exceptionnels"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Travaux et prestations exceptionnels →
            </a>

            <a
              href="/entretien-bureau-immeuble"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Entretien de bureaux et immeubles administratifs →
            </a>

            <a
              href="/services"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Voir tous nos services →
            </a>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Sortie et rentrée des poubelles en Île-de-France
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
            Besoin d'une prestation pour votre copropriété ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, les jours de
            collecte et les caractéristiques de votre résidence. Nous pourrons
            étudier votre besoin et vous proposer une organisation adaptée.
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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Remplacement de gardien d’immeuble en Île-de-France | CoproSolutions",
  description:
    "CoproSolutions propose le remplacement de gardien d’immeuble pour copropriétés et résidences : congés, absences temporaires ou besoins plus longs à Paris et en Île-de-France.",
  alternates: {
    canonical: "/remplacement-gardien",
  },
};

export default function RemplacementGardien() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Remplacement de gardien d’immeuble en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Une solution de remplacement pour assurer la continuité du service
            dans les copropriétés et résidences en cas d’absence, de congés ou
            de besoin temporaire ou prolongé.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un remplacement
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
          Assurer la continuité du service dans votre immeuble
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L’absence d’un gardien ou d’un employé d’immeuble peut rapidement
            perturber l’organisation quotidienne d’une copropriété. Sortie des
            poubelles, entretien des parties communes, présence sur site et
            respect des consignes habituelles doivent pouvoir continuer dans
            de bonnes conditions.
          </p>

          <p>
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers dans la recherche d’une solution de
            remplacement adaptée aux besoins de la résidence.
          </p>

          <p>
            Le remplacement peut être envisagé pour une période ponctuelle,
            pendant des congés ou pour une absence temporaire plus longue,
            selon les besoins et l’organisation de la copropriété.
          </p>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Dans quelles situations prévoir un remplacement ?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une solution de remplacement peut être étudiée pour différentes
            situations rencontrées dans la vie d’une copropriété.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Congés du gardien
              </h3>
              <p className="leading-7 text-gray-600">
                Prévoir une présence pendant les périodes de congés afin de
                maintenir les tâches habituelles de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Absence temporaire
              </h3>
              <p className="leading-7 text-gray-600">
                Une solution peut être organisée lorsqu’un gardien ou employé
                d’immeuble est momentanément absent.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Besoin de transition
              </h3>
              <p className="leading-7 text-gray-600">
                Un remplacement peut également être envisagé pendant une
                période de transition ou lors de la recherche d’une solution
                durable.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Arrêt ou indisponibilité
              </h3>
              <p className="leading-7 text-gray-600">
                En cas d’indisponibilité imprévue, nous pouvons étudier les
                besoins de la copropriété et les conditions d’un remplacement.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement ponctuel
              </h3>
              <p className="leading-7 text-gray-600">
                Une intervention limitée dans le temps peut répondre à un
                besoin précis défini avec le syndic ou le gestionnaire.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement plus long
              </h3>
              <p className="leading-7 text-gray-600">
                Lorsque la durée d’absence est plus importante, une
                organisation spécifique peut être étudiée.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Quelles missions peuvent être assurées ?
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Les missions sont définies en fonction des consignes de la
          copropriété, du poste à remplacer et de l’organisation habituelle
          de la résidence.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien des parties communes
            </h3>
            <p className="leading-7 text-gray-600">
              Participation à l’entretien courant des espaces communs selon
              les missions prévues pour le poste.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Sortie et rentrée des poubelles
            </h3>
            <p className="leading-7 text-gray-600">
              Gestion des conteneurs selon les jours de collecte et les
              consignes définies par la copropriété.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Présence sur site
            </h3>
            <p className="leading-7 text-gray-600">
              Maintien d’une présence correspondant aux horaires et missions
              prévus dans l’organisation du poste.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Information des résidents
            </h3>
            <p className="leading-7 text-gray-600">
              Accueil et transmission des informations dans le cadre des
              missions définies par la copropriété.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien courant des espaces
            </h3>
            <p className="leading-7 text-gray-600">
              Réalisation des tâches d’entretien prévues dans les consignes
              habituelles du poste.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Respect des consignes de la résidence
            </h3>
            <p className="leading-7 text-gray-600">
              Adaptation de l’intervention au fonctionnement et aux
              instructions communiquées par le syndic ou le gestionnaire.
            </p>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            À qui s’adresse ce service ?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Syndics de copropriété
              </h3>
              <p className="leading-7 text-gray-600">
                Une solution pour répondre rapidement à une absence et
                maintenir l’organisation habituelle de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Gestionnaires immobiliers
              </h3>
              <p className="leading-7 text-gray-600">
                Un accompagnement pour les besoins de remplacement identifiés
                sur les immeubles gérés.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Conseils syndicaux
              </h3>
              <p className="leading-7 text-gray-600">
                Une possibilité d’étudier une solution de continuité avec le
                syndic ou le gestionnaire de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Résidences et immeubles
              </h3>
              <p className="leading-7 text-gray-600">
                Une organisation pouvant être adaptée à différents types de
                copropriétés et de configurations d’immeubles.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une solution adaptée à votre immeuble
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Chaque remplacement est différent. Les missions, les horaires et
            la durée d’intervention dépendent notamment de la configuration de
            l’immeuble et des tâches habituellement réalisées par le gardien.
          </p>

          <p>
            Nous étudions les informations transmises par le syndic ou le
            gestionnaire afin de comprendre le besoin et de déterminer les
            conditions d’intervention les plus adaptées.
          </p>

          <p>
            L’objectif est de permettre à la copropriété de maintenir une
            organisation cohérente pendant toute la période de remplacement.
          </p>
        </div>
      </section>

      {/* LIENS SERVICES */}
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
              href="/entretien-bureau-immeuble"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Entretien de bureaux et immeubles professionnels →
            </a>

            <a
              href="/sortie-et-rentrée-poubelle"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Sortie et rentrée des poubelles →
            </a>

            <a
              href="/travaux-exceptionnels"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Travaux et prestations exceptionnels →
            </a>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Remplacement de gardien en Île-de-France
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
            Besoin d’un remplacement de gardien ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Communiquez-nous les informations concernant votre immeuble,
            l’absence prévue et les missions à assurer. Nous pourrons étudier
            votre besoin et vous proposer une solution adaptée.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un remplacement
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
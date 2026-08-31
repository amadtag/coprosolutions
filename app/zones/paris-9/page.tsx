import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Entretien, remplacement et recrutement de gardien à Paris 9e | CoproSolutions",
  description:
    "CoproSolutions accompagne les syndics et copropriétés du 9e arrondissement de Paris pour l'entretien des immeubles, le remplacement de gardiens et la recherche de gardiens d'immeuble.",
  alternates: {
    canonical: "/zones/paris-9",
  },
};

export default function Paris9Page() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · PARIS 9E
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Entretien, remplacement et recrutement de gardien à Paris 9e
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et copropriétés du 9e arrondissement de Paris pour l'entretien des
            immeubles, le remplacement de gardiens et la recherche de profils
            adaptés aux besoins des résidences.
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
          Des services adaptés aux copropriétés du 9e arrondissement
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions intervient auprès des syndics, gestionnaires
            immobiliers et conseils syndicaux pour répondre aux besoins
            d'entretien et de gestion quotidienne des copropriétés à Paris 9e.
          </p>

          <p>
            Nos prestations peuvent être adaptées à la taille de la résidence,
            au nombre de bâtiments, aux parties communes et à l'organisation
            souhaitée par la copropriété.
          </p>

          <p>
            Notre accompagnement couvre trois besoins complémentaires :
            l'entretien de copropriété, le remplacement de gardien et la
            recherche de gardiens d'immeuble.
          </p>
        </div>
      </section>

      {/* 3 SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Nos services à Paris 9e
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ENTRETIEN */}
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-blue-700">
                Entretien de copropriété
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Entretien régulier des parties communes et nettoyage des
                immeubles selon les besoins de chaque copropriété.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Halls et entrées</li>
                <li>• Escaliers et paliers</li>
                <li>• Ascenseurs</li>
                <li>• Locaux poubelles</li>
                <li>• Sortie et rentrée des containers</li>
                <li>• Parkings et espaces communs</li>
                <li>• Nettoyage des vitres</li>
                <li>• Interventions ponctuelles</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/nettoyage-copropriete-paris"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Voir le service d'entretien →
                </a>
              </div>
            </article>

            {/* REMPLACEMENT */}
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-blue-700">
                Remplacement de gardien
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Solution de remplacement pour assurer la continuité du service
                lorsqu'un gardien ou employé d'immeuble est absent.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Absence temporaire</li>
                <li>• Congés</li>
                <li>• Arrêt prolongé</li>
                <li>• Période de transition</li>
                <li>• Remplacement ponctuel</li>
                <li>• Besoin de plus longue durée</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/remplacement-gardien"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Voir le service de remplacement →
                </a>
              </div>
            </article>

            {/* RECRUTEMENT */}
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-blue-700">
                Recrutement de gardien
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Accompagnement des syndics et gestionnaires dans la recherche
                et la mise en relation avec des profils adaptés à leur
                copropriété.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Recherche de profils</li>
                <li>• Analyse du besoin</li>
                <li>• Mise en relation</li>
                <li>• Recherche selon les missions</li>
                <li>• Besoins durables</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/recrutement-gardien"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Voir le service de recrutement →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ENTRETIEN */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien des copropriétés à Paris 9e
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'entretien régulier des parties communes contribue à maintenir
            les immeubles propres et agréables pour les occupants et visiteurs.
          </p>

          <p>
            CoproSolutions peut intervenir sur les halls, escaliers, paliers,
            ascenseurs, locaux poubelles, parkings et autres espaces communs de
            la copropriété.
          </p>

          <p>
            La fréquence des interventions est définie selon les
            caractéristiques de la résidence et les besoins du syndic.
          </p>
        </div>
      </section>

      {/* GARDIEN */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Remplacement et recrutement de gardiens à Paris 9e
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Lorsqu'un gardien est absent, la continuité des services de la
              résidence peut nécessiter une solution de remplacement adaptée.
            </p>

            <p>
              Pour un besoin durable, CoproSolutions accompagne également les
              syndics et gestionnaires dans leur recherche de gardien et dans
              la mise en relation avec des profils correspondant aux besoins
              de la copropriété.
            </p>

            <p>
              Les missions et critères de recherche sont étudiés en fonction
              de l'organisation et des caractéristiques de chaque résidence.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/remplacement-gardien"
              className="font-semibold text-blue-700 hover:underline"
            >
              Remplacement de gardien →
            </a>

            <a
              href="/recrutement-gardien"
              className="font-semibold text-blue-700 hover:underline"
            >
              Recrutement de gardien →
            </a>
          </div>
        </div>
      </section>

      {/* PARIS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          CoproSolutions intervient à Paris
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          Le 9e arrondissement fait partie du secteur d'intervention de
          CoproSolutions à Paris. Nous accompagnons les syndics et
          gestionnaires immobiliers pour leurs besoins d'entretien, de
          remplacement et de recherche de gardiens.
        </p>

        <a
          href="/zones/paris-75"
          className="font-semibold text-blue-700 hover:underline"
        >
          Voir tous nos services à Paris →
        </a>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Un besoin pour votre copropriété à Paris 9e ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Contactez CoproSolutions pour nous présenter votre copropriété et
            vos besoins en entretien, remplacement ou recrutement de gardien.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nettoyage de copropriétés à Paris (75) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien de copropriétés à Paris : halls, escaliers, paliers, ascenseurs, locaux poubelles, parkings et parties communes.",
  alternates: {
    canonical: "/nettoyage-copropriete-paris",
  },
};

export default function NettoyageCoproprieteParis() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage de copropriétés à Paris (75)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour le nettoyage et l'entretien des
            copropriétés, immeubles et parties communes à Paris.
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
          Entretien des copropriétés parisiennes
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'entretien régulier d'une copropriété contribue à préserver la
            propreté des espaces communs et l'image de la résidence auprès des
            occupants, visiteurs et copropriétaires.
          </p>

          <p>
            CoproSolutions intervient à Paris pour assurer des prestations de
            nettoyage adaptées aux caractéristiques de chaque immeuble :
            nombre de halls, étages, circulations, équipements, fréquence de
            passage et besoins spécifiques.
          </p>

          <p>
            Nous travaillons avec les syndics, gestionnaires immobiliers et
            conseils syndicaux qui souhaitent mettre en place une organisation
            régulière ou compléter un dispositif d'entretien déjà existant.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations de nettoyage à Paris
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une organisation adaptable aux besoins et aux contraintes de votre
            copropriété.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Halls d'immeubles
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des entrées, sols, portes, surfaces accessibles et
                espaces d'accueil des résidents.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers et paliers
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien des escaliers, paliers et circulations communes afin
                de maintenir les parties communes propres.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Ascenseurs
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage courant des cabines et des espaces accessibles autour
                des ascenseurs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Locaux poubelles
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des locaux dédiés aux conteneurs et entretien des
                espaces concernés.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Parkings et accès
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des parkings, accès communs et zones de circulation
                selon les besoins de la résidence.
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

      {/* FREQUENCE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une fréquence adaptée à votre copropriété
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          La fréquence d'entretien dépend notamment de la taille de
          l'immeuble, du nombre de halls, de la fréquentation des parties
          communes et du niveau de service recherché.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien régulier
            </h3>
            <p className="leading-7 text-gray-600">
              Pour maintenir quotidiennement ou plusieurs fois par semaine les
              parties communes propres et accueillantes.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien périodique
            </h3>
            <p className="leading-7 text-gray-600">
              Une organisation adaptée aux immeubles ayant des besoins moins
              fréquents ou à une prestation complémentaire.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Intervention ponctuelle
            </h3>
            <p className="leading-7 text-gray-600">
              Pour une remise en état, un nettoyage approfondi ou un besoin
              spécifique.
            </p>
          </article>
        </div>
      </section>

      {/* BESOINS SPECIFIQUES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Des prestations complémentaires
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            En complément du nettoyage courant, nous pouvons étudier différents
            besoins spécifiques pour votre immeuble.
          </p>

          <ul className="grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border bg-white p-5">
              Nettoyage approfondi des parties communes
            </li>
            <li className="rounded-xl border bg-white p-5">
              Shampoing et nettoyage des moquettes
            </li>
            <li className="rounded-xl border bg-white p-5">
              Nettoyage des parkings
            </li>
            <li className="rounded-xl border bg-white p-5">
              Nettoyage après travaux
            </li>
            <li className="rounded-xl border bg-white p-5">
              Sortie et rentrée des poubelles
            </li>
            <li className="rounded-xl border bg-white p-5">
              Prestations exceptionnelles
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="/sortie-et-rentrée-poubelle"
              className="font-semibold text-blue-700 hover:underline"
            >
              Voir le service poubelles →
            </a>

            <a
              href="/travaux-exceptionnels"
              className="font-semibold text-blue-700 hover:underline"
            >
              Voir les travaux exceptionnels →
            </a>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Pour les syndics et gestionnaires immobiliers
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Nos prestations s'adressent notamment aux syndics de copropriété,
            gestionnaires immobiliers et conseils syndicaux qui recherchent une
            organisation claire pour l'entretien d'un immeuble parisien.
          </p>

          <p>
            Nous pouvons étudier les caractéristiques de la résidence afin de
            définir les prestations nécessaires et la fréquence d'intervention
            adaptée.
          </p>
        </div>
      </section>

      {/* LIENS VERS AUTRES SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Nos autres services
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
              Entretien de bureaux et immeubles administratifs →
            </a>

            <a
              href="/remplacement-gardien"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Remplacement de gardien →
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

      {/* ZONES PARIS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Nettoyage de copropriétés dans Paris et ses arrondissements
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          CoproSolutions intervient dans différents secteurs de Paris pour
          l'entretien et le nettoyage des copropriétés et immeubles.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-slate-50 p-5">
            Paris 15e
          </div>

          <div className="rounded-xl border bg-slate-50 p-5">
            Paris et alentours
          </div>

          <div className="rounded-xl border bg-slate-50 p-5">
            Immeubles résidentiels
          </div>

          <div className="rounded-xl border bg-slate-50 p-5">
            Copropriétés et résidences
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/zones/paris-75"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir notre zone d'intervention Paris (75) →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un devis pour votre copropriété à Paris ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Communiquez-nous le nombre de lots, le nombre de halls, les
            caractéristiques de votre immeuble et la fréquence souhaitée.
            Nous pourrons étudier votre besoin et vous proposer une solution
            adaptée.
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
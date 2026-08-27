import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Issy-les-Moulineaux (92130) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Issy-les-Moulineaux : halls, escaliers, parties communes, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/issy-les-moulineaux",
  },
};

export default function IssyLesMoulineauxPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · ISSY-LES-MOULINEAUX 92130
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage et entretien de copropriété à Issy-les-Moulineaux
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour l'entretien, le nettoyage des
            parties communes et les services aux immeubles à
            Issy-les-Moulineaux.
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
          Entretien de copropriété à Issy-les-Moulineaux
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Issy-les-Moulineaux est une commune particulièrement dynamique,
            avec de nombreuses résidences, copropriétés et immeubles
            professionnels. L'entretien des parties communes nécessite une
            organisation adaptée à chaque bâtiment.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour organiser le nettoyage régulier des
            halls, escaliers, paliers, ascenseurs, locaux poubelles et autres
            espaces communs.
          </p>

          <p>
            Les prestations peuvent être adaptées à la taille de la résidence,
            au nombre de halls, aux surfaces, à la fréquentation des espaces
            communs et à la fréquence de passage souhaitée.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations à Issy-les-Moulineaux
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des prestations d'entretien et de nettoyage adaptées aux besoins
            de chaque copropriété et immeuble.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Halls et entrées
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des sols, portes, surfaces accessibles et espaces
                d'accueil des résidents et visiteurs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers et paliers
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien des escaliers, paliers et circulations communes
                selon le planning défini pour la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Ascenseurs
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage courant des cabines et des zones accessibles autour
                des ascenseurs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Locaux poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien des locaux de collecte et des espaces réservés aux
                conteneurs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Parkings et accès
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des parkings, rampes, accès et autres zones
                communes selon les besoins du site.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des vitres
              </h3>

              <p className="leading-7 text-gray-600">
                Des interventions ponctuelles peuvent être organisées pour les
                vitrages accessibles des parties communes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* POUBELLES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Sortie et rentrée des poubelles à Issy-les-Moulineaux
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          La sortie et la rentrée des conteneurs peuvent être intégrées à
          l'organisation d'entretien de votre copropriété. La prestation est
          organisée selon les jours de collecte et les consignes définies pour
          la résidence.
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
            Remplacement de gardien à Issy-les-Moulineaux
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            En cas de congés, d'absence temporaire ou de besoin de continuité
            du service, CoproSolutions peut étudier une solution de
            remplacement adaptée au fonctionnement de votre résidence.
          </p>

          <a
            href="/remplacement-gardien"
            className="font-semibold text-blue-700 hover:underline"
          >
            Découvrir le remplacement de gardien d'immeuble →
          </a>
        </div>
      </section>

      {/* BUREAUX */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien de bureaux et immeubles administratifs
          à Issy-les-Moulineaux
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          Issy-les-Moulineaux accueille également de nombreux bureaux,
          immeubles professionnels et bâtiments administratifs. CoproSolutions
          propose des prestations d'entretien adaptées à ces environnements,
          en complément de ses services pour les copropriétés.
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
            Une organisation adaptée à votre immeuble
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Petite copropriété
              </h3>

              <p className="leading-7 text-gray-600">
                Une organisation proportionnée au nombre de lots, aux surfaces
                et aux besoins de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Résidence intermédiaire
              </h3>

              <p className="leading-7 text-gray-600">
                Un planning d'entretien adapté au nombre de halls, aux
                circulations et à la fréquentation.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Grande résidence
              </h3>

              <p className="leading-7 text-gray-600">
                Une organisation pouvant tenir compte des différents bâtiments
                et espaces communs du site.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTEUR */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une intervention locale dans les Hauts-de-Seine
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          CoproSolutions intervient à Issy-les-Moulineaux ainsi que dans
          plusieurs communes voisines des Hauts-de-Seine et de l'ouest
          parisien.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/zones/hauts-de-seine"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Hauts-de-Seine
          </a>

          <a
            href="/zones/boulogne-billancourt"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Boulogne-Billancourt
          </a>

          <a
            href="/zones/paris-15"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Paris 15e
          </a>

          <a
            href="/zones/hauts-de-seine/levallois-perret"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Levallois-Perret
          </a>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Les autres services de CoproSolutions
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
              href="/travaux-exceptionnels"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Travaux exceptionnels →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un entretien de copropriété à Issy-les-Moulineaux ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, son nombre de
            lots, le nombre de halls, la fréquence souhaitée et les prestations
            recherchées.
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
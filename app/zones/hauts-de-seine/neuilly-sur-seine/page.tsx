import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Neuilly-sur-Seine (92200) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Neuilly-sur-Seine : halls, escaliers, parties communes, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/neuilly-sur-seine",
  },
};

export default function NeuillySurSeinePage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · NEUILLY-SUR-SEINE 92200
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage et entretien de copropriété à Neuilly-sur-Seine
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour l'entretien, le nettoyage des
            parties communes et les services aux immeubles à Neuilly-sur-Seine.
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
          Entretien de copropriété à Neuilly-sur-Seine
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Neuilly-sur-Seine compte de nombreuses résidences, copropriétés et
            immeubles dont les parties communes nécessitent un entretien
            régulier et organisé.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage des halls, escaliers,
            paliers, ascenseurs, locaux poubelles, circulations et autres
            espaces communs.
          </p>

          <p>
            Les prestations peuvent être adaptées à la taille de la résidence,
            au nombre de halls, aux surfaces, à la fréquentation des espaces
            communs et à la fréquence d'intervention souhaitée.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations à Neuilly-sur-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des prestations d'entretien et de nettoyage adaptées aux
            caractéristiques de chaque copropriété.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des halls
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien des entrées, sols, portes, surfaces accessibles et
                espaces d'accueil de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers et paliers
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des escaliers, paliers et circulations communes
                selon la fréquence définie avec le syndic.
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
                Nettoyage régulier ou ponctuel des parkings, rampes et accès
                communs selon les besoins du site.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des vitres
              </h3>

              <p className="leading-7 text-gray-600">
                Interventions ponctuelles pour l'entretien des vitrages
                accessibles des parties communes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une organisation adaptée à votre copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Une copropriété de petite taille, une résidence avec plusieurs
            halls ou un ensemble immobilier plus important n'ont pas les mêmes
            besoins en matière d'entretien.
          </p>

          <p>
            CoproSolutions adapte l'organisation des prestations à la
            configuration du site, aux surfaces, à la fréquentation et à la
            fréquence de passage souhaitée.
          </p>

          <p>
            L'objectif est de proposer une organisation claire et cohérente
            avec les attentes du syndic ou du gestionnaire immobilier.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Petite copropriété
            </h3>

            <p className="leading-7 text-gray-600">
              Une organisation proportionnée au nombre de lots et aux surfaces
              à entretenir.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Résidence intermédiaire
            </h3>

            <p className="leading-7 text-gray-600">
              Un planning adapté aux halls, étages et zones de circulation.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Grande résidence
            </h3>

            <p className="leading-7 text-gray-600">
              Une organisation pouvant intégrer différents bâtiments et
              espaces communs.
            </p>
          </article>
        </div>
      </section>

      {/* POUBELLES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Sortie et rentrée des poubelles à Neuilly-sur-Seine
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            La sortie et la rentrée des conteneurs peuvent être intégrées au
            planning d'entretien de la résidence ou proposées comme une
            prestation spécifique selon les besoins du site.
          </p>

          <a
            href="/sortie-et-rentrée-poubelle"
            className="font-semibold text-blue-700 hover:underline"
          >
            Découvrir le service de sortie et rentrée des poubelles →
          </a>
        </div>
      </section>

      {/* REMPLACEMENT GARDIEN */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Remplacement de gardien à Neuilly-sur-Seine
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          En cas de congés, d'absence temporaire ou de besoin de continuité du
          service, CoproSolutions peut étudier une solution de remplacement
          adaptée au fonctionnement de votre immeuble.
        </p>

        <a
          href="/remplacement-gardien"
          className="font-semibold text-blue-700 hover:underline"
        >
          Voir notre service de remplacement de gardien →
        </a>
      </section>

      {/* BUREAUX */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Entretien de bureaux et immeubles administratifs à Neuilly-sur-Seine
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            CoproSolutions propose également des prestations d'entretien pour
            les bureaux, locaux professionnels et immeubles administratifs à
            Neuilly-sur-Seine.
          </p>

          <a
            href="/entretien-bureau-immeuble"
            className="font-semibold text-blue-700 hover:underline"
          >
            Découvrir l'entretien de bureaux et immeubles administratifs →
          </a>
        </div>
      </section>

      {/* PRESTATIONS COMPLEMENTAIRES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Des prestations complémentaires
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          En complément de l'entretien courant, certains besoins ponctuels
          peuvent être étudiés selon les caractéristiques de votre immeuble.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            Nettoyage approfondi des parties communes
          </div>

          <div className="rounded-xl border p-5">
            Shampoing des moquettes
          </div>

          <div className="rounded-xl border p-5">
            Nettoyage de parkings
          </div>

          <div className="rounded-xl border p-5">
            Nettoyage après travaux
          </div>

          <div className="rounded-xl border p-5">
            Nettoyage des vitres
          </div>

          <div className="rounded-xl border p-5">
            Prestations exceptionnelles d'entretien
          </div>
        </div>

        <a
          href="/travaux-exceptionnels"
          className="mt-8 inline-block font-semibold text-blue-700 hover:underline"
        >
          Découvrir nos travaux et prestations exceptionnels →
        </a>
      </section>

      {/* HAUTS-DE-SEINE */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            CoproSolutions dans les Hauts-de-Seine
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Neuilly-sur-Seine fait partie de notre secteur d'intervention dans
            les Hauts-de-Seine. Nous intervenons également dans plusieurs
            communes voisines.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Hauts-de-Seine
            </a>

            <a
              href="/zones/hauts-de-seine/levallois-perret"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Levallois-Perret
            </a>

            <a
              href="/zones/hauts-de-seine/nanterre"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Nanterre
            </a>

            <a
              href="/zones/boulogne-billancourt"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Boulogne-Billancourt
            </a>

            <a
              href="/zones/hauts-de-seine/issy-les-moulineaux"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Issy-les-Moulineaux
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
            Besoin d'un entretien de copropriété à Neuilly-sur-Seine ?
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
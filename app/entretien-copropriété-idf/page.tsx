import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entretien de copropriété en Île-de-France | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés en Île-de-France : halls, escaliers, parties communes, parkings, poubelles, moquettes et prestations ponctuelles.",
  alternates: {
    canonical: "/entretien-copropriété-idf",
  },
};

export default function EntretienCoproIdf() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Entretien de copropriété en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux et
            gestionnaires immobiliers pour assurer l'entretien régulier et le
            nettoyage des copropriétés à Paris et en Île-de-France.
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
          Un entretien adapté aux besoins de votre copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'entretien régulier d'une copropriété contribue à maintenir les
            parties communes propres, agréables et correctement entretenues.
            CoproSolutions intervient auprès des syndics, conseils syndicaux
            et gestionnaires immobiliers pour organiser des prestations
            adaptées aux caractéristiques de chaque immeuble.
          </p>

          <p>
            Nos interventions peuvent être programmées selon la fréquence
            souhaitée et adaptées au nombre de halls, aux surfaces, aux
            équipements et aux contraintes propres à la résidence.
          </p>

          <p>
            Nous pouvons intervenir dans les petites copropriétés comme dans
            les ensembles immobiliers plus importants, avec une organisation
            ajustée aux besoins réels de chaque site.
          </p>
        </div>
      </section>

      {/* ENTRETIEN COURANT */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Entretien courant des parties communes
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Nos prestations couvrent les principaux espaces communs d'un
            immeuble résidentiel ou d'une copropriété.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Halls et entrées
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage et entretien des halls, portes d'entrée, vitrages
                accessibles et zones d'accueil.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers et paliers
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien des escaliers, paliers, circulations et autres
                espaces communs de la résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Ascenseurs
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage et entretien courant des cabines et des zones
                accessibles autour des ascenseurs.
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
                Nettoyage ponctuel ou régulier des parkings, accès et espaces
                communs selon les besoins de la copropriété.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Espaces communs
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien des circulations et autres zones communes définies
                dans le cahier des charges de l'immeuble.
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
          En complément de l'entretien courant, CoproSolutions peut répondre à
          différents besoins ponctuels ou spécifiques.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage des vitres
            </h3>
            <p className="leading-7 text-gray-600">
              Des interventions ponctuelles peuvent être organisées pour
              l'entretien des vitrages accessibles des parties communes.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage et shampoing des moquettes
            </h3>
            <p className="leading-7 text-gray-600">
              Nettoyage approfondi des moquettes et revêtements textiles selon
              les besoins de la résidence.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage de parkings
            </h3>
            <p className="leading-7 text-gray-600">
              Interventions ponctuelles ou programmées pour maintenir les
              parkings et zones de circulation propres.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Remise en état et nettoyage après travaux
            </h3>
            <p className="leading-7 text-gray-600">
              Nettoyage approfondi après travaux, interventions techniques ou
              opérations particulières dans l'immeuble.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/travaux-exceptionnels"
            className="font-semibold text-blue-700 hover:underline"
          >
            Découvrir nos travaux et prestations exceptionnels →
          </a>
        </div>
      </section>

      {/* POUBELLES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Sortie et rentrée des poubelles
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            La gestion des conteneurs peut être intégrée à l'organisation
            d'entretien de la copropriété. CoproSolutions peut assurer la
            sortie et la rentrée des poubelles selon les jours de collecte et
            les consignes définies pour la résidence.
          </p>

          <a
            href="/sortie-et-rentrée-poubelle"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir le service de sortie et rentrée des poubelles →
          </a>
        </div>
      </section>

      {/* BUREAUX */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien des bureaux et immeubles professionnels
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          CoproSolutions propose également des prestations d'entretien régulier
          ou ponctuel pour les bureaux, immeubles professionnels et espaces de
          travail. Les interventions peuvent être adaptées aux horaires, aux
          surfaces et au niveau de service recherché.
        </p>

        <a
          href="/entretien-bureau-immeuble"
          className="font-semibold text-blue-700 hover:underline"
        >
          Découvrir notre service d'entretien de bureaux →
        </a>
      </section>

      {/* REMPLACEMENT GARDIEN */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Remplacement de gardiens d'immeuble
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            Lorsqu'un gardien ou un employé d'immeuble est absent, la
            copropriété peut avoir besoin d'une solution de remplacement afin
            d'assurer la continuité du service. CoproSolutions propose des
            solutions adaptées aux absences temporaires ou aux besoins plus
            longs.
          </p>

          <a
            href="/remplacement-gardien"
            className="font-semibold text-blue-700 hover:underline"
          >
            Découvrir le service de remplacement de gardien →
          </a>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Une organisation adaptée à chaque copropriété
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-600">
          La fréquence et l'organisation des interventions peuvent être
          adaptées aux caractéristiques de votre résidence et à son niveau de
          fréquentation.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Petites copropriétés
            </h3>
            <p className="leading-7 text-gray-600">
              Une organisation proportionnée au nombre de lots, aux surfaces
              et aux besoins réels de la résidence.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Copropriétés intermédiaires
            </h3>
            <p className="leading-7 text-gray-600">
              Un entretien régulier permettant de maintenir les parties
              communes propres et accueillantes.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Grandes copropriétés
            </h3>
            <p className="leading-7 text-gray-600">
              Une organisation pouvant tenir compte du nombre de halls, des
              surfaces, des équipements et des contraintes du site.
            </p>
          </article>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-5 text-3xl font-bold">
            Zones d'intervention
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-600">
            CoproSolutions intervient principalement à Paris et en
            Île-de-France, notamment dans les Hauts-de-Seine, les Yvelines et
            le Val-de-Marne.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/zones/paris-75"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Paris
            </a>

            <a
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Hauts-de-Seine
            </a>

            <a
              href="/zones/yvelines"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Yvelines
            </a>

            <a
              href="/zones/val-de-marne"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Val-de-Marne
            </a>
          </div>

          <a
            href="/zones"
            className="mt-8 inline-block font-semibold text-blue-700 hover:underline"
          >
            Voir toutes nos zones d'intervention →
          </a>
        </div>
      </section>

      {/* POURQUOI COPROSOLUTIONS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Pourquoi choisir CoproSolutions ?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-bold">
              Une organisation adaptée
            </h3>
            <p className="leading-7 text-gray-600">
              Les prestations sont définies en fonction des caractéristiques
              et des besoins de chaque copropriété.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">
              Une approche professionnelle
            </h3>
            <p className="leading-7 text-gray-600">
              Nous cherchons à assurer une qualité de service régulière et une
              organisation claire avec les gestionnaires et syndics.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">
              Des prestations complémentaires
            </h3>
            <p className="leading-7 text-gray-600">
              Entretien courant, nettoyage spécifique, poubelles, bureaux et
              remplacement de gardiens peuvent être étudiés selon les besoins.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">
              Une présence en Île-de-France
            </h3>
            <p className="leading-7 text-gray-600">
              CoproSolutions intervient principalement à Paris et dans
              plusieurs départements de la région Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un entretien pour votre copropriété ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Communiquez-nous les caractéristiques de votre immeuble, le nombre
            de lots, vos besoins et la fréquence souhaitée. Nous pourrons
            étudier une solution adaptée.
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
        </div>
      </section>
    </main>
  );
}
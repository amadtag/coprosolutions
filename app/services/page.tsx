import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services | Entretien de copropriétés et remplacement de gardiens",
  description:
    "CoproSolutions propose l'entretien et le nettoyage de copropriétés, le remplacement de gardiens, l'entretien de bureaux, la gestion des poubelles et des prestations exceptionnelles à Paris et en Île-de-France.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nos services pour copropriétés, immeubles et bureaux
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux,
            gestionnaires immobiliers et professionnels avec des solutions
            d'entretien, de nettoyage et de remplacement adaptées aux besoins
            de chaque immeuble.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 Appeler maintenant
            </a>

            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Des prestations adaptées à chaque copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'entretien d'une copropriété nécessite une organisation régulière,
            une présence fiable et une adaptation aux caractéristiques de
            chaque immeuble. CoproSolutions intervient auprès des syndics et
            des copropriétés pour assurer l'entretien courant des parties
            communes et répondre aux besoins ponctuels.
          </p>

          <p>
            Nous adaptons nos interventions à la taille de la copropriété, au
            nombre de halls, à la fréquence souhaitée, aux équipements
            présents et au niveau de service recherché.
          </p>

          <p>
            Nous intervenons principalement à Paris et en Île-de-France,
            notamment dans les Hauts-de-Seine, les Yvelines et le Val-de-Marne.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos principales prestations
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
            Une gamme de services destinée aux copropriétés, immeubles
            résidentiels et professionnels.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Entretien copropriété */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Entretien et nettoyage de copropriétés
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Nous assurons l'entretien courant des parties communes afin
                de maintenir les immeubles propres, entretenus et accueillants
                pour les résidents.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Nettoyage des halls d'entrée</li>
                <li>Nettoyage des escaliers et paliers</li>
                <li>Entretien des circulations communes</li>
                <li>Nettoyage des ascenseurs</li>
                <li>Entretien des locaux poubelles</li>
                <li>Nettoyage des parkings et accès communs</li>
                <li>Entretien courant des parties communes</li>
              </ul>

              <a
                href="/entretien-copropriété-idf"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Voir le service d'entretien de copropriété →
              </a>
            </article>

            {/* Remplacement gardien */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Remplacement de gardiens d'immeuble
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                En cas d'absence d'un gardien ou d'un employé d'immeuble,
                CoproSolutions peut organiser un remplacement temporaire afin
                d'assurer la continuité du service.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Remplacement ponctuel</li>
                <li>Remplacement pendant les congés</li>
                <li>Absence temporaire ou prolongée</li>
                <li>Continuité des tâches courantes</li>
                <li>Adaptation aux consignes de la copropriété</li>
              </ul>

              <a
                href="/remplacement-gardien"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Découvrir le remplacement de gardien →
              </a>
            </article>

            {/* Bureaux */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Entretien et nettoyage de bureaux
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Nous proposons des prestations d'entretien adaptées aux
                bureaux, immeubles professionnels et espaces de travail.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Nettoyage des espaces de travail</li>
                <li>Entretien des circulations</li>
                <li>Nettoyage des sanitaires</li>
                <li>Entretien des espaces communs</li>
                <li>Nettoyage régulier ou ponctuel</li>
              </ul>

              <a
                href="/entretien-bureau-immeuble"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Voir le service d'entretien de bureaux →
              </a>
            </article>

            {/* Poubelles */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Une prestation dédiée à la gestion des conteneurs de
                copropriété selon les jours et horaires prévus par la
                collectivité.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Sortie des conteneurs</li>
                <li>Rentrée des conteneurs</li>
                <li>Respect du calendrier de collecte</li>
                <li>Organisation adaptée à la copropriété</li>
              </ul>

              <a
                href="/sortie-et-rentrée-poubelle"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                En savoir plus sur la gestion des poubelles →
              </a>
            </article>

            {/* Nettoyage spécifique */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Nettoyages spécifiques et prestations ponctuelles
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Certaines copropriétés ont besoin d'interventions ponctuelles
                en complément de l'entretien régulier.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Nettoyage des vitres</li>
                <li>Shampoing et nettoyage des moquettes</li>
                <li>Nettoyage approfondi des parties communes</li>
                <li>Nettoyage de parkings</li>
                <li>Interventions après travaux</li>
              </ul>

              <a
                href="/travaux-exceptionnels"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Voir les prestations exceptionnelles →
              </a>
            </article>

            {/* Travaux exceptionnels */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Travaux et interventions exceptionnels
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Nous pouvons également répondre à des besoins ponctuels
                d'entretien ou de remise en état des parties communes.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Nettoyage après travaux</li>
                <li>Nettoyage approfondi</li>
                <li>Entretien extérieur ponctuel</li>
                <li>Petites interventions d'entretien</li>
                <li>Remise en état de certains espaces communs</li>
              </ul>

              <a
                href="/travaux-exceptionnels"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Découvrir les travaux exceptionnels →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Une organisation adaptée à votre copropriété
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold">Petites copropriétés</h3>
            <p className="leading-7 text-gray-600">
              Des prestations ajustées à la taille de l'immeuble et à ses
              besoins réels, sans imposer une organisation disproportionnée.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold">Copropriétés intermédiaires</h3>
            <p className="leading-7 text-gray-600">
              Une organisation régulière permettant de maintenir les parties
              communes propres et de répondre aux besoins du syndic.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold">Grandes copropriétés</h3>
            <p className="leading-7 text-gray-600">
              Une organisation pouvant être adaptée au nombre de halls, aux
              surfaces et aux contraintes particulières de l'immeuble.
            </p>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Nos zones d'intervention
          </h2>

          <p className="mx-auto mb-8 max-w-3xl leading-7 text-gray-600">
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

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'une solution pour votre copropriété ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Communiquez-nous les caractéristiques de votre immeuble, vos
            besoins d'entretien et la fréquence souhaitée. Nous pourrons
            étudier une organisation adaptée.
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
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-900"
            >
              📞 06 58 87 65 79
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
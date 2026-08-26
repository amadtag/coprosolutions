import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Zones d'intervention | Entretien de copropriétés et immeubles en Île-de-France",
  description:
    "CoproSolutions intervient à Paris et en Île-de-France pour l'entretien des copropriétés, le nettoyage des immeubles, l'entretien des bureaux et le remplacement de gardiens.",
  alternates: {
    canonical: "/zones",
  },
};

const departments = [
  {
    name: "Paris (75)",
    href: "/zones/paris-75",
    description:
      "Entretien et nettoyage de copropriétés, immeubles et parties communes à Paris.",
  },
  {
    name: "Hauts-de-Seine (92)",
    href: "/zones/hauts-de-seine",
    description:
      "Prestations d'entretien, nettoyage et remplacement de gardiens dans les Hauts-de-Seine.",
  },
  {
    name: "Yvelines (78)",
    href: "/zones/yvelines",
    description:
      "Entretien de copropriétés, immeubles et services associés dans les Yvelines.",
  },
  {
    name: "Val-de-Marne (94)",
    href: "/zones/val-de-marne",
    description:
      "Solutions d'entretien et de services pour copropriétés dans le Val-de-Marne.",
  },
];

const cities = [
  {
    name: "Boulogne-Billancourt",
    href: "/zones/boulogne-billancourt",
  },
  {
    name: "Paris 15e",
    href: "/zones/paris-15",
  },
  {
    name: "Issy-les-Moulineaux",
    href: "/zones/hauts-de-seine/issy-les-moulineaux",
  },
  {
    name: "Levallois-Perret",
    href: "/zones/hauts-de-seine/levallois-perret",
  },
  {
    name: "Nanterre",
    href: "/zones/hauts-de-seine/nanterre",
  },
  {
    name: "Neuilly-sur-Seine",
    href: "/zones/hauts-de-seine/neuilly-sur-seine",
  },
  {
    name: "Créteil",
    href: "/zones/val-de-marne/creteil",
  },
  {
    name: "Versailles",
    href: "/zones/yvelines/versailles",
  },
];

export default function ZonesPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nos zones d'intervention en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, conseils syndicaux,
            gestionnaires immobiliers et entreprises pour l'entretien, le
            nettoyage et les services aux immeubles à Paris et en
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

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une présence locale pour vos immeubles
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L'organisation de l'entretien d'un immeuble nécessite une bonne
            connaissance de ses contraintes, de sa configuration et de ses
            besoins. CoproSolutions intervient principalement à Paris et dans
            plusieurs départements de l'Île-de-France.
          </p>

          <p>
            Nous proposons des prestations d'entretien de copropriété, de
            nettoyage d'immeubles, d'entretien de bureaux et d'immeubles
            administratifs, de sortie et rentrée des poubelles ainsi que de
            remplacement de gardiens.
          </p>

          <p>
            Les prestations sont adaptées aux caractéristiques de chaque site,
            à sa fréquentation, à ses surfaces et à l'organisation souhaitée
            par le syndic, le gestionnaire ou l'entreprise.
          </p>
        </div>
      </section>

      {/* DEPARTEMENTS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos principaux départements d'intervention
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Retrouvez nos principales zones géographiques et les prestations
            proposées dans chaque secteur.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {departments.map((department) => (
              <a
                key={department.href}
                href={department.href}
                className="rounded-2xl bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-3 text-2xl font-bold text-blue-700">
                  {department.name}
                </h3>

                <p className="leading-7 text-gray-600">
                  {department.description}
                </p>

                <span className="mt-5 inline-block font-semibold text-blue-700">
                  Voir la zone →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Villes et secteurs desservis
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-600">
          CoproSolutions intervient dans plusieurs villes denses en
          copropriétés, immeubles résidentiels et locaux professionnels.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <a
              key={city.href}
              href={city.href}
              className="rounded-xl border bg-white p-5 text-center font-semibold transition hover:shadow-md"
            >
              {city.name}
            </a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services dans nos zones d'intervention
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une gamme de prestations destinée aux copropriétés, immeubles
            professionnels, bureaux et résidences.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/entretien-copropriété-idf"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de copropriété
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des halls, escaliers, paliers, circulations,
                ascenseurs et autres parties communes.
              </p>
            </a>

            <a
              href="/entretien-bureau-immeuble"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Bureaux et immeubles administratifs
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien régulier ou ponctuel des bureaux, locaux
                professionnels et immeubles administratifs.
              </p>
            </a>

            <a
              href="/remplacement-gardien"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardien
              </h3>

              <p className="leading-7 text-gray-600">
                Solutions de remplacement pendant les congés ou les absences
                temporaires ou prolongées.
              </p>
            </a>

            <a
              href="/sortie-et-rentrée-poubelle"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Organisation de la sortie et de la rentrée des conteneurs selon
                les jours de collecte.
              </p>
            </a>

            <a
              href="/travaux-exceptionnels"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Travaux exceptionnels
              </h3>

              <p className="leading-7 text-gray-600">
                Prestations ponctuelles comme les parkings, moquettes,
                nettoyage après travaux et interventions spécifiques.
              </p>
            </a>

            <a
              href="/nettoyage-copropriete-paris"
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage de copropriétés à Paris
              </h3>

              <p className="leading-7 text-gray-600">
                Prestations dédiées aux copropriétés parisiennes et à leurs
                parties communes.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* PARIS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Intervention à Paris
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions intervient à Paris pour l'entretien et le nettoyage
            de copropriétés, immeubles et locaux professionnels.
          </p>

          <p>
            Notre zone parisienne comprend notamment le 15e arrondissement et
            les secteurs où la demande en entretien d'immeubles est importante.
          </p>

          <p>
            Pour connaître les prestations dédiées à Paris, consultez notre
            page consacrée au nettoyage des copropriétés à Paris.
          </p>
        </div>

        <a
          href="/nettoyage-copropriete-paris"
          className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
        >
          Nettoyage de copropriétés à Paris →
        </a>
      </section>

      {/* HAUTS-DE-SEINE */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Intervention dans les Hauts-de-Seine
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
            Les Hauts-de-Seine constituent une zone importante d'intervention
            pour CoproSolutions, avec de nombreuses copropriétés, résidences
            et immeubles professionnels.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Hauts-de-Seine
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
              href="/zones/hauts-de-seine/neuilly-sur-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold hover:shadow-md"
            >
              Neuilly-sur-Seine
            </a>
          </div>
        </div>
      </section>

      {/* YVELINES / VAL DE MARNE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Intervention dans les Yvelines et le Val-de-Marne
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            CoproSolutions intervient également dans les Yvelines et le
            Val-de-Marne pour les prestations d'entretien, de nettoyage et de
            remplacement de gardiens.
          </p>

          <p>
            Ces secteurs comprennent notamment Versailles, Créteil et les
            communes couvertes par nos pages locales.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/zones/yvelines"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Yvelines
          </a>

          <a
            href="/zones/yvelines/versailles"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Versailles
          </a>

          <a
            href="/zones/val-de-marne"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Val-de-Marne
          </a>

          <a
            href="/zones/val-de-marne/creteil"
            className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md"
          >
            Créteil
          </a>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Pourquoi faire appel à CoproSolutions ?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Une organisation adaptée
              </h3>

              <p className="leading-7 text-gray-600">
                Les prestations sont définies selon les caractéristiques de
                chaque immeuble et les attentes du client.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Une offre complète
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien, nettoyage, poubelles, bureaux, prestations
                ponctuelles et remplacement de gardiens peuvent être étudiés.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Une présence en Île-de-France
              </h3>

              <p className="leading-7 text-gray-600">
                Plusieurs départements et villes disposent désormais de pages
                locales dédiées pour faciliter l'information et le contact.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Un interlocuteur professionnel
              </h3>

              <p className="leading-7 text-gray-600">
                Les besoins sont étudiés directement avec le syndic, le
                gestionnaire ou le responsable du site.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'une prestation dans votre secteur ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, les prestations
            recherchées et la fréquence souhaitée. Nous pourrons étudier votre
            besoin et vous proposer une solution adaptée.
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
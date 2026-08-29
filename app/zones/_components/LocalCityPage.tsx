type NearbyCity = {
  name: string;
  href: string;
};

type LocalCityPageProps = {
  city: string;
  postalCode: string;
  title: string;
  description: string;
  intro: React.ReactNode;
  nearbyCities?: NearbyCity[];
};

export default function LocalCityPage({
  city,
  postalCode,
  title,
  description,
  intro,
  nearbyCities = [],
}: LocalCityPageProps) {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · {city.toUpperCase()} {postalCode}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            {description}
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
          Entretien et nettoyage de copropriété à {city}
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          {intro}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services à {city}
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            CoproSolutions propose des prestations adaptées aux copropriétés,
            résidences et immeubles professionnels.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de copropriété
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des halls, escaliers, paliers, ascenseurs,
                circulations et autres parties communes.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des immeubles
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien courant des espaces communs selon la configuration et
                les besoins de chaque résidence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Organisation de la sortie et de la rentrée des conteneurs
                selon les jours de collecte.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parkings
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien des parkings, rampes, accès et autres espaces
                communs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de bureaux
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage des bureaux, locaux professionnels et immeubles
                administratifs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardiens
              </h3>

              <p className="leading-7 text-gray-600">
                Remplacement temporaire ou prolongé en cas de congé ou
                d'absence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRESTATIONS COMPLEMENTAIRES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Des prestations complémentaires à {city}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage des vitres
            </h3>

            <p className="leading-7 text-gray-600">
              Interventions ponctuelles pour les vitrages accessibles des
              parties communes.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Shampoing des moquettes
            </h3>

            <p className="leading-7 text-gray-600">
              Nettoyage approfondi des moquettes et revêtements textiles.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Nettoyage après travaux
            </h3>

            <p className="leading-7 text-gray-600">
              Remise en état des espaces après travaux ou intervention
              technique.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Prestations exceptionnelles
            </h3>

            <p className="leading-7 text-gray-600">
              Interventions ponctuelles étudiées selon les caractéristiques du
              site.
            </p>
          </article>
        </div>

        <div className="mt-8">
          <a
            href="/travaux-exceptionnels"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir nos travaux et prestations exceptionnels →
          </a>
        </div>
      </section>

      {/* SYNDICS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une solution pour les syndics à {city}
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              CoproSolutions accompagne les syndics, conseils syndicaux et
              gestionnaires immobiliers dans l'organisation de l'entretien des
              copropriétés et immeubles.
            </p>

            <p>
              Les prestations sont définies selon la configuration de
              l'immeuble, le nombre de halls, les surfaces, la fréquentation et
              la fréquence d'intervention souhaitée.
            </p>
          </div>
        </div>
      </section>

      {/* VILLES PROCHES */}
      {nearbyCities.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos secteurs proches de {city}
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-600">
            CoproSolutions intervient également dans plusieurs communes
            proches de {city}.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nearbyCities.map((nearbyCity) => (
              <a
                key={nearbyCity.href}
                href={nearbyCity.href}
                className="rounded-xl border bg-white p-5 text-center font-semibold text-blue-700 transition hover:shadow-md"
              >
                {nearbyCity.name}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d'un entretien à {city} ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble, sa configuration,
            les prestations recherchées et la fréquence souhaitée.
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
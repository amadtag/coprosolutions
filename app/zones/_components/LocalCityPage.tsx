import Link from "next/link";

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
  const faqItems = [
    {
      question: `Quel est votre délai d'intervention pour une copropriété à ${city} (${postalCode}) ?`,
      answer: `Pour un remplacement de gardien au pied levé ou un nettoyage d'urgence à ${city}, CoproSolutions intervient sous 24 à 48h. Pour un contrat d'entretien annuel, nous établissons un devis comparatif clair sous 24h pour votre Assemblée Générale.`,
    },
    {
      question: `Comment assurez-vous le suivi qualité des prestations à ${city} ?`,
      answer: `Chaque copropriété bénéficie de l'affichage du cahier des charges sur site, de contrôles qualité réguliers effectués directement par le dirigeant (sans sous-traitance) et d'un compte-rendu photo après chaque intervention ponctuelle.`,
    },
    {
      question: `Proposez-vous la sortie et la rentrée des poubelles à ${city} ?`,
      answer: `Oui, nos agents assurent la rotation des bacs selon le calendrier de collecte de ${city}, le nettoyage et la désinfection des locaux poubelles ainsi que l'évacuation des encombrants.`,
    },
  ];

  const citySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: title,
        description,
        provider: {
          "@id": "https://www.coprosolutions.net/#organization",
        },
        areaServed: {
          "@type": "City",
          name: city,
          postalCode,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

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
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis sous 24h
            </Link>

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
            résidences et immeubles professionnels à {city} ({postalCode}).
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                <Link href="/services" className="hover:underline">
                  Entretien de copropriété
                </Link>
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des halls, escaliers, paliers, ascenseurs,
                circulations et autres parties communes.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                <Link href="/nettoyage-copropriete-paris" className="hover:underline">
                  Nettoyage des immeubles
                </Link>
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
                selon les jours de collecte à {city}.
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
                <Link href="/entretien-bureau-immeuble" className="hover:underline">
                  Entretien de bureaux
                </Link>
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des bureaux, locaux professionnels et immeubles
                administratifs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                <Link href="/remplacement-gardien" className="hover:underline">
                  Remplacement de gardiens
                </Link>
              </h3>
              <p className="leading-7 text-gray-600">
                Remplacement temporaire ou prolongé en cas de congé ou
                d&apos;absence sous 24 à 48h.
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
            <h3 className="mb-3 text-xl font-bold">Nettoyage des vitres</h3>
            <p className="leading-7 text-gray-600">
              Interventions ponctuelles pour les vitrages accessibles des
              parties communes.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">Shampoing des moquettes</h3>
            <p className="leading-7 text-gray-600">
              Nettoyage approfondi des moquettes et revêtements textiles.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">Nettoyage après travaux</h3>
            <p className="leading-7 text-gray-600">
              Remise en état des espaces après travaux ou intervention
              technique.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">Prestations exceptionnelles</h3>
            <p className="leading-7 text-gray-600">
              Interventions ponctuelles étudiées selon les caractéristiques du
              site avec compte-rendu photo.
            </p>
          </article>
        </div>

        <div className="mt-8">
          <Link
            href="/travaux-exceptionnels"
            className="font-semibold text-blue-700 hover:underline"
          >
            Voir nos travaux et prestations exceptionnels →
          </Link>
        </div>
      </section>

      {/* SYNDICS & FAQ LOCALE */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Une solution pour les syndics et conseils syndicaux à {city}
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              CoproSolutions accompagne les syndics, conseils syndicaux et
              gestionnaires immobiliers à {city} ({postalCode}) dans
              l&apos;organisation de l&apos;entretien des copropriétés et immeubles,
              sans sous-traitance.
            </p>

            <p>
              Les prestations sont définies selon la configuration de
              l&apos;immeuble, le nombre de halls, les surfaces, la fréquentation et
              la fréquence d&apos;intervention souhaitée.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Questions fréquentes — Copropriétés à {city}
            </h3>

            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-bold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
              </details>
            ))}
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
              <Link
                key={nearbyCity.href}
                href={nearbyCity.href}
                className="rounded-xl border bg-white p-5 text-center font-semibold text-blue-700 transition hover:shadow-md"
              >
                {nearbyCity.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d&apos;un entretien à {city} ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous la localisation de votre immeuble à {city}, sa
            configuration, les prestations recherchées et la fréquence souhaitée.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit
            </Link>

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
    </div>
  );
}

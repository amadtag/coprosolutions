import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage de copropriétés à Paris (75) — Devis AG 48h",
  description:
    "Nettoyage et entretien d'immeubles et copropriétés à Paris (75) : halls haussmanniens, escaliers, tapis, ascenseurs, sortie des poubelles et devis comparatif AG sous 48h.",
  alternates: {
    canonical: "/nettoyage-copropriete-paris",
  },
};

const parisArrondissements = [
  { name: "Paris 2e", href: "/zones/paris-2" },
  { name: "Paris 3e", href: "/zones/paris-3" },
  { name: "Paris 4e", href: "/zones/paris-4" },
  { name: "Paris 5e", href: "/zones/paris-5" },
  { name: "Paris 6e", href: "/zones/paris-6" },
  { name: "Paris 7e", href: "/zones/paris-7" },
  { name: "Paris 8e", href: "/zones/paris-8" },
  { name: "Paris 9e", href: "/zones/paris-9" },
  { name: "Paris 10e", href: "/zones/paris-10" },
  { name: "Paris 11e", href: "/zones/paris-11" },
  { name: "Paris 12e", href: "/zones/paris-12" },
  { name: "Paris 13e", href: "/zones/paris-13" },
  { name: "Paris 14e", href: "/zones/paris-14" },
  { name: "Paris 15e", href: "/zones/paris-15" },
  { name: "Paris 16e", href: "/zones/paris-16" },
  { name: "Paris 17e", href: "/zones/paris-17" },
  { name: "Paris 18e", href: "/zones/paris-18" },
  { name: "Paris 19e", href: "/zones/paris-19" },
  { name: "Paris 20e", href: "/zones/paris-20" },
];

const faqItems = [
  {
    question: "Comment obtenir un devis comparatif pour une Assemblée Générale à Paris ?",
    answer:
      "Nous effectuons une visite technique gratuite de votre immeuble parisien (ou étudions votre cahier des charges actuel) et vous remettons un devis détaillé poste par poste sous 48h, prêt à être joint à la convocation d'AG.",
  },
  {
    question: "Utilisez-vous des produits adaptés aux immeubles haussmanniens (marbre, tapis, laiton) ?",
    answer:
      "Oui. Nos agents sont formés à l'entretien des matériaux anciens des copropriétés parisiennes : aspiration avec brosses adaptées des tapis d'escalier, lavage au savon neutre des sols en pierre ou marbre, et lustrage des cuivres et boiseries.",
  },
  {
    question: "Comment gérez-vous la sortie des poubelles dans les rues parisiennes ?",
    answer:
      "Nous respectons scrupuleusement les créneaux de collecte de la Ville de Paris par arrondissement (bacs verts, jaunes et blancs) : sortie en fin de journée ou tôt le matin et rentrée immédiate après passage de la benne afin d'éviter toute amende de voirie.",
  },
  {
    question: "Travaillez-vous avec des sous-traitants à Paris ?",
    answer:
      "Non, zéro sous-traitance. Tous nos agents sont salariés de CoproSolutions et encadrés directement par le dirigeant avec affichage du cahier des charges dans le hall et contrôle qualité régulier.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage et entretien de copropriétés à Paris (75)",
      description:
        "Entretien régulier des parties communes, immeubles haussmanniens et résidences à Paris : halls, escaliers, ascenseurs, locaux poubelles et vitrerie.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Paris",
        postalCode: "75000",
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

export default function NettoyageCoproprieteParis() {
  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS • PARIS (75) • DEVIS AG SOUS 48H
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage et entretien de copropriétés à Paris (75)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Immeubles haussmanniens, résidences modernes ou ensembles sur cour :
            CoproSolutions assure l’entretien régulier des parties communes, la
            rotation des poubelles et le suivi qualité sur site pour les syndics
            et conseils syndicaux parisiens.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis comparatif AG
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
          Une entreprise de nettoyage dédiée aux copropriétés parisiennes
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            À Paris, l’entretien d’une copropriété exige rigueur, discrétion et
            connaissance des contraintes locales : accès par digicode ou Vigik,
            escaliers de service, tapis en laine, parquets cirés, cours pavées
            et créneaux stricts de collecte des ordures ménagères.
          </p>

          <p>
            Implantée aux portes de Paris (73 rue du Château à Boulogne-Billancourt),
            <strong> CoproSolutions</strong> accompagne les cabinets de syndics
            et les conseils syndicaux avec un engagement simple :{" "}
            <strong>zéro sous-traitance</strong>, un cahier des charges affiché
            dans chaque immeuble et des contrôles qualité réguliers effectués
            directement par le dirigeant.
          </p>

          <p>
            Vous préparez votre prochaine Assemblée Générale ou souhaitez changer
            de prestataire suite à un manque de suivi ? Nous visitons votre
            immeuble et vous remettons un chiffrage clair sous 48h.
          </p>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations d’entretien d’immeubles à Paris
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Un cahier des charges précis, adapté à la configuration et au standing
            de chaque copropriété parisienne.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Halls d’entrée & boiseries
              </h3>
              <p className="leading-7 text-gray-600">
                Lavage des sols (marbre, pierre, carrelage), nettoyage des portes
                vitrées, miroirs, boîtes aux lettres, interphones et cuivres.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers, tapis et paliers
              </h3>
              <p className="leading-7 text-gray-600">
                Aspiration soignée des tapis d’escalier, lavage des marches,
                dépoussiérage des rampes, plinthes et rebords de fenêtres.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Cabines d’ascenseurs
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des miroirs, parois inox, platines de commande, sols et
                aspiration régulière des rails de portes palières.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie des poubelles & locaux bacs
              </h3>
              <p className="leading-7 text-gray-600">
                Rotation des conteneurs selon les jours de collecte de votre
                arrondissement, lavage et désinfection des locaux poubelles.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Cours intérieures & parkings
              </h3>
              <p className="leading-7 text-gray-600">
                Balayage des cours pavées, passages cochers, locaux vélos/poussettes
                et nettoyage des parkings souterrains.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Vitrerie & remises en état
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des verrières, fenêtres d’escaliers, débarras de caves
                et remise en état après travaux ou sinistre.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FREQUENCE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Des formules calibrées selon la taille de votre immeuble
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Nous adaptons le nombre de passages hebdomadaires au trafic de la
          résidence et au budget voté en Assemblée Générale :
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              1 à 2 passages / semaine
            </h3>
            <p className="leading-7 text-gray-600">
              Idéal pour les petits immeubles parisiens (10 à 25 lots) :
              entretien complet des parties communes et des accès.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              3 à 6 passages / semaine
            </h3>
            <p className="leading-7 text-gray-600">
              Adapté aux résidences à fort passage, immeubles avec professions
              libérales ou copropriétés sans gardien nécessitant la sortie des bacs.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Renfort & travaux ponctuels
            </h3>
            <p className="leading-7 text-gray-600">
              Shampouinage de tapis, lavage haute pression de cour, débarras
              d’encombrants avec compte-rendu photo avant/après.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes — Nettoyage de copropriété à Paris
          </h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer text-lg font-bold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE COMPLET DES ARRONDISSEMENTS PARISIENS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">
          Nos interventions par arrondissement à Paris (75)
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Sélectionnez votre arrondissement pour découvrir nos modalités
          d’intervention locale à Paris :
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {parisArrondissements.map((arr) => (
            <Link
              key={arr.href}
              href={arr.href}
              className="rounded-xl border bg-slate-50 p-3 text-center font-semibold text-blue-700 transition hover:bg-white hover:shadow-md"
            >
              {arr.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          <Link
            href="/zones/paris-75"
            className="font-semibold text-blue-700 hover:underline"
          >
            Vue d’ensemble Paris (75) →
          </Link>
          <Link
            href="/remplacement-gardien"
            className="font-semibold text-blue-700 hover:underline"
          >
            Remplacement de gardien d’immeuble à Paris →
          </Link>
          <Link
            href="/travaux-exceptionnels"
            className="font-semibold text-blue-700 hover:underline"
          >
            Débarras & travaux exceptionnels →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d’un devis pour votre copropriété à Paris ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l’adresse de l’immeuble, le nombre de lots et la
            fréquence souhaitée : nous organisons une visite rapide et vous
            remettons un devis détaillé sous 48h.
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

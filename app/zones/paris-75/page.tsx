import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Entretien et nettoyage de copropriété à Paris (75) | CoproSolutions",
  description:
    "Entreprise de nettoyage de copropriété à Paris (75) : entretien d'immeubles haussmanniens, parties communes, sortie des poubelles et remplacement de gardien (Paris 15e, 16e, 17e, 7e, 8e...).",
  alternates: {
    canonical: "/zones/paris-75",
  },
};

const priorityArrondissements = [
  {
    name: "Paris 15e",
    href: "/zones/paris-15",
    description:
      "Proximité immédiate depuis Boulogne-Billancourt : entretien d'immeubles, résidences modernes et sortie des bacs dans le 15e.",
  },
  {
    name: "Paris 16e",
    href: "/zones/paris-16",
    description:
      "Entretien soigné des immeubles haussmanniens et résidences de standing (Auteuil, Passy, Muette, Porte Dauphine).",
  },
  {
    name: "Paris 17e",
    href: "/zones/paris-17",
    description:
      "Nettoyage des parties communes, tapis d'escalier, cours pavées et remplacement de gardiens (Ternes, Monceau, Batignolles).",
  },
  {
    name: "Paris 7e & 8e",
    href: "/zones/paris-7",
    description:
      "Prestations sur mesure pour copropriétés exigeantes, hôtels particuliers et immeubles avec loge.",
  },
  {
    name: "Paris 14e & 6e",
    href: "/zones/paris-14",
    description:
      "Contrats d'entretien régulier, rotation des conteneurs et interventions ponctuelles sur la rive gauche.",
  },
  {
    name: "Paris Centre & Rive Droite",
    href: "/nettoyage-copropriete-paris",
    description:
      "Intervention dans les arrondissements centraux et de l'Est parisien (2e au 13e, 18e, 19e, 20e).",
  },
];

const allArrondissements = [
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
    question: "Dans quels arrondissements de Paris (75) intervenez-vous ?",
    answer:
      "Implantés aux portes de Paris Ouest au 73 rue du Château à Boulogne-Billancourt (92100), nous intervenons quotidiennement dans les 15e, 16e, 17e, 7e, 8e, 14e et 6e arrondissements ainsi que dans l'ensemble des arrondissements parisiens pour les syndics et conseils syndicaux.",
  },
  {
    question: "Vos équipes sont-elles formées aux immeubles anciens et haussmanniens ?",
    answer:
      "Oui. Nos agents sont formés à l'entretien délicat des copropriétés parisiennes : aspiration des tapis d'escalier en laine, lavage au savon neutre des sols en pierre naturelle ou marbre, entretien des boiseries et lustrage des cuivres.",
  },
  {
    question: "Proposez-vous le remplacement de gardiens d'immeubles à Paris (75) ?",
    answer:
      "Oui. Nous mettons en place un gardien remplaçant qualifié sous 24 à 48h (catégorie A ou B) lors d'un arrêt maladie, des congés d'été ou d'une période de transition, avec passation écrite des clés, badges Vigik et consignes de la loge.",
  },
  {
    question: "Sous quel délai envoyez-vous un devis comparatif pour une Assemblée Générale ?",
    answer:
      "Après visite technique de l'immeuble parisien, nous vous remettons un devis détaillé poste par poste sous 24 à 48h, prêt à être joint à la convocation d'AG avec nos attestations à jour (RC Pro, URSSAF, Kbis).",
  },
];

const schemaParis75 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage et entretien de copropriété à Paris (75)",
      description:
        "Entreprise de nettoyage de copropriété et remplacement de gardien à Paris (75) : entretien des parties communes, immeubles haussmanniens, rotation des poubelles et devis AG.",
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

export default function Paris75Page() {
  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaParis75) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · SECTEUR PARIS (75) · DEVIS SOUS 24 À 48H
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Entretien et nettoyage de copropriété à Paris (75)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Aux portes de Paris Ouest (Boulogne-Billancourt), CoproSolutions
            accompagne les cabinets de syndics et conseils syndicaux parisiens
            pour le nettoyage régulier des parties communes, la sortie des
            poubelles et le remplacement de gardiens sous 24 à 48h.
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

          <p className="mt-5 text-sm text-slate-300">
            5 ans de direction d&apos;agence copropriétés • Zéro sous-traitance
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une organisation de proximité dédiée aux copropriétés parisiennes
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L&apos;entretien d&apos;un immeuble à <strong>Paris (75)</strong> demande
            une rigueur particulière : respect des matériaux anciens (pierre
            naturelle, marbre, parquets, tapis d&apos;escalier, cuivres), maîtrise
            des horaires stricts de collecte des ordures ménagères par
            arrondissement et discrétion absolue dans les parties communes.
          </p>

          <p>
            Implantée au{" "}
            <strong>73 rue du Château à Boulogne-Billancourt (92100)</strong>, à
            quelques minutes des <strong>15e, 16e, 17e, 7e et 8e arrondissements</strong>,{" "}
            <strong>CoproSolutions</strong> s&apos;appuie sur{" "}
            <strong>
              5 années d&apos;expérience à la direction d&apos;une agence spécialisée en
              entretien de copropriétés et remplacement de gardiens
            </strong>{" "}
            pour offrir aux gestionnaires un interlocuteur unique et réactif.
          </p>

          <p>
            Consultez également notre page détaillée consacrée à nos formules{" "}
            <Link
              href="/nettoyage-copropriete-paris"
              className="font-semibold text-blue-700 underline"
            >
              nettoyage de copropriété à Paris et devis AG sous 48h
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ENGAGEMENTS RÉSULTATS — DISCRET & ORIENTÉ SYNDIC */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-bold text-green-300">
              L&apos;EXIGENCE COPROSOLUTIONS
            </span>
            <h2 className="mt-3 text-3xl font-bold">
              Une méthodologie éprouvée pour soulager votre gestion à Paris
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Nos protocoles de suivi terrain sont présentés en détail lors de
              chaque visite technique d&apos;immeuble.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">01</div>
              <h3 className="mb-2 text-lg font-bold">Transparence sur site</h3>
              <p className="text-sm leading-6 text-slate-300">
                Un dispositif d&apos;information clair déployé dès la prise en charge
                pour rassurer les copropriétaires et limiter les appels au cabinet.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">02</div>
              <h3 className="mb-2 text-lg font-bold">Veille technique active</h3>
              <p className="text-sm leading-6 text-slate-300">
                Un circuit de communication direct avec votre gestionnaire pour
                signaler et anticiper les anomalies terrain en temps réel.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">03</div>
              <h3 className="mb-2 text-lg font-bold">Contrôle qualité incarné</h3>
              <p className="text-sm leading-6 text-slate-300">
                Des vérifications régulières sur place par le dirigeant et un
                suivi visuel systématique de nos interventions ponctuelles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">04</div>
              <h3 className="mb-2 text-lg font-bold">Relation CS apaisée</h3>
              <p className="text-sm leading-6 text-slate-300">
                Un protocole de suivi dédié avec le conseil syndical pour
                prévenir les insatisfactions et valoriser la qualité de votre gestion.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl border border-green-400/40 bg-green-500/10 px-5 py-2.5 text-sm font-bold text-green-300 transition hover:bg-green-500/20"
            >
              Découvrir notre protocole lors d&apos;une visite d&apos;immeuble →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTEURS PRIORITAIRES PARIS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos secteurs d&apos;intervention prioritaires à Paris
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Grâce à notre implantation limitrophe à Boulogne-Billancourt, nous
            assurons une réactivité optimale sur l&apos;Ouest et le Centre de Paris.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {priorityArrondissements.map((sector) => (
              <Link
                key={sector.name}
                href={sector.href}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-blue-700">
                  Nettoyage copropriété {sector.name}
                </h3>
                <p className="leading-7 text-gray-600">{sector.description}</p>
                <span className="mt-5 inline-block font-semibold text-blue-700">
                  Voir nos prestations {sector.name} →
                </span>
              </Link>
            ))}
          </div>

          {/* GRILLE TOUS ARRONDISSEMENTS */}
          <div className="mt-14">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Accès direct par arrondissement parisien
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {allArrondissements.map((arr) => (
                <Link
                  key={arr.href}
                  href={arr.href}
                  className="rounded-xl border bg-white p-3 text-center font-semibold text-blue-700 transition hover:shadow-md"
                >
                  {arr.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Questions fréquentes sur le nettoyage de copropriété à Paris (75)
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
      </section>

      {/* AUTRES SERVICES & DÉPARTEMENTS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">Nos autres prestations et secteurs</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/nettoyage-copropriete-paris"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Offre détaillée nettoyage de copropriété à Paris (Devis AG) →
            </Link>

            <Link
              href="/remplacement-gardien"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Remplacement de gardien d&apos;immeuble sous 24/48h →
            </Link>

            <Link
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Nettoyage de copropriété dans les Hauts-de-Seine (92) →
            </Link>

            <Link
              href="/travaux-exceptionnels"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Débarras d&apos;encombrants & travaux exceptionnels →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d&apos;une entreprise de nettoyage de copropriété à Paris ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l&apos;arrondissement, le nombre de lots et la fréquence
            souhaitée : nous visitons votre immeuble parisien et vous remettons un
            devis détaillé sous 24 à 48h.
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

          <p className="mt-6 text-sm text-blue-200">
            Siège social : 73 rue du Château, 92100 Boulogne-Billancourt •{" "}
            <a
              href="mailto:coprosolutions@coprosolutions.net"
              className="underline hover:text-white"
            >
              coprosolutions@coprosolutions.net
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
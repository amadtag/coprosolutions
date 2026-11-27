import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Entreprise de nettoyage de copropriété dans le 92 | CoproSolutions Boulogne",
  description:
    "Basée à Boulogne-Billancourt (92100), CoproSolutions assure le nettoyage de copropriété dans les Hauts-de-Seine (92) : halls, escaliers, poubelles, parkings et devis AG sous 24h.",
  alternates: {
    canonical: "/zones/hauts-de-seine",
  },
};

const cities = [
  {
    name: "Boulogne-Billancourt",
    href: "/zones/boulogne-billancourt",
    description:
      "Siège social au 73 rue du Château : entretien et nettoyage de copropriétés, halls et parties communes à Boulogne-Billancourt.",
  },
  {
    name: "Issy-les-Moulineaux",
    href: "/zones/hauts-de-seine/issy-les-moulineaux",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés et résidences à Issy-les-Moulineaux.",
  },
  {
    name: "Levallois-Perret",
    href: "/zones/hauts-de-seine/levallois-perret",
    description:
      "Nettoyage et entretien des copropriétés, résidences et immeubles à Levallois-Perret.",
  },
  {
    name: "Nanterre",
    href: "/zones/hauts-de-seine/nanterre",
    description:
      "Solutions d'entretien et de nettoyage pour les copropriétés et immeubles à Nanterre.",
  },
  {
    name: "Neuilly-sur-Seine",
    href: "/zones/hauts-de-seine/neuilly-sur-seine",
    description:
      "Entretien soigné des copropriétés de standing, résidences et immeubles à Neuilly-sur-Seine.",
  },
  {
    name: "Antony",
    href: "/zones/hauts-de-seine/antony",
    description:
      "Entretien et nettoyage de copropriétés, halls et parties communes à Antony.",
  },
  {
    name: "Courbevoie",
    href: "/zones/hauts-de-seine",
    description:
      "Nettoyage régulier des parties communes, parkings et locaux poubelles à Courbevoie et La Défense.",
  },
  {
    name: "Saint-Cloud",
    href: "/zones/hauts-de-seine",
    description:
      "Entretien d'immeubles, résidences arborées et copropriétés à Saint-Cloud.",
  },
  {
    name: "Bagneux",
    href: "/zones/hauts-de-seine/bagneux",
    description:
      "Prestations de nettoyage et d'entretien pour les copropriétés et immeubles à Bagneux.",
  },
  {
    name: "Châtenay-Malabry",
    href: "/zones/hauts-de-seine/chatenay-malabry",
    description:
      "Entretien des parties communes et nettoyage de copropriétés à Châtenay-Malabry.",
  },
  {
    name: "Châtillon",
    href: "/zones/hauts-de-seine/chatillon",
    description:
      "Solutions d'entretien et de nettoyage pour les copropriétés à Châtillon.",
  },
  {
    name: "Clamart",
    href: "/zones/hauts-de-seine/clamart",
    description:
      "Nettoyage et entretien des copropriétés, résidences et immeubles à Clamart.",
  },
  {
    name: "Fontenay-aux-Roses",
    href: "/zones/hauts-de-seine/fontenay-aux-roses",
    description:
      "Entretien des copropriétés et nettoyage des parties communes à Fontenay-aux-Roses.",
  },
  {
    name: "Le Plessis-Robinson",
    href: "/zones/hauts-de-seine/le-plessis-robinson",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés au Plessis-Robinson.",
  },
  {
    name: "Malakoff",
    href: "/zones/hauts-de-seine/malakoff",
    description:
      "Nettoyage et entretien des copropriétés, immeubles et parties communes à Malakoff.",
  },
  {
    name: "Meudon",
    href: "/zones/hauts-de-seine/meudon",
    description:
      "Entretien des copropriétés, résidences et parties communes à Meudon.",
  },
  {
    name: "Sèvres",
    href: "/zones/hauts-de-seine/sevres",
    description:
      "Nettoyage et entretien des copropriétés et immeubles à Sèvres.",
  },
  {
    name: "Vaucresson",
    href: "/zones/hauts-de-seine/vaucresson",
    description:
      "Prestations d'entretien et de nettoyage pour les copropriétés à Vaucresson.",
  },
];

const faqItems = [
  {
    question: "Où est située votre entreprise de nettoyage dans les Hauts-de-Seine (92) ?",
    answer:
      "Notre siège social est implanté au 73 rue du Château à Boulogne-Billancourt (92100). Cette proximité nous permet d'intervenir sous 24 à 48h dans tout le département 92 (Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Courbevoie, Saint-Cloud, Sèvres, Antony, Clamart, Meudon).",
  },
  {
    question: "Comment garantissez-vous la régularité et le suivi qualité des prestations ?",
    answer:
      "Issus de 5 années de direction d'agence spécialisée en copropriétés, nos protocoles reposent sur une transparence totale sur site, un circuit d'alerte direct avec le gestionnaire, des audits qualité réguliers réalisés par le dirigeant et un suivi relationnel dédié avec le conseil syndical.",
  },
  {
    question: "Fournissez-vous un devis comparatif pour les Assemblées Générales dans le 92 ?",
    answer:
      "Oui. Après visite de l'immeuble et étude de votre cahier des charges, nous vous transmettons un devis détaillé poste par poste sous 24 à 48h ainsi que votre dossier complet de référencement syndic (RC Pro, attestation URSSAF, Kbis).",
  },
  {
    question: "Intervenez-vous en urgence pour remplacer un gardien dans le 92 ?",
    answer:
      "Oui. Nous assurons le remplacement de gardiens d'immeubles en courte, moyenne ou longue durée sous 24 à 48h avec passation de consignes structurée (sortie des poubelles, courrier, nettoyage des parties communes et surveillance).",
  },
];

const schema92 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage et entretien de copropriété dans les Hauts-de-Seine (92)",
      description:
        "Entreprise de nettoyage de copropriété basée à Boulogne-Billancourt (92100) : entretien régulier des parties communes, rotation des poubelles, parkings et remplacement de gardiens dans le 92.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Hauts-de-Seine",
        postalCode: "92000",
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

export default function HautsDeSeinePage() {
  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema92) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · SIÈGE À BOULOGNE-BILLANCOURT (92100)
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage de copropriété dans les Hauts-de-Seine (92)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Implantée au <strong>73 rue du Château à Boulogne-Billancourt</strong>,
            CoproSolutions accompagne les syndics et conseils syndicaux du 92
            pour l&apos;entretien régulier des parties communes, la sortie des
            poubelles, le nettoyage des parkings et le remplacement de gardiens
            sous 24 à 48h.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit sous 24h
            </Link>

            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 06 58 87 65 79
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-300">
            5 ans d&apos;expertise en direction d&apos;agence copropriétés • Zéro sous-traitance
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Votre entreprise de nettoyage de copropriété de proximité dans le 92
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Basée au cœur des Hauts-de-Seine à{" "}
            <strong>Boulogne-Billancourt (73 rue du Château, 92100)</strong>,
            CoproSolutions assure le nettoyage et l&apos;entretien d&apos;immeubles
            pour les cabinets de syndics, gestionnaires immobiliers et conseils
            syndicaux du département 92.
          </p>

          <p>
            Fort d&apos;une expérience de{" "}
            <strong>
              5 années à la direction d&apos;une agence spécialisée en remplacement de
              gardiens et entretien de copropriétés
            </strong>{" "}
            (en franchise), le dirigeant encadre directement chaque résidence :
            halls d&apos;entrée, escaliers, paliers, ascenseurs, locaux poubelles et
            parkings souterrains.
          </p>

          <p>
            Vous préparez un appel d&apos;offres pour votre prochaine{" "}
            <strong>Assemblée Générale</strong> ou souhaitez remplacer un
            prestataire défaillant ? Nous visitons l&apos;immeuble et vous remettons
            un devis comparatif détaillé sous 24 à 48h.
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
              Une méthodologie éprouvée pour soulager votre gestion quotidienne
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Issus de 5 années de direction d&apos;agence spécialisée en copropriétés,
              nos protocoles de suivi sont présentés en détail lors de chaque visite
              d&apos;immeuble.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">01</div>
              <h3 className="mb-2 text-lg font-bold">
                Transparence sur site
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Un dispositif d&apos;information clair déployé dès la prise en charge
                pour rassurer les copropriétaires et limiter les appels au cabinet.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">02</div>
              <h3 className="mb-2 text-lg font-bold">
                Veille technique active
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Un circuit de communication direct avec votre gestionnaire pour
                signaler et anticiper les anomalies terrain en temps réel.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">03</div>
              <h3 className="mb-2 text-lg font-bold">
                Contrôle qualité incarné
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Des vérifications régulières sur place par le dirigeant et un
                suivi visuel systématique de nos interventions ponctuelles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">04</div>
              <h3 className="mb-2 text-lg font-bold">
                Relation CS apaisée
              </h3>
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

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos services de nettoyage et d&apos;entretien dans les Hauts-de-Seine
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des solutions d&apos;entretien adaptées aux copropriétés, résidences,
            immeubles haussmanniens ou modernes et bâtiments professionnels du 92.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parties communes
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage des halls d&apos;entrée, escaliers, paliers, couloirs,
                ascenseurs, vitrerie d&apos;accès et espaces de circulation des résidents.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Contrats annuels & devis AG
              </h3>
              <p className="leading-7 text-gray-600">
                Organisation de prestations d&apos;entretien courant selon la
                fréquence votée en AG : de 1 à 6 passages par semaine.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie et lavage des poubelles
              </h3>
              <p className="leading-7 text-gray-600">
                Sortie et rentrée des conteneurs selon les jours de collecte de
                chaque commune du 92, nettoyage et désinfection des locaux bacs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parkings & caves
              </h3>
              <p className="leading-7 text-gray-600">
                Balayage mécanisé des parkings souterrains, rampes d&apos;accès,
                locaux vélos et débarras d&apos;encombrants sous 24/48h.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage de bureaux et cabinets
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien régulier ou ponctuel des cabinets de syndics,
                agences immobilières et immeubles de bureaux dans le 92.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardiens (24/48h)
              </h3>
              <p className="leading-7 text-gray-600">
                Remplacement de courte, moyenne ou longue durée pour congés ou
                arrêts maladie avec passation de consignes rigoureuse.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Villes d&apos;intervention dans les Hauts-de-Seine (92)
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Depuis notre agence de Boulogne-Billancourt, nous intervenons
            quotidiennement dans les principales communes des Hauts-de-Seine.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="rounded-2xl bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-blue-700">
                  Nettoyage de copropriété à {city.name}
                </h3>

                <p className="leading-7 text-gray-600">{city.description}</p>

                <span className="mt-5 inline-block font-semibold text-blue-700">
                  Voir nos interventions à {city.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes sur le nettoyage de copropriété dans le 92
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

      {/* AUTRES SERVICES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Nos autres prestations copropriétés</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/nettoyage-copropriete-paris"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Nettoyage de copropriété à Paris (75) →
          </Link>

          <Link
            href="/remplacement-gardien"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Remplacement de gardien d&apos;immeuble →
          </Link>

          <Link
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Débarras d&apos;encombrants & travaux exceptionnels →
          </Link>

          <Link
            href="/entretien-bureau-immeuble"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Nettoyage de bureaux et cabinets →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d&apos;une entreprise de nettoyage de copropriété dans le 92 ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l&apos;adresse de votre résidence dans les Hauts-de-Seine
            et la fréquence souhaitée : nous organisons une visite sur site et
            vous transmettons un devis détaillé sous 24h.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit sous 24h
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
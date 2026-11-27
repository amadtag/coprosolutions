import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Boulogne-Billancourt (92100) | CoproSolutions",
  description:
    "Basée au 73 rue du Château à Boulogne-Billancourt (92100), CoproSolutions assure le nettoyage de copropriété, la sortie des poubelles et le remplacement de gardien sous 24/48h. Devis AG gratuit.",
  alternates: {
    canonical: "/zones/boulogne-billancourt",
  },
};

const faqItems = [
  {
    question: "Où est située votre agence de nettoyage à Boulogne-Billancourt ?",
    answer:
      "Notre siège social est implanté au 73 rue du Château, 92100 Boulogne-Billancourt. Cette proximité immédiate nous permet de visiter votre copropriété sous 24h et d'intervenir en urgence dans tous les quartiers boulonnais (Marcel Sembat, Billancourt, Point-du-Jour, Trapèze, Silly-Gallieni, Boulogne Nord).",
  },
  {
    question: "Proposez-vous des devis comparatifs pour les Assemblées Générales à Boulogne ?",
    answer:
      "Oui. Après visite sur site et étude de votre cahier des charges, nous vous remettons un devis détaillé poste par poste sous 24 à 48h, prêt à être présenté en Assemblée Générale, accompagné de notre dossier administratif complet (RC Pro, attestation URSSAF à jour, Kbis).",
  },
  {
    question: "Assurez-vous le remplacement de gardiens d'immeubles à Boulogne-Billancourt ?",
    answer:
      "Oui. Nous mettons en place un gardien remplaçant qualifié sous 24 à 48h (arrêt maladie, congés d'été, période de transition) avec passation écrite des clés, badges Vigik et consignes de la résidence, sans aucune sous-traitance.",
  },
  {
    question: "Comment gérez-vous la sortie des poubelles dans les rues de Boulogne-Billancourt ?",
    answer:
      "Nous organisons la rotation des bacs (ordures ménagères, tri sélectif, verre) selon les jours et horaires de collecte propres à chaque secteur de Boulogne-Billancourt, ainsi que le lavage et la désinfection régulière des locaux poubelles.",
  },
];

const boulogneSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.coprosolutions.net/#organization",
      name: "CoproSolutions",
      description:
        "Entreprise de nettoyage de copropriété et remplacement de gardien d'immeuble basée à Boulogne-Billancourt (92100).",
      telephone: "+33658876579",
      email: "coprosolutions@coprosolutions.net",
      address: {
        "@type": "PostalAddress",
        streetAddress: "73 rue du Château",
        addressLocality: "Boulogne-Billancourt",
        postalCode: "92100",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "City",
        name: "Boulogne-Billancourt",
        postalCode: "92100",
      },
    },
    {
      "@type": "Service",
      name: "Nettoyage et entretien de copropriété à Boulogne-Billancourt (92100)",
      description:
        "Entretien régulier des parties communes, sortie des poubelles, nettoyage des parkings et remplacement de gardiens à Boulogne-Billancourt.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Boulogne-Billancourt",
        postalCode: "92100",
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

export default function BoulogneBillancourtPage() {
  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boulogneSchema) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · 73 RUE DU CHÂTEAU, 92100 BOULOGNE-BILLANCOURT
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage et entretien de copropriété à Boulogne-Billancourt (92100)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Implantée au cœur de Boulogne-Billancourt, CoproSolutions accompagne
            les syndics et conseils syndicaux boulonnais pour l&apos;entretien
            régulier des parties communes, la sortie des poubelles et le
            remplacement de gardiens sous 24 à 48h.
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
            Entreprise locale boulonnaise • 5 ans de direction d&apos;agence copropriétés • Zéro sous-traitance
          </p>
        </div>
      </section>

      {/* INTRODUCTION LOCALE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Votre entreprise de nettoyage de copropriété à Boulogne-Billancourt
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Basée au <strong>73 rue du Château à Boulogne-Billancourt (92100)</strong>,{" "}
            <strong>CoproSolutions</strong> intervient quotidiennement dans tous
            les quartiers de la commune : <strong>Boulogne Nord / Roland-Garros</strong>,{" "}
            <strong>Marcel Sembat</strong>, <strong>Silly-Gallieni</strong>,{" "}
            <strong>Point-du-Jour</strong>, <strong>Billancourt</strong> et le{" "}
            <strong>Trapèze / Rives de Seine</strong>.
          </p>

          <p>
            Fort de{" "}
            <strong>
              5 années d&apos;expérience à la direction d&apos;une agence spécialisée en
              entretien de copropriétés et remplacement de gardiens
            </strong>
            , le dirigeant supervise personnellement la mise en place et le suivi
            qualité de chaque immeuble boulonnais, sans aucun recours à la
            sous-traitance.
          </p>

          <p>
            Immeuble ancien en pierre de taille, résidence des années 1970 avec
            jardins intérieurs ou copropriété récente BBC : nous calibrons un
            cahier des charges précis et vous remettons un{" "}
            <strong>devis comparatif AG sous 24 à 48h</strong>.
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
              Nos protocoles de suivi terrain sont présentés en détail lors de
              chaque visite d&apos;immeuble à Boulogne-Billancourt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-2xl font-black text-green-400">01</div>
              <h3 className="mb-2 text-lg font-bold">Transparence sur site</h3>
              <p className="text-sm leading-6 text-slate-300">
                Un dispositif d&apos;information clair déployé dès le démarrage pour
                rassurer les résidents et limiter les appels au cabinet de syndic.
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
                Des passages de contrôle réguliers sur place par le dirigeant et un
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
              Planifier une visite d&apos;immeuble à Boulogne-Billancourt →
            </Link>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations d&apos;entretien d&apos;immeubles à Boulogne-Billancourt
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des contrats annuels sur mesure ou des interventions ponctuelles pour
            les copropriétés, résidences et cabinets professionnels du 92100.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Halls d&apos;entrée & parties communes
              </h3>
              <p className="leading-7 text-gray-600">
                Lavage des sols (marbre, pierre, carrelage), nettoyage des portes
                vitrées, miroirs, boîtes aux lettres, digicodes et cuivres.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Escaliers, tapis & ascenseurs
              </h3>
              <p className="leading-7 text-gray-600">
                Aspiration des tapis d&apos;escalier, lavage des paliers,
                dépoussiérage des rampes et nettoyage complet des cabines d&apos;ascenseur.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie & lavage des poubelles
              </h3>
              <p className="leading-7 text-gray-600">
                Rotation des conteneurs selon les jours de collecte de
                Boulogne-Billancourt, lavage et désinfection des locaux bacs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardien (24/48h)
              </h3>
              <p className="leading-7 text-gray-600">
                Intervention immédiate depuis notre agence du 73 rue du Château
                en cas d&apos;arrêt maladie ou congés, avec passation écrite des clés.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Parkings, caves & encombrants
              </h3>
              <p className="leading-7 text-gray-600">
                Balayage mécanisé des parkings souterrains, entretien des cours et
                évacuation rapide des encombrants avec photos avant/après.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Entretien de cabinets & bureaux
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage régulier des cabinets de syndics, agences immobilières
                et locaux professionnels à Boulogne-Billancourt.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une organisation calibrée selon la taille de votre résidence
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Petites copropriétés
            </h3>
            <p className="leading-7 text-gray-600">
              1 à 2 passages par semaine adaptés aux immeubles de centre-ville
              (10 à 25 lots) pour maîtriser les charges de copropriété.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Résidences intermédiaires
            </h3>
            <p className="leading-7 text-gray-600">
              3 à 6 passages par semaine incluant la sortie et rentrée des
              poubelles, l&apos;entretien des accès et des locaux communs.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Grands ensembles & gardiennage
            </h3>
            <p className="leading-7 text-gray-600">
              Renfort d&apos;équipe, remplacement de gardien titulaire et travaux
              périodiques (vitrerie, moquettes, parkings).
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes — Nettoyage de copropriété à Boulogne-Billancourt
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

      {/* SECTEURS PROCHES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">
          Communes limitrophes desservies depuis Boulogne-Billancourt
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Depuis le 73 rue du Château, nos équipes interviennent également en
          quelques minutes dans les communes voisines :
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/zones/hauts-de-seine"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Hauts-de-Seine (92) →
          </Link>

          <Link
            href="/zones/hauts-de-seine/issy-les-moulineaux"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Issy-les-Moulineaux →
          </Link>

          <Link
            href="/zones/hauts-de-seine/sevres"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Sèvres →
          </Link>

          <Link
            href="/zones/paris-16"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Paris 16e →
          </Link>

          <Link
            href="/zones/paris-15"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Paris 15e →
          </Link>

          <Link
            href="/zones/paris-75"
            className="rounded-xl border bg-slate-50 px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
          >
            Paris (75) →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/remplacement-gardien"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Remplacement de gardien d&apos;immeuble sous 24/48h →
          </Link>

          <Link
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Débarras d&apos;encombrants & travaux exceptionnels →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d&apos;un devis d&apos;entretien à Boulogne-Billancourt ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l&apos;adresse de votre copropriété à Boulogne-Billancourt
            et la fréquence souhaitée : nous passons visiter l&apos;immeuble et vous
            remettons un devis détaillé sous 24h.
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
            Agence locale : 73 rue du Château, 92100 Boulogne-Billancourt •{" "}
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
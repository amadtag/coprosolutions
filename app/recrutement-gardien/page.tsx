import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recrutement de gardien d'immeuble à Paris & Île-de-France (CDI / CDD)",
  description:
    "Accompagnement des syndics et conseils syndicaux pour le recrutement de gardiens d'immeuble (catégories A et B) à Paris, Hauts-de-Seine (92) et Yvelines (78) : présélection et contrôle des références.",
  alternates: {
    canonical: "/recrutement-gardien",
  },
};

const faqItems = [
  {
    question: "Comment sélectionnez-vous les candidats au poste de gardien d'immeuble ?",
    answer:
      "Chaque candidat est reçu en entretien individuel pour évaluer sa maîtrise des tâches d'entretien, sa présentation, son sens du relationnel avec les résidents et sa connaissance des règles de sécurité d'un immeuble. Nous vérifions systématiquement ses références auprès d'anciens employeurs ou syndics.",
  },
  {
    question: "Pouvez-vous assurer l'intérim pendant la période de recrutement ?",
    answer:
      "Oui. C'est l'un de nos points forts : pendant que nous sélectionnons le futur gardien titulaire pour votre copropriété, nos équipes assurent le remplacement sur site sans interruption de service.",
  },
  {
    question: "Recrutez-vous aussi bien des employés d'immeuble (catégorie A) que des gardiens logés (catégorie B) ?",
    answer:
      "Oui, nous définissons avec le gestionnaire et le conseil syndical la fiche de poste précise selon la configuration de la résidence (avec ou sans loge, unités de valeur, amplitude horaire, sorties de bacs).",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Recrutement de gardien d'immeuble et employé d'immeuble",
      description:
        "Présélection, vérification des références et mise en relation de gardiens d'immeuble qualifiés pour les copropriétés à Paris et en Île-de-France.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: ["Paris", "Hauts-de-Seine", "Yvelines", "Val-de-Marne", "Île-de-France"],
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

export default function RecrutementGardienPage() {
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
            COPROSOLUTIONS • RECRUTEMENT & SÉLECTION TERRAIN
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Recrutement de gardien d’immeuble à Paris et en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Départ à la retraite, création de poste ou remplacement définitif :
            nous aidons les syndics et conseils syndicaux à recruter un gardien
            ou employé d’immeuble fiable, expérimenté et adapté au standing de
            leur copropriété.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Confier une recherche de gardien
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
          Sécuriser l’embauche d’un gardien durable pour votre copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Le recrutement d’un gardien d’immeuble est une décision structurante
            pour une copropriété. Au-delà de la qualité du ménage et de la
            ponctualité sur les sorties de poubelles, le gardien incarne le
            lien quotidien avec les copropriétaires, les locataires et les
            entreprises intervenantes.
          </p>

          <p>
            Grâce à notre <strong>expertise terrain de la gestion d’immeubles
            en Île-de-France</strong>, nous faisons gagner un temps précieux aux
            gestionnaires en présélectionnant uniquement des profils opérationnels,
            dont les références et la rigueur ont été contrôlées en amont.
          </p>
        </div>
      </section>

      {/* MÉTHODE DE SÉLECTION */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Notre processus de sélection en 4 étapes
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Une démarche structurée pour présenter au syndic et au conseil
            syndical une short-list de candidats pertinents.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-2 text-2xl font-black text-green-600">01</div>
              <h3 className="mb-3 text-lg font-bold text-blue-900">
                Audit du poste & de la loge
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Analyse du nombre de lots, des tâches exactes (catégorie A ou B),
                des contraintes horaires et de l’état de la loge éventuelle.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-2 text-2xl font-black text-green-600">02</div>
              <h3 className="mb-3 text-lg font-bold text-blue-900">
                Entretiens & tests métier
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Vérification des compétences techniques (entretien des matériaux,
                gestion des bacs, tenue des registres, accueil des prestataires).
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-2 text-2xl font-black text-green-600">03</div>
              <h3 className="mb-3 text-lg font-bold text-blue-900">
                Contrôle des références
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Prise de contact systématique avec les précédents syndics ou
                employeurs pour valider la fiabilité et le savoir-être du candidat.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-2 text-2xl font-black text-green-600">04</div>
              <h3 className="mb-3 text-lg font-bold text-blue-900">
                Présentation & prise de poste
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Organisation des entretiens finaux avec le gestionnaire et le
                conseil syndical, et accompagnement lors de la passation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RECRUTEMENT VS REMPLACEMENT */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Transition sécurisée : assurez la continuité pendant le recrutement
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Recruter le bon gardien prend généralement plusieurs semaines. Pour
            éviter que l’immeuble ne reste sans entretien ni gestion des poubelles
            durant cette période, CoproSolutions met en place un{" "}
            <Link href="/remplacement-gardien" className="font-bold text-blue-700 underline">
              remplacement de gardien temporaire sous 24 à 48h
            </Link>{" "}
            jusqu’à l’arrivée officielle de votre nouveau salarié.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes — Recrutement de gardien
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

      {/* ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Secteurs couverts en Île-de-France
        </h2>

        <div className="flex flex-wrap gap-3">
          <Link href="/zones/paris-75" className="rounded-xl border px-5 py-3 font-semibold text-blue-700 hover:shadow-md">
            Paris (75) →
          </Link>
          <Link href="/zones/hauts-de-seine" className="rounded-xl border px-5 py-3 font-semibold text-blue-700 hover:shadow-md">
            Hauts-de-Seine (92) →
          </Link>
          <Link href="/zones/boulogne-billancourt" className="rounded-xl border px-5 py-3 font-semibold text-blue-700 hover:shadow-md">
            Boulogne-Billancourt →
          </Link>
          <Link href="/zones/yvelines" className="rounded-xl border px-5 py-3 font-semibold text-blue-700 hover:shadow-md">
            Yvelines (78) →
          </Link>
          <Link href="/zones/val-de-marne" className="rounded-xl border px-5 py-3 font-semibold text-blue-700 hover:shadow-md">
            Val-de-Marne (94) →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Vous recherchez un gardien pour votre copropriété ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Présentez-nous votre résidence, les missions prévues et vos
            critères : nous vous recontactons sous 24h.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Présenter votre besoin
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
    </div>
  );
}

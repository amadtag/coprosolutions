import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettoyage de bureaux & cabinets professionnels (Paris, 92, 78)",
  description:
    "Entreprise de nettoyage de bureaux, cabinets de syndics, agences immobilières et locaux tertiaires à Paris, Boulogne-Billancourt, Levallois-Perret et Neuilly-sur-Seine. Devis sous 24h.",
  alternates: {
    canonical: "/entretien-bureau-immeuble",
  },
};

const faqItems = [
  {
    question: "Intervenez-vous en dehors des heures d'ouverture des bureaux ?",
    answer:
      "Oui. Nos agents interviennent tôt le matin avant l'arrivée de vos équipes, en soirée après la fermeture ou le week-end selon les contraintes d'accès et de confidentialité de votre entreprise.",
  },
  {
    question: "Entretenez-vous les cabinets de syndics et agences immobilières ?",
    answer:
      "Oui, c'est l'une de nos spécialités. Nous assurons l'entretien régulier des cabinets d'administration de biens, agences immobilières, études notariales et cabinets médicaux ou juridiques à Paris et dans les Hauts-de-Seine.",
  },
  {
    question: "Proposez-vous des prestations ponctuelles (fin de bail, après travaux, vitrerie) ?",
    answer:
      "Tout à fait. En complément des contrats hebdomadaires ou quotidiens, nous réalisons des remises en état avant état des lieux de sortie, nettoyages après travaux et lavages de vitres ou vitrines.",
  },
  {
    question: "Quelles villes couvrez-vous pour le nettoyage de bureaux ?",
    answer:
      "Basés à Boulogne-Billancourt (92100), nous intervenons rapidement sur tout l'axe tertiaire Ouest : Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Courbevoie, La Défense et tous les arrondissements de Paris.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage de bureaux et locaux professionnels en Île-de-France",
      description:
        "Entretien régulier ou ponctuel de bureaux, cabinets de syndics, agences immobilières et immeubles tertiaires à Paris et dans les Hauts-de-Seine.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: [
        "Paris",
        "Boulogne-Billancourt",
        "Levallois-Perret",
        "Neuilly-sur-Seine",
        "Issy-les-Moulineaux",
        "Courbevoie",
        "Hauts-de-Seine",
        "Yvelines",
      ],
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

export default function EntretienBureauImmeuble() {
  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS • BUREAUX & LOCAUX PROFESSIONNELS
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nettoyage de bureaux à Paris et dans les Hauts-de-Seine (92)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Cabinets de syndics, agences immobilières, professions libérales et
            immeubles tertiaires : CoproSolutions assure l’entretien régulier ou
            ponctuel de vos espaces professionnels sans sous-traitance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis sous 24h
            </Link>

            <a
              href="tel:+33658876579"
              className="rounded-xl border border-white px-6 py-3 font-bold hover:bg-white hover:text-slate-900"
            >
              📞 06 58 87 65 79
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Un cadre de travail impeccable pour vos équipes et vos clients
        </h2>

        <p className="mb-5 text-lg leading-8 text-gray-600">
          La propreté de vos locaux professionnels reflète directement le
          sérieux de votre entreprise auprès de vos visiteurs et améliore le
          bien-être quotidien de vos collaborateurs.
        </p>

        <p className="mb-5 text-lg leading-8 text-gray-600">
          Implantée au <strong>73 rue du Château à Boulogne-Billancourt</strong>,
          CoproSolutions accompagne les PME, cabinets d’administration de biens,
          agences immobilières et gestionnaires d’immeubles tertiaires à Paris
          et dans l’Ouest parisien avec un interlocuteur unique et des agents
          salariés formés à la discrétion.
        </p>

        <p className="text-lg leading-8 text-gray-600">
          Nous adaptons nos passages à votre rythme d’activité (avant ouverture,
          en soirée ou le week-end) et assurons un contrôle qualité régulier
          sur site.
        </p>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations d’entretien de bureaux
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
            Un cahier des charges sur mesure défini après visite de vos locaux.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Postes de travail & open-spaces
              </h3>
              <p className="leading-7 text-gray-600">
                Dépoussiérage humide des bureaux, écrans, téléphones, piètements,
                rebords de fenêtres et vidage des corbeilles avec tri sélectif.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sols, moquettes & circulations
              </h3>
              <p className="leading-7 text-gray-600">
                Aspiration des moquettes, lavage mécanisé ou manuel des parquets,
                carrelages, escaliers et couloirs d’accès.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sanitaires & espaces détente
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage et désinfection approfondie des sanitaires, cuisines,
                coins café, et réapprovisionnement des consommables (savon,
                essuie-mains, papier).
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Accueil & salles de réunion
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien soigné des banques d’accueil, salles de conseil,
                cloisons vitrées intérieures et poignées de porte.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Vitrerie & vitrines d’agence
              </h3>
              <p className="leading-7 text-gray-600">
                Lavage régulier ou ponctuel des vitrines sur rue, portes
                vitrées et fenêtres accessibles.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remise en état & fin de bail
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage approfondi après travaux d’aménagement, déménagement
                ou avant état des lieux avec rapport photo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES DE LOCAUX */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Locaux professionnels pris en charge
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Cabinets de syndics et administrateurs de biens",
            "Agences immobilières et vitrines commerciales",
            "Bureaux d’entreprises et open-spaces",
            "Cabinets médicaux, paramédicaux et juridiques",
            "Immeubles tertiaires et parties communes mixtes",
            "Salles de réunion, showrooms et espaces d’accueil",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-slate-50 p-4 font-medium"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Nettoyage de bureaux à Boulogne-Billancourt, Levallois-Perret,
            Neuilly-sur-Seine et Paris
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            Notre proximité géographique avec les principaux pôles tertiaires
            de l’Ouest parisien nous permet d’assurer une réactivité immédiate
            et des remplacements garantis en cas d’absence de l’agent attitré.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/zones/boulogne-billancourt"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Boulogne-Billancourt →
            </Link>
            <Link
              href="/zones/hauts-de-seine/levallois-perret"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Levallois-Perret →
            </Link>
            <Link
              href="/zones/hauts-de-seine/neuilly-sur-seine"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Neuilly-sur-Seine →
            </Link>
            <Link
              href="/zones/hauts-de-seine/issy-les-moulineaux"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Issy-les-Moulineaux →
            </Link>
            <Link
              href="/zones/hauts-de-seine/courbevoie"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Courbevoie / La Défense →
            </Link>
            <Link
              href="/zones/paris-75"
              className="rounded-full border bg-white px-5 py-2 font-semibold text-blue-700 hover:bg-slate-100"
            >
              Paris (75) →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Questions fréquentes sur le nettoyage de bureaux
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                {item.question}
              </summary>
              <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/nettoyage-copropriete-paris"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Entretien des parties communes de copropriété →
          </Link>
          <Link
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Remise en état après travaux & shampouinage moquettes →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Demandez votre devis nettoyage de bureaux sous 24h
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez la surface de vos locaux, votre ville et le nombre de
            passages souhaités : nous organisons une visite rapide sur site.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-7 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis gratuit
            </Link>

            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-7 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 06 58 87 65 79
            </a>
          </div>

          <p className="mt-6 text-sm text-blue-200">
            Email : coprosolutions@coprosolutions.net
          </p>
        </div>
      </section>
    </div>
  );
}

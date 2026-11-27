import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débarras d'encombrants, nettoyage parking & remise en état copropriété",
  description:
    "Interventions ponctuelles en copropriété à Paris et Île-de-France : débarras de caves et encombrants, nettoyage après sinistre ou travaux, lavage parking et compte-rendu photo sous 24h.",
  alternates: {
    canonical: "/travaux-exceptionnels",
  },
};

const faqItems = [
  {
    question: "Fournissez-vous un compte-rendu photo après un débarras ou un nettoyage ponctuel ?",
    answer:
      "Oui, systématiquement. Avant et après chaque intervention (débarras de cave, évacuation d'encombrants, nettoyage après dégât des eaux ou lavage de parking), nous transmettons au gestionnaire et au conseil syndical un rapport photo horodaté.",
  },
  {
    question: "En combien de temps intervenez-vous pour un débarras urgent en copropriété ?",
    answer:
      "Nous chiffrons votre demande sous 24h (sur photos ou visite rapide sur site) et intervenons sous 24 à 72h sur Paris (75), les Hauts-de-Seine (92), les Yvelines (78) et le Val-de-Marne (94), avec évacuation en déchetterie professionnelle agréée.",
  },
  {
    question: "Peut-on commander une prestation ponctuelle sans contrat annuel avec CoproSolutions ?",
    answer:
      "Tout à fait. Nos travaux exceptionnels sont accessibles à la carte pour tous les syndics et conseils syndicaux, même si l'entretien courant de votre immeuble est assuré par un gardien ou un autre prestataire.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Débarras d'encombrants et travaux exceptionnels en copropriété",
      description:
        "Débarras de caves et parkings, remise en état après dégât des eaux ou travaux, lavage haute pression et shampouinage moquettes en Île-de-France.",
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

export default function TravauxExceptionnels() {
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
            COPROSOLUTIONS • INTERVENTIONS PONCTUELLES SOUS 24 À 72H
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Débarras d’encombrants & travaux exceptionnels en copropriété
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Évacuation rapide des caves et parkings, remise en état après dégât
            des eaux ou chantier, lavage haute pression et shampouinage de moquettes
            à Paris et en Île-de-France avec compte-rendu photo avant/après.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Chiffrer une intervention sous 24h
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
          Des opérations ponctuelles réactives pour les gestionnaires de copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Dans la vie d’un immeuble, certaines situations exigent une intervention
            rapide en dehors du contrat de ménage courant : encombrants abandonnés
            dans les couloirs de caves, local poubelles saturé, dégât des eaux,
            fin de chantier ou nettoyage annuel d’un parking souterrain.
          </p>

          <p>
            Basée à Boulogne-Billancourt (92), <strong>CoproSolutions</strong> intervient
            à la carte sur tout Paris et l’Ouest parisien. Pour chaque prestation,
            le gestionnaire reçoit un <strong>chiffrage clair sous 24h</strong> et un{" "}
            <strong>compte-rendu photo avant/après</strong> directement transmissible
            au conseil syndical.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations exceptionnelles à la carte
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des moyens matériels adaptés (utilitaires grand volume, monobrosse,
            injecteur-extracteur, nettoyeur haute pression) et évacuation en centre
            de tri agréé.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Débarras de caves & encombrants
              </h3>
              <p className="leading-7 text-gray-600">
                Évacuation rapide des dépôts sauvages dans les parties communes,
                couloirs de caves, locaux vélos, greniers et locaux poubelles avec
                mise en déchetterie professionnelle.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage après sinistre & dégât des eaux
              </h3>
              <p className="leading-7 text-gray-600">
                Assèchement, déblaiement, lessivage et désinfection des halls,
                cages d’escaliers ou sous-sols après fuite, refoulement ou fin de
                travaux.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Lavage des parkings souterrains
              </h3>
              <p className="leading-7 text-gray-600">
                Dégraissage et lavage mécanisé des rampes d’accès, allées de
                circulation, emplacements et portes coupe-feu.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Shampouinage des moquettes & tapis
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage en profondeur par injection-extraction des tapis
                d’escalier et moquettes de paliers pour éliminer taches et
                acariens.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Lavage haute pression cours & façades basses
              </h3>
              <p className="leading-7 text-gray-600">
                Démoussage et décrassage des cours pavées, passages cochers,
                terrasses communes et murets d’enceinte.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Vitrerie & petites remises en état
              </h3>
              <p className="leading-7 text-gray-600">
                Nettoyage de printemps/automne des verrières, cages d’escalier
                vitrées, retouches peinture et remise en propreté avant AG ou
                vente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ORGANISATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Une organisation simple en 3 étapes pour le syndic
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border p-6">
            <div className="mb-2 text-2xl font-black text-green-600">01</div>
            <h3 className="mb-3 text-xl font-bold">Devis sur photos ou visite</h3>
            <p className="leading-7 text-gray-600">
              Envoyez-nous quelques photos par email ou WhatsApp (ou planifions
              une visite sur place) : vous recevez votre devis ferme sous 24h.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <div className="mb-2 text-2xl font-black text-green-600">02</div>
            <h3 className="mb-3 text-xl font-bold">Intervention planifiée</h3>
            <p className="leading-7 text-gray-600">
              Nos équipes interviennent aux créneaux convenus dans le respect des
              résidents et des règles de sécurité de l’immeuble.
            </p>
          </article>

          <article className="rounded-2xl border p-6">
            <div className="mb-2 text-2xl font-black text-green-600">03</div>
            <h3 className="mb-3 text-xl font-bold">Rapport photo avant / après</h3>
            <p className="leading-7 text-gray-600">
              Dès la fin du chantier, vous recevez les photos attestant de la
              remise en état complète des lieux.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes — Travaux exceptionnels & débarras
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

      {/* MAILLAGE SERVICES & ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Nos services et zones d’intervention
        </h2>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Link href="/nettoyage-copropriete-paris" className="rounded-xl border bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Entretien annuel de copropriétés à Paris →
          </Link>
          <Link href="/remplacement-gardien" className="rounded-xl border bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Remplacement de gardien d’immeuble sous 48h →
          </Link>
          <Link href="/entretien-bureau-immeuble" className="rounded-xl border bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Nettoyage de bureaux et cabinets de syndics →
          </Link>
          <Link href="/services" className="rounded-xl border bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Toutes nos prestations copropriétés →
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/zones/paris-75" className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md">
            Paris (75)
          </Link>
          <Link href="/zones/hauts-de-seine" className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md">
            Hauts-de-Seine (92)
          </Link>
          <Link href="/zones/boulogne-billancourt" className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md">
            Boulogne-Billancourt
          </Link>
          <Link href="/zones/yvelines" className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md">
            Yvelines (78)
          </Link>
          <Link href="/zones/val-de-marne" className="rounded-xl border px-5 py-3 font-semibold hover:shadow-md">
            Val-de-Marne (94)
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d’un débarras ou d’une remise en état rapide ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Décrivez-nous votre besoin ou envoyez-nous vos photos : vous recevez
            notre devis sous 24h.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
    </div>
  );
}

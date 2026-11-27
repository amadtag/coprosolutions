import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos services : entretien de copropriétés, remplacement de gardien & débarras",
  description:
    "Découvrez les services CoproSolutions à Paris et en Île-de-France : nettoyage d'immeubles, remplacement de gardiens sous 48h, débarras d'encombrants, rotation poubelles et entretien de bureaux.",
  alternates: {
    canonical: "/services",
  },
};

const faqItems = [
  {
    question: "Proposez-vous des devis comparatifs pour les Assemblées Générales de copropriété ?",
    answer:
      "Oui. Après visite technique sur site ou étude de votre cahier des charges, nous remettons sous 48h un devis détaillé par poste et fréquence, accompagné de notre dossier administratif (RC Pro, attestation URSSAF, Kbis).",
  },
  {
    question: "Comment garantissez-vous la qualité des prestations au quotidien ?",
    answer:
      "Nous appliquons une méthode terrain en 4 points : zéro sous-traitance, affichage visible du cahier des charges dans l'immeuble, contrôles qualité réguliers par le dirigeant et compte-rendu photo systématique sur les interventions ponctuelles.",
  },
  {
    question: "Peut-on cumuler contrat d'entretien annuel et remplacement de gardien ?",
    answer:
      "Oui. Nous accompagnons les syndics aussi bien sur les contrats annuels d'entretien d'immeubles sans gardien que sur le remplacement de gardiens logés ou employés d'immeuble pendant leurs congés ou arrêts maladie.",
  },
];

const servicesCatalogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Services d'entretien de copropriétés et remplacement de gardiens CoproSolutions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Entretien et nettoyage de copropriétés",
          url: "https://www.coprosolutions.net/nettoyage-copropriete-paris",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Remplacement de gardien d'immeuble sous 24 à 48h",
          url: "https://www.coprosolutions.net/remplacement-gardien",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Débarras d'encombrants et travaux exceptionnels",
          url: "https://www.coprosolutions.net/travaux-exceptionnels",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Recrutement de gardien d'immeuble",
          url: "https://www.coprosolutions.net/recrutement-gardien",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Nettoyage de bureaux et cabinets professionnels",
          url: "https://www.coprosolutions.net/entretien-bureau-immeuble",
        },
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

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCatalogSchema) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS • PARIS (75) • HAUTS-DE-SEINE (92) • YVELINES (78)
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Nos services pour copropriétés, immeubles et bureaux
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Implantée à Boulogne-Billancourt, CoproSolutions accompagne les
            syndics, conseils syndicaux et gestionnaires immobiliers avec une
            offre complète : contrats d’entretien annuel, remplacement de
            gardiens sous 48h et interventions ponctuelles avec suivi photo.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 06 58 87 65 79
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Demander un devis sous 24h
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Un partenaire unique pour la propreté et la continuité de service de vos immeubles
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Gérer l’entretien d’un portefeuille de copropriétés demande des
            prestataires fiables, réactifs et transparents. Chez{" "}
            <strong>CoproSolutions</strong>, chaque prestation repose sur un
            cahier des charges affiché sur site, des équipes salariées en
            interne (<strong>zéro sous-traitance</strong>) et un pilotage direct
            par le dirigeant.
          </p>

          <p>
            Que vous prépariez un appel d’offres pour une prochaine Assemblée
            Générale, que vous deviez pallier l’arrêt maladie d’un gardien au
            pied levé ou évacuer des encombrants en cave, nous chiffrons votre
            besoin sous 24 à 48h.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos 6 pôles d’intervention
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
            Des prestations modulables, en contrat annuel ou à la carte, pour
            les résidences d’habitation et immeubles tertiaires.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Entretien copropriété */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Entretien et nettoyage de copropriétés
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Contrats d’entretien régulier des parties communes adaptés aux
                immeubles haussmanniens et résidences modernes (1 à 6 passages
                par semaine).
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Nettoyage des halls d’entrée, marbres, miroirs et cuivres</li>
                <li>Aspiration des tapis, lavage des escaliers et paliers</li>
                <li>Entretien des cabines d’ascenseurs et rails paliers</li>
                <li>Lavage et désinfection des locaux poubelles</li>
                <li>Balayage des cours intérieures et parkings</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/nettoyage-copropriete-paris"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Nettoyage copropriété Paris →
                </Link>
                <Link
                  href="/entretien-copropriété-idf"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Entretien copropriété Île-de-France →
                </Link>
              </div>
            </article>

            {/* Remplacement gardien */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Remplacement de gardiens d’immeuble
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Mise en place sous 24 à 48h d’un gardien remplaçant qualifié
                avec passation écrite des clés, badges Vigik et consignes de la
                loge.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Urgence arrêt maladie ou indisponibilité imprévue</li>
                <li>Congés d’été et fêtes de fin d’année</li>
                <li>Remplacement longue durée (maternité, transition)</li>
                <li>Tenue de loge, courrier/colis, ménage et poubelles</li>
                <li>Formule allégée (poubelles + parties communes)</li>
              </ul>

              <Link
                href="/remplacement-gardien"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Découvrir le remplacement de gardien →
              </Link>
            </article>

            {/* Débarras & Travaux exceptionnels */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Débarras d’encombrants & travaux exceptionnels
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Interventions ponctuelles rapides avec compte-rendu photo
                avant/après systématique et évacuation en déchetterie agréée.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Débarras de caves, parkings et locaux poubelles</li>
                <li>Remise en état après dégât des eaux ou travaux</li>
                <li>Lavage haute pression des cours et parkings</li>
                <li>Shampouinage des tapis d’escalier et moquettes</li>
                <li>Nettoyage des verrières et vitreries en hauteur</li>
              </ul>

              <Link
                href="/travaux-exceptionnels"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Découvrir les travaux exceptionnels →
              </Link>
            </article>

            {/* Bureaux */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Entretien de bureaux & cabinets de syndics
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Prestations calibrées pour les cabinets d’administration de
                biens, agences immobilières, professions libérales et immeubles
                tertiaires.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Entretien des postes de travail et salles de réunion</li>
                <li>Désinfection des sanitaires et espaces cuisine</li>
                <li>Nettoyage des halls d’accueil et vitrines</li>
                <li>Passages tôt le matin ou en soirée</li>
              </ul>

              <Link
                href="/entretien-bureau-immeuble"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Voir le service nettoyage de bureaux →
              </Link>
            </article>

            {/* Poubelles */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Sortie et rentrée des poubelles
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Rotation rigoureuse des conteneurs selon les horaires de
                collecte municipale pour éviter tout débordement ou amende de
                voirie.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Sortie et rentrée des bacs (OM, tri sélectif, verre)</li>
                <li>Nettoyage et désodorisation des locaux conteneurs</li>
                <li>Gestion des cartons et encombrants légers</li>
              </ul>

              <Link
                href="/sortie-et-rentrée-poubelle"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                En savoir plus sur la rotation des bacs →
              </Link>
            </article>

            {/* Recrutement gardien */}
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-blue-700">
                Recrutement de gardien d’immeuble
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Sélection, contrôle des références et présentation de candidats
                qualifiés (catégories A et B) pour vos recrutements durables.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Définition de la fiche de poste avec le syndic</li>
                <li>Entretiens métier et vérification des références</li>
                <li>Continuité assurée par remplacement pendant le recrutement</li>
              </ul>

              <Link
                href="/recrutement-gardien"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Découvrir le recrutement de gardien →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Questions fréquentes des syndics et conseils syndicaux
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
      </section>

      {/* ZONES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Nos zones d’intervention en Île-de-France
          </h2>

          <p className="mx-auto mb-8 max-w-3xl leading-7 text-gray-600">
            Basée au 73 rue du Château à Boulogne-Billancourt (92100), notre
            équipe couvre Paris, les Hauts-de-Seine, les Yvelines et le
            Val-de-Marne.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zones/paris-75"
              className="rounded-xl border bg-white px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
            >
              Paris (75) →
            </Link>

            <Link
              href="/zones/hauts-de-seine"
              className="rounded-xl border bg-white px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
            >
              Hauts-de-Seine (92) →
            </Link>

            <Link
              href="/zones/boulogne-billancourt"
              className="rounded-xl border bg-white px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
            >
              Boulogne-Billancourt →
            </Link>

            <Link
              href="/zones/yvelines"
              className="rounded-xl border bg-white px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
            >
              Yvelines (78) →
            </Link>

            <Link
              href="/zones/val-de-marne"
              className="rounded-xl border bg-white px-5 py-3 font-semibold text-blue-700 hover:shadow-md"
            >
              Val-de-Marne (94) →
            </Link>
          </div>

          <Link
            href="/zones"
            className="mt-8 inline-block font-semibold text-blue-700 hover:underline"
          >
            Voir la liste complète de nos 50+ villes d’intervention →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d’un devis comparatif AG ou d’une intervention urgente ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Dossier administratif complet prêt (RC Pro, URSSAF, Kbis) — réponse
            chiffrée sous 24 à 48h.
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
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-900"
            >
              📞 06 58 87 65 79
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

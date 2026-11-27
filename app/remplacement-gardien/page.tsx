import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remplacement de gardien d'immeuble sous 24 à 48h (Paris, 92, 78)",
  description:
    "Remplacement de gardien d'immeuble et concierge en copropriété à Paris et en Île-de-France : arrêt maladie, congés d'été, passation de clés et suivi qualité terrain sans sous-traitance.",
  alternates: {
    canonical: "/remplacement-gardien",
  },
};

const faqItems = [
  {
    question: "En combien de temps pouvez-vous remplacer un gardien d'immeuble en arrêt maladie ?",
    answer:
      "Basés à Boulogne-Billancourt (92), nous mettons en place un gardien remplaçant qualifié sous 24 à 48h sur Paris (75), les Hauts-de-Seine (92), les Yvelines (78) et le Val-de-Marne (94), dès validation du devis.",
  },
  {
    question: "Comment se déroule la passation des clés, badges et consignes de la loge ?",
    answer:
      "Un protocole de passation écrit est établi le premier jour (avec le gardien titulaire, un membre du conseil syndical ou le gestionnaire) : inventaire des clés et passes Vigik, codes d'accès, horaires d'ouverture de la loge, distribution du courrier et jours de sortie des bacs.",
  },
  {
    question: "Quelle est la différence entre un remplacement en catégorie A et catégorie B ?",
    answer:
      "Nous adaptons le profil et le planning aux spécificités de votre copropriété : simple service d'entretien et sortie des poubelles (catégorie A) ou tenue complète de la loge, accueil des résidents, réception des colis/courriers et surveillance (catégorie B).",
  },
  {
    question: "Fournissez-vous les documents administratifs pour le syndic ?",
    answer:
      "Oui, notre dossier administratif complet (attestation de vigilance URSSAF à jour, assurance Responsabilité Civile Professionnelle, extrait Kbis) est transmis immédiatement avec le chiffrage sous 24h.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Remplacement de gardien d'immeuble et de copropriété",
      description:
        "Remplacement de gardien d'immeuble de courte, moyenne ou longue durée pour syndics et copropriétés à Paris et en Île-de-France.",
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

export default function RemplacementGardien() {
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
            COPROSOLUTIONS • INTERVENTION SOUS 24 À 48H
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Remplacement de gardien d’immeuble à Paris et en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            Arrêt maladie imprévu, congés d’été, fêtes de fin d’année ou période
            de transition : nous assurons la continuité intégrale du service en
            copropriété avec passation de consignes structurée et zéro sous-traitance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Chiffrer un remplacement sous 24h
            </Link>

            <a
              href="tel:+33658876579"
              className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              📞 Urgence : 06 58 87 65 79
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION MÉTIER */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Une continuité de service immédiate pour soulager les syndics et conseils syndicaux
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            L’absence soudaine d’un gardien ou d’un employé d’immeuble génère
            immédiatement des tensions dans une copropriété : bacs à ordures non
            sortis les jours de collecte, courrier et colis en attente, halls non
            entretenus et sollicitations répétées auprès du gestionnaire.
          </p>

          <p>
            Forts de <strong>5 années d’expérience à la direction d’une agence spécialisée
            dans le remplacement de gardiens en Île-de-France</strong>, nous avons conçu
            une organisation terrain rodée au départ de Boulogne-Billancourt (92) pour
            déployer des remplaçants fiables, autonomes et habitués aux exigences des
            résidences parisiennes et de l’Ouest parisien.
          </p>

          <p>
            Que votre immeuble relève d’un poste d’employé d’immeuble ou d’un gardien
            en loge, chaque intervention fait l’objet d’un démarrage encadré sur site
            et d’un suivi direct par le dirigeant.
          </p>
        </div>
      </section>

      {/* PROTOCOLE EN 3 ÉTAPES */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Notre protocole de remplacement en 3 étapes
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-blue-100">
            Un processus sécurisé pour les gestionnaires de copropriété, de la demande
            de devis jusqu’au retour du titulaire.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">01</div>
              <h3 className="mb-2 text-xl font-bold">Chiffrage & dossier sous 24h</h3>
              <p className="text-sm leading-7 text-blue-100">
                Analyse de la fiche de poste (horaires, tâches, spécificités de
                l’immeuble) et envoi immédiat du devis accompagné de nos attestations
                (URSSAF, RC Pro, Kbis).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">02</div>
              <h3 className="mb-2 text-xl font-bold">Passation des clés & consignes</h3>
              <p className="text-sm leading-7 text-blue-100">
                Accueil sur site avec remise formalisée du trousseau, badges Vigik,
                codes techniques, plan des locaux poubelles et consignes du conseil
                syndical.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">03</div>
              <h3 className="mb-2 text-xl font-bold">Contrôle qualité & restitution</h3>
              <p className="text-sm leading-7 text-blue-100">
                Passage de contrôle du dirigeant en cours de mission, remontée des
                anomalies éventuelles au gestionnaire et restitution complète des clés
                en fin de remplacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Dans quelles situations faire appel à CoproSolutions ?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Nous intervenons aussi bien en urgence qu’en planification annuelle pour
            l’ensemble de votre portefeuille d’immeubles.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Arrêt maladie & urgence sous 24–48h
              </h3>
              <p className="leading-7 text-gray-600">
                Mobilisation rapide en cas d’arrêt de travail imprévu ou d’accident
                pour éviter toute rupture dans l’entretien et la gestion des bacs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Congés d’été & fêtes de fin d’année
              </h3>
              <p className="leading-7 text-gray-600">
                Planification anticipée des périodes de congés payés (juillet-août,
                décembre, vacances scolaires) avec un remplaçant dédié.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Période de transition & recrutement
              </h3>
              <p className="leading-7 text-gray-600">
                Continuité assurée entre le départ d’un gardien (retraite, démission)
                et l’embauche du nouveau titulaire. Voir aussi notre service de{" "}
                <Link href="/recrutement-gardien" className="font-semibold text-blue-700 underline">
                  recrutement de gardien
                </Link>.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Congé maternité ou longue maladie
              </h3>
              <p className="leading-7 text-gray-600">
                Mise en place d’un remplaçant stable sur plusieurs semaines ou mois
                afin de préserver les repères des copropriétaires.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Formation obligatoire du gardien
              </h3>
              <p className="leading-7 text-gray-600">
                Couverture ponctuelle de quelques jours pendant les stages de
                formation professionnelle de votre salarié d’immeuble.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Formule allégée (poubelles + ménage)
              </h3>
              <p className="leading-7 text-gray-600">
                Pour maîtriser le budget de la copropriété pendant une courte absence,
                nous proposons également un remplacement ciblé sur l’essentiel.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Missions assurées par nos gardiens remplaçants
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Le cahier des charges est calqué sur les missions habituelles du poste
          pour que les résidents conservent exactement le même niveau de service.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien complet des parties communes
            </h3>
            <p className="leading-7 text-gray-600">
              Balayage et lavage des halls d’entrée, escaliers, paliers, cabines
              d’ascenseur, vitrerie de porte et dépoussiérage des boiseries.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Sortie, rentrée et nettoyage des poubelles
            </h3>
            <p className="leading-7 text-gray-600">
              Respect strict des horaires de collecte municipale (ordures ménagères,
              tri sélectif, verre) et maintien de la propreté du local conteneurs.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Tenue de loge, courrier et colis
            </h3>
            <p className="leading-7 text-gray-600">
              Distribution du courrier dans les boîtes aux lettres, réception des
              colis et recommandés selon les règles définies par la copropriété.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Vigilance technique & accueil prestataires
            </h3>
            <p className="leading-7 text-gray-600">
              Ouverture aux entreprises de maintenance (ascensoriste, chauffagiste,
              plombier) et signalement immédiat de toute anomalie au syndic.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions fréquentes sur le remplacement de gardien
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

      {/* MAILLAGE INTERNE SERVICES & VILLES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Secteurs d’intervention en Île-de-France
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Depuis notre agence de Boulogne-Billancourt, nous intervenons rapidement
          sur Paris et l’ensemble de la petite et grande couronne :
        </p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Link href="/zones/paris-75" className="rounded-xl border p-4 text-center font-semibold text-blue-700 hover:shadow-md">
            Paris (75) →
          </Link>
          <Link href="/zones/hauts-de-seine" className="rounded-xl border p-4 text-center font-semibold text-blue-700 hover:shadow-md">
            Hauts-de-Seine (92) →
          </Link>
          <Link href="/zones/yvelines" className="rounded-xl border p-4 text-center font-semibold text-blue-700 hover:shadow-md">
            Yvelines (78) →
          </Link>
          <Link href="/zones/val-de-marne" className="rounded-xl border p-4 text-center font-semibold text-blue-700 hover:shadow-md">
            Val-de-Marne (94) →
          </Link>
          <Link href="/zones/boulogne-billancourt" className="rounded-xl border p-4 text-center font-semibold text-slate-700 hover:shadow-md">
            Boulogne-Billancourt
          </Link>
          <Link href="/zones/paris-15" className="rounded-xl border p-4 text-center font-semibold text-slate-700 hover:shadow-md">
            Paris 15e
          </Link>
          <Link href="/zones/paris-16" className="rounded-xl border p-4 text-center font-semibold text-slate-700 hover:shadow-md">
            Paris 16e
          </Link>
          <Link href="/zones/yvelines/versailles" className="rounded-xl border p-4 text-center font-semibold text-slate-700 hover:shadow-md">
            Versailles
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link href="/nettoyage-copropriete-paris" className="rounded-xl bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Nettoyage de copropriétés à Paris →
          </Link>
          <Link href="/recrutement-gardien" className="rounded-xl bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Recrutement de gardien d’immeuble →
          </Link>
          <Link href="/travaux-exceptionnels" className="rounded-xl bg-slate-50 p-5 font-semibold text-blue-700 hover:shadow-md">
            Débarras & travaux exceptionnels →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d’un remplacement de gardien sous 24 à 48h ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l’adresse de la copropriété, les dates d’absence et les
            horaires habituels : vous recevez notre devis et notre dossier
            administratif sous 24h.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Demander un devis de remplacement
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

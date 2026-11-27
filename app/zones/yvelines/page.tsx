import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Entreprise de nettoyage de copropriété dans les Yvelines (78) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage de copropriété et le remplacement de gardien dans les Yvelines (78) : Versailles, Le Chesnay, Saint-Germain-en-Laye, Chatou, Vélizy. Devis AG sous 24h.",
  alternates: {
    canonical: "/zones/yvelines",
  },
};

const yvelinesCities = [
  {
    name: "Versailles",
    href: "/zones/yvelines/versailles",
    description:
      "Entretien soigné des immeubles anciens et résidences de standing à Versailles : halls, escaliers, tapis, cours et sortie des bacs.",
  },
  {
    name: "Le Chesnay-Rocquencourt",
    href: "/zones/yvelines",
    description:
      "Nettoyage régulier des grandes résidences arborées, halls d'entrée, parkings souterrains et remplacement de gardiens au Chesnay.",
  },
  {
    name: "Viroflay & Chaville",
    href: "/zones/yvelines",
    description:
      "Intervention rapide depuis Boulogne-Billancourt pour l'entretien des copropriétés et parties communes à Viroflay.",
  },
  {
    name: "Vélizy-Villacoublay",
    href: "/zones/yvelines",
    description:
      "Prestations d'entretien d'immeubles, rotation des conteneurs et remise en état de locaux communs à Vélizy.",
  },
  {
    name: "Saint-Germain-en-Laye",
    href: "/zones/yvelines",
    description:
      "Entretien des copropriétés de centre-ville et résidences privées à Saint-Germain-en-Laye et Mareil-Marly.",
  },
  {
    name: "Chatou & Le Vésinet",
    href: "/zones/yvelines",
    description:
      "Nettoyage des parties communes, entretien des accès extérieurs et remplacement de gardiens au Vésinet et à Chatou.",
  },
  {
    name: "Maisons-Laffitte & Sartrouville",
    href: "/zones/yvelines",
    description:
      "Contrats d'entretien annuel et interventions ponctuelles (parkings, vitrerie, débarras) pour les syndics du secteur.",
  },
  {
    name: "Houilles & Carrières-sur-Seine",
    href: "/zones/yvelines",
    description:
      "Entretien régulier des immeubles d'habitation, cages d'escalier et locaux poubelles à Houilles et Carrières-sur-Seine.",
  },
  {
    name: "Croissy-sur-Seine & Louveciennes",
    href: "/zones/yvelines",
    description:
      "Prestations de propreté sur mesure et remplacement de gardiens d'immeubles sur la boucle de la Seine.",
  },
];

const faqItems = [
  {
    question: "Dans quelles villes des Yvelines (78) intervenez-vous ?",
    answer:
      "Implantés à Boulogne-Billancourt (92) à proximité immédiate de l'A13 et de la N118, nous intervenons quotidiennement dans tout l'Est et le Nord-Est des Yvelines : Versailles, Le Chesnay-Rocquencourt, Viroflay, Vélizy-Villacoublay, Saint-Germain-en-Laye, Chatou, Le Vésinet, Croissy-sur-Seine, Houilles et Maisons-Laffitte.",
  },
  {
    question: "Proposez-vous des devis comparatifs pour les Assemblées Générales dans le 78 ?",
    answer:
      "Oui. Nous réalisons une visite technique de la copropriété et vous transmettons un devis détaillé poste par poste sous 24 à 48h, accompagné de notre dossier administratif complet (RC Pro, attestation URSSAF à jour, Kbis).",
  },
  {
    question: "Assurez-vous aussi le remplacement de gardiens d'immeubles dans les Yvelines ?",
    answer:
      "Oui. Nous mobilisons des gardiens remplaçants qualifiés sous 24 à 48h pour pallier un arrêt maladie, des congés d'été ou une période de transition, avec passation écrite des clés, badges Vigik et consignes de la résidence.",
  },
  {
    question: "Comment garantissez-vous la qualité des passages sur les résidences du 78 ?",
    answer:
      "Chaque résidence bénéficie d'un suivi encadré directement par le dirigeant (5 ans d'expérience en direction d'agence copropriétés), d'une transparence totale sur site et de contrôles qualité réguliers sans aucune sous-traitance.",
  },
];

const schema78 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage et entretien de copropriété dans les Yvelines (78)",
      description:
        "Entreprise de nettoyage de copropriété et remplacement de gardien dans les Yvelines (78) : Versailles, Le Chesnay, Saint-Germain-en-Laye, Chatou, Vélizy.",
      provider: {
        "@id": "https://www.coprosolutions.net/#organization",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Yvelines",
        postalCode: "78000",
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

export default function YvelinesPage() {
  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema78) }}
      />

      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · YVELINES (78) · DEVIS SOUS 24H
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Entreprise de nettoyage de copropriété dans les Yvelines (78)
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            De Versailles à Saint-Germain-en-Laye en passant par Le Chesnay,
            Viroflay, Vélizy et Chatou : CoproSolutions accompagne les syndics et
            conseils syndicaux du 78 pour l&apos;entretien régulier des immeubles et le
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
            Accès direct via A13 / N118 depuis Boulogne-Billancourt • Zéro sous-traitance
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Entretien d&apos;immeubles et résidences dans les Yvelines (78)
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Les copropriétés des <strong>Yvelines (78)</strong> présentent des
            configurations variées — immeubles anciens du centre-ville de{" "}
            <strong>Versailles</strong>, grandes résidences arborées du{" "}
            <strong>Chesnay</strong> ou de <strong>Saint-Germain-en-Laye</strong>,
            ensembles résidentiels à <strong>Vélizy</strong> ou <strong>Chatou</strong>{" "}
            — qui exigent une organisation rigoureuse et adaptée à chaque site.
          </p>

          <p>
            Implantée aux portes du 78 à{" "}
            <strong>Boulogne-Billancourt (73 rue du Château, 92100)</strong>,{" "}
            <strong>CoproSolutions</strong> s&apos;appuie sur{" "}
            <strong>
              5 années d&apos;expérience à la direction d&apos;une agence spécialisée en
              entretien de copropriétés et remplacement de gardiens
            </strong>{" "}
            pour garantir aux gestionnaires un suivi de proximité sans aucun
            intermédiaire.
          </p>

          <p>
            Vous préparez une mise en concurrence pour votre prochaine{" "}
            <strong>Assemblée Générale</strong> ou recherchez un prestataire
            réactif pour reprendre l&apos;entretien d&apos;une résidence ? Nous visitons
            le site et vous remettons un chiffrage clair sous 24 à 48h.
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
              Une méthodologie éprouvée pour soulager votre gestion dans le 78
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
                Un dispositif d&apos;information clair déployé dès le démarrage pour
                rassurer les copropriétaires et limiter les sollicitations au cabinet.
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

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Nos prestations de nettoyage et d&apos;entretien dans les Yvelines
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Des contrats annuels sur mesure ou des interventions ponctuelles pour
            les copropriétés, résidences privées et bureaux du 78.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Nettoyage des parties communes
              </h3>
              <p className="leading-7 text-gray-600">
                Entretien des halls d&apos;entrée, escaliers, paliers, ascenseurs,
                tapis, vitrerie de porte et espaces de circulation des résidents.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Contrats annuels & devis AG
              </h3>
              <p className="leading-7 text-gray-600">
                Passages programmés de 1 à 6 fois par semaine selon la taille de
                la résidence, avec chiffrage détaillé prêt pour vos Assemblées Générales.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Sortie & désinfection des poubelles
              </h3>
              <p className="leading-7 text-gray-600">
                Rotation des conteneurs selon le calendrier de collecte de votre
                commune des Yvelines, nettoyage et désinfection des locaux bacs.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Parkings, caves & espaces extérieurs
              </h3>
              <p className="leading-7 text-gray-600">
                Balayage mécanisé des parkings souterrains, entretien courant des
                allées et cours extérieures, débarras d&apos;encombrants sous 48h.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remise en état & vitrerie
              </h3>
              <p className="leading-7 text-gray-600">
                Shampouinage des moquettes, lavage haute pression des accès et
                nettoyage approfondi après travaux ou sinistre avec photos avant/après.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Remplacement de gardiens (24/48h)
              </h3>
              <p className="leading-7 text-gray-600">
                Remplacement de courte, moyenne ou longue durée pour congés ou
                arrêts maladie avec passation structurée des clés et consignes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Villes d&apos;intervention dans les Yvelines (78)
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Nous accompagnons les cabinets de syndics et conseils syndicaux sur
            l&apos;ensemble de l&apos;axe Versailles – Saint-Germain-en-Laye – Boucle de la Seine.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {yvelinesCities.map((city) => (
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
                  En savoir plus sur le secteur {city.name} →
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
            Questions fréquentes sur le nettoyage de copropriété dans le 78
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
        <h2 className="mb-8 text-3xl font-bold">Nos autres prestations et secteurs</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/zones/yvelines/versailles"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Nettoyage de copropriété à Versailles (78000) →
          </Link>

          <Link
            href="/remplacement-gardien"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Remplacement de gardien d&apos;immeuble sous 24/48h →
          </Link>

          <Link
            href="/zones/hauts-de-seine"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Nettoyage de copropriété dans les Hauts-de-Seine (92) →
          </Link>

          <Link
            href="/travaux-exceptionnels"
            className="rounded-xl border p-5 font-semibold text-blue-700 hover:shadow-md"
          >
            Débarras d&apos;encombrants & travaux exceptionnels →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Besoin d&apos;une entreprise de nettoyage de copropriété dans le 78 ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Indiquez-nous l&apos;adresse de votre résidence dans les Yvelines et la
            fréquence souhaitée : nous organisons une visite rapide et vous
            transmettons un devis détaillé sous 24h.
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
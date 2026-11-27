import type { Metadata } from "next";
import Link from "next/link";
import HomeContactForm from "./_components/HomeContactForm";

export const metadata: Metadata = {
  title: "CoproSolutions | Nettoyage de copropriété & Remplacement de gardien (92, 75, 78)",
  description:
    "Basée à Boulogne-Billancourt, CoproSolutions accompagne syndics et conseils syndicaux à Paris (75), Hauts-de-Seine (92) et Yvelines (78) : entretien d'immeubles, remplacement de gardiens sous 48h et débarras.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* ACCUEIL / HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-green-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xl">🏢</span>
            <span className="text-sm font-bold uppercase tracking-widest text-green-300">
              COPROSOLUTIONS — BOULOGNE-BILLANCOURT (92) • PARIS (75) • YVELINES (78)
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight drop-shadow-lg md:text-6xl">
            Nettoyage de copropriétés & Remplacement de gardiens
            <span className="block text-green-300">
              Réactivité sous 48h & suivi qualité sur site.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
            Basée à Boulogne-Billancourt, <strong>Coprosolutions</strong>{" "}
            accompagne les syndics et conseils syndicaux à Paris (75), dans les
            Hauts-de-Seine (92) et les Yvelines (78) : entretien des parties
            communes, remplacement de gardiens au pied levé, débarras
            d&apos;encombrants et remises en état.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+33658876579"
              className="rounded-2xl bg-black px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
            >
              📞 Urgence / Direct : 06 58 87 65 79
            </a>

            <a
              href="#contact"
              className="rounded-2xl bg-green-500 px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
            >
              💬 Devis gratuit sous 24h
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ 5 ans d&apos;expertise direction d&apos;agence copropriétés
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ Intervention d&apos;urgence sous 24 à 48h
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ Compte-rendu photo après passage
            </span>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-12 rounded-t-[50%] bg-slate-50" />
      </section>

      {/* LÉGITIMITÉ & ENGAGEMENT DIRIGEANT */}
      <section className="bg-slate-50 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-white p-7 shadow-sm md:flex-row md:p-10">
          <div className="shrink-0">
            <img
              src="/images/immeuble-paris.jpg"
              alt="Immeuble en copropriété entretenu par Coprosolutions à Paris et dans le 92"
              width={190}
              height={265}
              loading="eager"
              className="mx-auto h-auto w-[190px] max-w-full rounded-xl object-contain shadow-md"
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-green-700">
              UN INTERLOCUTEUR UNIQUE — ZÉRO SOUS-TRAITANCE
            </p>

            <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">
              L&apos;exigence d&apos;un réseau national, la réactivité d&apos;un dirigeant terrain
            </h2>

            <p className="leading-8 text-gray-600">
              Après{" "}
              <strong>
                5 années à la direction d&apos;une agence spécialisée en remplacement
                de gardiens et entretien de copropriétés
              </strong>{" "}
              (en franchise), j&apos;ai fondé Coprosolutions au 73 rue du Château à
              Boulogne-Billancourt pour offrir aux gestionnaires des process déjà
              rodés et un suivi direct sans intermédiaire.
            </p>

            <p className="mt-4 text-base font-black uppercase text-orange-600">
              Devis comparatif AG & interventions ponctuelles chiffrés sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* TROIS ACTIVITÉS PRINCIPALES (AVEC MAILLAGE INTERNE SEO) */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            NOS EXPERTISES COPROPRIÉTÉS
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Nettoyage d&apos;immeubles, remplacement de gardiens & urgences
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Des prestations calibrées pour soulager les gestionnaires de copropriété
            et garantir la sérénité des conseils syndicaux.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* SERVICE 1 — VERS /nettoyage-copropriete-paris */}
          <Link
            href="/nettoyage-copropriete-paris"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl transition group-hover:rotate-6">
              🧹
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-600">
              CONTRATS ANNUELS & AG
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Nettoyage de copropriété dans le 92 et à Paris
            </h3>

            <p className="leading-7 text-gray-600">
              Entretien régulier des parties communes : halls d&apos;entrée, escaliers,
              paliers, ascenseurs, vitrerie et gestion des conteneurs poubelles.
              Chiffrage comparatif clair sous 48h pour vos Assemblées Générales.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le nettoyage de copropriété →
            </div>
          </Link>

          {/* SERVICE 2 — REMPLACEMENT GARDIEN */}
          <Link
            href="/remplacement-gardien"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl transition group-hover:rotate-6">
              👷
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-700">
              INTERVENTION SOUS 24 À 48H
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Remplacement de gardiens d&apos;immeubles
            </h3>

            <p className="leading-7 text-gray-600">
              Remplacement de courte, moyenne ou longue durée (arrêt maladie, congés
              d&apos;été, fêtes de fin d&apos;année) avec passation de consignes structurée :
              poubelles, courrier, ménage et surveillance.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le remplacement de gardien →
            </div>
          </Link>

          {/* SERVICE 3 — TRAVAUX EXCEPTIONNELS & DÉBARRAS */}
          <Link
            href="/travaux-exceptionnels"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-4xl transition group-hover:rotate-6">
              🚛
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-orange-700">
              INTERVENTIONS PONCTUELLES
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Débarras d&apos;encombrants & remises en état
            </h3>

            <p className="leading-7 text-gray-600">
              Évacuation rapide des caves, parkings et locaux poubelles, nettoyage
              après dégât des eaux ou travaux, lavage haute pression des cours et
              shampouinage des moquettes avec photos avant/après.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir nos travaux exceptionnels →
            </div>
          </Link>
        </div>
      </section>

      {/* LA MÉTHODE COPROSOLUTIONS — 4 PROCESS TERRAIN */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
              LA MÉTHODE COPROSOLUTIONS
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              4 engagements concrets pour éviter les plaintes du conseil syndical
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Un suivi opérationnel pensé pour décharger les gestionnaires de copropriété
              de toute micro-gestion au quotidien.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">01</div>
              <h3 className="mb-2 text-lg font-black">
                Affichage du cahier des charges
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Affichage visible sur site des fréquences de passage et des tâches
                contractuelles pour une transparence totale auprès des résidents.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">02</div>
              <h3 className="mb-2 text-lg font-black">
                Transmission dans les 2 sens
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Remontée immédiate des anomalies terrain (ampoules, pannes, dépôts
                sauvages) et application directe de vos consignes gestionnaire.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">03</div>
              <h3 className="mb-2 text-lg font-black">
                Contrôle qualité sur site
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Visites régulières effectuées directement par le dirigeant avec
                compte-rendu photo systématique sur les interventions ponctuelles.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-3xl font-black text-green-400">04</div>
              <h3 className="mb-2 text-lg font-black">
                Appel du CS par rotation
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                Contact téléphonique proactif auprès des membres du conseil syndical
                par rotation pour anticiper et résoudre tout ajustement en direct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS COMPLÉMENTAIRES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Prestations complémentaires pour vos immeubles
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              À la carte ou en complément d&apos;un contrat d&apos;entretien annuel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/services"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 190 125"
                  className="h-24 w-40"
                  role="img"
                  aria-label="Rotation et désinfection des bacs à ordures ménagères"
                >
                  <g>
                    <rect x="12" y="30" width="65" height="70" rx="7" fill="#168344" stroke="#116534" strokeWidth="2" />
                    <path d="M8 29 L81 29 L76 17 Q75 14 70 14 L19 14 Q14 14 13 18 Z" fill="#FACC15" stroke="#B98A08" strokeWidth="2" />
                    <path d="M30 36 V91 M59 36 V91" stroke="#35A35F" strokeWidth="3" />
                    <circle cx="22" cy="105" r="8" fill="#222" />
                    <circle cx="67" cy="105" r="8" fill="#222" />
                  </g>
                  <g transform="translate(96 0)">
                    <rect x="12" y="30" width="65" height="70" rx="7" fill="#168344" stroke="#116534" strokeWidth="2" />
                    <path d="M8 29 L81 29 L76 17 Q75 14 70 14 L19 14 Q14 14 13 18 Z" fill="#16A34A" stroke="#116534" strokeWidth="2" />
                    <path d="M30 36 V91 M59 36 V91" stroke="#35A35F" strokeWidth="3" />
                    <circle cx="22" cy="105" r="8" fill="#222" />
                    <circle cx="67" cy="105" r="8" fill="#222" />
                  </g>
                </svg>
              </div>

              <h3 className="mb-3 text-xl font-black text-blue-700">
                Rotation & lavage des poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Sortie et rentrée des bacs selon les jours de collecte,
                désinfection des locaux poubelles et gestion des surplus de cartons.
              </p>
            </Link>

            <Link
              href="/travaux-exceptionnels"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">✨</div>

              <h3 className="mb-3 text-xl font-black text-blue-700">
                Vitrerie, parkings & moquettes
              </h3>

              <p className="leading-7 text-gray-600">
                Nettoyage de printemps et d&apos;automne : vitrerie d&apos;accès difficile,
                lavage mécanisé des parkings souterrains et traitement des sols.
              </p>
            </Link>

            <Link
              href="/entretien-bureau-immeuble"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🏢</div>

              <h3 className="mb-3 text-xl font-black text-blue-700">
                Entretien de cabinets & bureaux
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien régulier ou ponctuel des cabinets de syndics,
                agences immobilières et locaux professionnels.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU DE CONTACT */}
      <section className="px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl bg-blue-700 px-7 py-8 text-white shadow-xl md:flex-row md:px-10">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚡</div>
            <div>
              <h2 className="text-xl font-black">
                Un remplacement urgent ou un immeuble à chiffrer pour votre prochaine AG ?
              </h2>
              <p className="mt-1 text-blue-100">
                Dossier administratif complet prêt (RC Pro, URSSAF, Kbis) — Devis sous 24h.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-2xl bg-white px-6 py-3 font-black text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Demander un devis →
          </a>
        </div>
      </section>

      {/* ZONES D'INTERVENTION (MAILLAGE SEO LOCAL 92 / 75 / 78 / 94) */}
      <section id="zones" className="relative overflow-hidden bg-slate-100 px-6 py-20 md:py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              📍 PROXIMITÉ & RÉACTIVITÉ TERRAIN
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Nos secteurs d&apos;intervention depuis Boulogne-Billancourt
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Implantée au <strong>73 rue du Château à Boulogne-Billancourt (92100)</strong>,
              notre équipe intervient rapidement sur tout l&apos;axe Ouest parisien,
              les Hauts-de-Seine et les Yvelines.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/zones/hauts-de-seine"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 text-3xl">🏙️</div>
              <strong className="block text-lg text-blue-800 underline-offset-4 hover:underline">
                Hauts-de-Seine (92) →
              </strong>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine,
                Levallois-Perret, Courbevoie, Saint-Cloud, Sèvres, Antony.
              </p>
            </Link>

            <Link
              href="/zones/paris-75"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 text-3xl">🗼</div>
              <strong className="block text-lg text-blue-800 underline-offset-4 hover:underline">
                Paris (75) →
              </strong>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Intervention sur tous les arrondissements parisiens, notamment
                Paris 15e, 16e, 17e, 7e, 8e et 14e.
              </p>
            </Link>

            <Link
              href="/zones/yvelines"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 text-3xl">🌳</div>
              <strong className="block text-lg text-blue-800 underline-offset-4 hover:underline">
                Yvelines (78) →
              </strong>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Versailles, Le Chesnay, Viroflay, Vélizy-Villacoublay,
                Saint-Germain-en-Laye, Chatou, Le Vésinet.
              </p>
            </Link>

            <Link
              href="/zones/val-de-marne"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 text-3xl">🏘️</div>
              <strong className="block text-lg text-blue-800 underline-offset-4 hover:underline">
                Val-de-Marne (94) →
              </strong>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Interventions ciblées sur Créteil, le Val-de-Marne (94) et les communes
                limitrophes sur étude de cahier des charges.
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/zones"
              className="inline-block font-bold text-blue-700 hover:underline"
            >
              Voir toutes nos villes d&apos;intervention en Île-de-France →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:py-24"
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mb-4 text-5xl">📩</div>

            <h2 className="text-3xl font-black md:text-4xl">
              Demandez votre devis sous 24h
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-100">
              Indiquez l&apos;adresse de la copropriété et la prestation recherchée :
              nous vous répondons sous 24h avec un chiffrage clair.
            </p>
          </div>

          <HomeContactForm />

          {/* COORDONNÉES DE L'ENTREPRISE */}
          <div className="mt-10 text-center">
            <p className="mb-3 text-blue-100">
              Ligne directe dirigeant (urgences & renseignements) :
            </p>

            <a
              href="tel:+33658876579"
              className="inline-block text-2xl font-black transition hover:text-green-300"
            >
              📞 06 58 87 65 79
            </a>

            <p className="mt-4">
              <a
                href="mailto:coprosolutions@coprosolutions.net"
                className="text-blue-200 transition hover:text-white hover:underline"
              >
                coprosolutions@coprosolutions.net
              </a>
            </p>

            <address className="mt-5 not-italic leading-7 text-blue-100">
              Siège social : 73 rue du Château, 92100 Boulogne-Billancourt
            </address>
          </div>
        </div>
      </section>

      {/* BOUTONS FIXES */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+33658876579"
          aria-label="Appeler CoproSolutions"
          className="group flex items-center gap-2 rounded-full bg-black px-5 py-3 font-black text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-slate-900"
        >
          <span className="text-xl transition group-hover:rotate-12">📞</span>
          <span className="hidden sm:inline">06 58 87 65 79</span>
        </a>

        <a
          href="https://wa.me/33658876579"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter CoproSolutions sur WhatsApp"
          className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-black text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-green-600"
        >
          <span className="text-xl">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
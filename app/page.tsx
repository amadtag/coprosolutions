
"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          telephone: String(formData.get("telephone") || "").trim(),
          service: String(formData.get("service") || "").trim(),
          demande: String(formData.get("message") || "").trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* ACCUEIL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 px-6 py-24 text-white md:py-32">

        <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-green-400/20 blur-2xl" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-2xl">🏢</span>
            <span className="text-sm font-bold uppercase tracking-widest text-green-300">
              COPROSOLUTIONS
            </span>
            <span className="text-2xl">✨</span>
          </div>

          
<h1 className="mb-6 text-4xl font-black leading-tight drop-shadow-lg md:text-6xl">
  Entretien des immeubles et copropriétés
  <span className="block text-green-300">
    Notre engagement au quotidien.
  </span>
</h1>

<p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
  CoproSolutions accompagne les syndics et les conseils syndicaux
  à Paris et en Île-de-France pour l'entretien des immeubles et
  copropriétés : nettoyage des parties communes, entretien des
  bureaux, remplacement de gardiens et aide au recrutement de
  personnel d'immeuble.
</p>


          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
            CoproSolutions accompagne les syndics et les conseils syndicaux
            à Paris et en Île-de-France : nettoyage des copropriétés et des
            bureaux, remplacement de gardiens et aide au recrutement de
            personnel d'immeuble.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+33658876579"
              className="rounded-2xl bg-black px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
            >
              📞 Appeler maintenant
            </a>

            <a
              href="#contact"
              className="rounded-2xl bg-green-500 px-7 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
            >
              💬 Demander un devis gratuit
            </a>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">

            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ Trois domaines de services
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ Solutions adaptées aux immeubles
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              ✓ Paris et Île-de-France
            </span>

          </div>

        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-12 rounded-t-[50%] bg-slate-50" />

      </section>


      {/* PHOTO DE L'IMMEUBLE */}
      <section className="bg-slate-50 px-6 py-12">

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-white p-7 shadow-sm md:flex-row md:p-10">

          <div className="shrink-0">
            <img
              src="/images/immeuble-paris.jpg"
              alt="Immeuble parisien"
              width={190}
              height={265}
              loading="eager"
              className="mx-auto h-auto w-[190px] max-w-full rounded-xl object-contain shadow-md"
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">

            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-green-700">
              COPROSOLUTIONS — PARIS ET ÎLE-DE-FRANCE
            </p>

            <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">
  Un processus adapté à chaque copropriété
</h2>

    <p className="leading-8 text-gray-600">
  Nous proposons un processus adapté à la taille de chaque
  copropriété et à ses besoins : entretien et nettoyage des
  immeubles, remplacement de gardiens et accompagnement au
  recrutement de personnel d'immeuble.
</p>

<p className="mt-4 text-lg font-black uppercase text-orange-600">
  Aide au recrutement 100 % gratuite
</p>

          </div>

        </div>

      </section>


      {/* TROIS ACTIVITÉS PRINCIPALES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      >

        <div className="mb-12 text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            NOS TROIS DOMAINES D'INTERVENTION
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Des services complets pour les copropriétés et les immeubles
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Un accompagnement destiné aux syndics, conseils syndicaux
            et gestionnaires immobiliers, de l'entretien quotidien
            à la recherche de personnel.
          </p>

        </div>


        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {/* SERVICE 1 */}
          <a
            href="#contact"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl transition group-hover:rotate-6">
              🧹
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-600">
              SERVICE 1
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Nettoyage et entretien des immeubles
            </h3>

            <p className="leading-7 text-gray-600">
              Entretien des parties communes des copropriétés :
              halls, escaliers, paliers, circulations, ascenseurs
              et locaux communs. Prestations également proposées
              pour les immeubles de bureaux et locaux professionnels.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Demander un devis →
            </div>

          </a>


          {/* SERVICE 2 */}
          <a
            href="/remplacement-gardien"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl transition group-hover:rotate-6">
              👷
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-700">
              SERVICE 2
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Remplacement de gardiens d'immeubles
            </h3>

            <p className="leading-7 text-gray-600">
              Remplacement de courte, moyenne ou longue durée
              pour les congés, absences ou périodes de transition,
              afin de contribuer à la continuité du service dans
              votre immeuble.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Découvrir le service →
            </div>

          </a>


          {/* SERVICE 3 */}
          <a
            href="#contact"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-4xl transition group-hover:rotate-6">
              🤝
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-indigo-700">
              SERVICE 3
            </p>

            <h3 className="mb-3 text-xl font-black text-blue-700">
              Aide au recrutement de personnel d'immeuble
            </h3>

            <p className="leading-7 text-gray-600">
              Accompagnement des syndics et conseils syndicaux
              dans la recherche et le recrutement de gardiens
              et de personnel adaptés aux besoins de leur copropriété.
            </p>

            <div className="mt-5 font-bold text-blue-700">
              Demander un accompagnement →
            </div>

          </a>

        </div>

      </section>


      {/* PRESTATIONS COMPLÉMENTAIRES */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-black md:text-4xl">
              Des prestations complémentaires selon vos besoins
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              En complément de nos trois domaines principaux,
              nous pouvons étudier des interventions spécifiques
              pour votre immeuble.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <a
              href="#contact"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              
<div className="mb-4 flex items-center justify-center">
  <svg
    viewBox="0 0 190 125"
    className="h-24 w-40"
    role="img"
    aria-label="Deux bacs roulants verts, un à couvercle jaune et un à couvercle vert"
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
                Sortie et rentrée des poubelles
              </h3>

              <p className="leading-7 text-gray-600">
                Organisation de la sortie et de la rentrée des
                conteneurs selon les jours de collecte.
              </p>
            </a>

            <a
              href="#contact"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🛠️</div>

              <h3 className="mb-3 text-xl font-black text-blue-700">
                Travaux et nettoyages ponctuels
              </h3>

              <p className="leading-7 text-gray-600">
                Interventions spécifiques : parkings, moquettes,
                nettoyage après travaux et besoins exceptionnels.
              </p>
            </a>

            <a
              href="#contact"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🏢</div>

              <h3 className="mb-3 text-xl font-black text-blue-700">
                Entretien des bureaux
              </h3>

              <p className="leading-7 text-gray-600">
                Entretien régulier ou ponctuel des bureaux,
                locaux professionnels et espaces administratifs.
              </p>
            </a>

          </div>

        </div>

      </section>


      {/* BANDEAU DE CONTACT */}
      <section className="px-6 py-6">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl bg-blue-700 px-7 py-8 text-white shadow-xl md:flex-row md:px-10">

          <div className="flex items-center gap-4">

            <div className="text-5xl">💪</div>

            <div>
              <h2 className="text-xl font-black">
                Un besoin pour votre copropriété ou votre immeuble ?
              </h2>

              <p className="mt-1 text-blue-100">
                Entretien, remplacement de gardien ou aide au recrutement :
                parlons-en.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="rounded-2xl bg-white px-6 py-3 font-black text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Demander un devis →
          </a>

        </div>

      </section>


      {/* ZONES D'INTERVENTION */}
      <section
        id="zones"
        className="relative overflow-hidden bg-slate-100 px-6 py-20 md:py-24"
      >

        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              📍 ÎLE-DE-FRANCE
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Nos zones d'intervention
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              CoproSolutions intervient à Paris et dans plusieurs
              départements d'Île-de-France pour l'entretien des
              immeubles, le remplacement de gardiens et
              l'accompagnement au recrutement.
            </p>

          </div>

          <div className="grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-3 text-4xl">🗼</div>
              <strong className="text-lg">Paris (75)</strong>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-3 text-4xl">🏙️</div>
              <strong className="text-lg">Hauts-de-Seine (92)</strong>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-3 text-4xl">🌳</div>
              <strong className="text-lg">Yvelines (78)</strong>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-3 text-4xl">🏘️</div>
              <strong className="text-lg">Val-de-Marne (94)</strong>
            </div>

          </div>

          <p className="mt-8 text-center text-gray-600">
            Vous souhaitez connaître nos possibilités d'intervention
            dans votre commune ? Contactez-nous pour étudier votre besoin.
          </p>

        </div>

      </section>


      {/* ACCOMPAGNEMENT DES SYNDICS ET CONSEILS SYNDICAUX */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="mb-10 text-center">

          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
            🤝 NOTRE ACCOMPAGNEMENT
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Un partenaire pour les syndics et les conseils syndicaux
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Nous étudions les besoins de chaque résidence avec les
            interlocuteurs qui la gèrent, pour proposer une réponse
            adaptée à son organisation.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-blue-50 p-7">

            <div className="mb-4 text-4xl">👔</div>

            <h3 className="mb-3 text-xl font-black">
              Pour les syndics
            </h3>

            <p className="leading-7 text-gray-600">
              Un interlocuteur pour étudier les besoins d'entretien,
              organiser un remplacement ou accompagner une recherche
              de personnel.
            </p>

          </div>

          <div className="rounded-3xl bg-green-50 p-7">

            <div className="mb-4 text-4xl">🏠</div>

            <h3 className="mb-3 text-xl font-black">
              Pour les conseils syndicaux
            </h3>

            <p className="leading-7 text-gray-600">
              Un accompagnement pour préciser les besoins de la
              copropriété et faciliter les échanges autour des
              prestations recherchées.
            </p>

          </div>

          <div className="rounded-3xl bg-indigo-50 p-7">

            <div className="mb-4 text-4xl">🤝</div>

            <h3 className="mb-3 text-xl font-black">
              Aide au recrutement
            </h3>

            <p className="leading-7 text-gray-600">
              Un accompagnement des syndics et conseils syndicaux
              dans la recherche de gardiens et de personnel d'immeuble
              correspondant à leurs besoins.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:py-24"
      >

        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-10 text-center">

            <div className="mb-4 text-5xl">📩</div>

            <h2 className="text-3xl font-black md:text-4xl">
              Demandez votre devis
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-100">
              Entretien de copropriété ou de bureaux, remplacement
              de gardien, aide au recrutement : décrivez-nous votre
              besoin et nous vous recontacterons rapidement.
            </p>

          </div>


          <form
            onSubmit={sendRequest}
            className="space-y-5 rounded-3xl bg-white p-7 text-black shadow-2xl md:p-9"
          >

            <div>
              <label
                htmlFor="home-name"
                className="mb-2 block font-bold text-slate-700"
              >
                Nom / Société *
              </label>

              <input
                id="home-name"
                type="text"
                name="name"
                placeholder="Votre nom ou société"
                maxLength={150}
                required
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            <div>
              <label
                htmlFor="home-email"
                className="mb-2 block font-bold text-slate-700"
              >
                Email *
              </label>

              <input
                id="home-email"
                type="email"
                name="email"
                placeholder="votre@email.fr"
                maxLength={254}
                required
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            <div>
              <label
                htmlFor="home-phone"
                className="mb-2 block font-bold text-slate-700"
              >
                Téléphone
              </label>

              <input
                id="home-phone"
                type="tel"
                name="telephone"
                placeholder="Votre numéro de téléphone"
                maxLength={40}
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            <div>
              <label
                htmlFor="home-service"
                className="mb-2 block font-bold text-slate-700"
              >
                Service souhaité
              </label>

              <select
                id="home-service"
                name="service"
                defaultValue=""
                className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Choisissez un service</option>

                <option value="Nettoyage et entretien de copropriété">
                  Nettoyage et entretien de copropriété
                </option>

                <option value="Entretien d'immeubles de bureaux">
                  Entretien d'immeubles de bureaux
                </option>

                <option value="Remplacement de gardien – courte durée">
                  Remplacement de gardien – courte durée
                </option>

                <option value="Remplacement de gardien – moyenne durée">
                  Remplacement de gardien – moyenne durée
                </option>

                <option value="Remplacement de gardien – longue durée">
                  Remplacement de gardien – longue durée
                </option>

                <option value="Aide au recrutement pour un syndic ou conseil syndical">
                  Aide au recrutement pour un syndic ou conseil syndical
                </option>

                <option value="Autre demande">
                  Autre demande
                </option>

              </select>
            </div>


            <div>
              <label
                htmlFor="home-message"
                className="mb-2 block font-bold text-slate-700"
              >
                Votre besoin *
              </label>

              <textarea
                id="home-message"
                name="message"
                placeholder="Décrivez votre besoin, votre immeuble et la prestation recherchée..."
                rows={6}
                maxLength={5000}
                required
                className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-2xl bg-green-500 py-4 font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Envoi en cours..."
                : "Valider ma demande de devis"}
            </button>


            <div aria-live="polite">

              {status === "success" && (
                <p className="font-semibold text-green-700">
                  Votre demande a bien été envoyée. Merci pour votre confiance !
                </p>
              )}

              {status === "error" && (
                <p className="font-semibold text-red-700">
                  L'envoi n'a pas abouti. Merci de réessayer ou de nous appeler.
                </p>
              )}

            </div>

          </form>


          {/* COORDONNÉES DE L'ENTREPRISE */}
          <div className="mt-10 text-center">

            <p className="mb-3 text-blue-100">
              Vous préférez nous appeler ?
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
              Siège social : 73 rue du Château,
              <br />
              92100 Boulogne-Billancourt
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
          <span className="text-xl transition group-hover:rotate-12">
            📞
          </span>

          <span className="hidden sm:inline">
            Appeler
          </span>
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

    </main>
  );
}

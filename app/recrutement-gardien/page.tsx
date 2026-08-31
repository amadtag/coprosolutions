import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Recrutement de gardien d'immeuble à Paris et en Île-de-France | CoproSolutions",
  description:
    "CoproSolutions accompagne les syndics et gestionnaires immobiliers dans la recherche et la mise en relation avec des gardiens d'immeuble adaptés aux besoins des copropriétés à Paris et en Île-de-France.",
  alternates: {
    canonical: "/recrutement-gardien",
  },
};

export default function RecrutementGardienPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">
            COPROSOLUTIONS · RECRUTEMENT
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Recrutement de gardien d'immeuble à Paris et en Île-de-France
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et copropriétés dans leurs besoins de recherche et de mise en
            relation avec des gardiens d'immeuble adaptés aux caractéristiques
            de leur résidence.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Présenter votre besoin
            </a>

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
          Un accompagnement pour trouver un gardien adapté à votre copropriété
        </h2>

        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Le recrutement d'un gardien d'immeuble constitue un enjeu important
            pour de nombreuses copropriétés. Le profil recherché doit
            correspondre à la configuration de la résidence, aux missions
            confiées et à l'organisation souhaitée par le syndic.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux dans leurs recherches afin de faciliter la
            mise en relation avec des profils correspondant aux besoins
            identifiés.
          </p>

          <p>
            Chaque recherche est étudiée en fonction des caractéristiques de
            la copropriété, des missions prévues et du niveau de responsabilité
            recherché.
          </p>
        </div>
      </section>

      {/* BESOINS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Pour quels besoins rechercher un gardien ?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            La recherche peut concerner différents types de copropriétés et
            différents niveaux de présence au sein de la résidence.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Gardien de copropriété
              </h3>

              <p className="leading-7 text-gray-600">
                Recherche d'un profil adapté aux missions quotidiennes d'une
                résidence et à son organisation.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Résidence avec plusieurs bâtiments
              </h3>

              <p className="leading-7 text-gray-600">
                Recherche étudiée selon la taille de la résidence, le nombre
                de bâtiments et les espaces communs à gérer.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-blue-700">
                Besoin durable
              </h3>

              <p className="leading-7 text-gray-600">
                Accompagnement pour une recherche correspondant à un besoin
                durable de la copropriété.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Les missions peuvent être adaptées à la résidence
        </h2>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          Les missions confiées à un gardien dépendent notamment de
          l'organisation de la copropriété et des besoins définis avec le
          syndic ou le gestionnaire.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Entretien et surveillance
            </h3>

            <p className="leading-7 text-gray-600">
              Présence dans la résidence, entretien de certains espaces et
              participation au bon fonctionnement quotidien de l'immeuble.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Relation avec les occupants
            </h3>

            <p className="leading-7 text-gray-600">
              Accueil, présence sur site et relais entre les occupants et les
              interlocuteurs de la copropriété selon les missions définies.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Gestion des parties communes
            </h3>

            <p className="leading-7 text-gray-600">
              Participation à l'entretien et au suivi des espaces communs
              selon l'organisation retenue pour la résidence.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-bold">
              Missions spécifiques
            </h3>

            <p className="leading-7 text-gray-600">
              Les missions peuvent être définies selon les caractéristiques
              de l'immeuble et les besoins du syndic.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold">
            Recrutement et remplacement : deux besoins différents
          </h2>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Le recrutement répond à un besoin de recherche d'un gardien pour
              une fonction durable au sein de la copropriété.
            </p>

            <p>
              Le remplacement répond quant à lui à une absence temporaire ou
              prolongée d'un gardien déjà en poste.
            </p>

            <p>
              CoproSolutions peut accompagner les copropriétés sur ces deux
              types de besoins selon leur situation.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/remplacement-gardien"
              className="font-semibold text-blue-700 hover:underline"
            >
              Découvrir le service de remplacement de gardien →
            </a>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">
          Recrutement de gardiens à Paris et en Île-de-France
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          CoproSolutions développe son activité auprès des syndics et
          gestionnaires immobiliers à Paris et dans plusieurs départements
          d'Île-de-France.
        </p>

        <p className="text-lg leading-8 text-gray-600">
          Les recherches peuvent notamment concerner les copropriétés situées
          à Paris, dans les Hauts-de-Seine, les Yvelines et les communes
          limitrophes selon les besoins.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">
            Vous recherchez un gardien pour votre copropriété ?
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Présentez-nous votre résidence, les missions prévues et vos
            critères de recherche. CoproSolutions pourra étudier votre besoin
            et vous accompagner dans votre recherche.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Nous contacter
            </a>

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
    </main>
  );
}

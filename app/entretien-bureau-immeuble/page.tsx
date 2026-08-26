export const metadata = {
  title:
    "Entretien de bureaux et immeubles administratifs en Île-de-France | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage de bureaux, immeubles administratifs et locaux professionnels à Paris et en Île-de-France. Prestations régulières ou ponctuelles adaptées à chaque entreprise.",
};

export default function EntretienBureauImmeuble() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-400 font-semibold mb-3">
            COPROSOLUTIONS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entretien de bureaux et immeubles administratifs
            en Île-de-France
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-8">
            CoproSolutions accompagne les entreprises, gestionnaires
            immobiliers et propriétaires dans l'entretien et le nettoyage
            de leurs bureaux, immeubles administratifs et locaux
            professionnels à Paris et en Île-de-France.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              Demander un devis
            </a>

            <a
              href="tel:+33658876579"
              className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-slate-900"
            >
              06 58 87 65 79
            </a>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Un entretien professionnel pour vos bureaux et immeubles
        </h2>

        <p className="text-gray-600 leading-8 mb-5">
          Des locaux propres et bien entretenus contribuent directement à
          l'image d'une entreprise, au confort des collaborateurs et à
          l'accueil des visiteurs.
        </p>

        <p className="text-gray-600 leading-8 mb-5">
          CoproSolutions propose des prestations d'entretien adaptées aux
          bureaux, immeubles administratifs, locaux professionnels et
          espaces de travail.
        </p>

        <p className="text-gray-600 leading-8">
          Notre organisation permet de mettre en place une fréquence
          d'intervention adaptée à chaque site : entretien régulier,
          intervention hebdomadaire, plusieurs passages par semaine ou
          prestation ponctuelle selon les besoins.
        </p>

      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-4">
            Nos prestations d'entretien de bureaux
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Des prestations modulables pour maintenir vos espaces
            professionnels propres, accueillants et agréables au quotidien.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Nettoyage des bureaux
              </h3>
              <p className="text-gray-600 leading-7">
                Nettoyage et entretien des espaces de travail, bureaux,
                postes de travail et différentes surfaces présentes dans
                vos locaux.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Sols et circulations
              </h3>
              <p className="text-gray-600 leading-7">
                Entretien des sols, couloirs, halls, escaliers et zones de
                circulation afin de conserver des espaces propres et
                entretenus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Sanitaires
              </h3>
              <p className="text-gray-600 leading-7">
                Nettoyage et entretien des sanitaires, lavabos et espaces
                associés dans le respect des besoins du site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Espaces communs
              </h3>
              <p className="text-gray-600 leading-7">
                Entretien des salles communes, espaces d'accueil, halls,
                salles de réunion et autres espaces partagés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Gestion des déchets
              </h3>
              <p className="text-gray-600 leading-7">
                Ramassage et gestion des déchets présents dans les espaces
                de travail selon l'organisation définie avec le client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Entretien ponctuel
              </h3>
              <p className="text-gray-600 leading-7">
                Interventions ponctuelles pour répondre à un besoin
                spécifique, après travaux, déménagement, événement ou
                remise en état.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TYPES DE LOCAUX */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Pour quels types de locaux ?
        </h2>

        <p className="text-gray-600 leading-8 mb-8">
          Nos prestations peuvent être adaptées à différents environnements
          professionnels et administratifs.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">

          {[
            "Bureaux d'entreprises",
            "Immeubles administratifs",
            "Locaux professionnels",
            "Cabinets et espaces professionnels",
            "Espaces d'accueil",
            "Salles de réunion",
            "Immeubles tertiaires",
            "Parties communes d'immeubles professionnels",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-4 bg-slate-50 font-medium"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* FREQUENCE */}
      <section className="bg-blue-950 text-white py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Une fréquence d'entretien adaptée à votre activité
          </h2>

          <p className="text-blue-100 leading-8 mb-8">
            Chaque entreprise possède des besoins différents. Nous étudions
            la configuration de vos locaux, leur fréquentation et la
            fréquence souhaitée afin de proposer une organisation adaptée.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-blue-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Entretien régulier
              </h3>
              <p className="text-blue-100 leading-7">
                Pour maintenir quotidiennement ou régulièrement la propreté
                des espaces professionnels.
              </p>
            </div>

            <div className="border border-blue-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Entretien périodique
              </h3>
              <p className="text-blue-100 leading-7">
                Des interventions planifiées selon la fréquentation et les
                contraintes de votre établissement.
              </p>
            </div>

            <div className="border border-blue-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Intervention ponctuelle
              </h3>
              <p className="text-blue-100 leading-7">
                Pour une remise en état ou un besoin particulier nécessitant
                une intervention spécifique.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMMEUBLES ADMINISTRATIFS */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Entretien d'immeubles administratifs et professionnels
        </h2>

        <p className="text-gray-600 leading-8 mb-5">
          L'entretien d'un immeuble administratif ne se limite pas aux
          bureaux. Les halls, couloirs, escaliers, sanitaires et autres
          espaces communs participent également à l'image du bâtiment.
        </p>

        <p className="text-gray-600 leading-8 mb-5">
          CoproSolutions peut organiser l'entretien de l'ensemble des espaces
          concernés afin d'assurer une prestation cohérente et régulière.
        </p>

        <p className="text-gray-600 leading-8">
          Les modalités d'intervention sont définies en fonction de la taille
          de l'immeuble, de son utilisation et des attentes du gestionnaire
          ou de l'entreprise.
        </p>

      </section>

      {/* POUR QUI */}
      <section className="bg-slate-50 py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Un service destiné aux professionnels
          </h2>

          <div className="space-y-4 text-gray-600 leading-8">

            <p>
              CoproSolutions travaille avec les entreprises, gestionnaires
              immobiliers, propriétaires et responsables de sites souhaitant
              externaliser tout ou partie de l'entretien de leurs locaux.
            </p>

            <p>
              Nous pouvons également intervenir en complément d'une
              organisation existante lorsque des prestations supplémentaires
              sont nécessaires.
            </p>

          </div>

        </div>
      </section>

      {/* ZONE */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Où intervenons-nous ?
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          CoproSolutions intervient à Paris et dans plusieurs départements
          d'Île-de-France, notamment dans les Hauts-de-Seine, les Yvelines,
          le Val-de-Marne et l'Essonne.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Paris (75)",
            "Hauts-de-Seine (92)",
            "Yvelines (78)",
            "Val-de-Marne (94)",
            "Essonne (91)",
          ].map((zone) => (
            <span
              key={zone}
              className="bg-slate-100 border rounded-full px-5 py-2 font-medium"
            >
              {zone}
            </span>
          ))}

        </div>

      </section>

      {/* POURQUOI */}
      <section className="bg-slate-900 text-white py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Pourquoi faire appel à CoproSolutions ?
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="border border-slate-700 rounded-xl p-5">
              <strong>Organisation adaptée</strong>
              <p className="text-slate-300 mt-2">
                Une prestation définie selon la configuration et les besoins
                de chaque site.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-5">
              <strong>Réactivité</strong>
              <p className="text-slate-300 mt-2">
                Une organisation pensée pour répondre rapidement aux besoins
                des professionnels.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-5">
              <strong>Prestations modulables</strong>
              <p className="text-slate-300 mt-2">
                Entretien régulier ou intervention ponctuelle selon votre
                activité.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-5">
              <strong>Un interlocuteur professionnel</strong>
              <p className="text-slate-300 mt-2">
                Une relation directe pour faciliter l'organisation et le
                suivi des prestations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Besoin d'un entretien pour vos bureaux ?
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Présentez-nous votre établissement, sa superficie, sa fréquence
            d'utilisation et vos besoins d'entretien. Nous étudierons votre
            demande afin de vous proposer une solution adaptée.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="/contact"
              className="bg-green-600 text-white px-7 py-3 rounded-xl font-bold hover:bg-green-700"
            >
              Demander un devis
            </a>

            <a
              href="tel:+33658876579"
              className="bg-slate-900 text-white px-7 py-3 rounded-xl font-bold hover:bg-slate-800"
            >
              Appeler le 06 58 87 65 79
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            Email : coprosolutions@coprosolutions.net
          </p>

        </div>

      </section>

    </main>
  );
}
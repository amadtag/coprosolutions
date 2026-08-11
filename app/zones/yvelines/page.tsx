import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Entretien et nettoyage de copropriété dans les Yvelines (78) | CoproSolutions",
  description:
    "CoproSolutions accompagne les syndics et copropriétés dans les Yvelines : nettoyage des parties communes, entretien des immeubles, poubelles, remplacement de gardiens et travaux exceptionnels.",
  alternates: {
    canonical: "/zones/yvelines",
  },
};

export default function YvelinesPage() {
  return (
    <main
      className="max-w-5xl mx-auto px-6 py-12"
      style={{ lineHeight: 1.7 }}
    >
      <h1 className="text-4xl font-bold mb-6">
        Entretien et nettoyage de copropriété dans les Yvelines (78)
      </h1>

      <p className="mb-4">
        <strong>CoproSolutions</strong> accompagne les syndics, conseils
        syndicaux et gestionnaires immobiliers pour l'entretien des
        copropriétés dans les <strong>Yvelines (78)</strong>.
      </p>

      <p className="mb-4">
        Nous intervenons pour le nettoyage et l'entretien des immeubles,
        résidences et parties communes afin de maintenir un environnement
        propre et agréable pour les résidents.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Nos prestations dans les Yvelines
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Entretien régulier des copropriétés</li>
        <li>Nettoyage des halls, escaliers et parties communes</li>
        <li>Nettoyage des ascenseurs et paliers</li>
        <li>Entretien des locaux poubelles</li>
        <li>Sortie et rentrée des containers</li>
        <li>Nettoyage des vitres</li>
        <li>Nettoyage des parkings</li>
        <li>Shampoing des moquettes</li>
        <li>Travaux exceptionnels d'entretien</li>
        <li>Petits travaux et interventions ponctuelles</li>
        <li>Entretien simple des espaces extérieurs</li>
        <li>Remplacement temporaire de gardiens d'immeuble</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Une solution pour les syndics et copropriétés
      </h2>

      <p className="mb-4">
        CoproSolutions adapte ses prestations à la configuration et aux
        besoins de chaque résidence. La fréquence des interventions peut être
        définie selon la taille de l'immeuble, le nombre de halls et les
        équipements présents.
      </p>

      <p className="mb-4">
        Nous accompagnons les syndics et gestionnaires immobiliers dans
        l'organisation de l'entretien quotidien ou ponctuel des copropriétés.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Remplacement de gardien dans les Yvelines
      </h2>

      <p className="mb-4">
        En cas d'absence d'un gardien ou employé d'immeuble, CoproSolutions
        peut accompagner la copropriété afin d'assurer la continuité du
        service.
      </p>

      <p className="mb-4">
        Nous proposons des solutions de remplacement adaptées aux besoins de
        la résidence, pour des périodes temporaires ou plus longues.
      </p>

      <p>
        <a
          href="/remplacement-gardien"
          className="text-blue-600 font-semibold"
        >
          Découvrir notre service de remplacement de gardien
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Intervention à Versailles
      </h2>

      <p className="mb-4">
        CoproSolutions intervient notamment à{" "}
        <strong>Versailles</strong> et dans les communes voisines pour
        l'entretien et le nettoyage des copropriétés.
      </p>

      <p>
        <a
          href="/zones/yvelines/versailles"
          className="text-blue-600 font-semibold"
        >
          Entretien de copropriété à Versailles
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Villes desservies dans les Yvelines
      </h2>

      <p className="mb-4">
        Nous intervenons notamment à Versailles, Saint-Germain-en-Laye,
        Poissy, Sartrouville, Mantes-la-Jolie, Conflans-Sainte-Honorine,
        Houilles, Chatou, Le Chesnay-Rocquencourt et dans d'autres communes
        des Yvelines.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Demander un devis dans les Yvelines
      </h2>

      <p className="mb-4">
        Vous êtes syndic, gestionnaire immobilier ou membre d'un conseil
        syndical ? Contactez CoproSolutions pour présenter les besoins de
        votre copropriété et obtenir une proposition adaptée.
      </p>

      <p className="mb-4">
        <a
          href="/contact"
          className="text-blue-600 font-semibold"
        >
          Demander un devis gratuit
        </a>
      </p>

      <p className="mb-2">
        <a
          href="tel:+33658876579"
          className="text-blue-600 font-semibold"
        >
          📞 Appeler CoproSolutions au 06 58 87 65 79
        </a>
      </p>
    </main>
  );
}
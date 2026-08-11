import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Paris | CoproSolutions",
  description:
    "CoproSolutions accompagne les syndics et copropriétés à Paris : nettoyage des parties communes, entretien des immeubles, gestion des poubelles, interventions ponctuelles et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/paris-75",
  },
};

export default function Page() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px",
        lineHeight: 1.7,
      }}
    >
      <h1>
        Nettoyage et entretien de copropriété à Paris
      </h1>

      <p>
        <strong>CoproSolutions</strong> accompagne les syndics, conseils
        syndicaux et gestionnaires immobiliers pour l'entretien et le
        nettoyage des copropriétés à <strong>Paris (75)</strong>.
      </p>

      <p>
        Nous intervenons dans les différents arrondissements parisiens pour
        assurer l'entretien des parties communes et contribuer au bon
        fonctionnement quotidien des immeubles.
      </p>

      <h2>Nos services d'entretien de copropriété à Paris</h2>

      <ul>
        <li>Nettoyage des halls d'entrée</li>
        <li>Entretien des escaliers et paliers</li>
        <li>Nettoyage des ascenseurs</li>
        <li>Entretien des locaux poubelles</li>
        <li>Sortie et rentrée des containers</li>
        <li>Nettoyage des vitres</li>
        <li>Entretien des parkings et espaces communs</li>
        <li>Interventions ponctuelles et nettoyage approfondi</li>
        <li>Travaux exceptionnels d'entretien</li>
        <li>Remplacement temporaire de gardiens d'immeuble</li>
      </ul>

      <h2>Une entreprise au service des syndics parisiens</h2>

      <p>
        CoproSolutions travaille avec les syndics et gestionnaires
        d'immeubles afin de proposer des prestations adaptées aux
        caractéristiques de chaque copropriété.
      </p>

      <p>
        La fréquence des interventions peut être adaptée selon la taille de
        la résidence, le nombre de bâtiments, les parties communes et les
        besoins des occupants.
      </p>

      <h2>Remplacement de gardien d'immeuble à Paris</h2>

      <p>
        Lorsqu'un gardien ou employé d'immeuble est absent, la continuité du
        service reste essentielle pour la copropriété. CoproSolutions propose
        des solutions de remplacement adaptées aux besoins des résidences.
      </p>

      <p>
        Nous pouvons intervenir pour des besoins temporaires ou pour des
        périodes plus longues selon la situation de la copropriété.
      </p>

      <p>
        <a href="/remplacement-gardien">
          Découvrir notre service de remplacement de gardien
        </a>
      </p>

      <h2>Nettoyage des parties communes</h2>

      <p>
        L'entretien des parties communes comprend notamment le nettoyage des
        sols, halls, escaliers, paliers, ascenseurs et locaux communs.
      </p>

      <p>
        Des interventions spécifiques peuvent également être réalisées pour
        les vitres, parkings, locaux poubelles ou besoins exceptionnels de la
        copropriété.
      </p>

      <p>
        <a href="/nettoyage-copropriete-paris">
          Découvrir notre service de nettoyage de copropriété à Paris
        </a>
      </p>

      <h2>Intervention dans les arrondissements de Paris</h2>

      <p>
        CoproSolutions développe son activité dans les différents
        arrondissements de Paris et notamment dans les secteurs proches des
        Hauts-de-Seine et des Yvelines.
      </p>

      <p>
        Parmi les secteurs desservis figurent notamment le{" "}
        <strong>15e arrondissement</strong> et les communes limitrophes de
        l'ouest parisien.
      </p>

      <p>
        <a href="/zones/paris-15">
          Voir notre service d'entretien de copropriété à Paris 15e
        </a>
      </p>

      <h2>Demander un devis pour votre copropriété à Paris</h2>

      <p>
        Vous êtes syndic, gestionnaire immobilier ou membre d'un conseil
        syndical ? Contactez CoproSolutions pour présenter les besoins de
        votre résidence et obtenir une proposition adaptée.
      </p>

      <p>
        <a href="/contact">
          Demander un devis gratuit
        </a>
      </p>

      <p>
        <a href="tel:+33658876579">
          📞 Appeler CoproSolutions au 06 58 87 65 79
        </a>
      </p>
    </main>
  );
}
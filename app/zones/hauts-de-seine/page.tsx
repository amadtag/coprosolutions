import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Entretien et nettoyage de copropriété dans les Hauts-de-Seine (92) | CoproSolutions",
  description:
    "CoproSolutions accompagne les syndics et copropriétés dans les Hauts-de-Seine : nettoyage des parties communes, entretien des immeubles, gestion des poubelles et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine",
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
        Entretien et nettoyage de copropriété dans les Hauts-de-Seine (92)
      </h1>

      <p>
        <strong>CoproSolutions</strong> accompagne les syndics, conseils
        syndicaux et gestionnaires immobiliers pour l'entretien des
        copropriétés dans les <strong>Hauts-de-Seine (92)</strong>.
      </p>

      <p>
        Nous intervenons pour assurer le nettoyage et l'entretien régulier
        des immeubles, résidences et parties communes, avec des prestations
        adaptées aux besoins de chaque copropriété.
      </p>

      <h2>Nos services dans les Hauts-de-Seine</h2>

      <ul>
        <li>Nettoyage des halls et parties communes</li>
        <li>Entretien des escaliers et paliers</li>
        <li>Nettoyage des ascenseurs</li>
        <li>Entretien des locaux poubelles</li>
        <li>Sortie et rentrée des containers</li>
        <li>Nettoyage des vitres</li>
        <li>Entretien des parkings et espaces communs</li>
        <li>Interventions ponctuelles</li>
        <li>Travaux exceptionnels d'entretien</li>
        <li>Remplacement temporaire de gardiens d'immeuble</li>
      </ul>

      <h2>Une solution pour les syndics et copropriétés</h2>

      <p>
        CoproSolutions travaille avec les syndics et gestionnaires
        immobiliers afin de proposer une organisation adaptée à chaque
        résidence.
      </p>

      <p>
        Les prestations peuvent être organisées selon la taille de
        l'immeuble, le nombre de halls, les équipements et la fréquence
        d'entretien souhaitée.
      </p>

      <h2>Remplacement de gardien d'immeuble</h2>

      <p>
        En cas d'absence d'un gardien ou employé d'immeuble, CoproSolutions
        peut intervenir afin de contribuer à la continuité du service dans
        la copropriété.
      </p>

      <p>
        Nous proposons des solutions de remplacement temporaire ou de plus
        longue durée selon les besoins de la résidence.
      </p>

      <p>
        <a href="/remplacement-gardien">
          Découvrir le service de remplacement de gardien
        </a>
      </p>

      <h2>Nos secteurs d'intervention dans le 92</h2>

      <p>
        CoproSolutions intervient notamment à{" "}
        <strong>Boulogne-Billancourt, Issy-les-Moulineaux,
        Levallois-Perret, Nanterre et Neuilly-sur-Seine</strong>, ainsi que
        dans d'autres communes des Hauts-de-Seine.
      </p>

      <ul>
        <li>
          <a href="/zones/boulogne-billancourt">
            Entretien de copropriété à Boulogne-Billancourt
          </a>
        </li>
        <li>
          <a href="/zones/hauts-de-seine/issy-les-moulineaux">
            Entretien de copropriété à Issy-les-Moulineaux
          </a>
        </li>
        <li>
          <a href="/zones/hauts-de-seine/levallois-perret">
            Entretien de copropriété à Levallois-Perret
          </a>
        </li>
        <li>
          <a href="/zones/hauts-de-seine/nanterre">
            Entretien de copropriété à Nanterre
          </a>
        </li>
        <li>
          <a href="/zones/hauts-de-seine/neuilly-sur-seine">
            Entretien de copropriété à Neuilly-sur-Seine
          </a>
        </li>
      </ul>

      <h2>Demander un devis dans les Hauts-de-Seine</h2>

      <p>
        Vous êtes syndic, gestionnaire immobilier ou membre d'un conseil
        syndical dans les Hauts-de-Seine ? Contactez CoproSolutions pour
        présenter les besoins de votre copropriété et obtenir une
        proposition adaptée.
      </p>

      <p>
        <a href="/contact">Demander un devis gratuit</a>
      </p>

      <p>
        <a href="tel:+33658876579">
          📞 Appeler CoproSolutions au 06 58 87 65 79
        </a>
      </p>
    </main>
  );
}
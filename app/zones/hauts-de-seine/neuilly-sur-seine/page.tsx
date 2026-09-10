import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Neuilly-sur-Seine (92200) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Neuilly-sur-Seine : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/neuilly-sur-seine",
  },
};

export default function NeuillySurSeinePage() {
  return (
    <LocalCityPage
      city="Neuilly-sur-Seine"
      postalCode="92200"
      title="Nettoyage et entretien de copropriété à Neuilly-sur-Seine"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Neuilly-sur-Seine."
      intro={
        <>
          <p>
            À Neuilly-sur-Seine, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            maintenir des espaces propres, agréables et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Neuilly-sur-Seine. Nos interventions sont adaptées
            à la configuration de chaque résidence et aux besoins définis
            avec le gestionnaire.
          </p>

          <p>
            Nous assurons notamment le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, sols, ascenseurs et autres parties
            communes. Nous pouvons également intervenir dans les locaux
            poubelles, pour la sortie et la rentrée des conteneurs ainsi que
            pour le nettoyage des parkings et autres espaces communs de
            l'immeuble.
          </p>

          <p>
            La fréquence des interventions est adaptée à chaque copropriété en
            fonction de sa taille, du nombre de halls, des surfaces à
            entretenir, de la fréquentation et des besoins du syndic ou du
            conseil syndical. Les prestations peuvent être régulières,
            ponctuelles ou exceptionnelles.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété en cas
            d'absence, de congé ou de période de transition.
          </p>

          <p>
            Nous intervenons également auprès des entreprises et immeubles
            professionnels pour le nettoyage et l'entretien de bureaux à
            Neuilly-sur-Seine.{" "}
            <a
              href="/entretien-bureau-immeuble"
              className="font-semibold text-blue-700 hover:underline"
            >
              Découvrir notre service de nettoyage de bureaux →
            </a>
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Levallois-Perret",
          href: "/zones/hauts-de-seine/levallois-perret",
        },
        {
          name: "Nanterre",
          href: "/zones/hauts-de-seine/nanterre",
        },
        {
          name: "Boulogne-Billancourt",
          href: "/zones/boulogne-billancourt",
        },
        {
          name: "Issy-les-Moulineaux",
          href: "/zones/hauts-de-seine/issy-les-moulineaux",
        },
        {
          name: "Paris 16e",
          href: "/zones/paris-75",
        },
        {
          name: "Paris 15e",
          href: "/zones/paris-15",
        },
      ]}
    />
  );
}
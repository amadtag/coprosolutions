import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Levallois-Perret (92300) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Levallois-Perret : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/levallois-perret",
  },
};

export default function LevalloisPerretPage() {
  return (
    <LocalCityPage
      city="Levallois-Perret"
      postalCode="92300"
      title="Nettoyage et entretien de copropriété à Levallois-Perret"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Levallois-Perret."
      intro={
        <>
          <p>
            À Levallois-Perret, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            maintenir des espaces propres, agréables et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Levallois-Perret. Nos interventions sont adaptées à
            la configuration de chaque résidence et aux besoins définis avec
            le gestionnaire.
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
            Levallois-Perret.{" "}
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
          name: "Nanterre",
          href: "/zones/hauts-de-seine/nanterre",
        },
        {
          name: "Neuilly-sur-Seine",
          href: "/zones/hauts-de-seine/neuilly-sur-seine",
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
          name: "Malakoff",
          href: "/zones/hauts-de-seine/malakoff",
        },
        {
          name: "Paris 15e",
          href: "/zones/paris-15",
        },
      ]}
    />
  );
}
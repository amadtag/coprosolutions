import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Saint-Cyr-l'École (78210) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Saint-Cyr-l'École : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
  alternates: {
    canonical: "/zones/yvelines/saint-cyr-l-ecole",
  },
};

export default function SaintCyrLEcolePage() {
  return (
    <LocalCityPage
      city="Saint-Cyr-l'École"
      postalCode="78210"
      title="Nettoyage et entretien de copropriété à Saint-Cyr-l'École"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Saint-Cyr-l'École."
      intro={
        <>
          <p>
            À Saint-Cyr-l'École, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            conserver des espaces propres, agréables et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Saint-Cyr-l'École. Les prestations sont adaptées à
            la configuration de chaque résidence et aux besoins définis avec
            le gestionnaire.
          </p>

          <p>
            Nous assurons notamment le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, sols, ascenseurs et autres parties
            communes. Nous pouvons également intervenir dans les locaux
            poubelles, pour la sortie et la rentrée des conteneurs ainsi que
            pour le nettoyage des parkings et autres espaces collectifs de
            l'immeuble.
          </p>

          <p>
            La fréquence des interventions est adaptée à chaque copropriété en
            fonction de sa taille, des surfaces à entretenir, de la
            fréquentation et des besoins du syndic ou du conseil syndical.
            Les prestations peuvent être régulières, ponctuelles ou
            exceptionnelles.
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
            Saint-Cyr-l'École.{" "}
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
          name: "Versailles",
          href: "/zones/yvelines/versailles",
        },
        {
          name: "Montigny-le-Bretonneux",
          href: "/zones/yvelines/montigny-le-bretonneux",
        },
        {
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
      ]}
    />
  );
}
import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Saint-Germain-en-Laye (78100) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Saint-Germain-en-Laye : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
  alternates: {
    canonical: "/zones/yvelines/saint-germain-en-laye",
  },
};

export default function SaintGermainEnLayePage() {
  return (
    <LocalCityPage
      city="Saint-Germain-en-Laye"
      postalCode="78100"
      title="Nettoyage et entretien de copropriété à Saint-Germain-en-Laye"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Saint-Germain-en-Laye."
      intro={
        <>
          <p>
            À Saint-Germain-en-Laye, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            conserver des espaces propres, agréables et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Saint-Germain-en-Laye. Les prestations sont adaptées
            à la configuration de chaque résidence et aux besoins définis avec
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
            Saint-Germain-en-Laye.{" "}
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
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
        {
          name: "Le Vésinet",
          href: "/zones/yvelines/le-vesinet",
        },
        {
          name: "Chatou",
          href: "/zones/yvelines/chatou",
        },
        {
          name: "Versailles",
          href: "/zones/yvelines/versailles",
        },
      ]}
    />
  );
}
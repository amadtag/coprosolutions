import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Louveciennes (78430) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Louveciennes : parties communes, halls, escaliers, parkings, poubelles et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/yvelines/louveciennes",
  },
};

export default function LouveciennesPage() {
  return (
    <LocalCityPage
      city="Louveciennes"
      postalCode="78430"
      title="Nettoyage et entretien de copropriété à Louveciennes"
      description="CoproSolutions accompagne les syndics et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Louveciennes."
      intro={
        <>
          <p>
            Louveciennes compte plusieurs résidences et copropriétés dont
            l'entretien régulier des parties communes contribue au confort
            des résidents et à la bonne tenue des immeubles.
          </p>

          <p>
            CoproSolutions intervient pour le nettoyage des halls d'entrée,
            escaliers, paliers, ascenseurs, locaux poubelles, parkings et
            circulations communes des copropriétés à Louveciennes.
          </p>

          <p>
            Les prestations sont adaptées à la configuration de chaque
            résidence, à sa fréquentation et aux besoins définis avec le
            syndic ou le gestionnaire immobilier.
          </p>

          <p>
            CoproSolutions peut également assurer le remplacement temporaire
            ou prolongé d'un gardien d'immeuble afin de maintenir la continuité
            des services au sein de la copropriété.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Marly-le-Roi",
          href: "/zones/yvelines/marly-le-roi",
        },
        {
          name: "Le Port-Marly",
          href: "/zones/yvelines/le-port-marly",
        },
        {
          name: "La Celle-Saint-Cloud",
          href: "/zones/yvelines/la-celle-saint-cloud",
        },
      ]}
    />
  );
}
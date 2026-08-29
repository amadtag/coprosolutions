import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Entretien et nettoyage de copropriété au Plessis-Robinson (92350) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien des copropriétés au Plessis-Robinson : nettoyage des parties communes, halls, escaliers, poubelles, parkings et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/le-plessis-robinson",
  },
};

export default function LePlessisRobinsonPage() {
  return (
    <LocalCityPage
      city="Le Plessis-Robinson"
      postalCode="92350"
      title="Entretien et nettoyage de copropriété au Plessis-Robinson"
      description="CoproSolutions accompagne les syndics, gestionnaires immobiliers et conseils syndicaux du Plessis-Robinson pour l'entretien régulier des copropriétés, le nettoyage des parties communes et le remplacement de gardiens."
      intro={
        <>
          <p>
            À proximité de Clamart, Châtenay-Malabry et Meudon, Le
            Plessis-Robinson compte de nombreuses résidences et ensembles
            immobiliers dont l'entretien des parties communes nécessite une
            organisation régulière et adaptée à chaque immeuble.
          </p>

          <p>
            CoproSolutions intervient au Plessis-Robinson pour assurer le
            nettoyage et l'entretien des halls d'entrée, escaliers, paliers,
            ascenseurs, locaux poubelles, parkings et autres espaces communs
            des copropriétés.
          </p>

          <p>
            Les prestations peuvent être organisées selon la configuration de
            l'immeuble, sa fréquentation et les besoins définis avec le syndic
            ou le gestionnaire immobilier. L'objectif est d'assurer des
            parties communes propres, entretenues et suivies dans la durée.
          </p>

          <p>
            CoproSolutions peut également accompagner les copropriétés lors
            d'un besoin ponctuel ou prolongé de remplacement de gardien
            d'immeuble, notamment pendant une absence, un congé ou une période
            de transition.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Meudon",
          href: "/zones/hauts-de-seine/meudon",
        },
        {
          name: "Châtenay-Malabry",
          href: "/zones/hauts-de-seine/chatenay-malabry",
        },
      ]}
    />
  );
}
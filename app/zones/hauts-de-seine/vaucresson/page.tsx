import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Vaucresson (92420) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Vaucresson : parties communes, halls, escaliers, parkings, poubelles et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/vaucresson",
  },
};

export default function VaucressonPage() {
  return (
    <LocalCityPage
      city="Vaucresson"
      postalCode="92420"
      title="Nettoyage et entretien de copropriété à Vaucresson"
      description="CoproSolutions accompagne les syndics et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Vaucresson."
      intro={
        <>
          <p>
            Vaucresson compte de nombreuses résidences et copropriétés dont
            l'entretien des parties communes nécessite une organisation
            régulière et adaptée à chaque immeuble.
          </p>

          <p>
            CoproSolutions intervient pour le nettoyage des halls d'entrée,
            escaliers, paliers, ascenseurs, locaux poubelles, parkings et
            circulations communes des copropriétés à Vaucresson.
          </p>

          <p>
            Les prestations sont définies selon la configuration de
            l'immeuble, sa fréquentation et les besoins du syndic ou du
            gestionnaire immobilier, avec des interventions adaptées à la
            taille de chaque copropriété.
          </p>

          <p>
            CoproSolutions peut également assurer le remplacement temporaire
            ou prolongé d'un gardien d'immeuble afin de maintenir la continuité
            des services au sein de la résidence.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Garches",
          href: "/zones/hauts-de-seine/garches",
        },
        {
          name: "Marnes-la-Coquette",
          href: "/zones/hauts-de-seine/marnes-la-coquette",
        },
        {
          name: "Sèvres",
          href: "/zones/hauts-de-seine/sevres",
        },
      ]}
    />
  );
}
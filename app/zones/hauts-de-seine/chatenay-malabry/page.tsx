import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Châtenay-Malabry (92290) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Châtenay-Malabry : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/chatenay-malabry",
  },
};

export default function ChatenayMalabryPage() {
  return (
    <LocalCityPage
      city="Châtenay-Malabry"
      postalCode="92290"
      title="Nettoyage et entretien de copropriété à Châtenay-Malabry"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Châtenay-Malabry."
      intro={
        <>
          <p>
            Châtenay-Malabry compte de nombreuses résidences et copropriétés
            dont les parties communes nécessitent un entretien régulier et
            organisé.
          </p>

          <p>
            CoproSolutions intervient notamment pour le nettoyage des halls,
            escaliers, paliers, ascenseurs, locaux poubelles, parkings et
            circulations communes.
          </p>

          <p>
            Les prestations sont adaptées à la configuration de chaque
            résidence, à sa fréquentation et à la fréquence d'intervention
            souhaitée par le syndic ou le gestionnaire immobilier.
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
          name: "Le Plessis-Robinson",
          href: "/zones/hauts-de-seine/le-plessis-robinson",
        },
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Meudon",
          href: "/zones/hauts-de-seine/meudon",
        },
      ]}
    />
  );
}
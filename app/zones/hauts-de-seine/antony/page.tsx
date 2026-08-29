import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Antony (92160) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Antony : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/antony",
  },
};

export default function AntonyPage() {
  return (
    <LocalCityPage
      city="Antony"
      postalCode="92160"
      title="Nettoyage et entretien de copropriété à Antony"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Antony."
      intro={
        <>
          <p>
            Antony compte de nombreuses résidences et copropriétés dont les
            parties communes nécessitent un entretien régulier et organisé.
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
          name: "Bagneux",
          href: "/zones/hauts-de-seine/bagneux",
        },
        {
          name: "Châtenay-Malabry",
          href: "/zones/hauts-de-seine/chatenay-malabry",
        },
        {
          name: "Fontenay-aux-Roses",
          href: "/zones/hauts-de-seine/fontenay-aux-roses",
        },
      ]}
    />
  );
}
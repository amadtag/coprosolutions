import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Châtillon (92320) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Châtillon : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/chatillon",
  },
};

export default function ChatillonPage() {
  return (
    <LocalCityPage
      city="Châtillon"
      postalCode="92320"
      title="Nettoyage et entretien de copropriété à Châtillon"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Châtillon."
      intro={
        <>
          <p>
            Châtillon compte de nombreuses résidences et copropriétés dont les
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
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Fontenay-aux-Roses",
          href: "/zones/hauts-de-seine/fontenay-aux-roses",
        },
      ]}
    />
  );
}
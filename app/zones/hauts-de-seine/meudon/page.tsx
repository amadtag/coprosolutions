import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Meudon (92190) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Meudon : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/meudon",
  },
};

export default function MeudonPage() {
  return (
    <LocalCityPage
      city="Meudon"
      postalCode="92190"
      title="Nettoyage et entretien de copropriété à Meudon"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Meudon."
      intro={
        <>
          <p>
            Meudon compte de nombreuses résidences et copropriétés dont les
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
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Châtenay-Malabry",
          href: "/zones/hauts-de-seine/chatenay-malabry",
        },
        {
          name: "Le Plessis-Robinson",
          href: "/zones/hauts-de-seine/le-plessis-robinson",
        },
      ]}
    />
  );
}
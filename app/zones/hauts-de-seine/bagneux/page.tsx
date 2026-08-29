import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Bagneux (92220) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Bagneux : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/bagneux",
  },
};

export default function BagneuxPage() {
  return (
    <LocalCityPage
      city="Bagneux"
      postalCode="92220"
      title="Nettoyage et entretien de copropriété à Bagneux"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Bagneux."
      intro={
        <>
          <p>
            Bagneux compte de nombreuses résidences et copropriétés dont les
            parties communes nécessitent un entretien régulier et organisé.
          </p>

          <p>
            CoproSolutions intervient notamment pour les halls, escaliers,
            paliers, ascenseurs, locaux poubelles, parkings et circulations
            communes.
          </p>

          <p>
            Les prestations sont adaptées à la configuration de chaque
            immeuble, à sa fréquentation et à la fréquence de passage
            souhaitée.
          </p>

          <p>
            CoproSolutions peut également étudier les besoins de remplacement
            temporaire ou prolongé d'un gardien d'immeuble afin d'assurer la
            continuité des services de la copropriété.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Antony",
          href: "/zones/hauts-de-seine/antony",
        },
        {
          name: "Châtillon",
          href: "/zones/hauts-de-seine/chatillon",
        },
        {
          name: "Fontenay-aux-Roses",
          href: "/zones/hauts-de-seine/fontenay-aux-roses",
        },
      ]}
    />
  );
}
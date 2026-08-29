import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Malakoff (92240) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Malakoff : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/malakoff",
  },
};

export default function MalakoffPage() {
  return (
    <LocalCityPage
      city="Malakoff"
      postalCode="92240"
      title="Nettoyage et entretien de copropriété à Malakoff"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Malakoff."
      intro={
        <>
          <p>
            Malakoff compte de nombreuses résidences et copropriétés dont les
            parties communes nécessitent un entretien régulier et organisé.
          </p>

          <p>
            CoproSolutions intervient notamment pour les halls, escaliers,
            paliers, ascenseurs, locaux poubelles, parkings et circulations
            communes.
          </p>

          <p>
            Les prestations sont adaptées à la configuration de chaque
            immeuble, à sa fréquentation et à la fréquence d'intervention
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
          name: "Montrouge",
          href: "/zones/hauts-de-seine/montrouge",
        },
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Issy-les-Moulineaux",
          href: "/zones/hauts-de-seine/issy-les-moulineaux",
        },
      ]}
    />
  );
}
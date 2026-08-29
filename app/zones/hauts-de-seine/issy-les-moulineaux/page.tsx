import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Issy-les-Moulineaux (92130) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Issy-les-Moulineaux : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/issy-les-moulineaux",
  },
};

export default function IssyLesMoulineauxPage() {
  return (
    <LocalCityPage
      city="Issy-les-Moulineaux"
      postalCode="92130"
      title="Nettoyage et entretien de copropriété à Issy-les-Moulineaux"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Issy-les-Moulineaux."
      intro={
        <>
          <p>
            Issy-les-Moulineaux compte de nombreuses copropriétés, résidences
            et immeubles professionnels dont l'entretien nécessite une
            organisation régulière et adaptée à chaque bâtiment.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux dans l'organisation du nettoyage et de
            l'entretien des immeubles à Issy-les-Moulineaux.
          </p>

          <p>
            Nos prestations sont adaptées à la configuration de chaque
            résidence, au nombre de halls, aux surfaces, à la fréquentation
            des espaces communs et à la fréquence d'intervention souhaitée.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Boulogne-Billancourt",
          href: "/zones/boulogne-billancourt",
        },
        {
          name: "Meudon",
          href: "/zones/hauts-de-seine/meudon",
        },
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
                },
        {
          name: "Malakoff",
          href: "/zones/hauts-de-seine/malakoff",
        },
        {
          name: "Paris 15e",
          href: "/zones/paris-15",
        },
      ]}
    />
  );
}
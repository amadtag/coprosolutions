import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Nanterre (92000) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Nanterre : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/nanterre",
  },
};

export default function NanterrePage() {
  return (
    <LocalCityPage
      city="Nanterre"
      postalCode="92000"
      title="Nettoyage et entretien de copropriété à Nanterre"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Nanterre."
      intro={
        <>
          <p>
            Nanterre compte de nombreuses copropriétés, résidences et immeubles
            professionnels dont les parties communes nécessitent un entretien
            régulier et organisé.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux dans l'organisation du nettoyage et de
            l'entretien des immeubles à Nanterre.
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
          name: "Neuilly-sur-Seine",
          href: "/zones/hauts-de-seine/neuilly-sur-seine",
        },
        {
          name: "Levallois-Perret",
          href: "/zones/hauts-de-seine/levallois-perret",
        },
        {
          name: "Issy-les-Moulineaux",
          href: "/zones/hauts-de-seine/issy-les-moulineaux",
        },
        {
          name: "Boulogne-Billancourt",
          href: "/zones/boulogne-billancourt",
        },
      ]}
    />
  );
}
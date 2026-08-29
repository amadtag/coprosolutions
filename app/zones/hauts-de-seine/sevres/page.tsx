import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Sèvres (92310) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Sèvres : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/sevres",
  },
};

export default function SevresPage() {
  return (
    <LocalCityPage
      city="Sèvres"
      postalCode="92310"
      title="Nettoyage et entretien de copropriété à Sèvres"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Sèvres."
      intro="À Sèvres, CoproSolutions accompagne les copropriétés, syndics et gestionnaires immobiliers avec des prestations d'entretien adaptées à chaque résidence. Nous intervenons pour le nettoyage des parties communes, halls, escaliers, paliers, ascenseurs, locaux poubelles et autres espaces collectifs."
    />
  );
}
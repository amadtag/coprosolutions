import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Fontenay-aux-Roses (92260) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Fontenay-aux-Roses : halls, escaliers, parties communes, poubelles, parkings et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/fontenay-aux-roses",
  },
};

export default function FontenayAuxRosesPage() {
  return (
    <LocalCityPage
      city="Fontenay-aux-Roses"
      postalCode="92260"
      title="Nettoyage et entretien de copropriété à Fontenay-aux-Roses"
      description="CoproSolutions accompagne les syndics et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés et immeubles à Fontenay-aux-Roses."
      intro={
        <>
          <p>
            Fontenay-aux-Roses accueille de nombreuses résidences et
            copropriétés nécessitant un entretien régulier des parties
            communes.
          </p>
          <p>
            Nous pouvons intervenir pour les halls, escaliers, paliers,
            ascenseurs, locaux poubelles, parkings et autres espaces communs.
          </p>
          <p>
            L'organisation des prestations est définie selon la taille de
            l'immeuble et les besoins de la résidence.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Bagneux",
          href: "/zones/hauts-de-seine/bagneux",
        },
        {
          name: "Châtillon",
          href: "/zones/hauts-de-seine/chatillon",
        },
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
      ]}
    />
  );
}
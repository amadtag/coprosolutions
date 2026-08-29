import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage et entretien de copropriété à Clamart (92140) | CoproSolutions",
  description:
    "CoproSolutions assure l'entretien et le nettoyage des copropriétés à Clamart : halls, escaliers, parties communes, poubelles, parkings et remplacement de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/clamart",
  },
};

export default function ClamartPage() {
  return (
    <LocalCityPage
      city="Clamart"
      postalCode="92140"
      title="Nettoyage et entretien de copropriété à Clamart"
      description="CoproSolutions accompagne les syndics et gestionnaires immobiliers pour l'entretien et le nettoyage des copropriétés et immeubles à Clamart."
      intro={
        <>
          <p>
            Clamart compte de nombreuses résidences et copropriétés dont les
            parties communes nécessitent un entretien régulier.
          </p>
          <p>
            Nous intervenons notamment pour les halls, escaliers, paliers,
            ascenseurs, locaux poubelles, parkings et autres espaces communs.
          </p>
          <p>
            Les prestations sont adaptées à la configuration de l'immeuble et
            à la fréquence d'intervention souhaitée.
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Meudon",
          href: "/zones/hauts-de-seine/meudon",
        },
        {
          name: "Châtillon",
          href: "/zones/hauts-de-seine/chatillon",
        },
        {
          name: "Malakoff",
          href: "/zones/hauts-de-seine/malakoff",
        },
      ]}
    />
  );
}
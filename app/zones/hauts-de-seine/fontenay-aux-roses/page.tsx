import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Fontenay-aux-Roses (92260) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Fontenay-aux-Roses : halls, escaliers, parties communes, poubelles, parkings et entretien d'immeubles.",
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
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés à Fontenay-aux-Roses."
      intro={
        <>
          <p>
            À Fontenay-aux-Roses, les résidences et copropriétés nécessitent un
            entretien régulier des parties communes pour maintenir des espaces
            propres, agréables et correctement entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, ascenseurs et autres espaces communs
            des immeubles à Fontenay-aux-Roses.
          </p>

          <p>
            Nos prestations peuvent également inclure l'entretien des locaux
            poubelles, la sortie et la rentrée des conteneurs, le nettoyage des
            parkings et l'entretien courant des différentes zones communes de
            la copropriété.
          </p>

          <p>
            La fréquence des interventions est définie selon les
            caractéristiques de chaque résidence : nombre de halls, surfaces,
            fréquentation de l'immeuble et niveau d'entretien souhaité par le
            syndic ou le gestionnaire immobilier.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété en cas
            d'absence.
          </p>

          <p>
            Pour les entreprises et immeubles professionnels de
            Fontenay-aux-Roses, découvrez également notre service de{" "}
            <a
              href="/entretien-bureau-immeuble"
              className="underline font-medium"
            >
              nettoyage et entretien de bureaux
            </a>
            .
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
import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Malakoff (92240) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Malakoff : halls, escaliers, parties communes, poubelles, parkings et entretien d'immeubles.",
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
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés à Malakoff."
      intro={
        <>
          <p>
            À Malakoff, les résidences et copropriétés nécessitent un entretien
            régulier des parties communes afin de maintenir des espaces
            propres, agréables et correctement entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, ascenseurs et autres espaces communs
            des immeubles à Malakoff.
          </p>

          <p>
            Nos prestations peuvent également comprendre l'entretien des
            locaux poubelles, la sortie et la rentrée des conteneurs, le
            nettoyage des parkings ainsi que l'entretien courant des
            différentes zones communes de la copropriété.
          </p>

          <p>
            La fréquence des interventions est adaptée à chaque résidence en
            fonction de sa configuration, du nombre de halls, des surfaces à
            entretenir, de la fréquentation et des besoins définis avec le
            syndic ou le gestionnaire immobilier.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété en cas
            d'absence.
          </p>

          <p>
            Pour les entreprises et immeubles professionnels de Malakoff,
            découvrez également notre service de{" "}
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
          name: "Châtillon",
          href: "/zones/hauts-de-seine/chatillon",
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
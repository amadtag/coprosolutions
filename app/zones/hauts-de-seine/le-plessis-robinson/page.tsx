import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété au Plessis-Robinson (92350) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés au Plessis-Robinson : halls, escaliers, parties communes, poubelles, parkings et entretien d'immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/le-plessis-robinson",
  },
};

export default function LePlessisRobinsonPage() {
  return (
    <LocalCityPage
      city="Le Plessis-Robinson"
      postalCode="92350"
      title="Nettoyage et entretien de copropriété au Plessis-Robinson"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés au Plessis-Robinson."
      intro={
        <>
          <p>
            Au Plessis-Robinson, les résidences et copropriétés nécessitent un
            entretien régulier des parties communes afin de maintenir des
            espaces propres, agréables et correctement entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, ascenseurs et autres espaces communs
            des immeubles au Plessis-Robinson.
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
            Pour les entreprises et immeubles professionnels du
            Plessis-Robinson, découvrez également notre service de{" "}
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
          name: "Châtenay-Malabry",
          href: "/zones/hauts-de-seine/chatenay-malabry",
        },
        {
          name: "Clamart",
          href: "/zones/hauts-de-seine/clamart",
        },
        {
          name: "Meudon",
          href: "/zones/hauts-de-seine/meudon",
        },
      ]}
    />
  );
}
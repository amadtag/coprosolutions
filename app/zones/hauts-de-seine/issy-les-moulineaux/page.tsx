import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Issy-les-Moulineaux (92130) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Issy-les-Moulineaux : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
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
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Issy-les-Moulineaux."
      intro={
        <>
          <p>
            À Issy-les-Moulineaux, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            conserver des espaces propres, accueillants et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Issy-les-Moulineaux. Nos interventions sont
            adaptées à la configuration de chaque résidence et aux besoins
            définis avec le gestionnaire.
          </p>

          <p>
            Nous assurons notamment le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, sols, ascenseurs, locaux communs et
            autres espaces partagés de l'immeuble. Nous pouvons également
            intervenir pour l'entretien des locaux poubelles, la sortie et la
            rentrée des conteneurs ainsi que le nettoyage des parkings.
          </p>

          <p>
            La fréquence des interventions peut être définie selon la taille
            de la copropriété, le nombre de halls, les surfaces à entretenir,
            la fréquentation des parties communes et les besoins du syndic ou
            du conseil syndical. Les prestations peuvent être régulières,
            ponctuelles ou exceptionnelles.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété en cas
            d'absence, de congé ou de période de transition.
          </p>

          <p>
            Nous intervenons également auprès des entreprises et immeubles
            professionnels pour l'entretien des bureaux et locaux
            professionnels à Issy-les-Moulineaux.{" "}
            <a
              href="/entretien-bureau-immeuble"
              className="font-semibold text-blue-700 hover:underline"
            >
              Découvrir notre service de nettoyage de bureaux →
            </a>
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
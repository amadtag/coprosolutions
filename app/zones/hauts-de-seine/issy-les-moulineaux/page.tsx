import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Issy-les-Moulineaux (92130) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien de copropriétés à Issy-les-Moulineaux : parties communes, halls, escaliers, poubelles, parkings et entretien d'immeubles.",
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
            Issy-les-Moulineaux compte de nombreuses copropriétés, résidences
            et immeubles dont les parties communes nécessitent un entretien
            régulier et une organisation adaptée à chaque bâtiment.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux dans l'organisation du nettoyage et de
            l'entretien des immeubles à Issy-les-Moulineaux.
          </p>

          <p>
            Nos prestations de nettoyage de copropriété sont adaptées à la
            configuration de chaque résidence, au nombre de halls, aux
            surfaces, à la fréquentation des espaces communs et à la fréquence
            d'intervention souhaitée.
          </p>

          <p>
            Nous intervenons notamment pour le nettoyage des halls d'entrée,
            escaliers, couloirs, sols, parties communes, locaux poubelles et
            parkings. Les interventions peuvent être régulières ou ponctuelles
            selon les besoins de la copropriété.
          </p>

          <p>
            CoproSolutions peut également accompagner les entreprises et
            gestionnaires d'immeubles professionnels pour l'entretien de leurs
            bureaux et locaux professionnels à Issy-les-Moulineaux.
            {" "}
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
import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Rueil-Malmaison (92500) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Rueil-Malmaison : halls, escaliers, parties communes, poubelles, parkings et immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/rueil-malmaison",
  },
};

export default function RueilMalmaisonPage() {
  return (
    <LocalCityPage
      city="Rueil-Malmaison"
      postalCode="92500"
      title="Nettoyage et entretien de copropriété à Rueil-Malmaison"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Rueil-Malmaison."
      intro={
        <>
          <p>
            À Rueil-Malmaison, les copropriétés, résidences et immeubles
            nécessitent un entretien régulier des parties communes afin de
            conserver des espaces propres, agréables et correctement
            entretenus.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage et l'entretien des
            copropriétés à Rueil-Malmaison. Les prestations sont adaptées à la
            configuration de chaque résidence et aux besoins définis avec le
            gestionnaire.
          </p>

          <p>
            Nous assurons notamment le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, sols, ascenseurs et autres parties
            communes. Nous pouvons également intervenir dans les locaux
            poubelles, pour la sortie et la rentrée des conteneurs ainsi que
            pour le nettoyage des parkings et autres espaces collectifs de
            l'immeuble.
          </p>

          <p>
            La fréquence des interventions est adaptée à chaque copropriété en
            fonction de sa taille, des surfaces à entretenir, de la
            fréquentation et des besoins du syndic ou du conseil syndical.
            Les prestations peuvent être régulières, ponctuelles ou
            exceptionnelles.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété en cas
            d'absence, de congé ou de période de transition.
          </p>

          <p>
            Nous intervenons également auprès des entreprises et immeubles
            professionnels pour le nettoyage et l'entretien de bureaux à
            Rueil-Malmaison.{" "}
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
          name: "Nanterre",
          href: "/zones/hauts-de-seine/nanterre",
        },
        {
          name: "Suresnes",
          href: "/zones/hauts-de-seine/suresnes",
        },
        {
          name: "Garches",
          href: "/zones/hauts-de-seine/garches",
        },
        {
          name: "Vaucresson",
          href: "/zones/hauts-de-seine/vaucresson",
        },
      ]}
    />
  );
}
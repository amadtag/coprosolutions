import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété et de bureaux à Courbevoie | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage de copropriétés, bureaux et immeubles à Courbevoie (92400), ainsi que le remplacement temporaire de gardiens.",
  alternates: {
    canonical: "/zones/hauts-de-seine/courbevoie",
  },
};

export default function CourbevoiePage() {
  return (
    <LocalCityPage
      city="Courbevoie"
      postalCode="92400"
      title="Nettoyage de copropriété et de bureaux à Courbevoie"
      description="CoproSolutions accompagne les syndics, conseils syndicaux, gestionnaires immobiliers et entreprises pour l'entretien des immeubles, copropriétés et bureaux à Courbevoie."
      intro={
        <>
          <p>
            À Courbevoie, l'entretien régulier des immeubles et des espaces
            professionnels contribue au bon fonctionnement des résidences,
            copropriétés et bâtiments de bureaux. CoproSolutions intervient
            pour assurer le nettoyage des parties communes et l'entretien
            courant des immeubles.
          </p>

          <p>
            Nous accompagnons les syndics, conseils syndicaux et gestionnaires
            immobiliers pour le nettoyage des copropriétés à Courbevoie. Les
            interventions peuvent concerner les halls d'entrée, escaliers,
            paliers, couloirs, ascenseurs, sols, locaux poubelles et parkings.
          </p>

          <p>
            Les prestations peuvent être organisées de manière régulière ou
            ponctuelle selon la configuration de l'immeuble et les besoins
            définis avec le gestionnaire. CoproSolutions peut également
            intervenir pour des prestations spécifiques comme la sortie et la
            rentrée des poubelles, le nettoyage des vitres ou certains travaux
            d'entretien exceptionnels.
          </p>

          <p>
            CoproSolutions intervient également pour le{" "}
            <strong>remplacement temporaire ou prolongé de gardiens
            d'immeuble</strong> à Courbevoie. Cette solution peut être mise en
            place notamment lors d'une absence, d'un congé ou d'une période de
            transition, afin d'assurer la continuité des services au sein de
            la copropriété.
          </p>

          <p>
            Nous proposons aussi le nettoyage et l'entretien de bureaux et
            d'immeubles professionnels à Courbevoie. Les prestations peuvent
            être adaptées aux horaires, aux surfaces et à la fréquentation des
            locaux.
          </p>

          <p>
            Pour les entreprises, syndics et gestionnaires recherchant une
            solution d'entretien adaptée, CoproSolutions peut ainsi intervenir
            sur les copropriétés comme sur les immeubles de bureaux.
          </p>

          <p>
            <a
              href="/entretien-bureau-immeuble"
              className="font-semibold text-blue-700 hover:underline"
            >
              Découvrir notre service de nettoyage de bureaux →
            </a>
          </p>

          <p>
            <a
              href="/remplacement-gardien"
              className="font-semibold text-blue-700 hover:underline"
            >
              Découvrir notre service de remplacement de gardiens →
            </a>
          </p>
        </>
      }
      nearbyCities={[
        {
          name: "Levallois-Perret",
          href: "/zones/hauts-de-seine/levallois-perret",
        },
        {
          name: "Nanterre",
          href: "/zones/hauts-de-seine/nanterre",
        },
        {
          name: "Neuilly-sur-Seine",
          href: "/zones/hauts-de-seine/neuilly-sur-seine",
        },
        {
          name: "Rueil-Malmaison",
          href: "/zones/hauts-de-seine/rueil-malmaison",
        },
        {
          name: "Boulogne-Billancourt",
          href: "/zones/boulogne-billancourt",
        },
        {
          name: "Paris 17e",
          href: "/zones/paris-17",
        },
      ]}
    />
  );
}
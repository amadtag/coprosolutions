import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Neuilly-sur-Seine (92200) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien de copropriétés à Neuilly-sur-Seine : parties communes, halls, escaliers, poubelles, parkings et entretien d'immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/neuilly-sur-seine",
  },
};

export default function NeuillySurSeinePage() {
  return (
    <LocalCityPage
      city="Neuilly-sur-Seine"
      postalCode="92200"
      title="Nettoyage et entretien de copropriété à Neuilly-sur-Seine"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés, résidences et immeubles à Neuilly-sur-Seine."
      intro={
        <>
          <p>
            Neuilly-sur-Seine compte de nombreuses copropriétés, résidences et
            immeubles dont les parties communes nécessitent un entretien
            régulier et une organisation adaptée à chaque bâtiment.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux dans l'organisation du nettoyage et de
            l'entretien des immeubles à Neuilly-sur-Seine.
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
            parkings, avec des prestations régulières ou ponctuelles selon les
            besoins de la copropriété.
          </p>

          <p>
            CoproSolutions intervient également auprès des immeubles
            professionnels et des bureaux à Neuilly-sur-Seine.
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
          name: "Levallois-Perret",
          href: "/zones/hauts-de-seine/levallois-perret",
        },
        {
          name: "Nanterre",
          href: "/zones/hauts-de-seine/nanterre",
        },
        {
          name: "Boulogne-Billancourt",
          href: "/zones/boulogne-billancourt",
        },
        {
          name: "Issy-les-Moulineaux",
          href: "/zones/hauts-de-seine/issy-les-moulineaux",
        },
        {
          name: "Paris 16e",
          href: "/zones/paris-75",
        },
        {
          name: "Paris 15e",
          href: "/zones/paris-15",
        },
      ]}
    />
  );
}
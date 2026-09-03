
import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Antony (92160) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien de copropriétés à Antony : parties communes, halls, escaliers, poubelles, parkings et entretien d'immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/antony",
  },
};

export default function AntonyPage() {
  return (
    <LocalCityPage
      city="Antony"
      postalCode="92160"
      title="Nettoyage et entretien de copropriété à Antony"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés à Antony."
      intro={
        <>
          <p>
            Antony compte de nombreuses résidences et copropriétés dont les
            parties communes nécessitent un entretien régulier, organisé et
            adapté à la configuration de chaque immeuble.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour assurer le nettoyage des halls,
            escaliers, paliers, ascenseurs, couloirs et autres espaces
            communs des résidences à Antony.
          </p>

          <p>
            Nos prestations peuvent également comprendre l'entretien des
            locaux poubelles, la sortie et la rentrée des conteneurs, le
            nettoyage des parkings ainsi que l'entretien courant des
            différentes zones communes de l'immeuble.
          </p>

          <p>
            La fréquence des interventions est adaptée aux besoins de chaque
            copropriété, en fonction du nombre de halls, des surfaces, de la
            fréquentation des lieux et des attentes du syndic ou du
            gestionnaire immobilier.
          </p>

          <p>
            CoproSolutions propose également des solutions de remplacement
            temporaire ou prolongé de gardien d'immeuble afin d'assurer la
            continuité des services au sein de la copropriété.
          </p>

          <p>
            Pour les immeubles professionnels et entreprises situés à Antony,
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
          name: "Bagneux",
          href: "/zones/hauts-de-seine/bagneux",
        },
        {
          name: "Châtenay-Malabry",
          href: "/zones/hauts-de-seine/chatenay-malabry",
        },
        {
          name: "Fontenay-aux-Roses",
          href: "/zones/hauts-de-seine/fontenay-aux-roses",
        },
      ]}
    />
  );
}
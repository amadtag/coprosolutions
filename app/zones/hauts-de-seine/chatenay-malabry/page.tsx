import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Châtenay-Malabry (92290) | CoproSolutions",
  description:
    "CoproSolutions assure le nettoyage et l'entretien des copropriétés à Châtenay-Malabry : halls, escaliers, parties communes, poubelles, parkings et entretien d'immeubles.",
  alternates: {
    canonical: "/zones/hauts-de-seine/chatenay-malabry",
  },
};

export default function ChatenayMalabryPage() {
  return (
    <LocalCityPage
      city="Châtenay-Malabry"
      postalCode="92290"
      title="Nettoyage et entretien de copropriété à Châtenay-Malabry"
      description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour le nettoyage et l'entretien des copropriétés à Châtenay-Malabry."
      intro={
        <>
          <p>
            À Châtenay-Malabry, les résidences et copropriétés nécessitent un
            entretien régulier des espaces communs afin de préserver la
            propreté, l'hygiène et le bon état des immeubles.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux pour le nettoyage des halls d'entrée,
            escaliers, paliers, couloirs, ascenseurs et autres espaces communs
            des résidences à Châtenay-Malabry.
          </p>

          <p>
            Nos prestations comprennent également l'entretien des locaux
            poubelles, la sortie et la rentrée des conteneurs, le nettoyage des
            parkings et l'entretien courant des différentes zones communes de
            l'immeuble.
          </p>

          <p>
            Chaque prestation peut être organisée selon la configuration de la
            copropriété, le nombre de halls, les surfaces à entretenir, la
            fréquentation de la résidence et la fréquence d'intervention
            souhaitée par le syndic.
          </p>

          <p>
            CoproSolutions propose également le remplacement temporaire ou
            prolongé de gardien d'immeuble afin d'assurer la continuité des
            services lorsque le gardien habituel est absent.
          </p>

          <p>
            Les copropriétés et immeubles professionnels de Châtenay-Malabry
            peuvent également bénéficier de notre service de{" "}
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
          name: "Le Plessis-Robinson",
          href: "/zones/hauts-de-seine/le-plessis-robinson",
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
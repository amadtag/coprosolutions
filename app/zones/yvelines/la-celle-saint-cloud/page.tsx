import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à La Celle-Saint-Cloud (78170) | CoproSolutions",
  description:
    "CoproSolutions accompagne les copropriétés de La Celle-Saint-Cloud pour l'entretien des parties communes, locaux poubelles, parkings et le remplacement de gardiens.",
  alternates: {
    canonical: "/zones/yvelines/la-celle-saint-cloud",
  },
};

export default function LaCelleSaintCloudPage() {
  return (
    <LocalCityPage
      city="La Celle-Saint-Cloud"
      postalCode="78170"
      title="Nettoyage et entretien de copropriété à La Celle-Saint-Cloud"
      description="CoproSolutions intervient à La Celle-Saint-Cloud auprès des syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien des copropriétés et le remplacement des gardiens."
      intro={
        <>
          <p>
            À La Celle-Saint-Cloud, l'entretien d'une copropriété ne se limite
            pas au nettoyage des sols. La propreté des halls, escaliers,
            paliers, accès, locaux communs et espaces extérieurs participe
            directement à la qualité de vie des résidents et à la bonne tenue
            de l'immeuble.
          </p>

          <p>
            CoproSolutions accompagne les syndics, gestionnaires immobiliers
            et conseils syndicaux qui recherchent une solution souple pour
            maintenir leurs résidences propres et correctement entretenues.
            Chaque intervention peut être organisée en fonction de la
            configuration de l'immeuble, de ses surfaces et de son niveau de
            fréquentation.
          </p>

          <p>
            Une attention particulière peut être portée aux zones qui se
            dégradent le plus rapidement : halls d'entrée, cages d'escalier,
            paliers, ascenseurs, sols, vitres accessibles et locaux
            poubelles. La sortie et la rentrée des conteneurs peuvent également
            être intégrées à l'organisation de l'entretien lorsque cela est
            nécessaire.
          </p>

          <p>
            Pour les résidences disposant de parkings ou d'espaces collectifs,
            CoproSolutions peut aussi réaliser des interventions ponctuelles :
            nettoyage de parking, remise en état, nettoyage de vitres,
            entretien extérieur, tonte de pelouse ou shampoing de moquette.
            Ces prestations peuvent compléter un entretien courant sans
            modifier l'organisation habituelle de la copropriété.
          </p>

          <p>
            CoproSolutions propose également le remplacement temporaire ou
            prolongé d'un gardien d'immeuble à La Celle-Saint-Cloud. En cas
            d'absence, de congés, d'arrêt ou de période de transition, nous
            pouvons rechercher une solution permettant de maintenir les
            services essentiels de la résidence.
          </p>

          <p>
            Notre accompagnement comprend également une aide au recrutement
            lorsque la copropriété recherche un nouveau gardien. Une
            présélection des candidats peut être réalisée afin de présenter
            des profils correspondant aux besoins définis avec le gestionnaire
            ou le conseil syndical.
          </p>

          <p>
            Nous intervenons enfin pour l'entretien des bureaux et immeubles
            professionnels à La Celle-Saint-Cloud. Les prestations peuvent
            être régulières ou ponctuelles selon les besoins de l'entreprise.
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
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
        {
          name: "Versailles",
          href: "/zones/yvelines/versailles",
        },
        {
          name: "Saint-Germain-en-Laye",
          href: "/zones/yvelines/saint-germain-en-laye",
        },
      ]}
    />
  );
}
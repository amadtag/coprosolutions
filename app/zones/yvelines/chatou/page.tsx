import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Chatou (78400) | CoproSolutions",
  description:
    "CoproSolutions accompagne les copropriétés de Chatou pour le nettoyage des parties communes, locaux poubelles, parkings et l'entretien des résidences.",
  alternates: {
    canonical: "/zones/yvelines/chatou",
  },
};

export default function ChatouPage() {
  return (
    <LocalCityPage
      city="Chatou"
      postalCode="78400"
      title="Nettoyage et entretien de copropriété à Chatou"
      description="CoproSolutions intervient à Chatou auprès des syndics, gestionnaires immobiliers et conseils syndicaux pour l'entretien des résidences et la continuité des services en copropriété."
      intro={
        <>
          <p>
            À Chatou, une copropriété bien entretenue repose sur une
            organisation régulière des interventions et sur une attention
            portée aux espaces utilisés quotidiennement par les résidents.
            Halls, escaliers, paliers, ascenseurs et accès communs doivent
            rester propres tout au long de l'année.
          </p>

          <p>
            CoproSolutions propose aux syndics et gestionnaires immobiliers
            une solution d'entretien adaptée aux caractéristiques de chaque
            résidence à Chatou. Le contenu des prestations peut être défini
            selon les surfaces, la fréquence de passage souhaitée et les
            priorités identifiées dans l'immeuble.
          </p>

          <p>
            L'entretien peut notamment comprendre le nettoyage des sols,
            halls d'entrée, cages d'escalier, paliers, couloirs, ascenseurs et
            autres parties communes. Les locaux poubelles peuvent également
            faire l'objet d'un entretien spécifique, avec la possibilité
            d'intégrer la sortie et la rentrée des conteneurs dans
            l'organisation prévue.
          </p>

          <p>
            Certaines interventions sont davantage liées aux besoins
            ponctuels de la résidence. Nettoyage de parking, lavage de
            vitres, remise en état après travaux, entretien d'espaces
            extérieurs ou shampoing de moquette peuvent ainsi être réalisés
            en complément de l'entretien habituel.
          </p>

          <p>
            CoproSolutions peut également intervenir lorsqu'une copropriété
            doit faire face à l'absence temporaire de son gardien. Selon la
            situation, nous recherchons une solution de remplacement pour
            assurer la continuité des tâches indispensables pendant une
            période de congé, d'absence ou de transition.
          </p>

          <p>
            Pour les copropriétés qui souhaitent recruter un gardien,
            CoproSolutions propose également une aide à la recherche et à la
            présélection des candidats. L'objectif est de faciliter la mise
            en relation avec des profils correspondant aux besoins de la
            résidence et aux conditions définies par le gestionnaire.
          </p>

          <p>
            Nous intervenons aussi auprès des entreprises et immeubles de
            bureaux à Chatou pour des prestations de nettoyage régulières ou
            ponctuelles.
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
          name: "La Celle-Saint-Cloud",
          href: "/zones/yvelines/la-celle-saint-cloud",
        },
        {
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
        {
          name: "Saint-Germain-en-Laye",
          href: "/zones/yvelines/saint-germain-en-laye",
        },
      ]}
    />
  );
}
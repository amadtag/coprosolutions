import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété à Marly-le-Roi (78160) | CoproSolutions",
  description:
    "CoproSolutions accompagne les copropriétés de Marly-le-Roi pour l'entretien des parties communes, parkings, locaux poubelles et le remplacement des gardiens.",
  alternates: {
    canonical: "/zones/yvelines/marly-le-roi",
  },
};

export default function MarlyLeRoiPage() {
  return (
    <LocalCityPage
      city="Marly-le-Roi"
      postalCode="78160"
      title="Nettoyage et entretien de copropriété à Marly-le-Roi"
      description="CoproSolutions accompagne les syndics, gestionnaires immobiliers et conseils syndicaux de Marly-le-Roi pour l'entretien des résidences et le remplacement des gardiens."
      intro={
        <>
          <p>
            À Marly-le-Roi, les copropriétés présentent des configurations
            variées, avec des résidences, des parties communes et des espaces
            extérieurs qui nécessitent un entretien régulier. CoproSolutions
            intervient pour maintenir les immeubles propres et assurer la
            continuité des services essentiels de la résidence.
          </p>

          <p>
            L'entretien peut être organisé selon les caractéristiques de
            chaque copropriété : fréquence des passages, nombre de bâtiments,
            surfaces communes et besoins particuliers. Les interventions sont
            définies avec le syndic ou le gestionnaire afin de correspondre
            au fonctionnement réel de la résidence.
          </p>

          <p>
            Les prestations comprennent notamment le nettoyage des halls,
            escaliers, paliers, couloirs, ascenseurs et autres espaces
            communs. Les locaux poubelles peuvent également être entretenus,
            avec la possibilité d'assurer la sortie et la rentrée des
            conteneurs lorsque la copropriété en a besoin.
          </p>

          <p>
            CoproSolutions peut aussi intervenir ponctuellement pour des
            prestations complémentaires : nettoyage de parkings, lavage des
            vitres, shampoing de moquettes, remise en état après travaux ou
            entretien d'espaces extérieurs. Ces interventions permettent de
            répondre à des besoins occasionnels sans modifier nécessairement
            l'organisation de l'entretien courant.
          </p>

          <p>
            En cas d'absence d'un gardien ou d'un besoin temporaire de
            personnel, nous pouvons rechercher une solution de remplacement
            pour permettre à la résidence de conserver ses services habituels
            pendant une période de congé, d'absence ou de transition.
          </p>

          <p>
            Pour les copropriétés qui souhaitent recruter un gardien,
            CoproSolutions propose également une aide à la recherche et à la
            présélection des candidats. Les profils peuvent être recherchés
            selon les missions confiées au gardien et les besoins spécifiques
            de la résidence.
          </p>

          <p>
            Notre secteur d'intervention couvre également les communes
            voisines de Marly-le-Roi. Les copropriétés situées au Vésinet,
            à Louveciennes ou à La Celle-Saint-Cloud peuvent également
            bénéficier de nos prestations.
          </p>

          <p>
            CoproSolutions accompagne enfin les entreprises et immeubles de
            bureaux de Marly-le-Roi pour leurs besoins de nettoyage réguliers
            ou ponctuels.
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
          name: "Le Vésinet",
          href: "/zones/yvelines/le-vesinet",
        },
        {
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
        {
          name: "La Celle-Saint-Cloud",
          href: "/zones/yvelines/la-celle-saint-cloud",
        },
      ]}
    />
  );
}
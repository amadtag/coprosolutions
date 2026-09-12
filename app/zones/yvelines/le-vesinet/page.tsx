import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété au Vésinet (78110) | CoproSolutions",
  description:
    "CoproSolutions accompagne les copropriétés du Vésinet pour l'entretien des parties communes, locaux poubelles, parkings et le remplacement des gardiens.",
  alternates: {
    canonical: "/zones/yvelines/le-vesinet",
  },
};

export default function LeVesinetPage() {
  return (
    <LocalCityPage
      city="Le Vésinet"
      postalCode="78110"
      title="Nettoyage et entretien de copropriété au Vésinet"
      description="CoproSolutions accompagne les syndics, gestionnaires immobiliers et conseils syndicaux du Vésinet pour l'entretien des résidences et le remplacement des gardiens."
      intro={
        <>
          <p>
            Au Vésinet, l'entretien d'une résidence demande une attention
            particulière aux parties communes et aux différents espaces
            utilisés quotidiennement par les habitants. Halls, escaliers,
            paliers, ascenseurs et accès aux bâtiments doivent bénéficier
            d'un entretien régulier et adapté à la résidence.
          </p>

          <p>
            CoproSolutions intervient auprès des copropriétés du Vésinet avec
            un service d'entretien pouvant être organisé selon la configuration
            de l'immeuble, les surfaces à entretenir et la fréquence souhaitée
            par le syndic ou le gestionnaire. Chaque prestation peut ainsi
            être définie en fonction des besoins réels de la résidence.
          </p>

          <p>
            Les interventions peuvent comprendre le nettoyage des halls
            d'entrée, sols, cages d'escalier, paliers, couloirs, ascenseurs et
            autres espaces communs. L'entretien des locaux poubelles peut
            également être intégré, ainsi que la sortie et la rentrée des
            conteneurs lorsque cette prestation est nécessaire.
          </p>

          <p>
            Pour les résidences nécessitant une intervention ponctuelle,
            CoproSolutions peut également réaliser des prestations
            complémentaires : nettoyage de parkings, lavage de vitres,
            shampoing de moquette, remise en état après travaux ou entretien
            d'espaces extérieurs. Ces interventions peuvent compléter
            l'entretien courant de la copropriété.
          </p>

          <p>
            Lorsqu'un gardien est temporairement absent, CoproSolutions peut
            également rechercher une solution de remplacement afin de
            maintenir les tâches essentielles de la résidence pendant une
            période de congé, d'absence ou de transition.
          </p>

          <p>
            Pour les copropriétés qui envisagent le recrutement d'un gardien,
            nous proposons également une aide à la recherche et à la
            présélection des candidats. La mise en relation est réalisée
            selon les besoins de la résidence et les conditions définies par
            le gestionnaire.
          </p>

          <p>
            CoproSolutions intervient enfin auprès des entreprises et
            immeubles de bureaux au Vésinet pour des prestations de nettoyage
            régulières ou ponctuelles.
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
          name: "Chatou",
          href: "/zones/yvelines/chatou",
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
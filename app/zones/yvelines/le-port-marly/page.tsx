import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
  title:
    "Nettoyage de copropriété au Port-Marly (78560) | CoproSolutions",
  description:
    "CoproSolutions intervient au Port-Marly pour le nettoyage des copropriétés, l'entretien des parties communes, des parkings et le remplacement des gardiens.",
  alternates: {
    canonical: "/zones/yvelines/le-port-marly",
  },
};

export default function LePortMarlyPage() {
  return (
    <LocalCityPage
      city="Le Port-Marly"
      postalCode="78560"
      title="Nettoyage et entretien de copropriété au Port-Marly"
      description="CoproSolutions accompagne les syndics, gestionnaires et conseils syndicaux du Port-Marly pour l'entretien des immeubles, des parties communes et le remplacement des gardiens."
      intro={
        <>
          <p>
            Au Port-Marly, CoproSolutions accompagne les copropriétés qui
            recherchent une solution fiable pour l'entretien quotidien de
            leurs immeubles. L'objectif est de maintenir les espaces communs
            propres et agréables tout en adaptant les interventions à la
            configuration de chaque résidence.
          </p>

          <p>
            Le nettoyage peut concerner les halls d'entrée, cages d'escalier,
            paliers, couloirs, ascenseurs et différents accès aux bâtiments.
            La fréquence des interventions est définie en fonction de la
            taille de la copropriété, du nombre de bâtiments et du niveau
            d'entretien recherché.
          </p>

          <p>
            Les locaux destinés aux conteneurs peuvent également faire partie
            des prestations. CoproSolutions peut assurer leur nettoyage ainsi
            que la sortie et la rentrée des poubelles lorsque cette mission
            fait partie des besoins de la résidence.
          </p>

          <p>
            Pour les besoins qui ne relèvent pas de l'entretien courant,
            nous pouvons organiser des interventions ponctuelles : nettoyage
            de parkings, lavage des vitres, shampoing de moquettes, remise en
            état après travaux ou entretien de certains espaces extérieurs.
            Ces prestations peuvent être réalisées en complément d'un
            entretien régulier.
          </p>

          <p>
            Lorsqu'une copropriété doit faire face à l'absence temporaire de
            son gardien, CoproSolutions peut également rechercher un
            remplaçant pour assurer la continuité des tâches prévues pendant
            les congés, une absence ou une période de transition.
          </p>

          <p>
            Nous proposons aussi une aide au recrutement des gardiens.
            CoproSolutions recherche et présélectionne des profils en
            fonction des missions à assurer dans la résidence, afin de
            faciliter le travail du syndic ou du gestionnaire lors de la
            recherche d'un candidat.
          </p>

          <p>
            Le Port-Marly se trouve au cœur d'un secteur où nous pouvons
            également intervenir dans les communes voisines, notamment
            Marly-le-Roi, Louveciennes et Le Vésinet. Cette proximité permet
            d'organiser plus facilement certaines interventions dans les
            résidences du secteur.
          </p>

          <p>
            CoproSolutions intervient également auprès des entreprises et
            immeubles de bureaux du secteur pour des prestations de nettoyage
            ponctuelles ou régulières.
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
          name: "Marly-le-Roi",
          href: "/zones/yvelines/marly-le-roi",
        },
        {
          name: "Louveciennes",
          href: "/zones/yvelines/louveciennes",
        },
        {
          name: "Le Vésinet",
          href: "/zones/yvelines/le-vesinet",
        },
      ]}
    />
  );
}
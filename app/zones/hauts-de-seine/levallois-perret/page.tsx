import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
title:
"Nettoyage et entretien de copropriété à Levallois-Perret (92300) | CoproSolutions",
description:
"CoproSolutions assure l'entretien et le nettoyage des copropriétés à Levallois-Perret : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
alternates: {
canonical: "/zones/hauts-de-seine/levallois-perret",
},
};

export default function LevalloisPerretPage() {
return (
<LocalCityPage
city="Levallois-Perret"
postalCode="92300"
title="Nettoyage et entretien de copropriété à Levallois-Perret"
description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Levallois-Perret."
intro={
<> <p>
Levallois-Perret compte de nombreuses copropriétés, résidences et
immeubles professionnels dont les parties communes nécessitent un
entretien régulier et une organisation adaptée. </p>

```
      <p>
        CoproSolutions accompagne les syndics, gestionnaires immobiliers
        et conseils syndicaux dans l'organisation du nettoyage et de
        l'entretien des immeubles à Levallois-Perret.
      </p>

      <p>
        Nos prestations sont adaptées à la configuration de chaque
        résidence, au nombre de halls, aux surfaces, à la fréquentation
        des espaces communs et à la fréquence d'intervention souhaitée.
      </p>
    </>
  }
  nearbyCities={[
    {
      name: "Nanterre",
      href: "/zones/hauts-de-seine/nanterre",
    },
    {
      name: "Neuilly-sur-Seine",
      href: "/zones/hauts-de-seine/neuilly-sur-seine",
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
      name: "Malakoff",
      href: "/zones/hauts-de-seine/malakoff",
    },
    {
      name: "Paris 15e",
      href: "/zones/paris-15",
    },
  ]}
    />
  );
}
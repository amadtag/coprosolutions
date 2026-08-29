import type { Metadata } from "next";
import LocalCityPage from "@/app/zones/_components/LocalCityPage";

export const metadata: Metadata = {
title:
"Nettoyage et entretien de copropriété à Neuilly-sur-Seine (92200) | CoproSolutions",
description:
"CoproSolutions assure l'entretien et le nettoyage des copropriétés à Neuilly-sur-Seine : parties communes, halls, escaliers, poubelles, parkings, bureaux et remplacement de gardiens.",
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
description="CoproSolutions accompagne les syndics, conseils syndicaux et gestionnaires immobiliers pour l'entretien, le nettoyage des parties communes et les services aux immeubles à Neuilly-sur-Seine."
intro={
<> <p>
Neuilly-sur-Seine compte de nombreuses copropriétés, résidences et
immeubles professionnels dont les parties communes nécessitent un
entretien régulier et une organisation adaptée à chaque bâtiment. </p>

```
      <p>
        CoproSolutions accompagne les syndics, gestionnaires immobiliers
        et conseils syndicaux dans l'organisation du nettoyage et de
        l'entretien des immeubles à Neuilly-sur-Seine.
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

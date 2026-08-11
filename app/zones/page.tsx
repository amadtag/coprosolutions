import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zones d'intervention | CoproSolutions",
  description:
    "CoproSolutions intervient pour l'entretien et le nettoyage des copropriétés, le remplacement de gardiens et les prestations ponctuelles à Paris et en Île-de-France.",
  alternates: {
    canonical: "/zones",
  },
};

export default function ZonesPage() {
  return (
    <main
      className="max-w-5xl mx-auto px-6 py-12"
      style={{ lineHeight: 1.7 }}
    >
      <h1 className="text-4xl font-bold mb-6">
        Zones d'intervention de CoproSolutions
      </h1>

      <p className="mb-4">
        <strong>CoproSolutions</strong> intervient auprès des syndics,
        conseils syndicaux et gestionnaires immobiliers pour l'entretien et
        le nettoyage des copropriétés, le remplacement de gardiens et les
        interventions ponctuelles en <strong>Île-de-France</strong>.
      </p>

      <p className="mb-8">
        Nous intervenons principalement à Paris et dans les départements des
        Hauts-de-Seine, des Yvelines et du Val-de-Marne.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Nos principales zones d'intervention
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <a
            href="/zones/paris-75"
            className="text-blue-600 font-semibold"
          >
            Paris (75)
          </a>
        </li>

        <li>
          <a
            href="/zones/hauts-de-seine"
            className="text-blue-600 font-semibold"
          >
            Hauts-de-Seine (92)
          </a>
        </li>

        <li>
          <a
            href="/zones/yvelines"
            className="text-blue-600 font-semibold"
          >
            Yvelines (78)
          </a>
        </li>

        <li>
          <a
            href="/zones/val-de-marne"
            className="text-blue-600 font-semibold"
          >
            Val-de-Marne (94)
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Villes et secteurs desservis
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <a
            href="/zones/boulogne-billancourt"
            className="text-blue-600"
          >
            Boulogne-Billancourt
          </a>
        </li>

        <li>
          <a
            href="/zones/paris-15"
            className="text-blue-600"
          >
            Paris 15
          </a>
        </li>

        <li>
          <a
            href="/zones/hauts-de-seine/issy-les-moulineaux"
            className="text-blue-600"
          >
            Issy-les-Moulineaux
          </a>
        </li>

        <li>
          <a
            href="/zones/hauts-de-seine/levallois-perret"
            className="text-blue-600"
          >
            Levallois-Perret
          </a>
        </li>

        <li>
          <a
            href="/zones/hauts-de-seine/nanterre"
            className="text-blue-600"
          >
            Nanterre
          </a>
        </li>

        <li>
          <a
            href="/zones/hauts-de-seine/neuilly-sur-seine"
            className="text-blue-600"
          >
            Neuilly-sur-Seine
          </a>
        </li>

        <li>
          <a
            href="/zones/val-de-marne/creteil"
            className="text-blue-600"
          >
            Créteil
          </a>
        </li>

        <li>
          <a
            href="/zones/yvelines/versailles"
            className="text-blue-600"
          >
            Versailles
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Entretien et nettoyage de copropriétés
      </h2>

      <p className="mb-4">
        Nos équipes peuvent intervenir pour l'entretien des halls, escaliers,
        paliers, ascenseurs, locaux poubelles, parkings et autres parties
        communes.
      </p>

      <p className="mb-4">
        Nous proposons également des prestations ponctuelles telles que le
        nettoyage des vitres, le shampoing des moquettes, le nettoyage de
        parkings et certains travaux exceptionnels d'entretien.
      </p>

      <p>
        <a
          href="/entretien-copropriété-idf"
          className="text-blue-600 font-semibold"
        >
          Découvrir notre service d'entretien de copropriété en Île-de-France
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Remplacement de gardiens d'immeuble
      </h2>

      <p className="mb-4">
        CoproSolutions accompagne également les copropriétés dans leurs
        besoins de remplacement temporaire de gardiens et d'employés
        d'immeuble.
      </p>

      <p>
        <a
          href="/remplacement-gardien"
          className="text-blue-600 font-semibold"
        >
          Découvrir le service de remplacement de gardien
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Demander un devis
      </h2>

      <p className="mb-4">
        Vous êtes syndic, gestionnaire immobilier ou membre d'un conseil
        syndical ? Contactez CoproSolutions pour étudier les besoins de votre
        copropriété.
      </p>

      <p>
        <a
          href="/contact"
          className="text-blue-600 font-semibold"
        >
          Demander un devis gratuit
        </a>
      </p>

      <p className="mt-6">
        <a
          href="tel:+33658876579"
          className="text-blue-600 font-semibold"
        >
          📞 Appeler CoproSolutions au 06 58 87 65 79
        </a>
      </p>
    </main>
  );
}
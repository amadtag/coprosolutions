export const metadata = {
  title: "Entretien de copropriété en Île-de-France | Coprosolutions",
  description:
    "Service professionnel d'entretien de copropriétés en Île-de-France : nettoyage d'immeubles, bureaux, parties communes, sortie des poubelles et remplacement de gardien.",
};

export default function EntretienCoproIdf() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        Entretien de copropriété en Île-de-France
      </h1>

      <p className="mb-4">
        Coprosolutions accompagne les syndics, gestionnaires immobiliers et
        copropriétés pour assurer un entretien complet et régulier des
        immeubles en Île-de-France.
      </p>

      <p className="mb-4">
        Nous intervenons rapidement pour garantir la propreté, la sécurité et
        le bon fonctionnement des parties communes dans les résidences et
        immeubles professionnels.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Nos prestations d’entretien
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Nettoyage des parties communes</li>
        <li>Entretien des halls d’immeubles</li>
        <li>Entretien de bureaux et immeubles professionnels</li>
        <li>Sortie et rentrée des poubelles</li>
        <li>Remplacement de gardien d’immeuble</li>
        <li>Travaux exceptionnels</li>
        <li>Nettoyage de parkings</li>
        <li>Shampoing moquette</li>
        <li>Jardinage simple</li>
        <li>Petits travaux de maintenance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Zones d’intervention
      </h2>

      <p className="mb-4">
        Nous intervenons dans toute l’Île-de-France : Paris, Hauts-de-Seine,
        Yvelines, Val-de-Marne et Essonne.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Pourquoi nous choisir ?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Intervention rapide</li>
        <li>Personnel qualifié</li>
        <li>Service adapté aux copropriétés</li>
        <li>Disponibilité et réactivité</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>

      <p className="mb-2">
        Téléphone :
        <a
          href="tel:+33658876579"
          className="text-blue-600 font-semibold ml-2"
        >
          06 58 87 65 79
        </a>
      </p>

      <p>Email : coprosolutions@outlook.fr</p>

      <div className="mt-10 p-4 bg-gray-100 rounded-xl">
        <p className="font-semibold">
          Demandez un devis gratuit pour votre copropriété en Île-de-France.
        </p>
      </div>

    </main>
  );
}
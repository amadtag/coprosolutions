export const metadata = {
  title: "Entretien de copropriété dans les Yvelines | Coprosolutions",
  description:
    "Entretien de copropriétés, remplacement de gardien, sortie des poubelles et travaux exceptionnels dans les Yvelines. Devis rapide.",
};

export default function YvelinesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Entretien de copropriété dans les Yvelines
      </h1>

      <p className="mb-4">
        Coprosolutions accompagne les syndics et copropriétés dans les
        Yvelines pour l’entretien régulier des immeubles et résidences.
      </p>

      <p className="mb-4">
        Nous intervenons dans tout le département des Yvelines pour garantir
        la propreté, la sécurité et le bon fonctionnement des parties
        communes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Nos prestations
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Entretien des copropriétés</li>
        <li>Entretien des bureaux</li>
        <li>Remplacement de gardien d'immeuble</li>
        <li>Sortie et rentrée des poubelles</li>
        <li>Nettoyage des parties communes</li>
        <li>Travaux exceptionnels</li>
        <li>Shampoing moquette</li>
        <li>Nettoyage parking</li>
        <li>Jardinage simple</li>
        <li>Petits travaux de maintenance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Villes desservies
      </h2>

      <p>
        Nous intervenons notamment à Versailles, Saint-Germain-en-Laye,
        Poissy, Sartrouville, Mantes-la-Jolie, Conflans-Sainte-Honorine,
        Houilles, Chatou, Le Chesnay-Rocquencourt et dans l’ensemble des
        Yvelines.
      </p>

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

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Demande de devis
      </h2>

      <p>
        Contactez-nous pour obtenir un devis gratuit pour l’entretien de votre
        copropriété ou de vos bureaux dans les Yvelines.
      </p>
    </main>
  );
}
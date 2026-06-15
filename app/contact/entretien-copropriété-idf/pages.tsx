export const metadata = {
  title: "Entretien de copropriété | Coprosolutions",
  description:
    "Service d’entretien de copropriété : nettoyage des parties communes, gestion des immeubles et maintenance régulière.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Entretien de copropriété</h1>

      <p>
        Nous assurons l’entretien complet des copropriétés : parties communes,
        halls, escaliers et espaces partagés.
      </p>

      <h2>Nos missions</h2>
      <ul>
        <li>Nettoyage des parties communes</li>
        <li>Entretien des halls et escaliers</li>
        <li>Gestion de l’hygiène des immeubles</li>
      </ul>

      <h2>Intervention</h2>
      <p>Services adaptés aux syndics et gestionnaires immobiliers.</p>
    </main>
  );
}
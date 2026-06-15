export const metadata = {
  title: "Entretien de bureaux et immeubles | Coprosolutions",
  description:
    "Service de nettoyage et entretien de bureaux et immeubles professionnels.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Entretien de bureaux et immeubles</h1>

      <p>
        Nous proposons un service d’entretien pour bureaux, immeubles
        professionnels et espaces de travail.
      </p>

      <h2>Services inclus</h2>
      <ul>
        <li>Nettoyage des bureaux</li>
        <li>Entretien des espaces communs</li>
        <li>Gestion des déchets</li>
      </ul>
    </main>
  );
}
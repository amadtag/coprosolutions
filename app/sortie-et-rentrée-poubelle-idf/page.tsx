export const metadata = {
  title: "Gestion des poubelles en copropriété | Coprosolutions",
  description:
    "Service de sortie et rentrée des poubelles pour immeubles et copropriétés.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Sortie et rentrée des poubelles</h1>

      <p>
        Nous prenons en charge la gestion complète des poubelles en copropriété.
      </p>

      <h2>Prestations</h2>
      <ul>
        <li>Sortie des bacs</li>
        <li>Rentrée après collecte</li>
        <li>Respect des horaires de la mairie</li>
      </ul>
    </main>
  );
}
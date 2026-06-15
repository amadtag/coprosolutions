export const metadata = {
  title: "Remplacement de gardien d’immeuble",
  description:
    "Service de remplacement de gardien pour copropriétés. Intervention rapide, gestion des immeubles en cas d’absence de gardien.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Remplacement de gardien d’immeuble</h1>

      <p>
        Nous proposons un service de remplacement de gardien d’immeuble pour les copropriétés,
        syndics et résidences afin d’assurer la continuité du service en cas d’absence.
      </p>

      <h2>Nos missions</h2>
      <ul>
        <li>Entretien des parties communes</li>
        <li>Gestion des déchets et poubelles</li>
        <li>Accueil des résidents</li>
        <li>Surveillance de l’immeuble</li>
      </ul>

      <h2>Intervention rapide</h2>
      <p>
        Nous intervenons rapidement sur demande des syndics et gestionnaires de copropriété.
      </p>

      <h2>Zone d’intervention</h2>
      <p>Île-de-France et zones urbaines alentours.</p>

      <h2>Contact</h2>
      <p>Contactez-nous pour une intervention rapide.</p>
    </main>
  );
}
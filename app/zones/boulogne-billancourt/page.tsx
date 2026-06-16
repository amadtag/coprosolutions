import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entretien de copropriété à Boulogne-Billancourt | Coprosolutions",
  description:
    "Service d’entretien de copropriété à Boulogne-Billancourt : nettoyage d’immeubles, gestion des poubelles, remplacement de gardien et petits travaux en Île-de-France.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>

      <h1>Entretien de copropriété à Boulogne-Billancourt</h1>

      <p>
        Coprosolutions intervient à <strong>Boulogne-Billancourt</strong> pour l’entretien de copropriétés,
        le nettoyage d’immeubles et la gestion complète des parties communes.
        Nous accompagnons les syndics et gestionnaires immobiliers pour assurer un service fiable et rapide.
      </p>

      <h2>🧹 Nos services à Boulogne-Billancourt</h2>

      <ul>
        <li>Entretien copropriété</li>
        <li>Nettoyage immeubles</li>
        <li>Gestion des poubelles</li>
        <li>Remplacement de gardien</li>
        <li>Petits travaux et interventions</li>
      </ul>

      <h2>👨‍✈️ Intervention rapide à Boulogne-Billancourt</h2>

      <p>
        Nous intervenons rapidement dans toute la zone de <strong>Boulogne-Billancourt</strong>
        et ses environs pour garantir la continuité de service dans les immeubles.
      </p>

      <h2>🗑️ Gestion des poubelles et entretien</h2>

      <p>
        Sortie et rentrée des poubelles, nettoyage des parties communes,
        maintenance des espaces partagés et suivi régulier des immeubles.
      </p>

      <h2>🔧 Travaux et entretien</h2>

      <p>
        Nous réalisons également des petits travaux d’entretien :
        réparations légères, nettoyage spécialisé et interventions ponctuelles.
      </p>

      <h2>📍 Zones proches de Boulogne-Billancourt</h2>

      <p>
        Intervention également dans les arrondissements voisins : Paris 14, Paris 16, Issy-les-Moulineaux.
      </p>

      <h2>📞 Contact rapide</h2>

      <a href="tel:+33658876579">
        📞 Appeler maintenant
      </a>

      <p>
        Service disponible en Île-de-France – devis gratuit et intervention rapide.
      </p>

    </main>
  );
}
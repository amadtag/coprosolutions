import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entretien de copropriété Val-de-Marne | Coprosolutions",
  description:
    "Entretien de copropriétés, nettoyage d'immeubles, remplacement de gardien et gestion des poubelles dans le Val-de-Marne.",
};

export default function ValDeMarnePage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Entretien de copropriété dans le Val-de-Marne</h1>

      <p>
        Coprosolutions accompagne les copropriétés du Val-de-Marne pour
        l'entretien des immeubles, la sortie des poubelles, le remplacement
        de gardien et les travaux exceptionnels.
      </p>

      <a href="tel:+33658876579">
        📞 Appeler maintenant
      </a>
    </main>
  );
}
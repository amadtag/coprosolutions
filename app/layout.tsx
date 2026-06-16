import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coprosolutions | Entretien de copropriétés et remplacement de gardiens",
  description:
    "Entreprise spécialisée dans l'entretien de copropriétés, le nettoyage d'immeubles et le remplacement de gardiens en Île-de-France.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* HEADER */}
        <header
          style={{
            padding: 15,
            background: "#0f172a",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>Copro Solutions</strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a
              href="tel:+33658876579"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              📞 06 58 87 65 79
            </a>

            <nav style={{ display: "flex", gap: 15 }}>
              <a href="/" style={{ color: "white" }}>Accueil</a>
              <a href="/services" style={{ color: "white" }}>Services</a>
              <a href="/zones" style={{ color: "white" }}>Zones</a>
              <a href="/contact" style={{ color: "white" }}>Devis</a>
            </nav>
          </div>
        </header>

        {/* CONTENU */}
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>

        {/* CTA FIXE (IMPORTANT) */}
        <a
          href="tel:+33658876579"
          className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
          📞 Appeler maintenant
        </a>

        {/* FOOTER */}
        <footer
          style={{
            padding: 20,
            background: "#111827",
            color: "white",
            textAlign: "center",
          }}
        >
          © Coprosolutions - Entretien copropriété Île-de-France
        </footer>

      </body>
    </html>
  );
}
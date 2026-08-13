import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://coprosolutions.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "CoproSolutions | Entretien de copropriétés et remplacement de gardiens",
    template: "%s | CoproSolutions",
  },

  description:
    "CoproSolutions accompagne les syndics et copropriétés pour l'entretien, le nettoyage des immeubles, le remplacement de gardiens et l'entretien de bureaux à Paris et en Île-de-France.",

  keywords: [
    "entretien copropriété",
    "nettoyage copropriété",
    "nettoyage immeuble",
    "remplacement gardien immeuble",
    "entretien bureaux",
    "nettoyage bureaux",
    "sortie poubelles copropriété",
    "travaux exceptionnels copropriété",
    "nettoyage copropriété Paris",
    "nettoyage copropriété Hauts-de-Seine",
    "nettoyage copropriété Yvelines",
    "entretien copropriété Boulogne-Billancourt",
    "CoproSolutions",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "CoproSolutions",
    title:
      "CoproSolutions | Entretien de copropriétés et remplacement de gardiens",
    description:
      "Entretien et nettoyage de copropriétés, bureaux et immeubles. Remplacement de gardiens et services d'entretien pour syndics et copropriétés à Paris et en Île-de-France.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CoproSolutions | Entretien de copropriétés et remplacement de gardiens",
    description:
      "Entretien de copropriétés, nettoyage d'immeubles, bureaux et remplacement de gardiens à Paris et en Île-de-France.",
  },

  category: "business",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "CoproSolutions",
  url: siteUrl,
  telephone: "+33658876579",
  description:
    "Entreprise spécialisée dans l'entretien de copropriétés, le nettoyage d'immeubles, l'entretien de bureaux et le remplacement de gardiens en Île-de-France.",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Île-de-France",
    },
    {
      "@type": "City",
      name: "Paris",
    },
    {
      "@type": "City",
      name: "Boulogne-Billancourt",
    },
    {
      "@type": "AdministrativeArea",
      name: "Hauts-de-Seine",
    },
    {
      "@type": "AdministrativeArea",
      name: "Yvelines",
    },
    {
      "@type": "AdministrativeArea",
      name: "Val-de-Marne",
    },
  ],
  serviceType: [
    "Entretien de copropriétés",
    "Nettoyage d'immeubles",
    "Entretien de bureaux",
    "Remplacement de gardiens d'immeuble",
    "Sortie et rentrée des poubelles",
    "Travaux exceptionnels",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

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
              <a href="/" style={{ color: "white" }}>
                Accueil
              </a>
              <a href="/services" style={{ color: "white" }}>
                Services
              </a>
              <a href="/zones" style={{ color: "white" }}>
                Zones
              </a>
              <a href="/contact" style={{ color: "white" }}>
                Devis
              </a>
            </nav>
          </div>
        </header>

        {/* CONTENU */}
        <main style={{ minHeight: "80vh" }}>{children}</main>

        {/* CTA FIXE */}
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
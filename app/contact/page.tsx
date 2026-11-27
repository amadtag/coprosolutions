import type { Metadata } from "next";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Devis nettoyage et entretien de copropriété en Île-de-France",
  description:
    "Demandez un devis gratuit sous 24h pour l'entretien de votre copropriété, le nettoyage d'immeuble ou le remplacement de gardien à Paris et en Île-de-France.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

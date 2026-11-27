"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function HomeContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          telephone: String(formData.get("telephone") || "").trim(),
          service: String(formData.get("service") || "").trim(),
          demande: String(formData.get("message") || "").trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={sendRequest}
      className="space-y-5 rounded-3xl bg-white p-7 text-black shadow-2xl md:p-9"
    >
      <div>
        <label htmlFor="home-name" className="mb-2 block font-bold text-slate-700">
          Nom / Cabinet de syndic *
        </label>
        <input
          id="home-name"
          type="text"
          name="name"
          placeholder="Votre nom ou cabinet de syndic"
          maxLength={150}
          required
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="home-email" className="mb-2 block font-bold text-slate-700">
          Email professionnel *
        </label>
        <input
          id="home-email"
          type="email"
          name="email"
          placeholder="votre@email.fr"
          maxLength={254}
          required
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="home-phone" className="mb-2 block font-bold text-slate-700">
          Téléphone direct
        </label>
        <input
          id="home-phone"
          type="tel"
          name="telephone"
          placeholder="01 ... ou 06 ..."
          maxLength={40}
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="home-service" className="mb-2 block font-bold text-slate-700">
          Prestation recherchée
        </label>
        <select
          id="home-service"
          name="service"
          defaultValue=""
          className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Choisissez une prestation</option>
          <option value="Nettoyage et entretien de copropriété (Contrat / AG)">
            Nettoyage et entretien de copropriété (Contrat / AG)
          </option>
          <option value="Remplacement de gardien – courte durée (urgence / congés)">
            Remplacement de gardien – courte durée (urgence / congés)
          </option>
          <option value="Remplacement de gardien – moyenne ou longue durée">
            Remplacement de gardien – moyenne ou longue durée
          </option>
          <option value="Débarras d'encombrants / Remise en état après sinistre">
            Débarras d&apos;encombrants / Remise en état après sinistre
          </option>
          <option value="Rotation poubelles / Vitrerie / Nettoyage ponctuel">
            Rotation poubelles / Vitrerie / Nettoyage ponctuel
          </option>
          <option value="Entretien de bureaux / Cabinet">
            Entretien de bureaux / Cabinet
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="home-message" className="mb-2 block font-bold text-slate-700">
          Adresse de l&apos;immeuble & détail du besoin *
        </label>
        <textarea
          id="home-message"
          name="message"
          placeholder="Ex : Immeuble 45 lots à Boulogne (92), besoin d'un devis comparatif entretien parties communes pour prochaine AG..."
          rows={5}
          maxLength={5000}
          required
          className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-2xl bg-green-500 py-4 font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Recevoir mon devis sous 24h"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="font-semibold text-green-700">
            Votre demande a bien été envoyée. Nous revenons vers vous sous 24h !
          </p>
        )}
        {status === "error" && (
          <p className="font-semibold text-red-700">
            L&apos;envoi n&apos;a pas abouti. Vous pouvez nous joindre directement au 06 58 87 65 79.
          </p>
        )}
      </div>
    </form>
  );
}

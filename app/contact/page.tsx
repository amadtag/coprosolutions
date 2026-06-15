"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form)
    });

    alert("Demande envoyée !");
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Demande de devis</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          placeholder="Nom"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
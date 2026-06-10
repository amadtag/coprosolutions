"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    alert(res.ok ? "Message envoyé 👍" : "Erreur ❌");
    form.reset();
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" required />
        <br /><br />

        <input name="email" placeholder="Email" required />
        <br /><br />

        <textarea name="message" placeholder="Message" required />
        <br /><br />

        <button type="submit">
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    lots: "",
    frequency: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        lots: "",
        frequency: "",
        message: "",
      });
    } catch {
      alert(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez également nous contacter par téléphone."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-400 font-semibold mb-3">
            COPROSOLUTIONS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Demandez votre devis
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-lg leading-8">
            Vous recherchez une entreprise pour l'entretien de votre
            copropriété, le nettoyage de vos bureaux ou immeubles
            administratifs, le remplacement d'un gardien ou des prestations
            ponctuelles ? Décrivez-nous votre besoin.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <div className="text-3xl mb-4">🏢</div>
            <h2 className="text-xl font-bold mb-3">
              Copropriétés
            </h2>
            <p className="text-gray-600 leading-7">
              Nettoyage et entretien des halls, escaliers, parties communes,
              parkings, poubelles et espaces extérieurs.
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <div className="text-3xl mb-4">💼</div>
            <h2 className="text-xl font-bold mb-3">
              Bureaux et immeubles administratifs
            </h2>
            <p className="text-gray-600 leading-7">
              Entretien régulier ou ponctuel des bureaux, immeubles
              professionnels et espaces administratifs.
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <div className="text-3xl mb-4">👤</div>
            <h2 className="text-xl font-bold mb-3">
              Remplacement de gardien
            </h2>
            <p className="text-gray-600 leading-7">
              Remplacement ponctuel ou longue durée pour assurer la continuité
              du service dans votre immeuble.
            </p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2">
                Parlez-nous de votre besoin
              </h2>

              <p className="text-gray-600 mb-8">
                Plus votre demande est précise, plus nous pourrons vous
                proposer une estimation adaptée.
              </p>

              {sent && (
                <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
                  <strong>Votre demande a bien été envoyée.</strong>
                  <br />
                  Nous reviendrons vers vous rapidement.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NOM / SOCIETE */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold mb-2">
                      Nom / Société *
                    </label>

                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Votre nom ou société"
                      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Société / Copropriété
                    </label>

                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          company: e.target.value,
                        })
                      }
                      placeholder="Nom de la copropriété ou entreprise"
                      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* EMAIL / TELEPHONE */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold mb-2">
                      Email *
                    </label>

                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="vous@exemple.fr"
                      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Téléphone
                    </label>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      placeholder="06 00 00 00 00"
                      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label className="block font-semibold mb-2">
                    Prestation recherchée *
                  </label>

                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">
                      Sélectionnez une prestation
                    </option>
                    <option value="Entretien de copropriété">
                      Entretien de copropriété
                    </option>
                    <option value="Nettoyage de copropriété">
                      Nettoyage de copropriété
                    </option>
                    <option value="Entretien de bureaux">
                      Entretien de bureaux
                    </option>
                    <option value="Entretien d'immeuble administratif">
                      Entretien d'immeuble administratif
                    </option>
                    <option value="Remplacement de gardien">
                      Remplacement de gardien
                    </option>
                    <option value="Sortie et rentrée des poubelles">
                      Sortie et rentrée des poubelles
                    </option>
                    <option value="Travaux exceptionnels">
                      Travaux exceptionnels
                    </option>
                    <option value="Autre demande">
                      Autre demande
                    </option>
                  </select>
                </div>

                {/* LOTS / FREQUENCE */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold mb-2">
                      Nombre de lots / taille du site
                    </label>

                    <input
                      type="text"
                      value={form.lots}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          lots: e.target.value,
                        })
                      }
                      placeholder="Ex. 70 lots / 1 500 m²"
                      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Fréquence souhaitée
                    </label>

                    <select
                      value={form.frequency}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          frequency: e.target.value,
                        })
                      }
                      className="w-full border rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">
                        Sélectionnez
                      </option>
                      <option value="Quotidienne">
                        Quotidienne
                      </option>
                      <option value="Plusieurs fois par semaine">
                        Plusieurs fois par semaine
                      </option>
                      <option value="Hebdomadaire">
                        Hebdomadaire
                      </option>
                      <option value="Ponctuelle">
                        Ponctuelle
                      </option>
                      <option value="À définir">
                        À définir
                      </option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block font-semibold mb-2">
                    Décrivez votre besoin *
                  </label>

                  <textarea
                    required
                    rows={7}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Décrivez votre immeuble, vos besoins d'entretien, le nombre de passages souhaité, les surfaces, les contraintes particulières ou la période de remplacement du gardien..."
                    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition"
                >
                  {sending
                    ? "Envoi en cours..."
                    : "Envoyer ma demande de devis"}
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT */}
          <aside>
            <div className="bg-blue-950 text-white rounded-2xl p-7 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                Contact direct
              </h2>

              <p className="text-blue-100 mb-6 leading-7">
                Vous préférez échanger directement avec nous ? Contactez
                CoproSolutions par téléphone ou par email.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-blue-300 text-sm mb-1">
                    Téléphone
                  </p>

                  <a
                    href="tel:+33658876579"
                    className="text-xl font-bold hover:underline"
                  >
                    06 58 87 65 79
                  </a>
                </div>

                <div>
                  <p className="text-blue-300 text-sm mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:coprosolutions@coprosolutions.net"
                    className="font-semibold hover:underline break-all"
                  >
                    coprosolutions@coprosolutions.net
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-7 mt-6">
              <h2 className="text-xl font-bold mb-4">
                Une demande précise ?
              </h2>

              <p className="text-gray-600 leading-7">
                Indiquez-nous notamment la localisation de votre immeuble,
                le nombre de lots ou la superficie, la fréquence souhaitée
                et les prestations recherchées.
              </p>

              <p className="text-gray-600 leading-7 mt-4">
                Ces informations nous permettent de mieux comprendre votre
                besoin et de préparer une proposition adaptée.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white border-t py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nos principales prestations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Entretien de copropriété
              </h3>

              <p className="text-gray-600 leading-7">
                Nettoyage des halls, escaliers, paliers, circulations,
                locaux communs et autres espaces de la résidence.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Bureaux et immeubles administratifs
              </h3>

              <p className="text-gray-600 leading-7">
                Entretien des bureaux, espaces professionnels et immeubles
                administratifs selon les besoins de chaque site.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Remplacement de gardien
              </h3>

              <p className="text-gray-600 leading-7">
                Remplacement ponctuel, temporaire ou de plus longue durée
                pour maintenir la continuité du service.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Prestations ponctuelles
              </h3>

              <p className="text-gray-600 leading-7">
                Nettoyage de parkings, shampoing moquette, sortie des
                poubelles, jardinage simple et travaux exceptionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-100 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d'une solution pour votre immeuble ?
          </h2>

          <p className="text-gray-600 mb-6">
            CoproSolutions étudie les demandes des syndics, conseils
            syndicaux, gestionnaires immobiliers et entreprises.
          </p>

          <a
            href="tel:+33658876579"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-3 rounded-xl"
          >
            📞 06 58 87 65 79
          </a>
        </div>
      </section>
    </main>
  );
}
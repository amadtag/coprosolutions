import type { MetadataRoute } from "next";

const baseUrl = "https://coprosolutions.net";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Services
    {
      url: `${baseUrl}/remplacement-gardien`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/entretien-bureau-immeuble`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/entretien-copropriété-idf`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nettoyage-copropriete-paris`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sortie-et-rentrée-poubelle`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/travaux-exceptionnels`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Hauts-de-Seine
    {
      url: `${baseUrl}/zones/boulogne-billancourt`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zones/hauts-de-seine`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zones/hauts-de-seine/issy-les-moulineaux`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones/hauts-de-seine/levallois-perret`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones/hauts-de-seine/nanterre`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones/hauts-de-seine/neuilly-sur-seine`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Paris
    {
      url: `${baseUrl}/zones/paris-15`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones/paris-75`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Val-de-Marne
    {
      url: `${baseUrl}/zones/val-de-marne`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones/val-de-marne/creteil`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Yvelines
    {
      url: `${baseUrl}/zones/yvelines`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zones/yvelines/versailles`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
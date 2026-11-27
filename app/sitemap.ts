import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://www.coprosolutions.net";

function getRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name === "api") continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, `${baseRoute}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      routes.push(baseRoute || "/");
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutes(appDir);

  return routes.map((route) => {
    const isHome = route === "/";
    const isMainPage = [
      "/services",
      "/zones",
      "/remplacement-gardien",
      "/nettoyage-copropriete-paris",
      "/zones/hauts-de-seine",
      "/zones/yvelines",
      "/zones/val-de-marne",
      "/zones/boulogne-billancourt",
    ].includes(route);

    return {
      url: isHome ? baseUrl : `${baseUrl}${encodeURI(route)}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : isMainPage ? 0.9 : 0.8,
    };
  });
}

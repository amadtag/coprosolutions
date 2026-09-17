import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nettoyage-copropriete-hauts-de-seine",
        destination: "/zones/hauts-de-seine",
        permanent: true,
      },
      {
        source: "/nettoyage-copropriete-yvelines",
        destination: "/zones/yvelines",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
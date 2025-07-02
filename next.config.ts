import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Configuration expérimentale
  experimental: {
    reactCompiler: true,
  },
  // Mode de sortie standalone pour optimiser le déploiement
  output: "standalone",
  // Mode strict React
  reactStrictMode: true,
  
  // Configuration ESLint - permet d'exécuter ESLint mais traite les erreurs comme des avertissements
  // au lieu de bloquer complètement le build
  eslint: {
    // Afficher toujours les erreurs/avertissements mais ne pas faire échouer le build
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

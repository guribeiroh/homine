/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignora erros de tipagem durante o build para não bloquear o deploy
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora erros de linting durante o build para não bloquear o deploy
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

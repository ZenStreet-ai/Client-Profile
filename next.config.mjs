/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  redirects() {
    return [
      {
        source: '/',
        destination: 'https://zenstreet.ai',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

  
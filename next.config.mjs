/** @type {import('next').NextConfig} */
const nextConfig = {
  return [
      {
        source: '/:path*',
        destination: 'https://www.aura.com/',
        permanent: true,
      },
    ]
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  async redirects() {
    return [
      // The product page moved from /products to /tably; keep old links,
      // bookmarks, and search results working.
      {
        source: '/products',
        destination: '/tably',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

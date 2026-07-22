/** @type {import('next').NextConfig} */
const nextConfig = {
  // GoDaddy shared hosting serves static files from Apache — there is no Node
  // runtime, so the site is exported to plain HTML in `out/`.
  output: 'export',

  // Apache resolves /tably/ to /tably/index.html; without this Next emits
  // /tably.html, which 404s on a static host.
  trailingSlash: true,

  images: {
    // The Next image optimizer needs a server. Static export ships the
    // original files instead.
    unoptimized: true,
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

  // NOTE: `redirects()` is unsupported in `output: 'export'` — it needs a
  // server. The /products → /tably redirect now lives in public/.htaccess,
  // which Apache applies and Next copies into `out/` verbatim.
};

export default nextConfig;

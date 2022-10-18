/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   unoptimized: true,
  //   // domains: [],
  //   // formats: ["image/avif", "image/webp"],
  //   // deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  //   // imageSizes: [96, 128, 256, 384],
  // },

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  // experimental: {
  //   swcMinifyDebugOptions: {
  //     compress: {
  //       defaults: true,
  //       side_effects: false,
  //     },
  //   },
  // },
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false,
        process: false,
      };
    }

    return config;
  },
  trailingSlash: true,
  // assetPrefix: `./`,
  basePath: "/webs/hw2/v2_beta1", // 20221018
  // distDir: "build",
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "20221017";
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "SameSite",
            value: "None; Secure",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

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
  basePath: "/gamezone", // 20231208
  // basePath: "/gamebox", // 20221018
  // basePath: "/webs_test/20221018/gostarfavor", // 20221018
  // distDir: "build",
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    // return "20221018";
    // return "20230603";
    return "20231208";
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

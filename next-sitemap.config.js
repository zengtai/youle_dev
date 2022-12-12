/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.playgames.mobi",
  generateRobotsTxt: true, // (optional)
  exclude: ["/t/privacy-policy", "/t/terms-of-use"],
  // ...other options
};

// export default config;

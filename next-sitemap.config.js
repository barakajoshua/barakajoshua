/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://barakajoshua.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/_next/'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/_next/'],
      },
    ],
    additionalSitemaps: ['https://barakajoshua.com/sitemap.xml'],
  },
};

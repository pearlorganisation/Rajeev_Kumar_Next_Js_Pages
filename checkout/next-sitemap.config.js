module.exports = {
    siteUrl: process.env.SITE_URL || 'https://checkout.thoughtglow.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'out',
    exclude: ['/*'],
    transform: async (config, path) => {
      if (path != '/') {
        path += '.html';
      }
      return {
        loc: path,
        changefreq: null, //config.changefreq,
        priority: null, //config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    }
}
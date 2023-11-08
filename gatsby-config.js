/**
 * @type {import('gatsby').GatsbyConfig}
 **/

module.exports = {
  pathPrefix: "/cigarettes-card",
  siteMetadata: {
    title: `たばこ名刺`,
    author: `@riotamoriya`,
    siteUrl: `https://riotamoriya.github.io/cigarettes-card/`,
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `たばこ名刺`,
        short_name: `たばこ名刺`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2e2f41`,
        display: `standalone`,
        icon: `./favicon.jpg`, // このパスにはあなたのファビコンの画像へのパスを指定します。
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_voices`,
        path: `${__dirname}/static/character-set/inumaki/voices/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_illusts`,
        path: `${__dirname}/static/character-set/inumaki/illusts/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    
  ],
};


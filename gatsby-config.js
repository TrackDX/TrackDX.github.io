const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    siteUrl: "https://trackdx-macau.com/",
    title: "TrackDX",
    keywords: 'TrackDX,基源有限公司,澳門,服務,產品行銷,檢測代理,諮詢,顧問,進出口貿易,會展服務',
    languages,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-cname',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',     
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    }
  ],
};

module.exports = {
  siteMetadata: {
    title: `Kevin Flanagan`,
    description: `Kevin Flanagan's Web Portfolio at kflan.io`,
    author: `kflan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663333`,
        theme_color: `#663333`,
        display: `minimal-ui`,
        icon: `data/images/octo-icon.png` // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: '#BA3D3B'
            }
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

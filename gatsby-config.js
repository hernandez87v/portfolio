module.exports = {
  siteMetadata: {
    title: 'Vlad Hernandez || Full Stack Developer',
    author: 'Vlad Hernandez',
    description: 'An online portfolio for my work so far.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/code-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-174918970-1', // Google Analytics
      },
    },
  ],
}

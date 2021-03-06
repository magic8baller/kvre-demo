module.exports = {
	siteMetadata: {
		title: `Kingsview Real Estate`,
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident exercitationem minima quod labore distinctio, tempora officiis aut voluptate. Amet, magni. Ullam dolore ipsum obcaecati et quos illo eveniet libero..`,
		author: `@magic8baller`,
	},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: `gatsby-plugin-react-svg`, options: {
				rule: {
					include: /icons/
				}
			}
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
		// 	options: {}
		// }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

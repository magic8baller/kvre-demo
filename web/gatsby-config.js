// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const path = require("path");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
	siteMetadata: {
		title: `Kingsview Real Estate`,
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident exercitationem minima quod labore distinctio, tempora officiis aut voluptate. Amet, magni. Ullam dolore ipsum obcaecati et quos illo eveniet libero..`,
		author: `@magic8baller`,
	},
  plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
			},
		},
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
		},
	"gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
			options: {}
		},
		{
			resolve: `gatsby-plugin-react-svg`, options: {
				rule: {
					include: /icons/
				}
			}
		}
  ]
};

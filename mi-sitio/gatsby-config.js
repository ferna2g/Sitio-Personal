/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
    	'gatsby-plugin-postcss',
    	'gatsby-transformer-json',
      `gatsby-plugin-sass`,
    	{
    		resolve: 'gatsby-source-filesystem',
    		options: {
    			name: 'data',
    			path: `${__dirname}/src/data`
    		}
    	},
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /imgs\/icons/,
          }
        }
      }
    ],
}

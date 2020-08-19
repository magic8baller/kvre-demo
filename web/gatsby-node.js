const {isFuture} = require("date-fns");
// const path = require('path')

// exports.onCreateWebpackConfig = ({actions}) => {
// 	actions.setWebpackConfig({
// 		resolve: {
// 			modules: [
// 				path.resolve(__dirname, 'node_modules'),
// 				path.resolve(__dirname, 'src'),
// 				'node_modules'
// 			],
// 		},
// 	})
// }

exports.createSchemaCustomization = ({actions, schema}) => {
	actions.createTypes([
		schema.buildObjectType({
			name: "SanityPost",
			interfaces: ["Node"],
			fields: {
				isPublished: {
					type: "Boolean!",
					resolve: (source) => new Date(source.publishedAt) <= new Date(),
				},
			},
		}),
	]);
};


// async function createSingletonPages (pathPrefix = "/", graphql, actions, reporter) {
// 	const {createPage} = actions;
// 	const result = await graphql(`
//   query SingletonPageQuery {
//     allSanityRoute(filter: {slug: {current: {in: ["team", "about"]}}}) {
//       edges {
//         node {
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `)
// 	if (result.errors) throw result.errors;

// 	const routeEdges = (result.data.allSanityRoute || {}).edges || [];
// 	routeEdges.forEach((edge) => {
// 		const {node} = edge
// 		const {id, slug = {}} = edge.node;
// 		const path = [pathPrefix, slug.current, "/"].join("");
// 		reporter.info(`Creating landing page: ${path}`);
// 		createPage({
// 			path,
// 			component: require.resolve(`./src/templates/${slug.current}.js`),
// 			context: node,
// 		});
// 	});
// }
// allSanityRoute (filter: {slug: {current: {nin: ["team", "about"]}}}) {
async function createLandingPages (pathPrefix = "/", graphql, actions, reporter) {
	const {createPage} = actions;
	const result = await graphql(`
  query LandingQuery {
    allSanityRoute(filter: {slug: {current: {nin: ["team", "about"]}}}) {
      edges {
        node {
          id
          slug {
            current
          }
        }
      }
    }
  }
`)
	if (result.errors) throw result.errors;

	const routeEdges = (result.data.allSanityRoute || {}).edges || [];
	routeEdges.forEach((edge) => {
		const {id, slug = {}} = edge.node;
		const path = [pathPrefix, slug.current, "/"].join("");
		reporter.info(`Creating landing page: ${path}`);
		createPage({
			path,
			component: require.resolve("./src/templates/page.js"),
			context: {id},
		});
	});
}

async function createBlogPostPages (pathPrefix = "/blog", graphql, actions, reporter) {
	const {createPage} = actions;
	const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, isPublished: { eq: true } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

	if (result.errors) throw result.errors;

	const postEdges = (result.data.allSanityPost || {}).edges || [];
	postEdges
		.filter((edge) => !isFuture(edge.node.publishedAt))
		.forEach((edge) => {
			const {id, slug = {}} = edge.node;
			const path = `${pathPrefix}/${slug.current}/`;
			reporter.info(`Creating blog post page: ${path}`);
			createPage({
				path,
				component: require.resolve("./src/templates/blog-post.js"),
				context: {id},
			});
		});
}

exports.createPages = async ({graphql, actions, reporter}) => {
	await createLandingPages("/", graphql, actions, reporter);
	await createBlogPostPages("/blog", graphql, actions, reporter);
};

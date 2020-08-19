import React from "react";
import GraphQLErrorList from "./graphql-error-list";
import Layout from "./containers/layout";

const Errors = ({ errors, siteSettings={} }) => {
	if (!siteSettings) {
		throw new Error(
			'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
		);
	}
	return(
  <Layout>
    <GraphQLErrorList errors={errors} />
  </Layout>
);}

export default Errors;

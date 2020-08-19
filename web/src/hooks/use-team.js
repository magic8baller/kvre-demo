import {useStaticQuery, graphql} from 'gatsby'
export const useSiteTeam = () => {
	const {teamMembers} = useStaticQuery(graphql`
    query{
          teamMembers: allSanityPerson(
            sort: { fields: [order], order: ASC }
          ) {
          edges {
            node {
              name
              role
              email
              phone
              nmls
              _rawBio
              mainImage {
                ...SanityImage
                alt
                asset {
                  fluid(maxWidth: 384) {
                    ...GatsbySanityImageFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
  `)
	return teamMembers
}
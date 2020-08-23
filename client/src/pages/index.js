/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"

import Header from "../components/Header"
import H1 from "../components/H1"
import Card from "../components/Card"
import SocialLinks from "../components/SocialLinks"
import BackgroundImage from "../components/BackgroundImage"
import MasonryContainer from "../components/MasonryContainer"
import ScreenContainer from "../components/ScreenContainer"
import OuterLink from "../components/OuterLink"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bg: file(relativePath: { eq: "dark-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allFile(
        filter: { relativePath: { glob: "0*.jpg" } }
        sort: { order: ASC, fields: relativePath }
      ) {
        images: nodes {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
            id
          }
        }
      }
    }
  `)
  return (
    <div tw="text-white text-opacity-75">
      <BackgroundImage
        fluid={data.bg.childImageSharp.fluid}
        parentStyle={{
          position: "relative",
        }}
      >
        <SEO title="Home" />
        <ScreenContainer>
          <Header>
            {/* Avatar component */}
            <div
              css={[
                tw`p-2 mx-auto rounded-full`,
                css`
                  width: 10rem;
                  background-color: rgba(255, 255, 255, 0.075);
                  border: solid 1px rgba(255, 255, 255, 0.25);
                `,
              ]}
            >
              <Img
                fluid={data.avatar.childImageSharp.fluid}
                style={{ borderRadius: "9999px" }}
                alt="avatar"
              />
            </div>
            <H1>
              This is{" "}
              <strong tw="text-opacity-100 font-normal">Visualize</strong>, a
              responsive site template designed by{" "}
              <OuterLink
                href="https://templated.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEMPLATED
              </OuterLink>{" "}
              <br />
              and released for free under the Creative Commons License.
            </H1>
            <SocialLinks />
          </Header>
          <Layout>
            <MasonryContainer>
              {data.allFile.images.map(image => {
                return (
                  <Card
                    key={image.id}
                    image={image.childImageSharp.fluid}
                    title={"Lorem ipsum dolor sit amet"}
                  />
                )
              })}
            </MasonryContainer>
          </Layout>
        </ScreenContainer>
      </BackgroundImage>
    </div>
  )
}

export default IndexPage
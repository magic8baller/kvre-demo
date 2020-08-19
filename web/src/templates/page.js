import {graphql} from "gatsby";
import React from "react";
import CtaSection from '../camp/tailwindui/cta-sections';
import ServicesSection from '../components/tailwindui/feature-sections';
import Layout from "../components/containers/layout";
import GraphQLErrorList from "../components/graphql-error-list";
import ContactForm from '../test/contact2'
import CTA from "../components/sanity-ui/cta/cta";
import CTAColumns from "../components/sanity-ui/uiLayout/cta-columns";
import Hero from "../components/sanity-ui/hero";
import InfoRows from "../components/sanity-ui/uiLayout/InfoRows";
import Pricing from "../components/sanity-ui/pricing";
import SEO from "../components/seo";
import HeroAlt from '../test/hero';
import tw, {css} from 'twin.macro'
import TeamSection from '../components/sanity-ui/teamSection'
import TextSection from '../components/sanity-ui/textSection'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = (props) => {
	const {data, errors} = props;

	if (errors) {
		return (
			<Layout>
				<GraphQLErrorList errors={errors} />
			</Layout>
		);
	}

	const site = (data || {}).site;

	if (!site) {
		throw new Error(
			'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
		);
	}

	const page = data.page || data.route.page;

	const menuItems = page.navMenu && (page.navMenu.items || []);
	const pageTitle = data.route && !data.route.useSiteTitle && page.title;

	let content = (page._rawContent || [])
		.filter((c) => !c.disabled)
		.map((c, i) => {
			let el = null;
			switch (c._type) {
				case "pricing":
					el = <Pricing key={c._key} {...c} />;
					break;
							case "textSection":
								el = <TextSection key={c._key} {...c} />;
								break;
				case "infoRows":
					el = <InfoRows key={c._key} {...c} />;
					break;
				case "hero":
					el = <Hero key={c._key} {...c} />;
					break;
				case "hero_alt":
					el = <Hero key={c._key} {...c} />;
					break;
				case "ctaColumns":
					el = <CTAColumns key={c._key} {...c} />;
					break;
				case "ctaPlug":
					el = <CTA key={c._key} {...c} />;
					break;

				default:
					el = null;
			}
			return el;
		});

let pageContent = pageTitle== 'Contact' ? <ContactForm /> : pageTitle == 'Team' ? <TeamSection /> : content
	return (
		<Layout navMenuItems={menuItems} textWhite={true}>
			<SEO
				title={pageTitle}
				description={site.description}
				keywords={site.keywords}
				bodyAttr={{
					class: "leading-normal tracking-normal text-white gradient",
				}}

			/>
			<div tw="pt-6 w-full" css={css``}>
			{pageContent}
				<HeroAlt />
				<ServicesSection />
				<CtaSection />
			</div>
		</Layout>
	);
};

export default Page;

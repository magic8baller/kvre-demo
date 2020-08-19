import {Global} from '@emotion/core'
import PropTypes from "prop-types"
import React, {useState} from "react"
import tw, {css, styled} from 'twin.macro'
import worldSvg from '../images/world.svg'
// import LinkedInIcon from 'images/linkedin-icon.svg'
import Footer from './Footer'
import Header from './header'
import MobileNav from './MobileNav'
const Logo = styled.img`
	padding: 1em;
	max-width: 176px;
`
const Wrapper = styled.div`
 ${tw`h-screen bg-white`};

header, footer {
	flex: 0 1 auto;
}
 `
const Layout = ({children}) => {

	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	return (
		<>

			<Global styles={css`
			html {
				scroll-behavior: smooth;
			}
			*,
			::after,
			::before {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			:root {
				--yellow: #f7d9a6;
				--lightgray: #b5beca;
				--dark:#444a52;
				--beige:#d0b68d;
				--champ: #8d8578;
			}
			body {
				background: white;
				color: #001;
			}
			`} />
			<Wrapper tw='min-h-screen flex flex-col'>
				<Header />

				<MobileNav />
				<main tw='flex-grow p-8 mt-24'>
					{children}
					<Card />
				</main>
				<Footer />

			</Wrapper>
		</>
	)
}

const SvgWrapper = styled.img`
svg path {
	${tw`w-full`};
}
`

const Card = () => (
	<div tw='p-12'>
		<div tw="bg-white shadow-md max-w-sm mx-auto rounded-lg overflow-hidden">
			<h1 tw="p-8 text-center text-3xl leading-tight text-black">Powering businesses<br />all over the globe.</h1>
			<div tw="-mx-8">
				<SvgWrapper src={worldSvg} />
			</div>
			<p tw="p-8 text-center text-lg text-gray-700 leading-normal">
				With offices in 6 different countries and many more of us remote, we’re able to provide support 24 hours a day, 7 days a week.
        </p>
			<a href="/" tw="block uppercase px-8 py-6 text-lg text-center bg-gray-200 text-indigo-200 no-underline font-bold">Sign Up</a>
		</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout

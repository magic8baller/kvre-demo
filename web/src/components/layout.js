import React, {useState} from "react";
import tw, {css, styled} from 'twin.macro';
import Header from "./Navbar";
import MobileNav from '../camp/MobileNav';
import {GlobalStyles} from '../styles/global.css';
import "../styles/layout.css";
import Footer from "./Footer/index.js";

const Wrapper = styled.div`
 ${tw`h-screen bg-cool-gray-400`};

header, footer {
	flex: 0 1 auto;
}
 `
const LayoutFC = ({children,
	siteTitle,
	navMenuItems, textWhite = true}) => {
	const [showNav, setShowNav] = useState(true);
	const handleShowNav = () => setShowNav(true);
	const handleHideNav = () => setShowNav(false);


	return (
			<>
				<GlobalStyles />
				<Wrapper css={css`body {
					${tw`bg-cool-gray-400`}
			}`}>
				<Header

					navMenuItems={navMenuItems}
					siteTitle={siteTitle}
					onHideNav={handleHideNav}
					onShowNav={handleShowNav}
					showNav={showNav}
					textWhite={textWhite}
				/>
				<MobileNav />
				<main tw='w-full flex-grow mt-24 bg-cool-gray-400'>
					{children}
					</main>
				<Footer siteTitle={siteTitle} />
		</Wrapper>
			</>
		);
	}


export default LayoutFC;

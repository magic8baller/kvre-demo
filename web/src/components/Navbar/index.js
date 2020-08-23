import {Link} from "gatsby";
import React, {useContext} from "react";
import tw, {styled} from 'twin.macro';
import FullNav from './FullNav'
import {AppContext} from 'context/index.js';
import BrandLogo from '../../images/kv-logo.png';
import {Menu} from '../MobileNav/Nav.styles';
const Brand = styled.img`
	padding: 1em;
	max-width: 250px;
`
const StyledHeader = styled.header`
${tw`fixed w-full z-30 top-0 text-indigo-100 bg-white shadow`}
`
const NavHeader = ({showNav, onHideNav, onShowNav, siteTitle, navMenuItems = [], textWhite = true}) => {

	const state = useContext(AppContext)
	const {isMobileNavOpen, setIsMobileNavOpen} = state

	let navActionClass =
		"mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
	let navContentClass =
		"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 md:pt-0 lg:mt-0 text-black pb-3 lg:p-0 z-20";
let squareButtonActionClass = "p-4 rounded bg-cool-gray-200 ml-8 font-bold text-indigo-600 hocus:(text-cool-gray-600 bg-indigo-200) transition duration-150 ease-in-out"

	let logo = BrandLogo

	return (
		<StyledHeader id="header">
			<div className="w-full container mx-auto flex flex-no-wrap md:flex-wrap items-center justify-between mt-0 lg:py-2">
				<div className="mx-auto pl-4 flex justify-center">
					<Link to="/">
						<Brand src={logo} alt={`${siteTitle} logo image`} />
					</Link>
				</div>
				<FullNav navContentClass={navContentClass} buttonActionClass={squareButtonActionClass} navMenuItems={navMenuItems} />
				<Menu tw='block md:hidden' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} isMobileNavOpen={isMobileNavOpen}>
					<Burger tw='z-50' />
				</Menu></div>
			<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
		</StyledHeader>
	);
};

	const Burger = () => (
	<div tw="-mr-2 flex items-center md:hidden">
		<button type="button" tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
			<svg tw="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
)

export default NavHeader
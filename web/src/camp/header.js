import {Link} from "gatsby";
import React, {useContext, useState} from "react";
import tw, {styled} from 'twin.macro';
// import {Link} from "gatsby";
import CTALink from "../components/sanity-ui/CTALink";
import {AppContext} from '../context';
import {useScroll} from '../hooks/use-scroll.ts';
import BrandLogo from '../images/kv-logo.png';
import WhiteLogo from '../images/white-kv.png';
import {Menu} from './MobileNav/Nav.styles';

export const AltHeader = ({showNav, onHideNav, onShowNav, siteTitle, navMenuItems = [], textWhite = true}) => {

	const {isMobileNavOpen,
		setIsMobileNavOpen} = useContext(AppContext)

let headerClass = "mb-8 fixed w-full z-30 top-0 text-white";
// "bg-transparent mb-8 fixed w-full z-30 top-0 text-white";
	// headerClass += isScrolled ? " bg-white shadow" : "";

	let navActionClass =
		"mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
	let navContentClass =
		"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
	let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";

	let logo = BrandLogo

	return (
		<StyledHeader id="header">

			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
				<div className="pl-4 flex items-center">
					<Link to="/">
						<Brand src={logo} alt={`${siteTitle} logo image`} />
					</Link>
				</div>

				<div tw='hidden md:block'>
					<nav tw='flex justify-end' className={navContentClass} id="nav-content">
						<ul tw='flex uppercase items-center'>
							{navMenuItems.map((i) => (
								<a href="#" tw="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
									<li className="mr-3">
										<CTALink {...i} buttonActionClass={navActionClass} />
									</li></a>
							))}
							<a href="#" tw="p-4 rounded bg-cool-gray-200 ml-8 font-bold text-indigo-600 hocus:(text-cool-gray-600 bg-indigo-200) transition duration-150 ease-in-out">Contact &rarr;</a>

						</ul>
						</nav>
					</div>


			<Menu tw='block md:hidden' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} isMobileNavOpen={isMobileNavOpen}>
				<AltBurger tw='z-50' />
			</Menu></div>
			<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
		</StyledHeader>
	);
};




const Brand = styled.img`
	padding: 1em;
	max-width: 250px;
`
const StyledHeader = styled.header`
${tw`fixed w-full z-30 top-0 text-indigo-100 bg-white shadow`}
`
const Header = ({siteTitle}) => {
	const {isMobileNavOpen,
		setIsMobileNavOpen} = useContext(AppContext)
	console.log(AppContext)
	return (
		<StyledHeader>
			<div tw="w-full container mx-auto flex flex-wrap items-center justify-between py-2">
				<div tw="pl-4 flex">
					<Link id="siteTitle" to="/">
						<Brand src={BrandLogo} alt={`${siteTitle} logo image`} />
						{/* <img width='60%' src={SvgLogo} alt={siteTitle} /> */}
					</Link>
				</div>
				<FullNav />
				<Menu tw='block md:hidden' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} isMobileNavOpen={isMobileNavOpen}>
					<AltBurger />
				</Menu>

			</div>
		</StyledHeader>
	)
}

const AltBurger = () => (
	<div tw="-mr-2 flex items-center md:hidden">
		<button type="button" tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
			<svg tw="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
)
const FullNav = () => {
	return (
		<div tw='hidden md:block'>
			<nav tw='flex justify-end'>
				<ul tw='flex uppercase items-center'>
					<li tw='p-4'><Link to='/'>Home</Link></li>
					<li tw='p-4'><Link to='/about'>About</Link></li>
					<li tw='p-4'><Link to='/team'>Team</Link></li>
					<li tw='p-4'> <Link to='/services'>Services</Link></li>
					<li tw='p-4'><Link to='/contact' tw='bg-blue-500 hover:bg-blue-700 flex'>
						<span tw='p-2'>Contact</span>
						<span tw='bg-blue-700 p-2 pr-1 text-center'>
							<i className="fas fa-chevron-right" />
						</span>
						<span></span>
					</Link></li>
				</ul>
			</nav>
		</div>
	)
}



export default Header

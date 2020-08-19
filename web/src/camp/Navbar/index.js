import {Link} from "gatsby";
import React, {useContext, useState} from "react";
import tw, {styled} from 'twin.macro';
import CTALink from "../components/sanity-ui/CTALink";
import {AppContext} from '../context';
import BrandLogo from '../images/kv-logo.png';
import {Menu} from './MobileNav/Nav.styles';

const Brand = styled.img`
	padding: 1em;
	max-width: 250px;
`
const StyledHeader = styled.header`
${tw`fixed w-full z-30 top-0 text-indigo-100 mb-8 bg-white shadow`}
`
export const AltHeader = ({showNav, onHideNav, onShowNav, siteTitle, navMenuItems = [], textWhite = true}) => {

	const {isMobileNavOpen,
		setIsMobileNavOpen} = useContext(AppContext)

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
							<a href="/contact" tw="p-4 rounded bg-cool-gray-200 ml-8 font-bold text-indigo-600 hocus:(text-cool-gray-600 bg-indigo-200) transition duration-150 ease-in-out">Contact &rarr;</a>

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

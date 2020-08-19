/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "gatsby";
import React, {useState} from "react";
import {styled} from 'twin.macro';
import BrandLogo from '../images/kv-logo.png';
import CTALink from "./sanity-ui/cta/CTALink";
const Brand = styled.img`
	padding: 1em;
	max-width: 250px;
`
const Header = ({showNav, siteTitle, scrolled, navMenuItems = [], scrollPos, scrollDirection, textWhite = true}) => {

	const HeaderNav = styled.header`
	${tw`mb-8 fixed w-full z-30 top-0`}
	`

	// headerClass += hideOnScroll ? " bg-white shadow" : "";

	let navActionClass =
		"mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
	// navActionClass += !textWhite || !hideOnScroll ? " bg-white text-gray-800" : "";
	// navActionClass += textWhite || scrolled ? " gradient text-white" : "";

	let navContentClass =
		"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
	// navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
	// navContentClass += textWhite || scrolled ? " bg-white" : "";

	let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
	// titleClass += !textWhite || scrolled ? " text-gray-800" : "";
	// titleClass += textWhite || !scrolled ? " text-white" : "";
	let logo = BrandLogo
	return (
		<HeaderNav id="header" className={headerClass}>
			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
				<div className="pl-4 flex items-center">
					<Link to="/">
						<Brand src={logo} alt={`${siteTitle} logo image`} />
					</Link>
				</div>

				{showNav && navMenuItems && (
					<div className={navContentClass} id="nav-content">
						<ul className="list-reset lg:flex justify-end flex-1 items-center">
							{navMenuItems.map((i) => (

								<li className="mr-3">
									<CTALink {...i} buttonActionClass={navActionClass} />
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			{/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
		</HeaderNav>
	);
};

export default Header;

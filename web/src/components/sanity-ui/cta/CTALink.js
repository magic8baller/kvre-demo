import {Link, navigate} from "gatsby";
import 'twin.macro'
import React from "react";
import Icon from '../../icon'
const doNavigate = target => {
	if (!target || !target.length) {
		return;
	}
	const internal = /^\/(?!\/)/.test(target);
	if (internal) {
		navigate(target);
	} else {
		window.location = target;
	}
};

const CTALink = props => {
	let link = props.route || props.link || "/";
	if (
		props.landingPageRoute &&
		props.landingPageRoute.slug &&
		props.landingPageRoute.slug.current
	) {
		link = props.landingPageRoute.slug.current;
	}

	if (props.route == '/contact') {
		return (
			<button tw="p-4 mr-0 rounded bg-cool-gray-200 ml-1 font-bold text-indigo-600 hocus:(text-cool-gray-600 bg-indigo-200) transition duration-150 ease-in-out"><Link to={link} tw='flex items-center uppercase'> <span tw='p-1'>{props.title}</span><span tw=' text-center'><Icon  symbol='chevron-right'/></span></Link></button>
		)
	}

	if (props.kind === "button") {
		return (

			<button
				id="navAction"
				onClick={() => doNavigate(link)}
				className={props.buttonActionClass || ""}
			>
				{props.title}
			</button>
		);
	}

	// External
	if (props.link) {
		return (
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				{props.title}
			</a>
		);
	}

	return (
		<Link className="mr-3" to={link}>
			{props.title}
		</Link>
	);
};

export default CTALink;

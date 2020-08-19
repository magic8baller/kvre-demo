import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'typeface-lato';
import 'typeface-roboto';
import 'typeface-yeseva-one';
import 'typeface-oswald';
import '@tailwindcss/ui';
import '@tailwindcss/custom-forms';

import React from "react"
import {AppProvider} from './src/context'
export const wrapRootElement = ({element}) => (
	<AppProvider>{element}</AppProvider>
)

export const onInitialClientRender = () => {
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
};

export const onRouteUpdate = () => {
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
};
// export const onRouteUpdate = ({location, prevLocation}) => {
// 	// console.log('new pathname', location.pathname)
// 	// console.log('old pathname', prevLocation ? prevLocation.pathname : null)
// 	if (location.pathname === '/home-value-estimator/') {
// 		(
// 			function (h, b) {
// 				var w = window, d = document, s = 'script', x, y;
// 				w['__hb_namespace'] = h;
// 				w[h] = w[h] || function () {
// 					(w[h].q = w[h].q || []).push(arguments)
// 				};
// 				y = d.createElement(s);
// 				x = d.getElementsByTagName(s)[0];
// 				y.async = 1;
// 				y.src = b;
// 				x.parentNode.insertBefore(y, x)
// 			}
// 		)('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');
// 		Homebot('#homebot_homeowner', '03bb83cda45c729b233efed7893784d286d9d7ee1b085bd6')
// 	}

// 	if (location.pathname === '/mortgage-calculator/') {
// 		(function () {
// 			var s = document.createElement("script");
// 			s.type = "text/javascript";
// 			s.async = true;
// 			s.src = "https://cdn.calculatestuff.com/resizer.js";
// 			(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(s);
// 		})()
// 	}
// }
// export const onRouteUpdate = ({location}) => {
// 	anchorScroll(location);
// 	return true;
// };
// export const shouldUpdateScroll = ({
// 	routerProps: {location},
// 	getSavedScrollPosition
// }) => {
// 	anchorScroll(location);
// 	return true;
// }

// function anchorScroll (location) {
// 	// Check for location so build does not fail
// 	if (location && location.hash) {
// 		setTimeout(() => {
// 			// document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
// 			const item = document.querySelector(`${location.hash}`).offsetTop;
// 			const mainNavHeight = document.querySelector(`nav`).offsetHeight;
// 			window.scrollTo({top: item - mainNavHeight, left: 0, behavior: 'smooth'});
// 		}, 0);
// 	}
// }
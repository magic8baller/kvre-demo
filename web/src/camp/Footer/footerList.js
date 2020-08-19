import React from 'react'
import 'twin.macro'
const FooterList = ({category}) => {
	return (
		<ul tw="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full"><li tw="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">{category.title}</li>
			{category.links.map((link, index) => (
				<li key={index}><a href={link.path} tw="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">{link.title}</a></li>
			))}
		</ul>
	)
}

export default FooterList

import React from 'react'
import 'twin.macro'
const FollowList = () => (
	<div tw="text-gray-700 flex flex-col w-full">
		<div tw="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
		<div tw="flex pl-4 justify-start mt-2">
			<a tw="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="/">
				<svg viewBox="0 0 24 24" tw="fill-current w-5 h-5">
					<path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
			</a>
			<a tw="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="/">
				<svg viewBox="0 0 24 24" tw="fill-current w-5 h-5">
					<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
			</a>
			<a tw="block flex items-center text-gray-300 hover:text-white no-underline" href="/">
				<svg tw="fill-current w-5 h-5" viewBox="0 0 24 24">
					<path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77
    0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
				</svg>
			</a>
		</div>
	</div>
)

export default FollowList

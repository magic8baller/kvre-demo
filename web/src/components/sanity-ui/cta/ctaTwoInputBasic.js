import React from 'react'
const defaultHeadline = `Master Cleanse Reliac Heirloom`
const defaultTagline = `Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.`
const defaultButtonText = `Contact `
const ctaTwoInputBasic = ({headline=defaultHeadline, tagline=defaultTagline, buttonText=defaultButtonText}) => {
	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{headline}</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">{tagline}</p>
				</div>
				<div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
					<input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Full Name" type="text" />
					<input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Email" type="email" />
					<button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{buttonText} &rarr;</button>
				</div>
			</div>
		</section>
	)
}

export default ctaTwoInputBasic

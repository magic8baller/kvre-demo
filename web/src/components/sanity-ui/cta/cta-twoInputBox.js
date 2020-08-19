import React from 'react'

const defaultSubheading = `Literally you probably haven't heard of them jean shorts.`
const defaultFormheading = `Sign Up`
const defaultCtaHeadline = `Slow-carb next level shoindcgoitch ethical authentic, poko scenester`
const defaultCtaTagline = `Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.`
const defaultButtonText = `Contact`
const CTAtwoInputBox = ({ctaHeadline= defaultCtaHeadline, ctaTagline=defaultCtaTagline, subHeading = defaultSubheading, formHeading = defaultFormheading, buttonText=defaultButtonText}) => (
	<section className="text-gray-700 body-font">
		<div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
			<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
				<h1 className="title-font font-medium text-3xl text-gray-900">{ctaHeadline}</h1>
				<p className="leading-relaxed mt-4">{ctaTagline}</p>
			</div>
			<div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
				<h2 className="text-gray-900 text-lg font-medium title-font mb-5">{formHeading}</h2>
				<input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Full Name" type="text" />
				<input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
				<button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{buttonText} &rarr;</button>
				<p className="text-xs text-gray-500 mt-3">{subHeading}</p>
			</div>
		</div>
	</section>
	)


export default CTAtwoInputBox

import React from 'react'
import Layout from '../components/layout'
import CTA2Input from '../components/sanity-ui/cta/cta-twoInputBox'
import CTA2InputBasic from '../components/sanity-ui/cta/ctaTwoInputBasic'
// import 'twin.macro'
import ContactForm from '../components/sanity-ui/forms/full-contact-form'
import CTABasic from '../components/sanity-ui/forms/shady-form'
import SEO from '../components/seo'
const Test = () => {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Contact"
			/>

			<h4>cta 2 input</h4>
			<CTA2Input />
			<h4>cta 2 input basic</h4>
			<CTA2InputBasic />
			<CTABasic />
			<ContactForm />
			<section className="pb-20 relative block bg-gray-900">
				<div
					className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
					style={{height: "80px", transform: "translateZ(0)"}}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-gray-900 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
</section>
			<section className="relative block py-24 lg:pt-0 bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
						<div className="w-full lg:w-6/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl font-semibold">
										Want to work with us?
                    </h4>
									<p className="leading-relaxed mt-1 mb-4 text-gray-600">
										Complete this form and we will get back to you in 24 hours.
                    </p>
									<div className="relative w-full mb-3 mt-8">
										<label
											className="block uppercase text-gray-700 text-xs font-bold mb-2"
											htmlFor="full-name"
										>
											Full Name
                      </label>
										<input
											type="text"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="Full Name"
											style={{transition: "all .15s ease"}}
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-gray-700 text-xs font-bold mb-2"
											htmlFor="email"
										>
											Email
                      </label>
										<input
											type="email"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="Email"
											style={{transition: "all .15s ease"}}
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-gray-700 text-xs font-bold mb-2"
											htmlFor="message"
										>
											Message
                      </label>
										<textarea
											rows="4"
											cols="80"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="Type a message..."
										/>
									</div>
									<div className="text-center mt-6">
										<button
											className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
											type="button"
											style={{transition: "all .15s ease"}}
										>
											Send Message
                      </button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mt-10 relative p-4 border border-grey-lighter w-1/2">
					<form>
						<div className="flex flex-wrap items-stretch w-full mb-4 relative">
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">@</span>
							</div>
							<input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="Username" />
						</div>
						<div className="flex flex-wrap items-stretch w-full mb-4 relative">
							<input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Recipient's username" />
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">@example.com</span>
							</div>
						</div>
						<label htmlFor="basic-url" className="text-grey-darker inline-block mb-2">Your vanity URL</label>
						<div className="flex flex-wrap items-stretch w-full mb-4 relative">
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">https://example.com/users/</span>
							</div>
							<input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative" />
						</div>
						<div className="flex flex-wrap items-stretch w-full mb-4 relative">
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">$</span>
							</div>
							<input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light px-3 relative" />
							<div className="flex -mr-px">
								<span className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">.00</span>
							</div>
						</div>
					</form>
				</div>

			</section>
		</Layout>

	)
}

export default Test

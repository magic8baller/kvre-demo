import React from 'react'
import tw, {css} from 'twin.macro'
const ContactPage = () => {
	return (
			<section className="text-gray-700 body-font relative">
				<div className="container px-5 py-24 mx-auto flex flex-wrap sm:flex-no-wrap">
					<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
						<iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.494381507484!2d-73.93137115359197!3d40.61897797934212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24352dcc9c6ab%3A0xcd8249430cd7b9d5!2sKingsview%20Realty!5e0!3m2!1sen!2sus!4v1596823225236!5m2!1sen!2sus" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
						<div className="bg-white relative flex flex-wrap py-6">
							<div className="lg:w-1/2 px-6">
								<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
								<p className="leading-relaxed">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
							</div>
							<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
								<a className="text-indigo-500 leading-relaxed">example@email.com</a>
								<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
								<p className="leading-relaxed">123-456-7890</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
						<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
						<p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
						<input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" />
						<input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
						<textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" defaultValue={""} />
						<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
						<p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
					</div>
				</div>
			</section>

	)
}

export default ContactPage

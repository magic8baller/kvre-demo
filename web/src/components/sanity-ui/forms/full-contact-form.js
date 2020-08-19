import React from 'react'
import 'twin.macro'
const ContactFormWithTextarea = () => {
	return (
		<section>
			<div className="mx-4 card bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
				<div className="title">
					<h1 className="font-bold text-center">Report a bug or request a feature</h1>
				</div>
				<div className="mb-3 pt-0">
					<input type="text" placeholder="Placeholder" className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full" />
				</div>
				<div className="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4">
					<p className="w-1/2 mb-2 md:mb-0">I would like to </p>
					<select className="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500">
						<option value="select" selected>Select an option</option>
						<option value="bug">report a bug</option>
						<option value="feature">Request a feature</option>
						<option value="feedback">Feedback</option>
					</select>
				</div>
				<div className="form mt-4">
					<div className="flex flex-col text-sm">
						<label htmlFor="title" className="font-bold mb-2">Title</label>
						<input className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" placeholder="Enter a title" />
					</div>
					<div className="text-sm flex flex-col">
						<label htmlFor="description" className="font-bold mt-4 mb-2">Description</label>
						<textarea className=" appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500" placeholder="Enter your description" defaultValue={""} />
					</div>
				</div>
				<div className="submit">
					<button type="submit" className=" w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none ">Submit</button>
				</div>
			</div>
		</section>
	)
}

export default ContactFormWithTextarea

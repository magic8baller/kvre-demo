import React from 'react'
import 'twin.macro'
const CTABasic = () => {
	return (
		<div tw="min-w-full mx-4 my-8 flex items-center justify-between p-5">
			<div tw="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
				<div tw="flex flex-wrap -mx-3 items-center">
					<div tw="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
						<div tw="p-5 xl:px-8 md:py-5">
							<h3 tw="text-2xl">Welcome, Scott!</h3>
							<h5 tw="text-xl mb-3">Lorem ipsum sit amet</h5>
							<p tw="text-sm text-indigo-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sit asperiores perferendis odit enim natus ipsum reprehenderit eos eum impedit tenetur nemo corporis laboriosam veniam dolores quos necessitatibus, quaerat debitis.</p>
						</div>
					</div>
					<div tw="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
						<div tw="p-5 xl:px-8 md:py-5">
							<a tw="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3" href="https://codepen.io/ScottWindon" target="_blank">Find out more?</a>
							<button tw="w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none">No thanks</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CTABasic

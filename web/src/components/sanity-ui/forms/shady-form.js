import React from 'react'
import 'twin.macro'
const EtchedForm = () => {
	return (
		<div tw="mx-auto my-8 bg-white max-w-md shadow rounded-lg p-10">
			<div tw="mx-auto grid gap-6">
				<div tw="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
					<div tw="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
						<p>
							<label htmlFor="name" tw="bg-white text-gray-600 px-1">First name *</label>
						</p>
					</div>
					<p>
						<input id="name" autoComplete="false" tabIndex={0} type="text" tw="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
					</p>
				</div>
				<div tw="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
					<div tw="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
						<p>
							<label htmlFor="lastname" tw="bg-white text-gray-600 px-1">Last name *</label>
						</p>
					</div>
					<p>
						<input id="lastname" autoComplete="false" tabIndex={0} type="text" tw="py-1 px-1 outline-none block h-full w-full" />
					</p>
				</div>
				<div tw="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
					<div tw="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
						<p>
							<label htmlFor="email" tw="bg-white text-gray-600 px-1">email *</label>
						</p>
					</div>
					<p>
						<input id="email" autoComplete="false" tabIndex={0} type="text" tw="py-1 px-1 outline-none block h-full w-full" />
					</p>
				</div>
				<div tw="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
					<div tw="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
						<p>
							<label htmlFor="message" tw="bg-white text-gray-600 px-1">message *</label>
						</p>
					</div>
					<p>
						<textarea id="message" autoComplete="false" tabIndex={0} type="message" tw=" h-64 py-1 px-1 outline-none block max-h-full w-full" />
					</p>
				</div>
			</div>
			<div tw="border-t mt-6 pt-3">
				<button tw="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
					Save
          </button>
			</div>
		</div>
	)
}

export default EtchedForm

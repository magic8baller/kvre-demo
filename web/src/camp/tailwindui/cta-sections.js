import React from 'react'
import tw from 'twin.macro'

const Container = tw.div`p-8 bg-gray-50 h-screen`

export default ({Headline = "Ready to dive in?", Tagline ="Start your free trial today.", ButtonText1="Get started", ButtonText2="Learn more"}) => (
	<Container>
		<div tw="bg-gray-50">
			<div tw="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 tw="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
					{Headline}
          <br />
					<span tw="text-indigo-600">{Tagline}</span>
				</h2>
				<div tw="mt-8 flex lg:flex-shrink-0 lg:mt-0">
					<div tw="inline-flex rounded-md shadow">
						<a
							href="/"
							tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						>
							{ButtonText1}
            </a>
					</div>
					<div tw="ml-3 inline-flex rounded-md shadow">
						<a
							href="/"
							tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						>
							{ButtonText2}
            </a>
					</div>
				</div>
			</div>
		</div>
	</Container>
)
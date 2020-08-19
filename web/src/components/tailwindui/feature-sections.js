import React from 'react';
import tw from 'twin.macro';
import Icon from '../icon';
const Main = tw.div`w-full`

const ItemsArray = [
	{subheading: 'Competitive exchange rates', body: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.', icon: <Icon symbol='service-0' />},
	{subheading: 'No hidden fees', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.', icon: <Icon symbol='service-1' />},
	{
		subheading: 'Transfers are instant', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.', icon: <Icon symbol='service-2' />
	},
	{
		subheading: 'Mobile notifications', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.', icon: <Icon symbol='service-3' />
	},
];

const FeatureSections = ({
	Heading = 'Transactions', Headline = 'A better way to send money', Tagline = '	Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.', Items = ItemsArray}) => (
		<Main>
			<div tw="py-12 bg-white">
				<div tw="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div tw="lg:text-center">
						<p tw="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
							{Heading}
						</p>
						<h3 tw="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							{Headline}
						</h3>
						<p tw="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
							{Tagline}
						</p>
					</div>

					<div tw="mt-10">
						<ul tw="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							{Items.map((item, index) => (

								<li tw='pb-5 md:pb-2' key={index}>
									<div tw="flex">
										<div tw="flex-shrink-0">
											<div tw='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>{item.icon}</div>

										</div>
										<div tw="ml-4">
											<h5 tw="text-lg leading-6 font-medium text-gray-900">
												{item.subheading}
											</h5>
											<p tw="mt-2 text-base leading-6 text-gray-500">
												{item.body}
											</p>
										</div>
									</div>
								</li>
							))}

						</ul>

					</div>
				</div>
			</div>
		</Main>
	)
	export default FeatureSections
import React from 'react'
import CTALink from '../sanity-ui/cta/CTALink'
import 'twin.macro'
const FullNav = ({navMenuItems, squareButtonActionClass, navContentClass}) => (
				<div tw='hidden md:block mx-auto'>
					<nav tw='justify-center flex lg:justify-end' className={navContentClass} id="nav-content">
						<ul tw='mx-auto flex uppercase items-center'>
							{navMenuItems.map((i) => (
								<a href="/" tw="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
									<li className="mr-3">
										<CTALink {...i} buttonActionClass={squareButtonActionClass} />
									</li></a>
							))}
						</ul>
					</nav>
				</div>
)
export default FullNav
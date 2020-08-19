import React from 'react'
import 'twin.macro'
import {FOOTER_LINKS} from '../../lib/navLinks'
import KVLogo from './whiteImage'
import FollowList from './followList'
import FooterList from './footerList'
const Footer = () => {
	return (
		<footer tw='w-full bg-gray-900 text-white pt-12 pb-10 px-4'>
			<div tw='pb-10 mx-auto pt-8 px-4 container overflow-hidden flex flex-col lg:flex-row justify-between'>
				<a href='/' tw='block -mt-4 mr-4 w-1/3'>
					<div tw='w-48 md:w-64'><KVLogo tw='w-40 ml-4 lg:ml-0' alt='brand logo' />
						<p tw='-ml-4 pt-2 text-sm md:text-base text-center'><i tw='text-base md:text-lg' className="far fa-building" />&nbsp;&nbsp;4713 Avenue N <br /><span style={{paddingLeft: '4em'}}>Brooklyn, NY 11234</span><br /><i tw='text-base md:text-lg' className="fas fa-phone-alt" /><a href="tel:+1718-692-2010">&nbsp; (718) 692-2010</a> </p>
					</div>
				</a>
				<div tw='w-2/3 block sm:flex text-sm mt-6 lg:mt-0'>
					{FOOTER_LINKS.categories.map((category, idx) => <FooterList key={idx} category={category} />)}
					<FollowList />
				</div>
			</div>
			<hr tw='mt-6 w-full' />
			<div tw='mt-6 w-full text-gray-400 text-center mx-auto'>
				&copy; {new Date().getFullYear()}, Kingsview Real Estate Inc. All Rights Reserved.
			</div>
		</footer>
	)
}

export default Footer

import {AnimatePresence, motion} from 'framer-motion'
import {Link} from 'gatsby'
import React, {useContext} from "react"
import {AppContext} from '../../context/index.js';
import {css} from 'twin.macro'
import {NAV_LINKS} from '../../lib/navLinks'
import {CloseNav, Container, Flex, Nav, NavHeader, NavList} from './Nav.styles'

const MobileNav = () => {
	const state = useContext(AppContext)
	const {
		isMobileNavOpen,
		showMobileNav,
		hideMobileNav,
		setIsMobileNavOpen
	} = state
	console.log(setIsMobileNavOpen)
	return (
		<>
			<AnimatePresence>
				{isMobileNavOpen && (
					<Nav
						tw='bg-indigo-500'
						initial={{x: '-100%'}}
						exit={{x: '-100%'}}
						animate={{x: isMobileNavOpen ? 0 : '-100%'}}
						transition={{duration: .8, ease: [.6, .05, -.01, .9]}}
					>
						<Container>
							<NavHeader>
								<Flex spaceBetween noHeight>
									<h2 tw='text-orange-400'>Susan Mittman Real Estate</h2>
									<CloseNav
										onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
									>
										<button>
											<svg className="closeIcon" width="25" height="25" viewBox="0 0 12 12"><g fill="none" fill-rule="evenodd" aria-hidden="true"><path d="M0 0h12v12H0"></path><path fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path></g></svg>
										</button>
									</CloseNav>
								</Flex>
							</NavHeader>
							<NavList>
								<ul>
									{NAV_LINKS.map(route => (
										<motion.li key={route.id}>
											<Link to={`/${route.path}`}>
												<motion.div
													initial={{x: -80}}
													whileHover={{
														x: -20,
														transition: {
															duration: 0.4,
															ease: [.6, -.05, -.01, .9]

														}
													}}
													tw='text-gray-300'
													className='link'>
													<span className='arrow'>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 101 57"
														>
															<path
																d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
																fill="#FFF"
																fillRule="evenodd"
															></path>
														</svg>
													</span>
													<span css={css`text-shadow: 1px 1px 2px pink;`}>{route.title}</span>
												</motion.div>
											</Link>
										</motion.li>
									))}
								</ul>
							</NavList>
						</Container>
					</Nav>
				)}
			</AnimatePresence>
		</>
	)
}

export default MobileNav
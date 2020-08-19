import tw, {css, styled} from 'twin.macro'
import {motion} from 'framer-motion'

// FGLLOBALS
export const Container = styled.div`
flex-grow: 1;
margin: 0 auto;
padding: 0 32px;
position: relative;
width: auto;
height: 100vh;
@media (min-width: 1024px) {
    max-width: 960px
}
@media (min-width: 1216px) {
    max-width: 1152px
}
@media (min-width: 1408px) {
    max-width: 1244px
}

${props => props.fluid &&
		css`
        padding: 0;
        margin: 0;
        max-width: 100%;
    `}
`


export const Flex = styled.div`
position: relative;
display: flex;
align-items: center;

${props => props.spaceBetween &&
		css`
    justify-content: space-between;
`}

${props => props.alignTop &&
		css`
    align-items: flex-start;
`}

${props => props.flexEnd &&
		css`
    justify-content: flex-end;
`}

${props => props.noHeight &&
		css`
    height:0;
		margin-top: 4em;
		align-items: center;
`}
`
export const HeaderNav = styled(motion.div)`
    height: 0px;
    width: 100%;
    position: absolute;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 99;
`

export const Logo = styled.div`
    a {
        font-size: 1.8rem;
        font-weight: 800;
        color: ${tw`text-indigo-400`};
    }
    span {
        height: 1rem;
        width: 1rem;
        background: ${tw`bg-gray-500`};
        margin: 0 4px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        bottom: 2px;

    }
`

export const Menu = styled.div`
    button {
        transform-origin: center;
        border: none;
        padding: 20px;
        background: none;
        outline: none;
        span {
          width: 32px;
            height: 5px;
            display: block;
            background: #00f;
            margin: 8px;
        }
		}
		${({isMobileNavOpen}) => isMobileNavOpen &&
		css`
			display: none;
		`}
`

// NAV STYLES

export const Nav = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    display: block;
    color: #000;
		z-index: 100;
		/* opacity: 0.98; */
    overflow:hidden;
`

export const NavHeader = styled.div`
/* div {

	margin-top: 4em;
	position: relative;
} */
    h2 {
			/* padding-bottom: 2em; */
        /* color: #000; */
    }
`
export const CloseNav = styled.div`
/* z-index: 90; */
    button {
        transform-origin: center;
        border: none;
        padding: 20px;
        background: transparent;
				outline: none;
				svg {
					g {
						color: #23272a;
					}
				}
        /* span {
            width: 32px;
            height: 5px;
            display: block;
            background: #fff;
            margin: 8px;
        } */
    }
`
export const NavList = styled.div`
/* position: relative; */
margin-top: 6em;
    /* width: 100%;
    height:100%; */
    display: flex;
    align-items: center;
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            font-size: 1.7rem;
            text-transform: capitalize;
            font-weight: 800;
            height: 60px;
            line-height: 50px;
            overflow: hidden;
            .link {
                /* color: ${tw`text-indigo-400`}; */
                position: relative;
                display: flex;
                align-items: center;
                .arrow {
                    height: 40px;
                    margin-right:10px;
                    svg {
                        width: 70px;
                        path {
                            fill: #fff;
                        }
                    }
                }
            }
        }
    }
`
export const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 56px 0;
    p {
        color: ${tw`text-indigo-400`};
    }
    svg path {
        fill: #fff;
    }

`

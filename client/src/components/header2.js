import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavItems from "./navitems"
import "twin.macro"
import Headroom from "react-headroom"
const Header = ({ siteTitle }) => (
  <Headroom tw='mb-8 fixed w-full z-30 top-0 bg-indigo-200'>
    <header
      // style={{
      //   paddingTop: `1.45em`,
      //   background: `rebeccapurple`,
      //   marginBottom: `1.45rem`,
      // }}
      tw="w-full container mx-auto flex flex-wrap items-center bg-indigo-100 justify-between mt-0 py-2"
    >
      <div
      tw='bg-indigo-100'
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
        }}
      >
        <h2 tw="text-center" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        {NavItems && (
          <ul
          tw='hidden text-center sm:flex '
            style={{
              
              listStyle: "none",
            }}
          >
            {NavItems.map(item => (
              <li
                style={{
                  display: "inline-block",
                  fontSize: '0.8rem'
                }}
              >
                <Link
                  activeClassName="active"
                  style={{
                    display: "block",
                    padding: "1rem",
                    color: "white",
                  }}
                  to={item.url}
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

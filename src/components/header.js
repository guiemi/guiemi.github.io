import PropTypes from "prop-types"
import React from "react"

import * as S from "./header.styles"
const Header = () => (
  <S.SiteHeader>
    <S.Content>
      <p>
        <S.HomeLink to="/" activeClassName="active">
          Home
        </S.HomeLink>
        <S.NavLink to="/blog">
          Blog
        </S.NavLink>
        <S.NavLink to="/projects" activeClassName="active">
          Projects
        </S.NavLink>
        <S.NavLink to="/about" activeClassName="active">
          About
        </S.NavLink>
      </p>
    </S.Content>
  </S.SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

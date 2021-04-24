import { Link } from "gatsby"
import styled from "@emotion/styled"

export const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
  border: orange solid 1px;
`

export const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  border: green solid 1px;
  display: flex;
  flex-wrap: wrap;
`

export const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  border: blue 1px solid;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    color: #6c757d;
    /* text-decoration: underline; */
  }
`
export const HomeLink = styled(NavLink)`
  margin-left: 0;

  &.active {
    color: #6c757d;
    /* text-decoration: underline; */
  }
`



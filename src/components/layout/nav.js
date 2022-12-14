import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../context/context"
import {
  NavbarHeader,
  NavbarContent,
  LinksContainer,
  LogoContainer,
  ResumeLink,
} from "@styles"
import { Link } from "gatsby"
import img from "../../images/darvy-icon.png"

const Nav = () => {
  const Logo = (
    <LogoContainer>
      <Link to="/">
        <img src={img} alt="portfolio icon" />
      </Link>
    </LogoContainer>
  )

  const Links = (
    <LinksContainer>
      <ol>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ol>
    </LinksContainer>
  )

  const Resume = (
    <ResumeLink href='./resume.pdf' target="_blank" rel="noopener noreferrer">
      Resume &gt;
    </ResumeLink>
  )

  return (
    <NavbarHeader>
      <NavbarContent>
        {Logo}
        <span>
          {Links}
          {Resume}
        </span>
      </NavbarContent>
    </NavbarHeader>
  )
}

export default Nav

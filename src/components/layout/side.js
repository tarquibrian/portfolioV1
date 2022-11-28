import React from "react"
import { SideStyle } from "@styles"
import { IconLinkedIn, IconGitHub, IconInstagram } from "@components"

const Side = () => {
  const Social = (
    <ol>
      <li>
        <a href="https://github.com/tarquibrian" target="_blank" rel="noreferrer">
          <IconGitHub />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noreferrer">
          <IconInstagram/>
        </a>
      </li>
      <li >
        <a href="/" target="_blank" rel="noreferrer">
          <IconLinkedIn/>
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noreferrer">
          <IconGitHub />
        </a>
      </li>
    </ol>
  )

  return (
    <SideStyle>
      <div className="rectangle"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      {Social}
    </SideStyle>
  )
}

export default Side

import React from "react"
import { EmailStyle } from "@styles"

const Email = () => {
  const EmailName = <a>tarquibrian@gmail.com</a>

  return (
    <EmailStyle>
      <div className="rectangle"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      <span>{EmailName}</span>
    </EmailStyle>
  )
}

export default Email

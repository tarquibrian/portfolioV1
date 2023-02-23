import React, { useEffect, useState } from "react"
import {
  Head,
  Nav,
  Footer,
  Loader,
  Side,
  Email,
  BackgroundSVG,
  BGPicture,
} from "@components"
import { Context, ContextProvider } from "../../context/context"
import { GlobalStyle, BodyStyle } from "@styles"

const Layout = ({ location, children }) => {
  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)
  console.log({ isLoading })

  useEffect(() => {
    if (isLoading) {
      return
    }
  })

  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Head />

        {!isLoading && isHome ? (
          <Loader />
        ) : (
          <BodyStyle>
            <Nav />
            <Side />
            {/* <Email /> */}
            {children}
            {/* <BackgroundSVG /> */}
            <Footer />
            <BGPicture />
          </BodyStyle>
        )}
      </ContextProvider>
    </>
  )
}

export default Layout

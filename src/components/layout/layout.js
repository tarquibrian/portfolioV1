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

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

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
            {/* <Side /> */}
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

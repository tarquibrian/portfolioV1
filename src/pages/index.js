import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { About, Layout, Experience, Projects } from "@components"
import { Hero } from "@components"

const HomePageContect = styled.main``

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <HomePageContect>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </HomePageContect>
    </Layout>
  )
}

export default Index

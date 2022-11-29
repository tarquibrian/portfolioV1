import React, { useState } from "react"
import styled from "styled-components"
import { About, Nav, Layout, Experience, Projects } from "@components"
import { Hero } from "@components"
import img from "../images/layer-min.png"

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

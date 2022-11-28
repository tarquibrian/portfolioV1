import { createGlobalStyle } from "styled-components"
import Fonts from "./fonts"
import Variables from "./variables"
import img from "../images/layer-min.png"

const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none; 
    text-decoration: none;
    /* transition: .1s ease; */
  }

  body {
    font-family: var(--font-primary);
    line-height: 1.2;
    /* background: var(--bg-primary-B1); */
    /* background: url(${img}) repeat; */
/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23d3a8a5' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
  }

  section {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    padding: 100px 0;
    /* width: 95%; */
    /* background: #f8f8; */
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
  }
  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }
`
export default GlobalStyle

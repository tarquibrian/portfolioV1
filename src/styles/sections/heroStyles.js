import styled from "styled-components"
import imgbg from "../../images/bg-primary1.png"
export const HeroStyled = styled.section`
  height: 100vh;
  width: 100%;
  color: #e5e5e5;
  svg {
    overflow: hidden;
    fill: #ff101f;
    width: 1200px;
    height: 600px;
    /* width: 100%; */
    /* height: 100%; */
    position: absolute;
    bottom: 0;
    /* left: 0; */
    right: 0;
    /* top: 0; */
    /* margin: 0 auto 0 0; */
    transform: translate(50%, 0%);
  }
`

export const HeroContainer = styled.div`
  /* margin: 0 auto; */
  /* background: blue; */
  /* width: 95%; */
  /* min-height: 100vh; */
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CardHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 920px;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  /* background: rgba(255, 255, 255, 0.05)
    linear-gradient(to top right, rgba(255, 235, 0, 0.15)); */
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* border: 1px solid rgba(255, 255, 255, 0.4); */
  z-index: 9;

  h1 {
    font-size: 20px;
    font-weight: 400;
  }

  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;
    margin-left: -4px;
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 200;
    margin-bottom: 20px;
    /* color: #dfdfdf; */
    margin-left: -4px;
    color: transparent;
    text-shadow: 0 0 5px rgba(255 255 255 / 1);
    -webkit-text-stroke: 1px white;
  }

  P {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.5;
  }

  &:hover {
    /* background: -webkit-linear-gradient(
      bottom left,
      rgba(255, 255, 255, 0),
      rgba(255, 235, 0, 2)
    );
    background: -moz-linear-gradient(
      bottom left,
      rgba(255, 255, 255, 0),
      rgba(255, 235, 0, 2)
    ); */
    background: rgba(255, 255, 255, 0.05)
      linear-gradient(
        to top right,
        rgba(255, 255, 255, 0),
        rgba(255, 235, 0, 0.15)
      );
  }
`

import styled from "styled-components"

export const AboutStyled = styled.section`
  /* background: rgba(0 0 0 / 0.2); */
  color: white;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
  justify-content: center;
  /* align-items: center; */
`

export const AboutCard = styled.div`
  background: rgba(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: 4px;
  font-family: "Calibre", sans-serif;
  font-weight: normal;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;
    margin: 0 0 15px -4px;
    display: grid;
    grid-template-columns: max-content auto;
    gap: 0.2rem;
    &::after {
      content: "";
      display: block;
      align-self: end;
      margin-bottom: 12px;
      width: auto;
      height: 3px;
      background: #eae2b7;
    }
  }

  P {
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05)
      linear-gradient(
        to top right,
        rgba(255, 255, 255, 0),
        rgba(255, 235, 0, 0.15)
      );
  }
`

export const ImgProfile = styled.div`
  width: 300px;
  height: 300px;
  background: #eae2b7;
  border-radius: 4px;
  /* overflow: hidden; */
  position: relative;
  z-index: 9;
  /* background: rgba(100, 0, 255, 0.6); */
  /* filter: brightness(50%); */
  /* mix-blend-mode: multiply; */
  img {
    display: block;
    width: 300px;
    height: auto;
    object-fit: cover;
    /* background: rgba(0 0 0 / 0.5); */
    /* opacity: 0.5; */
    /* filter: drop-shadow(10 0 0 blue);op */

    z-index: 99;
  }
  &:hover {
    img {
      opacity: 1;
    }
    &::after {
      background-color: #eae2b7;
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 300px;
    height: 300px;
    border: 1px solid white;
    border-radius: 4px;
    transform: translate(15px, 15px);
    z-index: -9;
  }
`

import styled from "styled-components"

export const ProjectsStyled = styled.section`
  min-height: 500px;
  display: grid;
  place-content: center;
  /* background: rgba(0 0 0 /0.2); */
  .headerTitle {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 3rem -4px;
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
`

export const ProjectsContainer = styled.div`
  min-width: 500px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
`
export const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  .label {
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    padding: 1.5rem;
    /* text-align: justify; */
    /* background: #da2c38; */
    background: rgba(234, 226, 176, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    border-radius: 4px;
    /* -webkit-backdrop-filter: blur(10px); */
    margin-bottom: 1rem;
    /* backdrop-filter: blur(10px); */
    &:hover {
      background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        );
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    margin-bottom: 0.5rem;

    li {
      a {
        text-align: center;
        width: 100%;
        padding: 6px 0;
        &:hover {
          /* color: rgb(30, 30, 30); */
        }
        svg {
          height: 24px;
          width: 24px;
        }
        .feather-external-link {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
`

export const ProjectImg = styled.div`
  position: relative;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  z-index: -1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 4px;
    position: relative;
    /* mix-blend-mode: multiply; */
    /* filter: grayscale(100%) contrast(1); */
    object-fit: cover;
  }
`

import styled from "styled-components"

export const EmailStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 60px;
  background: grey;
  span {
    a {
      writing-mode: vertical-rl;
    }
  }
  .rectangle {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: var(--fg-primary-F3);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 30%);
    overflow: hidden;
    z-index: 99;
    /* border: 1px solid white; */
  }

  .rectangle2 {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #2b2c28;
    clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 35%);
    overflow: hidden;
    z-index: 9;
    /* border: 1px solid white; */
  }

  .rectangle3 {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: white;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 40%);
    overflow: hidden;
    z-index: 8;
    /* border: 1px solid white; */
  }
`

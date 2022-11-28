import styled from "styled-components"

export const SideStyle = styled.div`
  min-width: 60px;
  /* width: 3%; */
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  display: grid;
  align-items: end;
  overflow: hidden;

  .rectangle {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: var(--fg-primary-F3);
    clip-path: polygon(0 50%, 100% 70%, 100% 100%, 0% 100%);
    overflow: hidden;
    z-index: 9;
    /* border: 1px solid white; */
  }

  .rectangle2 {
    position: absolute;
    width: 100%;
    height: 100vh;
    /* background: rgb(30,30,30); */
    background: white;
    /* background: #2b2c28; */
    clip-path: polygon(0 20%, 100% 60%, 100% 70%, 0% 50%);
    /* z-index: 999; */
    /* overflow: hidden; */
  }

  .rectangle3 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2b2c28;
    /* background: white; */
    clip-path: polygon(0 35%, 100% 65%, 100% 75%, 0% 50%);
    /* overflow: hidden; */
    /* z-index:99; */
  }

  ol {
    z-index: 999;
    width: 100%;
    /* padding: 0 15px; */
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */

    li {
      /* background-color: blue; */
      width: 100%;
      a {
        text-align: center;
        width: 100%;
        /* color: rgb(30, 30, 30); */
        color: white;
        padding: 6px 0;
        &:hover {
          /* color: var(--white); */
          color: rgb(30, 30, 30);
          transform: translateX(5px);
        }
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
    /* &::before {
      content: "";
      display: block;
      width: 1px;
      height: 159px;
      margin: 0 auto;
      background-color: #2b2c28;
      background-color: white;
    } */
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 110px;
      margin: 0 auto;
      background-color: white;
    }
  }
`

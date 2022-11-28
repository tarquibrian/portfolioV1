import React from "react"
import styled from "styled-components"
import img from "../../images/layer-min.png"

const ImgContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  /* background: url(${img}); */
  z-index: -9;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BGPicture = () => {
  return (
    <ImgContainer>
      <img src={img} />
    </ImgContainer>
  )
}

export default BGPicture

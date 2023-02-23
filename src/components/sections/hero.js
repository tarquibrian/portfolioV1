import React, { useEffect } from "react"
import { HeroStyled, CardHero, HeroContainer } from "@styles"
import { BackgroundSVG } from "@components"
import img from "../../images/bg-primary.png"

const Hero = () => {
  const afterTitle = <h1>Me presento, mi nombre es</h1>

  const Title = <h2>Brian Tarqui Rojas.</h2>

  const SubTitle = <h3>Construyo cosas para la web.</h3>

  const Description = (
    <p>
      Soy un ingeniero de sistemas que se enfoca en crear y diseñar aplicaciones
      web modernas para la web, priorizando siempre en entregar experiencias
      digitales excepcionales. <br /> En la actulidad me encuentro en la ruta de
      aprendizaje para ser desarrollador Senior FullStack cualificado, capaz de
      resolver grandes problemáticas y brindar soluciones de nivel (el camino es
      largo, pero con esfuerzo y disciplina se que me divertire durante el
      proceso).
    </p>
  )

  return (
    <>
      <HeroStyled>
        <HeroContainer>
          <CardHero>
            {afterTitle}
            {Title}
            {SubTitle}
            {Description}
          </CardHero>
        </HeroContainer>
      </HeroStyled>
    </>
  )
}

export default Hero

import React from "react"
import { AboutStyled, AboutCard, ImgProfile } from "@styles"
import img from "../../images/profile.jpg"

const title = <h1>.About-Me</h1>

const description = (
  <>
    <p>
      Mi nombre es Brian pero usualmente me llaman por mi apellido (Tarqui), soy
      una persona que tiene mucha pasión por el mundo de la tecnología y
      recientemente obtuve mi título en Ingeniería de Sistemas.
    </p>
    <p>
      Durante los últimos años de mi carrera estuve formándome con más
      profundidad de forma autodidacta en el desarrollo web y ahora busco mi
      primera oportunidad laboral. Soy responsable, curioso y detallista, además
      de ser capaz de desenvolverme trabajando en equipo, bajo presión y por
      objetivos.
    </p>
    <p>
      En un futuro sueño con ser un gran desarrollador Senior capáz de resolver
      grandes problemáticas y estar altamente cualificado para brindar
      soluciones de nivel.
    </p>
  </>
)

const About = () => {
  return (
    <AboutStyled>
      <AboutCard>
        {title}
        {description}
      </AboutCard>
      <ImgProfile>
        <div>
          <img src={img} />
        </div>
      </ImgProfile>
    </AboutStyled>
  )
}

export default About

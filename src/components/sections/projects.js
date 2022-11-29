import React from "react"
import {
  ProjectsStyled,
  ProjectsContainer,
  ProjectContent,
  ProjectImg,
} from "@styles"

import { IconInstagram, IconExternal } from "@components"

import imgProject from "../../images/project-img1.png"

const title = <h1 className="headerTitle">Projects</h1>

const Projects = () => {
  return (
    <ProjectsStyled>
      {title}
      <ProjectsContainer>
        <ProjectContent>
          <div className="label">Extensions Project</div>
          <h2>Darvy Theme</h2>
          <p>
            Darvy Theme es un tema de color para Visual Estudio Code y muy
            pronto para otros editores como Atom o Sublime Text. La paleta de
            colores esta inspirado en temas populares como One Dark Pro y Tokyo
            Night, por lo que puede que éste tema vaya a encantarte.
          </p>
          <ul>
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=darvy.darvypro"
                target="_blank"
                rel="noreferrer"
              >
                <IconExternal />
              </a>
            </li>
            {/* <li>
              <a href="/" target="_blank" rel="noreferrer">
                <IconInstagram />
              </a>
            </li> */}
          </ul>
        </ProjectContent>
        <ProjectImg>
          <img src={imgProject} alt="thumbnail of the project" />
        </ProjectImg>
      </ProjectsContainer>
    </ProjectsStyled>
  )
}

export default Projects

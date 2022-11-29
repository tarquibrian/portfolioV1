import React, { useState } from "react"
import {
  ExperienceStyled,
  ExperienceCard,
  CardContent,
  ContentList,
  ContentBody,
  TabList,
} from "@styles"
import { path } from "animejs"

const data = [
  {
    id: 0,
    title: {
      name: "Villa Rivero",
      year: "2022",
    },
    body: {
      header: "Desarrollo de una Aplicación Web de Turismo",
      type: "FullStack Proyect",
      path: "https://www.municipio.com.bo/municipio-villa-rivero.html",
      description:
        "Desarrollo de una aplicación web enfocada hacia la gestión del turismo regional, describiendo detalles como:",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
  {
    id: 1,
    title: {
      name: "Coming soon..",
      year: "2023",
    },
    body: {
      header: "header",
      description: "description2",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
  {
    id: 2,
    title: {
      name: "Coming soon..",
      year: "2024",
    },
    body: {
      header: "header",
      description: "description3",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
]

const title = <h1 className="headerTitle">.Experience</h1>

const Experience = () => {
  const [activeId, setActiveId] = useState(0)
  return (
    <ExperienceStyled>
      <ExperienceCard>
        {title}
        <CardContent>
          <ContentList>
            {data.map((item, i) => {
              const { id, title } = item
              const { name, year } = title
              return (
                <TabList
                  onClick={() => setActiveId(id)}
                  isActive={activeId === i}
                >
                  <h2>{year}</h2>
                  <h3> {name}</h3>
                </TabList>
              )
            })}
          </ContentList>
          <ContentBody>
            {data.map(({ id, body, title }, i) => {
              const { header, description, features, path, type } = body
              const { name } = title
              if (id === activeId) {
                return (
                  <>
                    <span className="type">
                      {/* {type} */}
                      {/* <span className="vertical-line">&#124;</span> */}
                      <span className="entity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-at"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                        <a href={path} target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      </span>
                    </span>
                    <h1>{header}</h1>

                    <p>{description}</p>

                    <ul>
                      {features.map(feature => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </>
                )
              }
            })}
          </ContentBody>
        </CardContent>
      </ExperienceCard>
    </ExperienceStyled>
  )
}

export default Experience

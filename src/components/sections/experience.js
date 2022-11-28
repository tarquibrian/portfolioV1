import React, { useState } from "react"
import {
  ExperienceStyled,
  ExperienceCard,
  CardContent,
  ContentList,
  ContentBody,
  TabList,
} from "@styles"

const data = [
  {
    id: 0,
    title: "name1",
    description: "description1",
  },
  {
    id: 1,
    title: "name1",
    description: "description2",
  },
  {
    id: 2,
    title: "name1",
    description: "description3",
  },
  {
    id: 3,
    title: "name1",
    description: "description4",
  },
]

const title = <h1>.Experience</h1>

const Experience = () => {
  const [activeId, setActiveId] = useState(0)
  return (
    <ExperienceStyled>
      <ExperienceCard>
        {title}
        <CardContent>
          <ContentList>
            {data.map((item, i) => {
              return (
                <TabList
                  onClick={() => setActiveId(item.id)}
                  isActive={activeId === i}
                >
                  <h4>{item.title}</h4>
                  <h5> {item.title}</h5>
                </TabList>
              )
            })}
          </ContentList>
          <ContentBody>
            {data.map(item => {
              if (item.id === activeId) {
                return (
                  <>
                    <h1>{item.description}</h1>
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

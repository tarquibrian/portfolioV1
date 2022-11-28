import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import image from '../../images/log.png'

const Head = () => {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `
  ) 

  const {defaultTitle, defaultDescription, siteUrl} = site.siteMetadata;
  console.log(defaultTitle)
  return (
    <Helmet title={defaultTitle} defaultTitle={defaultTitle} htmlAttributes={{lang: 'en'}} >
      <meta charSet='utf-8'/>
      <meta name='description' content={defaultDescription} />
      <meta name='image' content={image}/>

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

    </Helmet>
  )
}

export default Head
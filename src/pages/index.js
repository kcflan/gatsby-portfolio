import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allProjectsJson.edges.map(({ node: project }) => (
      <ProjectPreview
        key={`preview-${project.slug}`}
        title={project.title}
        description={project.description}
        slug={project.slug}
        imageData={project.image.childImageSharp.fluid}
      />
    ))}
    
  </Layout>
)

export default IndexPage

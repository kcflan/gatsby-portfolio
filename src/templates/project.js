import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      giturl
      deployurl
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data: { projectsJson: project } }) => (
  <Layout>
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      tags={project.tags}
      giturl={project.giturl}
      deployurl={project.deployurl}
    />
  </Layout>
)

export default ProjectTemplate

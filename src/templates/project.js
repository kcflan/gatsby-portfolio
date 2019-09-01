import React from 'react';
import { graphql } from 'gatsby';
import ProjectLayout from '../components/projectlayout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      details
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
`;

const ProjectTemplate = ({ data: { projectsJson: project } }) => (
  <ProjectLayout>
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      details={project.details}
      tags={project.tags}
      giturl={project.giturl}
      deployurl={project.deployurl}
    />
  </ProjectLayout>
);

export default ProjectTemplate;

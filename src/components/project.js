import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
const backStyle = {
  color: 'white',
  textDecoration: `none`,
  minWidth: `100px`,
  padding: '0.5rem',
  borderRadius: 6,
  backgroundColor: '#46b2fe'
};
const viewStyle = {
  color: 'white',
  textDecoration: `none`,
  minWidth: `100px`,
  marginRight: '1rem',
  padding: '0.5rem',
  marginLeft: 0,
  borderRadius: 6,
  backgroundColor: '#296792'
};

const Project = ({
  title,
  description,
  details,
  giturl,
  deployurl,
  imageData,
  tags
}) => (
  <div className="project">
    <Card>
      <CardContent>
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title} />
        <p>{description}</p>
        <p>{details}</p>
        <h3>Tags:</h3>
        <ul>
          {tags.map(tag => (
            <li key={`tag-${tag}`}>{tag}</li>
          ))}
        </ul>
        <CardActions>
          <Button size="small" color="primary">
            <a href={giturl} target="_blank" style={viewStyle}>
              View this project on github &rarr;
            </a>
          </Button>

          <Button size="small" color="primary">
            <a href={deployurl} target="_blank" style={viewStyle}>
              View this project online &rarr;
            </a>
          </Button>
        </CardActions>
        <hr />
        <Button size="large" style={{ marginTop: '1rem' }}>
          <Link style={backStyle} to="/">
            &larr; back to all projects
          </Link>
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default Project;

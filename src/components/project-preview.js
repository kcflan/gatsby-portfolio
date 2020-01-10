import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
const viewStyle = {
  color: "white",
  textDecoration: `none`,
  minWidth: `100px`,
  marginRight: "1rem",
  padding: "0.5rem",
  marginLeft: 0,
  borderRadius: 6,
  backgroundColor: "#296792",
};
const ProjectPreview = ({ title, description, slug, imageData }) => (
  <Card>
    <CardContent>
      <div
        className='project-preview'
        style={{
          flexFlow: "row nowrap",
          // padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          // justifyContent: "center",
          alignContent: "center",
          // overflow: "auto",
          margin: ".5em auto",
        }}
      >
        <Grid item xs={5}>
          <Card
            style={{
              minWidth: "250px",
            }}
          >
            <CardContent>
              <CardActionArea>
                <Link to={`/${slug}/`}>
                  <Image
                    fluid={imageData}
                    alt={title}
                    style={{
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Link>
              </CardActionArea>
              <h2>
                <Link to={`/${slug}/`}>{title}</Link>
              </h2>
              <p>{description}</p>
            </CardContent>
            <CardActions>
              <Link to={`/${slug}/`} style={{ textDecoration: `none` }}>
                <Button size='small' color='primary' style={viewStyle}>
                  View this project &rarr;
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </CardContent>
  </Card>
);

export default ProjectPreview;

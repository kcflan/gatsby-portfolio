/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Header from './header';

import './layout.css';

const ProjectLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    }
  }));

  const section1 = React.createRef();
  const section2 = React.createRef();
  const classes = useStyles();

  const scrollToContent = content => {
    switch (content) {
      case 'section1':
        section1.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });

        break;
    }
  };

  return (
    <>
      <div>
        <Header
          siteTitle={data.site.siteMetadata.title}
          scrollToContent={scrollToContent}
        />
      </div>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div
              style={{
                margin: `50px auto 0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0
              }}
            >
              <main>{children}</main>
            </div>
          </Grid>
          <Grid item xs={12}>
            <footer>
              © {new Date().getFullYear()}, kflan.io
              <div>
                <a href="mailto:kevin@kflan.io">Contact Me</a>
              </div>
            </footer>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProjectLayout;

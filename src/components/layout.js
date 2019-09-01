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
import { useScrollTrigger, Slide, Grid, Typography } from '@material-ui/core/';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Header from './header';
import Skills from './skills';
// import Hero from './hero';
import ParallaxFrame from './parallax';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
    },
    card: {
      marginTop: '1rem'
    },
    h4: {
      color: '#296792',
      marginBottom: theme.spacing(4),
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(1)
      }
    }
  }));
  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  const section1 = React.createRef();
  const section2 = React.createRef();
  const section3 = React.createRef();
  const section4 = React.createRef();

  const classes = useStyles();

  const scrollToContent = content => {
    switch (content) {
      case 'section1':
        section1.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });

        break;
      case 'section2':
        section2.current.scrollIntoView({ behavior: 'smooth' });
      case 'section3':
        section3.current.scrollIntoView({ behavior: 'smooth' });
      case 'section4':
        section4.current.scrollIntoView({ behavior: 'smooth' });
      default:
        section1.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div ref={section1}></div>

      <HideOnScroll>
        <div>
          <Header
            siteTitle={data.site.siteMetadata.title}
            scrollToContent={scrollToContent}
          />
        </div>
      </HideOnScroll>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <ParallaxFrame />
          </Grid>

          {/* <Grid item xs={12}>
            <Hero ref={section2} />
          </Grid> */}
          <Grid item xs={12}>
            <Skills ref={section2} />
          </Grid>
          <div ref={section3}></div>
          <Grid item xs={12}>
            <div
              ref={section3}
              style={{
                margin: `50px auto 0 auto`,
                // maxWidth: 800,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0
              }}
            >
              <Typography
                color="inherit"
                align="center"
                variant="h4"
                className={classes.h4}
              >
                Projects...
              </Typography>

              <div>{children}</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <footer>
              © {new Date().getFullYear()}, kflan.io
              <div ref={section4}>
                <a href="mailto:kevin@kflan.io">Contact Me</a>
              </div>
            </footer>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

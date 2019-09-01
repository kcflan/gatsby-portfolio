import { Link } from 'gatsby';
import React from 'react';
import logo from '../../data/images/octo.svg';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles, fade } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  CssBaseline
} from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  navbar: {
    // backgroundColor: '#46b2fe'
    // backgroundColor: '#296792'
    // marginTop: '200px'
  },
  appbar: {
    backgroundColor: '#296792'
    // marginTop: '200px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: `none`
  },
  link: {
    textDecoration: `none`
  },
  btnLink: {
    color: 'white',
    textDecoration: `none`,
    minWidth: `100px`,
    marginRight: theme.spacing(1),
    marginLeft: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65)
    }
  },
  logo: {
    maxWidth: '40px',

    // height: '10%',
    pointerEvents: 'none'
  },
  title: {
    fontSize: '2em',
    color: 'white',
    // textShadow: '-2px 1px #46b2fe',
    textDecoration: `none`,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '1.75em'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '2.25em'
    // }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export default function Header({ siteTitle, scrollToContent }, ...props) {
  // export default function Header(props) {
  //   const { siteTitle } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(anchorEl);

  function handleMobileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setAnchorEl(null);
  }

  const mobileMenuId = 'menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div>
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton aria-label="new recipe search" color="inherit">
            <AccountCircle />
          </IconButton>
          {/* <Link to={'/search/'} className="btn btn-link text-primary"> */}
          <span className="text-primary">View Resume</span>
          {/* </Link> */}
        </MenuItem>

        <MenuItem onClick={handleMobileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <span className="btn btn-link text-primary">Contact Me</span>
        </MenuItem>
      </div>
    </Menu>
  );
  let locationIsHome =
    typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <div className={(classes.grow, classes.navbar)}>
      <CssBaseline />

      {/* <AppBar position="static" className={classes.appbar}> */}
      <AppBar position="fixed" className={classes.appbar}>
        {/* <AppBar position="absolute" className={classes.appbar}> */}
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
            <img src={logo} className={classes.logo} alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            {siteTitle}
          </Typography>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {/* <Link to={'#top'} className={classes.link}> */}
            {locationIsHome ? (
              <>
                <Button
                  className={classes.btnLink}
                  onClick={() => scrollToContent('section1')}
                >
                  <span className="text-second">Top</span>
                </Button>

                <Button
                  className={classes.btnLink}
                  onClick={() => scrollToContent('section2')}
                >
                  <span className="text-second">Skills</span>
                </Button>
                <Button
                  className={classes.btnLink}
                  onClick={() => scrollToContent('section3')}
                >
                  <span className="text-second">Projects</span>
                </Button>
                <Button
                  className={classes.btnLink}
                  onClick={() => scrollToContent('section4')}
                >
                  <span className="text-second">Contact</span>
                </Button>
              </>
            ) : (
              <>
                <Link to={'/'} className={classes.link}>
                  <Button className={classes.btnLink}>
                    <span className="text-second">Back</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

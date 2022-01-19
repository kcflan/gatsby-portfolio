import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import backgroundImage from '../../data/images/octo-bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    background: `url(${backgroundImage})`,
    backgroundColor: '#000000',
    backgroundAttachment: 'fixed', // Average color of the background image.
    backgroundPosition: 'right',
    backgroundRepeat: `no-repeat`,
    minHeight: '600px'
  },

  h5: {
    color: 'white',
    // marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10)
    }
  },
  logo: {
    // height: 120,
    margin: '0 auto',
    display: 'block',
    transformOrigin: '25% 100% 0',
    transform: `translate3d(80px,0,0) scale3d(1, 1, 1)`,
    opacity: 1
  },
  title: {
    opacity: 0
  },
  logoWrap: {
    overflow: 'hidden'
  }
}));

const Hero = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} ref={ref}>
        <div style={{ backgroundColor: 'blue' }}>
          {/* <div> */}
          {/* Increase the network loading priority of the background image. */}
          <img style={{ display: 'none' }} src={backgroundImage} alt="" />

          <Typography
            color="inherit"
            align="left"
            variant="h5"
            className={classes.h5}
          >
            Welcome to my Portfolio Site...
          </Typography>
        </div>
      </div>
    </>
  );
});

export default Hero;

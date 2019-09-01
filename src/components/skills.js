import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  background: {
    marginTop: '600px',
    marginBottom: '50px'
  },

  h4: {
    color: '#296792',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1)
    }
  },
  p: {
    color: '#181A2B',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1)
    }
  },
  card: {
    marginTop: '1rem'
  }
}));

const Skills = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.background} ref={ref}>
          {/* <div style={{ border: '1px solid green', padding: '0 6rem' }}> */}
          <div style={{ padding: '0 6rem' }}>
            <Typography
              color="inherit"
              align="center"
              variant="h4"
              className={classes.h4}
            >
              About Me...
            </Typography>
            <div>
              <Typography
                color="inherit"
                align="left"
                variant="h6"
                className={classes.p}
              >
                <p>
                  Hi, I'm Kevin; I am a full-stack web developer with a vast
                  array of knowledge in many front and back end languages,
                  responsive frameworks, databases, and best code practices. My
                  primary focus is JavaScript and the React Library for building
                  user interfaces, web applications, and components.
                </p>
                <p>&nbsp;</p>
                <p>
                  I use the MVC software architecture design pattern, and I have
                  a passion for problem solving. I love to learn new
                  technologies and build the best product possible. I'm a recent
                  graduate from the University of Arizona Coding Bootcamp, where
                  I worked on several team projects to build real world
                  applications.
                </p>
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default Skills;

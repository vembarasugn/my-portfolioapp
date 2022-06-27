
import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";
import profilepic from "./images/profilepic.JPG";
import Particle from "./Particle";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width:theme.spacing(40),
    height:theme.spacing(40),
    marginTop:theme.spacing(25),
    marginBottom:theme.spacing(10),
    borderRadius:theme.spacing(2)
  },
  title: {
    color: "rgb(1, 1, 22)",
    opacity:"0.7"  
  },
  subtitle: {
    color: "rgb(1, 1, 22)",
    marginTop:12,
    opacity:"0.7"
  },
  typedContainer: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    textAlign: "center",
    marginTop:300,
    marginBottom:-220
  },
}));

function Home(){

  const classes = useStyles();

  return (
    <section className={classes.typedContainer}>
    <Box  sx={{ maxWidth: 360 }}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={profilepic} alt="Vembarasan N"/>
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Hello , I am Vembarasan Nagarajan"]} typeSpeed={80} />
      </Typography>
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "Automation Test Engineer",
            "Full Stack MERN Developer",
            "Data Sciences",
            "I am glad you are glancing my portfolio!"
          ]}
          typeSpeed={80}
          backSpeed={80} 
        />
      </Typography> 
      <Particle/>
    </Box>
    </section>
  );
};

export default Home;


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
    width:theme.spacing(35),
    height:theme.spacing(35),
    marginTop:theme.spacing(25),
    marginBottom:theme.spacing(7),
    borderRadius:theme.spacing(2)
  },
  title: {
    color: "rgb(1, 1, 22)", 
  },
  subtitle: {
    color: "rgb(1, 1, 22)",
    marginTop:12
  },
  typedContainer: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    textAlign: "center",
    marginTop:255,
    marginBottom:-180
  },
  gridContainer:{
     margin:35
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
      <Grid className={classes.gridContainer}>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hello , I am Vembarasan Nagarajan"]} typeSpeed={80} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
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
      </Grid>
      <Particle/>
    </Box>
    </section>
  );
};

export default Home;



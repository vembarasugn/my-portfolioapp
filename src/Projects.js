
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';

const styleGrid = {
  paddingBottom: "10px",
  width: "100%"
};

const propStyleGrid = {
  container: true,
  spacing:2,
  style: styleGrid
};

function Projects(){
  
   const data = {
    Projectdata: [
    { 
       id:"1",
       Projectname:"Helens guided Tours - a complete Tour guide",
       description:"Helens guided tours is one of a genuine tour management organization.A complete tour guide across united kingdom from Helens.",
       Technologies:" HTML5 . CSS3 . Javascript . Bootstrap ",
       github:"https://github.com/vembarasugn",
       livereview:"https://hellenstour.netlify.app",
       imageURL:"https://images.app.goo.gl/txMPwEg43NKcSzxj6",
       image:require("./images/tourism.png")
    },
    { 
      id:"2",
      Projectname:"Geekz Microschool - American School",
      description:"Geekz (K-5) is a full-stack Education Technology company - Network of Microschools small by design, powered by technology.",
      Technologies:" HTML5 . CSS3 . Javascript . Bootstrap ",
      github:"https://github.com/vembarasugn",
      livereview:"https://www.geekz.school/",
      image:require("./images/school.png")  
    },
    { 
      id:"3",
      Projectname:"My Portfolio App - walkthrough of my experience",
      description:"This portfolio app will help you to know in depth about my skillsets that I works and projects have built.A overview of all new technologies that I have used. ",
      Technologies:" HTML5 . CSS3 . ReactJS . NodeJS . Material-UI . TypeScript",
      github:"https://github.com/vembarasugn",
      livereview:"https://vembarasanportfolio.netlify.app",
      image:require("./images/portfolio.png")
    },
    { 
      id:"4",
      Projectname:"Housing Platform App - rent and buy houses",
      description:"Housing platform is a complete guide to do search , rent, buy Houses, aparments and Villas. You can simply search according to your criteria to opt them",
      Technologies:" HTML5 . TailwindCSS . ReactJS . NextJS . Chakra-UI . Rapid API ",
      github:"https://github.com/vembarasugn",
      livereview:"https://www.geekz.school/",
      image:require("./images/house.png")    
    },
    { 
      id:"5",
      Projectname:"Story pages application - a note taking system",
      description:"An application that will be helpful in taking notes and keep them upto date in order.It has categorised into public and private stories as you have your privacy.",
      Technologies:" HTML5 . CSS3 . NodeJS . ExpressJS . PassportJS",
      github:"https://github.com/vembarasugn",
      livereview:"https://vembarasandev.s3.amazonaws.com/index.html",
      image:require("./images/storypages.png")   
    },
    {
      id:"6",
      Projectname:"My Travel Journey Card - simple card design",
      description:"Just a simple project that demonstartes some react JS skill.It gives you an overview of creating google maps with location using google maps API.",
      Technologies:" ReactJS . HTML5 . CSS3 . Javascript . GoogleMaps API", 
      github:"https://github.com/vembarasugn",
      livereview:"https://pensive-pasteur-9caf2a.netlify.app/",
      image:require("./images/travel.png")  
    },
    { 
      id:"7", 
      Projectname:"My Airbnb Clone Card",
      description:"Just a simple project that demonstartes some react JS skill.",
      Technologies:" ReactJS . HTML5 . CSS3 . Javascript ",
      github:"https://github.com/vembarasugn",
      livereview:"https://pensive-pasteur-9caf2a.netlify.app/",
      image:require("./images/Airbnb.png") 
    },
   ]};

    return(
    
    <section> 
     <h1 className="project--header">Projects for your Glance</h1>
     <Grid {...propStyleGrid}>
      { data.Projectdata.map((list) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "flex", justifyContent: "center"}}
            key={list.id}
          > 
         <Card sx={{ maxWidth: 356 }} style={{backgroundColor:"#f3f3f3f1", borderRadius:"16px" , maxHeight:"515px"}} variant="outlined"> 
          <CardActionArea>
          <CardMedia
           component="img"
           height="180"
           image={list.image}
           alt="project img"
          />  
          <CardContent className="Card-text" >
           <Typography gutterBottom variant="h5" component="div">
           {list.Projectname}
           </Typography>
           <br/>
           <Typography gutterBottom variant="body3" >
           {list.description}
           </Typography>
           <br/><br/>
           <Typography gutterBottom variant="body2">
           Technologies used :
           </Typography>
           <Button variant="outlined" style={{justifyContent:"center",color:"#496091"}}>
               {list.Technologies}
            </Button>
         </CardContent>
         <br/>
         <CardActions >
           <Button ><Link  underline="none" target="_blank" href={list.github} rel="noreferrer"> github </Link></Button>
           <Button ><Link  underline="none" target="_blank" href={list.livereview} rel="noreferrer"> livereview </Link></Button>
         </CardActions> 
         </CardActionArea>
      </Card>
      </Grid>
      ))}
      </Grid>
      <h6 className="project-ref"> Note: Some projects have referred from online resources for learning and to built them.*</h6>
    </section>
    )
  }

export default Projects;



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
       Projectname:"Helens guided Tours - a complete Tour guide.",
       description:"Helens guided tours is one of a genuine tour management organization.A complete tour guide across united kingdom from Helens.",
       Technologies:" HTML5 . CSS3 . Javascript . Bootstrap . Netlify",
       github:"https://github.com/vembarasugn",
       livereview:"https://hellenstour.netlify.app",
       imageURL:"https://images.app.goo.gl/txMPwEg43NKcSzxj6",
       image:require("./images/tourism.png")
    },
    { 
      id:"2",
      Projectname:"Geekz Microschool - American School.",
      description:"Geekz (K-5) is a full-stack Education Technology company - Network of Microschools small by design, powered by technology.",
      Technologies:" HTML5 . CSS3 . Javascript . Bootstrap . AWS",
      github:"https://github.com/vembarasugn",
      livereview:"https://www.geekz.school/",
      image:require("./images/school.png")  
    },
    { 
      id:"3",
      Projectname:"My Portfolio App - career walkthrough.",
      description:"This portfolio app will help you to know in depth about my skillsets that I works and projects have built.A overview of all new technologies that I have used. ",
      Technologies:" HTML5 . CSS3 . ReactJS . NodeJS . Material-UI . TypeScript . Netlify",
      github:"https://github.com/vembarasugn/my-portfolioapp",
      livereview:"https://vembarasanportfolio.netlify.app",
      image:require("./images/portfolio.png")
    },
    { 
      id:"4",
      Projectname:"Housing Platform App - rent and buy houses.",
      description:"Housing platform is a complete guide to do search , rent, buy Houses, aparments and Villas.",
      Technologies:" HTML5 . TailwindCSS . ReactJS . NextJS . Chakra-UI . Rapid API . Vercel",
      github:"https://github.com/vembarasugn/my-estateapp",
      livereview:"https://my-estateapps.vercel.app/",
      image:require("./images/house.png")    
    },
    { 
      id:"5",
      Projectname:"Story pages application - a story taking system.",
      description:"An application that will be helpful in taking notes and keep them upto date in order.It has categorised into public and private stories as you have your privacy.",
      Technologies:" HTML5 . CSS3 . NodeJS . ExpressJS . PassportJS . mongoDB . Heroku",
      github:"https://github.com/vembarasugn/Storypagesapp",
      livereview:"https://storypagesapp.herokuapp.com/",
      image:require("./images/storypages.png")   
    },
    {
      id:"6",
      Projectname:"My Travel Journey Card - simple card design.",
      description:"Just a simple project that demonstartes some react JS skill.It gives you an overview of creating google maps with location using google maps API.",
      Technologies:" ReactJS . HTML5 . CSS3 . Javascript . GoogleMaps API . Netlify", 
      github:"https://github.com/vembarasugn",
      livereview:"https://pensive-pasteur-9caf2a.netlify.app/",
      image:require("./images/travel.png")  
    },
    { 
      id:"7", 
      Projectname:"A Simple Web ScraperAPI - scraps web data.",
      description:"This will be helpfull in scraping web and I have used Amazon website to scrap something like products,reviews and searching products.",
      Technologies:" NodeJS . ExpressJS . CSS3. ScraperAPI . Javascript . Heroku",
      github:"https://github.com/vembarasugn/WebscrapingAPIapp",
      livereview:"https://webscrapingapiapp.herokuapp.com/",
      image:require("./images/Scraper.png") 
    },
    { 
      id:"8", 
      Projectname:"Advora React APP- an education company.",
      description:"This will be helpfull in fetching API data from DB and I have used sample API data to map them in a cards and visualising those data.",
      Technologies:" NodeJS . ReactJS . ChartJS2 . MaterialUI . Cloudflarepages",
      github:"https://github.com/vembarasugn/advora-api",
      livereview:"https://advora-api.pages.dev/",
      image:require("./images/Webscraper.png") 
    },
    { 
      id:"9", 
      Projectname:"A React-Chat APP- it takes to chat space.",
      description:"This will be helpfull in integrating chat UI in your application and I have used CometChat custome SDK from their github repos.",
      Technologies:" HTML5 . sass . Javascript . NodeJS . ReactJS . CometChat . Netlify",
      github:"https://github.com/vembarasugn/react-chat-app",
      livereview:"https://jade-stardust-a67b64.netlify.app",
      image:require("./images/chatimage.png") 
    },
    { 
      id:"10", 
      Projectname:"A Fake json server API - data can be use in UI.",
      description:"This will be helpfull in using Fake jsonserver API in your application and I have used these data for one of application API testing.",
      Technologies:" Javascript . NodeJS . Jsonserver . Railway . VScode",
      github:"https://github.com/vembarasugn/jsonserverAPI",
      livereview:"https://jsonserverapi-production.up.railway.app/",
      image:require("./images/json image.png") 
    },
    { 
      id:"11", 
      Projectname:"Autoviz - Automatic Visualization.",
      description:"It will automatically analyse any given datasets and get most important features with in it , using those features it will plot impactful visualization in a single line of code.",
      Technologies:" Python . Jupyter Notebook . Machine Learning Algorithm",
      github:"https://github.com/vembarasugn/Autoviz",
      livereview:"https://github.com/vembarasugn/Autoviz",
      image:require("./images/Auto_viz.png") 
    },
    { 
      id:"12", 
      Projectname:"ML-Credit Card Fraud Detection.",
      description:"I have used Python Scientific Computing Libraries and Machine Learning Algorithm to do Credit Card Fraud Detection Analysis using Jupyter Notebook.",
      Technologies:" Python . Jupyter Notebook .  Isolation Forest Algorithm",
      github:"https://github.com/vembarasugn/creditcardfrauddetection",
      livereview:"https://github.com/vembarasugn/creditcardfrauddetection",
      image:require("./images/credit_card_PNG.png") 
    },
    { 
      id:"13", 
      Projectname:"Machine Learning - Lead Scoring.",
      description:"I have used Python Scientific Computing Libraries and Machine Learning algorithms to develop this lead scoring to train data.",
      Technologies:" Python . Jupyter Notebook .  Machine Learning Algorithm",
      github:"https://github.com/vembarasugn/ML-LeadScoring",
      livereview:"https://github.com/vembarasugn/ML-LeadScoring",
      image:require("./images/lead-scoring.png") 
    },
    { 
      id:"14", 
      Projectname:"Google App Rating - Data Analysis.",
      description:"I have used Python Scientific Computing Library for analysis with Jupyter Notebook.I have used Google Play Store data for a full analysis.",
      Technologies:" Python . Jupyter Notebook . Data Analysis",
      github:"https://github.com/vembarasugn/Googleapprating-dataanalysis",
      livereview:"https://github.com/vembarasugn/Googleapprating-dataanalysis",
      image:require("./images/Google_Play_stars.png") 
    },
    { 
      id:"15", 
      Projectname:"Machine Learning with TensorFlow.",
      description:"I have used Python Scientific Computing Library for analysis with Jupyter Notebook.I have used Images data and to train them with Tensorflow.",
      Technologies:" Python . Jupyter Notebook . Machine Learning Algorithm ",
      github:"https://github.com/vembarasugn/Machinelearningwithtensorflow",
      livereview:"https://github.com/vembarasugn/Machinelearningwithtensorflow",
      image:require("./images/TensorFlow.png") 
    },
    { 
      id:"16", 
      Projectname:"WebScraping using Python Library.",
      description:"I have used Python Scientific Computing Library for analysis with Jupyter Notebook.I have used Beautifulsoup to scrap web data.",
      Technologies:" Python . Jupyter Notebook . Machine Learning Algorithm ",
      github:"https://github.com/vembarasugn/Webscraping-using-python-scientific-computing-libraries.",
      livereview:"https://github.com/vembarasugn/Webscraping-using-python-scientific-computing-libraries.",
      image:require("./images/Web-Scraping.png") 
    },
    { 
      id:"17", 
      Projectname:"Machine Learning - Marketing Attribution Models.",
      description:"This will be picking up datasets randamonly and using them for analysis.If you do code walkthrough , you will get clear idea about that how it works",
      Technologies:" Python . Jupyter Notebook . Machine Learning Algorithm ",
      github:"https://github.com/vembarasugn/Marketing-Attribution-Models---Heuristic-Shapley-Value-Markov-chains.",
      livereview:"https://github.com/vembarasugn/Marketing-Attribution-Models---Heuristic-Shapley-Value-Markov-chains.",
      image:require("./images/MarketingAttribution.png") 
    }
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
         <Card sx={{ minWidth:343 , maxWidth:356 }} className="card-hover" style={{backgroundColor:"#f3f3f3f1", borderRadius:"16px" , maxHeight:"515px", borderColor:"grey", borderWidth:"3px"}} variant="outlined"> 
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
      <br/>
      <h6 className="project-ref"> Note: Some projects have referred from online resources for learning and to built them. I thank those programming mentors to have this opportunity to learn*</h6>
      <br/>
    </section>
    )
  }

export default Projects;


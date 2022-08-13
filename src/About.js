
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@material-ui/core/Link';

const styleGrid = {
    paddingBottom: "10px",
    width: "100%"
  };

const propStyleGrid = {
    container: true,
    spacing:2,
    style: styleGrid
  };
  
function About(){
    const data = {

     aboutdata: [
      { 
        id:"1",
        Skillname:"Front End Technologies",
        Technologies:"HTML5 . CSS3 . Javascript . Bootstarp . React js",
      },
      { 
         id:"2",
         Skillname:"Back End Technologies",
         Technologies:"Node js . Express js",
      },
      { 
         id:"3",
         Skillname:"Database Technologies",
         Technologies:"Microsoft SQL Server . Mysql . MongoDB ",
      },
      {  
         id:"4",
         Skillname:"Testing Technologies",
         Technologies:"Postman . Jmeter",
      },
      { 
         id:"5",
         Skillname:"Datascience Technologies",
         Technologies:"Python . Scientific computing libraries . Talend . Microtrategy . JupyterNotebook",
      }, 
      {
        id:"6",
        Skillname:"Operating Systems",
        Technologies:"Windows . Mac . Linux",
      }, 
      {
        id:"6",
        Skillname:"Cloud Technologies",
        Technologies:"AWS . Heroku . Netlify . Vercel",
      } 
     ],
        Edudata: [
        { 
          id:"1",
          Universitname:"Anna University",
          Yearfrom:"2007",
          Yearto:"2011",
          Course:" Bachelor of Engineering in Computer Science and Engineering",
          Country:"Chennai,INDIA",
          maplink:"https://goo.gl/maps/N7LxKBWwc3UPZGHA9"
        },
        { 
          id:"2",
          Universitname:"University of Leicester",
          Yearfrom:"2013",
          Yearto:"2014",
          Course:" Post Graduate in Advance Computer Science",
          Country:"Leicester,UNITED KINGDOM",
          maplink:"https://goo.gl/maps/g5vj2H9DQ45UCy297"
        },
        { 
          id:"3",
          Universitname:"ESC School of Management",
          Yearfrom:"2018",
          Yearto:"2019",
          Course:"MSc Business Intelligence and Analytics Attended",
          Country:"Clermont-Ferrand,FRANCE",
          maplink:"https://g.page/esc-clermont-bs?share"
        },  
      ],
       Workdata: [
        { 
          id:"1",
          Companyname:"Testing Sciences",
          YearFrom:"2012",
          YearTo:"2013",
          Position:"Software Test Engineer",
          Country:"Chennai,INDIA",
          maplink:"https://goo.gl/maps/m85FjkpZHpvviHad8"
        },
        { 
          id:"2",
          Companyname:"jSoft Solution",
          YearFrom:"2013",
          YearTo:"2015",
          Position:"Promotions Executive",
          Country:"London,UNITED KINGDOM",
          maplink:"https://goo.gl/maps/yq3s221a1TT9Hhs29"
        },
        { 
          id:"3",
          Companyname:"Emperor Technology Labs",
          YearFrom:"2015",
          YearTo:"2017",
          Position:"Software Development in Test",
          Country:"Birmingham,UNITED KINGDOM",
          maplink:"https://goo.gl/maps/QxNunH77iXx6Mr638"
        },   
        {   
          id:"4",
          Companyname:"Vectone Mobile services ltd",
          YearFrom:"2017",
          YearTo:"2018",
          Position:"Product Tester",
          Country:"Chennai,INDIA",
          maplink:"https://goo.gl/maps/m85FjkpZHpvviHad8"
        },
      ]
    };

    return(

        <section>
          <div className='sec-abt'>
              <p className='about-info'>Basically,I works in Software Automation testing, Web applications developement and Data Sciences. Experienced professional having experience in Software testing, Web applications developement and Data Analytics looking for an opportunity to work with technically challenged environments. Currenlty,I am looking forward to work with Software Quality Assurance Engineer,Front End Engineer, Data Engineer and Data Science .</p>
           </div>
          <section>
            <h1 className="heading"> Technologies that I works with </h1>
             <Grid {...propStyleGrid}>
              { data.aboutdata.map((Abtlist) => (
             <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              style={{ display: "flex", justifyContent: "center" }}
             >
  
             <Card sx={{ minWidth:335 , maxWidth:335 }} style={{backgroundColor: "#f3f3f3f1", borderRadius:"16px" , minHeight:"230" , borderColor:"grey", borderWidth:"3px"}} variant="outlined">
             <CardContent  className="Card-text" key={Abtlist.id}>
             <Typography gutterBottom variant="h5" component="div">
              {Abtlist.Skillname}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2">
              STACK :
             </Typography>
             <Button variant="outlined" style={{justifyContent:"center",color:"#496091"}}>
               {Abtlist.Technologies}
             </Button>
             </CardContent>
             </Card>
             </Grid>
             ))}
             </Grid>
          </section>

           
          <section>
            <h1 className="heading">  Glance about my Education </h1>
            <Grid {...propStyleGrid}>
              { data.Edudata.map((Edlist) => (
             <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              style={{ display: "flex", justifyContent: "center"}}
             >
            <Card sx={{ maxWidth:335 , minWidth:335 }} style={{backgroundColor: "#f3f3f3f1", borderRadius:"16px" , minHeight:"280" , borderColor:"grey", borderWidth:"3px"}} variant="outlined">
             <CardContent  className="Card-text" key={Edlist.id} >
             <Typography gutterBottom variant="h5" component="div">
              UNIVERSITY : {Edlist.Universitname}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2" >
              YEAR : {Edlist.Yearfrom}-{Edlist.Yearto}
             </Typography>
             <Typography gutterBottom variant="body2" >
              COURSE : {Edlist.Course}
             </Typography>
             </CardContent><br/>
             <CardActions >
             <Button><Link underline="none" target="_blank" href={Edlist.maplink} rel="noreferrer"> {Edlist.Country} </Link></Button>
            </CardActions>
             </Card>
             </Grid>
             ))}
             </Grid>
           </section>

           
            <section>
               <h1 className="heading">  Glance about my Experience </h1>
               <Grid {...propStyleGrid}>
              { data.Workdata.map((Wrlist) => (
             <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              style={{ display: "flex", justifyContent: "center"}}
             >
            <Card sx={{ maxWidth:335 , minWidth:335 }} style={{backgroundColor: "#f3f3f3f1", borderRadius:"16px" , minHeight:270 , borderColor:"grey", borderWidth:"3px"}} variant="outlined">
             <CardContent  className="Card-text" key={Wrlist.id}>
             <Typography gutterBottom variant="h5" component="div">
              COMPANY : {Wrlist.Companyname}
             </Typography>
             <br/>
             <Typography gutterBottom variant="body2" >
              YEAR : {Wrlist.YearFrom}-{Wrlist.YearTo}
             </Typography>
             <Typography gutterBottom variant="body2" >
              POSITION : {Wrlist.Position}
             </Typography>
             </CardContent>
             <br/>
             <CardActions>           
             <Button><Link underline="none" target="_blank" href={Wrlist.maplink} rel="noreferrer">{Wrlist.Country}</Link></Button>
             </CardActions>
             </Card>
             </Grid>
             ))}
             </Grid>
           </section>
        </section>  
   )
}

export default About;


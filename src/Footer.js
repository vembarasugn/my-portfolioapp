import React from "react";
import SimpleReactFooter from "simple-react-footer";
import Socialtab from "./Socialtab";

function Footer() {
 
  const description = "In this portfolio, you can able to review all my education details, career experience details, all the recent projects that I have worked with and every detail about my technical skills. For more informations, please do not hesitate to write emails : vembarasugn@gmail.com"
  const title = "Myportfolio";

  
  const columns = [
    {
        title: "Resources",
        resources: [
            {   
                name: "About",
                link: "/About",
                target:"_blank"
            },
            {   
                name: "Projects",
                link: "/Projects",
                target:"_blank"
            },
            {   
                name: "Blog",
                link: "https://www.blogger.com/profile/10723624017208976422",
                target:"_blank"
            },
        ]
    },
    {
        title: "Legal",
        resources: [
            {   
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {   
                name: "Locations",
                link: "https://goo.gl/maps/XZQCukTRYweLNPkv7"
            },
            {
                name: "showmore",
                link: "/"
            }
        ]
    }
 ]  
                
 return (
 <section>
     <SimpleReactFooter 
     description ={description}
     title={title}
     columns={columns}
     copyright="2023"
     iconColor="black"
     backgroundColor="#222831"
     fontColor="#F2F2F2"
     copyrightColor="#F2F2F2"   
    />
    <Socialtab/> 
 </section>
 )} 
                
 export default Footer;
                
                        








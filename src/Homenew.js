import React from "react";
import Typed from "react-typed";
import Particle from "./Particle";
import AnimateStyled from "animate-styled"
import {
  Homebody,
  Content,
  Button,
  RightButton,
  Text,
  TextHobbies,
  ImageContainer,
  Image
} from "./Styles";


function Homenew(){
    return (
    <section>
        <Homebody>
          <Content >
           <Text>Hello there, I am Vembarasan Nagarajan.👋🏻</Text>
           <Text>👨‍💻
           <Typed style={{ fontSize:28, color:"grey" }} strings={[
            "Automation Test Engineer",
            "Full Stack MERN Developer",
            "Data Sciences",
            "I am glad you are glancing my portfolio!"
            ]}
            typeSpeed={80}
            backSpeed={80} 
            />
            </Text>
            <TextHobbies> I enjoy reading books and listening to music..!🎧📚</TextHobbies>
            <AnimateStyled name="fadeIn">
            <Button as="a"
             href="https://www.linkedin.com/in/vembarasan-nagarajan-09797b37/"
             target="_blank"
             rel="noopener"
             primary>Hire Me</Button> 
            <RightButton as="a"
             href="https://github.com/vembarasugn"
             target="_blank"
             rel="noopener"
             >GitHub</RightButton>
            </AnimateStyled>
          </Content>
          <ImageContainer>
            <Image/>
          </ImageContainer>
          <Particle/>
        </Homebody>
    </section>
    )
}
           
export default Homenew;

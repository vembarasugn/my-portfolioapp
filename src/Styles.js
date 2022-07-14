import styled from "styled-components";
import profilepic from "./images/profilepic.JPG";

export const Homebody = styled.div`
display: flex;
flex-direction: row;
padding: 0px 3.5rem 0 3.5rem;
min-height: 100%;
padding-bottom: 6rem;
position: relative;
margin-top: 3em;
`;

export const Text = styled.p`
font-size: 3.2em;
color: grey;
margin-top: 0.2em;
font-style:10px;
font-family:'monospace';
`;

export const TextHobbies = styled.p`
font-size: 1.2em;
color: grey;
margin-top: 2em;
font-style:italic;
font-family:'Roboto Condensed';
font-weight:bold;
margin-bottom:3em;
`;



export const ImageContainer = styled.div`
padding-top: 7.2em;
padding-right: 7.8em;
`;

export const Image = styled.div`
background-image: url(${profilepic});
background-size: contain;
background-repeat: no-repeat;
border-radius:15px;
height:21em;
width: 21em;
max-width: 100%;
z-index: 0;
`;

export const Content = styled.div`
padding-top: 6em;
padding-left: 9em;
`;

export const Button = styled.a`
background: ${props => props.primary ? "#ECB390" : "white"};
color: ${props => props.primary ? "white" : "#ECB390"};

font-size: 1em;
font-weight:bold;
margin: 1em;
padding: 0.4em 2.8em;
border: 3px solid #ECB390 ;
border-radius: 3px;
margin-top: 7em;

&:hover {
  animation: shake 0.70s cubic-bezier(.32,.08,.20,.87) both;
  transform: translate3d(0, 0, 0);
  perspective: 700px;
  
  background-color:Transparent;
  color: ${props => props.primary ? "grey" : "grey"};
  }
&:link,&:visited,&:active {
  text-decoration: none; 
}
`;
  
export const RightButton = styled(Button)`
  color:#ECB390;
  border-color: grey;
  background-color:Transparent;
`;
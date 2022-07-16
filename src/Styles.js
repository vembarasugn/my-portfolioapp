import styled from "styled-components";
import profilepic from "./images/profilepic.png";

export const Homebody = styled.div`
 display: flex;
 flex-direction: row;
 padding: 0px 3.5rem 0 3.5rem;
 min-height: 100%;
 padding-bottom: 6rem;
 position: relative;
 margin-top: 3em;

 @media screen and (max-width:770px){
  flex-direction:column;
  padding-bottom:1.8em;
  margin-top:0.8em;
  padding-left:0.8em;
  margin-top:1.5em;
 }
  @media screen and (max-width:1200px){
    flex-direction:relative;
    padding-bottom:1.8em;
    margin-top:0.8em;
    padding-left:0.07em;
    margin-top:1.3em;
}
`;

export const Text = styled.p`
 font-size: 3.2em;
 color: grey;
 padding-top:0;
 font-style:10px;
 font-family:'monospace';

 @media screen and (max-width:770px){
  justify-content:center;
  align-items:center;
  padding-left:0.4em;
  margin-top:0.6em;
}
`;

export const TextHobbies = styled.p`
 font-size: 1.2em;
 color: grey;
 margin-top: 2em;
 font-style:italic;
 font-family:'Roboto Condensed';
 font-weight:bold;
 margin-bottom:3em;

 @media screen and (max-width:770px){
  justify-content:center;
  align-items:center;
  padding-left:0.4em;
  padding-top:0.5em;
}
`;

export const ImageContainer = styled.div`
 padding-top: 5.3em;
 padding-right: 7.8em;
`;

export const Image = styled.div`
 background-image: url(${profilepic});
 background-size: contain;
 background-repeat: no-repeat;
 border-radius:15px;
 height:22em;
 width: 19.5em;
 margin-top:2.2em;
 max-width: 100%;
 z-index: 0;

 @media screen and (max-width:1400px){
  height:20em;
  width:20em;
  border-radius:15px;
  margin-top:0.6em;
  margin-bottom:1em;
  padding-left:2.5em;

 }
 @media screen and (max-width:1200px){
  height:17.5em;
  width:17.5em;
  border-radius:15px;
  margin-top:1em;
  margin-left:5em;
  padding-bottom:1em;
 }
`;

export const Content = styled.div`
 padding-top: 6em;
 padding-left: 8em;

 @media screen and (max-width:770px){
  flex-direction:column;
  padding:0;
  padding-bottom:2em;
  margin-left:0.4em;
  margin-top:1.5em;
 }
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
  background-color:Transparent;
  color: ${props => props.primary ? "grey" : "grey"};
  }

  &:focus,&:visited,&:link,&:active {
    text-decoration: none;
  }
  
  @media screen and (max-width: 770px) {
  margin-top:1.5em;
  flex-direction:relative;
  padding-bottom:1.8em;
  padding-left:0.1em;

  @media screen and (max-width: 1200px) {
    margin-top:1.5em;
    flex-direction:relative;
    padding-bottom:1.8em;
    padding-left:0.2em;
  }
`;
  
export const RightButton = styled(Button)`
  color:#ECB390;
  border-color: grey;
  background-color:Transparent;
`;

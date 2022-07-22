import styled, {css} from "styled-components";
import profilepic from "./images/profilepic.png";

export const Homebody = styled.div`
 display: flex;
 flex-direction: row;
 padding: 0px 3.5rem 0 3.5rem;
 min-height: 100%;
 padding-bottom: 3.5rem;
 position: relative;
 margin-top: 2em;

 @media screen and (max-width:770px){
  flex-direction:column;
  padding-bottom:1.8em;
  margin-top:0.8em;
  margin-left:1em;
  }
  @media screen and (max-width:1200px){
  flex-direction:relative;
  padding-bottom:0.2em;
  margin-top:0.8em;
  padding-left:0.05em;
  margin-left:1em;
  }
`;

export const Text = styled.p`
 font-size: 3em;
 color: grey;
 padding-top:0;
 font-style:10px;
 font-family: Copperplate Gothic Light;

 @media screen and (max-width:770px){
  justify-content:center;
  align-items:center;
  margin-left:0.4em;
  margin-top:0.6em;
 }
`;

export const TextHobbies = styled.p`
 font-size: 1em;
 color: grey;
 margin-top: 2em;
 font-style:italic;
 font-family:Copperplate Gothic Light;
 font-weight:bold;
 margin-bottom:3em;
 margin-left:0.5em;

 @media screen and (max-width:770px){
  justify-content:center;
  align-items:center;
  margin-left:1em;
  margin-top:1.5em;
 }
`;

export const ImageContainer = styled.div`
 padding-top: 4.6em;
 padding-right:7.5em;
 padding-bottom:0.5em;
`;

export const Image = styled.div`
 background-image: url(${profilepic});
 background-size: contain;
 background-repeat: no-repeat;
 border:0.3em solid grey;
 border-radius:0.3em;
 height:18.5em;
 width:18.5em;
 margin-top:2em;
 max-width: 100%;
 z-index: 0;
 
 @media screen and (max-width:1400px){
  height:18.5em;
  width:18.5em;
  margin:2.5em;
 }
 @media screen and (max-width:1200px){
  margin:3.5em;
  margin-top:2em;
 }
 @media screen and (max-width:750px){
  margin-left:4.5em;
  margin-top:-2em;
  margin-bottom:-7.8em
 }
 @media screen and (max-width:545px){
  visibility:invisible;
  display:none;
 }
`;

export const Content = styled.div`
 padding-top: 6em;
 padding-left: 8em;

 @media screen and (max-width:770px){
  flex-direction:column;
  padding:0;
  padding-bottom:0em;
  margin-left:0.4em;
  margin-top:1.5em;
 }
`;

export const Button = styled.button`
  border-radius:4px;
  border: 3px solid #ECB390 ;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-decoration:none;
  
  ${props => props.primary && css`
  background:#ECB390;
  color:grey;
  `}

  &:hover {
  background-color:Transparent;
  ${props => props.primary && css`
  background:grey;
  color:white;
  `}
`;

export const RightButton = styled(Button)`
  color:#ECB390;
  border-color: grey;
  background-color:Transparent; 

  &:hover {
    background:Transparent;
    color:grey;
    border-color:#ECB390;
  }
`;

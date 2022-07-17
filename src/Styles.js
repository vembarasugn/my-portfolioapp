import styled, {css} from "styled-components";
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
  margin-left:1.4em;
}
  @media screen and (max-width:1200px){
    flex-direction:relative;
    padding-bottom:0.2em;
    margin-top:0.8em;
    padding-left:0.05em;
    margin-left:1.4em;
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
  margin-left:0.4em;
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
  margin-left:1.2em;
  margin-top:1.5em;
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
 height:26em;
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
  margin-left:2.5em;
}
 @media screen and (max-width:1200px){
  height:17.5em;
  width:17.5em;
  border-radius:15px;
  margin-top:1em;
  margin-left:5em;
  margin-bottom:1em;
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
  margin: 0.6em 1.2em;
  padding: 0.26em 1.2em;
  font-size:0.9em;
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

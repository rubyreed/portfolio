import styled from "styled-components";
import { Container, Form, Navbar, Nav } from "react-bootstrap";

export const ColorOne = "#343434"; //grey
export const ColorTwo = "#2F3061"; //dark purple
export const ColorThree = "#0E34A0"; //royal blue
export const ColorFour = "#5F5980"; //grey purple
export const ColorFive = "#DFDFDF"; //light grey/purple


export const MyContainer = styled(Container)`
  background-color: ${ColorFour};
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const Header = styled.h1`
  color: white;
`

export const MyButton = styled.button`
background-color: ${ColorFive};
color: ${ColorTwo};
padding: .8rem;
margin: .5rem;
margin-left: 0rem;
border-radius: .3rem;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
outline: none;
font-size: 1rem;
width: 7rem;
`

export const MyFormGroup = styled(Form.Group)`
margin-bottom: 1rem;
`

export const MyFormControl = styled(Form.Control)`
padding: 1rem;
border-radius: .3rem;
margin-top: .5rem;
width: 95%;
`

export const MyNavbar = styled(Navbar)`
  background-color: ${ColorTwo};
`;

export const MyNavLink = styled(Nav.Link)`
color: white;
text-decoration: none;
font-size: 1.5rem;
&:hover {
  color: ${ColorFive}
}
`

export const MyNav = styled (Nav)`
display: flex;
justify-content: space-evenly;
align-items: center !important;
height: 5rem;
`

export const BigDiv = styled.div`
display: flex;
justify-content: flex-start;
`

export const SmallDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 4rem;
`


import React from 'react';
import styled from 'styled-components';
import Img  from './Img/pix.JPG';

export const ComHFX2 = () => {
    return (
        <Container><Wrapper>
        <NavImg><Logo src={Img}/>
    <Nav1>ABOUT</Nav1>
    <Nav1>PRODUCTS</Nav1>
    <Nav1>ACCOUNTS</Nav1>
    <Nav1>PLATFORMS</Nav1>
    <Nav1>TOOLS</Nav1>
    <Nav1>EDUCATION</Nav1>
    <Nav1>PROMOTIONS</Nav1>
    <Nav1>PARTNERS</Nav1>
    <Nav1>INVESTMENTS</Nav1></NavImg>
    </Wrapper></Container>
        
    )
}

const Container=styled.div`
background-color:#222222;
width:100%;
display:flex;`;

const Nav1=styled.div`
display:flex;
padding-top:40px;
font-size:14px;
font-weight:12px;
color:white;
margin-left:45px;
margin-bottom:10px;
transition:all 350ms;
transform:scale(1);
:hover {
    transform:scale(1.05);
    cursor:pointer;
    color:black;
}`;

const Logo=styled.img`
width:150px;
height:35px;
object-fit:cover all;
margin:0 30px;
padding-top:30px;
margin-left:100px;
`;

const NavImg=styled.div`
width:100%;
height:50px;
display:flex;
padding-bottom:20px;
margin-left:0px 20px;
position:absolute;
background-color:red;`;
  
const Wrapper=styled.div`
`;
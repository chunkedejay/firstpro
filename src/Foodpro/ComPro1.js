import React from 'react';
import styled from 'styled-components';
import Img from './Img/barbing.jpg';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
export const ComPro1 = () => {
    return (

  <Container id='home'><Wrapper><LT><Image src={Img}/>SHOP SET UP</LT><Content>
  <Title>John Austin</Title><Desc><ImQuotesLeft/>
      {''} Most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome support! {''}<ImQuotesRight/></Desc> 
      <Div/></Content></Wrapper></Container>);}
  
        const Image=styled.img`
        width:350px;
        height:50vh;
        border-radius:25px;
        background-color:black
        object-fit:contain ;
        margin: 0 20px;`;
        const Content=styled.div`
        margin:0 30px;
        height:50vh;
        width:350px;
        padding-bottom:450px;`;
        const Title=styled.div`
        font-weight:bold;
        font-size:30px;
        margin:20px 0;
        padding-bottom:10px;`;
        const Desc=styled.div`
        margin-bottom:30px;`;
        const Div=styled.div`
        margin-top:80px;`;
       /* const Button=styled.div`
        margin:0 10px;
        width:120px;
        height:50px;
        color:black;
        font-weight:bold;
        border:4px solidwhite;
        outline:none;
        border-radius:3px;
        background-color:transparent;
        transition:all 350ms;
        transform:scale(1);
        color:white;
        :hover {
            cursor:pointer;
            border:4px solid #4e1a01;
            transform:scale(1.05);
            background-color:white;
            color:#4e1a01;}`*/
const Container=styled.div`
padding-bottom:100px;
width:100%;
min-height:80vh;
height:100%;
background-image:url('scaled.jpeg');
background-size:cover;
background-position:center;
background-repeat:poppins;
padding-top:-100px;`;
const Wrapper=styled.div`
height:50vh;
display:flex;
justify-content:center;
flex-wrap:wrap;
align-items:center;
padding-top:100px;
background-color:green;`;

const LT=styled.div`
display:flex;
flex-direction:column;
margin-bottom:550px;
align-items:center;
font-weight:bold;
font-size:25px;`;
        

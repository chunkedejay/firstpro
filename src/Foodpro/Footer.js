import React from 'react';
import styled from 'styled-components';
import Logo from './Img/hall.jpg';
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import {FaGithubSquare} from 'react-icons/fa';




export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Title style={{backgroundColor:'red'}}>Community</Title>
                    <Sub>
                        <List>Project</List>
                        <List>Project1</List>
                        <List>Project2</List>
                        <List>Project3</List>
                        <List>Project4</List>
                    </Sub>
</Section>
                <Section>
                    <Title  style={{backgroundColor:'red'}}>Service</Title>
                    <Sub>
                        <List>Project</List>
                        <List>Project1</List>
                        <List>Project2</List>
                        <List>Project3</List>
                        <List>Project4</List>
                        </Sub></Section>
                        <Section>
                    <Title style={{backgroundColor:'red'}}>Interest</Title>
                    <Sub>
                        <List>Project</List>
                        <List>Project1</List>
                        <List>Project2</List>
                        <List>Project3</List>
                        <List>Project4</List></Sub>
                        </Section>
            </Wrapper><Last><TxtImg><Image src={Logo}/>
 <Text>This Program is developed by Chudevs</Text> <Social><F href= 'https://www.facebook.com/chumillionare' 
 rel='' target='_blank'>< AiFillFacebook/></F>
 <F href= 'https://www.twitter.com/chunkedejay' rel='' target='_blank'><AiFillTwitterSquare/></F>
 <F href= 'https://www.github.com/chunkedejay' rel='' target='_blank'><FaGithubSquare/></F></Social></TxtImg></Last>
 </Container>);};
 
 const F=styled.a`
 color:black;
 font-weight:bold;
 margin-left:40px;
 align-item:center;
 padding-top:100px;
 .MuiSvgIcon-root{
     font-size:100px;
     color:#0357d6;}`;
     const Image=styled.img`
     width:200px;
     height:50px;
     background-color:none;
     object-fit:contain;
     margin-left:20px;
     border-radius:5px;`;
     const Text=styled.div`
     font-weight:bold;`
     const Social=styled.div`
     width:200px;
     height:60px;
     /*background-color:lightgray;*/
     object-fit:contain;
     margin-right:20px;`;
     const Last=styled.div`
     width:100%;
     height:80%;
     background-color:white;
     color:black;
     display:flex;
     align-items:center;
     justify-content:space-between;`;
     const Section=styled.div`
     width:300px;
     display:flex;
    flex-direction:column;`;
     const Title=styled.div`
     margin-left:1px;
     align-item:center;
     margin-bottom:30px;
     font-size;25px;
     font-weight:bold;`;
     const Sub=styled.div``;
     const List=styled.div`
     margin:4px 1px;
     margin-top:50px;
     :hover{
         cursor:pointer;
         text-decoration:underline;}`;
         const Container=styled.div`
         width:100%;
         min-height:50vh;
         height:100%;
         background-color:#1a1a1a;
         color:white;
         padding-top:24px;
         display;flex;
         flex-direction:column;`;
         const Wrapper=styled.div`
         display:flex;
         flex-direction:wrap;
         justify-content:center;
         flex:1;`;
         const TxtImg=styled.div`
         display:flex;
         margin-left:150px;`;     

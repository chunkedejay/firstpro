import React from 'react';
import styled from 'styled-components';
import {AiFillHome} from 'react-icons/ai';
import {MdOutlinePowerSettingsNew} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillSetting} from 'react-icons/ai';
import Img from './Img/pix.JPG';
import{AiFillContacts} from 'react-icons/ai';
import  {MdOndemandVideo} from 'react-icons/md';
import {MdHomeRepairService} from 'react-icons/md';
import { animateScroll as Scroll, Link } from 'react-scroll';

export const HeaderBar1 = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    src{Img} onclick = {() =>{Scroll.scrollToTop()}}
                    <Navigation>
                        <Nav> to= 'Home' Smooth ={true} offset={-100} duration={500}<Homeicon/>
                        <Span>Home</Span>
                        </Nav>
                        <Nav>to= 'Service' Smooth = {true} offset={-100} duration={500}
                        <HomeRepairIcon/> <Span>Services</Span></Nav>
                        <Nav> to ='Video' Smooth={true} offset={-100} duration ={500} <OnDemandVideoIcon/> 
                        <Span>Video</Span></Nav>
                        <Nav to= 'Contact' Smooth = {true} offset={-100} duration={500}>
                        <ContactIcon/><Span>Contact</Span></Nav>
                        <Button onclick ={()=>{Scroll.scrollToBottom();}}>Go to last</Button>
                        </Navigation>
                </Logo>
            </Wrapper>
            </Container>
    )
}
const Button=styled.button`
margin-right:30px;
width:120px;
height:45px;
outline:none;
border:0;
color:black;
border-radius:3px;
background-color:white;
transition:all 400ms;
font-weight:bold;
:hover{
    cursor:pointer;
    transform:scale(1.05);
    border:2px solid white;
    background-color:transparent;
    color:white;}`
    const Nav=styled(Link)`
    display:flex;
    align-items:center;
    margin:0 10px
    color:white;
    .MuiSvgIcon-root{font-size:20px;
    margin-right:5px;
color:rgba(255,255,255,0.7);
transition:all 400ms;}
span{text-transform:uppercase;
font-weight:bold;
letter-spacing:1px;
position:relative;
:after{
    content:'';
    position:absolute;
    bottom:-1px;
    left:0;
    height:3px;
    width:100%;
    background-color:white;
    opacity:0;
    transition:all 400ms;
    tranform:scale(1);
    transform-origin:center;
}}
    :hover{
        cursor:pointer;
        .MuiSvgIcon-root{color:rgba(255,255,255,1);}
        span{
            after{opacity:1;
            transform:scale(1);}
        }
    }`
    const Container= styled.div`
    width:100%;
    height:80px;
    background-color:#011834;
    background-color:#4e1a01;
    color:white;
    font-family:poppins;
    position:fixed;
    z-index:10;
    `;
    const Wrapper= styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;`;
    const Img=styled.img`
    cursor:Pointer;
    width:160px;
    height:50px;
    object-fit:contain;`;
    const Navigation= styled.div`
    display:flex;
    flex:1;`       
    

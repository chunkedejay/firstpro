import React from 'react';
import styled from 'styled-components';
import Img from './Img/pix.JPG';
import {AiFillHome} from 'react-icons/ai';
import {FcSearch} from 'react-icons/fc';
import {HiTemplate} from 'react-icons/hi';
import {BiDockLeft} from 'react-icons/bi';
import {IoMdCreate} from 'react-icons/io';
import {MdOutlineContentCopy} from 'react-icons/md';
import {Link, animateScroll as Scroll} from 'react-scroll';


export const ComPro = () => {
    return (
        <Container>
            <Wrapper>
                <Image src={Img} />
            <Searchw><Input placeholder= 'Type Here To Search' /><FcSearch style={{
                marginLeft:"-30px", paddingTop:'10px'
            }}/></Searchw>
                    
                    <Navigation>
                    <Nav> <AiFillHome onClick={()=>{Scroll.scrollToTop()}}/>Home</Nav><TI>|</TI>
                    <Nav><HiTemplate/>Template</Nav>
                    <Nav href='https://www.facebook.com/chumillionaire' rel='' 
                    target='_blank'><MdOutlineContentCopy/>Content</Nav>
                    <Nav><BiDockLeft/>Docs</Nav>
                    <Nav>Sign In</Nav>
                    <Nav><IoMdCreate/>Create Account</Nav>
                    
                </Navigation> 
            </Wrapper>
        </Container>
        
        )}

        /*const Button=Styled.button`
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
            color:white;}`;*/
        
        const Searchw= styled.div`
       display:flex;
       position:relative;
       align-item:center;
       margin:0 50px;`;
       
       const Input=styled.input`
       display:flex;
       width:200px;
       height:30px;
       padding-left: 10px;
       background-color:lightgray;
       border-radius:20px;
       display:flex;
       box-shadow:rgba(255,255,255,0.6)`;
       
       const Container =styled.div`
       width:100%;
       height:100%;
       bakground-color:green;`;
       
       const Wrapper =styled.div`
       width:100%;
       height:100px;
       display:flex;
       background-color:#cd0511;
       align-items:center;
       justify-content:space-between;`;
       
       const Image =styled.img`
       width:150px;
       height:50px;
       background-color:#222222;
       object-fit:contain;
       margin-left:15px;
       border-radius:5px;`;
       
       const Navigation =styled.div`
       margin-right:5px;
       display:flex;
       justify-content: space-between;`;
       
       const TI=styled.div`
       color: white;`;
       
       const Nav =styled(Link)`
       margin:0 50px;
       display:flex;
       justify-content:center;
       margin-right: 20px;
       font-weight:bold;
       background-color:none;
       text-decoration:underline;
       color:white;
       font-size:15px;
       transition:all 250ms;


       
       
       :hover {
           color:darkblue;
           cursor:pointer;
       }`;
       
       

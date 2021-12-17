import React from 'react';
import styled from 'styled-components';



export const ComHFx = () => {
    return (
        <Container>
            <Wrapper>
                <Navigation><TextNav><Text>Member of HF Markets Group</Text>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav/>
                        <Nav>Live Support</Nav><Hit/>
                        <Nav>Contact Us 24/5</Nav>
                       <Sub> <Nav>Login </Nav>
                        <Nav>Open Live Account</Nav>
                        <Nav>Demo</Nav><Nav/><Nav/>
                        <Nav>EN</Nav></Sub></TextNav>
                </Navigation>
            </Wrapper>
        </Container>
            
        
    )
}
const Container=styled.div`
background-color:orange;
height:50px;`;

const Sub=styled.div`
display:flex;
font-weight:bold;`;

const Hit=styled.div`
width:1px;
height:50px;`;
const Wrapper=styled.div`
width:100%;
display:flex;
height:90px;
margin-left:50px;
justify-content:space-between;`;
const Text=styled.div`
margin-top:1px;
margin-left:-10px;
color:white;
padding-top:2px;`;
const TextNav=styled.div`
display:flex;
margin-bottom:30px;
font-size:14px;
justify-content:space-between;
align-item:center;
margin-left:63px;
`;
const Navigation=styled.div`
margin-right:5px;
display:flex;
justify-content:space-between;
align-items:center`;
       
const Nav=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
color:white;
margin-left:25px;
padding-bottom:10px;
`
;

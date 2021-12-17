import React from 'react';
import styled from 'styled-components';

export const Contactsection = () => {
    return (
        <Container id= 'Contact'>
            <Wrapper>
                <Title>
                    Subscribe To Our Newsletter
                </Title>
                <Holder>
                 <Input Placeholder= 'Enter Your Email'/>
                 <Button>Submit</Button>

                </Holder>
            </Wrapper>

        </Container>);}
        
        const Title=styled.div`
        font-weight:bold;
        font-size:30px;
        margin-bottom:20px;`;
        const Holder=styled.div`
        width:500px;
        background-color:white;
        border-radius:40px;
        height:50px;
        display:flex;
        align-items:center;`;
        const Input=styled.input`
        border:0;
        flex:1;
        border-radius:40px;
        margin-left:10px;
        color:black;
        font-size:20px;
        margin-right:5px;
        cursor:pointer;`;
        const Container=styled.div`
        width:130vh;
        height:100%;
        background-color:blue;
        color:white;`;
        const Wrapper=styled.div`
        height:30vh;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;`;
        const Title=styled.div`
        margin-left:30px;
        margin-bottom:30px;
        font-size:25px
        font-weight:bold;`;
        const Sub=styled.div``
        const List=styled.div`
        `
            


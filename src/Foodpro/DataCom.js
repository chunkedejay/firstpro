import React from 'react';
import styled from 'styled-components';
import myData from './data.json';
export const DataCom = () => {

    return (
        <Container>
            <Wrapper>
                <Title>Artisan</Title>
                <Desc>Explore The Varieties Of Artisans</Desc>
                <Sub>Worlds Of Artisans</Sub>
                <GalHolder>{myData?.map((props)=>(
                    <Card key ={props.id}>
                        <Image src={props.img}/><Content>
                            <Name>{props.name}</Name>
                            <Price>N{props.price}</Price>
                        </Content>
                        <Txt>{props.desc}</Txt></Card>))}
                    </GalHolder>
            </Wrapper>
        </Container>

    )
}

const Container=styled.div`
width:100%;
height:100%;
min-height:100vh;`;

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-item:center;`;

const Title=styled.div`
color:#f19a33;
font-size:30px;`;

const Desc=styled.div`
font-weight:bold;
font-size:50px;
margin-top:20px;
margin-left:275px;
display:flex;
align-item:center;`;

const Sub=styled.div`
font-size:24px;
font-weight:bold;
margin-bottom:10px;
margin-left:575px;`;

const GalHolder=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`;
const Card=styled.div`
margin:10px;
width:450px;
height:400px;
border-radius:5px;
background-color:lightgray;
display:flex;
flex-direction:column;
transform:scale(1);
transition:all 350ms;
box-shadow:rgba(0,0,0,29%) 0px 26px 30px -10px;
:hover{
    transform:scale(1.03);
    box-shadow:rgba(0,0,0,29%) 0px 20px 30px -10px;
    rgba(0,0, /23%) 0px 16px 10px -10px;}`;

const Image=styled.div`
width:100%;
height:300px;
object-fit:cover;
border-radius:5px 5px 0 0;`;

const Content=styled.div`
display:flex;
justify-content:space-between;flex:1;
margin-top:20px;
font-size:25px;
font-weight:bold;`;
const Name=styled.div`
margin-left:20px;`;

const Price=styled.div`
margin-right:20px;`;
const Txt=styled.div`
margin-left:20px;`;

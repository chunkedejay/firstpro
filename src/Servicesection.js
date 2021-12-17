import React from 'react';
import Styled from 'styled-components';
import data from 'data.json';

export const Servicesection = () => {
    return (
        <Container id='Service'>
            <Wrapper>
                {data.map((props)=>(
                    <Card> <image src={props.img}/>
                    <Content>
                        <Title>{props.title}</Title>
                        <Desc>{props.desc}</Desc>
                    </Content></Card>
                ))}
            </Wrapper>

        </Container>)}
        const Card= styled.div`
        width:300px;
        height:500px;
        background-color:lightblue;
        border:3px solidgray;
        border-radius:5px;
        margin:10px;
        transition:all 350ms;
        transform:scale(1)
        :hover{
            transform:scale(1.02)
            border:3px solidblack;
        }`;
           const Image=styled.img`
           width:100%;
           height:60%;
           object-fit:cover;
           background-color:red;
           border-radius:5px,5px,0,0;`;
           const Content=styled.div`
           color:black;`;
           const Title=styled.div`
           margin:10px;
           text-align:center;
           font-weight:bold;
           text-transform:uppercase;
           line-height:1;`;
           const Desc= styled.div`
           margin:0 5px;
           text-align:center;`;
           const Container=styled.div`
           width:100%;
           min-height:80vh;
           height:100%;
           /*background-color:green;*/
           color:white;`;
           const Wrapper=styled.div`
           padding-top:40px;
           display:flex;
           flex-wrap:wrap;
           justify-content:center;
           align-items:center;` 

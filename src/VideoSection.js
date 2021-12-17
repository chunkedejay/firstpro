import React from 'react';
import Styled from 'styled-components';
import vid from 'vision.mp4';


export const VideoSection = () => {
const url='https://www.youtube.com/watch?v=knt7eN-BT_W';
    return (
        <Container id='video'>
            <Wrapper>
                <Video src={vid}controls loop
                autoplay muted/>
            </Wrapper>
        </Container>);};

        const Video=styled.Video`
        width:90%;
        height:80%;
        margin:30px auto;
        object-fit:cover;
        border-radius:10px;`;
        const Container=styled.div`
        width:100%;
        height:100%;
        background-color:black;
        color:white;`;
        const Wrapper=styled.div`
        display:flex;
        justify-content:center;`;
            
    

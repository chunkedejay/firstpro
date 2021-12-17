
import React from 'react';
import styled from 'styled-Components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {UseParams} from 'react-router-dom';

export const Homepage = () => { 
const [data, setData] = useState();

const myApiCall = async () => {
const url2 = "https://redux-movie-api.herokuapp.com/api/movies"
await axios.get(url2).then((url) => {
    console.log(url.data);
    setData(url.data);   

});};

useEffect(() =>{myApiCall();}, [])
    return (
       
       <Container>
           <Wrapper>
               {data?.map((props) =>(<Card key={props.id} to={'/detail/${i'}>
                   <Image src={data.image}/>
                   <text>{data.title}</text>
                   </Card> ))}
           </Wrapper>
       </Container>)};



       const Container = styled.div`
       width:100%;
       height:80%;
       background-color:white;`
       
        


       
import React from 'react';
import styled from 'style-components';
import { useParams } from 'react-router-dom';
import data from './data.json';
import {usePaystackPayment} from 'react-native-paystack';

export const Payment = () => {
    const{id}=useParams();
    console.log(id);
    console.log('Heloooo');

    const config={
        reference:new Date().getTime().toString(),
        email:data[id].email,
        amount:data[id].price*100,
        publicKey: '',};
         
        const onSuccess=(reference)=>{
            console.log(reference);};

            const onClose=()=>{
                console.log('closed');};

                const initializePayment= usePaystackPayment(config);

    return (
        <Container>
            <Wrapper>
                <Card>
                    <Image src={data[id].img}/>
                    <Name>{data[id].name}</Name>
                    <Price>{data[id].price}</Price>
                        <Button
                            onClick={()=>{
                                initializePayment(onSuccess, onClose);
                            }}> Pay
                        </Button> 
                        </Card>
            </Wrapper>
        </Container>);};

        constButton=styled.div`
        padding:10px 20px;
        background-color:red;
        color:white;
        margin-bottom: 20px;
        border-radius:5px;
        cursor:pointer;`;

        const Price=styled.div`
        padding-bottom: 10px;
        font-weight:bold;`;

        const Card=styled.div`
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        width:300px;
        height:400px;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        align-item:center;
        margin:10px;
        overflow:hidden;`;

        //const Container=styled.div``;
        
        const Image=styled.img`
        width:100%;
        height:250px;
        object-fit:cover;
        margin-bottom:20px;`;
        
        const Name=styled.div`
        font-weight:bold;
        text-transform:uppercase;
        flex:1;`;

        const Wrapper=styled.div`
        width:100%;
        display;flex;
        justify-content:center;
        flex-wrap: wrap;
        height:100vh;`;
            
        const Container1=styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;`;
        
        const Container=styled.div`
        width:100%;
        height:100vh;
        background-color:lightgray;`;

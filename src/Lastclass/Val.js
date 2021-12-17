import React from 'react';
import {useForm, controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Val = () => {
    const mySchema= yup.object().shape({
        userName:yup.string().required('This field must be filled'),
        email: yup.string().email().required('This field must be filled'),
        phone: yup.number().positve().integer().required.min(5),
        password:yup.string().required('This field must be filled').min(8),
        confirm:yup.string().oneof([yup.ref('password'), null]),
    });
    const {
        register, handleSubmit,
        formState: {error}, }= useForm({resolver:yupResolver(mySchema),
        });
    
    const auth= ()=>{};
    const mySubmit=(data)=>{
        console.log(data);
        const{email,password}= data;
        console.log(data.email);
        console.log (email);
        console.log (password);
        // app.auth().create...(email, password)
    };

    return (
        <div>
            <div>
<form onSubmit={handleSubmit(mySubmit)}>
    <br/>
    <div>UserName</div>
    <input placeholder='UserName'{...register('userName')}/>
    <div>{errors.email?.message}</div>
    <br/>
    <div>Phone</div>
    <input placeholder='Phone'{...register('phone')}/>
    <div>{errors.phone?.message}</div>
    <br/>
    <div>Password</div>
    <input placeholder='Password'{...register('password')}/>
    <div>{errors.password?.message}</div>
    <br/>
    <div>Confirm</div>
    <input palceholder='Confirm'{...register('confirm')}/>
    <div>{errors.confirm?.message}</div>
    <br/>
    <button type='submit'>Enter </button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</form>
</div>
</div>
    );
};

export default Val;
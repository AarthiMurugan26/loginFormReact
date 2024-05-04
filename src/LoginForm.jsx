import React from 'react';
import './App.css';

export const LoginForm = ()=>{

    const [email,emailState] = React.useState('')
    const [password,passwordState]=React.useState('')
    const [message , successOrFailure] = React.useState('');

    const onSubmitForm = (event)=>{
event.preventDefault();
emailState('')
passwordState('')

if(email ==='test@gmail.com' && password === '12345678'){
    successOrFailure('     Login Successfull   ')
}
else{
    successOrFailure('Invalid Login Credentials')
}
    }
const emailChange = (event)=>{
    emailState(event.target.value)
}
const passwordChange = (event)=>{
    passwordState(event.target.value)
}
    return <div>
        <h1>LOGIN FORM</h1>
        <form onSubmit={onSubmitForm}>
            <input type="email" placeholder="ENTER EMAIL" 
            name="email" id="email" value={email} onChange={emailChange} /><br />
            <input type="password" placeholder="ENTER PASSWORD" 
            name="password" id="password" value={password} onChange={passwordChange}/><br />
            <button type="submit" > Login</button>

        </form>
      <p>{message}</p>
        
    </div>
}
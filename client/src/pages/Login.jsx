import React, { useState } from 'react'
import Background from"../Components/Background"
import Header from"../Components/Header"
import TextContent from '../Components/TextContent'
import "../style/login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Login = () => {
  const navigate=useNavigate()
  const[formerr,setformerr]=useState({})
  const[inputs,setInputs]=useState({
    email:"",
    password:""
  })

 const HandleChange=(e)=>{
setInputs((preve)=>({
  ...preve,
  [e.target.name]:e.target.value
}))
}
// console.log(inputs);

 const ServerCallLogin=async()=>{
 const res=await axios.post("http://localhost:5000/login",{
  email:String(inputs.email),
  password:String(inputs.password)
 }).catch((err)=>toast(err.response.data.message))
 const Data=await res.data
 return Data
 }

 
 const HandleSubmit=(e)=>{
   e.preventDefault();
   setformerr(formvalidator(inputs))
   ServerCallLogin().then((data)=>{
    if(data){
      navigate("/home")
    }if(data){
      toast("Login Successfull")
    }
  })
  }
  
  const formvalidator =(value)=>{
    const Error={}
    if(!value.email){
      Error.email="Email is Required"
    }
    if(!value.password){
      Error.password="Password is Required"
    }
    return Error
    // console.log(Error);
  }
  return (
    <>
    <Background/>
    <div>
      <Header/>
      <div className='text-container'>
        <TextContent/>
      </div>
      <div className='login-content'>
        <form onSubmit={HandleSubmit}>
        <input type="email" placeholder='Email Address' name='email' onChange={HandleChange}/>

        <input type="password" placeholder='Password' name='password' onChange={HandleChange}/><br />
     
         <p style={{color:"white",position:"relative",left:"6px"}}>{formerr.email}</p>
         <p style={{color:"white",position:"relative",bottom:"18px",left:"356px"}}>{formerr.password}</p>
        <button type='submit' >Login</button>
        </form>
      </div>
    </div>
    hi
    </>
  )
}

export default Login

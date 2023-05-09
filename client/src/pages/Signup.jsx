import React, { useState } from 'react'
import "../style/signup.css"
import Background from "../Components/Background"
import Header from '../Components/Header'
import {Link, useNavigate} from"react-router-dom"
import axios from "axios"
import { toast } from 'react-hot-toast'

const Signup = () => {

  const[formvalidate,setformvalidate]=useState({})
    const[inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()
   
    // console.log(inputs);

    const ServerCallSignup=async()=>{
        const res=await axios.post("http://localhost:5000/signup",{
          name:String(inputs.name),
          email:String(inputs.email),
          password:String(inputs.password)
        }).catch((err)=>toast(err.response.data.message))
        // .catch((err)=>console.log(err))
        const Data= await res.data
        // console.log(Data);
        return Data
    }
    const HandleChange=(e)=>{
        setInputs((preve)=>({
            ...preve,
            [e.target.name]:e.target.value
                   
        }))
    }
  //  console.log(document.URL);
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setformvalidate(formvalidator(inputs))
        if(inputs.name && inputs.email && inputs.password){

          ServerCallSignup().then((data)=>{if(data){
           navigate("/")
          }})
        }
    }

    const formvalidator =(value)=>{
      const Error={}
      if(!value.name){
        Error.name="Name is Required"
      }
      if(!value.email){
        Error.email="Email is Required"
      }
      if(!value.password){
        Error.password="Password is Required"
      }
      return Error
    }
    // console.log(formvalidate);


  return (
    <>
    <Background/>
        <Header/>
    <div className='signup-container'>
        <form onSubmit={HandleSubmit}>
      <div className='content-signup'>
        <h2 style={{marginRight:"230px",marginBottom:"10px"}}>Sign up</h2>
        <input type="text" placeholder='Name' name='name' onChange={HandleChange} />
        <p style={{color:"red",position:"relative",top:"1px"}}>{formvalidate.name}</p>

        <input type="email" placeholder='Email Address'name='email'onChange={HandleChange} />
        <p style={{color:"red",position:"relative",top:"1px"}}>{formvalidate.email}</p>

        <input type="password" placeholder='Password' name='password'onChange={HandleChange}/>
        <p style={{color:"red",position:"relative",top:"1px"}}>{formvalidate.password}</p>

        <button type='submit'>Sign up</button>
        <input style={{margin:"0px",marginRight:"280px",padding:"5px",cursor:"pointer"}} type="checkbox" id='click' />
        <p >Remamber Me</p>
        <p style={{position:"relative",bottom:"28px",left:"104px",fontSize:"13px",cursor:"pointer"}}>Need help</p>
        
      </div>
        <p style={{position:"relative",bottom:"150px",fontSize:"14px",right:"8px",left:"-10px",color:"gray"}}>Old to Netflix?
        <Link to={"/"} style={{color:"blue"}}>Login</Link>
          <br /> <p style={{position:"relative",top:"20px"}}>This page is protected by Google reCAPTCHA to 
        <br/> 
         ensure you're not a bot. <span style={{color:"blue"}}>Learn more.</span> </p></p>
         </form>
    </div>
    </>
  )
}

export default Signup

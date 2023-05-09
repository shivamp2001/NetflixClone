import React from 'react'
import NetflixLogo from "../assets/logo.png"
import "../style/header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='container-logo'>
      <Link to={"/"}>
      <img src={NetflixLogo} alt="" />
      </Link>
     
      {
        document.URL==="http://localhost:3000/signup"?<Link to={"/"} ><button  style={{color:"white",textDecoration:"none",cursor:"pointer"}}>Login</button></Link>:
        <Link to={"/signup"} ><button  style={{color:"white",textDecoration:"none",cursor:"pointer"}}>Signup</button></Link>
      }
      
    </div>
    </>
  )
}

export default Header

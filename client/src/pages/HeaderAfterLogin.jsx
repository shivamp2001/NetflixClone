import React from 'react'
import { Link } from 'react-router-dom'
import Logoimg from "../assets/logo.png"
import "../style/headerafterlogin.css"
import {AiOutlinePoweroff} from "react-icons/ai"
import {ImSearch} from "react-icons/im"
import {toast} from "react-hot-toast"
const HeaderAfterLogin = () => {
  return (
    <div style={{color:"white"}}>
      <div className='navbar-div'>
        <nav className='header-navbar' >
          <Link to={"/home"}>
        <img src={Logoimg} alt="error" />
        </Link>
        <ul >
        <Link to={"/home"} > <li>Home</li> </Link>
        <Link to={"/tvshows"}> <li>TV Shows</li></Link>
        <Link to={"/movies"}> <li>Movies</li></Link>
        <Link to={"/latest"}> <li>Latest</li></Link>
        <Link><li>My List</li></Link>
        </ul>
        <div className='icons-header'>
          <ImSearch title='Search'/>
          {
            document.URL==="http://localhost:3000/home"?
          <Link to={"/"}><AiOutlinePoweroff style={{color:"red"}} className='logout' title='Logout' onClick={()=>toast("Logout")}/></Link>:""
          }
        </div>
        </nav>
        </div>
    </div>
  )
}

export default HeaderAfterLogin

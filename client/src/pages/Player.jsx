import React from 'react'
import video from "../assets/Samrat Prithviraj 2022 (1).mp4"
import {IoMdArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import "../style/player.css"
import {Imagebase64} from "../Components/Imageconverter"
const Player = () => {
    const navigate=useNavigate()
    
    const convert=async()=>{
      const data= await Imagebase64(video)
      console.log(data);
    }
    console.log(convert());
    
  return (
    <div className='player'>
        <div className="back">
          <IoMdArrowBack onClick={()=>navigate(-1)}/>
        </div>
      <video src={video} autoPlay loop controls></video>
    </div>
  )
}

export default Player

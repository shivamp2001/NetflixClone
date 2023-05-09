import React from 'react'
import "../style/background.css"
import backgroundimg from "../assets/backimg.jpg"
const Background = () => {
  return (
    <>
    <div>
    <div className='container'>
      <img className='netflix-backgroundimg' src={backgroundimg} alt="errr" />
    </div>
    </div>
    </>
  )
}

export default Background

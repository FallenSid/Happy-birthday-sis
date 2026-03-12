import React from 'react'
import { useState, useEffect } from 'react'
import './app.css'
import ReactConfetti from 'react-confetti'
const App = () => {
  const msg = [
    "It's your birthday sis 🥳",
    "So I to Make it Special..",
    "I Made This for You 😁",
    "Want to see? 👀",]
    const [Index, setIndex] = useState(0)
  return (
    <div className='container'>
      <ReactConfetti
      numberOfPieces={60}
      gravity={0.05}
      style={{
        position:"fixed",
        top:0,
        left:0,
        zIndex:-1,
      }}
      />
      <div className='heading'>Happy Birthday Sis 🎂</div>
      <div className="message">
        <div className="text">
        ✨<br />
        {msg[Index]}
        </div>
      </div>
      <button className='continue' onClick={()=>{setIndex((Index => Index + 1))}}>Continue..</button>
    </div>
  )
}

export default App

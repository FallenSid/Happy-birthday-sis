import { useState, useRef } from "react";
import "./app.css";
import ReactConfetti from "react-confetti";
const App = () => {
  const msg = [
    "It's your birthday sis 🥳",
    "So I to Make it Special..",
    "I Made This for You 😁",
    "Want to see? 👀",
  ];
  const directions = [
    "Turn on Lights",
    "Start Music",
    "Decorate",
    "Fly balloons",
    "Cut the Cake",
  ];
  const [Index, setIndex] = useState(0);
  const [counter, setcounter] = useState(0)

  const myRef = useRef();
  const audioRef = useRef()

  function Frame2() {
    myRef.current.style.display = "none";
  }
  function resetIndex() {
    setIndex(0);
    setcounter(0)
    console.log(counter);
  }


  if(counter==1){
    const celebrate = document.querySelector('#celebrate');
    celebrate.style.backGroundColor = "red"
  }


  console.log(Index);
  return (
    <>
      <div className="container" ref={myRef}>
        <ReactConfetti
          numberOfPieces={125}
          gravity={0.03}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="heading">Happy Birthday Sis 🎂</div>
        <div className="message">
          <div className="text">
            ✨<br />
            {msg[Index]}
          </div>
        </div>
        <button
          className="continue"
          onClick={() => {
            setIndex((Index) => Index + 1);
            console.log(Index);
            if (Index > 2) {
              Frame2();
              resetIndex();
            }
          }}
        >
          Continue..
        </button>
      </div>
      <div 
        id="celebrate"
        style={{ backgroundColor: counter >= 1 ? "#ffcfff" : "#675367" }}
      >
        <audio src="public/happy_birthday_mehak_sis.mp3" ref={audioRef} hidden loop ></audio>

        {
          counter >= 3 && (
            <div className="banner">
              <img src="public/birthday_banner.webp" alt="" />
            </div>
          )
        }
        
        <button className="btn"
        
        onClick={()=>{
          setcounter((counter)=>counter +1)
          if(counter>3){
            resetIndex()
          }
          if(counter >= 1){
            audioRef.current.play()
          }
        }}

        >{directions[counter]}</button>
      </div>
    </>
  );
};

export default App;

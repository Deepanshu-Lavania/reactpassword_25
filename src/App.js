import React, {useState} from "react";
import { NC, UC, LC, SC } from "./Data";
function App() {
  const [uppercase, setuppercase] = useState(false)
  const [lowercase, setlowercase] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [number, setnumber] = useState(false)
  const [passwordLen, setpasswordLen] = useState(10)
  const [fpass, setfpass] = useState('')
   let creatpassword=()=>{
//use of charAt ==> use to determine teh character bt index number
    // let name = "sadfadsf"
    // let finalPass =name.charAt(6)
    // console.log(finalPass);

    let finalPass = ''
    let charSet = ""
    if(uppercase || lowercase || symbols || number){
        if(uppercase){charSet=charSet+UC}
        if(lowercase){charSet = charSet+LC}
        if(number){charSet =charSet+NC}
        if(symbols){charSet =charSet+SC};
        console.log(charSet);
        for(let i=0;i<passwordLen;i++){
          finalPass =finalPass + charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        console.log(finalPass);
        setfpass(finalPass)

    }else{
      alert('plz select atleast one box')
    }
   }
   const copyPass=()=>{
    navigator.clipboard.writeText(fpass);
   }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generater</h2>
        <div className="passwordBoxin">
          <input type="text" value={fpass} readOnly /><button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label>Password Length</label>
          <input type="number" max={20} min={6} value={passwordLen} onChange={(event)=>{setpasswordLen(event.target.value)}}/>
        </div>
        <div className="passlength">
          <label>Include Uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)}/>
        </div>
        <div className="passlength">
          <label>Include Lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
        </div>
        <div className="passlength">
          <label>Include symbol letters</label>
          <input type="checkbox" checked={symbols} onChange={()=>setsymbols(!symbols)}/>
        </div>
        <div className="passlength">
          <label>Include number letters</label>
          <input type="checkbox" checked={number} onChange={()=>setnumber(!number)}/>
        </div>
        <button className="btn" onClick={creatpassword}>Generate password</button>
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Counter from './Counter';
import Conditional from './Conditional';

function Routing() {

  const [bg,setbg]=useState('black')
  const[col,setcol]=useState('white')

  const handlebg=()=>{
    if(bg=='black'){
      setbg('white')
      setcol('black')
    }
    else{
      setbg('black')
      setcol('white')
    }
    
  }
  return (
    <div style={{backgroundColor:bg, color:col}}>

      <button onClick={handlebg}><img src="https://static.vecteezy.com/system/resources/thumbnails/011/888/096/small/neumorphism-toggle-switch-button-free-png.png" alt="" /></button>
      



      
      <h1>Welcome to React Learn Series...</h1>
        <Link to="/form"><button >Form</button></Link>
        <Link to="/counter"><button >Counter</button></Link>
        <Link to="/conditional"><button >Conditional</button></Link>
        <Link to="/stopwatch"><button >Stopwatch</button></Link>
        <Link to="/object"><button >Object</button></Link>
        <Link to="/quiz"><button >Quiz</button></Link>

        
      
    </div>
  )
}

export default Routing;

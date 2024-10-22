import React, { useState } from 'react'

function Counter() {

    const [value,SetValue]=useState(0);

    function handleIncrement(){
        SetValue(value+1);
        
    }
    function handleDecrement(){
        SetValue(value-1);
        
    }
    function handleReset(){
        SetValue(0);
        
    }
    function handleRandom(){
        let random=Math.floor(10*Math.random());
        SetValue(random);
        
    }
    function handleManual(){
        let manual=prompt("Enter the value you want")
        SetValue(manual);
        
    }
  return (

   
    <div>

        <h1>{value}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleRandom}>Random</button>
        <button onClick={handleManual}>Manual</button>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter

import React, { useState } from 'react'

function StopWatch() {

    const [time,setTime]=useState(0.0);

    function handleTime(){

        setInterval(setTime,1000)
        setTime(time+0.1)
    }

  return (
    <div>

        <h1>{time}</h1>
        <button onClick={handleTime}>Start</button>
      
    </div>
  )
}

export default StopWatch

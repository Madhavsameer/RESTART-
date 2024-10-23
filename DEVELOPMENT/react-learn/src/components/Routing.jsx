import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Counter from './Counter';
import Conditional from './Conditional';

function Routing() {

  
  return (
    <div>

      
      <h1>Welcome to React Learn Series...</h1>
        <Link to="/form"><button >Form</button></Link>
        <Link to="/counter"><button >Counter</button></Link>
        <Link to="/conditional"><button >Conditional</button></Link>
        <Link to="/stopwatch"><button >Stopwatch</button></Link>

        
      
    </div>
  )
}

export default Routing;

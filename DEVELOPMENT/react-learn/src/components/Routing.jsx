import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Counter from './Counter';
import Conditional from './Conditional';

function Routing() {
  return (
    <div>
        <Link to="/form"><button >Form</button></Link>
        <Link to="/counter"><button >Counter</button></Link>
        <Link to="/conditional"><button >Conditional</button></Link>

        
      
    </div>
  )
}

export default Routing;

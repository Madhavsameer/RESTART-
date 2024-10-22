import React from 'react'

function Conditional(props) {

  let user;

  let message;
  if(props.isLoggedIn){
   user= "sameer"
    message=`Welcome ${user}`
  }
  else{
    message="Login to continue"
  }

  

    
    

    
  return (
    <div>

      <h1>{message}</h1>
      
      
        

        


      
    </div>
  )
}

export default Conditional

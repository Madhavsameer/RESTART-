import React, { useState } from 'react'

function ObjectData() {

    const users=[
        {
            name:"Madhav",
            age:50,
            isStudent:true
        },
        {
            name:"Sameer",
            age:40,
            isStudent:false
        }
    ]

  
  return (
    <div>
        {users.map( function(user,index){
            return <div id='data' key={index}>
                <h1>UserName: {user.name}</h1>
                <h1>Age: {user.age}</h1>
                <h1>{user.isStudent}</h1>
            </div>

        })}
       
        
        
      
    </div>
  )
}

export default ObjectData

const axios = require('axios');

console.log("Hey")
let user="Aditya";
function welcome(){
    console.log("Welcome "+user)
    
}
setInterval(welcome, 5000);

async function getdata(){

    try {

        let rawdata =await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await rawdata.json();
    console.log(data)


        
    } catch (error) {
        console.error("Error fetching data")
        
    }
    
}

getdata();


axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error("Error fetching data", error));

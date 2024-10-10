
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API
fetch(apiUrl)
    .then(response => response.json())  // Parse the JSON data from the response
    .then(data => console.log(data))     // Log the fetched data
    .catch(error => console.error('Error:', error)); // Handle any errors

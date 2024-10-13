async function fetchData() {
    try {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!rawData.ok) {
            throw new Error(`Network response was not ok: ${rawData.statusText}`);
        }

        const data = await rawData.json();
        displayPosts(data); // Call function to display posts

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        // Create a new div for each post
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        // Create an h2 element for the title
        const title = document.createElement('h2');
        title.textContent = post.title; // Set title text

        // Create a p element for the body
        const body = document.createElement('p');
        body.textContent = post.body; // Set body text

        // Append title and body to the postDiv
        postDiv.appendChild(title);
        postDiv.appendChild(body);

        // Append the postDiv to the postsContainer
        postsContainer.appendChild(postDiv);
    });
}

// Call the fetchData function to load posts on page load
fetchData();

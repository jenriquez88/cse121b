// Function to search users 
async function searchUsers() {
// Get the search input value and convert it to lowercase for case-insensitive comparison
    const search = document.getElementById("input").value.toLowerCase();
// Fetch user data 
    const response = await fetch("https://jsonplaceholder.org/users");
    const data = await response.json();
// Filter users based on the search criteria
    const filteredUsers = data.filter(user => {
// Concatenate user details into a string and convert to lowercase
        const userData = `${user.firstname} ${user.lastname} ${user.email} ${user.company.name} ${user.address.city} ${user.address.zipcode}`.toLowerCase();
// Check if the concatenated string includes the search term        
        return userData.includes(search)
    });
// Display the filtered results
    displayResults(filteredUsers);
}

// Function to display search results
function displayResults(users) {
// Get the container where user results will be displayed
    const userResultsContainer = document.getElementById("results");
// Clear previous results from the container
    userResultsContainer.innerHTML = "";
// Iterate through each user and create a user card with relevant details    
    users.forEach(user => {
// Create a div element for each user card and add a CSS class
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
// Populate the user card with user details
        userCard.innerHTML = `
            <h3>${user.firstname} ${user.lastname}</h3>
            <p>Birthday: ${user.birthDate}</p>
            <p>Company: ${user.company.name}</p>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.city}, ${user.address.zipcode}</p>
            <p>Website: ${user.website}</p>`;
// Append the user card to the results container
        userResultsContainer.appendChild(userCard);
    });
}
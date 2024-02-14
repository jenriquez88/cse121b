async function searchUsers() {
    const search = document.getElementById("nameInput").value.toLowerCase();
//    const gender = document.getElementById("genderInput").value.toLowerCase();
//    const state = document.getElementById("stateInput").value.toLowerCase();


    const response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10");
    const data = await response.json();

    const filteredUsers = data.data.filter(user => {
        const userName = `${user.firstname} ${user.lastname}  ${user.birthday} ${user.gender} ${user.birthday} ${user.address.city} ${user.address.country}`.toLowerCase();
        return userName.includes(search) //&& user.gender.toLowerCase().includes(gender) && user.address.state.toLowerCase().includes(state);
    });

    displayResults(filteredUsers);
}

function displayResults(users) {
    const userResultsContainer = document.getElementById("userResults");
    userResultsContainer.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <h3>${user.firstname} ${user.lastname}</h3>
            <p>Birthday: ${user.birthday}</p>
            <p>Gender: ${user.gender}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.city}, ${user.address.country}</p>
        `;

        userResultsContainer.appendChild(userCard);
    });
}
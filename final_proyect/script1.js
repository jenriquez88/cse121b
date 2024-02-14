const input = document.querySelector("#searchInput");
const userList = document.querySelector('#users');
let users = [];

window.addEventListener("DOMContentLoaded", async () => {
    userList.innerHTML = '<h1>Loading...</h1>';
    const data = await loadUsers();
    users = data.data
    renderUsers(users);

})

async function loadUsers() {
    const response = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1000');
    return await response.json();

}
input.addEventListener("keyup", e => {
    const newUsers = users.filter(user => user.firstname.toLowerCase().includes(input.value.toLowerCase()));
    renderUsers(newUsers);
})


const createUserItems = users =>
    users.map(user => 
    `<li>${user.firstname} ${user.lastname}`).join('');



function renderUsers(users) {
    const itemString = createUserItems(users);
    userList.innerHTML = itemString
}
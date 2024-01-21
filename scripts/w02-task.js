/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jorge Enriquez'; 
const currentYear = new Date().getFullYear(); //'2024'
const profilePicture = 'images/picture.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ['Pizza ', 'Ice Cream ', 'Burgers ', 'Tacos ', 'Tamales '];
foodElement.innerHTML = favFoods;
let newFood = 'Chocolate';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




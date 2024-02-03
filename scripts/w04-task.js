/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector('#photo');
/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: 'Jorge Enriquez',

    photo: {
        src: 'images/picture.jpg',
        alt: 'My profile picture'
    },

    favoriteFoods: [
        'Ice Cream ',
        'Burgers ',
        'Tacos ',
        'Tamales',
        'Pizza '],

    hobbies: [
        'Squash',
        'Netflix',
        'Hiking',
        'Eating'],

    placesLived: []

}
myProfile.placesLived.push(
    {
        place: 'Merida , Mexico',
        length: '2 years'
    },
    {
        place: 'Cuernavaca , Mexico',
        length: '6 years'
    },
    {
        place: 'Minnesota , USA',
        length: '2 years'
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;
/*another option
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;*/

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {

    let dt = document.createElement('dt');
    dt.textContent = item.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = item.length;
    document.querySelector('#places-lived').appendChild(dd);
})


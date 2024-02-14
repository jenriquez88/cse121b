/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElements = document.getElementById('temples');
let templeList = [];
const url = ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElements.appendChild(articleElement);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async ()=> {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
};
/* reset Function */
function reset() {
    templesElements.innerHTML = '';
}
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const sortBy = document.getElementById('filtered').value;
    switch (sortBy) {
        case 'utah':
            displayTemples(temples.filter(temple =>temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple=>!temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple=> new Date(temple.dedicated) < new Date(1950,0,1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
    }   
}
/* Event Listener */
document.querySelector('#filtered').addEventListener('change',()=>{
    filterTemples(templeList);
});

getTemples();
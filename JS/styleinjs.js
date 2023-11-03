document;
const sections = document.querySelectorAll('section');
for ( const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'
}

// const places = document.getElementById('places-container');
// places.style.backgroundColor = 'yellow';

const greenBg = document.getElementById('places-container');
greenBg.classList.add('green-bg');

const Places = document.getElementById('place-list');
const newPlace = document.createElement('li');
const newPlace2 = document.createElement('li')
newPlace.innerText = 'lal bagh'
Places.appendChild(newPlace)



// const placesContainer = document.getElementById('places-container');
// const child = document.createElement('h2');
// child.innerText = 'Dynamic heading with JavaScript';
// placesContainer.appendChild(child);
// const placeList = document.getElementById('place-list');
// const newUl = document.createElement('ul');
// newUl.innerHTML = '<li> I did not got any places of them</li>';
// placeList.appendChild(newUl);
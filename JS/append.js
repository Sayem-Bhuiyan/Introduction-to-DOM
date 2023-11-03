const placeList = document.getElementById('place-list');
const newLi = document.createElement('li');
const li2 = document.createElement('li');
li2.innerText = 'katabon';
newLi.innerText = 'Salbon';
placeList.appendChild(newLi);
placeList.appendChild(li2);
li2.style.color = 'red';
// another list
const li3 = document.createElement('li');
li3.innerText = 'Shahbag';
placeList.appendChild(li3)


const section = document.querySelector('body');
const newSection = document.createElement('footer')
newSection.innerHTML = '<footer> This is the footer added by JS</footer>'
section.appendChild(newSection);

// adding a new ul in fruits container
const furitsContainer = document.getElementById('fruits-container');
const newUlList = document.createElement('h1');
newUlList.innerText = 'New Heading'
furitsContainer.appendChild(newSection);


// where to add
const mainContainer = document.getElementById('main-container');
// what oto be added
const anotherSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
h1.style.color = 'black';
anotherSection.appendChild(h1);

const ul = document.createElement('ul');
// first li
const firstLI = document.createElement('li');
firstLI.innerText = 'Biriyani';
ul.appendChild(firstLI);
// second li
const secondLi = document.createElement('li')
secondLi.innerText = 'Gurur Gustho';
ul.appendChild(secondLi);
// third li
const thirdLi = document.createElement('li');
thirdLi.innerText = 'Alu Baji';
ul.appendChild(thirdLi);
// fourth li
const fourthLi = document.createElement('li');
fourthLi.innerText = 'Korola baji'
ul.appendChild(fourthLi);

// append ul to another secton
anotherSection.appendChild(ul);
// append another secton to the main contaienr
mainContainer.appendChild(anotherSection);

// style to the new another section
anotherSection.style.backgroundColor = 'aqua';
anotherSection.style.padding = '10px';
anotherSection.style.textAlign = 'center';

// another section a
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dress Heading</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>T-Shirt</li>
    <li>Jacket</li>
</ul>
`
mainContainer.appendChild(sectionDress);
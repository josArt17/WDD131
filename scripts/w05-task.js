const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const contTemples = document.querySelector('#cont-temples');

const today = new Date();
const oLastModif = new Date(document.lastModified);

const menuButton = document.getElementById('menuButton');
const listMenu = document.getElementById('listMenu');

const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');

let templeList = [];

//ADDING TEMPLE API FROM BYU-I
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        data.forEach(element => {
            templeList.push(element);
        })
        displayTemples(templeList)
    }
};

const displayTemples = (temples) =>{
    temples.forEach(element => {
            let templeName = element.templeName;
            let location = element.location;
            let imgTemple = element.imageUrl;
            let dedicated = element.dedicated;
            let area = element.area;

            let contData = document.createElement('div');
            contData.classList.add("cont-data");

            let contName = document.createElement('div');
            contName.classList.add('cont-name');

            let name = document.createElement('p');
            name.innerText = templeName;

            let contInfoTemple = document.createElement('div');
            contInfoTemple.classList.add("cont-temple-info");

            let locationTemple = document.createElement('p');
            locationTemple.innerHTML = `<span>Location: ${location}</span>`;

            let dedicatedTemple = document.createElement('p');
            dedicatedTemple.innerHTML = `<span>Dedicated: ${dedicated}</span>`;

            let areaTemple = document.createElement('p');
            areaTemple.innerHTML = `<span>Size: ${area} sq ft</span>`;


            let contImg = document.createElement('div');
            contImg.classList.add("cont-img");

            let img = document.createElement('img');
            img.setAttribute('src', imgTemple);
            img.setAttribute('alt', 'A temple from: '+location);

            

            contName.appendChild(name);
            contInfoTemple.appendChild(locationTemple);
            contInfoTemple.appendChild(dedicatedTemple);
            contInfoTemple.appendChild(areaTemple);
            contImg.appendChild(img);

            contData.appendChild(contImg);
            contData.appendChild(contName);
            contData.appendChild(contInfoTemple);
            

            contTemples.appendChild(contData);
    });
};

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", function(){
    mobileMenu();
});

navLink.forEach(n => n.addEventListener("click", closeMenu));

function reset(){
    contTemples.innerHTML = "";
}

getTemples();


/* filterTemples Function */

const filterTemples = (temples, filter) => {
    reset();
    console.log(filter);

    switch (filter) {
        
        case "utah":
            let utahTemple = [];
            temples.forEach(element =>{
                let location = element.location.toLowerCase();
                if (location.includes(filter)) {
                    utahTemple.push(element);
                        
                }
            });
            displayTemples(utahTemple);
            break;
        
        case "notutah":
            let notUtahTemple = [];
            temples.forEach(element =>{
                let location = element.location.toLowerCase();
                if (!location.includes("utah")) {
                    notUtahTemple.push(element);
                        
                }
            });
            displayTemples(notUtahTemple);
            break;
        case "older":
            
            let olderTemple = [];
            const comparDate = new Date(1900, 0, 1);

            temples.forEach(element =>{
                let date = new Date(element.dedicated);
                if (date < comparDate) {
                    olderTemple.push(element);
                }

            });
            displayTemples(olderTemple);
            break;
        case "new":
            
            let newTemple = [];
            const newTempleDate = new Date(2000, 0, 1);

            temples.forEach(element =>{
                let date = new Date(element.dedicated);
                if (date > newTempleDate) {
                    newTemple.push(element);
                }

            });
            displayTemples(newTemple);
            break;
        case "large":
            
            let largeTemple = [];

            temples.forEach(element =>{
                let area = element.area;

                if (area > 90000) {
                    largeTemple.push(element);
                }

            });
            displayTemples(largeTemple);
            break;
        case "small":
            
            let smallTemple = [];

            temples.forEach(element =>{
                let area = element.area;

                if (area < 10000) {
                    smallTemple.push(element);
                }

            });
            displayTemples(smallTemple);
            break;
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

let currentDate = document.querySelector('#currentyear');
currentDate.innerHTML =  `© <span class="highlight">${today.getFullYear()} Jose Angel Arteaga Machuca Mexico</span>`;

let lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${oLastModif}</span>`;

homeButton.addEventListener('click', function(){
    reset();
    getTemples();
});

oldButton.addEventListener('click', function(){
    let filter = 'older';
    filterTemples(templeList, filter);
});

newButton.addEventListener('click', function(){
    let filter = 'new';
    filterTemples(templeList, filter);
});

largeButton.addEventListener('click', function(){
    let filter = 'large';
    filterTemples(templeList, filter);
});

smallButton.addEventListener('click', function(){
    let filter = 'small';
    filterTemples(templeList, filter);
});
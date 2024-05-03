const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const contTemples = document.querySelector('#cont-temples');

const today = new Date();
const oLastModif = new Date(document.lastModified);

const menuButton = document.getElementById('menuButton');
const listMenu = document.getElementById('listMenu');

//ADDING TEMPLE API FROM BYU-I
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        data.forEach(element => {
            let templeName = element.templeName;
            let location = element.location;
            let imgTemple = element.imageUrl;

            let contData = document.createElement('div');
            contData.classList.add("cont-data");

            let contImg = document.createElement('div');
            contImg.classList.add("cont-img");

            let img = document.createElement('img');
            img.setAttribute('src', imgTemple);
            img.setAttribute('alt', 'A temple from: '+location);

            let contName = document.createElement('div');
            contName.classList.add('cont-name');

            let name = document.createElement('p');
            name.innerText = templeName;

            contName.appendChild(name);
            contImg.appendChild(img);

            contData.appendChild(contImg);
            contData.appendChild(contName);

            contTemples.appendChild(contData);

        })
    }
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


let currentDate = document.querySelector('#currentyear');
currentDate.innerHTML =  `© <span class="highlight">${today.getFullYear()} Jose Angel Arteaga Machuca Mexico</span>`;

let lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${oLastModif}</span>`;

getTemples();
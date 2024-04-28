const today = new Date();
const oLastModif = new Date(document.lastModified);

const menuButton = document.getElementById('menuButton');
const listMenu = document.getElementById('listMenu');


let currentDate = document.querySelector('#currentyear');
currentDate.innerHTML =  `© <span class="highlight">${today.getFullYear()} Jose Angel Arteaga Machuca Mexico</span>`;

let lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${oLastModif}</span>`;

menuButton.addEventListener('click', function() {
    let navBar = document.querySelector('#navLinks');
    navBar.classList.toggle('active');
});
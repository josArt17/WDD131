const today = new Date();
const oLastModif = new Date(document.lastModified);

const selectProduct = document.querySelector('#productName');

const loadProduct = (array) => {
    array.forEach(element => {
        let idProduct = element.id;
        let nameProduct = element.name;
        let avgProduct = element.averagerating;

        selectProduct.innerHTML += `<option value="${idProduct}">${nameProduct}</option>`;
    });
}

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
];

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let reviewCount = localStorage.getItem('reviewCount');

   
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

 
    reviewCount += 1;


    localStorage.setItem('reviewCount', reviewCount);


    document.getElementById('reviewCount').value = reviewCount;
            
    const form = event.target;
            
    const formData = new FormData(form);
            
    const queryString = new URLSearchParams(formData).toString();
            
    const newAction = `${form.action}?${queryString}`;

    window.location.href = newAction;
});


loadProduct(products);




let currentDate = document.querySelector('#currentyear');
currentDate.innerHTML =  `© <span class="highlight">${today.getFullYear()} Jose Angel Arteaga Machuca Mexico</span>`;

let lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${oLastModif}</span>`;
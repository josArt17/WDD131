let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    showSlide(index);
});

document.querySelector('.next').addEventListener('click', () => {
    index++;
    showSlide(index);
});

const  getInfoTravel = (idTravel) => {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let id = element.id;
            let place = element.place;
            let cost = element.amount;
            let places = element.available;

            if (id === idTravel) {
                createModal(place, cost, places);
            }
        })
    })
}


function createModal(place, amount, places ) {
    // Crear elementos del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let formReserve = document.createElement('form');
    formReserve.setAttribute('method', 'get');
    formReserve.setAttribute('action', 'reserve.html');

    let titleTravel = document.createElement('h3');
    titleTravel.innerText = `Great choice! ${place}`;

    let contInfoTravel = document.createElement('div');
    contInfoTravel.classList.add('contInfoTravel');

    let iconAirPlane = document.createElement('i');
    iconAirPlane.classList.add('bi', 'bi-airplane', 'iconModalTable');

    let textTravel = document.createElement('p');
    textTravel.innerText = place;
    textTravel.classList.add('text-travel-table');

    let iconPerson = document.createElement('i');
    iconPerson.classList.add('bi', 'bi-person-check-fill', 'iconModalTable');

    let textPerson = document.createElement('p');
    textPerson.innerText = 2;
    textPerson.classList.add('text-travel-table');

    let iconCost = document.createElement('i');
    iconCost.classList.add('bi', 'bi-currency-dollar', 'iconModalTable');

    let textCost = document.createElement('p');
    textCost.innerText = amount;
    textCost.classList.add('text-travel-table');


    let submitButton = document.createElement('input');
    submitButton.classList.add('submitButton');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Make reservation');

    let hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'placesAvailable');
    hiddenInput.value = places;


    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButtonModal');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal(modalOverlay);
    });

    let contButtonsModal = document.createElement('div');
    contButtonsModal.classList.add('contButtonsModal');

    modalContent.appendChild(formReserve);

    formReserve.appendChild(titleTravel);
    formReserve.appendChild(contInfoTravel);
    formReserve.appendChild(contButtonsModal);
    formReserve.appendChild(hiddenInput);

    contInfoTravel.appendChild(iconAirPlane);
    contInfoTravel.appendChild(textTravel);
    contInfoTravel.appendChild(iconPerson);
    contInfoTravel.appendChild(textPerson);
    contInfoTravel.appendChild(iconCost);
    contInfoTravel.appendChild(textCost);

    contButtonsModal.appendChild(closeButton);
    contButtonsModal.appendChild(submitButton);
    modalOverlay.appendChild(modalContent);
    // Añadir el fondo del modal al contenedor del modal
    document.getElementById('modal-container').appendChild(modalOverlay);

    // Mostrar el modal
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
}

function closeModal(modalOverlay) {
   
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.remove();
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const reserveButtons = document.querySelectorAll('.button-reserve');

    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonId = event.target.id;
            getInfoTravel(buttonId);
        });
    });
});

showSlide(index);
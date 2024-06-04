document.addEventListener('DOMContentLoaded', () => {
    const displayParameterDiv = document.getElementById('display-parameter');

    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);
        return params;
    };

    const displayParamValue = () => {
        const params = getQueryParams();
        let placesAvailable = params.get('placesAvailable');

        // Convertir el valor a número y restar 2
        if (placesAvailable !== null) {
            placesAvailable = parseInt(placesAvailable, 10) - 2;
        }

        if (!isNaN(placesAvailable)) {
            displayParameterDiv.innerHTML = `<h1>Confirm your reservation, only ${placesAvailable} more available</h1>`;
        } else {
            displayParameterDiv.innerHTML = '<h1>No se ha encontrado el parámetro placesAvailable en la URL o no es un número.</h1>';
        }
    };

    displayParamValue();
});


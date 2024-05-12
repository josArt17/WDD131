const apiWeatherKey = 'TCYHB5yLy2xs5FkPwJk9fvrg30NCRNFp';

const url = 'https://api.tomorrow.io/v4/weather/forecast?location=';

const contWeather = document.querySelector('#cont-weather');

const today = new Date();
const oLastModif = new Date(document.lastModified);

const getWeather = async () => {
    const location = [20.68574, -88.56895];
    let fetchUrl = `${url}${location}&apikey=${apiWeatherKey}`;

    const response = await fetch(fetchUrl);
    if (response.ok) {
        const data = await response.json();
        let temp = data.timelines.daily[0].values.temperatureAvg;
        let windSpeed = data.timelines.daily[0].values.windSpeedAvg;
        let windGust = data.timelines.daily[0].values.windGustAvg;
        let code = data.timelines.daily[0].values.weatherCodeMax;


        let table = document.createElement('table');
        table.classList.add('table');

        let tbody = document.createElement('tbody');

        let trowTemp = document.createElement('tr');
        let tdTempStrong = document.createElement('td');
        tdTempStrong.classList.add('table-title-row');
        tdTempStrong.innerHTML = `<strong>Temperature:</strong>`;
        let tdTemp = document.createElement('td');
        tdTemp.classList.add('table-data-row');
        tdTemp.innerText = `${temp} °C`;

        let trowWind = document.createElement('tr');
        let tdWindStrong = document.createElement('td');
        tdWindStrong.classList.add('table-title-row');
        tdWindStrong.innerHTML = `<strong>Wind:</strong>`;
        let tdWind = document.createElement('td');
        tdWind.classList.add('table-data-row');
        tdWind.innerText = `${windSpeed} km/h`;

        let trowWindChill = document.createElement('tr');
        let tdWindChillStrong = document.createElement('td');
        tdWindChillStrong.classList.add('table-title-row');
        tdWindChillStrong.innerHTML = `<strong>Wind Chill:</strong>`;
        let tdWindChill = document.createElement('td');
        tdWindChill.classList.add('table-data-row');
        tdWindChill.innerText = `${windGust} °C`;

        contWeather.appendChild(table);
        table.appendChild(tbody);
        tbody.appendChild(trowTemp);
        tbody.appendChild(trowWind);
        tbody.appendChild(trowWindChill);

        trowTemp.appendChild(tdTempStrong);
        trowTemp.appendChild(tdTemp);

        trowWind.appendChild(tdWindStrong);
        trowWind.appendChild(tdWind);

        trowWindChill.appendChild(tdWindChillStrong);
        trowWindChill.appendChild(tdWindChill);
    }
}

let currentDate = document.querySelector('#currentyear');
currentDate.innerHTML =  `© <span class="highlight">${today.getFullYear()} Jose Angel Arteaga Machuca Mexico</span>`;

let lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `<span>Last Modification: ${oLastModif}</span>`;

getWeather();


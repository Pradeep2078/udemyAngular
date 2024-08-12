'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?status=true`);
    request.send();

    request.addEventListener('load', function () {
        // Parse the response and handle potential errors
        let data;
        try {
            data = JSON.parse(this.responseText);
        } catch (e) {
            console.error('Error parsing JSON response:', e);
            return;
        }

        // Check if we received data and it is in the expected format
        if (!Array.isArray(data) || data.length === 0) {
            console.error('No data found for the requested country');
            return;
        }

        const countryData = data[0];

        // Ensure the properties exist before accessing them
        const name = countryData.name?.common || 'Unknown';
        const region = countryData.region || 'Unknown';
        const population = countryData.population ? (+countryData.population / 1000000).toFixed(1) : 'Unknown';
        const languages = countryData.languages ? Object.values(countryData.languages).join(', ') : 'Unknown';
        const currencies = countryData.currencies ? Object.values(countryData.currencies).map(c => c.name).join(', ') : 'Unknown';
        const flagUrl = countryData.flags?.png || '';

        const html = `
            <article class="country">
              <img class="country__img" src="${flagUrl}" />
              <div class="country__data">
                <h3 class="country__name">${name}</h3>
                <h4 class="country__region">${region}</h4>
                <p class="country__row"><span>👫</span>${population}</p>
                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${currencies}</p>
              </div>
            </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });

    request.addEventListener('error', function () {
        console.error('Request failed');
    });
}

getCountryData('india');
getCountryData('china');
getCountryData('usa');

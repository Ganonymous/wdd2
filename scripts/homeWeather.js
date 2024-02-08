const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.59&lon=-122.40&units=imperial&appid=6750484a3b1be434cd571a9d09a0e377";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error){
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let desc = data.weather[0].description
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", desc);
    weatherDesc.textContent = `${desc}`;
}

apiFetch();
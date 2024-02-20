const url1 = "https://api.openweathermap.org/data/2.5/";
const url2 = "?lat=45.59&lon=-122.40&units=imperial&appid=6750484a3b1be434cd571a9d09a0e377"
const todayElement = document.querySelector("#today-weather");
const forecastElement = document.querySelector("#forecast");

async function todayFetch() {
    try{
        const url = `${url1}weather${url2}`
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayToday(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error){
        console.error(error);
    }
}

function displayToday(data) {
    todayElement.innerHTML = "";
    const label = document.createElement("h3");
    label.textContent = "Current Weather";
    let desc = data.weather[0].description;
    const icon = document.createElement("img");
    icon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    icon.setAttribute("alt", desc);
    const detail = document.createElement("p");
    detail.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
    todayElement.appendChild(label);
    todayElement.appendChild(icon);
    todayElement.appendChild(detail);
}

async function forecastFetch() {
    try{
        const url = `${url1}forecast${url2}`
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error){
        console.error(error);
    }
}

function displayForecast(data) {
    const today = new Date();
    const day1 = new Date(today.valueOf() + 864e5);
    const day2 = new Date(today.valueOf() + (2 * 864e5));
    const day3 = new Date(today.valueOf() + (3 * 864e5));
    const day1Entries = data.list.filter((entry) => new Date(entry.dt_txt).getDate() == day1.getDate());
    const day2Entries = data.list.filter((entry) => new Date(entry.dt_txt).getDate() == day2.getDate());
    const day3Entries = data.list.filter((entry) => new Date(entry.dt_txt).getDate() == day3.getDate());
    displayDay(day1Entries);
    displayDay(day2Entries);
    displayDay(day3Entries);
}

function displayDay(entries) {
    const date = new Date(entries[0].dt_txt);
    let minTemp = 999;
    let maxTemp = -999;
    entries.forEach((entry) =>{
        if(entry.main.temp < minTemp) minTemp = entry.main.temp;
        if(entry.main.temp > maxTemp) maxTemp = entry.main.temp;
    })
    const div = document.createElement("div");
    const label = document.createElement("h4");
    label.textContent = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    const max = document.createElement("p");
    max.innerHTML = `High: ${maxTemp}&deg;F`;
    const min = document.createElement("p");
    min.innerHTML = `Low: ${minTemp}&deg;F`;

    div.appendChild(label);
    div.appendChild(max);
    div.appendChild(min);
    forecastElement.appendChild(div);
}


todayFetch();
forecastFetch();
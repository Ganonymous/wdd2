const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    let response = await fetch(url);
    let data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const birthday = document.createElement("p");
        const birthplace = document.createElement("p");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthday.textContent = `Date of Birth: ${prophet.birthdate}`;

        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${fullName.textContent}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "330");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();
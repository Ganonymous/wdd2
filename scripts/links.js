const baseURL = "https://ganonymous.github.io/wdd230/";
const linksURL = "data/links.json";
const activitiesList = document.querySelector("#activities");

async function getLinks() {
    const response = await fetch(`${baseURL}${linksURL}`);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = ((data) => {
    data.weeks.forEach((week) => {
        const li = document.createElement("li");
        let liString = `${week.week}: `;
        if (week.links.length > 0){
            week.links.forEach((linkData) => {
                liString += `<a href="${linkData.url}">${linkData.title}</a> | `
            })
            liString = liString.slice(0, -3);
        }
        li.innerHTML = liString;
        activitiesList.appendChild(li);
    })
});

getLinks();

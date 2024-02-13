const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const display = document.querySelector("#directory");
const listURL = "data/members.json";

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})

async function GetMemberList() {
    const response = await fetch(listURL);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {
    data.members.forEach((member) => {
        const entry = document.createElement("section");
        entry.classList.add("member");

        const img = document.createElement("img");
        img.setAttribute("src", `images/${member.image}`);
        img.setAttribute("alt", member.name);
        entry.appendChild(img);

        const nameSpan = document.createElement("span");
        nameSpan.innerHTML = `${member.name} <img src="images/${member.membership}.svg" alt="${member.membership}" width="20" height="20">`;
        entry.appendChild(nameSpan);

        const address = document.createElement("p");
        address.textContent = member.address;
        entry.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        entry.appendChild(phone);

        const site = document.createElement("a");
        site.setAttribute("href", `https://www.${member.website}`);
        site.textContent = member.website;
        entry.appendChild(site);

        display.appendChild(entry);
    })
}

GetMemberList();
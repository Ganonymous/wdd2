const listURL = "data/members.json";
const spotlights = document.querySelectorAll(".spotlight");

async function GetMemberList() {
    const response = await fetch(listURL);
    const data = await response.json();
    sortMembers(data);
}

function sortMembers(data) {
    const spotlightMembers = data.members.filter((member) => (member.membership == "gold" || member.membership == "silver"));
    createSpotlights(spotlightMembers);
}

function createSpotlights(options) {
    let emptySpotlightAvailable = true;
    spotlights.forEach((spotlight) => {
        if(emptySpotlightAvailable && Math.floor(Math.random() * 4) == 0) {
            emptySpotlightAvailable = false;
        } else {
            const spotlightBusiness = options[Math.floor(Math.random() * options.length)];
            if(spotlightBusiness !== null) {
                options = options.filter((option) => option != spotlightBusiness);
                const businessName = spotlightBusiness.name;
                spotlight.replaceChildren();
                const img = document.createElement("img");
                img.setAttribute("src", `images/${spotlightBusiness.image}`);
                img.setAttribute("alt", businessName);
                spotlight.appendChild(img);
                
                const business = document.createElement("div");
                business.classList.add("business");
                const h2 = document.createElement("h2");
                h2.textContent = businessName;
                business.appendChild(h2);
                const address = document.createElement("p");
                address.textContent = spotlightBusiness.address;
                business.appendChild(address);
                const phone = document.createElement("a");
                phone.textContent = spotlightBusiness.phone;
                business.appendChild(phone);
                const website = document.createElement("a");
                website.setAttribute("href", `https://www.${spotlightBusiness.website}`);
                website.textContent = spotlightBusiness.website;
                business.appendChild(website);
                spotlight.appendChild(business);
            }
        }
    })
}

GetMemberList();
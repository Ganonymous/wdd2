const lastVisitElement = document.querySelector('#lastVisit');

let lastVisit = localStorage.getItem("wddCCLastVisit") || Date.now();
let outputString;
if(lastVisit == Date.now()){
    outputString = "Welcome! Let us know if you have any questions."
} else {
    let today = Date.now();
    let timeSince = today - lastVisit;
    let daysSince = Math.floor(timeSince / (1000 * 60 * 60 * 24));

    switch (daysSince){
        case 0:
            outputString = "Back so soon! Awesome!";
            break;
        case 1:
            outputString = "You last visited 1 day ago.";
            break;
        default:
            outputString = `You last visited ${daysSince} days ago`
    }
}

lastVisitElement.innerHTML = outputString;
localStorage.setItem("wddCCLastVisit", Date.now());
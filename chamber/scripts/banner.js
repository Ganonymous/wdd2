const today = new Date();
const closeBtn = document.querySelector("#banner-close");
const banner = document.querySelector("#banner");

closeBtn.addEventListener("click", () => {
    banner.classList.add("hide");
})

if (1 > today.getDay() || today.getDay() > 3 ) {
    banner.classList.add("hide");
}
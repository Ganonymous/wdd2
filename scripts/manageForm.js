const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pass2.addEventListener("focusout", matchPass);

function matchPass() {
    if(pass1.value !== pass2.value) {
        message.textContent = "Passwords must match!";
        message.classList.remove("hide");
        pass1.value = "";
        pass2.value = "";
        pass1.focus();
    } else {
        message.classList.add("hide");
    }
}
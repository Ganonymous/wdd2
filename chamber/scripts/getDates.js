document.querySelector('#year').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;
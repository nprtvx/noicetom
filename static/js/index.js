// index dot js
const popeye = document.createElement('a');
popeye.setAttribute('href', '/noicetom/popeye');
popeye.textContent = 'popeye';
popeye.addEventListener('click', () => {
    popeye.textContent = 'popeye the developer';
    popeye.style.display = 'flex';
});
document.body.append(popeye);

const nprtvx = document.getElementById("nprtvx");

nprtvx.addEventListener("click", () => {
    nprtvx.style.backgroundColor = "#26111992";
    nprtvx.style.width = "26px";
    nprtvx.style.height = "26px";
    nprtvx.style.border = "2px solid";
    nprtvx.style.borderRadius = "26px";
});


    
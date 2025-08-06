// index dot js
const popeye = document.createElement('a');
popeye.setAttribute('href', '/noicetom/popeye');
popeye.textContent = 'popeye';
popeye.addEventListener('click', () => {
    popeye.textContent = 'popeye the developer';
    popeye.style.display = 'flex';
});
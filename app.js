const btnELement = document.querySelector('button');
const spanElement = document.querySelector('span');

btnELement.addEventListener('click', () => {
    const yourName = prompt('please enter your name:')
    spanElement.textContent = yourName; 
});
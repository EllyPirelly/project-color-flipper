const colorsSimple = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btnSimple = document.querySelector('[data-btn="btn-simple"]');
const btnHex = document.querySelector('[data-btn="btn-hex"]');

const btnHero = document.querySelector('[data-btn="btn-hero"]');
const colorDisplay = document.querySelector('[data-display="color-display"]');

function getRandomSimpleNumber() {
    return Math.floor(Math.random() * colorsSimple.length);
}

btnSimple.addEventListener('click', function () {
    const randomSimpleNumber = getRandomSimpleNumber();

    document.body.style.backgroundColor = colorsSimple[randomSimpleNumber];
    colorDisplay.textContent = colorsSimple[randomSimpleNumber];
});


/* function getRandomHexNumber() {
    return Math.floor(Math.random() * colorsHex.length);
} */

function getRandomHex() {
    const calculateRandomHex = Math.floor(Math.random() * 0xf00000 + 0xfffff).toString(16);
    return calculateRandomHex;
}

btnHex.addEventListener('click', function () {

    /* let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colorsHex[getRandomHexNumber()];
    } */

    const randomHex = `#${getRandomHex()}`;
    document.body.style.backgroundColor = randomHex;
    colorDisplay.textContent = randomHex;
});

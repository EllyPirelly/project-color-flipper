const colorsNamed = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen',];
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btnNamed = document.querySelector('[data-btn="btn-simple"]');
const btnHex = document.querySelector('[data-btn="btn-hex"]');
const btnRgba = document.querySelector('[data-btn="btn-rgba"]')
const colorDisplay = document.querySelector('[data-display="color-display"]');

function getRandomSimpleNumber() {
    return Math.floor(Math.random() * colorsNamed.length);
}

btnNamed.addEventListener('click', function () {
    const randomSimpleNumber = getRandomSimpleNumber();
    document.body.style.backgroundColor = colorsNamed[randomSimpleNumber];
    colorDisplay.textContent = colorsNamed[randomSimpleNumber];
});

function getRandomHex() {
    const calculateRandomHex = Math.floor(Math.random() * 0xf00000 + 0xfffff).toString(16);
    return calculateRandomHex;
}

btnHex.addEventListener('click', function () {
    const randomHex = `#${getRandomHex()}`;
    document.body.style.backgroundColor = randomHex;
    colorDisplay.textContent = randomHex;
});

btnRgba.addEventListener('click', function () {

    const randomRgbNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const randomAlphaNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.random(min, max).toFixed(1);
    }

    const r = randomRgbNumber(0, 255);
    const g = randomRgbNumber(0, 255);
    const b = randomRgbNumber(0, 255);
    const a = randomAlphaNumber(0, 1);
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.body.style.backgroundColor = rgba;
    colorDisplay.textContent = rgba;
});

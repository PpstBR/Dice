"use strict";
function getRandomArbitry(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const D20 = document.querySelector('.D20');
const D4 = document.querySelector('.D4');
const D6 = document.querySelector('.D6');
const D8 = document.querySelector('.D8');
const D10 = document.querySelector('.D10');
const D12 = document.querySelector('.D12');
const D100 = document.querySelector('.D100');
const dice = document.getElementById("result");
const res = document.createElement("h1");
res.className = 'roll';
const dicep = document.getElementById('perdice');
const enter = document.querySelector('.enter');
enter === null || enter === void 0 ? void 0 : enter.addEventListener('click', function () {
    const pernumber = parseInt(dicep.value) || 0;
    const persodice = getRandomArbitry(1, pernumber);
    setdicevalue(persodice);
});
function setdicevalue(dicevalue) {
    res.textContent = dicevalue.toString();
    dice === null || dice === void 0 ? void 0 : dice.appendChild(res);
}
;
D20 === null || D20 === void 0 ? void 0 : D20.addEventListener('click', function () {
    const dice20 = getRandomArbitry(1, 20);
    setdicevalue(dice20);
});
D4 === null || D4 === void 0 ? void 0 : D4.addEventListener('click', function () {
    const dice4 = getRandomArbitry(1, 4);
    setdicevalue(dice4);
});
D6 === null || D6 === void 0 ? void 0 : D6.addEventListener('click', function () {
    const dice6 = getRandomArbitry(1, 6);
    setdicevalue(dice6);
});
D8 === null || D8 === void 0 ? void 0 : D8.addEventListener('click', function () {
    const dice8 = getRandomArbitry(1, 8);
    setdicevalue(dice8);
});
D10 === null || D10 === void 0 ? void 0 : D10.addEventListener('click', function () {
    const dice10 = getRandomArbitry(1, 10);
    setdicevalue(dice10);
});
D12 === null || D12 === void 0 ? void 0 : D12.addEventListener('click', function () {
    const dice12 = getRandomArbitry(1, 12);
    setdicevalue(dice12);
});
D100 === null || D100 === void 0 ? void 0 : D100.addEventListener('click', function () {
    const dice100 = getRandomArbitry(1, 100);
    setdicevalue(dice100);
});

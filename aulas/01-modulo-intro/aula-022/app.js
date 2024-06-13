// Conversão de tipos
let score = "100";

// score = Number(score);
score = Number(score);

// console.log(score + 1);
// console.log(typeof score);

const crazyConversion = Number("Maçã");
const convertedNumber = String(97);
const booleanConversion = Boolean(10);

console.log(crazyConversion);
console.log(convertedNumber, typeof convertedNumber);
console.log(booleanConversion, typeof booleanConversion);

/*
    Valores falsy:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN

    Valores truthy:
        - Qualquer valor que não é falsy
*/

console.log(Boolean("0")); // truthy

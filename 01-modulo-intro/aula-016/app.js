// Arrays
let heroes = ["Batman", "Catwoman", "Iron Man"];
console.log(heroes);

heroes[2] = "Spider-Man";
console.log(heroes);

const ages = [31, 25, 39, 40];
console.log(ages);

const randomArray = ["Parker", "Diana", 19, 18];

// Métodos de arrays
const joinHeroes = heroes.join(", ");
const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
const pushToHeroes = heroes.push("Cyclops", "Hulk");
const popHeroes = heroes.pop();

console.log(heroes);
console.log(popHeroes);

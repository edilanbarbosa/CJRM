// O objeto Math
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.6

console.log(Math.round(area)) // Se o número for >= a .5 o arredondamento será feito para cima e se o número for < .5 o arredondamento será feito para baixo
console.log(Math.floor(area)) // Arredonda o número para baixo
console.log(Math.ceil(area)) // Arredonda o número para cima
console.log(Math.trunc(area)) // Remove o decimal de um número

// Números aleatórios
const randomNumber = Math.random()

console.log(Math.round(randomNumber * 100))

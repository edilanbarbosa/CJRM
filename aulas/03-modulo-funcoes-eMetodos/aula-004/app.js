// Argumentos, parâmetros e default parameters
const myFunc = function (name = "Leoncio", lastName = "Almeida") { // -> O valor criado entre os parênteses da declaração da função é chamado de parâmetro
  console.log(`Oi, ${name} ${lastName}!`);
};

myFunc();
myFunc("Edilan", "Barbosa"); // ->  Já o valor entre os parênteses da invocação é chamado de argumento.

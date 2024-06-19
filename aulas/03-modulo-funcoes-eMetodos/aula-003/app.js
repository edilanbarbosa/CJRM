// Function declaration - O javascript sempre vai puxar uma function declaration para o topo do arquivo, sendo assim, eu posso invocar a função antes mesmo da declaração

sayHi();

function sayHi() {
    console.log("Oi");
  }

// Function expression
const showFood = function () {
    console.log('Pizza')
}


sayHi();
sayHi();

// showFood()
// showFood()
// showFood()




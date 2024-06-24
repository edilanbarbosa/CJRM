// variáveis e escopo de bloco

const age = 21;

if (true) {
  const age = 41;
  const name = "Edilan";

  console.log(`dentro do 1 bloco de código: ${age} ${name}`);

  if (true) {
    const age = 51
    console.log(`dentro do 2 bloco de código: ${age}`)
  }
}

console.log(`fora do bloco de código: ${age} ${name}`);

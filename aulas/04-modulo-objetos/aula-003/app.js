//  cirando um objeto literal
let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: ["Empadão de Frango", "4 receitas de purê de batata"],
};

console.log(user.name);
// user.age = 32;
console.log(user.age);
user['name'] = 'Edilan'
console.log(user['name'])

const key = 'email'
console.log(user[key])

console.log(typeof user)
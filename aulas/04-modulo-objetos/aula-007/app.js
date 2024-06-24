// a palavra-chave this
let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: ["Empadão de Frango", "4 receitas de purê de batata"],
  login () {
    console.log("Usuário logado");
  },
  logout () {
    console.log("Usuário deslogado");
  },
  logBlogPosts () {
    this.blogPosts.forEach ((post) => console.log(post))
  },
};

user.logBlogPosts();

console.log(this);

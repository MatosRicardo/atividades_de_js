const nome = "Ricardo";
const sobrenome = "Ribeiro";
const idade = 22;
const peso = 68;
const altura = 1.75;
let IMC;
let anoDeNascimento;

IMC = peso / (altura * altura);
anoDeNascimento = 2024 - idade;

//Utilizando concatenação
console.log(
  nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg"
);

//Template String
console.log(`Tem ${altura} de altura e seu IMC é de ${IMC}`);

//Modo normal
console.log(nome, sobrenome, "nasceu em", anoDeNascimento);

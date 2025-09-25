//Enunciado: Crie uma função chamada saudacao que recebe um nome como parâmetro e retorna uma mensagem de boas-vindas no formato: "Olá, nome! Seja bem-vindo(a)!". Depois, teste a função chamando-a com o seu próprio nome.

function saudacao(nomeMonkey){
    return console.log("Ola, "+ nomeMonkey +" ! Seja bem-vindo(a)!!")
}

const usuario = prompt("Digite seu nome: ");
saudacao(usuario);
saudacao("Monkey D Luffy");
saudacao("Roronoa Zoro");

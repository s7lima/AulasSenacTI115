let nome = "Rodolfo"
let idade = 39;
let nota = 6;

console.log("ola mundo estou aqui MeuNome");
console.log("ola mundo estou aqui " + nome + "idade de:" + idade);

console.log("Daqui a 5 anos terei: " + (idade + 5));

//Template String

console.log(`Hoje tenho ${idade} anos e Daqiu a 5 anos terei ${idade = 5}`);
console.log(`Hoje tenho ${idade} anos e Daqiu a 5 anos terei ${idade = 5}`);

//Conditional if

if (idade > 18) {
    console.log("Voce e maior de idade")

}

// if e elseif e else

if (nota >= 7) {
    console.log(`APROVADO - nota final ${nota}`);
}

else if (nota >= 5) {
    console.log(`recuperação 👌 = nota final ${nota}`);
}

else {
    console.log(`Reprovado - Nota ${nota}`);
}

let pi = 3.14

console.log(pi);

 pi = 62;

 console.log(pi);
 

 let n1, n2, n3;

 n1 = 10
 n2 = 3
 n3 = 8
 media = (n1 + n2 + n3) / 3

 console.log("a media e " + media);
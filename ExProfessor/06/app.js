//Escreva um programa que peça o usuario informar o primeiro nome, sobrenome e data de nascimentio. Armazene cada variavel em uma variavel diferente. Calcule a idade do usuario e retorne todas as informações solicitadas e se o usuario e maior ou menor de idade

let anoAtual = 2025;
let mesatual = 9
let diaAtual = 24;

var nome = [], sobrenome = [], ano = [], mes = [], dia = [];

for (var i = 0; i < 1; i++) {
    
    nome = prompt("Digite seu primeiro nome:");
    sobrenome = prompt("Digite seu sobrenome");
    ano = prompt("Digite seu ano de nascimento");
    mes = prompt("Digite mes (forma numerica)");
    dia = prompt("Digite o dia");
    
    if (anoAtual >= ano && mesatual >= mes && diaAtual >= dia) {
        console.log(`Olá ${nome} ${sobrenome} você tem ${(anoAtual - ano)}\nVocê já é de Maior!!`);
        alert(`Olá ${nome} ${sobrenome} você tem ${(anoAtual - ano)}\nVocê já é de Maior!!`);
        

    } else {
        console.log(`Olá ${nome} ${sobrenome} você tem ${(anoAtual - ano - 1)}\nVocê ainda é de Menor!!`);
        alert(`Olá ${nome} ${sobrenome} você tem ${(anoAtual - ano - 1)}\nVocê ainda é de Menor!!`);
        
    }

}


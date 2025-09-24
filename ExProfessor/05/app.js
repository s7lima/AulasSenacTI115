// Crie um programa que exiba o dia da semana conforme o usuario digitar no prompt o numero correspondente. Caso ele digite 1 deve aparecer a mensagem o dia escolhido foi: "Domingo", se o usuario colocar algo diferente dos numeros de 1 a 7 aprsentar a mensagem "dia Invalido
let semana = ["\n1-Domingo","2-Segunda","3-Terça","4-Quarta","5-Quinta","6-Sexta","7-Sábado"]
let dia = parseInt(prompt(`Selecione um dia da Semana ${semana}`))

switch (dia) {
    case 1:"Domingo"
        alert("Domingo")
        break;
    case 2:"Segunda"
        alert("Segunda")
        break;
    case 3:"Terça"
        alert("Terça")
        break;
    case 4:"Quarta"
        alert("Domingo")
        break;
    case 5:"Quinta"
        alert("Quinta")
        break;
    case 6:"Sexta"
        alert("Sexta")
        break;
    case 7:"Sabado"
        alert("Sabado")
        break;

    default:
        alert("Valor invalido")
        break;
}
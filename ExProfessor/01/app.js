// Escreva um programa que solicite ao usuario um número. O programa deve apresentar a contagem regressiva deste número até zero. se número negativo ou igual a zero apresentar mensagem "escolha um número positivo""

let num = parseInt(prompt("Digite um numero"));

if (num < 0) {
        alert("Escolha um número positivo")
    } else {
        for (let i = 0; i <= num; i++) {
            console.log(num-i);
    
        }
    }
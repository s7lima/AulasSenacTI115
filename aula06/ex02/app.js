//Receba dois numeros e retorne a soma entre eles.Depois crie outra função chamada mutiplicação que também receba dois numeros e retorne o resultado da multiplicação. Teste as funçõis com diferentes valores

/*
function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(abc, der) {
    return abc / der;
}

function subtracao(x, z) {
    return x - z;
}

console.log(soma(5, 8));
console.log(multiplicacao(5, 8));
console.log(divisao(5, 8));
console.log(subtracao(5, 8));
*/

/* 
Escreva uma função chamada calculador que retorna 2 numeros digitados pelos usuario e retorne um alert com as soma, subtração, multiplicação e divisão  desses números
*/

let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));

// function calculadora(num1, num2){
//     return `Soma: ${num1 + num2}\nMultiplicação: ${num1 * num2}\nDivisão: ${num1 / num2}\nSubtração ${num1 - num2}`
// }
// alert(calculadora(num1,num2));


if(!isNaN(num1) && !isNaN(num2)){
    const resultado = calculadora(num1, num2)
    alert(`
        Soma: ${resultado.soma} \n
        Subt: ${resultado.subtracao} \n
        Mult: ${resultado.multiplicacao} \n
        Divi: ${resultado.divisao} \n`
    );
}else{
    alert("Digite apenas numeros")
}
let soma;
function calculadora (num1, num2){

    let resultadoDivisao;
    if(num2 === 0){
        resultadoDivisao ="Impossivel dividir por zero"
    }else {
        resultadoDivisao = num1 / num2
    }
    
    return{
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: resultadoDivisao
    } 
}



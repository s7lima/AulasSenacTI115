const campoValor = document.getElementById('valor');
const botao = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

botao.addEventListener('click', () =>{
    const valor = parseFloat(campoValor.value);
    if(isNaN(valor) || valor <= 0){
        resultadoDiv.textContent = "Digite apenas número";
        resultadoDiv.style.color = "#e74c3c";
        return;
    }
    const valorFinal = valor * 1.10;
    resultadoDiv.textContent = formatarReal(valorFinal);
    resultadoDiv.style.color = "#11998e";
    
    console.log(valor)
})

function formatarReal(valor){
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}
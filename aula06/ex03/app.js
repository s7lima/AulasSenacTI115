/*Crie uma função chamada contarNomes que receba um array de nomes e retorne a quantidade de nomes contidos nesse array.
Depois, crie outra função chamada buscarNome que receba um array de nomes e um nome específico, verificando se ele existe na lista.
*/

function contarNomes(lista) {
    return lista.length; 
} function buscarNome(lista, nome) {
    if (lista.includes(nome)) { return nome + " está na lista."; } else { return nome + " não foi encontrado."; } } let nomes = ["Ana", "Pedro", "João", "Maria"]; console.log(contarNomes(nomes));           // 4console.log(buscarNome(nomes, "Maria"));   // está na listaconsole.log(buscarNome(nomes, "José"));    // não foi encontrado

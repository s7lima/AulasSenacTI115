//Pergunte ao usuario quem ele é usando switch, se for Usuario A, Usuario B ou Usuario C , dê boas vindas personalizadas, caso contrário diga que não é o usuario.
let user = ["\n1-Usuario-A","2-Usuario-B","3-Usuario-C",]
let usuario = parseInt(prompt(`Selecione um usuario ${user}`))

switch (usuario) {
    case 1:"Usuario-A"
        alert("Bem vindo Usuario A")
        break;
    case 2:"Usuario-B"
        alert("Bem vindo Usuario B")
        break;
    case 3:"Usuario-C"
        alert("Bem vindo Usuario C")
        break;
        
    default:
        alert("Valor invalido")
        break;
}
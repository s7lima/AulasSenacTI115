let idade = parseInt(prompt('Digite sua idade'));
let acompanhante = true;
if (idade >= 18) {
    alert("Pode entar");

} else if (idade >=16 && acompanhante == true){
    alert("Pode entrar acompanhado");

} else {
    alert("Bloqueado");

}
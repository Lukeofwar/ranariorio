/** 
* Feito por Lucas developer
* Simples slide responsivo
*/ 

var intervalo = 2500;

function slide1() {
    document.getElementById("slide").src = "_imagens/img-11.jpg";
 setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById("slide").src = "_imagens/img-12.jpg";
    setTimeout("slide3()",intervalo);

}
function slide3() {
    document.getElementById("slide").src = "_imagens/img-13.jpg";
    setTimeout("slide4()",intervalo);

}
function slide4() {
    document.getElementById("slide").src = "_imagens/img-10.webp";
    setTimeout("slide1()",intervalo);

}


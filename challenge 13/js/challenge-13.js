



var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);


function parImpar(numero) {
    if(numero % 2 == 0) {
    return "par";
}
    else {
    return "impar";
    }
}


alert("El número "+numero+" es "+resultado);
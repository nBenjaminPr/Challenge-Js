//Funciones 1

function saludo(nombre) {
    document.write(`Hola ${nombre}`)
}

//Funciones 2

function Calcular (numero = 1){
    let calculo = numero * numero
    document.write(`<p> Resultado = ${calculo} </p>`)
}

//Funciones 3

function suma (n1, n2) {
    return n1 + n2  //Return= retorna el resultado de la suma n1 + n2
}

//Funciones 4

    var  sumar = (x,y) => {
        return x+y
    }

    result = sumar (3,4);
    console.log(result);

    //Funciones 5

    let curso = (grado) => {
        return grado * 1.8 + 32;
    }

    var result = curso (22)
    console.log(result);


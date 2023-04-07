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

    //Funciones 6

    function Saludo (persona1, persona2){
        document.getElementById("name").innerHTML =  (`Hola ${persona1} y ${persona2}`)
    }

    Saludo("Carlos", "Alberto")

    //Funciones 7

    function ChangeColor(nombreColor){
        let obj= document.getElementById("informacion")
        obj.style.color= nombreColor
    }

    // Funciones 8

    function programa(){
        let x = 3

        function func(ramdom){
            if (ramdom) {
                let x = parseInt (Math.random() * 10)
                return x
            }
            return x
        }

        document.getElementById("getOut").innerHTML = func(false); //3
        document.getElementById("getOut").innerHTML += func (1)
    }

    // Funciones 9

    function n(){
        let local= 100;
        let c = local;
        return c
    }

    let a,b;
    b = "Buen dia"
    a = "Hello word"


    document.write(` <p> El valor de a es: ${a} <br> </p>`)
    document.write(` <h3> El valor de b es: ${b} <br> </h3>`);

    var c = n();

    document.write(`<p> El valor de C es: ${c} <br> </p>`);
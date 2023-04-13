// Fomrs 1


function saludo() {
    const nom_usuario = document.fdatos.entrada.value
    document.writeln(`<h3> Hola, Buen dia ${nom_usuario} </h3>`)
}

// Fomrs 2

function descuento() {
    const descuento_result = document.fnum.entradas.value
    let resutlado = descuento_result *0.1

    document.writeln(`<h3> El 10% de ${descuento_result} es ${resutlado} </h3>`)
}


// Form 3

function calcular (){
    // eval: una expresión de JavaScript que toma el valor introducido por el usuario en un formulario HTML y lo evalúa como una expresión JavaScript.
    document.datos.respuesta.value = eval(document.datos.entrada2.value)
}

//Form 4

function ProcesoDatos (){
        const objx = document.getElementById("RangoValor").value;
        document.getElementById("resultade").innerHTML = objx
}


//Form 5

function calculadora(){
    const numero = document.fDatoos.entrad3.value
    const dato = document.getElementById("lista")
    const valor = dato.options[lista.selectedIndex].value; // .text

    const resultat3 = numero * valor;
    document.getElementById("salid3").innerHTML = resultat3

}

//Form 6

function convertir() {
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Convertir de Celsius a Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.";
}


//Form 7

var getEventTime = function() {
    var start = moment (document.getElementById("start").value);
    var end = moment (document.getElementById("end").value);
    alert(moment.duration(end.diff(start)).asDays());
}

// Form 8
function calcularPesoIdeal() {
    var altura = document.getElementById("altura").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var pesoActual = document.getElementById("peso").value;

    if (altura && edad && sexo && pesoActual) {
        var pesoIdeal;
        if (sexo === "masculino") {
        pesoIdeal = altura - 100 - ((altura - 150) / 4) + (edad / 4);
        } else if (sexo === "femenino") {
        pesoIdeal = altura - 100 - ((altura - 150) / 2.5) + (edad / 6);
        }

      // Redondeamos el resultado a un decimal
        pesoIdeal = pesoIdeal.toFixed(1);

        var mensaje = "Su peso ideal es de " + pesoIdeal + " kg.";
        if (pesoActual < pesoIdeal) {
        mensaje += " Debe aumentar de peso.";
        } else if (pesoActual > pesoIdeal) {
        mensaje += " Debe perder peso.";
        } else {
        mensaje += " Su peso es el ideal.";
        }
        alert(mensaje);
    } else {
        alert("Por favor, rellene todos los campos.");
    
    }}

    // Form 9

    
function inic(){
    var DI = document.game.dinero.value = 100;
}

function calc(){

    var Din = parseInt (document.game.dinero.value);
    var Num = document.game.value ;
    var Apu =  parseInt(document.game.apuesta.value);  
    var dado = Math.floor(Math.random() *7)  
    var ganancia = 0


    if (Din > 0){
        
    }
}
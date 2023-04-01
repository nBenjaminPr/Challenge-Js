document.write("hola mundo")

"/br"

// Inicio 2

let a, b;
a=10; b=5;
resultado = a + b;

console.log(`La suma de a+b es ${resultado}`)


// Inicio 3

let num1=0;
let num2=0;

num1 = num1+1;
num2 = num2+5;

console.log(`El primer numero ahora es ${num1} `); 
console.log(`El segundo numero ahora es ${num2}`);

// Inicio 4

const name1 = "hola";
let name2 = " mundo!";

document.write ("</br>")
document.write ("</br>")
document.write("Constante 1 contine " + name1);
document.write ("</br>")
document.write ("</br>")
document.write("Variable 2 contine " + name2)

//Inicio 5

let c, d ;
c = 2; d = 8;
resultado2 = c * d

document.write ("</br>")
document.write ("</br>")
document.write (`Variable c contiene ${c} <br> `)
document.write (`Variable d contiene ${d} <br> `)
document.write (`El producto de c por d es ${resultado2}`)

//inicio 6

let dato, resultado3;

// dato = window.prompt ("introduce tu nombre", "0");
resultado3 = `hola, como estas ${dato}` ;
document.write ("</br")
console.log(resultado3);


//inicio 7

let dato2, num3;

// dato2 = window.prompt("Introduce numero ?", "0");
num3 = parseInt(dato2) //Transforma el texto introducido en un valor numerico

num3 = num3 *2;

console.log(`El doble es ${num3} `);


//inicio 8
let dato6,dato7, num4,num5;

// dato6 = window.prompt ("Introduce primer numero ?", "0")
// num4 = parseInt(dato6);
// dato7 = window.prompt ("iNTRODUCE EL SEGUNDO NUMERO ?" , "0");
// num5 = parseInt(dato7);

let resultado4 = num4 + num5

console.log(`La suma es ${resultado4}`);


//Inicio 9

// let datos, num9;

// datos = window.prompt("Introduce un numero ? ", "0")
// num9 = parseInt(datos)

// let resultado5= num9 *2;

// 8

//Inicio 10 y 11

// let datos2,datos12,num11, num10;

// datos2 = window.prompt("Introduce un numero ? ", "0")
// num11 = parseInt(datos2)
// datos12 = window.prompt("Introduce un numero ? ", "0")
// num10 = parseInt(datos12)

// let resultado6= num10 - num11 ;
// let resultado7= num10 * num11 ;
// document.getElementById("salida").innerHTML = (`La retas es ${resultado6}`)

// document.getElementById("salida2").innerHTML = (`La multiplicacion es ${resultado7}`)


// Inicio 12

{
var contador;
contador= 1;

while (contador< 5)
    {
        let dato8 = prompt("inttroduce numero del 1 al 10: ", " ");
        let num6= parseInt(dato8);

        document.write (`El numero introducido es ${num6} </br> `)
        document.write (`El contador es ${num6} </br> `)

        contador = contador +1;
    }

    document.write (`
                    </br> <h2>
                    Fin del Programa contador ya NO es menor que 5
                    </h2>
                    ` );

    document.write(`</br> Ultimo numero introducido es ${num6}`)
}
//Condicionales 1

// let dato1,dato2,num1,num2,resultado;

// dato1 = window.prompt("Primer numero ?")
// num1 = parseInt(dato1)

// dato2= window.prompt("SEGUNDO numero ?")
// num2 = parseInt(dato2);

// if (num1  > num2){
//     resultado="El primero es mayor"
// }else{
//     resultado= "El segundo lo es"
// }
// document.write(` <h3> El mayor numero es ${resultado} </h3> `)

//Condicionales 2

// let nota1, nota2, nota3;
// let dato3,dato4,dato5, media;

// dato3 = window.prompt("Primer numero ?")
// nota1 = parseInt(dato3)

// dato4= window.prompt("SEGUNDO numero ?")
// nota2 = parseInt(dato4);

// dato5= window.prompt("tercer numero ?")
// nota3 = parseInt(dato5);

// media = (nota1 + nota2 + nota3)/3


// if (media > 5){
//     resultat = "Aprobado"
// }else{
//     resultat = "Suspendido"
// }

// document.write(` <h3> La nota final es ${resultat} su promedio es ${media} </h3> `);



//Condicionales 3

// let num1, num2,dato9, dato10;

// dato9 = window.prompt("Primer numero ?")
// num1 = parseInt(dato9)

// dato10 = window.prompt("Primer numero ?")
// num2 = parseInt(dato10)


// if(num1 > num2) {
//     document.write(`El numero mayo es ${num1}`)
// }else if (num2 > num1) {
//     document.write(`El numero mayo es ${num2}`)
// }else{
//     document.write("Son iguales")
// }


//Condicionales 4

// let suerte = (Math.random() * 6);
// let dado = parseInt(suerte) + 1;

// let obj1= document.getElementById("salida")

// if (dado > 3){
//     obj1.innerHTML= (`Has ganado ${dado}`)
// }{
//     obj1.innerHTML= (`segui participando ${dado}`)
// }


//Condicionales 5

// let marca, modelo, descuento = 0

// alert ("Eliga su auto Ford fiesta o focus")

// marca = prompt("MARCA?")
// modelo= prompt("modelo?")

// if ((marca == "ford") && (modelo="fiesta")){
//     descuento = 5;
// }

// if ((marca == "ford") && (modelo = "focus")){
//     descuento = 10
// }

// document.write(`<h3> Su descuento es ${descuento} </h3>`)

//Condicionales 5

// let alumno, edad, acceso

// alumno = prompt (" Es de FP?")
// edad = prompt ("Cuanto años tenes?")

// if ((alumno == "si") && (edad > 18)){
//         acceso = "si tiene acceso"
//     }else if ((alumno == "si") && (edad < 18)) {
//         acceso = "no tiene acceso"
//     }



// document.write(`<h3> Usted ${acceso} </h3>`)

//Condicionales 6

// let origen,destino, descuento

// alert("Bievenido a Palma international")
// alert ("Tenemos contacto con barcelona,madrid y valencia")
// origen = prompt ("Ciudad de origen?")
// destino = prompt ("Cual es su destino?")

// if ((origen == "palma") && (destino == "barcelona") ){
//     descuento = 5 ;
// }else if ((origen == "palma") && (destino == "madrid") ){
//     descuento = 10 ;
// }else if ((origen == "palma") && (destino == "valencia") ){
//     descuento = 15 ;
// }

// document.write (`<h3> Su descuento es ${descuento}%</h3>` )

//Condicionales 7

// !!While no permite valores incorrecto

// let num= 1;
// let dato;

// while (num < 10) {
//     dato= prompt ("introduce un numero menor 10; ", " ")
//     num= parseInt(dato);

//     document.write(`<br> ${num} </br>`)
// }

// document.write("Fin termino")

//Condicionales 8

// let edad, final;
// edad = prompt("que edad tenes?")

//! isNaN es para validar que es un valor numerico

// if (isNaN(edad)){
//     final = "Error. No es un numero";
// }else{
//     final = (edad < 18) ? "Desamasiado joven" : "Mayor de edad";
// }

// document.write (`<h3> ${final} </h3>`)


//Condicionales 8

let dias, mes, año

mes = prompt("Introduzca el numero del mes : ")
mes= parseInt(mes)

if( mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes ==12 ){
    document.write ("Este mes tiene 31 dias")
}else if(mes==2){
    document.write("El mes puede tener 30 dias")
    }else{
        document.write("Tiene 30 dias")
    }


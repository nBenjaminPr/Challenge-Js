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

let nota1, nota2, nota3;
let dato3,dato4,dato5, media;

dato3 = window.prompt("Primer numero ?")
nota1 = parseInt(dato3)

dato4= window.prompt("SEGUNDO numero ?")
nota2 = parseInt(dato4);

dato5= window.prompt("tercer numero ?")
nota3 = parseInt(dato5);

media = (nota1 + nota2 + nota3)/3


if (media > 5){
    resultat = "Aprobado"
}else{
    resultat = "Suspendido"
}

document.write(` <h3> La nota final es ${resultat} su promedio es ${media} </h3> `)






// Blucles 1

let cadena = "", i;

for (i=0; i<10; i++)
{
    cadena = cadena + `<h3> El numero es ${i} </h3>`
}

document.getElementById("central1").innerHTML= cadena

// Blucles 2

let x,j;
let z = "<table>"

for (x =1; x <= 5 ;x++) {
    z = z + "<tr>";
    for (j = 1; j <= x; j++)
    z = z + `<td> El numero es ${x} </td>`;

    z = z + "<tr>"
}

z = z + "</table>"
document.getElementById("central2").innerHTML = z

// Blucles 3

// let fila 
// let columna = parseInt(prompt("Introduce el tamaño: ", "0"))

// for (fila = 1; fila <= columna; fila++){

//     for (espacios = columna - fila; espacios > 0; espacios--){
//         document.write("&nbsp&nbsp")

//         for (conta = 1; conta < (2*fila); conta++)

//         document.write("*")

//         document.write("</br>")
//     }
// }


// Blucles 4
const height = 5;
const width = 2 * height - 1;

for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < (width - 1) / 2 - i; j++) {
    row += " ";
    }
  for (let k = 0; k < 2 * i + 1; k++) {
    row += "*";
    }
    console.log(row);
}

for (let i = height - 2; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < (width - 1) / 2 - i; j++) {
    row += " ";
    }
  for (let k = 0; k < 2 * i + 1; k++) {
    row += "*";
    }
    console.log(row);
}

//Bucle 5

function functionUno() {
    let result3=""
    let i;
    for (i=1; i <= 6;i++ )
    {
        result3 = result3 + `<h3> Titulo ${i} </h3>`
    }
    document.getElementById("central3").innerHTML= result3
}

// Bucle 6


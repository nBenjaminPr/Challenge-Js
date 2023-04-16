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
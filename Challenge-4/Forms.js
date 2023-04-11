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

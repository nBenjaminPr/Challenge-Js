class ficha {
    constructor(){
        this.alumno = {
            nombre: "Pedro",
            edad: 18
        }
    }//fin del contrstructor

    verNombre(){
        return this.alumno.nombre
    }

    varEdad(){
        let resultado = this.alumno.edad;
        return resultado
    }
} //fin claas ficha

function programa(){
    var obj = new ficha();
    document.write (`<td> El nombre es ${obj.verNombre()} </td>`)
    document.write (`<td> La edad es ${obj.varEdad()} </td>`);
}



function ficha2() {

    var alumno = {
    nombre: "Caterina",
    edad: 18
    };

    this.verNombre = function ()
    {
    return alumno.nombre;
    }

    this.verEdad = function ()
    {
    var resultado = alumno.edad;
    return resultado;
    }
}
function programas() {
    var obj = new ficha2();

    document.writeln("El nombre es "+ obj.verNombre() + "<br>");
    document.writeln("La edad es "+ obj.verEdad() + "<br>");
} 



//Patterns 2

class animal {
    constructor(name) {
        this.name = name;
    }

    decirNombre(){
        console.log("Soy " + this.name);
    }
}

var obj1 = new animal("leon")
obj1.decirNombre();
var obj2 = new animal("toro")
obj2.decirNombre();
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
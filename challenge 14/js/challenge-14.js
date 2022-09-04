const age = prompt ("Cuantos años tenes?");

switch(true){
    case age > 0 && age <= 10:
        console.log('El tema para su edad es: Vaca lola');
        break;
    case age  > 10 && age<=20:
        console.log("El tema para tu edad es: Dance Crip - Trueno");
        break
    case age > 20 && age<=30:
        console.log("El tema para tu edad es: Wake Me Up - Avicci");
        break
    case age > 30 && age<=40:
        console.log("El tema para tu edad es: Gasolina - Daddy Yankee");
        break
    case age > 40 && age<=50:
        console.log("El tema para tu edad es: Glory Days - Bruce Springsteen");
        break
    case age > 50 && age<=60:
        console.log("El tema para tu edad es: We Will Rock You - Queen");
        break
    case age > 70:
        console.log("El tema para tu edad es: Volver - Gardel");
        break
    default:
        console.log("Pagate Spotify");
        break
}
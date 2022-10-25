function play() {
    const posibilities = [ 'piedra', 'papel', 'tijeras' ]; 
    const p1   = document.getElementById("Jugador").value;
    const p2   = posibilities[ Math.floor(Math.random() * posibilities.length) ];
    
    if( !p1 ) return;
    if (p1 === p2) {
        console.log('empate');
    } else if(p1 === "papel" && p2 === "piedra") {
        console.log("ganaste")
    } else if (p1 === "tijeras" && p2 === "papel") {
        console.log("ganaste")
    } else if (p1 === "piedra" && p2 === "tijeras") {
        console.log("ganaste")
    } else {
        console.log("perdiste")
    }
}
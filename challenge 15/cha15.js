

var num1x=1;
	var num1y=0;

var num2x=1;
var num2y=0;

    function lanzamiento1(){
        var dado1 = document.getElementById("dado1");
        var d1 = Math.floor(Math.random() * 6) + 1;
        dado1.innerHTML = d1;
    }

    function lanzamiento2(){
        var dado2 = document.getElementById("dado2");
        var d2 = Math.floor(Math.random() * 6) + 1;
        dado2.innerHTML = d2;
    }


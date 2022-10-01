




function changeTheme (){
    const elemento = document.getElementById("button-change")

    if (elemento.classList.contains("light")){
        elemento.classList.add("dark")
        elemento.classList.remove("light")
    }else{
        elemento.classList.remove("dark")
        elemento.classList.add("light")
    }

}




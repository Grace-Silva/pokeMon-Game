/* seleccion del pokemon inicial */
function seleccionarPokemon(){

    let inputPikachu = document.getElementById("pikachu");
    let inputPsyduck = document.getElementById("psyduck");
    let inputGeodude = document.getElementById("geodude");

    if(inputPikachu.checked){
        alert("haz elegido a pikachu, ten cuidado, le gusta su espacio");
    }
        else if(inputPsyduck.checked){
            alert("psyduck, no lo estreses y se bueno con él")
        }
    else{
        alert("geodude, excelente compañero, entrénalo bien")
    }

}

let btnSeleccionarPokemon = document.getElementById("btnSeleccionarPokemon");

btnSeleccionarPokemon.addEventListener("click", seleccionarPokemon);


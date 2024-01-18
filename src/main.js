/* permite que el la imagen del pokemon a seleccionar se amplíe a hacer clic sobre ella.  *
function ampliarPokemon() {
  let listaPokemons = document.querySelectorAll("img");

  listaPokemons[0].onclick = () => {
    listaPokemons[0].classList.add("activeImage");
    listaPokemons[1].classList.remove("activeImage");
    listaPokemons[2].classList.remove("activeImage");
  };

  // y así para los demás personajes....

}
*/

// deselecciona todos pokemon para evitar una elección errónea:
window.addEventListener("load", deseleccionarTodo);

function deseleccionarTodo(){
  document.querySelectorAll("[type='radio']").forEach((x) => x.checked=false);
}

/* seleccion del pokemon inicial de parte del usuario */
function seleccionarPokemon() {

  /* casillas de selección */
  let inputPikachu = document.getElementById("pikachu");
  let inputPsyduck = document.getElementById("psyduck");
  let inputGeodude = document.getElementById("geodude");

  if (inputPikachu.checked) {
    alert("ELEGISTE A PIKACHU, LE GUSTA SU ESPACIO ⚡ .");  
    //PC "elige" un PokéMon
    seleccionarPokemonPC();
    mostrarCombate();
  } 
    else if (inputPsyduck.checked) {
      alert("ELEGISTE A PSYDUCK. NO LO ESTRESES, SÉ BUENO CON ÉL.");
      //PC "elige" un PokéMon
      seleccionarPokemonPC();
      mostrarCombate();
    } 
    else if (inputGeodude.checked) {
      alert("ELEGISTE A GEODUDE, SU AMISTAD SERÁ COMO LA ROCA.");
      //PC "elige" un PokéMon
      seleccionarPokemonPC();
      mostrarCombate();
      }
  else{
    alert("Por favor selecciona un PokéMon.");
  }

  // La página se recarga para seguir jugando
  window.location.reload();
}

let btnSeleccionarPokemon = document.getElementById("btnSeleccionarPokemon");
btnSeleccionarPokemon.addEventListener("click", seleccionarPokemon);

//PC "elige" un PokéMon
function seleccionarPokemonPC(){

  let pokemonPC = aleatorio(1,3);

  switch (pokemonPC) {
    case 1:
      alert("PC HA ELEGIDO A BULBASUR.");
      break;

    case 2:
      alert("PC HA ELEGIDO A CHARMANDER.");
      break;

    case 3:
      alert("PC HA ELEGIDO A SQUIRTLE.");
      break;

    default:
      alert("LA PC NO QUIERE JUGAR, VUELVE MÁS TARDE.");
      break;
  }

}

/* Se genera un número aleatorio para que la pc seleccione un PokéMon */
function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mostrarCombate(){
  let battleFieldContainer = document.querySelector(".battleFieldContainer");
  battleFieldContainer.style.display = "flex";
}
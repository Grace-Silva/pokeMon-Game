/* ampliar imagen */

/*
listaPokemons[0].onclick =()=>{
  listaPokemons[0].classList.add("activeImage");
}
*/
window.addEventListener("load", ampliarPokemon);
/* permite que el la imagen del pokemon a seleccionar se amplíe a hacer clic sobre ella.  */
function ampliarPokemon() {

  document.querySelectorAll("[type='radio']").forEach((x) => x.checked=false);

  let listaPokemons = document.querySelectorAll("img");

  listaPokemons[0].onclick = () => {
    listaPokemons[0].classList.add("activeImage");
    listaPokemons[1].classList.remove("activeImage");
    listaPokemons[2].classList.remove("activeImage");
  };

  listaPokemons[1].onclick = () => {
    listaPokemons[1].classList.add("activeImage");
    listaPokemons[0].classList.remove("activeImage");
    listaPokemons[2].classList.remove("activeImage");
  };

  listaPokemons[2].onclick = () => {
    listaPokemons[2].classList.add("activeImage");
    listaPokemons[0].classList.remove("activeImage");
    listaPokemons[1].classList.remove("activeImage");
  };
}

/* seleccion del pokemon inicial */
function seleccionarPokemon() {
  let inputPikachu = document.getElementById("pikachu");
  let inputPsyduck = document.getElementById("psyduck");
  let inputGeodude = document.getElementById("geodude");

  if (inputPikachu.checked) {
    alert("haz elegido a pikachu, ten cuidado, le gusta su espacio");
  } else if (inputPsyduck.checked) {
    alert("psyduck, no lo estreses y se bueno con él");
  } else if (inputGeodude.checked) {
    alert("geodude, excelente compañero, entrénalo bien");
  }
  else{
    alert("Por favor selecciona un PokéMon");
  }
  seleccionarPokemonPC();
  window.location.reload();
}

let btnSeleccionarPokemon = document.getElementById("btnSeleccionarPokemon");
btnSeleccionarPokemon.addEventListener("click", seleccionarPokemon);

function seleccionarPokemonPC(){

  let pokemonPC = aleatorio(1,3);

  switch (pokemonPC) {
    case 1:
      alert("PC HA ELEGIDO A BULBASUR");
      break;

    case 2:
      alert("PC HA ELEGIDO A CHARMANDER");
      break;

    case 3:
      alert("PC HA ELEGIDO A SQUIRTLE");
      break;

    default:
      alert("LA PC NO QUIERE JUGAR");
      break;
  }

}

/* generar un numero aleatorio entre 1 y 3 */
function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* ampliar personaje al hacer click */



/* funcion experimental

document.querySelectorAll("img")
NodeList(3) [ img.pokemonImage, img.pokemonImage, img.pokemonImage
 ]

for(let i=0; i<3; i++){
  document.querySelectorAll("img")[i].onclick =()=>{
    document.querySelectorAll("img")[i].style.border="solid red";
  }
}
function ()

*/
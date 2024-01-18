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

  // pikachu
  if (inputPikachu.checked) {
    pokUser = 1;
  } 
    // psyduck
    else if (inputPsyduck.checked) {
      pokUser = 2;
    } 
    // geodude
    else if (inputGeodude.checked) {
      pokUser = 3;
      }
  // el usuario no elige nada, el PC tampoco    
  else{
    alert("Por favor selecciona un PokéMon.");
    window.location.reload();
  }

  return pokUser;
  /* La página se recarga para seguir jugando
  window.location.reload();*/
}

// botón para jugar:
let btnSeleccionarPokemon = document.getElementById("btnSeleccionarPokemon");
  btnSeleccionarPokemon.addEventListener("click", mostrarCombate);

//PC "elige" un PokéMon
function seleccionarPokemonPC(){

  let pokemonPC = aleatorio(1,3);

  switch (pokemonPC) {
    case 1:
      pokPC = 1;
      break;

    case 2:
      pokPC = 2;
      break;

    case 3:
      pokPC = 3;
      break;

    default:
      alert("LA PC NO QUIERE JUGAR, VUELVE MÁS TARDE.");
      break;
  }

  return pokPC;

}

/* Se genera un número aleatorio para que la pc seleccione un PokéMon */
function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function mostrarCombate(){

  // window background
  let battleFieldContainer = document.querySelector(".battleFieldContainer");
    battleFieldContainer.style.display = "flex";

  // close button
  let closeFieldButton = document.getElementById("closeFieldButton");
    closeFieldButton.addEventListener("click", cerrarCombate);
    
    let userPokeMon = document.getElementById("userPokeMon");
    let pcPokeMon = document.getElementById("pcPokeMon");

    let pok1 = seleccionarPokemon();
    let pok2 = seleccionarPokemonPC();
      // función seleccionar pokemon (user)

    if(pok1==1 && pok2==3 || pok2==2){
      alert("pikachu le gana a squirtle y a charmander");  
    }
      else if(pok1==2 && pokPC==1 || pok2==3){
        alert("psyduck le gana a bulbasur y squirtle");
      }
      else if(pok1==3 && pok2==1 || pok2==2){
        alert("geodude le gana a bulbasur y charmander");
      }
    else{
      alert("gana pc");
    }  

      

    // cerrar combate PokéMon  y recargar la página para seguir jugando:
    function cerrarCombate(){
      battleFieldContainer.style.display = "none";
      window.location.reload();
    }
}
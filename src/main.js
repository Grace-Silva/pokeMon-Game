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
    alert("haz elegido a pikachu");
    pokUser = 1;
  } 
    // psyduck
    else if (inputPsyduck.checked) {
      alert("haz elegido a psyduck");
      pokUser = 2;
    } 
    // geodude
    else if (inputGeodude.checked) {
      alert("haz elegido a geodude");
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
      alert("pc ha elegido a bulbasur");
      pokPC = 1;
      break;

    case 2:
      alert("pc ha elegido a charmander");
      pokPC = 2;
      break;

    case 3:
      alert("pc ha elegido a squirtle");
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

    switch (pok1) {
      //pikachu
      case 1:
        userPokeMon.setAttribute("src", "./assets/pikachu.png");
        if(pok2==3){
          // alert("pikachu le gana a squirtle");

        }
          else if(pok2==2){
            alert("pikachu empata con charmander");
          }
        else{
          alert("bulbasur PC gana");
        }  
        break;
      // psyduck
      case 2:
        userPokeMon.setAttribute("src", "./assets/psyduck.png");
        if(pok2==1){
          alert("psyduck le gana bulbasur");
        }
          else if(pok2==3){
            alert("psyduck empata con squirtle");
          }
         else{
          alert("charmander PC gana");
         } 
         break;
      // geodude
      case 3:
        userPokeMon.setAttribute("src", "./assets/geodude.png");
        if(pok2==2){
          alert("geodude le gana a charmander");
        }
          else if(pok2==1){
            alert("geodude empata con bulbasur");
          }
         else{
          alert("squirtle PC gana");
         } 
        break;   

      default:
        alert("ha ocurrido un error, intenta mas tarde");
        window.location.reload();
        break;
    }      

    // cerrar combate PokéMon  y recargar la página para seguir jugando:
    function cerrarCombate(){
      battleFieldContainer.style.display = "none";
      window.location.reload();
    }
}
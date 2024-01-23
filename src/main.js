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

// deselecciona todos pokemon para evitar una elección errónea y condicionar que uno de los pokémon disponibles sea elegido:
window.addEventListener("load", deseleccionarTodo);
function deseleccionarTodo(){
  document.querySelectorAll("[type='radio']").forEach((x) => x.checked=false);
}

/* seleccion del pokemon inicial de parte del usuario */
function seleccionarPokemon() {

  /* casillas de selección */
  let inputs = document.querySelectorAll("input");

  // pikachu
  if (inputs[0].checked) {
    pokUser = 1;
  } 
    // psyduck
    else if (inputs[1].checked) {
      pokUser = 2;
    } 
    // geodude
    else if (inputs[2].checked) {
      pokUser = 3;
      }
  // el usuario no elige nada, el PC tampoco    
  else{
    alert("Por favor selecciona un PokéMon.");
    window.location.reload();
  }

  return pokUser;

}

// botón para jugar:
let btnSeleccionarPokemon = document.getElementById("btnSeleccionarPokemon");
  btnSeleccionarPokemon.addEventListener("click", mostrarCombate);

//PC "elige" un PokéMon
function seleccionarPokemonPC(){

  let pokemonPC = aleatorio(1,3);

  switch (pokemonPC) {
    // bulbasur
    case 1:
      pokPC = 1;
      break;
    // charmander
    case 2:
      pokPC = 2;
      break;
    // squirtle
    case 3:
      pokPC = 3;
      break;

    default:
      alert("LA PC NO QUIERE JUGAR, VUELVE MÁS TARDE.");
      window.location.reload();
      break;
  }

  return pokPC;

}

/* Se genera un número aleatorio para que la pc seleccione un PokéMon */
function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function mostrarCombate(){
    
    // contenedores de imagenes de los pokemon
    let userPokeMon = document.getElementById("userPokeMon"); // user pokemon image
    let pcPokeMon = document.getElementById("pcPokeMon"); // cpu pokemon image

    let pok1 = seleccionarPokemon();
    let pok2 = seleccionarPokemonPC();

      // asignación de imagen para el pokemon de la cpu
      switch (pok2) {
        // bulbasur
        case 1:
          pcPokeMon.setAttribute("src", "./assets/bulbasur.png");    
          break;
        // charmander
        case 2:
          pcPokeMon.setAttribute("src", "./assets/charmander.png");
          break;
        // squirtle
        case 3:
          pcPokeMon.setAttribute("src", "./assets/squirtle.png");
          break;  

        default:
          alert("El usuario no ha elegido un PokéMon");
          window.location.reload();
          break;
      }  

      // battle result
      let battleResult = document.querySelector(".battleResult");  

      // asignación de imagen para el pokemon del usuario
      switch (pok1) {
        //pikachu
        case 1:
          userPokeMon.setAttribute("src", "./assets/pikachu.png");
          if(pok2==3){
            battleResult.textContent = "TÚ GANAS";
          }
            else if(pok2==2){
              battleResult.textContent = "EMPATE";
            }
          else{
            battleResult.textContent = "CPU GANA";
          }  
          break;
        // psyduck
        case 2:
          userPokeMon.setAttribute("src", "./assets/psyduck.png");
          if(pok2==1){
            battleResult.textContent = "TÚ GANAS";
          }
            else if(pok2==3){
              battleResult.textContent = "EMPATE";
            }
          else{
            battleResult.textContent = "CPU GANA";
          } 
          break;
        // geodude
        case 3:
          userPokeMon.setAttribute("src", "./assets/geodude.png");
          if(pok2==2){
            battleResult.textContent = "TÚ GANAS";
          }
            else if(pok2==1){
              battleResult.textContent = "EMPATE";
            }
          else{
            battleResult.textContent = "CPU GANA";
          } 
          break;   

        default:
          alert("No haz elegido un PokéMon");
          window.location.reload();
          break;
      }      

      // mostrar pokemons en un ventana
      let battleFieldContainer = document.querySelector(".battleFieldContainer");
        battleFieldContainer.style.display = "flex";

    // close button
    let closeFieldButton = document.getElementById("closeFieldButton");
      closeFieldButton.addEventListener("click", cerrarCombate);
      
    // cerrar combate PokéMon  y recargar la página para seguir jugando:
    function cerrarCombate(){
      battleFieldContainer.style.display = "none";
      window.location.reload();
    }
}

/* array para los pokemons */
let arrayPOKEMON = [] // se declara el arreglo
/* clase para los pokemons */
class POKEMON{

    constructor(nombre, foto, tipo){
      
      this.nombre = nombre;
      this.foto = foto;
      this.tipo = tipo;
      this.ataques = [] // no se nombra en la parte superior

    }

}

// se crea el objeto pikachu:
let PIKACHU = new POKEMON("Pikachu", "./assets/pikachu.png", "Eléctrico");
// se crea el objeto psyduck:
let PSYDUCK = new POKEMON("PSYDUCK", "./assets/psyduck.png", "Hielo");
// se crea el objeto geodude:
let GEODUDE = new POKEMON("GEODUDE", "./assets/geodude.png", "Roca");
// se crea el objeto bulbasur:
let BULBASUR = new POKEMON("BULBASUR", "./assets/bulbasur.png", "Planta");
// se crea el objeto charmander:
let  CHARMANDER = new POKEMON("CHARMANDER", "./assets/charmander.png", "Fuego");
// se crea el objeto squirtle:
let SQUIRTLE = new POKEMON("SQUIRTLE", "./assets/squirtle.png", "Agua");

// llenamos o empujamos información al arreglo:
arrayPOKEMON.push(PIKACHU, PSYDUCK, GEODUDE, BULBASUR, CHARMANDER, SQUIRTLE);

/* nombreElemento.nombrePropiedad  : muestra una propiedad en específico

arrayPOKEMON[2].foto
imprime = "./assets/geodude.png" */

// llenamos el array para los ataques de cada uno de los pokemon
PIKACHU.ataques.push(

  { nombreAtaque: "Impactrueno", tipoAtaque: "Eléctrico", poder: 40},
  { nombreAtaque: "Ataque-Rápido", tipoAtaque: "Normal", poder: 40},
  { nombreAtaque: "Rayo", tipoAtaque: "Eléctrico", poder: 95},
  { nombreAtaque: "Doble-Equipo", tipoAtaque:"Psíquico", poder: 0}

)

PSYDUCK.ataques.push(

  { nombreAtaque: "Arañazo", tipoAtaque: "Normal", poder: 40},
  { nombreAtaque: "Confusión", tipoAtaque: "Psíquico", poder: 50},
  { nombreAtaque: "Agua Cola", tipoAtaque: "Agua", poder: 90},
  { nombreAtaque: "Hidropulso", tipoAtaque:"Agua", poder: 60}

)

/* PIKACHU.ataques[1].tipoAtaque
salida: "Normal" */
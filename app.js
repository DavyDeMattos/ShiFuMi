/* TODO :
X Ecran d'accueil avec sélection style de jeu
X Version pierre papier ciseaux classique
X Faire un système de message
- Rajouter un système de manches ?

X version avec pierre papier ciseaux lézar spock
- dynamiser le menu pour ajouter les règles en fonction du style
X faire un compteur de victoire d'affilé

*/
let playerCard = null;
const cards = ["ciseaux", "feuille", "pierre"];
// const cards = ["ciseaux", "feuille", "pierre", "lezard", "spock"]

const scoreTitle = document.querySelector('#score');
let score = 0;
scoreTitle.textContent = score;

const app = {
  /**
   * Fonction qui s'initialise au chargement de la page
   */
  init: function () {
    // const rulesButton = document.querySelector('.rules');
    const rulesButton = null;
    console.log(rulesButton);
    const showButton = rulesButton.addEventListener("click", app.showRules;
    
    difficulties.homeSelection();

  },

  /**
   * Fonction qui récupère une valeur de la carte cliqué
   * @param {*} event 
   */
  handleClick: function(event){
    // console.log("Fonction handleClick appelée");
    const target = event.target.getAttribute('value');
    playercard = target;

    const max = cards.length - 1;

    function getRandomInt(max) {
      return Math.round(Math.random() * max);
    }

    app.setCards(playercard, getRandomInt(max));
  },



 /**
  * Fonction qui paramêtre le style de jeu
  * recoit le tableau contenant les différentes cartes
  * @param {string} difficulty 
  */
   setGame: function(difficulty){
    const title = document.querySelector('#titleGame');

    // Modiffication du titre
    let textTitle= "";
    if (difficulty == "spock"){
      textTitle = "Pierre Papier Ciseaux Lézard Spock";
    }else {
      textTitle = "Pierre Papier Ciseaux";
    }
    title.textContent = textTitle;
    // ----------------------
    const partPlayer = document.querySelector('.part-player');
    const ulElement = document.createElement('ul');
    // console.log(cards);
    cards.forEach((card, index) => {
      let liElement = document.createElement('li');
      partPlayer.appendChild(ulElement);
      ulElement.appendChild(liElement);
      liElement.innerHTML = `<img src='./assets/${card}.jpg' value='${index}' />`
    });

    const liElements = document.querySelectorAll('li');
    // console.log(liElements);
    liElements.forEach(liElement => {
      liElement.addEventListener('click', app.handleClick)
    });
    // Appel de la fonction setCards en envoyant un chiffre alléatoire entre 0 et le max -1
    // app.setCards(cards, getRandomInt(max), getRandomInt(max))
  },

  /**
   * Show img on screen after user clic
   * @param {int} player 
   * @param {int} bot 
   */
  setCards: function(player, bot){
    // console.log(cards[player]);
    // console.log(cards[bot]);
    const partPlayer = document.querySelector('.part-player');
    partPlayer.innerHTML = `<img src='./assets/${cards[player]}.jpg' value='${player}' />`;
    const partBot = document.querySelector('.part-bot');
    partBot.innerHTML = `<img src='./assets/${cards[bot]}.jpg' value='${bot}' />`;

    results.whoWon(player, bot)
  },
  /**
   * Fonction qui affiche une page expliquant les règles
   */
  showRules: function () {
    console.log("Fonction rulesButton appelée");

  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
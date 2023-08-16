/* TODO :
- Ecran d'accueil avec sélection style de jeu
- Version pierre papier ciseaux classique
- Faire un système de message
- Rajouter un système de manches ?

- version avec pierre papier ciseaux lézar spock
- dynamiser le menu pour ajouter les règles en fonction du style
- faire un compteur de victoire d'affilé

*/

const app = {
  init: function () {
    const rulesButton = document.querySelector('#rules');
    const showButton = rulesButton.addEventListener("click", app.showRules);

    app.homeSelection();
    app.setCards(cards, getRandomInt(max), getRandomInt(max))
  },

  handleClick: function(event){
    const target = event.target.getAttribute('value');
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  },

  /**
   * Fonction qui affiche le menu de sélection du type de jeu 
   */
  homeSelection: function () {
    const difficultyButtons = document.querySelectorAll('.difficulty-element');
    difficultyButtons.forEach(difficulty => {
      difficulty.addEventListener('click', app.setType)
    });
  },

 /**
  * Fonction qui paramêtre le style de jeu
  * @param {string} difficulty 
  */
  setType: function(difficulty){
    console.log("Fonction setType appelée");
    const gameType = difficulty.currentTarget.getAttribute('value');
    const cards = ["ciseaux", "feuille", "pierre"];
    if (gameType == "spock"){
      // en cas du type "spock", nous rajoutons les éléments dans la liste des cartes.
      cards.push("lezard", "spock");
    }
    const divDifficulty = document.querySelector('.difficulty').classList.add('none');
    const divGame = document.querySelector('.game').classList.remove('none');
    app.setGame(cards, difficulty);
  },

 /**
  * Fonction qui paramêtre le style de jeu
  * recoit le tableau contenant les différentes cartes
  * @param {array} cards 
  * @param {string} difficulty 
  */
   setGame: function(cards, difficulty){
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
    const ulElement = document.querySelector('#listCards');
    console.log(ulElement);
    cards.forEach((card, index) => {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.innerHTML = `<img src='./assets/${card}.jpg' value='${index}' />`
    });
    const max = cards.length - 1;

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const liElements = document.querySelectorAll('li');
    console.log(liElements);
    liElements.forEach(liElement => {
      liElement.addEventListener('click', app.handleClick)
    });
    // Appel de la fonction setCards en envoyant un chiffre alléatoire entre 0 et le max -1
    // app.setCards(cards, getRandomInt(max), getRandomInt(max))
  },

  /**
   * 
   * @param {array} cards 
   * @param {int} player 
   * @param {int} bot 
   */
  setCards: function(cards, player, bot){
    console.log(cards[player]);
    console.log(cards[bot]);
    const partPlayer = document.querySelector('.part-player');
    const partBot = document.querySelector('.part-bot');
  },
  /**
   * Fonction qui affiche une page expliquant les règles
   */
  showRules: function () {
    // console.log("Fonction rulesButton appelée");

  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
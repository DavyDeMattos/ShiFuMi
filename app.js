let playerCard = card = null;
// let cards= "";
// const cards = ["ciseaux", "feuille", "pierre"];
// const cards = ["ciseaux", "feuille", "pierre", "lezard", "spock"]
const robotImg = '<img src="./assets/robot.jpg" value="robot" />'

const scoreTitle = document.querySelector('#score');
let score = 0;
scoreTitle.textContent = score;

const app = {
  /**
   * Fonction qui s'initialise au chargement de la page
   */
  init: function () {
    const rulesButton = document.querySelector('#rules');
    // const rulesButton = "coucou";
    // console.log(rulesButton);
    const showButton = rulesButton.addEventListener("click", app.showRules);
    const partBot = document.querySelector('.part-bot');
    partBot.innerHTML = robotImg;
    
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

    const max = app.cards.length - 1;

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
      textTitle = "Pierre Feuille Ciseaux Lézard Spock";
    }else {
      textTitle = "Pierre Feuille Ciseaux";
    }
    title.textContent = textTitle;
    // ----------------------
    const partPlayer = document.querySelector('.part-player');
    const ulElement = document.createElement('ul');
    // console.log(app.cards);
    app.cards.forEach((card, index) => {
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
    partPlayer.innerHTML = `<img src='./assets/${app.cards[player]}.jpg' value='${player}' />`;
    const partBot = document.querySelector('.part-bot');
    partBot.innerHTML = `<img src='./assets/${app.cards[bot]}.jpg' value='${bot}' />`;

    results.whoWon(player, bot)
  },
  /**
   * Fonction qui affiche une page expliquant les règles
   */
  showRules: function () {
    // console.log("Fonction rulesButton appelée");
    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    const gameArea = document.querySelector('h1');
    const divElement = document.createElement("div");
    gameArea.appendChild(divElement);
    // insertAfter(gameArea, divElement);

    // console.log(cards);
    divElement.classList.add("rules--explaination");

    if (!app.cards){
      divElement.innerHTML = `<h4>Règles</h4> <h5>Pierre Papier Ciseaux</h5><img src='./assets/explication_1.jpg'/><h5>Pierre Papier Ciseaux Lézard Spock</h5><img src='./assets/explication_2.jpg'/>`;
    }else if (app.cards[app.cards.length-1] == "spock"){
    divElement.innerHTML = `<h4>Règles</h4><img src='./assets/explication_2.jpg'/>`;
    } else if (app.cards[app.cards.length-1] == "pierre"){
    divElement.innerHTML = `<h4>Règles</h4><img src='./assets/explication_1.jpg'/>`;
    }

    document.addEventListener("mouseup", function(event) {
      var obj = document.querySelector(".rules--explaination");
      if (!obj.contains(event.target)) {
          // alert("Outside click detected!");
          divElement.remove();
      }
      else {
          // alert("Inside click detected!");
      }
    });
    // console.log(divElement);
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
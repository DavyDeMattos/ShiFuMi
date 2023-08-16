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

  },

  /**
   * Fonction qui affiche le menu de sélection du type de jeu 
   */
  homeSelection: function () {
    const difficultyButtons = document.querySelectorAll('.difficulty-element');
    difficultyButtons.forEach(difficulty => {
      difficulty.addEventListener('click', app.setGame)
    });
  },

  setGame: function(difficulty){
    console.log("Fonction setGame appelée");
    const gameType = difficulty.currentTarget.getAttribute('value');
    // let difficultyClass = "normal";
    const cards = ["ciseaux", "feuille", "pierre"];
    if (gameType == "spock"){
      // en cas du type "spock", nous rajoutons les éléments dans la liste des cartes.
      cards.push("lezard", "spock");
    }
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
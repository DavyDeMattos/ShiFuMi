const difficulties = {
  /**
   * Fonction qui affiche le menu de sélection du type de jeu 
   */
   homeSelection: function () {
    const difficultyButtons = document.querySelectorAll('.difficulty-element');
    difficultyButtons.forEach(difficulty => {
      difficulty.addEventListener('click', difficulties.setType)
    });
  },

  /**
  * Fonction qui paramêtre le style de jeu
  * @param {string} difficulty 
  */
    setType: function(difficulty){
      app.cards = ["ciseaux", "feuille", "pierre"];
      // console.log("Fonction setType appelée");
      const gameType = difficulty.currentTarget.getAttribute('value');
      if (gameType == "spock"){
        // en cas du type "spock", nous rajoutons les éléments dans la liste des cartes.
        app.cards.push("lezard", "spock");
      }
      const divDifficulty = document.querySelector('.difficulty').classList.add('none');
      const divGame = document.querySelector('.game').classList.remove('none');
      app.setGame(difficulty);
    },

}
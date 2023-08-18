const results = {

  /**
   * Fonction qui détermine qui gagne
   * @param {array} cards 
   * @param {int} player 
   * @param {int} bot 
   */
  whoWon: function (cards, player, bot) {
    if (player == bot){
      results.showResult("Egalité")
    }else { 
      if(player == 0){
        // Cas ou le joueur est ciseaux
        // Coupe le papier et décapite le lézard
        (bot==1 || bot==3) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else 
      if(player == 1){
        // Cas ou le joueur est feuille
        // Recouvre la pierre et Réfute Spock
        (bot==2 || bot == 4) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else 
      if (player == 2){
        // Cas ou le joueur est pierre
        // Ecrase les ciseaux et écrase le lézard
        (bot==0 || bot==3) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else 
      if(player == 3){
        // Cas ou le joueur est lézard
        // empoisonne Spock et mange la feuille
        (bot==4 || bot==1) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else 
      if(player == 4){
        // Cas ou le joueur est Spock
        // Casse les ciseaux et vaporse la pierre
        (bot==0 || bot==2) ? results.showResult("Gagné") : results.showResult("Perdu")
      }
    }
  },

  /**
   * 
   * @param {string} result 
   */
  showResult:function (result){
    // console.log("fonction showResult appelé")
    // console.log(result);
    const sectionGame = document.querySelector(".game");
    const divElement = document.createElement("div");
    divElement.classList.add("result");
    // console.log(divElement);
    sectionGame.appendChild(divElement);
    divElement.innerHTML = `<h4>Résultat</h4><p> ${result}<p/>`;
  },


}
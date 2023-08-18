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
        return (bot==1) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else if(player == 1){
        // Cas ou le joueur est feuille
        return (bot==2) ? results.showResult("Gagné") : results.showResult("Perdu")
      }else if (player == 2){
        // Cas ou le joueur est pierre
        return (bot==0) ? results.showResult("Gagné") : results.showResult("Perdu")
      }
    }
  },

  showResult:function (result){
    console.log("fonction showResult appelé")
    console.log(result);
  }


}
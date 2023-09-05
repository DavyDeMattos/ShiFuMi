const results = {

  /**
   * Fonction qui détermine qui gagne
   * @param {int} player // Index du tableau app.cards
   * @param {int} bot  // Index du tableau app.cards
   */
  whoWon: function (player, bot) {
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
   * Active/Désactive la classe de la div qui montre le résultat de la manche.
   * @param {string} result // Le paramètre servira à la fonction showScore() appellé dans celle ci
   */
  showResult:function (result){
    // console.log("fonction showResult appelé")
    // console.log(app.cards);
    this.showScore(result);
    const sectionGame = document.querySelector(".game");
    const divElement = document.createElement("div");
    divElement.classList.add("result");
    sectionGame.appendChild(divElement);
    divElement.innerHTML = `<h4>Résultat</h4><p> ${result}</p><div class="restart--button">Recommencer</div>`;
    const restartButton = document.querySelector(".restart--button");
    // restartButton.addEventListener('click', app.setGame((cards, ((cards.includes("spock")) ? "spock" : "normal"))));
    restartButton.addEventListener('click', results.reset);
  },

  /**
   * 
   * @param {string} result // string simple avec "Gagné", "Perdu" et "Egalité"
   */
  showScore:function (result){

    if(result=="Gagné"){
      score += 1;
    } else if (result=="Perdu"){
      score = 0;
    }
    scoreTitle.textContent = score;
  },

  reset:function(){
    const partPlayer = document.querySelector('.part-player');
    const partBot = document.querySelector('.part-bot');
    partPlayer.innerHTML = "";
    partBot.innerHTML = robotImg;
    const sectionGame = document.querySelector(".result");
    sectionGame.remove(); 
    
    app.setGame((app.cards, ((app.cards.includes("spock")) ? "spock" : "normal")))

  }

}
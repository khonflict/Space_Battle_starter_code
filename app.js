
// Add a start button to help activate player. Button opens dialogue box using prompt() and displays introduction.  
  function startGame() {
    
    let player = prompt("!!!!!!WARNING!!!! Aliens are attacking. Earth needs your help! Here's your mission - open the console log on the page to join the fight. The fate of the planet is in your hands! Ready to enlist? Enter your name below!");
    
    if (player != null) {
      console.log("Welcome Captain " + player + "! Thanks for joining the fight!");
  }
}

// Add status check to see if player won battle using if/else. If enemy ship is destroyed player can continue or retreat.  

  
  const battleWinCheck = enemy => {
    
    if (enemy.hull <= 0) {
    console.log("Nice work Captain! You blew up " + enemy.name);
    
    victory();
    prompt(
    "The mission is going well. The choice is yours, Captain " + player + ". Would you like to continue with the fight or retreat for rest and repairs?"
    );  

  } else {
    console.log("Shoot again! The aliens are still after you!");
  }
};
  
// Add status check to see if player won game
  
  const didPlayerWin = () => {
    if (enemy[0] === "dead") {
    console.log(
    "Yay, you took down the enemy! Keep up the good work Captain!"
    );

    prompt(
    "Captain you saved Earth!!!! Would you like to play again?"
    );

    } else {
    console.log(
    "You must strike fast! The aliens are surrounding you!",
  );
      
      if (enemy[3] === "dead") {
        enemy[0].attack(hero);
      } else {
        enemy[0].fight(hero); 
      }
    }
  };
  
// Add status check of enemy ship   
  
  const victory = () => {
    if (enemy[0].hull <= 0) {
      console.log(
      "Congrtualtions Captian! You destroyed the alien ship!"
      );
      enemy[enemy.length] = "dead";
      enemy.splice(0, 1);
      didPlayerWin();

    } else {
      console.log(
      "The aliens are not retreating. You will have to shoot faster!",
      );
      didPlayerWin();
    }
  };
  
// Add option for player to lose
  
  const defeat = hero => {
    if (hero.hull <= 0) {
      console.log(
      "Sorry Captain, " + player + "you did not complete the mission. You lose. You will do better next time!"
      );
      prompt(
      `Earth is still in danger and the ${hero.name} can be repaired! Will you join the fight once more?`
      );
    } else {
      console.log(
      "What's your move, Captain?",
      );
    }
  };
  
  // hero ship constructor 
  
  class Hero {
    constructor(name, hull, accuracy) {
      this.name = name;
      this.hull = hull || 20;
      this.accuracy = accuracy || 0.7;
      this.weapons = {
      lasers: 5,
      };
    }
        
  attack(enemy) {
    if (this.hull >= 1) {
      if (enemy.name === enemy[0].name) {
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
        console.log(
        enemy.name + " was hit! Nice job!"
        );
        console.log((enemy.hull += -this.weapons.lasers));
        victory(enemy);
      } else {
        console.log(
        "There was no damage Captain. Try again!",
      
        );
        victory(enemy);
      }
    } else {
      console.log(
      "No go. Play agian?",
            
      );
      console.log(
      "What's your next move Captain?",
      );
        }
} else {
  console.log("Direct hit! Mission failed. Would you like to play agian?"); 
    }
  }
}
  
  // Add main player ship
  let hero = new Hero(" USS Schwarzenegger ");
  
  // enemy ship constructor 
  
  class Alienship {
    constructor(name) {
      this.name = name;
      this.hull = Math.floor(Math.random() * 4) + 3; // make random between 3 & 6
      this.firepower = Math.floor(Math.random() * 3) + 2; // make random between 2 & 4 //
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // make random between .6 and .8 //
      this.weapons = {
        lazers: Math.floor(Math.random() * 3) + 2, 
      };
    }
    
    fight(hero) {
      if (this.name === enemy[0].name) {
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
          console.log(
            "We've been hit!"
          );
          console.log((hero.hull -= this.firepower));
          defeat(hero); 
        } else {
          console.log(this.name + " missed us!"); 
          
          defeat(hero); 
        }
      } else {
        console.log("Bye bye aliens!");
       
        defeat(hero);
      }
    }
    
  // Add ships in an array so they can be removed when "dead" 

  let enemy = [];  
  
  enemy.unshift((al1 = new Alienship("AL #1")));
  enemy.unshift((al2 = new Alienship("AL #2")));
  enemy.unshift((al3 = new Alienship("AL #3")));
  enemy.unshift((al4 = new Alienship("AL #4")));
  enemy.unshift((al5 = new Alienship("AL #5")));
  enemy.unshift((al6 = new Alienship("AL #6")));
  
  
 
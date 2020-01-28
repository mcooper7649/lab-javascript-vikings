// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function(){
            return this.strength;
        }
        this.receiveDamage = function(damage){
            this.health = health - damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
      // `super` refers to the constructor of the parent (Animal)
      // with super Cat gets all the attributes and methods of the Animal class
      super(name, health, strength);
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.receiveDamage = function(damage) {
        this.health = health - damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`}
            else {return `${this.name} has died in act of combat`}
    }
      this.battleCry = function (){
         return "Odin Owns You All!";
      }
    }
  }


  this.receiveDamage = function(damage) {
            this.health = health - damage;
            if(this.health > 0){
                return `${this.name} has received ${damage} points of damage`}
                else {return `${this.name} has died in act of combat`}
        }


// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
      super(name, health, strength);
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.receiveDamage = function (damage) {
          this.health = health - damage;
          if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`}
            else {return `A Saxon has died in combat`}
      }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.addViking = function(viking) {
            this.vikingArmy.push(viking);
        }
        this.addSaxon = function(saxon) {
            this.saxonArmy.push(saxon);
        }
        this.vikingAttack = function() {
            let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
            let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
            let attackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
            if(this.saxonArmy[randomSaxon].health <= 0) {
                this.saxonArmy.splice(randomSaxon, 1)
              }
            return attackResult;
        }
        this.saxonAttack = function() {
            let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
            let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
            let attackResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
            if(this.vikingArmy[randomViking].health <= 0) {
                this.vikingArmy.splice(randomViking, 1)
              }
            return attackResult;
        }
        
        // this.showStatus = function(){

        //     }
        // }
    }
}
    

 


// addViking()
// addSaxon()
// vikingAttack()
// saxonAttack()
// showStatus()
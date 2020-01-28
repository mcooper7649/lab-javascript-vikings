// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        ;
    }
    attack () {
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
      // `super` refers to the constructor of the parent (Animal)
      // with super Cat gets all the attributes and methods of the Animal class
      super(health, strength);
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
        receiveDamage(damage){
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`}
            else {return `${this.name} has died in act of combat`}
    }
        battleCry(){
         return "Odin Owns You All!";
      }
    }
  }



// Saxon
class Saxon extends Soldier {
      receiveDamage(damage){
          super.receiveDamage(damage);
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
    }
        addViking(viking) {
            this.vikingArmy.push(viking);
        }
        addSaxon(saxon){
            this.saxonArmy.push(saxon);
        }
        vikingAttack() {
            let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
            let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
            let attackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
            if(this.saxonArmy[randomSaxon].health <= 0) {
                this.saxonArmy.splice(randomSaxon, 1)
              }
            return attackResult;
        }
        saxonAttack() {
            let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
            let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
            let attackResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
            if(this.vikingArmy[randomViking].health <= 0) {
                this.vikingArmy.splice(randomViking, 1)
              }
            return attackResult;
        }
        
        showStatus(){
            if (this.saxonArmy.length === 0){
                return "Vikings have won the war of the century!"
            }
            else if(this.vikingArmy.length === 0){
                return "Saxons have fought for their lives and survived another day..."
            }
            else {
                return "Vikings and Saxons are still in the heat of battle."
            }
        }
    }
}
    

 


// addViking()
// addSaxon()
// vikingAttack()
// saxonAttack()
// showStatus()
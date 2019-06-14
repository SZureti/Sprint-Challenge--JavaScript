// 1. Copy and paste your prototype in here and refactor into class syntax.

//GameObject
class GameObject{
    constructor(opt){
        this.createdAt = opt.createdAt;
        this.name = opt.name;
        this.dimensions = opt.dimensions;
        this.destroy = function(){
              return `${this.name} was removed from the game.`;
          }
      }
  }


//CharacterStats
class CharacterStats extends GameObject {
      constructor(stats){
            super(stats)
          this.healthPoints = stats.healthPoints;
      }
      takeDamage () {
          return `${this.name} took damage.`;
      }
      greet(GameObject){
          return `${GameObject.name} offers a greeting in ${GameObject.language}`
      }
  }

//Humanoid 
class Humanoid extends CharacterStats {
    constructor(humanoidOpt){
        super(humanoidOpt)
        this.team= humanoidOpt.team;
        this.weapons = humanoidOpt.weapons;
        this.language = humanoidOpt.language;
        }
        greet (){
            return `${this.name} offers a greeting in ${this.language}.`;
        }
        
    }
  
      
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
},
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
],
language: 'Common Tongue',
});


const swordsman = new Humanoid({
createdAt: new Date(),
dimensions: {
length: 2,
width: 2,
height: 2,
},
healthPoints: 15,
name: 'Sir Mustachio',
team: 'The Round Table',
weapons: [
'Giant Sword',
'Shield',
],
language: 'Common Tongue',
});

const archer = new Humanoid({
createdAt: new Date(),
dimensions: {
length: 1,
width: 2,
height: 4,
},
healthPoints: 10,
name: 'Lilith',
team: 'Forest Kingdom',
weapons: [
'Bow',
'Dagger',
],
language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.








/////////////////////////////////////

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Build next constructor 
function GameObject(gameObejectAttributes){
  this.createdAt = gameObejectAttributes.createdAt;
  this.dimensions = gameObejectAttributes.dimensions;
}
//methods for this ^ constructor 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; 
}
 
//Build next constructor 
function CharacterStats(characterStatsAttribute){
  this.hp = characterStatsAttribute.hp;
  this.name = characterStatsAttribute.name; 
  GameObject.call(this, characterStatsAttribute); 
}
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype); 

//methods for this ^ constructor 
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

//Test you work by uncommenting these 3 objects and the list of console logs below:
function Humanoid(humanoidAttributes){  
  this.faction = humanoidAttributes.faction; 
  this.weapons = humanoidAttributes.weapons; 
  this.language = humanoidAttributes.language; 
  CharacterStats.call(this,humanoidAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype); 
//Humanoid methods under here. 
//greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//^^ building above. 

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Sword',
  ],
  language: 'Common Toungue',
});


const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir LanceAlot',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Gigi',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});
// new constructor 
function Villian(villianAttributes){
  Humanoid.call(this, villianAttributes); 
  this.badBreath = villianAttributes.badBreath;
  this.opponentHealth = villianAttributes.opponentHealth;
}
//inherit
Villian.prototype = Object.create(Humanoid.prototype); 

//methods 
Villian.prototype.evilLaugh = function () {
  this.opponentHealth -= 10;
  return `The villian ${this.name} lets out an evil laugh - you will fail and i will defeat you!`;
}


function Hero (heroAttributes){
  this.goodLooks = heroAttributes.goodlooks;
  this.opponentHealth = heroAttributes.opponentHealth;

  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);  

Hero.prototype.studyHard = function () {
  this.opponentHealth -=20;
  console.log(this.opponent); 
  return `The hero ${this.name} studies hard`; 
}
Hero.prototype.workHard = function () {
  this.opponentHealth -=50; 
  return `The hero ${this.name} works hard`
}
Hero.prototype.flawlessVictory = function() {
  this.opponentHealth-= 30; 
  return `The hero learns to program using his weapons ${this.weapons}... and defeats the villian`; 
}


const richard = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Richard',
  faction: 'Saint Diego',
  weapons: [
    'nunchucks', 'ninja stars', 'mace', 'brass knuckles', 'AK-47' 
  ],
  language: 'samurai',
  goodLooks: 'High',
  opponentHealth: 100
});

failure = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Failure',
  faction: 'Forest Kingdom',
  weapons: [
    'fear','low self-esteem'
  ],
  language: 'Marlarkey',
  badBreath: 'Terrible Breath',
  opponentHealth: 100
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


console.log("A new battle is about to begin")
console.log(`The match ${richard.name} vs ${failure.name} has begun.`);
console.log(`The villian has the following weapons ${failure.weapons}`);
console.log(`The hero has the following weapons ${richard.weapons}`); 
console.log(`The villian has the following extra attribute ${failure.badBreath} breath`); 
console.log(`The villian speaks the following language ${failure.language}`);
console.log(`The hero speaks the following language ${richard.language}`);
console.log(failure.evilLaugh());
console.log(`${richard.name} has been reduced, ${richard.name} now has ${failure.opponentHealth}`);
console.log(richard.studyHard());
console.log(`${failure.name} has been reduced, ${failure.name} now has ${failure.opponentHealth}`);
console.log(richard.workHard());
console.log(`${failure.name} has been reduced, ${failure.name} now has ${richard.opponentHealth}`) ;
console.log(richard.flawlessVictory()); 
console.log(`${failure.name} has been reduced, ${richard.opponentHealth} now has ${richard.opponentHealth}`);
console.log(`${richard.name} WINS GETS A NEW JOB WITH HIGH PAY!`); 

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

 
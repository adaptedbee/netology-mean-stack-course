"use strict";

class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  show() {
    console.log(`Hi! My name is ${this.name}, my level is ${this.level}`);
  }
  valueOf(){
    return this.level;
  }
}

let myPokemon = new Pokemon('Meowth', 100);
myPokemon.show();

class Pokemonlist extends Array{
  add(name,level){
    let newPokemon = new Pokemon(name,level);
    this.push(newPokemon);
  }
  show(){
    for (let item of this){
      item.show();
    }
    console.log(`There are ${this.length} pokemons here.`);
  }
  max(){
    let maxLevel = null, strongestPokemon;
    for (let item of this){
      if ((item.valueOf() > maxLevel)||(maxLevel==null)){
        maxLevel = item.valueOf();
        strongestPokemon = item;
      }
    }
    this.show();
    return strongestPokemon;
  }
}

let lostPokemons = [
  {
    name: 'Bulbasaur',
    level: 10
  },
  {
    name: 'Charmander',
    level: 20
  }
];

let lost = new Pokemonlist(...lostPokemons.map(
  obj => new Pokemon(obj.name, obj.level)
));

let foundPokemons = [
  {
    name: 'Squirtle',
    level: 30
  },
  {
    name: 'Metapod',
    level: 40
  }
];

let found = new Pokemonlist(...foundPokemons.map(
  obj => new Pokemon(obj.name, obj.level)
));

lost.add('Weedle', 50);
lost.add('Pikachu', 60);

found.add('Spearow', 70);
found.add('Nidoran', 80);

console.log('Initial lists of pokemons:');
lost.show();
found.show();

let foundPokemon = lost.splice(3,1)[0];
found.push(foundPokemon);

console.log('Updated lists of pokemons:');
lost.show();
found.show();

console.log('The strongest in lost list:');
lost.max();
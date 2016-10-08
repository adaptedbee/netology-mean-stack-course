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
  constructor(...params){
    super();
    for (let item of params){
      let newPokemon = new Pokemon(item.name,item.level);
      this.push(newPokemon);
    }
  }
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

let lost = new Pokemonlist(
  {
    name: 'Bulbasaur',
    level: 10
  },
  {
    name: 'Charmander',
    level: 20
  }
);

let found = new Pokemonlist(
  {
    name: 'Squirtle',
    level: 30
  },
  {
    name: 'Metapod',
    level: 40
  }
);

lost.add('Weedle', 50);
lost.add('Pikachu', 60);

found.add('Spearow', 70);
found.add('Nidoran', 80);

console.log('Initial lists of pokemons:');
lost.show();
found.show();

let foundPokemon = lost.splice(2,1);
found.push(foundPokemon[0]);

console.log('Updated lists of pokemons:');
lost.show();
found.show();

console.log('The strongest in lost list:');
lost.max();
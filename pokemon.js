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

let myPokemon = newPokemon('Meowth', 100);
myPokemon.show();

class Pokemonlist extends Array{
  add(name,level){
    let newPokemon = new Pokemon(name,level);
    this.push({
      name,
      level
    });
  }
  show(){
    for (let item of this){
      console.log(`${item.name}, level ${item.level}`);
    }
    console.log(`There are ${this.length} pokemons here.`);
  }
  max(){
    let maxLevel = null, strongestPokemon;
    for (let item of this){
      if ((item.level > maxLevel)||(maxLevel==null)){
        maxLevel = item.level;
        strongestPokemon = item;
      }
    }
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

lost.show();
found.show();

let [,,,foundPokemon] = lost;
lost.pop();
found.add(foundPokemon.name, foundPokemon.level);

lost.show();
found.show();

lost.max();
found.max();
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
  constructor(...items){
    items = items.filter(
      item => item instanceof Pokemon
    );
    super(...items);
  }
  add(name,level){
    let newPokemon = new Pokemon(name,level);
    this.push(newPokemon);
  }
  show(){
    this.forEach(function(item){
      item.show();
    });
    console.log(`There are ${this.length} pokemons here.`);
  }
  max(){
    let strongestPokemon = Math.max(...this);
    return this.find(
      item => item.level==strongestPokemon
    );
  }
}

let lost = new Pokemonlist(new Pokemon('Bulbasaur', 10), new Pokemon('Charmander', 20), {name:'NotPokemon',level:0});

let found = new Pokemonlist(new Pokemon('Squirtle', 30), new Pokemon('Metapod', 40), {});

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
lost.max().show();
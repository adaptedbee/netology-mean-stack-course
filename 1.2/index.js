"use strict";

const pokemonsJSON = require('./pokemons');
const Pokemonlist = require('./pokemonlist');
const hidenseek = require('./hidenseek');

const help = () => {
  console.log('node index hide field pokemons.json');
  console.log('Hides pokemons from pokemons.json in field folder');
  console.log('node index seek field');
  console.log('Seeks pokemons in field folder');
};

const getPokemons = (path) => {
  let filepath = path.substring(0, path.indexOf('.'));
  let pokemonsToHide = new Pokemonlist();
  let pokemonsJSON = require(`./${filepath}`);
  pokemonsJSON.forEach((item) => {
    pokemonsToHide.add(item.name, item.level);
  });
  return pokemonsToHide;
};

if (process.argv.length <= 2) {
  help();
};

if ((process.argv.length == 5) && (process.argv[2] == 'hide') && (process.argv[3] == 'field') && (process.argv[4] == 'pokemons.json')){

  hidenseek.hide(`./${process.argv[3]}/`, getPokemons(process.argv[4]), (hiddenPokemons) => {
    console.log('Pokemons are hidden!');
    hiddenPokemons.show();
  });
  console.log('Hiding...');
};

if ((process.argv.length == 4) && (process.argv[2] == 'seek') && (process.argv[3] == 'field')){
  hidenseek.seek(`./${process.argv[3]}/`, (foundPokemons) => {
    console.log('Pokemons are found!');
    foundPokemons.show();
  });
  console.log('Seeking...');
};
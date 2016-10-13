"use strict";

const random = require('./random');
const fs = require('fs');
const Pokemon = require('./pokemon');
const Pokemonlist = require('./pokemonlist');

const hide = (folder, pokemonsList, callback) => {

  let randomPokemonsNumber = (3<=pokemonsList.length) ? random(1, 3) : random (1, pokemonsList.length);

  for (let f =1; f<=10; f++){
    (f<10)? fs.mkdirSync(folder + `0${f}`) : fs.mkdirSync(folder + '10');
  };

  let hiddenPokemons = new Pokemonlist();

  for (let n = 1; n <=randomPokemonsNumber; n++){
    let randomFolderNumber = random(1,10);

    let randomPokemon = pokemonsList[random(0,pokemonsList.length-1)];
    let randomPokemonData = `${randomPokemon.name}|${randomPokemon.level}`;

    fs.readdir(folder, function(err, files) {
      if (err) return console.error(err);
      let filepath = folder + files[randomFolderNumber-1].toString();
      fs.readdir(filepath, function(err, files) {
        if (err) return console.error(err);
        if (files.length==0) {
          fs.writeFile(filepath + '/pokemon.txt', randomPokemonData, function(err){
            if (err) return console.error(err);
            hiddenPokemons.push(randomPokemon);
            if (hiddenPokemons.length==randomPokemonsNumber) callback(hiddenPokemons);
          });
        }
      });
    });
  }
};

const seek = (folder, callback) => {
  fs.readdir(folder, function(err, files) {
    if (err) return console.error(err);
    let foundPokemons = new Pokemonlist();

    for (let folderNumber = 0; folderNumber<files.length; folderNumber++){
      let filepath = folder + files[folderNumber].toString();
      let insideFiles = fs.readdirSync(filepath);
      if (insideFiles.length!=0) {
        let data = fs.readFileSync(filepath + '/pokemon.txt', 'utf8');
        let foundPokemonData = data.split('|');
        let foundPokemon = new Pokemon(foundPokemonData[0], foundPokemonData[1]);
        foundPokemons.push(foundPokemon);
      };
      if (folderNumber==files.length-1) callback(foundPokemons);
    };

  });

};

module.exports = {
  hide,
  seek
};
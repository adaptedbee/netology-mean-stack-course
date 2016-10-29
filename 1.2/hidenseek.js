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

    fs.readdir(folder, (err, files) => {
      if (err) return console.error(err);

      let foldersList = files;
      for (let n = 1; n <=randomPokemonsNumber; n++){
        let randomPokemonIndex = random(0,pokemonsList.length-1);
        let randomPokemon = pokemonsList[randomPokemonIndex];
        pokemonsList.splice(randomPokemonIndex,1);
        let randomPokemonData = `${randomPokemon.name}|${randomPokemon.level}`;

        let randomFolderNumber = random(1, foldersList.length);
        let filepath = folder + foldersList[randomFolderNumber-1].toString();

        fs.writeFile(filepath + '/pokemon.txt', randomPokemonData, function(err){
          if (err) return console.error(err);
          hiddenPokemons.push(randomPokemon);
          foldersList.splice(randomFolderNumber-1,1);
          if (hiddenPokemons.length==randomPokemonsNumber) callback(hiddenPokemons);
        });
      }
    });

  // }
};

const getPokemon = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath + '/pokemon.txt', 'utf8', (err, data) => {
      resolve(err ? null : data);
    });
  });
};

const seek = (folder, callback) => {

  let foundPokemons = new Pokemonlist();

  fs.readdir(folder, (err, files) => {
    if (err) return console.error(err);

    let foundPokemonsArray = files.map(file => getPokemon(folder + file.toString()));

    Promise.all(foundPokemonsArray).then((array) => {
      array.forEach((item) => {
          if (item != null) {
            let foundPokemonData = item.split('|');
            let foundPokemon = new Pokemon(foundPokemonData[0], parseInt(foundPokemonData[1]));
            foundPokemons.push(foundPokemon);
          };
        }
      );
      callback(foundPokemons);
    });
  });

};

module.exports = {
  hide,
  seek
};
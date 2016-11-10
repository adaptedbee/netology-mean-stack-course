const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/testbase';

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.log('Невозможно подключиться к серверу MongoDB. Ошибка: ', err);
  } else {
    console.log('Соединение установлено для ', url);

    const collection = db.collection('pokemons');

    const pokemons = [
      {name: "Bulbasaur", level: 10},
      {name: "Charmander", level: 20},
      {name: "Squirtle", level: 30},
      {name: "Metapod", level: 40},
      {name: "Weedle", level: 50}
    ];

    collection.insert(pokemons, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        collection.find({level:10}).toArray((err, result) => {
          if (err) {
            console.log(err);
          } else if (result.length) {
            console.log('Найденный:', result);
          } else {
            console.log('Нет документов с данным условием поиска');
          }
        });
        collection.remove();
      };
      db.close();
    });

  }
});
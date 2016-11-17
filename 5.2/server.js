const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 1337;
const url = 'mongodb://localhost:27017/testbase';
let db;

MongoClient.connect(url, (err, database) => {
  if (err) {
    console.log(err);
  } else {
    db = database;

    const collection = db.collection('contacts');
    const contacts = [
      {name: "Ivanov Ivan", phone: "81112223344"},
      {name: "Petrov Petr", phone: "81112224455"},
      {name: "Alekseev Aleksey", phone: "81112225566"}
    ];
    collection.insert(contacts, (err, result) => {
      if (err) console.log(err);
    });

    app.listen(port, () => {
      console.log(`Listening port ${port}...`);
    });
  };
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

// get all contacts
app.get("/contacts", (req, res) => {
  db.collection('contacts').find().toArray((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({contacts: result});
    };
  });
});

// add new contact
app.post("/contacts", (req, res) => {
  db.collection('contacts').save(
    {
      name: req.body.name,
      phone: req.body.phone
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: 'Contact added!' });
      };
    }
  );
});

// update certain contact
app.put("/contacts/:id", (req, res) => {
  db.collection('contacts').update(
    { _id: req.body.id },
    { $set: {
        name: req.body.name,
        phone: req.body.phone
      }
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result) {
        res.json({ message: 'Contact updated!' });
      } else {
        res.json({ message: 'Not Found' });
      };
    }
  );
});

// find certain contact by name
app.get("/contacts/:id", (req, res) => {
  db.collection('contacts').find({
    name: req.body.name
  }).toArray((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({contacts: result});
    };
  });
});
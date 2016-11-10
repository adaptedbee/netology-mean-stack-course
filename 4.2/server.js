const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
  res.status(200).send("Hello Express.js");
});

app.get('/hello', (req, res) => {
  res.status(200).send("Hello stranger !");
});

app.get('/hello/:name', (req, res) => {
  res.status(200).send(`Hello, ${req.params.name} !`);
});

app.all('/sub/*/*', (req, res) => {
  res.status(200).send(`You requested URI: ${req.originalUrl}`);
});

const keyCheck = (req, res, next) => {
  if(req.get('key') === undefined) {
    next(new Error('401'));
  }
  next();
};

app.post('/post', keyCheck, (req, res) => {
  if (req.body !== undefined){
    res.json(JSON.stringify(req.body));
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});
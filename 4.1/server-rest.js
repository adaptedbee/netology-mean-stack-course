const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

const port = process.env.PORT || 1337;

let usersJSON = '[{"id": 1, "name": "John", "score": 10},{"id": 2, "name": "George", "score": 20},{"id": 3, "name": "Paul", "score": 30}]';
let users = JSON.parse(usersJSON);

const router = express.Router();

router.post("/users", (req, res) => {
  let newUser = {
    id: Date.now(),
    name: req.body.name,
    amount: req.body.score
  };
  users.push(newUser);
  usersJSON = JSON.stringify(users);
  res.status(200).json({ message: 'User added!' });
});

router.get("/users", (req, res) => {
  res.status(200).json(usersJSON);
});

router.get("/users/:id", (req, res) => {
  let i;
  for (i=0; i<users.length; i++){
    if (users[i].id == req.body.id) break;
  };
  res.status(200).json(JSON.stringify(users[i]));
});

router.put("/users/:id", (req, res) => {
  let i;
  for (i=0; i<users.length; i++){
    if (users[i].id == req.body.id) break;
  };
  users[i].name = req.body.name;
  users[i].score = req.body.score;
  usersJSON = JSON.stringify(users);
  res.status(200).json({ message: 'User updated!' });
});

router.delete("/users/:id", (req, res) => {
  let i;
  for (i=0; i<users.length; i++){
    if (users[i].id == req.body.id) break;
  };
  users.splice(i,1);
  usersJSON = JSON.stringify(users);
  res.status(200).json({ message: 'User deleted' });
});

router.delete("/users", (req, res) => {
  users = [];
  usersJSON = JSON.stringify(users);
  res.status(200).json({ message: 'All users deleted' });
});

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});
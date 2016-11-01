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
    score: req.body.score
  };
  users.push(newUser);
  usersJSON = JSON.stringify(users);
  res.status(200).json({ message: 'User added!' });
});

router.get("/users", (req, res) => {
  let offset = req.body.offset;
  let limit = req.body.limit;
  let name = req.body.name;
  let score = req.body.score;
  let selectedUsers = users;

  if (name !== undefined) {
    selectedUsers = selectedUsers.filter((item) => {
      return item.name.indexOf(name) != -1;
    });
  };

  if (score !== undefined) {
    selectedUsers = selectedUsers.filter((item) => {
      return item.score == score;
    });
  };

  if (offset === undefined) {
    offset = 1;
  };
  if (limit === undefined) {
    limit = selectedUsers.length;
  };

  if ((offset >= 1) && (offset < selectedUsers.length) && (limit > 0) && (name.length>0)) {
    if (offset-1+limit < selectedUsers.length) {
      selectedUsers = selectedUsers.slice(offset-1, offset-1+limit);
    } else {
      selectedUsers = selectedUsers.slice(offset-1, selectedUsers.length);
    };
    res.status(200).json(JSON.stringify(selectedUsers));
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
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
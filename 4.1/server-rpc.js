const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

const port = process.env.PORT || 1337;

let usersJSON = '[{"id": 1, "name": "John", "score": 10},{"id": 2, "name": "George", "score": 20},{"id": 3, "name": "Paul", "score": 30}]';
let users = JSON.parse(usersJSON);
let usersMethods = {
  addNewUser: (params) => {
    let newUser = {
      id: Date.now(),
      name: params.name,
      amount: params.score
    };
    users.push(newUser);
    usersJSON = JSON.stringify(users);
    return { message: 'User added!' };
  },
  getAllUsers: () => {
    return users;
  },
  getUser: (params) => {
    let i;
    for (i=0; i<users.length; i++){
      if (users[i].id == params.id) break;
    };
    return users[i];
  },
  updateUser: (params) => {
    let i;
    for (i=0; i<users.length; i++){
      if (users[i].id == params.id) break;
    };
    users[i].name = params.name;
    users[i].score = params.score;
    usersJSON = JSON.stringify(users);
    return { message: 'User updated!' };
  },
  deleteUser: (params) => {
    let i;
    for (i=0; i<users.length; i++){
      if (users[i].id == params.id) break;
    };
    users.splice(i,1);
    usersJSON = JSON.stringify(users);
    return { message: 'User deleted' };
  }
};

const getMethod = (type, params) => {
  if (usersMethods[type]) {
    return usersMethods[type];
  } else {
    throw new Error('UNKNOWN_METHOD');
  }
};

const router = express.Router();

router.post("/rpc", (req, res) => {
  let method = req.body.method;
  let params = req.body.params;
  let id = req.body.id;

  let handler = getMethods(method);

  let result = {
    jsonrpc: 2.0,
    result: handler(params),
    id: id
  };
  res.status(200).json(result);
});

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);

  let error = {
    jsonrpc: 2.0,
    error: {
      code: -32603,
      message: "Internal server error"
    },
    id: null
  };
  res.status(500).json(error);
});

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1337;

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/testbase';

mongoose.connect(url);

const model = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to our todo app!' });
});

router.route('/users')
  .post((req, res) => {
    const user = new model.User();
    user.name = req.body.name;
    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User created!' });
      }
    });
  })
  .get((req, res) => {
    model.User.find((err, users) => {
      if (err){
        res.send(err);
      } else {
        res.json(users);
      };
    });
  });

router.get('/users/stats', (req, res) => {
  res.json({ message: 'Stats' });

  model.Todo.aggregate({$match: {opened: true}, {$unwind: "$user"}, {$project: {name:1, opened:1, user:1, count: {$add: [1]}}}, {$group: {_id: "$user", number: {$sum: "$count"}}}, {$sort: {number: -1}})
    .exec((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.json(users);
      };
    });
});

router.route('/users/:user_id')
  .get((req, res) => {
    model.User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      };
    });
  })
  .put((req, res) => {
    model.User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        user.name = req.body.name;
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'User updated!' });
          };
        });
      };
    });
  })
  .delete((req, res) => {
    model.User.remove({
      id: req.params.user_id
    }, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User deleted' });
      };
    });
  });

router.route('/todos')
  .post((req, res) => {
    const todo = new model.Todo();
    todo.name = req.body.name;
    todo.opened = req.body.opened;
    todo.user = req.body.user;
    todo.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo created!' });
      }
    });
  })
  .get((req, res) => {
    model.Todo.find((err, todos) => {
      if (err){
        res.send(err);
      } else {
        res.json(todos);
      };
    });
  });

router.route('/todos/:todo_id')
  .get((req, res) => {
    model.Todo.findById(req.params.todo_id, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        res.json(todo);
      };
    });
  })
  .put((req, res) => {
    model.Todo.findById(req.params.todo_id, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        todo.name = req.body.name;
        todo.opened = req.body.opened;
        todo.user = req.body.user;
        todo.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Todo updated!' });
          };
        });
      };
    });
  })
  .delete((req, res) => {
    model.Todo.remove({
      id: req.params.todo_id
    }, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo deleted' });
      };
    });
  });

app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});
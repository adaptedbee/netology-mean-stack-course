const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});

const TodoSchema = new Schema({
  name: String,
  opened: Boolean,
  user: mongoose.Schema.ObjectId
});

const User = mongoose.model('User', UserSchema, 'users');
const Todo = mongoose.model('Todo', TodoSchema, 'todos');

module.exports = {
  User,
  Todo
};
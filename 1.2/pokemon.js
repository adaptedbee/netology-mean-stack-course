"use strict";

class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  show() {
    console.log(`Hi! My name is ${this.name}, my level is ${this.level}`);
  }
  valueOf(){
    return this.level;
  }
}

module.exports = Pokemon;
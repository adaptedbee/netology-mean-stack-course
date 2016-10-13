"use strict";

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  max = Math.floor(Math.random() * (max - min + 1));
  return max + min;
};

module.exports = random;
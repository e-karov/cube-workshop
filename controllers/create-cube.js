const Cube = require('../models/cube.js');

const cube = new Cube("cube1", "Default cube instance", "www.google.com", 1);
cube.save();

console.log(cube);
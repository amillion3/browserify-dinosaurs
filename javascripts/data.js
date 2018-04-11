// What happens when the call is made

const loadDinos = require('./dinosaurs');
const printToDom = require('./dom');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

const badDinos = function () {
  console.error('It is broke.');
};

const initializer = () => {
  loadDinos(whenDinosLoad, badDinos);
};

const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};

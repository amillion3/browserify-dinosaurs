const domEvents = require('./events');

const outputDiv = document.getElementById('dinos');
const domString = (dinos) => {
  let strang = '';
  dinos.forEach((dino) => {
    strang += `
              <h1>${dino.type}</h1>
    `;
  });
  return strang;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
  domEvents();
};

module.exports = printToDom;

const queue = require('./messageQueue.js');

module.exports.randomSwimGenerator = () => {
  const first = queue.dequeue();
  // const first = null;
  return first ? first : 'INVALID';
}


// const options = ['up', 'down', 'left', 'right'];
// let random = Math.floor(Math.random() * 4);
// return options[random];
// } else {
// return first;
const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const queue = require('./messageQueue.js');

const directionDispatch = () => {
  const first = queue.dequeue();
  // const first = null;
  return first ? first : 'INVALID';
}

module.exports.getDirection = (req, res) => {
  res.writeHead(200, headers);
  res.write(directionDispatch());
  return res;
}
const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const queue = require('./messageQueue.js');
const route = require('./httpHandler.js');

const getDirection = (req, res) => {
  const directionDispatch = () => {
    const first = queue.dequeue();
    return first ? first : 'INVALID';
  };
  res.writeHead(200, headers);
  res.write(directionDispatch());
  return res;
};

//REGISTER
module.exports.init = () => {
  route.actions.on('GET/direction', getDirection);
}

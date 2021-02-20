const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const methods = require('./randomSwimGenerator.js');
const bg = require('./backgroundHandler.js');
const direction = require('./directionHandler.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  //GET DIRECTION
  if (req.method === 'GET' && req.url === '/direction') {
    direction.getDirection(req, res);
  }
  //GET BACKGROUND
  if (req.method === 'GET' && req.url === '/background.jpg') {
    bg.getBackground(req, res, this.backgroundImageFile);
  }
  //POST BACKGROUND
  if (req.method === 'POST' && req.url === '/background.jpg') {
    bg.postBackground(req, res, this.backgroundImageFile);
  }
  //ACCOUNT FOR DEFAULTS
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};



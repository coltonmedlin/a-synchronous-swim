const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const methods = require('./randomSwimGenerator.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.actions = {
  'OPTIONS/': [() => {
    res.writeHead(200, headers);
  }],
};

this.actions.on = (type, callback) => {
  this.actions[type] = this.actions[type] ? this.actions[type].push(callback) : [ callback ];
};

module.exports.router = (req, res, next = ()=>{}) => {
  let lookup = req.method + req.url;
  if (this.actions[lookup]) {
    for (action of this.actions[lookup]) {
      action(req, res, this.backgroundImageFile);
    }
  }
  //ACCOUNT FOR DEFAULTS
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
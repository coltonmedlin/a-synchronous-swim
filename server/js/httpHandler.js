const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const methods = require('./randomSwimGenerator.js')

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
    res.writeHead(200, headers);
    res.write(methods.randomSwimGenerator());
  }
  //GET BACKGROUND
  if (req.method === 'GET' && req.url === '/background.jpg') {
    if (fs.existsSync(this.backgroundImageFile)) {
      let img = fs.readFileSync(this.backgroundImageFile);
      headers['Content-Type'] = 'image/jpeg';
      res.writeHead(200, headers);
      res.end(img, 'base64');
    } else {
      res.writeHead(404, headers);
    }
  }
  //POST BACKGROUND
  if (req.method === 'POST' && req.url === '/background.jpg') {
    res.writeHead(201, headers);
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body);
      let img = multipart.getFile(body);
      fs.writeFileSync(this.backgroundImageFile, img.data, 'base64', (err) => {
        if (err) return console.log(err);
      });
    });
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};



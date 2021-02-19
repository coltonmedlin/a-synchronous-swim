const fs = require('fs');
const path = require('path');
const headers = require('./cors');

module.exports.fileFetch = () => {
  fs.readFile('../background.jpg', (err, data) => {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
  });
}
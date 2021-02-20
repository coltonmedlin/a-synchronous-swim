const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const route = require('./httpHandler.js');

const getBackground = (req, res, backgroundImageFile) => {
  console.log('GETTING BG')
  if (fs.existsSync(backgroundImageFile)) {
    let img = fs.readFileSync(backgroundImageFile);
    headers['Content-Type'] = 'image/jpeg';
    res.writeHead(200, headers);
    res.end(img, 'base64');
  } else {
    res.writeHead(404, headers);
  }
  return res;
}

const postBackground = (req, res, backgroundImageFile) => {
  console.log('POSTING BG')
  res.writeHead(201, headers);
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body);
      let img = multipart.getFile(body);
      fs.writeFileSync(backgroundImageFile, img.data, 'base64', (err) => {
        if (err) return console.log(err);
      });
    });
  return res;
}

//register
route.actions.on('GET/background.jpg', getBackground);
route.actions.on('POST/background.jpg', postBackground);

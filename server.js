'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/api', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (!fields.photo) {
      return res.status(400).json({
        error: '400 Bad Request'
      });
    }
    let photoString = fields.photo;
    if (fields.photo.includes('image/png;base64,')) {
      photoString = fields.photo.replace('data:image/png;base64,', '');
    }
    console.log(photoString);
    fs.writeFile('recognition.png', new Buffer(photoString, 'base64'), function(err) {
      console.log(err);
    });
    res.send('ok');
  });
});

app.listen(3000, () => console.log('Listening 300'));

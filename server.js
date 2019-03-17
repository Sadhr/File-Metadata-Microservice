'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });



app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  const data = req.file;
  res.json({
    name: data.originalname,
    type: data.mimetype,
    size: data.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

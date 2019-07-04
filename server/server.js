const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

var dir = __dirname + "/../";

app.use(express.static(dir));
app.use(express.static(path.join(dir, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(dir, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log("App listening on http://localhost:8080");
});

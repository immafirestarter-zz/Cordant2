var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || '8000'
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log('Server running on localhost:${port}'));

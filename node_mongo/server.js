var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    Schema = mongoose.Schema,
    casesController = require('./server/controllers/cases-controller');

mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/js', express.static(__dirname + '/client/js'));

//REST API

app.get('/api/cases/:s/:c/:n', casesController.searchCases);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(80, function() {
  console.log('I\'m Listening...');
})

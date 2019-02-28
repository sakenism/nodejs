const express = require('express');
const app = express();
const parh = require('path');

//app.use('/public', express.static.path.join(__dirname));

app.get('/', (req, res) => {
	res.send('Hello, World');
});

app.get('/example', (req, res) => {
	res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send(req.params.name + ' : ' + req.params.age);
});

app.listen(3000);
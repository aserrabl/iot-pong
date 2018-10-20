var express = require('express');
var app = express();


var exports = module.exports = {
	start: function() {
		
		app.get('/hello', function (req, res) {
	  res.send('Hello World!');
	});

	app.listen(80, function () {
	  console.log('Example app listening on port 80!');
	});
	}
};

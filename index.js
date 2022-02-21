const http = require('http');
const fs = require('fs');

const sendContentsOfFile = (filePath, res, statusCode = 200) => {
	fs.readFile(filePath, (_err, data) => {
		res.statusCode = statusCode;
		res.setHeader('Content-Type', 'text/html');
		res.end(data);
	});
};

http
	.createServer((req, res) => {
		if (req.url === '/') {
			sendContentsOfFile('./index.html', res);
		} else if (req.url === '/about') {
			sendContentsOfFile('./about.html', res);
		} else if (req.url === '/contact-me') {
			sendContentsOfFile('./contact-me.html', res);
		} else {
			sendContentsOfFile('./404.html', res, 404);
		}
	})
	.listen(8080);

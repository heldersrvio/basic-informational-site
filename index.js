const express = require('express');

const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/about', (_req, res) => {
	res.sendFile('about.html', { root: __dirname });
});

app.get('/contact-me', (_req, res) => {
	res.sendFile('contact-me.html', { root: __dirname });
});

app.get('*', (_req, res) => {
	res.sendFile('404.html', { root: __dirname });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

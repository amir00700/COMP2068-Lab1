const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
    res.end('Hello Professor');
=======
    res.end('Hello professor');
>>>>>>> 9a5f747ba4da06837ce4c492aaaf2d6594a08832
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

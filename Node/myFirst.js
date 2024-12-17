const http = require('http');

// Create Server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
}).listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

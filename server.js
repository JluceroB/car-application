const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        fs.readFile(path.join(__dirname, 'public', 'cars.json'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ message: 'Error reading the car data' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'Not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

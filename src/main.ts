import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server started. Listening on port 3000 ...');
});

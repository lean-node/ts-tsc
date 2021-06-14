import http from 'http';

export const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World!');
});

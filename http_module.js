const http = require('http');

const server = http.createServer((req, res) => {
  const user = {
    name: 'Bruce Wayne',
    age: 24,
    isMarried: false,
  };
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else if (req.url === '/user') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(user));
  }
  else{
    res.writeHead(404)
    res.end("Page not found")
  }
});

server.listen(3000, () => {
  console.log('server is running on port: 3000');
});

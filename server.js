const website = require('./data.js')

const http = require('node:http');
const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"  content="width=device-width, initial-scale=1.0">
    <title>${website.title}</title>
</head>
<body>
    <h1>${website.title}</h1>
    <h2>${website.subtitle}</h2>
    <p>${website.description}</p>
</body>
</html>
`

const server = http.createServer((req, res) => {
  console.log('request received');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(template);
});

server.listen(3000, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});

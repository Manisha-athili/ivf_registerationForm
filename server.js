const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Apply CORS middleware with allowed origin
server.use(cors({
  origin: 'https://manisha-athili.github.io', // your frontend domain
}));

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('JSON Server is running with CORS');
});

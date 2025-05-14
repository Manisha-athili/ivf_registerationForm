// const jsonServer = require('json-server');
// const cors = require('cors');

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Enable CORS for all origins
// server.use(cors({
//   origin: '*', // Allow all origins or specify exact domains like ['https://manisha-athili.github.io']
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// }));

// // Apply middlewares
// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// // Add custom middleware to handle OPTIONS requests
// server.options('*', cors());

// // Use router
// server.use(router);

// // Start server
// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });
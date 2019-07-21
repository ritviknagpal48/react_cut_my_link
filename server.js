const http = require('http');
const app = require('./app');
const requestStats = require('request-stats');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// requestStats(server, function(stats) {
//   // this function will be called every time a request to the server completes
//   console.log(stats);
// });

server.listen(port, (req, res) => {
  console.log('server started on http://localhost:3000');
});

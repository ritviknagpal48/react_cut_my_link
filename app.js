const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressip = require('express-ip');

const urlRoute = require('./api/routes/url');
const useRoute = require('./api/routes/index');
mongoose.connect(process.env.MONGO_DB_LINK, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
// app.use(expressip().getIpInfoMiddleware);
// app.get('/', function(req, res) {
//   res.send(req.ipInfo);
// });

app.use('/api/url', urlRoute);

app.use('/', useRoute);
//to handle unexisting url's
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

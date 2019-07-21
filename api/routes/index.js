const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const iplocation = require('iplocation').default;
const publicIp = require('public-ip');
const externalip = require('externalip');
const Url_stats = require('../models/url_stats');

const Url = require('../models/url');
var where = require('node-where');

// const getIP = require('ipware')().get_ip;

router.get('/:id', (req, res, next) => {
  // console.log(req.connection);
  // console.log(req.headers);

  Url.find({ short_id: req.params.id })
    .exec()
    .then(url => {
      if (url.length >= 1) {
        externalip(function(err, ip) {
          console.log(ip); // => 8.8.8.8
          iplocation(ip, [], (error, res) => {
            // console.log(res);
            console.log(url[0]);
            console.log(url[0].long_url);
            const stats = new Url_stats({
              _id: new mongoose.Types.ObjectId(),
              long_url: url[0].long_url,
              short_url: url[0].base_url + url[0].short_id,
              country: res.country,
              state: res.region,
              time: Date().toString()
            });
            stats
              .save()
              .then(answer => {
                console.log(answer);
                console.log(answer.long_url);
                console.log('Stats added successfully');
              })
              .catch(error1 => {
                console.log(error1);
              });
          });
        });

        return res.redirect(url[0].long_url);
      } else {
        return res.status(500).json({
          message: 'url not found'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;

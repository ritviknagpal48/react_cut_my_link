const express = require('express');
const validUrl = require('valid-url');
const router = express.Router();
const shortId = require('short-id');
const checkAuth = require('../middleware/check-auth');
const getIP = require('ipware')().get_ip;

const mongoose = require('mongoose');
var validator = require('validator');
const Url = require('../models/url');
const Url_stats = require('../models/url_stats');

router.post('/', (req, res, next) => {
  // if (!validator.isURL(req.body.base_url)) {
  //   return res.status(404).json({
  //     message: 'Not a valid base url'
  //   });
  // }

  // var ipInfo = getIP(req);
  // console.log(ipInfo);
  if (!validator.isURL(req.body.long_url)) {
    return res.status(404).json({
      message: 'Not a valid long url'
    });
  }
  Url.find({ long_url: req.body.long_url })
    .exec()
    .then(result => {
      if (result.length >= 1) {
        return res.status(422).json({
          message: 'url already exists',
          url: result
        });
      } else {
        const new_id = shortId.generate();
        const new_url = new Url({
          _id: new mongoose.Types.ObjectId(),
          base_url: req.body.base_url,
          long_url: req.body.long_url,
          short_id: new_id,
          date: Date().toString()
        });
        new_url
          .save()
          .then(final => {
            console.log(final);
            return res.status(200).json({
              message: 'new url successfully added',
              url: req.body.base_url + '/' + new_id,
              object: final
            });
          })
          .catch(err => {
            console.log(err);
            return res.status(500).json({
              error: err
            });
          });
      }
    });
});
router.get('/', (req, res, next) => {
  Url.find({})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'all urls fetched successfully',
        urls: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post('/custom/:custom_name', checkAuth, (req, res, next) => {
  Url.find({ short_id: req.params.custom_name })
    .exec()
    .then(url => {
      if (url.length >= 1) {
        return res.status(422).json({
          message: 'url already exists',
          url: url[0]
        });
      } else {
        const new_url = new Url({
          _id: new mongoose.Types.ObjectId(),
          long_url: req.body.long_url,
          base_url: req.body.base_url,
          short_id: req.params.custom_name
        });
        new_url
          .save()
          .then(result => {
            console.log(result);
            res.status(200).json({
              message: 'new url successfully added',
              url: result
            });
          })
          .catch(err => {
            console.log(err);
            return res.status(500).json({
              error: err
            });
          });
      }
    });
});

// router.delete('/', (req, res, next) => {
//   Url.remove({})
//     .exec()
//     .then(result => {
//       console.log('All data deleted');
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   Url_stats.remove({})
//     .exec()
//     .then(result => {
//       console.log('All stats deleted');
//     })
//     .catch(err => {
//       console.log(err);
//     });

//   res.status(200).send('All data removed successfully');
// });

module.exports = router;

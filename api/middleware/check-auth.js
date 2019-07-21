const express = require('express');
const axios = require('axios');
const request = require('request');

module.exports = (req, res, next) => {
  console.log('in check-auth');
  //   axios
  //     .post(
  //       'http://192.168.1.230:3000/admin/login',
  //       {
  //         username: 'roopamgarg',
  //         password: '9990765727'
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     )
  //     .then(result => {
  //       if (result.token.length > 0) {
  //         console.log(result.token);
  //         next();
  //       } else {
  //         return res.status(401).json({
  //           message: 'User details are invalid'
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       return res.status(401).json({
  //         message: 'Request failed'
  //       });
  //     });

  request.post(
    'http://192.168.1.230:3000/admin/login',
    {
      json: {
        username: 'roopamgarg',
        password: '9990765727'
      }
    },
    function(error, response, body) {
      if (!body.message) {
        // console.log(body);
        next();
      } else {
        // console.log(body);
        return res.status(404).json({
          error: 'Invalid user details'
        });
      }
    }
  );
};

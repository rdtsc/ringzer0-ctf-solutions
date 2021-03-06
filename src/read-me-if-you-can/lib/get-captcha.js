'use strict';

const get = require('../../../lib/solve');

module.exports = (callback) =>
{
  get('17', ($) =>
  {
    const src = $('.message > img').attr('src'),
          png = new Buffer(src.substr(src.indexOf(',') + 1), 'base64');

    return callback(png);
  });
};

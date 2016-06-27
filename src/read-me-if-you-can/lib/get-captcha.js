'use strict';

const solve = require('../../../lib/solve');

module.exports = (callback) =>
{
  solve('17', ($) =>
  {
    const src = $('.message > img').attr('src'),
          png = new Buffer(src.substr(src.indexOf(',') + 1), 'base64');

    const result = callback(png);

    if(typeof result === 'undefined') return;

    return result;
  });
};

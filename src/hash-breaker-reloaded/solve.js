#!/usr/bin/env node

'use strict';

const crypto = require('crypto');

const solve = require('../../lib/solve');

const sha1 =
  (message) => crypto.createHash('sha1').update(message).digest('hex');

solve('57', ($) =>
{
  const padding = /-+\s*(begin|end)\s+(hash|salt)\s*-+/ig;

  const [hash, salt] = $('.message').map((index, self) =>
  {
    return $(self).text().replace(padding, '').trim();
  }).toArray();

  for(var result = 0; sha1(result + salt) !== hash; ++result);

  return result;
});

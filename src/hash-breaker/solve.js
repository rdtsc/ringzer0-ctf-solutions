#!/usr/bin/env node

'use strict';

const crypto = require('crypto');

const solve = require('../../lib/solve');

const sha1 =
  (message) => crypto.createHash('sha1').update(message).digest('hex');

solve('56', ($) =>
{
  const padding = /-+\s*(begin|end)\s+hash\s*-+/ig;

  const hash = $('.message').text().replace(padding, '').trim();

  for(var result = 0; sha1(result.toString()) !== hash; ++result);

  return result;
});

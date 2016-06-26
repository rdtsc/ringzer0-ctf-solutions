#!/usr/bin/env node

'use strict';

const crypto = require('crypto');

const solve = require('../../lib/solve');

solve('14', ($) =>
{
  const padding = /-+\s*(begin|end)\s+message\s*-+/ig;

  const message = $('.message').text()
                               .replace(padding, '')
                               .trim()
                               .match(/.{8}/g)
                               .map(n => String.fromCharCode(parseInt(n, 2)))
                               .join('');

  return crypto.createHash('sha512').update(message).digest('hex');
});

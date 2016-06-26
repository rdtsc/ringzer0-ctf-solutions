#!/usr/bin/env node

'use strict';

const crypto = require('crypto');

const solve = require('../../lib/solve');

solve('13', ($) =>
{
  const padding = /-+\s*(begin|end)\s+message\s*-+/ig,
        message = $('.message').text().replace(padding, '').trim();

  return crypto.createHash('sha512').update(message).digest('hex');
}, code => console.log(code));

#!/usr/bin/env node

'use strict';

const hash = require('fnv1a');

const getCaptcha = require('./lib/get-captcha'),
      toAscii    = require('./lib/to-ascii'),
      segment    = require('./lib/segment');

const solve = require('../../lib/solve');

const config  = require('./config'),
      symbols = require('./symbols.json');

const decode = (symbol) => symbols[hash(symbol.join(''))];

getCaptcha((png) =>
{
  const captcha = toAscii(png, config.keyColor, config.mapping);

  return segment(captcha, config.mapping.background).map(decode).join('');
});

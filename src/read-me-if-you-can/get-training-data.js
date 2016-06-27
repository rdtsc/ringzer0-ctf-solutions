#!/usr/bin/env node

'use strict';

const fs     = require('fs'),
      assert = require('assert');

const async    = require('async'),
      uuid     = require('node-uuid'),
      Progress = require('progress');

const getCaptcha = require('./lib/get-captcha'),
      toAscii    = require('./lib/to-ascii');

const solve = require('../../lib/solve');

const config = require('./config');

assert(!isNaN(process.argv[2]) && (+process.argv[2] >= 0));

const targetSetSize = +process.argv[2];
let fetchCount = 0;

const progress = new Progress('[:bar] :percent :etas',
{
  complete: '=',
  incomplete: ' ',
  clear: true,
  width: 50,
  total: targetSetSize
});

async.whilst(() => (fetchCount++ < targetSetSize), (next) =>
{
  getCaptcha((png) =>
  {
    progress.tick();

    const ascii = toAscii(png, config.keyColor, config.mapping);

    const filename = `captcha-${uuid.v4()}`;

    fs.writeFileSync(`data/${filename}.png`, png, 'binary');
    fs.writeFileSync(`data/${filename}.txt`, ascii.join('\n'));

    next();
  });
});

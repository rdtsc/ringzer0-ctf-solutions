#!/usr/bin/env node

'use strict';

const fs = require('fs');

const solve = require('../../lib/solve');

solve('159', ($) =>
{
  const padding = /-+\s*(begin|end)\s+hash\s*-+/ig,
        hash    = $('.message').text().replace(padding, '').trim();

  const bucket = hash.substr(0, 4);

  const result = fs.readFileSync(`./buckets/${bucket}`, 'ascii')
                   .split('\n')
                   .find(entry => (bucket + entry.substr(0, 36) === hash))
                   .substr(36);

  return result;
});

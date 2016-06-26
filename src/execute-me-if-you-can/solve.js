#!/usr/bin/env node

'use strict';

const exec = require('child_process').execSync;

const solve = require('../../lib/solve');

const sha1 =
  (message) => crypto.createHash('sha1').update(message).digest('hex');

solve('121', ($) =>
{
  const padding = /-+\s*(begin|end)\s+shellcode\s*-+/ig,
        payload = $('.message').text().replace(padding, '').trim();

  // YOLO!
  return exec(`./exec.out '${payload}' 0>&1`);
});

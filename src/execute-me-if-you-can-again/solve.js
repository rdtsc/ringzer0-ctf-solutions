#!/usr/bin/env node

'use strict';

const exec = require('child_process').execSync;

const solve = require('../../lib/solve');

solve('125', ($) =>
{
  const padding = /-+\s*(begin|end)\s+shellcode\s*-+/ig;

  const payload = $('.message').text()
                               .replace(padding, '')
                               .trim()
                               .match(/..../g);

  return (() =>
  {
    [payload[0x01], payload[0x53]] = ['\\x50', '\\xab'];

    try
    {
      // YOLO!
      return exec(`./exec.out "${payload.join('')}"`);
    }

    catch(error)
    {
      return error.stdout;
    }
  })();
});

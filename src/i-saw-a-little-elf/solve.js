#!/usr/bin/env node

'use strict';

const fs     = require('fs'),
      exec   = require('child_process').execSync;

const solve = require('../../lib/solve');

const hookPath    = './hook.so',
      loaderPath  = '/lib64/ld-linux-x86-64.so.2',
      payloadPath = './payload.bin';

solve('15', ($) =>
{
  const padding = /-+\s*(begin|end)\s+(elf\s+message|checksum)\s*-+/ig;

  let [elf, checksum] = $('.message').map((index, self) =>
  {
    return $(self).text().replace(padding, '').trim();
  }).toArray();

  while(/^[a-z\d+/=]+$/i.test(elf))
  {
    elf = Buffer(elf, 'base64').toString('binary');
  }

  elf = Buffer(elf, 'binary').reverse();

  fs.writeFileSync(payloadPath, elf);

  // YOLO!
  const result = exec(`LD_PRELOAD=${hookPath} ${loaderPath} ${payloadPath}`);

  fs.unlink(payloadPath);

  return result;
});

#!/usr/bin/env node

'use strict';

const fs = require('fs');

const lineReader = require('readline').createInterface(
{
  input: fs.createReadStream('/usr/share/dict/words')
});

const dictionary = {};

lineReader.on('line', (line) =>
{
  if(/[^a-z]/i.test(line)) return;

  line = line.trim().toLowerCase();

  dictionary[line.split('').sort().join('')] = line;
});

lineReader.on('close', () =>
{
  const lut = JSON.stringify(dictionary, null, 2);

  fs.writeFileSync('./dictionary.json', lut);
});

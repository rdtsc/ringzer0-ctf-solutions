#!/usr/bin/env node

'use strict';

const fs     = require('fs'),
      assert = require('assert'),
      glob   = require('glob'),
      hash   = require('fnv1a'),
      ask    = require('readline-sync');

const segment = require('./lib/segment');

const config = require('./config');

const dictionary = {};

glob.sync('data/captcha-*.txt').forEach((file) =>
{
  const captcha = fs.readFileSync(file, 'ascii').split('\n');

  segment(captcha, config.mapping.background).forEach((symbol) =>
  {
    const key = hash(symbol.join(''));

    dictionary[key] =
    {
      pretty: symbol,
      value:  undefined
    };
  });
});

assert(Object.keys(dictionary).length == 62);

Object.keys(dictionary).forEach(function(key, index)
{
  const separator = '-'.repeat(this[key].pretty[0].length);

  const prompt =
  [
    '',
    separator,
    this[key].pretty.join('\n'),
    separator,
    `${index + 1} of ${Object.keys(this).length} -> `
  ].join('\n');

  this[key] = ask.question(prompt);
}, dictionary);

fs.writeFileSync('./symbols.json', JSON.stringify(dictionary, null, 2) + '\n');

#!/usr/bin/env node

'use strict';

const hash = require('fnv1a');

const solve = require('../../lib/solve');

const digits = (() =>
{
  const result = {},
        digits = require('./digits');

  digits.forEach((digit, value) =>
  {
    result[hash(digit.join('\n'))] = value;
  });

  return Object.freeze(result);
})();

solve('119', ($) =>
{
  const padding = /-+\s*(begin|end)\s+message\s*-+/ig,
        spaces  = /&#xA0;/ig,
        breaks  = /<\s*br\s*\\*>/ig,
        glyphs  = /(.*?\n){5}/g,
        tail    = /\s+$/;

  const message = $('.message').html()
                               .replace(padding, '')
                               .replace(spaces, ' ')
                               .replace(breaks, '\n')
                               .split('\n')
                               .filter(line => line.indexOf('x') !== -1)
                               .map(line => line.replace(tail, ''))
                               .join('\n') + '\n';

  const result = message.match(glyphs)
                        .map(digit => digit.replace(tail, ''))
                        .map(digit => digits[hash(digit)])
                        .join('');

  return result;
});

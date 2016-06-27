#!/usr/bin/env node

'use strict';

const solve = require('../../lib/solve');

const isLegible = (string) => /^[\x20-\x7E]+$/.test(string);

solve('16', ($) =>
{
  const padding = /-+\s*(begin|end)\s+(xor\s+key|crypted\s+message)\s*-+/ig;

  const [keyPool, encodedMessage] = $('.message').map((index, self) =>
  {
    return $(self).text().replace(padding, '').trim();
  }).toArray();

  const keyLength = 10,
        message   = new Buffer(encodedMessage, 'base64').toString();

  for(let i = 0; i <= (keyPool.length - keyLength); ++i)
  {
    const key = keyPool.substr(i, keyLength);

    const result = message.split('').map((char, index) =>
    {
      const lhs = char.charCodeAt(0),
            rhs = key.charCodeAt(index % keyLength);

      return String.fromCharCode(lhs ^ rhs);
    }).join('');

    if(isLegible(result)) return result;
  }
});

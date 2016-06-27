#!/usr/bin/env node

'use strict';

const solve = require('../../lib/solve');

const dictionary = Object.freeze(require('./dictionary'));

const toKey =
  (word) => word.trim().toLowerCase().split('').sort().join('');

(function attempt()
{
  const result = ($) =>
  {
    const padding = /-+\s*(begin|end)\s+words\s*-+/ig;

    const targetWordCount =
      1 + ($('.message').text().match(/,/g) || []).length;

    const words = $('.message').text()
                               .replace(padding, '')
                               .trim()
                               .split(',')
                               .map(word => dictionary[toKey(word)])
                               .filter(Boolean);

    if(words.length === targetWordCount) return words.join(',');

    else setTimeout(attempt, 1000);
  };

  solve('126', result);
})();

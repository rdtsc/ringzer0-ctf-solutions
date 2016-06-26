#!/usr/bin/env node

'use strict';

const solve = require('../../lib/solve');

solve('32', ($) =>
{
  const padding = /-+\s*(begin|end)\s+message\s*-+/ig,
        message = $('.message').text().replace(padding, '').trim();

  const expression = message.replace(/([-+*=\/])/g, '@$1@')
                            .split('@')
                            .slice(0, -2)
                            .map(token => token.trim())
                            .map(n => /^[01]+$/.test(n) ? `0b${n}` : n)
                            .join('')
                            .split('')
                            .filter(c => /^[-+=\/\da-fx]$/i.test(c))
                            .join('');

  return eval(expression);
});

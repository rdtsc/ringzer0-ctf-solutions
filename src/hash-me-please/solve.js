#!/usr/bin/env node

'use strict';

const assert = require('assert'),
      crypto = require('crypto');

const cheerio = require('cheerio'),
      request = require('request');

const get =
{
  uri: 'https://ringzer0team.com/challenges/13',
  method: 'GET',
  headers: {cookie: require('../../session')}
};

request(get, (error, response, body) =>
{
  assert(response.statusCode === 200);

  const $ = cheerio.load(body);

  const padding = /-+\s*(begin|end)\s+message\s*-+/ig,
        message = $('.message').text().replace(padding, '').trim();

  const solution = crypto.createHash('sha512').update(message).digest('hex');

  get.uri += `/${solution}`;

  request(get, (error, response, body) =>
  {
    assert(response.statusCode === 200);

    const $ = cheerio.load(body);

    const unlockCode =
      $('.challenge-wrapper > .alert-info:contains("FLAG")').text().trim();

    console.log(unlockCode);
  });
});

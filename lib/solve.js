'use strict';

const assert = require('assert');

const cheerio = require('cheerio'),
      request = require('request');

module.exports = (problemId, solve, respond) =>
{
  assert(solve instanceof Function);

  const get =
  {
    uri: `https://ringzer0team.com/challenges/${problemId}`,
    method: 'GET',
    headers: {cookie: require('../session')}
  };

  request(get, (error, response, body) =>
  {
    assert(response.statusCode === 200);

    const result = solve(cheerio.load(body));

    if(typeof result === 'undefined') return;

    get.uri += `/${result}`;

    request(get, (error, response, body) =>
    {
      assert(response.statusCode === 200);

      const $ = cheerio.load(body);

      const code = $('.challenge-wrapper > :contains("FLAG")').text().trim();

      if(respond instanceof Function) respond(code, $);

      else console.log(code);
    });
  });
};

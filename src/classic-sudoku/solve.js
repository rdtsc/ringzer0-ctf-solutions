#!/usr/bin/env node

'use strict';

const assert = require('assert'),
      spawn  = require('child_process').spawn,
      sudoku = require('sudoku-c');

const config = require('./config');

const commandLine =
[
  '-p',
  config.password,
  'ssh',
  '-tt',
  '-oStrictHostKeyChecking=no',
  '-oUserKnownHostsFile=/dev/null',
  `${config.username}@${config.host}`,
  '-p',
  config.port
];

((ssh) =>
{
  let prompt = '';

  ssh.stdout.on('data', (stdout) =>
  {
    prompt += stdout;

    if(/solution\s*:/i.test(prompt))
    {
      const grid = prompt.toString().match(/\+-(?:.|\n|\r|\r\n)*-\+/g)[0]
                                    .replace(/\s{3}/g, ' 0 ')
                                    .replace(/\D/g, ' ')
                                    .split(' ')
                                    .filter(cell => cell.length)
                                    .map(Number);

      prompt = '';
      assert(grid.length === 81);
      ssh.stdin.write(sudoku.solve(grid).join(',') + '\n');
    }

    else if(/flag-/i.test(prompt))
    {
      console.log(prompt.match(/(flag-.*)/i)[0].trim());
      process.exit();
    }
  });
})(spawn('sshpass', commandLine));

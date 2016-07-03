#!/usr/bin/env node

'use strict';

const spawn    = require('child_process').spawn,
      Progress = require('progress');

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

const progress = new Progress('[:bar] :percent :etas',
{
  complete: '=',
  incomplete: ' ',
  clear: true,
  width: 50,
  total: 10
});

((ssh) =>
{
  const upperBound = (1 << 15);

  let [lo, hi] = [0, upperBound];

  const getGuess  = () => (lo + ((hi - lo) & 1) + ((hi - lo) >> 1)),
        makeGuess = () => ssh.stdin.write(`${getGuess()}\n`);

  ssh.stdout.on('data', (stdout) =>
  {
    const output = stdout.toString();

    if(/find\s+the\s+right/i.test(output)) makeGuess();

    else if(/too\s+big/i.test(output))
    {
      hi = (getGuess() - 1);
      makeGuess();
    }

    else if(/too\s+small/i.test(output))
    {
      lo = (getGuess() + 1);
      makeGuess();
    }

    else if(/you\s+got/i.test(output))
    {
      progress.tick();

      if(/you\s+beat/i.test(output))
      {
        console.log(output.match(/(flag-.*)/i)[0].trim());
        process.exit();
      }

      else
      {
        [lo, hi] = [0, upperBound];
        makeGuess();
      }
    }
  });
})(spawn('sshpass', commandLine));

# RingZer0 Programming CTF Solutions

This repository houses my personal solutions to
[RingZer0's programming challenges][home].

It is strongly encouraged that you do not view my solutions unless you've
already solved the relevant problems yourself.


## Background

Each challenge consists of some (typically non-static) dataset that must be
processed according to the problem statement and submitted back to the specified
URI via a `GET` request. Assuming a correct and timely submission, a level
unlock flag is injected into the server's response which then must be extracted
and `POST`-ed back to the challenge endpoint in question.

Most challenges have a dataset/solution TTL of a few seconds, so performance
isn't that important.


## Development Environment

- Linux
- Node.js >= v6.2.2


## License and Copyright

All original code is released under the [MIT license][mit], unless otherwise
specified.

All referenced product names, trademarks, and logos are property of their
respective owners.


[home]: https://ringzer0team.com/challenges/
        "Challenges - RingZer0 CTF"

[mit]: http://opensource.org/licenses/MIT/
       "The MIT License (MIT)"

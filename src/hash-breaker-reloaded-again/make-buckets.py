#!/usr/bin/env python

import hashlib
import itertools
import locale
import string

locale.setlocale(locale.LC_ALL, '')

pool  = string.ascii_lowercase + string.digits
width = 6

buckets = \
{
  '{0:04x}'.format(i): None for i in range(0xFFFF + 1)
}

for bucket in buckets:
  buckets[bucket] = open('./buckets/' + bucket, 'w')

index = 0

for string in itertools.product(pool, repeat=width):
  value  = ''.join(string)
  digest = hashlib.sha1(value.encode('ascii')).hexdigest()

  bucket  = digest[:4]
  payload = digest[4:]

  print(payload, value, sep='', file=buckets[bucket])

  index += 1

  if not (index % 100000):
    print(locale.format('%u', index, grouping=True))

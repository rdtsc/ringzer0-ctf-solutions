#!/bin/sh

[ -d buckets ] || mkdir buckets
sudo sh -c "ulimit -n 99999 && python ./make-buckets.py"

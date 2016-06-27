#!/bin/sh

[ -d data ] || mkdir data
node ./get-training-data.js 192

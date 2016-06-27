'use strict';

const PNG = require('pngjs').PNG;

module.exports = (png, keyColor, mapping) =>
{
  const defaultMapping = {key: '#', background: ' '};

  mapping = (typeof mapping === 'undefined') ? defaultMapping : mapping;

  const result = [];

  png = PNG.sync.read(png);

  for(let y = 0; y < png.height; ++y)
  {
    const row = [];

    for(let x = 0; x < png.width; ++x)
    {
      const i = (png.width * y + x) << 2;

      const isKey = png.data[i + 0] === keyColor.r &&
                    png.data[i + 1] === keyColor.g &&
                    png.data[i + 2] === keyColor.b;

      row.push(isKey ? mapping.key : mapping.background);
    }

    result.push(row.join(''));
  }

  return result;
};

'use strict';

module.exports = (cells, background) =>
{
  background = (typeof background === 'undefined') ? ' ' : background;

  cells = trimVertical(cells);

  const symbolBounds = getBounds(cells, background);

  for(var result = []; result.push([]) < symbolBounds.length;);

  cells.forEach((row) =>
  {
    symbolBounds.forEach((bounds, index) =>
    {
      result[index].push(row.substring(bounds[0], bounds[1] + 1));
    });
  });

  result = result.map((symbol) => trimVertical(symbol));

  return result;
}

function trimVertical(cells)
{
  for(let i = 0; i < cells.length; ++i)
  {
    if(/^\s+$/.test(cells[i])) cells.splice(i--, 1);

    else break;
  }

  for(let i = cells.length - 1; i >= 0; --i)
  {
    if(/^\s+$/.test(cells[i])) cells.splice(i, 1);

    else break;
  }

  return cells;
}

function getBounds(cells, background)
{
  let result = [];

  const width  = cells[0].length,
        height = cells.length;

  let lastColumn = 0;

  for(let x = 0; x < width; ++x)
  {
    let isEmptyColumn = true;

    for(let y = 0; y < height; ++y)
    {
      if(cells[y][x] != background)
      {
        isEmptyColumn = false;
        break;
      }
    }

    if(!isEmptyColumn)
    {
      result.push(x);
      lastColumn = x;
    }
  }

  result = result.filter((value, index, source) =>
  {
    if(!index) return true;
    if((source[index + 1] - value) > 1) return true;
    if((value - source[index - 1] > 1)) return true;

    return false;
  });

  result.push(lastColumn);

  result = result.reduce((result, value, index, source) =>
  {
    if(!(index & 1)) result.push(source.slice(index, index + 2));

    return result;
  }, []);

  return result;
}

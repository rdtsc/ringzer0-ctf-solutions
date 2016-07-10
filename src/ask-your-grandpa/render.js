(() =>
{
  const imageWidth = 1600;

  const xOffsets =
  [
    55, 75, 94, 112, 131, 152, 169, 188, 207, 226, 244, 265, 282, 302, 321,
    339, 358, 376, 396, 415, 433, 452, 470, 490, 508, 527, 546, 564, 583,
    603, 621, 640, 659, 677, 696, 715, 734, 753, 772, 789, 810, 829, 846,
    865, 884, 903, 921, 940, 961, 979, 995, 1016, 1035, 1056, 1072, 1094,
    1112, 1131, 1150, 1170, 1187, 1207, 1227, 1244, 1264, 1281, 1300, 1320,
    1338, 1358, 1376, 1396, 1413, 1430, 1450, 1469, 1489, 1505, 1525, 1544
  ];

  const yOffsets =
  [
    61, 116, 168, 223, 277, 330, 387, 439, 496, 549, 604, 658
  ];

  const mapping =
  {
    '0'    : '0',
    '1'    : '1',
    '2'    : '2',
    '3'    : '3',
    '4'    : '4',
    '5'    : '5',
    '6'    : '6',
    '7'    : '7',
    '8'    : '8',
    '9'    : '9',
    'y,1'  : 'A',
    'y,2'  : 'B',
    'y,3'  : 'C',
    'y,4'  : 'D',
    'y,5'  : 'E',
    'y,6'  : 'F',
    'y,7'  : 'G',
    'y,8'  : 'H',
    'y,9'  : 'I',
    'x,1'  : 'J',
    'x,2'  : 'K',
    'x,3'  : 'L',
    'x,4'  : 'M',
    'x,5'  : 'N',
    'x,6'  : 'O',
    'x,7'  : 'P',
    'x,8'  : 'Q',
    'x,9'  : 'R',
    '0,2'  : 'S',
    '0,3'  : 'T',
    '0,4'  : 'U',
    '0,5'  : 'V',
    '0,6'  : 'W',
    '0,7'  : 'X',
    '0,8'  : 'Y',
    '0,9'  : 'Z',
    '3,8'  : '#',
    '0,3,8': ',',
    'x,3,8': '$',
    'y,3,8': '.',
    'x'    : '-',
    '4,8'  : '@',
    '0,4,8': '%',
    'x,4,8': '*',
    'y,x,8': '<',
    '0,1'  : '/',
    'y,6,8': '+',
    '6,8'  : '=',
    '0,5,8': '_',
    'x,5,8': ')',
    'y'    : '&',
    '0,6,8': '>',
    '2,8'  : ':',
    'x,6,8': ';',
    '5,8'  : "'",
    '0,7,8': '?',
    '7,8'  : '"',
    'x,2,8': '!',
    'y,5,8': '(',
    '0,3,8': ','
  };

  function initializeCanvas(canvas, context, image, width)
  {
    canvas.width = width;
    canvas.height = (canvas.width / image.width) * image.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  function drawCircle(context, x, y, radius, color)
  {
    context.save();
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  }

  document.addEventListener('DOMContentLoaded', () =>
  {
    const canvas  = document.querySelector('#viewport'),
          context = canvas.getContext('2d');

    const background = new Image();

    background.src = './data/card.jpg';

    background.onload = () =>
    {
      initializeCanvas(canvas, context, background, imageWidth);

      const log = document.querySelector('#log');

      xOffsets.forEach((x, i) =>
      {
        const pattern = [];

        yOffsets.forEach((y, j) =>
        {
          drawCircle(context, x, y, 3, 'rgba(255, 255, 0, 0.4)');

          const rgba = context.getImageData(x, y, 1, 1).data;

          if(rgba[0] === 0x66 && rgba[1] === 0x66 && !rgba[2])
          {
            drawCircle(context, x, y, 5, '#f00');

            pattern.push(j < 2 ? ['y', 'x'][j] : (j - 2));
          }
        });

        if(pattern.length) log.innerText += mapping[pattern.join(',')];
      });
    };
  });
})();

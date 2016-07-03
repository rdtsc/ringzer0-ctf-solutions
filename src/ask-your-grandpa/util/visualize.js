(() =>
{
  function initializeCanvas(canvas, context, image, width)
  {
    canvas.width = width;
    canvas.height = (canvas.width / image.width) * image.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  function verticalHelper(canvas, context)
  {
    const xOffset = canvas.getBoundingClientRect().left;

    let i = 0;

    canvas.addEventListener('click', (event) =>
    {
      context.save();
      context.lineWidth = 1;
      context.strokeStyle = '#f00';

      const x = (event.layerX - xOffset);

      console.log(++i, x);

      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
      context.restore();
    });
  }

  function horizontalHelper(canvas, context)
  {
    const yOffset = canvas.getBoundingClientRect().top;

    let i = 0;

    canvas.addEventListener('click', (event) =>
    {
      context.save();
      context.lineWidth = 1;
      context.strokeStyle = '#f00';

      const y = (event.layerY - yOffset);

      console.log(++i, y);

      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
      context.restore();
    });
  }

  document.addEventListener('DOMContentLoaded', () =>
  {
    const canvas  = document.querySelector('#viewport'),
          context = canvas.getContext('2d');

    const background = new Image();

    background.src = '../data/card.jpg';

    background.onload = () =>
    {
      initializeCanvas(canvas, context, background, 1600);

      horizontalHelper(canvas, context);
      // verticalHelper(canvas, context);
    };
  });
})();

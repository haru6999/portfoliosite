(function () {

  var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

  function init() {
    canvas = document.getElementById("sineCanvas-top");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 100;
    context = canvas.getContext("2d");
    canvas2 = document.getElementById("sineCanvas-bottom");
    canvas2.width = document.documentElement.clientWidth;
    canvas2.height = 100;
    context2 = canvas2.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height/2);
    yAxis = 0;
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    drawWaveTop('#E0F1FC', 1, 3, 0);
    drawWaveTop('#25324D', 1, 2, 250);
    drawWaveTop('#5C7DBF', 1, 1.6, 100);
    context2.clearRect(0, 0, width, height);
    drawWaveBottom('#25324D', 1, 2, 250);
    drawWaveBottom('#5C7DBF', 1, 1.6, 100);
    draw.seconds = draw.seconds + .014;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
  };

  draw.seconds = 0;
  draw.t = 0;

  function drawWaveTop(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 1.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }

  function drawWaveBottom(color, alpha, zoom, delay) {
    context2.fillStyle = color;
    context2.globalAlpha = alpha;
    context2.beginPath();
    drawSine(draw.t / 1.5, zoom, delay);
    context2.lineTo(width + 10, 0);
    context2.lineTo(0, 0);
    context2.closePath();
    context2.fill();
  }

  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis);
    context2.moveTo(yAxis, unit*y+xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t+(-yAxis+i)/unit/zoom;
      y = Math.sin(x - delay)/3;
      context.lineTo(i, unit*y+xAxis);
      context2.lineTo(i, unit*y+xAxis);
    }
  }
  init();
  })();
'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var STEP_CLOUD = 10;
var COL_WIDTH = 40;
var COL_HEIGHT = 150;
var COL_STEP = 50;
var COL_WIDT_AND_STEP = 90;
var CLOUD_X_AND_STEP = 150;
var COLOR_STYLE = '#000';
var COLOR_STYLE_MY = 'rgba(255, 0, 0, 1)';
var FONT_STYLE_SIZE = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getColor = function () {
  return 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
};

var maxElement = function (arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

var headText = function (ctx) {
  ctx.fillStyle = COLOR_STYLE;
  ctx.font = FONT_STYLE_SIZE;
  ctx.fillText('Ура вы победили!', CLOUD_X + STEP_CLOUD + STEP_CLOUD, COL_STEP - STEP_CLOUD);
  ctx.fillText('Список результатов:', CLOUD_X + STEP_CLOUD + STEP_CLOUD, COL_STEP + STEP_CLOUD);
};

var paintCloud = function (ctx) {
  renderCloud(ctx, CLOUD_X + STEP_CLOUD, CLOUD_Y + STEP_CLOUD, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
};

window.renderStatistics = function (ctx, names, times) {
  paintCloud(ctx);

  headText(ctx);

  var maxTime = maxElement(times);

  var renderPlayerStat = function (item, index) {
    ctx.fillStyle = COLOR_STYLE;
    ctx.fillText(item, CLOUD_X_AND_STEP + COL_WIDT_AND_STEP * index, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[index]), CLOUD_X_AND_STEP + COL_WIDT_AND_STEP * index, CLOUD_HEIGHT - STEP_CLOUD - STEP_CLOUD - COL_HEIGHT * times[index] / maxTime - STEP_CLOUD);

    ctx.fillStyle = item === 'Вы' ? COLOR_STYLE_MY : getColor();
    ctx.fillRect(CLOUD_X_AND_STEP + COL_WIDT_AND_STEP * index, CLOUD_HEIGHT - STEP_CLOUD - STEP_CLOUD, COL_WIDTH, -COL_HEIGHT * times[index] / maxTime);
  };

  names.forEach(renderPlayerStat);
};

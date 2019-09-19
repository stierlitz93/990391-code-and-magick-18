"use strict";

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const STEP_CLOUD = 10;
const COL_WIDTH = 40;
const COL_HEIGHT = 150;
const COL_STEP = 50;

var renderCloud = function(ctx, x, y, color)  {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var maxElement = function(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};


window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, CLOUD_X + STEP_CLOUD, CLOUD_Y + STEP_CLOUD, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  var maxTime = maxElement(times);

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 120, 40);
  ctx.fillText("Список результатов:", 120, 60);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = "#000";
    ctx.fillText(names[i], CLOUD_X + COL_STEP + (COL_WIDTH + COL_STEP) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COL_STEP + (COL_WIDTH + COL_STEP) * i, CLOUD_HEIGHT - STEP_CLOUD - STEP_CLOUD - COL_HEIGHT * times[i] / maxTime - STEP_CLOUD);
    if(names[i] == "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      var saturation = Math.random() * 100;
      ctx.fillStyle = "hsl(240, "+saturation+"%, 50%)";
    }
    ctx.fillRect(CLOUD_X + COL_STEP + (COL_WIDTH + COL_STEP) * i, CLOUD_HEIGHT - STEP_CLOUD - STEP_CLOUD, COL_WIDTH, - COL_HEIGHT * times[i] / maxTime);

  }

};

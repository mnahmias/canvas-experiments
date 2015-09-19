var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

context.font = "italic 50px Georgia,sans-serif";
context.fillStyle = "#ee8833";
context.fillText('beep', 100, 100);
context.strokeStyle = "#ff33aa";
context.strokeText("boop", 100, 200);

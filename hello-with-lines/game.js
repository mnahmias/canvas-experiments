var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

canvas.width = 800;
canvas.width = 400;

context.beginPath();

context.moveTo(10,10);
context.lineTo(10,30);

context.moveTo(10,20);
context.lineTo(20,20);

context.moveTo(20,10);
context.lineTo(20,30);

context.moveTo(30,11);
context.lineTo(30,29);

context.moveTo(25,29);
context.lineTo(35,29);

context.moveTo(25,11);
context.lineTo(35,11);

context.strokeStyle = '#ff0000';
context.lineWidth = 3;
context.lineCap = 'butt';
context.stroke();

// Create variables for the canvas and context
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Create variables for box loop - box from constructor, empty boxes array, totalBoxes you want to render
var box = new Box();
var boxes = [];
var totalBoxes = 100;

//Set canvas height and width
canvas.height = 1080;
canvas.width = 1920;

//Create boxes using for loop
for(var i=0; totalBoxes > i; i++){
  boxes[i] = new Box();
  boxes[i].color = randomColor(0, 255, 0, 255, 0, 255, .4);
}

//Build Box constructor function. Each box should have x, y, width, and height
function Box(){
  this.x = 10;
  this.y = 10;
  this.width = 100;
  this.height = 100;
}

//Build update function that uses a foreach to update the x and y of each box in boxes array using the randomNumber function
function update(){
  boxes.forEach(function(box,i){
    box.x += randomNumber(-5, 5);
    box.y += randomNumber(-5, 5);
  });
}

// Build draw function that clears all rectangles from the context, then uses fillStyle and fillRect to draw a rectangle for each box in boxes
function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  boxes.forEach(function(box, i){
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
  });
}

//Build the loop function. It should call the update and draw functions, and then, using requestAnimationFrame, call itself.
function loop(){
  update();
  draw();
  window.requestAnimationFrame(loop);
}

// build a randomNumber function that takes a min and max argument and returns an integer
function randomNumber(min, max){
  return Math.round(Math.random() * (max - min + 1) + min);
}

// build a randomColor function that takes min and max arguments for r,g, and b, and alpha arguments and returns an rgba value as a string
function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
  var r = randomNumber(rmin,rmax);
  var g = randomNumber(gmin,gmax);
  var b = randomNumber(bmin,bmax);
  return 'rgba('+r+','+g+','+b+','+alpha+')';
}

// Call the loop function
loop();

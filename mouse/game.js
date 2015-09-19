// Create variables for the canvas and context
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//Create variables for box loop - box from constructor, empty boxes array, drawing boolean
var boxes = [];
var boxSize = 10;
var drawing = false;

//Set canvas height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Build Box constructor function. Each box should have x, y, width, and height
function Box (options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.color = options.color || '#000000'
}

//Create event listener for mousedown
document.addEventListener('mousedown', function(e){
  drawing = true;
});

//Create event listener for mouseup
document.addEventListener('mouseup',function(e){
  drawing = false;
});

//Create event listener for mousemove
document.addEventListener('mousemove', function(e){
  if(drawing === true){
    boxes[boxes.length] = new Box({
      x: e.clientX - boxSize/2,
      y: e.clientY - boxSize/2,
      width: boxSize,
      height: boxSize,
      color: randomColor(100, 255, 0, 0, 0, 255, .5)
    });
  }
})


//Build update function
function update(){

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

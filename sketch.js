const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var bgImg, bottleImg;


var bottles = [
  { x: 300, y: 280},
  { x: 400, y: 280 },
  { x: 500, y: 280 },

];

function preload() {
  bgImg = loadImage("bg.png");
  bottleImg = loadImage("bottle.png");
}

function setup() {
  createCanvas(950, 470);
  engine = Engine.create();
  world = engine.world;

  

  }

function draw() {
  background(bgImg);

  
  handleBottles();
   
}


function handleBottles() {
  addBottles();
  for (let i = 0; i < bottles.length; i++) {
      drawBottles(i);
      // Move the bottles to the left

      
      if (bottles[i].x < 300) {
        bottles.shift();
      }
  }
}


function drawBottles(i) {
  push();
  imageMode(CENTER);
  image(bottleImg, bottles[i].x, bottles[i].y, 100, 100);
  pop();
}

function addBottles() {
  if (bottles.length < 4) {
  // push new bottles into the array.   
    
  }
}



var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine

var engine;
var world;
var boxes =[];

function setup() {
  // put setup code here
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 10, option);
  for (var i=0; i < 200; i++) {
      boxes.push(new Box(random(0,width-50,), random(0,height-50,), 20, 20))
    }
  World.add(world, ground);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, 20, 20))
}

function draw() {
  background(51);
  for (var i=0; i < boxes.length; i++) {
      boxes[i].show();
    }
}

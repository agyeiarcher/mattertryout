Matter.use(
  'matter-attractors' // PLUGIN_NAME
);

var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Runner = Matter.Runner,
    Body = Matter.Body,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

var engine;
var world;
var boxes =[];
var runner;
var gravityValue = 1;
var ground;
var topwall;

function cascade(){
  if (0<frameCount < 90) {
    if (gravityValue > 0) {
      if (frameCount % 5 == 0) {
        gravityValue = gravityValue-0.5
      }
    }
  }
  if (frameCount >60 ) {
    gravityValue = -0.0001;
  }

  return(gravityValue)
}

function setup() {
  // put setup code here
  createCanvas(900, 600);
  engine = Engine.create();
  runner =  Runner.create();
  Runner.run(runner, engine);
  world = engine.world;
  Engine.run(engine);

  var option = {
    isStatic: true
  };

  for (i = 0; i<220; i++){
      boxes.push(new Box(random(452, 448), random(0,-100), 20, random(0.5, 1.5)));
    };

  ground = new Floor(width/2, height, width, 40);
  walleft =  new Floor(0, height/2, 10, height);
  wallright =  new Floor(width, height/2, 10, height);

}

function draw() {
  frameRate(60);
  Engine.update(engine);
  background(0);
  cascade();
  this.world.gravity.y=gravityValue;

  // if (frameCount<120) {
  //     boxes.push(new Box(random(198, 202), random(0,height/2,), 15, 1));
  //   };

  // console.log(counter)
  for (var i=0; i < boxes.length; i++) {
      boxes[i].show();
  }
  ground.show();
  walleft.show();
  wallright.show();
  if (frameCount >30) {
    noFill();
  // if (boxes.length<300){
  //   boxes.push(new Box(random(198, 202), random(0,height/2,), 10, 1));
  // }
  topwall =  new Floor(width/2, 0, width, 10);
  topwall.show();
}
}

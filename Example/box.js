sea=["H", "E", "L", "L", "O"]

var timeScaleTarget = 1;

const btn = document.querySelector('button'),
  chunks = [];


function Box(x, y, r, massval) {
  let seachoice = random(sea);

  var options = {
    // timeScale: 1,
    frictionAir:0.01,
    friction: 0.0001,
    restitution: 0.9,
    density:massval,
    // density:10,
    // mass:20
  //   plugin: {
  //   attractors: [
  //     function(bodyA, bodyB) {
  //       return {
  //         x: (bodyA.position.x - bodyB.position.x) * 1e-6,
  //         y: (bodyA.position.y - bodyB.position.y) * 1e-6,
  //         };
  //       }
  //     ]
  //   },
  }

  this.x = x;
  this.y = y;
  this.r = r;

  this.body = Bodies.circle(x, y, r, options);

  World.add(world, this.body);

  this.show = function() {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(position.x, position.y);
    rotate(angle);
    textSize(20);
    rectMode(CENTER);
    fill(255);
    text(seachoice,0,0, 20, 20);
    pop();
  };

}
